#!/usr/bin/env python3
import json
import re
from pathlib import Path


PROJECT = Path("project.json")
OUT = Path("mindplus_converted.ts")


def safe_ident(name: str, used: set[str]) -> str:
    base = re.sub(r"\W+", "_", name, flags=re.UNICODE).strip("_")
    if not base:
        base = "unnamed"
    if re.match(r"^\d", base):
        base = "_" + base
    candidate = base
    i = 2
    while candidate in used:
        candidate = f"{base}_{i}"
        i += 1
    used.add(candidate)
    return candidate


def q(value):
    return json.dumps(value, ensure_ascii=False)


def field(block, name, default=""):
    value = block.get("fields", {}).get(name)
    if isinstance(value, list) and value:
        return value[0]
    if isinstance(value, dict):
        return value.get("value", default)
    return default


class Converter:
    def __init__(self, project):
        self.project = project
        self.page = project[f"page{project.get('pageIndex', 0)}"]
        self.var_names = {}
        self.list_names = {}
        self.used_methods = set()
        self.proc_methods = {}

        stage = next(t for t in self.page["targets"] if t.get("isStage"))
        for var_id, value in stage.get("variables", {}).items():
            self.var_names[var_id] = value[0]
        for list_id, value in stage.get("lists", {}).items():
            self.list_names[list_id] = value[0]

    def input_expr(self, blocks, block, name):
        raw = block.get("inputs", {}).get(name)
        return self.raw_input_expr(blocks, raw)

    def raw_input_expr(self, blocks, raw):
        if raw is None:
            return "undefined"
        if isinstance(raw, list):
            if len(raw) >= 2:
                primary = raw[1]
                if isinstance(primary, str) and primary in blocks:
                    return self.expr(blocks, primary)
                if isinstance(primary, list):
                    return self.shadow_expr(primary)
            if len(raw) >= 3:
                fallback = raw[2]
                if isinstance(fallback, str) and fallback in blocks:
                    return self.expr(blocks, fallback)
                if isinstance(fallback, list):
                    return self.shadow_expr(fallback)
        return q(raw)

    def shadow_expr(self, value):
        if not isinstance(value, list):
            return q(value)
        kind = value[0] if value else None
        if kind in (4, 5, 6, 7, 8):
            return str(value[1]) if len(value) > 1 and str(value[1]) != "" else "0"
        if kind in (9, 10, 11):
            return q(value[1] if len(value) > 1 else "")
        if kind == 12:
            var_id = value[2] if len(value) > 2 else ""
            return f"this.var({q(self.var_names.get(var_id, value[1] if len(value) > 1 else var_id))})"
        if kind == 13:
            list_id = value[2] if len(value) > 2 else ""
            return f"this.list({q(self.list_names.get(list_id, value[1] if len(value) > 1 else list_id))})"
        return q(value[1] if len(value) > 1 else value)

    def expr(self, blocks, block_id):
        block = blocks.get(block_id)
        if not block:
            return "undefined"
        op = block.get("opcode")
        i = lambda n: self.input_expr(blocks, block, n)
        f = lambda n, d="": field(block, n, d)

        numeric_binary = {
            "operator_add": "+",
            "operator_subtract": "-",
            "operator_multiply": "*",
            "operator_divide": "/",
            "operator_mod": "%",
        }
        if op in numeric_binary:
            return f"({i('NUM1')} {numeric_binary[op]} {i('NUM2')})"
        compare_binary = {
            "operator_equals": "===",
            "operator_gt": ">",
            "operator_lt": "<",
            "operator_and": "&&",
            "operator_or": "||",
        }
        if op in compare_binary:
            return f"({i('OPERAND1')} {compare_binary[op]} {i('OPERAND2')})"
        if op == "operator_not":
            return f"(!{i('OPERAND')})"
        if op == "operator_join":
            return f"String({i('STRING1')}) + String({i('STRING2')})"
        if op == "operator_contains":
            return f"String({i('STRING1')}).includes(String({i('STRING2')}))"
        if op == "operator_letter_of":
            return f"String({i('STRING')}).charAt(Number({i('LETTER')}) - 1)"
        if op == "operator_round":
            return f"Math.round(Number({i('NUM')}))"
        if op == "operator_random":
            return f"this.random({i('FROM')}, {i('TO')})"
        if op == "operator_mathop":
            return f"this.mathOp({q(f('OPERATOR'))}, {i('NUM')})"
        if op == "data_variable":
            return f"this.var({q(f('VARIABLE'))})"
        if op == "data_listcontents":
            return f"this.list({q(f('LIST'))})"
        if op == "data_itemoflist":
            return f"this.itemOfList({q(f('LIST'))}, {i('INDEX')})"
        if op == "data_itemnumoflist":
            return f"this.itemNumOfList({q(f('LIST'))}, {i('ITEM')})"
        if op == "data_lengthoflist":
            return f"this.list({q(f('LIST'))}).length"
        if op == "data_listcontainsitem":
            return f"this.list({q(f('LIST'))}).includes({i('ITEM')})"
        if op == "sensing_keypressed":
            return f"this.keyPressed({self.input_expr(blocks, block, 'KEY_OPTION')})"
        if op == "sensing_mousedown":
            return "this.mouseDown()"
        if op == "sensing_mousex":
            return "this.mouseX"
        if op == "sensing_mousey":
            return "this.mouseY"
        if op == "sensing_answer":
            return "this.answer"
        if op == "sensing_touchingobject":
            return f"this.touching(this.sprite, {self.input_expr(blocks, block, 'TOUCHINGOBJECTMENU')})"
        if op == "sensing_distanceto":
            return f"this.distanceTo(this.sprite, {self.input_expr(blocks, block, 'DISTANCETOMENU')})"
        if op == "sensing_of":
            return f"this.sensingOf({q(f('PROPERTY'))}, {self.input_expr(blocks, block, 'OBJECT')})"
        if op == "looks_costumenumbername":
            return f"this.costumeValue(this.sprite, {q(f('NUMBER_NAME'))})"
        if op == "looks_backdropnumbername":
            return f"this.backdropValue({q(f('NUMBER_NAME'))})"
        if op == "looks_size":
            return "this.sprite.size"
        if op == "motion_xposition":
            return "this.sprite.x"
        if op == "motion_yposition":
            return "this.sprite.y"
        if op == "motion_direction":
            return "this.sprite.direction"
        if op in ("looks_costume", "looks_backdrops", "sound_sounds_menu", "motion_goto_menu", "motion_glideto_menu", "motion_pointtowards_menu", "sensing_keyoptions", "sensing_touchingobjectmenu", "sensing_distancetomenu", "sensing_of_object_menu", "control_create_clone_of_menu", "pen.menu.colorParam"):
            return q(next(iter(block.get("fields", {}).values()))[0])
        return f"this.value({q(op)}, {q(block.get('inputs', {}))}, {q(block.get('fields', {}))})"

    def block_lines(self, target, block_id, indent=4):
        blocks = target.get("blocks", {})
        out = []
        current = block_id
        pad = " " * indent
        while current:
            block = blocks.get(current)
            if not block:
                out.append(f"{pad}// missing block {q(current)}")
                break
            out.extend(self.statement(target, current, indent))
            current = block.get("next")
        return out

    def substack(self, target, block, name, indent):
        raw = block.get("inputs", {}).get(name)
        block_id = raw[1] if isinstance(raw, list) and len(raw) > 1 and isinstance(raw[1], str) else None
        if not block_id:
            return [" " * indent + "// empty"]
        return self.block_lines(target, block_id, indent)

    def statement(self, target, block_id, indent):
        blocks = target.get("blocks", {})
        block = blocks[block_id]
        op = block.get("opcode")
        pad = " " * indent
        i = lambda n: self.input_expr(blocks, block, n)
        f = lambda n, d="": field(block, n, d)
        out = []

        if op.startswith("event_") or op in ("procedures_definition", "procedures_prototype"):
            return out
        if op == "control_forever":
            out.append(f"{pad}while (true) {{")
            out.extend(self.substack(target, block, "SUBSTACK", indent + 2))
            out.append(f"{pad}  await this.yieldFrame();")
            out.append(f"{pad}}}")
        elif op == "control_repeat":
            out.append(f"{pad}for (let i = 0, n = Number({i('TIMES')}); i < n; i++) {{")
            out.extend(self.substack(target, block, "SUBSTACK", indent + 2))
            out.append(f"{pad}  await this.yieldFrame();")
            out.append(f"{pad}}}")
        elif op == "control_repeat_until":
            out.append(f"{pad}while (!({i('CONDITION')})) {{")
            out.extend(self.substack(target, block, "SUBSTACK", indent + 2))
            out.append(f"{pad}  await this.yieldFrame();")
            out.append(f"{pad}}}")
        elif op == "control_loop":
            out.append(f"{pad}while (true) {{")
            out.extend(self.substack(target, block, "SUBSTACK", indent + 2))
            out.append(f"{pad}  await this.yieldFrame();")
            out.append(f"{pad}}}")
        elif op == "control_if":
            out.append(f"{pad}if ({i('CONDITION')}) {{")
            out.extend(self.substack(target, block, "SUBSTACK", indent + 2))
            out.append(f"{pad}}}")
        elif op in ("control_if_else", "control_if_else_special"):
            out.append(f"{pad}if ({i('CONDITION')}) {{")
            out.extend(self.substack(target, block, "SUBSTACK", indent + 2))
            out.append(f"{pad}}} else {{")
            out.extend(self.substack(target, block, "SUBSTACK2", indent + 2))
            out.append(f"{pad}}}")
        elif op == "control_wait":
            out.append(f"{pad}await this.wait({i('DURATION')});")
        elif op == "control_wait_until":
            out.append(f"{pad}while (!({i('CONDITION')})) await this.yieldFrame();")
        elif op == "control_stop":
            out.append(f"{pad}return; // stop {q(f('STOP_OPTION'))}")
        elif op == "control_create_clone_of":
            out.append(f"{pad}this.createClone({i('CLONE_OPTION')});")
        elif op == "control_delete_this_clone":
            out.append(f"{pad}this.deleteThisClone(this.sprite); return;")
        elif op == "data_setvariableto":
            out.append(f"{pad}this.setVar({q(f('VARIABLE'))}, {i('VALUE')});")
        elif op == "data_changevariableby":
            out.append(f"{pad}this.changeVar({q(f('VARIABLE'))}, {i('VALUE')});")
        elif op == "data_showvariable":
            out.append(f"{pad}this.showVariable({q(f('VARIABLE'))});")
        elif op == "data_hidevariable":
            out.append(f"{pad}this.hideVariable({q(f('VARIABLE'))});")
        elif op == "data_addtolist":
            out.append(f"{pad}this.list({q(f('LIST'))}).push({i('ITEM')});")
        elif op == "data_deleteoflist":
            out.append(f"{pad}this.deleteOfList({q(f('LIST'))}, {i('INDEX')});")
        elif op == "data_deletealloflist":
            out.append(f"{pad}this.list({q(f('LIST'))}).length = 0;")
        elif op == "data_showlist":
            out.append(f"{pad}this.showList({q(f('LIST'))});")
        elif op == "data_hidelist":
            out.append(f"{pad}this.hideList({q(f('LIST'))});")
        elif op == "motion_movesteps":
            out.append(f"{pad}this.moveSteps(this.sprite, {i('STEPS')});")
        elif op == "motion_turnright":
            out.append(f"{pad}this.turnRight(this.sprite, {i('DEGREES')});")
        elif op == "motion_turnleft":
            out.append(f"{pad}this.turnLeft(this.sprite, {i('DEGREES')});")
        elif op == "motion_gotoxy":
            out.append(f"{pad}this.goToXY(this.sprite, {i('X')}, {i('Y')});")
        elif op == "motion_goto":
            out.append(f"{pad}this.goTo(this.sprite, {i('TO')});")
        elif op == "motion_glidesecstoxy":
            out.append(f"{pad}await this.glideToXY(this.sprite, {i('SECS')}, {i('X')}, {i('Y')});")
        elif op == "motion_glideto":
            out.append(f"{pad}await this.glideTo(this.sprite, {i('SECS')}, {i('TO')});")
        elif op == "motion_pointindirection":
            out.append(f"{pad}this.pointInDirection(this.sprite, {i('DIRECTION')});")
        elif op == "motion_pointtowards":
            out.append(f"{pad}this.pointTowards(this.sprite, {i('TOWARDS')});")
        elif op == "motion_changexby":
            out.append(f"{pad}this.sprite.x += Number({i('DX')});")
        elif op == "motion_setx":
            out.append(f"{pad}this.sprite.x = Number({i('X')});")
        elif op == "motion_changeyby":
            out.append(f"{pad}this.sprite.y += Number({i('DY')});")
        elif op == "motion_sety":
            out.append(f"{pad}this.sprite.y = Number({i('Y')});")
        elif op == "motion_setrotationstyle":
            out.append(f"{pad}this.sprite.rotationStyle = {q(f('STYLE'))};")
        elif op == "looks_switchcostumeto":
            out.append(f"{pad}this.switchCostume(this.sprite, {i('COSTUME')});")
        elif op == "looks_nextcostume":
            out.append(f"{pad}this.nextCostume(this.sprite);")
        elif op == "looks_switchbackdropto":
            out.append(f"{pad}this.switchBackdrop({i('BACKDROP')});")
        elif op == "looks_show":
            out.append(f"{pad}this.sprite.visible = true;")
        elif op == "looks_hide":
            out.append(f"{pad}this.sprite.visible = false;")
        elif op == "looks_sayforsecs":
            out.append(f"{pad}await this.sayForSecs(this.sprite, {i('MESSAGE')}, {i('SECS')});")
        elif op == "looks_setsizeto":
            out.append(f"{pad}this.sprite.size = Number({i('SIZE')});")
        elif op == "looks_seteffectto":
            out.append(f"{pad}this.setEffect(this.sprite, {q(f('EFFECT'))}, {i('VALUE')});")
        elif op == "looks_changeeffectby":
            out.append(f"{pad}this.changeEffect(this.sprite, {q(f('EFFECT'))}, {i('CHANGE')});")
        elif op == "looks_gotofrontback":
            out.append(f"{pad}this.goToLayer(this.sprite, {q(f('FRONT_BACK'))});")
        elif op == "looks_goforwardbackwardlayers":
            out.append(f"{pad}this.changeLayer(this.sprite, {q(f('FORWARD_BACKWARD'))}, {i('NUM')});")
        elif op == "sound_play":
            out.append(f"{pad}this.playSound(this.sprite, {i('SOUND_MENU')});")
        elif op == "sound_playuntildone":
            out.append(f"{pad}await this.playSoundUntilDone(this.sprite, {i('SOUND_MENU')});")
        elif op == "sound_stopallsounds":
            out.append(f"{pad}this.stopAllSounds();")
        elif op == "sound_seteffectto":
            out.append(f"{pad}this.setSoundEffect(this.sprite, {q(f('EFFECT'))}, {i('VALUE')});")
        elif op == "event_broadcast":
            out.append(f"{pad}this.broadcast({i('BROADCAST_INPUT')});")
        elif op == "sensing_askandwait":
            out.append(f"{pad}this.answer = await this.ask({i('QUESTION')});")
        elif op.startswith("pen."):
            args = ", ".join(f"{k}: {self.raw_input_expr(blocks, v)}" for k, v in block.get("inputs", {}).items())
            out.append(f"{pad}this.pen({q(op)}, {{{args}}});")
        elif op == "procedures_call":
            mutation = block.get("mutation", {})
            proccode = mutation.get("proccode", "procedure")
            method = self.proc_method(proccode)
            out.append(f"{pad}await this.{method}(); // custom block {q(proccode)}")
        else:
            out.append(f"{pad}this.runBlock({q(op)}, {q(block.get('inputs', {}))}, {q(block.get('fields', {}))});")
        return out

    def proc_method(self, proccode):
        if proccode not in self.proc_methods:
            self.proc_methods[proccode] = safe_ident("proc_" + proccode, self.used_methods)
        return self.proc_methods[proccode]

    def definition_name(self, target, definition):
        blocks = target.get("blocks", {})
        raw = definition.get("inputs", {}).get("custom_block")
        proto_id = raw[1] if isinstance(raw, list) and len(raw) > 1 and isinstance(raw[1], str) else None
        proto = blocks.get(proto_id, {}) if proto_id else {}
        proccode = proto.get("mutation", {}).get("proccode") or "procedure"
        return self.proc_method(proccode)

    def hat_name(self, target_name, block):
        op = block.get("opcode")
        if op == "event_whenflagclicked":
            return "whenGreenFlag"
        if op == "event_whenbroadcastreceived":
            return "whenBroadcast_" + str(field(block, "BROADCAST_OPTION", "message"))
        if op == "event_whenkeypressed":
            return "whenKey_" + str(field(block, "KEY_OPTION", "key"))
        if op == "event_whenbackdropswitchesto":
            return "whenBackdrop_" + str(field(block, "BACKDROP", "backdrop"))
        if op == "event_whenthisspriteclicked":
            return "whenThisSpriteClicked"
        if op == "control_start_as_clone":
            return "whenStartAsClone"
        if op == "procedures_definition":
            return "procedure"
        return op or "script"

    def emit(self):
        lines = []
        lines.extend([
            "/*",
            " * Generated from Mind+ project.json.",
            " * This is a readable TypeScript translation of the block scripts, not a complete runtime.",
            " * Fill the Runtime methods if you want to execute it outside Scratch/Mind+.",
            " */",
            "",
            "type Value = string | number | boolean | Value[] | undefined;",
            "type SpriteState = {",
            "  name: string;",
            "  x: number;",
            "  y: number;",
            "  direction: number;",
            "  size: number;",
            "  visible: boolean;",
            "  costume?: Value;",
            "  rotationStyle?: string;",
            "};",
            "",
            "class MindPlusRuntime {",
            "  vars: Record<string, Value> = {};",
            "  lists: Record<string, Value[]> = {};",
            "  sprites: Record<string, SpriteState> = {};",
            "  sprite!: SpriteState;",
            "  answer = '';",
            "  mouseX = 0;",
            "  mouseY = 0;",
            "",
            "  var(name: string): Value { return this.vars[name]; }",
            "  setVar(name: string, value: Value): void { this.vars[name] = value; }",
            "  changeVar(name: string, delta: Value): void { this.vars[name] = Number(this.vars[name] ?? 0) + Number(delta ?? 0); }",
            "  list(name: string): Value[] { return (this.lists[name] ??= []); }",
            "  wait(seconds: Value): Promise<void> { return new Promise(r => setTimeout(r, Number(seconds) * 1000)); }",
            "  yieldFrame(): Promise<void> { return this.wait(1 / 30); }",
            "  random(from: Value, to: Value): number { const a = Number(from), b = Number(to); return a + Math.random() * (b - a); }",
            "  mathOp(op: string, n: Value): number { const x = Number(n); return op === 'sqrt' ? Math.sqrt(x) : (Math as any)[op]?.(x) ?? x; }",
            "  async ask(question: Value): Promise<string> { return String(question ?? ''); }",
            "  keyPressed(_key: Value): boolean { return false; }",
            "  mouseDown(): boolean { return false; }",
            "  touching(_sprite: SpriteState, _target: Value): boolean { return false; }",
            "  distanceTo(_sprite: SpriteState, _target: Value): number { return 0; }",
            "  sensingOf(_property: string, _object: Value): Value { return undefined; }",
            "  costumeValue(_sprite: SpriteState, _kind: string): Value { return undefined; }",
            "  backdropValue(_kind: string): Value { return undefined; }",
            "  value(_opcode: string, _inputs: unknown, _fields: unknown): Value { return undefined; }",
            "  runBlock(_opcode: string, _inputs: unknown, _fields: unknown): void {}",
            "  broadcast(_message: Value): void {}",
            "  createClone(_target: Value): void {}",
            "  deleteThisClone(_sprite: SpriteState): void {}",
            "  moveSteps(_sprite: SpriteState, _steps: Value): void {}",
            "  turnRight(sprite: SpriteState, degrees: Value): void { sprite.direction += Number(degrees); }",
            "  turnLeft(sprite: SpriteState, degrees: Value): void { sprite.direction -= Number(degrees); }",
            "  goToXY(sprite: SpriteState, x: Value, y: Value): void { sprite.x = Number(x); sprite.y = Number(y); }",
            "  goTo(_sprite: SpriteState, _to: Value): void {}",
            "  async glideToXY(sprite: SpriteState, _secs: Value, x: Value, y: Value): Promise<void> { this.goToXY(sprite, x, y); }",
            "  async glideTo(_sprite: SpriteState, _secs: Value, _to: Value): Promise<void> {}",
            "  pointInDirection(sprite: SpriteState, direction: Value): void { sprite.direction = Number(direction); }",
            "  pointTowards(_sprite: SpriteState, _target: Value): void {}",
            "  switchCostume(sprite: SpriteState, costume: Value): void { sprite.costume = costume; }",
            "  nextCostume(_sprite: SpriteState): void {}",
            "  switchBackdrop(_backdrop: Value): void {}",
            "  async sayForSecs(_sprite: SpriteState, _message: Value, seconds: Value): Promise<void> { await this.wait(seconds); }",
            "  setEffect(_sprite: SpriteState, _effect: string, _value: Value): void {}",
            "  changeEffect(_sprite: SpriteState, _effect: string, _change: Value): void {}",
            "  goToLayer(_sprite: SpriteState, _where: string): void {}",
            "  changeLayer(_sprite: SpriteState, _direction: string, _num: Value): void {}",
            "  playSound(_sprite: SpriteState, _sound: Value): void {}",
            "  async playSoundUntilDone(_sprite: SpriteState, _sound: Value): Promise<void> {}",
            "  stopAllSounds(): void {}",
            "  setSoundEffect(_sprite: SpriteState, _effect: string, _value: Value): void {}",
            "  showVariable(_name: string): void {}",
            "  hideVariable(_name: string): void {}",
            "  deleteOfList(name: string, index: Value): void { this.list(name).splice(Number(index) - 1, 1); }",
            "  itemOfList(name: string, index: Value): Value { return this.list(name)[Number(index) - 1]; }",
            "  itemNumOfList(name: string, item: Value): number { return this.list(name).indexOf(item) + 1; }",
            "  showList(_name: string): void {}",
            "  hideList(_name: string): void {}",
            "  pen(_opcode: string, _args: Record<string, Value>): void {}",
            "}",
            "",
            "export class ConvertedMindPlusProject extends MindPlusRuntime {",
        ])

        stage = next(t for t in self.page["targets"] if t.get("isStage"))
        lines.append("  constructor() {")
        lines.append("    super();")
        for _, value in stage.get("variables", {}).items():
            lines.append(f"    this.vars[{q(value[0])}] = {q(value[1])};")
        for _, value in stage.get("lists", {}).items():
            lines.append(f"    this.lists[{q(value[0])}] = {q(value[1])};")
        for target in self.page["targets"]:
            if target.get("isStage"):
                continue
            lines.append(f"    this.sprites[{q(target['name'])}] = {{ name: {q(target['name'])}, x: {target.get('x', 0)}, y: {target.get('y', 0)}, direction: {target.get('direction', 90)}, size: {target.get('size', 100)}, visible: {str(target.get('visible', True)).lower()} }};")
        lines.append("  }")
        lines.append("")

        used = set()
        script_count = 0
        for target in self.page["targets"]:
            blocks = target.get("blocks", {})
            for block_id, block in blocks.items():
                if not block.get("topLevel"):
                    continue
                if block.get("opcode") not in {
                    "event_whenflagclicked",
                    "event_whenbroadcastreceived",
                    "event_whenkeypressed",
                    "event_whenbackdropswitchesto",
                    "event_whenthisspriteclicked",
                    "control_start_as_clone",
                    "procedures_definition",
                }:
                    continue
                script_count += 1
                if block.get("opcode") == "procedures_definition":
                    name = self.definition_name(target, block)
                else:
                    name = safe_ident(f"{target['name']}_{self.hat_name(target['name'], block)}_{script_count}", used)
                lines.append(f"  async {name}(): Promise<void> {{")
                lines.append(f"    this.sprite = this.sprites[{q(target['name'])}] ?? {{ name: {q(target['name'])}, x: 0, y: 0, direction: 90, size: 100, visible: true }};")
                lines.append(f"    // source block: {block_id}, opcode: {block.get('opcode')}")
                lines.extend(self.block_lines(target, block.get("next"), 4))
                lines.append("  }")
                lines.append("")

        lines.append("}")
        lines.append("")
        return "\n".join(lines)


def main():
    with PROJECT.open(encoding="utf-8") as f:
        project = json.load(f)
    OUT.write_text(Converter(project).emit(), encoding="utf-8")
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()

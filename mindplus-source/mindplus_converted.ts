/*
 * Generated from Mind+ project.json.
 * This is a readable TypeScript translation of the block scripts, not a complete runtime.
 * Fill the Runtime methods if you want to execute it outside Scratch/Mind+.
 */

type Value = string | number | boolean | Value[] | undefined;
type SpriteState = {
  name: string;
  x: number;
  y: number;
  direction: number;
  size: number;
  visible: boolean;
  costume?: Value;
  rotationStyle?: string;
};

class MindPlusRuntime {
  vars: Record<string, Value> = {};
  lists: Record<string, Value[]> = {};
  sprites: Record<string, SpriteState> = {};
  sprite!: SpriteState;
  answer = '';
  mouseX = 0;
  mouseY = 0;

  var(name: string): Value { return this.vars[name]; }
  setVar(name: string, value: Value): void { this.vars[name] = value; }
  changeVar(name: string, delta: Value): void { this.vars[name] = Number(this.vars[name] ?? 0) + Number(delta ?? 0); }
  list(name: string): Value[] { return (this.lists[name] ??= []); }
  wait(seconds: Value): Promise<void> { return new Promise(r => setTimeout(r, Number(seconds) * 1000)); }
  yieldFrame(): Promise<void> { return this.wait(1 / 30); }
  random(from: Value, to: Value): number { const a = Number(from), b = Number(to); return a + Math.random() * (b - a); }
  mathOp(op: string, n: Value): number { const x = Number(n); return op === 'sqrt' ? Math.sqrt(x) : (Math as any)[op]?.(x) ?? x; }
  async ask(question: Value): Promise<string> { return String(question ?? ''); }
  keyPressed(_key: Value): boolean { return false; }
  mouseDown(): boolean { return false; }
  touching(_sprite: SpriteState, _target: Value): boolean { return false; }
  distanceTo(_sprite: SpriteState, _target: Value): number { return 0; }
  sensingOf(_property: string, _object: Value): Value { return undefined; }
  costumeValue(_sprite: SpriteState, _kind: string): Value { return undefined; }
  backdropValue(_kind: string): Value { return undefined; }
  value(_opcode: string, _inputs: unknown, _fields: unknown): Value { return undefined; }
  runBlock(_opcode: string, _inputs: unknown, _fields: unknown): void {}
  broadcast(_message: Value): void {}
  createClone(_target: Value): void {}
  deleteThisClone(_sprite: SpriteState): void {}
  moveSteps(_sprite: SpriteState, _steps: Value): void {}
  turnRight(sprite: SpriteState, degrees: Value): void { sprite.direction += Number(degrees); }
  turnLeft(sprite: SpriteState, degrees: Value): void { sprite.direction -= Number(degrees); }
  goToXY(sprite: SpriteState, x: Value, y: Value): void { sprite.x = Number(x); sprite.y = Number(y); }
  goTo(_sprite: SpriteState, _to: Value): void {}
  async glideToXY(sprite: SpriteState, _secs: Value, x: Value, y: Value): Promise<void> { this.goToXY(sprite, x, y); }
  async glideTo(_sprite: SpriteState, _secs: Value, _to: Value): Promise<void> {}
  pointInDirection(sprite: SpriteState, direction: Value): void { sprite.direction = Number(direction); }
  pointTowards(_sprite: SpriteState, _target: Value): void {}
  switchCostume(sprite: SpriteState, costume: Value): void { sprite.costume = costume; }
  nextCostume(_sprite: SpriteState): void {}
  switchBackdrop(_backdrop: Value): void {}
  async sayForSecs(_sprite: SpriteState, _message: Value, seconds: Value): Promise<void> { await this.wait(seconds); }
  setEffect(_sprite: SpriteState, _effect: string, _value: Value): void {}
  changeEffect(_sprite: SpriteState, _effect: string, _change: Value): void {}
  goToLayer(_sprite: SpriteState, _where: string): void {}
  changeLayer(_sprite: SpriteState, _direction: string, _num: Value): void {}
  playSound(_sprite: SpriteState, _sound: Value): void {}
  async playSoundUntilDone(_sprite: SpriteState, _sound: Value): Promise<void> {}
  stopAllSounds(): void {}
  setSoundEffect(_sprite: SpriteState, _effect: string, _value: Value): void {}
  showVariable(_name: string): void {}
  hideVariable(_name: string): void {}
  deleteOfList(name: string, index: Value): void { this.list(name).splice(Number(index) - 1, 1); }
  itemOfList(name: string, index: Value): Value { return this.list(name)[Number(index) - 1]; }
  itemNumOfList(name: string, item: Value): number { return this.list(name).indexOf(item) + 1; }
  showList(_name: string): void {}
  hideList(_name: string): void {}
  pen(_opcode: string, _args: Record<string, Value>): void {}
}

export class ConvertedMindPlusProject extends MindPlusRuntime {
  constructor() {
    super();
    this.vars["新夜怪主人"] = "林伟";
    this.vars["rwx"] = "林";
    this.vars["rwm"] = "伟";
    this.vars["dzs"] = "0";
    this.vars["y体力"] = "25";
    this.vars["d体力"] = "100";
    this.vars["可升级"] = "1.体力升级药38元/颗 2.护盾防御升级豆28元/粒 3.攻击速度48元/级 4.子弹数量95元/级";
    this.vars["y金币"] = "0";
    this.vars["ygjsd"] = "0.4";
    this.vars["yzd"] = "0";
    this.vars["ycstl"] = "25";
    this.vars["yhdfy"] = "0";
    this.vars["d7sfpdy"] = "0";
    this.vars["y初始体力"] = "0/75级";
    this.vars["y护盾防御"] = "0/35级";
    this.vars["y子弹数量"] = "0/10级";
    this.vars["y攻击速度"] = "0/40级";
    this.vars["rwx2"] = "0";
    this.vars["rwm2"] = "0";
    this.vars["新夜怪主人2"] = "0";
    this.vars["昵称"] = "";
    this.vars["yz持攻豆"] = "0";
    this.vars["yz金光薇"] = "0";
    this.vars["yz毁灭毒针"] = "0";
    this.vars["dbybjlsj"] = "0";
    this.vars["5大招式"] = "1.走动时可发射子弹,500元(i) 2.子弹具有穿透效果,1000元(o) 3.蓄力释放绝招,750元(p)";
    this.vars["5大招式'"] = "4.体力小于25000时可自动每秒回100点体力,750元(a)5.免毒伤,300元(s)";
    this.vars["dsfcz"] = "0";
    this.vars["dtl2"] = "0";
    this.vars["dbysp"] = "0";
    this.vars["ytl2"] = "0";
    this.vars["dbysp2阶段"] = "0";
    this.vars["ygj"] = 0.94;
    this.vars["tzms"] = "1";
    this.vars["挑战模式"] = "普通模式";
    this.vars["dms4sj"] = 4;
    this.vars["dsfzd"] = "0";
    this.vars["bjyy"] = 1;
    this.vars["xy"] = "0";
    this.vars["sj"] = 1;
    this.vars["时间"] = "00:03";
    this.vars["分"] = 3;
    this.vars["时"] = "0";
    this.vars["y3sfpdd"] = "0";
    this.vars["yz炫夜护盾"] = "0";
    this.vars["yz轰炸匕首"] = "0";
    this.vars["y4sfpdd"] = "1";
    this.vars["时间限制"] = 42;
    this.vars["y得分"] = "0";
    this.vars["y等级"] = "0";
    this.vars["y满级"] = 48;
    this.vars["dgj"] = 1;
    this.vars["签到"] = "未签";
    this.vars["qdjl"] = "0";
    this.vars["最高分"] = "0";
    this.vars["轮回数"] = "1";
    this.vars["rwx3"] = "0";
    this.vars["rwm3"] = "0";
    this.vars["ysfzd2"] = "0";
    this.vars["dsfzd2"] = "0";
    this.vars["战斗时好友数"] = 0;
    this.vars["y皮肤颜色"] = "0";
    this.vars["ysfpdd"] = "1";
    this.vars["sfzbcz"] = "0";
    this.vars["dyy"] = 3;
    this.vars["ysfpdd11"] = "0";
    this.vars["d满血"] = 1000;
    this.vars["rwm4"] = "10";
    this.vars["rwx4"] = "1";
    this.vars["yz月勾环"] = "0";
    this.vars["yz妍妍三叉戟"] = "0";
    this.vars["yz尖刺匕首"] = "0";
    this.vars["xz1zs"] = "0";
    this.vars["xz2zs"] = "0";
    this.vars["xz3zs"] = "0";
    this.vars["zhbs"] = "0";
    this.vars["zhqxhd"] = "0";
    this.vars["ysfsj"] = "0";
    this.vars["y精力"] = "100";
    this.vars["xz4zs"] = "0";
    this.vars["xz5zs"] = "0";
    this.vars["yz炫夜短震荡波"] = "0";
    this.vars["yz三叉戟持攻豆"] = "0";
    this.vars["rwzdqd"] = "4";
    this.vars["y饱食度"] = "100";
    this.vars["y水分"] = "100";
    this.vars["y面包数量"] = "0";
    this.vars["y水瓶数"] = "0";
    this.vars["y烧鸡数量"] = "0";
    this.vars["yld"] = 4.4;
    this.vars["bj10dz"] = 2;
    this.vars["ymjsfcfxg"] = "0";
    this.vars["y子弹持有数"] = "10000";
    this.vars["dbbgjcs"] = "0";
    this.vars["轮回数2"] = "1";
    this.vars["ysftg"] = "0";
    this.vars["y回血药水数量"] = "0";
    this.vars["y无敌药水数量"] = "0";
    this.vars["y解毒药水数量"] = "0";
    this.vars["y体力2"] = 348;
    this.vars["ysfzd"] = "0";
    this.vars["ysfwd"] = "0";
    this.vars["tzms9zhzx"] = "1";
    this.vars["dz"] = "2新夜子弹";
    this.vars["dzfz"] = "2";
    this.vars["dfz"] = 80.80000000000018;
    this.vars["ysfyxzxygxlcnsfyz4"] = "0";
    this.vars["难度"] = 1;
    this.vars["难度名称"] = "菜鸟";
    this.vars["y气力"] = "100";
    this.vars["y蓄力"] = "0";
    this.vars["背包等级"] = "0";
    this.vars["y大力丹数量"] = "0";
    this.vars["y蓄力丹数量"] = "0";
    this.vars["y提神丹数量"] = "0";
    this.vars["y最高气力"] = "100";
    this.vars["y最高精力"] = "100";
    this.vars["y蓄力速度"] = "0.6";
    this.vars["剩余好友"] = 0;
    this.vars["血量比例编号"] = 49;
    this.vars["sffxwb"] = "0";
    this.vars["优势"] = "红胜势160";
    this.vars["yys"] = -160;
    this.vars["yys2"] = "红胜势";
    this.vars["dtl3"] = 252.98199999996953;
    this.vars["y连击值"] = "25";
    this.vars["dtl4"] = 243.25299999996957;
    this.vars["y连击值2"] = "2";
    this.vars["y蓄力2"] = -50;
    this.vars["d定x"] = 200;
    this.vars["d定y"] = 0;
    this.vars["y法术·定"] = "0";
    this.vars["y法术·隐"] = "0";
    this.vars["y蓄力2段数"] = "0";
    this.vars["y2fzsfpdd"] = "0";
    this.vars["y是否击败2级新夜怪"] = "0";
    this.vars["y是否击败3级新夜怪"] = "0";
    this.vars["y法术·破"] = "0";
    this.vars["yx"] = 100;
    this.vars["yy"] = 0;
    this.vars["闪避暴击增伤"] = "0";
    this.vars["y法术·吸"] = "0";
    this.vars["y是否击败4级新夜怪"] = "0";
    this.vars["y蓄力3"] = "0";
    this.vars["y是否击败5级新夜怪"] = "0";
    this.vars["y是否击败1级新夜怪"] = "0";
    this.vars["y法术·火"] = "0";
    this.vars["d火"] = "0";
    this.vars["ysfpdy火"] = "0";
    this.lists["战斗烦恼名单"] = [];
    this.lists["邀请战斗名单"] = [];
    this.lists["y拥有的5大招式"] = [];
    this.lists["签到表"] = [];
    this.lists["好友单"] = [];
    this.lists["睡眠名单"] = [];
    this.lists["血量比值"] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4512000000000249, 0.6016000000000332, 0.6016000000000332, 0.6016000000000332, 0.6016000000000332, 1.3536000000000747, 1.955200000000108, 2.556800000000141, 3.3088000000002005, 4.21120000000025, 5.1136000000003, 5.865600000000342, 6.9184000000004, 7.520000000000433, 8.272000000000475, 8.873600000000508, 9.475200000000559, 9.625600000000567, 9.776000000000575, 9.926400000000584, 9.926400000000584, 10.076800000000592, 10.2272000000006, 10.377600000000609, 10.528000000000617, 10.528000000000617, 10.678400000000625, 10.828800000000633, 10.979200000000642, 11.12960000000065, 11.280000000000658, 11.280000000000658, 11.580800000000675, 11.580800000000675, 11.731200000000683, 11.881600000000692, 11.881600000000692, 12.0320000000007, 12.182400000000708, 12.332800000000717, 12.483200000000725, 12.633600000000733, 12.633600000000733, 12.784000000000741, 12.93440000000075, 13.084800000000758, 13.235200000000766, 13.235200000000766, 13.385600000000775, 13.536000000000783, 13.686400000000791, 13.8368000000008, 13.987200000000808, 13.987200000000808, 14.137600000000816, 14.288000000000824, 14.288000000000824, 14.438400000000833, 14.588800000000841, 14.588800000000841, 14.73920000000085, 14.889600000000858, 15.040000000000866, 15.190400000000874, 15.340800000000883, 15.340800000000883, 15.491200000000891, 15.6416000000009, 15.6416000000009, 15.792000000000925, 15.942400000000934, 15.942400000000934, 16.092800000000942, 16.39360000000096, 16.544000000000967, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 16.694400000000975, 17.29600000000101, 17.912640000001048, 18.66464000000109, 18.965440000001106, 19.41664000000113, 19.890400000001165, 20.642400000001224, 21.244000000001257, 21.544800000001274, 22.168960000001317, 22.920960000001358, 23.6729600000014, 23.973760000001416, 24.597920000001476, 25.349920000001518, 26.252320000001568, 26.402720000001576, 27.177280000001627, 27.92928000000167, 28.831680000001718, 29.132480000001735, 29.907040000001803, 30.508640000001837, 31.411040000001886, 31.561440000001895, 32.48640000000195, 33.238400000001995, 33.990400000002055, 34.44160000000208, 35.216160000002134, 35.81776000000217, 36.72016000000221, 37.02096000000223, 37.64512000000227, 38.39712000000233, 39.14912000000237, 39.44992000000239, 40.224480000002444, 40.97648000000248, 41.578080000002515, 42.029280000002544, 42.80384000000261, 43.70624000000266, 44.30784000000269, 44.909440000002725, 45.38320000000276, 46.28560000000281, 47.037600000002854, 47.33840000000286, 47.962560000002924, 48.71456000000297, 49.61696000000302, 50.06816000000305, 50.8427200000031, 51.74512000000316, 52.49712000000321, 52.94832000000323, 53.72288000000328, 54.1740800000033, 55.07648000000336, 55.37728000000337, 56.14432000000342, 56.903840000003484, 57.80624000000353, 58.40784000000356, 59.18240000000361, 59.934400000003656, 60.53600000000369, 60.836800000003706, 61.61136000000377, 62.363360000003816, 63.11536000000386, 63.56656000000388, 64.04032000000392, 64.79232000000395, 65.54432000000402, 65.99552000000403, 66.7700800000041, 67.67248000000414, 68.12368000000417, 68.42448000000418, 68.89824000000422, 69.49984000000426, 70.1014400000043, 70.56016000000433, 71.02640000000436, 71.77840000000441, 72.07920000000442, 72.69584000000447, 73.3049600000045, 74.05696000000455, 74.35776000000457, 75.12480000000463, 75.43312000000464, 76.4859200000047, 76.78672000000472, 77.39584000000475, 77.86208000000478, 78.7644800000048, 79.36608000000479, 79.96768000000479, 80.74224000000481, 81.4942400000048, 82.2462400000048, 82.7049600000048, 83.0208000000048, 83.92320000000481, 84.5248000000048, 84.97600000000482, 85.6001600000048, 86.50256000000482, 86.9537600000048, 87.2545600000048, 88.02912000000482, 88.48032000000484, 89.53312000000481, 89.9843200000048, 90.60848000000483, 91.51088000000483, 92.11248000000482, 92.56368000000481, 93.18784000000484, 93.93984000000484, 94.69184000000483, 94.84224000000484, 95.61680000000484, 96.21840000000483, 96.97040000000484, 97.12080000000483, 97.88784000000484, 98.64736000000484, 103.46016000000486, 103.76096000000484, 103.91136000000485, 104.06176000000485, 104.96416000000482, 105.58832000000486, 105.73872000000485, 105.88912000000484, 105.88912000000484, 106.81408000000486, 106.96448000000487, 106.96448000000487, 107.26528000000485, 108.19024000000488, 108.34064000000488, 108.49104000000487, 108.64144000000486, 108.64144000000486, 108.94224000000489, 108.94224000000489, 109.09264000000488, 109.24304000000487, 109.24304000000487, 109.39344000000487, 109.54384000000488, 109.69424000000487, 109.84464000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 109.99504000000486, 117.66544000000486, 118.28208000000487, 118.28208000000487, 118.28208000000487, 118.28208000000487, 118.28208000000487, 118.28208000000487, 118.43248000000486, 118.59040000000488, 118.59040000000488, 118.59040000000488, 118.89872000000487, 118.89872000000487, 118.89872000000487, 118.89872000000487, 119.04912000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 119.52288000000488, 104.07968000000488, 53.021760000004925, 40.989760000004935, 40.989760000004935, 40.989760000004935, 40.989760000004935, 29.853760000004925, -13.19247999999507, -13.19247999999507, -13.19247999999507, -13.19247999999507, -13.19247999999507, -13.19247999999507];
    this.sprites["开始"] = { name: "开始", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y"] = { name: "y", x: -40, y: -60, direction: 90, size: 100, visible: true };
    this.sprites["d"] = { name: "d", x: 40, y: -60, direction: 90, size: 100, visible: true };
    this.sprites["shengj"] = { name: "shengj", x: -190, y: 40, direction: 90, size: 100, visible: true };
    this.sprites["tz"] = { name: "tz", x: -130, y: 40, direction: 90, size: 100, visible: true };
    this.sprites["gm"] = { name: "gm", x: -190, y: 0, direction: 90, size: 100, visible: true };
    this.sprites["shuij"] = { name: "shuij", x: -130, y: 0, direction: 90, size: 100, visible: true };
    this.sprites["gw"] = { name: "gw", x: -190, y: -40, direction: 90, size: 100, visible: true };
    this.sprites["syfy"] = { name: "syfy", x: -130, y: -40, direction: 90, size: 100, visible: true };
    this.sprites["xygxlc"] = { name: "xygxlc", x: -190, y: -80, direction: 90, size: 100, visible: true };
    this.sprites["sjbb"] = { name: "sjbb", x: -130, y: -80, direction: 90, size: 100, visible: true };
    this.sprites["fq"] = { name: "fq", x: -130, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2"] = { name: "y2", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2y"] = { name: "y2y", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2fz"] = { name: "y2fz", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2fz2"] = { name: "y2fz2", x: -200, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2fz3"] = { name: "y2fz3", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2fz4"] = { name: "y2fz4", x: -200, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2fz5"] = { name: "y2fz5", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2fz6"] = { name: "y2fz6", x: -200, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y火fz"] = { name: "y火fz", x: -200, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2wdfz"] = { name: "y2wdfz", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2z2"] = { name: "y2z2", x: -200, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["y2z2fz"] = { name: "y2z2fz", x: 200, y: -120, direction: 90, size: 100, visible: false };
    this.sprites["y2z2fzfz"] = { name: "y2z2fzfz", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["d2"] = { name: "d2", x: 200, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["d2y"] = { name: "d2y", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["d2fz"] = { name: "d2fz", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["d2fz2"] = { name: "d2fz2", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["d2fz3"] = { name: "d2fz3", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["d定fz"] = { name: "d定fz", x: 100, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["sbycg"] = { name: "sbycg", x: 0, y: 100, direction: 90, size: 100, visible: false };
    this.sprites["xyx"] = { name: "xyx", x: -200, y: -160, direction: 90, size: 100, visible: true };
    this.sprites["xlh"] = { name: "xlh", x: -140, y: -160, direction: 90, size: 100, visible: false };
    this.sprites["yrxnfqtz"] = { name: "yrxnfqtz", x: 0, y: 100, direction: 90, size: 100, visible: false };
    this.sprites["shuijfz"] = { name: "shuijfz", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["bj3"] = { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    this.sprites["bj4"] = { name: "bj4", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["bj5"] = { name: "bj5", x: 180, y: 25, direction: 90, size: 100, visible: false };
    this.sprites["bj6"] = { name: "bj6", x: 0, y: -178.5, direction: 0, size: 100, visible: false };
    this.sprites["bj7"] = { name: "bj7", x: 0, y: 178.5, direction: 90, size: 100, visible: true };
    this.sprites["bj8"] = { name: "bj8", x: 0, y: 0, direction: 90, size: 100, visible: true };
    this.sprites["bj9"] = { name: "bj9", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["bj10"] = { name: "bj10", x: -32, y: -33, direction: 90, size: 40, visible: false };
    this.sprites["bj11"] = { name: "bj11", x: 215, y: 88, direction: 0, size: 100, visible: false };
    this.sprites["bj12"] = { name: "bj12", x: 120, y: -60, direction: 90, size: 100, visible: true };
    this.sprites["grbj"] = { name: "grbj", x: 0, y: 0, direction: 90, size: 100, visible: false };
    this.sprites["qdjl"] = { name: "qdjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    this.sprites["zbdz"] = { name: "zbdz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    this.sprites["yhyfz"] = { name: "yhyfz", x: -110, y: 160, direction: 90, size: 100, visible: true };
    this.sprites["ysftg"] = { name: "ysftg", x: 100, y: 160, direction: 90, size: 100, visible: true };
    this.sprites["smrwfz"] = { name: "smrwfz", x: -60, y: 160, direction: 90, size: 100, visible: true };
    this.sprites["ytl"] = { name: "ytl", x: -200, y: 140, direction: 90, size: 100, visible: true };
    this.sprites["yzd"] = { name: "yzd", x: -200, y: 130, direction: 90, size: 100, visible: true };
    this.sprites["yql"] = { name: "yql", x: -200, y: 120, direction: 90, size: 100, visible: true };
    this.sprites["yjl"] = { name: "yjl", x: -200, y: 110, direction: 90, size: 100, visible: true };
    this.sprites["yxl"] = { name: "yxl", x: 200, y: 100, direction: 90, size: 100, visible: true };
    this.sprites["yxl2"] = { name: "yxl2", x: 200, y: 90, direction: 90, size: 100, visible: true };
    this.sprites["yxl2fz"] = { name: "yxl2fz", x: -120, y: 70, direction: 90, size: 100, visible: false };
    this.sprites["yxl3"] = { name: "yxl3", x: 200, y: 50, direction: 90, size: 100, visible: true };
    this.sprites["dtl"] = { name: "dtl", x: -200, y: -140, direction: 90, size: 100, visible: true };
    this.sprites["dtl2"] = { name: "dtl2", x: -200, y: -140, direction: 90, size: 100, visible: true };
    this.sprites["dbtl"] = { name: "dbtl", x: -200, y: -132, direction: 90, size: 100, visible: true };
    this.sprites["dtlfz"] = { name: "dtlfz", x: 0, y: -120, direction: 90, size: 100, visible: false };
    this.sprites["jefz"] = { name: "jefz", x: 0, y: 160, direction: 90, size: 100, visible: true };
    this.sprites["qsfz"] = { name: "qsfz", x: 60, y: 160, direction: 90, size: 100, visible: true };
    this.sprites["ysxs"] = { name: "ysxs", x: -200, y: 0, direction: 90, size: 100, visible: true };
  }

  async Stage_whenGreenFlag_1(): Promise<void> {
    this.sprite = this.sprites["Stage"] ?? { name: "Stage", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: WcY7|Rvt7CcH977%WFy=, opcode: event_whenflagclicked
    this.setVar("xy", "0");
    while (true) {
      for (let i = 0, n = Number(500); i < n; i++) {
        this.changeEffect(this.sprite, "BRIGHTNESS", -0.05);
        await this.wait(1);
        await this.yieldFrame();
      }
      this.setVar("xy", "1");
      for (let i = 0, n = Number(100); i < n; i++) {
        this.changeEffect(this.sprite, "BRIGHTNESS", -0.05);
        await this.wait(1);
        await this.yieldFrame();
      }
      for (let i = 0, n = Number(100); i < n; i++) {
        this.changeEffect(this.sprite, "BRIGHTNESS", 0.05);
        await this.wait(1);
        await this.yieldFrame();
      }
      this.setVar("xy", "0");
      for (let i = 0, n = Number(500); i < n; i++) {
        this.changeEffect(this.sprite, "BRIGHTNESS", 0.05);
        await this.wait(1);
        await this.yieldFrame();
      }
      await this.yieldFrame();
    }
  }

  async Stage_whenGreenFlag_2(): Promise<void> {
    this.sprite = this.sprites["Stage"] ?? { name: "Stage", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: N}R}HFN{V/a}`NKY.a._, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToLayer(this.sprite, "back");
    this.setEffect(this.sprite, "GHOST", 20);
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async 开始_whenGreenFlag_3(): Promise<void> {
    this.sprite = this.sprites["开始"] ?? { name: "开始", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: w9xe:X3R^g~w%lP6rn-S, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.goToLayer(this.sprite, "front");
    await this.wait(1);
    for (let i = 0, n = Number(50); i < n; i++) {
      this.changeEffect(this.sprite, "GHOST", 2);
      await this.yieldFrame();
    }
    this.sprite.visible = false;
  }

  async y_whenBackdrop_1_4(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: W}Eh*|+oXsv3TJA@pnY4, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("yz持攻豆") > (this.var("背包等级") + 5))) {
        this.setVar("yz持攻豆", (this.var("背包等级") + 5));
      }
      if ((this.var("yz金光薇") > (this.var("背包等级") + 5))) {
        this.setVar("yz金光薇", (this.var("背包等级") + 5));
      }
      if ((this.var("yz毁灭毒针") > (this.var("背包等级") + 5))) {
        this.setVar("yz毁灭毒针", (this.var("背包等级") + 5));
      }
      if ((this.var("yz炫夜护盾") > (this.var("背包等级") + 5))) {
        this.setVar("yz炫夜护盾", (this.var("背包等级") + 5));
      }
      if ((this.var("yz轰炸匕首") > (this.var("背包等级") + 5))) {
        this.setVar("yz轰炸匕首", (this.var("背包等级") + 5));
      }
      if ((this.var("yz月勾环") > (this.var("背包等级") + 5))) {
        this.setVar("yz月勾环", (this.var("背包等级") + 5));
      }
      if ((this.var("yz妍妍三叉戟") > (this.var("背包等级") + 5))) {
        this.setVar("yz妍妍三叉戟", (this.var("背包等级") + 5));
      }
      if ((this.var("yz尖刺匕首") > (this.var("背包等级") + 5))) {
        this.setVar("yz尖刺匕首", (this.var("背包等级") + 5));
      }
      if ((this.var("yz三叉戟持攻豆") > (this.var("背包等级") + 5))) {
        this.setVar("yz三叉戟持攻豆", (this.var("背包等级") + 5));
      }
      if ((this.var("yz炫夜短震荡波") > (this.var("背包等级") + 5))) {
        this.setVar("yz炫夜短震荡波", (this.var("背包等级") + 5));
      }
      await this.yieldFrame();
    }
  }

  async y_whenGreenFlag_5(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 1a#+%sWXC{yzILpyF=L6, opcode: event_whenflagclicked
    while (true) {
      this.deleteOfList("战斗烦恼名单", this.itemNumOfList("战斗烦恼名单", "王队长"));
      await this.yieldFrame();
    }
  }

  async y_whenBackdrop_4_6(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 6UeBhFA+:8}Wf+A]x*:U, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -40, -60);
    this.pointInDirection(this.sprite, 90);
    this.hideVariable("新夜怪主人");
  }

  async y_whenGreenFlag_7(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hiy}k1_:SSg#F@UXiX|=, opcode: event_whenflagclicked
    while (true) {
      if (((this.backdropValue("number") === "2") && (this.var("tzms") === "9"))) {
        this.showVariable("dz");
      } else {
        this.hideVariable("dz");
      }
      await this.yieldFrame();
    }
  }

  async y_whenBroadcast_qhrw2_8(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4HZO.ip}m`+l7#1E:.)A, opcode: event_whenbroadcastreceived
    await this.proc_qhrw(); // custom block "qhrw"
  }

  async y_whenBackdrop_3_9(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: GaE$i`v2i`+FyQ(GfXpN, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -40, -60);
    this.pointInDirection(this.sprite, 90);
    this.hideVariable("新夜怪主人");
  }

  async y_whenGreenFlag_10(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: b3!Zm)rvUsP!KPPrH4~2, opcode: event_whenflagclicked
    while (true) {
      if (((this.backdropValue("number") === "2") && (this.var("tzms") === "9"))) {
        if (this.keyPressed("3")) {
          this.changeVar("dzfz", -1);
          await this.wait(0.2);
        }
        if (this.keyPressed("4")) {
          this.changeVar("dzfz", 1);
          await this.wait(0.2);
        }
      }
      await this.yieldFrame();
    }
  }

  async y_whenGreenFlag_11(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: }5.6H5!=)tn!;%,~H!XW, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("dzfz") === "2")) {
        this.setVar("dz", "2新夜子弹");
      }
      if ((this.var("dzfz") === "3")) {
        this.setVar("dz", "3持攻豆");
      }
      if ((this.var("dzfz") === "4")) {
        this.setVar("dz", "4金光薇");
      }
      if ((this.var("dzfz") === "5")) {
        this.setVar("dz", "5金光薇子弹");
      }
      if ((this.var("dzfz") === "6")) {
        this.setVar("dz", "6轰炸匕首护盾");
      }
      if ((this.var("dzfz") === "7")) {
        this.setVar("dz", "7炫夜震荡波");
      }
      if ((this.var("dzfz") === "8")) {
        this.setVar("dz", "8毁灭毒针");
      }
      if ((this.var("dzfz") === "9")) {
        this.setVar("dz", "9轰炸匕首");
      }
      if ((this.var("dzfz") === "10")) {
        this.setVar("dz", "10边缘扫射子弹");
      }
      if ((this.var("dzfz") === "11")) {
        this.setVar("dz", "11炫夜扫刀");
      }
      if ((this.var("dzfz") === "12")) {
        this.setVar("dz", "12轰炸匕首大炮");
      }
      if ((this.var("dzfz") === "13")) {
        this.setVar("dz", "13持攻护盾");
      }
      if ((this.var("dzfz") === "14")) {
        this.setVar("dz", "14削削子弹");
      }
      if ((this.var("dzfz") === "15")) {
        this.setVar("dz", "15毁灭大刀");
      }
      if ((this.var("dzfz") === "16")) {
        this.setVar("dz", "16攻击型月勾环");
      }
      if ((this.var("dzfz") === "17")) {
        this.setVar("dz", "17妍妍三叉戟");
      }
      if ((this.var("dzfz") === "18")) {
        this.setVar("dz", "18防御型月勾环");
      }
      if ((this.var("dzfz") === "19")) {
        this.setVar("dz", "19尖刺匕首");
      }
      if ((this.var("dzfz") === "20")) {
        this.setVar("dz", "20三叉戟持攻豆");
      }
      if ((this.var("dzfz") === "21")) {
        this.setVar("dz", "21炫夜散线波");
      }
      if ((this.var("dzfz") === "22")) {
        this.setVar("dz", "22炫夜短震荡波");
      }
      if ((this.var("dzfz") === "23")) {
        this.setVar("dz", "23好友伪人");
      }
      if ((this.var("dzfz") === "24")) {
        this.setVar("dz", "24伪人子弹");
      }
      if ((this.var("dzfz") === "25")) {
        this.setVar("dz", "25扫射之月");
      }
      if ((this.var("dzfz") === "26")) {
        this.setVar("dz", "26d好友");
      }
      if ((this.var("dzfz") === "27")) {
        this.setVar("dz", "27升变之星");
      }
      if ((this.var("dzfz") === "28")) {
        this.setVar("dz", "28召唤之星");
      }
      if ((this.var("dzfz") === "29")) {
        this.setVar("dz", "29攻击之星");
      }
      if ((this.var("dzfz") === "30")) {
        this.setVar("dz", "30废弃子弹");
      }
      await this.yieldFrame();
    }
  }

  async y_whenGreenFlag_12(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7DYz2T_I]X(84_G^w;+3, opcode: event_whenflagclicked
    while (true) {
      if (((this.backdropValue("number") === "2") && (this.var("tzms") === "9"))) {
        if ((this.var("dzfz") > "30")) {
          this.setVar("dzfz", "2");
        }
        if ((this.var("dzfz") < "2")) {
          this.setVar("dzfz", "30");
        }
      }
      await this.yieldFrame();
    }
  }

  async y_whenGreenFlag_13(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 3#Vn(Zt@*gzl#4%;R+{n, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("难度") === "1")) {
        this.setVar("难度名称", "菜鸟");
      }
      if ((this.var("难度") === "2")) {
        this.setVar("难度名称", "简单");
      }
      if ((this.var("难度") === "3")) {
        this.setVar("难度名称", "普通");
      }
      if ((this.var("难度") === "4")) {
        this.setVar("难度名称", "困难");
      }
      if ((this.var("难度") === "5")) {
        this.setVar("难度名称", "极难");
      }
      await this.yieldFrame();
    }
  }

  async y_whenBackdrop_1_14(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ehyT2j:)pw~LV/7^5tK[, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((!(this.backdropValue("number") === "1"))) {
        this.hideVariable("难度");
        this.hideVariable("战斗时好友数");
      }
      await this.yieldFrame();
    }
  }

  async y_whenKey_up_arrow_15(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 3?|GCBR9$y9TGDpEV]Gl, opcode: event_whenkeypressed
    this.showVariable("昵称");
  }

  async y_whenKey_down_arrow_16(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +Y]{Nl|uyEJh5,8vjSSm, opcode: event_whenkeypressed
    this.hideVariable("昵称");
  }

  async y_whenGreenFlag_17(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: %v97b0O:Tcy6wRHpk,Mg, opcode: event_whenflagclicked
    await this.wait(0.01);
    this.stopAllSounds();
    await this.playSoundUntilDone(this.sprite, "ks");
    await this.wait(1);
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        if (((this.var("sj") > "120") && (this.var("sj") < "360"))) {
          await this.playSoundUntilDone(this.sprite, "bjyy");
        } else {
          await this.playSoundUntilDone(this.sprite, "bjyy2");
        }
      }
      await this.yieldFrame();
    }
  }

  async y_whenBroadcast_zbdz_18(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Gq.AWXCw+ygedI:J{b(p, opcode: event_whenbroadcastreceived
    this.sprite.visible = false;
  }

  async y_whenGreenFlag_19(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: O0D8fmg@~fiX|C7$r?5;, opcode: event_whenflagclicked
    while (true) {
      if (this.list("好友单").includes(this.var("新夜怪主人"))) {
        if ((this.var("战斗时好友数") > (this.list("好友单").length - 1))) {
          this.setVar("战斗时好友数", (this.list("好友单").length - 1));
        }
      } else {
        if ((this.var("战斗时好友数") > this.list("好友单").length)) {
          this.setVar("战斗时好友数", this.list("好友单").length);
        }
      }
      await this.yieldFrame();
    }
  }

  async y_whenBroadcast_xlh_20(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: StnVzehOYrX-S%Q?*]a[, opcode: event_whenbroadcastreceived
    this.changeVar("轮回数", 1);
    this.changeVar("y金币", 100);
    this.setVar("y面包数量", "0");
    this.setVar("y水瓶数", "0");
    this.setVar("y烧鸡数量", "0");
  }

  async y_whenKey_up_arrow_21(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: E|6o=ubV(K!ThS7Y/Bd}, opcode: event_whenkeypressed
    this.showVariable("轮回数");
    this.showVariable("y皮肤颜色");
    this.showVariable("y精力");
    this.showVariable("y饱食度");
    this.showVariable("y水分");
    this.showVariable("y面包数量");
    this.showVariable("y水瓶数");
    this.showVariable("y烧鸡数量");
    this.showVariable("y子弹持有数");
    this.showVariable("y回血药水数量");
    this.showVariable("y无敌药水数量");
    this.showVariable("y解毒药水数量");
  }

  async y_whenKey_down_arrow_22(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: :GWT!Y~LuW3A9qr!.r_%, opcode: event_whenkeypressed
    this.hideVariable("轮回数");
    this.hideVariable("y皮肤颜色");
    this.hideVariable("y精力");
    this.hideVariable("y饱食度");
    this.hideVariable("y水分");
    this.hideVariable("y面包数量");
    this.hideVariable("y水瓶数");
    this.hideVariable("y烧鸡数量");
    this.hideVariable("y子弹持有数");
    this.hideVariable("y回血药水数量");
    this.hideVariable("y无敌药水数量");
    this.hideVariable("y解毒药水数量");
  }

  async y_whenKey_k_23(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: w9wxbN$iXp((tH?9.F)6, opcode: event_whenkeypressed
    if ((this.backdropValue("number") === "1")) {
      if ((this.list("好友单").length < "25")) {
        if ((!this.list("好友单").includes(this.var("新夜怪主人")))) {
          this.list("好友单").push(this.var("新夜怪主人"));
        }
      }
    }
  }

  async y_whenKey_l_24(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v(hgO4_aETtt%G%X]Os!, opcode: event_whenkeypressed
    if ((this.backdropValue("number") === "1")) {
      this.deleteOfList("好友单", this.itemNumOfList("好友单", this.var("新夜怪主人")));
    }
  }

  async y_whenKey_up_arrow_25(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: y{,T+uwtV]GXf2o-B5s{, opcode: event_whenkeypressed
    this.showVariable("y等级");
    this.showVariable("y满级");
    this.showVariable("签到");
    this.showList("好友单");
    this.showVariable("难度名称");
    this.showVariable("y大力丹数量");
    this.showVariable("y提神丹数量");
    this.showVariable("y蓄力丹数量");
    if ((this.backdropValue("number") === "1")) {
      this.showVariable("难度");
      this.showVariable("战斗时好友数");
    }
  }

  async y_whenKey_down_arrow_26(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 1i+U;,#V@91PdoJ}FIEr, opcode: event_whenkeypressed
    this.hideVariable("y等级");
    this.hideVariable("y满级");
    this.hideVariable("签到");
    this.hideList("好友单");
    this.hideVariable("难度名称");
    this.hideVariable("y大力丹数量");
    this.hideVariable("y提神丹数量");
    this.hideVariable("y蓄力丹数量");
    this.hideVariable("难度");
    this.hideVariable("战斗时好友数");
  }

  async y_whenGreenFlag_27(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: VHH%5Yp0d:Oqdt3/Y.Dz, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("签到") === "未签")) {
        if ((this.backdropValue("number") === "1")) {
          if (this.keyPressed("x")) {
            this.list("签到表").push(String(this.value("sensing_current", {}, {"CURRENTMENU": ["YEAR", null]})) + String(String(this.value("sensing_current", {}, {"CURRENTMENU": ["MONTH", null]})) + String(this.value("sensing_current", {}, {"CURRENTMENU": ["DATE", null]}))));
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y_whenGreenFlag_28(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ]AkgK9$Eb}|1vg2@WM*T, opcode: event_whenflagclicked
    while (true) {
      if (String(this.list("签到表")).includes(String(String(this.value("sensing_current", {}, {"CURRENTMENU": ["YEAR", null]})) + String(String(this.value("sensing_current", {}, {"CURRENTMENU": ["MONTH", null]})) + String(this.value("sensing_current", {}, {"CURRENTMENU": ["DATE", null]})))))) {
        this.setVar("签到", "已签");
      } else {
        this.setVar("签到", "未签");
      }
      if ((this.list("签到表").length > "3")) {
        this.deleteOfList("签到表", 1);
      }
      await this.yieldFrame();
    }
  }

  async proc_qhrw(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: BB@ge`00v~`~?)azM?+n, opcode: procedures_definition
    if ((this.var("rwx") === "1")) {
      this.setVar("rwx", "王");
    } else {
      this.setVar("rwx", "李");
    }
    if ((this.var("rwm") === "1")) {
      this.setVar("rwm", "新焰");
    } else {
      this.setVar("rwm", "灿薇");
    }
    this.setVar("新夜怪主人", String(this.var("rwx")) + String(this.var("rwm")));
    if ((this.var("rwm") === "队长")) {
      this.setVar("rwzdqd", "5");
    } else {
      if (((this.var("rwm") === "炫炫") || (this.var("rwm") === "伟"))) {
        this.setVar("rwzdqd", "4");
      } else {
        if ((((this.var("rwm") === "金光") || (this.var("rwm") === "会缘")) || ((this.var("rwm") === "珈豪") || (this.var("rwm") === "玥萱")))) {
          this.setVar("rwzdqd", "3");
        } else {
          if (((((this.var("rwm") === "灿薇") || (this.var("rwm") === "愿采")) || ((this.var("rwm") === "颖晗") || (this.var("rwm") === "宏波"))) || ((this.var("rwm") === "羽莉") || ((this.var("rwm") === "童") || (this.var("rwm") === "傲"))))) {
            this.setVar("rwzdqd", "2");
          } else {
            this.setVar("rwzdqd", "1");
          }
        }
      }
    }
  }

  async y_whenBackdrop_1_30(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: __c.@berUDEY!xX.1$9~, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("sfzbcz") === "0")) {
        if ((this.var("ysfsj") === "0")) {
          if (this.keyPressed("right arrow")) {
            if ((this.var("rwx") === "王")) {
              this.setVar("rwx", "1");
            } else {
              this.setVar("rwx", "2");
            }
            if ((this.var("rwm") === "新焰")) {
              this.setVar("rwm", "1");
            } else {
              this.setVar("rwm", "2");
            }
            this.changeVar("rwm", 1);
            if ((this.var("rwm") > "25")) {
              this.setVar("rwm", "1");
              this.changeVar("rwx", 1);
            }
            if ((this.var("rwx") > "10")) {
              this.setVar("rwx", "1");
            }
            await this.proc_qhrw(); // custom block "qhrw"
            await this.wait(0.15);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y_whenBackdrop_1_31(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Zd5kQPDw/TE@2UsI}i*q, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("sfzbcz") === "0")) {
        if ((this.var("ysfsj") === "0")) {
          if (this.keyPressed("left arrow")) {
            this.answer = await this.ask("输入人物姓(输入数字)");
            this.setVar("rwx", this.answer);
            this.answer = await this.ask("输入人物名(输入数字)");
            this.setVar("rwm", this.answer);
            await this.proc_qhrw(); // custom block "qhrw"
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y_whenBroadcast_xyx_32(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Akj4tYg--GfMcp#kn:`2, opcode: event_whenbroadcastreceived
    this.switchBackdrop("1");
    await this.proc_qhrw(); // custom block "qhrw"
  }

  async y_whenBackdrop_1_33(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: FLd:t`:`4Ea(_4/rX4H1, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -40, -60);
    this.pointInDirection(this.sprite, 90);
    this.showVariable("新夜怪主人");
  }

  async y_whenBackdrop_2_34(): Promise<void> {
    this.sprite = this.sprites["y"] ?? { name: "y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !ujEIPrB-lrYhX?msW=8, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -40, -60);
    this.pointInDirection(this.sprite, 90);
    this.hideVariable("新夜怪主人");
  }

  async d_whenBroadcast_sb_35(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: }H=/(LOl/:D-)5F;@.6j, opcode: event_whenbroadcastreceived
    if ((this.var("tzms") === "1")) {
      if ((this.var("昵称") === this.var("新夜怪主人"))) {
        await this.sayForSecs(this.sprite, "你居然敢冒充我", 1.5);
      } else {
        this.sprite.visible = true;
        this.setVar("dyy", this.random(1, 6));
        if (((((this.var("rwm") === "浩杰") || (this.var("rwm") === "珈豪")) || (((this.var("rwm") === "承达") || (this.var("rwm") === "文")) || ((this.var("rwm") === "傲") || (this.var("rwm") === "伟")))) || ((((this.var("rwm") === "新焰") || (this.var("rwm") === "金光")) || ((this.var("rwm") === "夜削") || (this.var("rwm") === "焰"))) || (((this.var("rwm") === "君") || (this.var("rwm") === "宏波")) || ((this.var("rwm") === "炫炫") || (this.var("rwm") === "队长")))))) {
          if ((this.var("dyy") === "1")) {
            await this.sayForSecs(this.sprite, "菜就多练。", 1.5);
          }
          if ((this.var("dyy") === "2")) {
            await this.sayForSecs(this.sprite, "这就是嚣张的后果。", 1.5);
          }
          if ((this.var("dyy") === "3")) {
            await this.sayForSecs(this.sprite, "小菜鸡,跟我比,你还是嫩了点。", 1.5);
          }
        } else {
          if ((this.var("dyy") === "1")) {
            await this.sayForSecs(this.sprite, "切,就这!", 1.5);
          }
          if ((this.var("dyy") === "2")) {
            if ((this.var("昵称") === "")) {
              await this.sayForSecs(this.sprite, "就你", 1.5);
            } else {
              await this.sayForSecs(this.sprite, String(this.var("昵称")) + String(",也不过如此嘛。"), 1.5);
            }
          }
        }
        this.sprite.visible = false;
      }
    }
  }

  async d_whenBroadcast_cg_36(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: `Im}ai{a|Tg8@_OLpQRi, opcode: event_whenbroadcastreceived
    if ((this.var("tzms") === "1")) {
      this.sprite.visible = true;
      this.setVar("dyy", this.random(1, 6));
      if ((this.var("dyy") === "1")) {
        await this.sayForSecs(this.sprite, "牛掰!", 1.5);
      }
      if ((this.var("dyy") === "2")) {
        await this.sayForSecs(this.sprite, "哼,算你有本事,下次我决不会输!", 1.5);
      }
      if ((this.var("dyy") === "3")) {
        await this.sayForSecs(this.sprite, "你给我等着!", 1.5);
      }
      this.sprite.visible = false;
    }
  }

  async d_whenGreenFlag_37(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ]}mCz3*TC,To0L7$@YD?, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 40, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async d_whenBackdrop_1_38(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: N;e@Ys?8SD!;~^QtMOq}, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 40, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async d_whenBackdrop_2_39(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: CRe|x#;A.E(+yd4v4Zq., opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 40, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async d_whenBroadcast_zbdz_40(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j)S:x=3Z9+:v:j!DS9W}, opcode: event_whenbroadcastreceived
    this.sprite.visible = false;
    this.goToXY(this.sprite, 40, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async d_whenBackdrop_3_41(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: cg:5@D5MI2kx,_sJ$@x|, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 40, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async d_whenBackdrop_4_42(): Promise<void> {
    this.sprite = this.sprites["d"] ?? { name: "d", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: cfZ9-aZ3OvIERFUCEywM, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 40, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async shengj_whenThisSpriteClicked_43(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: P#8Xb7M30lI+!kK.WnHg, opcode: event_whenthisspriteclicked
    this.showVariable("可升级");
    await this.wait(0.1);
    while (!((this.touching(this.sprite, "_mouse_") && this.mouseDown()))) {
      if ((!String(this.list("睡眠名单")).includes(String(this.var("新夜怪主人"))))) {
        if ((this.var("y金币") > (String(String(this.var("可升级")).charAt(Number(8) - 1)) + String(String(this.var("可升级")).charAt(Number(9) - 1)) - 0.01))) {
          if (this.keyPressed("1")) {
            if ((this.var("ycstl") < "395.01")) {
              this.playSound(this.sprite, "金币");
              this.changeVar("y金币", (0 - String(String(this.var("可升级")).charAt(Number(8) - 1)) + String(String(this.var("可升级")).charAt(Number(9) - 1))));
              this.changeVar("ycstl", 5);
              await this.wait(0.15);
            }
          }
        }
        if ((this.var("y金币") > (String(String(this.var("可升级")).charAt(Number(23) - 1)) + String(String(this.var("可升级")).charAt(Number(24) - 1)) - 0.01))) {
          if (this.keyPressed("2")) {
            if ((this.var("yhdfy") < "34.01")) {
              this.playSound(this.sprite, "金币");
              this.changeVar("y金币", (0 - String(String(this.var("可升级")).charAt(Number(23) - 1)) + String(String(this.var("可升级")).charAt(Number(24) - 1))));
              this.changeVar("yhdfy", 1);
              await this.wait(0.15);
            }
          }
        }
        if ((this.var("y金币") > (String(String(this.var("可升级")).charAt(Number(35) - 1)) + String(String(this.var("可升级")).charAt(Number(36) - 1)) - 0.01))) {
          if (this.keyPressed("3")) {
            if ((this.var("ygjsd") > "0.20499")) {
              this.playSound(this.sprite, "金币");
              this.changeVar("y金币", (0 - String(String(this.var("可升级")).charAt(Number(35) - 1)) + String(String(this.var("可升级")).charAt(Number(36) - 1))));
              this.changeVar("ygjsd", -0.005);
              await this.wait(0.15);
            }
          }
        }
        if ((this.var("y金币") > (String(String(this.var("可升级")).charAt(Number(47) - 1)) + String(String(this.var("可升级")).charAt(Number(48) - 1)) - 0.01))) {
          if (this.keyPressed("4")) {
            if ((this.var("yzd") < "9.01")) {
              this.playSound(this.sprite, "金币");
              this.changeVar("y金币", (0 - String(String(this.var("可升级")).charAt(Number(47) - 1)) + String(String(this.var("可升级")).charAt(Number(48) - 1))));
              this.changeVar("yzd", 1);
              await this.wait(0.15);
            }
          }
        }
      }
      await this.yieldFrame();
    }
    this.hideVariable("可升级");
  }

  async shengj_whenBroadcast_qhrw_44(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: m(f66Y/LI|a+A.w]-S]8, opcode: event_whenbroadcastreceived
    this.setVar("可升级", String(String(String(String(String(String(String(String("1.体力升级药") + String(this.random(30, 50))) + String("元/颗 2.护盾防御升级豆")) + String(this.random(10, 30))) + String("元/粒 3.攻击速度")) + String(this.random(30, 50))) + String("元/级 4.子弹数量")) + String(this.random(90, 99))) + String("元/级"));
  }

  async shengj_whenBroadcast_xyx_45(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: $THN{uA-!b*k}2DKk6(!, opcode: event_whenbroadcastreceived
    this.hideVariable("可升级");
  }

  async shengj_whenGreenFlag_46(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: CfvsJ+@H6dv+/gOC+Hh4, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("y金币") > "9")) {
        this.switchCostume(this.sprite, "2");
      } else {
        this.switchCostume(this.sprite, "1");
      }
      await this.yieldFrame();
    }
  }

  async shengj_whenKey_5_47(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Go5bOvIR,$67)wyQF1Zk, opcode: event_whenkeypressed
    this.showVariable("y初始体力");
    this.showVariable("y护盾防御");
    this.showVariable("y攻击速度");
    this.showVariable("y子弹数量");
  }

  async shengj_whenKey_6_48(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ~ZQE)]_5CXcw~Y?0[tvg, opcode: event_whenkeypressed
    this.hideVariable("y初始体力");
    this.hideVariable("y护盾防御");
    this.hideVariable("y攻击速度");
    this.hideVariable("y子弹数量");
  }

  async shengj_whenGreenFlag_49(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: vSc;a;G`zd(ZlK6HKctP, opcode: event_whenflagclicked
    while (true) {
      this.setVar("y初始体力", String(String(Math.round(Number(((this.var("ycstl") - 25) / 5)))) + String("/75")) + String("级"));
      this.setVar("y护盾防御", String(String(Math.round(Number(this.var("yhdfy")))) + String("/35")) + String("级"));
      this.setVar("y攻击速度", String(String(Math.round(Number(((0.4 - this.var("ygjsd")) * 200)))) + String("/40")) + String("级"));
      this.setVar("y子弹数量", String(String(Math.round(Number(this.var("yzd")))) + String("/10")) + String("级"));
      await this.yieldFrame();
    }
  }

  async shengj_whenThisSpriteClicked_50(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: aK!K.7mrio=(Dhv?+`rA, opcode: event_whenthisspriteclicked
    await this.wait(0.1);
    this.stopAllSounds();
    while (!(((this.touching(this.sprite, "_mouse_") && this.mouseDown()) || (this.backdropValue("number") > "1")))) {
      if ((!String(this.list("睡眠名单")).includes(String(this.var("新夜怪主人"))))) {
        await this.playSoundUntilDone(this.sprite, "sd");
      }
      await this.yieldFrame();
    }
  }

  async shengj_whenKey_up_arrow_51(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: uHh`kc$Woax==o$VOl`9, opcode: event_whenkeypressed
    this.showVariable("时间");
  }

  async shengj_whenKey_down_arrow_52(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: )t@Gm`%6TRkIFRn]D{gD, opcode: event_whenkeypressed
    this.hideVariable("时间");
  }

  async shengj_whenGreenFlag_53(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: _V9k:+)p,L)bLdMQNtnI, opcode: event_whenflagclicked
    while (true) {
      if (((this.backdropValue("number") > "1") || String(this.list("睡眠名单")).includes(String(this.var("新夜怪主人"))))) {
        this.sprite.visible = false;
      } else {
        this.sprite.visible = true;
      }
      await this.yieldFrame();
    }
  }

  async shengj_whenBackdrop_3_54(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7EI;K?IvOEGYrNwjt6/v, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -190, 40);
    this.pointInDirection(this.sprite, 90);
    this.hideVariable("可升级");
  }

  async shengj_whenBackdrop_1_55(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: FLd:t`:`4Ea(_4/rX4H1, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -190, 40);
    this.pointInDirection(this.sprite, 90);
  }

  async shengj_whenBackdrop_2_56(): Promise<void> {
    this.sprite = this.sprites["shengj"] ?? { name: "shengj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !ujEIPrB-lrYhX?msW=8, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -190, 40);
    this.pointInDirection(this.sprite, 90);
    this.hideVariable("可升级");
  }

  async tz_whenBackdrop_1_57(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ZBrwmO+|-fUG2JNkQiW|, opcode: event_whenbackdropswitchesto
    this.goToXY(this.sprite, -130, 40);
    this.pointInDirection(this.sprite, 90);
  }

  async tz_whenBackdrop_2_58(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ivaOyN5X)sm!p?zH%u-G, opcode: event_whenbackdropswitchesto
    this.goToXY(this.sprite, -130, 40);
    this.pointInDirection(this.sprite, 90);
  }

  async tz_whenGreenFlag_59(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: HcGbCnyW%#ljYWKv{k#U, opcode: event_whenflagclicked
    while (true) {
      if ((String(this.list("战斗烦恼名单")).includes(String(this.var("新夜怪主人"))) || String(this.list("睡眠名单")).includes(String(this.var("新夜怪主人"))))) {
        this.sprite.visible = false;
      } else {
        if ((this.backdropValue("number") === "1")) {
          this.sprite.visible = true;
        } else {
          this.sprite.visible = false;
        }
      }
      if (String(this.list("邀请战斗名单")).includes(String(this.var("新夜怪主人")))) {
        this.switchCostume(this.sprite, "3");
      } else {
        if ((this.var("y金币") > "9")) {
          this.switchCostume(this.sprite, "1");
        } else {
          this.switchCostume(this.sprite, "2");
        }
      }
      await this.yieldFrame();
    }
  }

  async tz_whenGreenFlag_60(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Bi9AIKj(zVgC$kF+VLUS, opcode: event_whenflagclicked
    this.switchBackdrop("1");
  }

  async tz_whenGreenFlag_61(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Sz2RrV__V`9%]Q/^+{j~, opcode: event_whenflagclicked
    while (true) {
      await this.wait(150);
      this.deleteOfList("战斗烦恼名单", 1);
      await this.yieldFrame();
    }
  }

  async tz_whenGreenFlag_62(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 5i0S6?YG~=bFX*A/`xRS, opcode: event_whenflagclicked
    this.setVar("rwx2", "0");
    this.setVar("rwm2", "0");
    this.setVar("rwx3", "0");
    this.setVar("rwm3", "0");
    this.setVar("新夜怪主人2", "0");
    while (true) {
      await this.wait(400);
      await this.proc_szxm2(); // custom block "szxm2"
      await this.yieldFrame();
    }
  }

  async proc_szxm2(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: TI6%3e*#;XFkH0PM2/=^, opcode: procedures_definition
    if ((this.list("战斗烦恼名单").length < "250")) {
      this.setVar("rwx2", this.random(1, 10));
      if ((this.random(1, 12) < "8")) {
        this.setVar("rwm2", this.random(1, 14));
      } else {
        this.setVar("rwm2", this.random(16, 25));
      }
      if ((this.var("rwx2") === "1")) {
        this.setVar("rwx2", "王");
      } else {
        this.setVar("rwx2", "李");
      }
      if ((this.var("rwm2") === "1")) {
        this.setVar("rwm2", "新焰");
      } else {
        this.setVar("rwm2", "灿薇");
      }
      this.setVar("新夜怪主人2", String(this.var("rwx2")) + String(this.var("rwm2")));
      if ((String(this.list("战斗烦恼名单")).includes(String(this.var("新夜怪主人2"))) || String(this.list("睡眠名单")).includes(String(this.var("新夜怪主人2"))))) {
        await this.proc_szxm2(); // custom block "szxm2"
      } else {
        this.list("邀请战斗名单").push(this.var("新夜怪主人2"));
      }
    }
  }

  async tz_whenBroadcast_yrfqtz_64(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 9NO3fDrgcT+U9ML@[F%%, opcode: event_whenbroadcastreceived
    await this.wait(250);
    this.deleteOfList("邀请战斗名单", 1);
  }

  async tz_whenKey_g_65(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: pE@}FR7VN#mHOZPNh5[S, opcode: event_whenkeypressed
    await this.wait(0.1);
    if ((this.var("sfzbcz") === "0")) {
      if ((this.backdropValue("number") === "1")) {
        this.changeVar("tzms", 1);
      }
    }
  }

  async tz_whenGreenFlag_66(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: q:BJxpxpg!i,SARv[!fu, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("tzms") === "1")) {
        this.setVar("挑战模式", "普通模式");
      }
      if ((this.var("tzms") === "2")) {
        this.setVar("挑战模式", "无伤挑战");
      }
      if ((this.var("tzms") === "3")) {
        this.setVar("挑战模式", "识破练习");
      }
      if ((this.var("tzms") === "4")) {
        this.setVar("挑战模式", "随机子弹");
      }
      if ((this.var("tzms") === "5")) {
        this.setVar("挑战模式", "测试模式");
      }
      if ((this.var("tzms") === "6")) {
        this.setVar("挑战模式", "时间限制");
      }
      if ((this.var("tzms") === "7")) {
        this.setVar("挑战模式", "得分模式");
      }
      if ((this.var("tzms") === "8")) {
        this.setVar("挑战模式", "隐藏模式");
      }
      if ((this.var("tzms") === "9")) {
        this.setVar("挑战模式", "沙袋模式");
      }
      if ((this.var("tzms") === "10")) {
        this.setVar("挑战模式", "五人挑战");
      }
      if ((this.var("tzms") === "11")) {
        this.setVar("挑战模式", "终极挑战");
      }
      await this.yieldFrame();
    }
  }

  async tz_whenGreenFlag_67(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: L10TJ@!bLrDZh0m#y0)G, opcode: event_whenflagclicked
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        this.stopAllSounds();
        this.playSound(this.sprite, "出战");
        await this.wait(1);
        if ((this.random(1, 5) === "1")) {
          if ((this.random(1, 2) === "1")) {
            while (!((this.backdropValue("number") === "1"))) {
              await this.playSoundUntilDone(this.sprite, "9");
              await this.yieldFrame();
            }
          } else {
            while (!((this.backdropValue("number") === "1"))) {
              await this.playSoundUntilDone(this.sprite, "10");
              await this.yieldFrame();
            }
          }
        } else {
          if (((this.var("sj") > "120") && (this.var("sj") < "360"))) {
            this.setVar("bjyy", this.random(1, 4));
          } else {
            this.setVar("bjyy", this.random(5, 8));
          }
          if ((this.var("bjyy") === "1")) {
            while (!((this.backdropValue("number") === "1"))) {
              await this.playSoundUntilDone(this.sprite, "1");
              await this.yieldFrame();
            }
          } else {
            while (!((this.backdropValue("number") === "1"))) {
              await this.playSoundUntilDone(this.sprite, "2");
              await this.yieldFrame();
            }
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async tz_whenGreenFlag_68(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: sc,f2yID5lc,aDU^aMzN, opcode: event_whenflagclicked
    while (true) {
      if (((this.backdropValue("number") === "2") && ((this.var("tzms") === "6") || (this.var("tzms") === "7")))) {
        this.showVariable("时间限制");
        if ((this.var("tzms") === "7")) {
          this.showVariable("y得分");
          this.showVariable("最高分");
        }
      } else {
        this.hideVariable("时间限制");
        this.hideVariable("y得分");
        this.hideVariable("最高分");
      }
      await this.yieldFrame();
    }
  }

  async tz_whenGreenFlag_69(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: f260M*ocBQ`;q{`$.~#e, opcode: event_whenflagclicked
    while (true) {
      if (((this.backdropValue("number") === "2") && ((this.var("tzms") === "6") || (this.var("tzms") === "7")))) {
        await this.wait(1);
        this.changeVar("时间限制", -1);
        if ((this.var("tzms") === "6")) {
          if ((this.var("时间限制") < "0")) {
            this.switchBackdrop("1");
          }
        } else {
          if ((this.var("时间限制") < "0")) {
            this.switchBackdrop("1");
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async tz_whenBroadcast_xyx_70(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Ji`H?HhbPJgof9SuY67h, opcode: event_whenbroadcastreceived
    this.list("睡眠名单").length = 0;
  }

  async tz_whenBroadcast_xlh_71(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ,dQ]cy[dzja!=mz;798h, opcode: event_whenbroadcastreceived
    this.list("睡眠名单").length = 0;
  }

  async tz_whenGreenFlag_72(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: k+?,p8H;f.k;t[!g]({$, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("sj") === "140")) {
        for (let i = 0, n = Number(120); i < n; i++) {
          this.deleteOfList("睡眠名单", 1);
          await this.yieldFrame();
        }
      }
      if ((this.var("sj") === "180")) {
        this.list("睡眠名单").length = 0;
        this.list("睡眠名单").push("王明月");
        this.list("睡眠名单").push("李明月");
        this.list("睡眠名单").push("张明月");
        this.list("睡眠名单").push("刘明月");
        this.list("睡眠名单").push("王夜削");
        this.list("睡眠名单").push("李夜削");
        this.list("睡眠名单").push("刘夜削");
        this.list("睡眠名单").push("陈夜削");
      }
      if ((this.var("sj") === "380")) {
        for (let i = 0, n = Number(17); i < n; i++) {
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "王明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "李明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "张明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "刘明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "王夜削"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "李夜削"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "刘夜削"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "陈夜削"));
          await this.yieldFrame();
        }
      }
      if ((this.var("sj") === "420")) {
        for (let i = 0, n = Number(250); i < n; i++) {
          this.setVar("rwx3", this.random(1, 10));
          this.setVar("rwm3", this.random(1, 25));
          if ((this.var("rwx3") === "1")) {
            this.setVar("rwx3", "王");
          } else {
            this.setVar("rwx3", "李");
          }
          if ((this.var("rwm3") === "1")) {
            this.setVar("rwm3", "新焰");
          } else {
            this.setVar("rwm3", "灿薇");
          }
          this.list("睡眠名单").push(String(this.var("rwx3")) + String(this.var("rwm3")));
          await this.yieldFrame();
        }
        for (let i = 0, n = Number(17); i < n; i++) {
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "王明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "李明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "张明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "刘明月"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "王夜削"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "李夜削"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "刘夜削"));
          this.deleteOfList("睡眠名单", this.itemNumOfList("睡眠名单", "陈夜削"));
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async tz_whenThisSpriteClicked_73(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2`4v):_IU(!PZI|F$^}:, opcode: event_whenthisspriteclicked
    if (((this.var("tzms") === "6") || (this.var("tzms") === "7"))) {
      this.answer = await this.ask("输入限制时间(10~60秒)");
      this.setVar("时间限制", this.answer);
    }
    if ((this.var("时间限制") > "60")) {
      this.setVar("时间限制", "60");
    }
    if ((this.var("时间限制") < "10")) {
      this.setVar("时间限制", "10");
    }
    if ((this.var("tzms") === "9")) {
      this.answer = await this.ask("输入d体力");
      this.setVar("d体力", (this.answer / 100));
    }
    await this.wait(3);
    this.switchBackdrop("2");
  }

  async tz_whenBackdrop_2_74(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: f3B:J~dNSa_qUXYn6KPB, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("ysfsj") === "1")) {
      }
      await this.yieldFrame();
    }
  }

  async tz_whenGreenFlag_75(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: YY^b7p?SocL5r0fGFi[w, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("新夜怪主人") === "王队长")) {
        if ((this.var("tzms") > "11")) {
          this.setVar("tzms", "1");
        }
      } else {
        if ((this.var("tzms") > "10")) {
          this.setVar("tzms", "1");
        }
      }
      await this.yieldFrame();
    }
  }

  async tz_whenGreenFlag_76(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: D%9QX{4/HfA$;X@vZH_;, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("新夜怪主人") === "王队长")) {
        if ((this.var("tzms") > "11")) {
          this.setVar("tzms", "1");
        }
      } else {
        if ((this.var("tzms") > "10")) {
          this.setVar("tzms", "1");
        }
      }
      await this.yieldFrame();
    }
  }

  async tz_whenBackdrop_3_77(): Promise<void> {
    this.sprite = this.sprites["tz"] ?? { name: "tz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 1mN-l(#MaOxsv.rWqIaj, opcode: event_whenbackdropswitchesto
    this.goToXY(this.sprite, -130, 40);
    this.pointInDirection(this.sprite, 90);
  }

  async gm_whenBackdrop_1_78(): Promise<void> {
    this.sprite = this.sprites["gm"] ?? { name: "gm", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: C3+02vXuD-iOT_Ah6Q3/, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -190, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async gm_whenBackdrop_1_79(): Promise<void> {
    this.sprite = this.sprites["gm"] ?? { name: "gm", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: }+IR[!J,=j;05t(Oc!kR, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("昵称") === "")) {
        this.switchCostume(this.sprite, "2");
      } else {
        this.switchCostume(this.sprite, "1");
      }
      await this.yieldFrame();
    }
  }

  async gm_whenThisSpriteClicked_80(): Promise<void> {
    this.sprite = this.sprites["gm"] ?? { name: "gm", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: `(oF+cg:|PchM*=]qqt6, opcode: event_whenthisspriteclicked
    this.answer = await this.ask("更改昵称为:");
    this.setVar("昵称", this.answer);
  }

  async gm_whenBackdrop_3_81(): Promise<void> {
    this.sprite = this.sprites["gm"] ?? { name: "gm", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: gohVtKm,=khZFG(z51xU, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -190, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async gm_whenBackdrop_4_82(): Promise<void> {
    this.sprite = this.sprites["gm"] ?? { name: "gm", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: sANikDAS.2$Adog7:)ya, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -240, -180);
    this.pointInDirection(this.sprite, 90);
  }

  async gm_whenBackdrop_2_83(): Promise<void> {
    this.sprite = this.sprites["gm"] ?? { name: "gm", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v]HskllGZdg3418x!TVV, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -190, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async gm_whenGreenFlag_84(): Promise<void> {
    this.sprite = this.sprites["gm"] ?? { name: "gm", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -190, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async shuij_whenBackdrop_4_85(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: [PQraWTDo)UW1Nb5=A*!, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -240, -180);
    this.pointInDirection(this.sprite, 90);
  }

  async shuij_whenThisSpriteClicked_86(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v$0C(MyL*,][2+-+MY+Z, opcode: event_whenthisspriteclicked
    if (((!((this.var("sj") > "119") && (this.var("sj") < "421"))) || (this.var("y精力") < "0"))) {
      this.sprite.visible = false;
    }
  }

  async shuij_whenBroadcast_sb_87(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: fiIy@k$mc3d/R]RB,!kQ, opcode: event_whenbroadcastreceived
    this.changeVar("y精力", -3);
  }

  async shuij_whenBroadcast_cg_88(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: pq6evbRlPP!ITW4r-Ckz, opcode: event_whenbroadcastreceived
    this.changeVar("y精力", -5);
  }

  async shuij_whenBackdrop_1_89(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;O}ObMTVVBF43mJOV9$R, opcode: event_whenbackdropswitchesto
    while (true) {
      await this.wait(1);
      this.changeVar("y精力", -0.05);
      await this.yieldFrame();
    }
  }

  async shuij_whenBackdrop_1_90(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: r1T_Y{W2rWlpw6)_M9uA, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y精力") > this.var("y最高精力"))) {
        this.setVar("y精力", this.var("y最高精力"));
      }
      await this.yieldFrame();
    }
  }

  async shuij_whenBackdrop_1_91(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: E,`T29NFdNDb+%/FdlVV, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y精力") < "0")) {
        this.sprite.visible = false;
        this.setVar("y精力", "0.65");
      }
      await this.yieldFrame();
    }
  }

  async shuij_whenBackdrop_1_92(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: UZ#g-Y(Ku]R3kB~wgJx1, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y饱食度") > "100")) {
        this.setVar("y饱食度", "100");
      }
      await this.yieldFrame();
    }
  }

  async shuij_whenBackdrop_1_93(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: wt%/rk-#tYh.UUU:F4K6, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y水分") > "100")) {
        this.setVar("y水分", "100");
      }
      await this.yieldFrame();
    }
  }

  async shuij_whenBackdrop_1_94(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: .hU}7eKRM[LmrH8(C0(1, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -130, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async shuij_whenBackdrop_1_95(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: @ru6tl57:%;=uaGFV*Up, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((!((this.var("sj") > "119") && (this.var("sj") < "421"))) || (this.var("y精力") < "0"))) {
        this.switchCostume(this.sprite, "2");
      } else {
        this.switchCostume(this.sprite, "1");
      }
      await this.yieldFrame();
    }
  }

  async shuij_whenBroadcast_ysx_96(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: }iZof.Tme^ujRfOcL3R{, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
  }

  async shuij_whenBackdrop_3_97(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: }DuI}i9-AI]v.H#Y7B#G, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -130, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async shuij_whenBackdrop_2_98(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v]HskllGZdg3418x!TVV, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -130, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async shuij_whenGreenFlag_99(): Promise<void> {
    this.sprite = this.sprites["shuij"] ?? { name: "shuij", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -130, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async gw_whenBackdrop_4_100(): Promise<void> {
    this.sprite = this.sprites["gw"] ?? { name: "gw", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Vi]m}m@+`?XL9k7}UU%4, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -240, -180);
    this.pointInDirection(this.sprite, 90);
  }

  async gw_whenBackdrop_1_101(): Promise<void> {
    this.sprite = this.sprites["gw"] ?? { name: "gw", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: qM*vh?rN6-coksi^7aeT, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -190, -40);
    this.pointInDirection(this.sprite, 90);
  }

  async gw_whenBackdrop_2_102(): Promise<void> {
    this.sprite = this.sprites["gw"] ?? { name: "gw", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: nlRE9*3n4TKT3|B$F.(D, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -190, -40);
    this.pointInDirection(this.sprite, 90);
  }

  async gw_whenBackdrop_1_103(): Promise<void> {
    this.sprite = this.sprites["gw"] ?? { name: "gw", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: IOu@b$67o=VF[J~[]+.9, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((this.var("y子弹持有数") < "1000") || ((this.var("y饱食度") < "20") || (this.var("y水分") < "20")))) {
        this.switchCostume(this.sprite, "2");
      } else {
        this.switchCostume(this.sprite, "1");
      }
      await this.yieldFrame();
    }
  }

  async gw_whenThisSpriteClicked_104(): Promise<void> {
    this.sprite = this.sprites["gw"] ?? { name: "gw", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: `(oF+cg:|PchM*=]qqt6, opcode: event_whenthisspriteclicked
    this.answer = await this.ask("输入购买物品1面包2水3烧鸡(2元)子弹1元2500");
    if ((this.var("y金币") > "1.99")) {
      if ((this.answer === "1")) {
        this.changeVar("y金币", -2);
        this.changeVar("y面包数量", 1);
        this.playSound(this.sprite, "gw");
      }
      if ((this.answer === "2")) {
        this.changeVar("y金币", -2);
        this.changeVar("y水瓶数", 1);
        this.playSound(this.sprite, "gw");
      }
      if ((this.answer === "3")) {
        this.changeVar("y金币", -2);
        this.changeVar("y烧鸡数量", 1);
        this.playSound(this.sprite, "gw");
      }
    }
    if ((this.var("y金币") > "0.99")) {
      if ((this.answer === "子弹")) {
        if ((this.var("y子弹持有数") < ((this.var("背包等级") * 2000) + 7501))) {
          this.changeVar("y金币", -1);
          this.changeVar("y子弹持有数", 2500);
          this.playSound(this.sprite, "gw");
        }
      }
    }
  }

  async gw_whenBackdrop_3_105(): Promise<void> {
    this.sprite = this.sprites["gw"] ?? { name: "gw", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Rh_Ev{;gyg,2~B%=^YsM, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -190, -40);
    this.pointInDirection(this.sprite, 90);
  }

  async gw_whenGreenFlag_106(): Promise<void> {
    this.sprite = this.sprites["gw"] ?? { name: "gw", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -190, -40);
    this.pointInDirection(this.sprite, 90);
  }

  async syfy_whenBackdrop_4_107(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: a+w-F!~aqxBF%=wg(H5F, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -240, -180);
    this.pointInDirection(this.sprite, 90);
  }

  async syfy_whenBackdrop_2_108(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: tlbSlGKkzkG~$.aO^|$f, opcode: event_whenbackdropswitchesto
    this.setVar("ysfwd", "0");
    while (true) {
      if ((this.var("ysfwd") === "1")) {
        await this.wait(15);
        this.setVar("ysfwd", "0");
      }
      await this.yieldFrame();
    }
  }

  async syfy_whenBackdrop_2_109(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;ujq]2$Cxi3[W1j{WG];, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("ysfwd") === "1")) {
        this.setVar("y体力2", this.var("y体力"));
        while (!((this.var("ysfwd") === "0"))) {
          this.setVar("y体力", this.var("y体力2"));
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async syfy_whenBackdrop_2_110(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: u4}H1]@56T?;B{WVgdi7, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -140, 160);
    this.pointInDirection(this.sprite, 90);
  }

  async syfy_whenBackdrop_1_111(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: iOBNc=0.-0e%Yo9Gg`zd, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((this.var("y饱食度") < "20") || (this.var("y水分") < "20"))) {
        this.switchCostume(this.sprite, "2");
      } else {
        this.switchCostume(this.sprite, "1");
      }
      await this.yieldFrame();
    }
  }

  async syfy_whenBackdrop_3_112(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: a6Q@#dsiJ$(##`DF|{Z-, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -140, 160);
    this.pointInDirection(this.sprite, 90);
  }

  async syfy_whenBackdrop_1_113(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v]HskllGZdg3418x!TVV, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -130, -40);
    this.pointInDirection(this.sprite, 90);
  }

  async syfy_whenThisSpriteClicked_114(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: `(oF+cg:|PchM*=]qqt6, opcode: event_whenthisspriteclicked
    this.answer = await this.ask("输入食用物品1面包2水3烧鸡4回血药水5无敌药水6解毒药水7大力丹8提神丹9蓄力丹");
    if ((this.answer === "1")) {
      if ((this.var("y面包数量") > "0")) {
        this.changeVar("y面包数量", -1);
        this.changeVar("y饱食度", 15);
        this.playSound(this.sprite, "1");
      }
    }
    if ((this.answer === "2")) {
      if ((this.var("y水瓶数") > "0")) {
        this.changeVar("y水瓶数", -1);
        this.changeVar("y水分", 15);
      }
    }
    if ((this.answer === "3")) {
      if ((this.var("y烧鸡数量") > "0")) {
        this.changeVar("y烧鸡数量", -1);
        this.changeVar("y饱食度", 12);
        this.changeVar("y水分", 3);
        this.playSound(this.sprite, "1");
      }
    }
    if ((this.answer === "4")) {
      if (((this.var("y回血药水数量") > "0") && (!(this.var("tzms") === "5")))) {
        this.changeVar("y回血药水数量", -1);
        this.changeVar("y水分", 5);
        this.changeVar("y体力", 25);
        if ((this.var("y体力") > this.var("ycstl"))) {
          this.setVar("y体力", this.var("ycstl"));
        }
      }
      if ((this.var("tzms") === "5")) {
        this.changeVar("y体力", 25);
        if ((this.var("y体力") > this.var("ycstl"))) {
          this.setVar("y体力", this.var("ycstl"));
        }
      }
    }
    if ((this.answer === "5")) {
      if (((this.var("y无敌药水数量") > "0") && (!(this.var("tzms") === "5")))) {
        this.changeVar("y无敌药水数量", -1);
        this.changeVar("y水分", 5);
        this.setVar("ysfwd", "1");
      }
      if ((this.var("tzms") === "5")) {
        this.setVar("ysfwd", "1");
      }
    }
    if ((this.answer === "6")) {
      if (((this.var("y解毒药水数量") > "0") && (!(this.var("tzms") === "5")))) {
        this.changeVar("y解毒药水数量", -1);
        this.changeVar("y水分", 5);
        this.setVar("ysfzd", "0");
      }
      if ((this.var("tzms") === "5")) {
        this.setVar("ysfzd", "0");
      }
    }
    if ((this.answer === "7")) {
      if ((this.var("y大力丹数量") > "0")) {
        this.changeVar("y大力丹数量", -1);
        this.changeVar("y最高气力", 10);
        this.playSound(this.sprite, "1");
      }
    }
    if ((this.answer === "8")) {
      if ((this.var("y提神丹数量") > "0")) {
        this.changeVar("y提神丹数量", -1);
        this.changeVar("y最高精力", 10);
        this.playSound(this.sprite, "1");
      }
    }
    if ((this.answer === "9")) {
      if ((this.var("y蓄力丹数量") > "0")) {
        this.changeVar("y蓄力丹数量", -1);
        this.changeVar("y蓄力速度", 0.01);
        this.playSound(this.sprite, "1");
      }
    }
  }

  async syfy_whenGreenFlag_115(): Promise<void> {
    this.sprite = this.sprites["syfy"] ?? { name: "syfy", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -130, -40);
    this.pointInDirection(this.sprite, 90);
  }

  async xygxlc_whenBackdrop_4_116(): Promise<void> {
    this.sprite = this.sprites["xygxlc"] ?? { name: "xygxlc", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: f?1usi#(DJQD0ugyj/(Q, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -240, -180);
    this.pointInDirection(this.sprite, 90);
  }

  async xygxlc_whenGreenFlag_117(): Promise<void> {
    this.sprite = this.sprites["xygxlc"] ?? { name: "xygxlc", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: L_f2-VN7TAH%n=s#EKh^, opcode: event_whenflagclicked
    while (true) {
      while (!((this.touching(this.sprite, "_mouse_") && this.mouseDown()))) await this.yieldFrame();
      this.goToXY(this.sprite, -200, 160);
      this.switchCostume(this.sprite, "2");
      this.switchBackdrop("3");
      if ((this.backdropValue("number") === "3")) {
        while (!((this.touching(this.sprite, "_mouse_") && this.mouseDown()))) await this.yieldFrame();
      }
      this.switchBackdrop("1");
      await this.yieldFrame();
    }
  }

  async xygxlc_whenBackdrop_1_118(): Promise<void> {
    this.sprite = this.sprites["xygxlc"] ?? { name: "xygxlc", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: C3+02vXuD-iOT_Ah6Q3/, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -190, -80);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
  }

  async xygxlc_whenBackdrop_2_119(): Promise<void> {
    this.sprite = this.sprites["xygxlc"] ?? { name: "xygxlc", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v]HskllGZdg3418x!TVV, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -190, -80);
    this.pointInDirection(this.sprite, 90);
  }

  async xygxlc_whenGreenFlag_120(): Promise<void> {
    this.sprite = this.sprites["xygxlc"] ?? { name: "xygxlc", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -190, -80);
    this.pointInDirection(this.sprite, 90);
  }

  async sjbb_whenBackdrop_4_121(): Promise<void> {
    this.sprite = this.sprites["sjbb"] ?? { name: "sjbb", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: T8o?Ydz3ic*!cxe0t:t(, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -240, -180);
    this.pointInDirection(this.sprite, 90);
  }

  async sjbb_whenBackdrop_3_122(): Promise<void> {
    this.sprite = this.sprites["sjbb"] ?? { name: "sjbb", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: o9T+~f[euT./K?,wMr{4, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -130, -80);
    this.pointInDirection(this.sprite, 90);
  }

  async sjbb_whenThisSpriteClicked_123(): Promise<void> {
    this.sprite = this.sprites["sjbb"] ?? { name: "sjbb", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M,M;b7VIbsWL4I6,)O}, opcode: event_whenthisspriteclicked
    if (((this.var("y金币") > "9") && (this.var("背包等级") < "15"))) {
      this.changeVar("y金币", -10);
      this.changeVar("背包等级", 1);
      this.playSound(this.sprite, "1");
    }
  }

  async sjbb_whenBackdrop_1_124(): Promise<void> {
    this.sprite = this.sprites["sjbb"] ?? { name: "sjbb", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: C3+02vXuD-iOT_Ah6Q3/, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -130, -80);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
  }

  async sjbb_whenBackdrop_2_125(): Promise<void> {
    this.sprite = this.sprites["sjbb"] ?? { name: "sjbb", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v]HskllGZdg3418x!TVV, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -130, -80);
    this.pointInDirection(this.sprite, 90);
  }

  async sjbb_whenGreenFlag_126(): Promise<void> {
    this.sprite = this.sprites["sjbb"] ?? { name: "sjbb", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -130, -80);
    this.pointInDirection(this.sprite, 90);
  }

  async fq_whenBroadcast_fq_127(): Promise<void> {
    this.sprite = this.sprites["fq"] ?? { name: "fq", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: n{[#+#7qrMz-USf{kWAt, opcode: event_whenbroadcastreceived
    this.switchBackdrop("1");
    if (String(this.list("邀请战斗名单")).includes(String(this.var("新夜怪主人")))) {
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
    }
    this.setVar("dsfcz", "0");
    this.setVar("dbysp", "0");
    this.setVar("dbysp2阶段", "0");
  }

  async fq_whenBackdrop_1_128(): Promise<void> {
    this.sprite = this.sprites["fq"] ?? { name: "fq", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: FLd:t`:`4Ea(_4/rX4H1, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -130, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async fq_whenThisSpriteClicked_129(): Promise<void> {
    this.sprite = this.sprites["fq"] ?? { name: "fq", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2`4v):_IU(!PZI|F$^}:, opcode: event_whenthisspriteclicked
    this.stopAllSounds();
  }

  async fq_whenBackdrop_2_130(): Promise<void> {
    this.sprite = this.sprites["fq"] ?? { name: "fq", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !ujEIPrB-lrYhX?msW=8, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 160);
    this.pointInDirection(this.sprite, 90);
  }

  async y2_whenBackdrop_2_131(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Jd~-kb~^BS^/!40c?%|l, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("tzms") === "10")) {
        if ((this.var("y体力") > (this.var("ycstl") * 2))) {
          this.setVar("y体力", (this.var("ycstl") * 2));
        }
      } else {
        // empty
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_zbdz_132(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: iZ2HJZzilaq;j;ah**Mw, opcode: event_whenbroadcastreceived
    while (!((this.backdropValue("number") > "1"))) {
      this.sprite.visible = true;
      this.goToXY(this.sprite, -200, 0);
      this.pointInDirection(this.sprite, 90);
      this.switchCostume(this.sprite, "1");
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_133(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: BJ^JS3afr-j4`Qvp|/dV, opcode: event_whenbackdropswitchesto
    this.setVar("ysfpdd", "0");
    while (true) {
      if ((this.var("tzms") === "7")) {
        if ((this.touching(this.sprite, "d2") && (this.var("ysfpdd") === "1"))) {
          this.changeVar("y得分", (0 - (this.var("ygj") * 2)));
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_134(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: SgDl{v/p83}P3D}bwW|m, opcode: event_whenbackdropswitchesto
    this.setVar("ysfpdd", "0");
    while (true) {
      if ((this.var("tzms") === "7")) {
        if (this.touching(this.sprite, "d2")) {
          this.changeVar("y得分", (0 - this.var("dgj")));
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_135(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: %bGaKP[v+|k3oUbg[Cj@, opcode: event_whenbackdropswitchesto
    this.setVar("ytl2", "0");
    while (true) {
      if ((this.var("dbysp") === "1")) {
        this.setVar("ytl2", this.var("y体力"));
        await this.wait(0.1);
        if (((this.var("y体力") === this.var("ytl2")) || (this.var("y体力") > this.var("ytl2")))) {
          this.setVar("dbysp2阶段", "1");
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_1_136(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: SE6d@GeVf(DXJ8P9e-(%, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 100, 0);
    this.pointInDirection(this.sprite, 90);
    this.hideVariable("y体力");
    this.hideVariable("d体力");
    this.setVar("y体力", this.var("ycstl"));
    this.setVar("d体力", "100");
  }

  async y2_whenStartAsClone_137(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ?c6jiauv/DA=-9j2Au;=, opcode: control_start_as_clone
    this.sprite.visible = true;
    this.pointTowards(this.sprite, "_mouse_");
    this.turnRight(this.sprite, this.random(-1, 1));
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "2")) {
        this.moveSteps(this.sprite, 25);
        if (this.touching(this.sprite, "_edge_")) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
        if (this.touching(this.sprite, "d2")) {
          if ((!String(this.list("y拥有的5大招式")).includes(String("o")))) {
            await this.wait(0.01);
            this.deleteThisClone(this.sprite); return;
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_138(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2Jxl19Qn+z#%s{V?V~-H, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "d2")) {
        if ((this.touching(this.sprite, "d2") && (this.var("ysfpdd") === "1"))) {
          this.changeVar("y体力", (0 - (this.var("ygj") * 2)));
          if ((this.var("ysfwd") === "1")) {
            this.playSound(this.sprite, "wd");
          }
        } else {
          this.changeVar("y体力", (0 - this.var("dgj")));
          if ((this.var("ysfwd") === "1")) {
            this.playSound(this.sprite, "wd");
          }
        }
        this.playSound(this.sprite, "ybjs");
      }
      if ((this.var("y体力") < "0")) {
        this.switchBackdrop("1");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenGreenFlag_139(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: a#jIuv`I!M2HR@Rp28Jq, opcode: event_whenflagclicked
    this.setVar("d7sfpdy", "0");
    while (true) {
      if ((this.var("d7sfpdy") === "1")) {
        if (this.touching(this.sprite, "d2")) {
        }
        this.setVar("d7sfpdy", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_1_140(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: fU`f|vSy%CscNB;-K:!j, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        if ((this.list("y拥有的5大招式").includes("i") || (!this.keyPressed("m")))) {
          if (this.keyPressed("b")) {
            if (this.keyPressed("z")) {
              if ((this.var("y气力") > "9.99")) {
                this.changeVar("y气力", -10);
                await this.wait(0);
                for (let i = 0, n = Number(3); i < n; i++) {
                  this.sprite.x += Number(25);
                  await this.yieldFrame();
                }
                await this.wait(0.315);
              }
            } else {
              this.changeVar("y气力", -0.4);
              if ((this.var("y气力") < "5")) {
                this.sprite.x += Number(2.5);
              } else {
                this.sprite.x += Number(10);
              }
            }
          }
          if (this.keyPressed("c")) {
            if (this.keyPressed("z")) {
              if ((this.var("y气力") > "9.99")) {
                this.changeVar("y气力", -10);
                await this.wait(0);
                for (let i = 0, n = Number(3); i < n; i++) {
                  this.sprite.x += Number(-25);
                  await this.yieldFrame();
                }
                await this.wait(0.315);
              }
            } else {
              this.changeVar("y气力", -0.4);
              if ((this.var("y气力") < "5")) {
                this.sprite.x += Number(-2.5);
              } else {
                this.sprite.x += Number(-10);
              }
            }
          }
          if (this.keyPressed("g")) {
            if (this.keyPressed("z")) {
              if ((this.var("y气力") > "9.99")) {
                this.changeVar("y气力", -10);
                await this.wait(0);
                for (let i = 0, n = Number(3); i < n; i++) {
                  this.sprite.y += Number(25);
                  await this.yieldFrame();
                }
                await this.wait(0.315);
              }
            } else {
              this.changeVar("y气力", -0.4);
              if ((this.var("y气力") < "5")) {
                this.sprite.y += Number(2.5);
              } else {
                this.sprite.y += Number(10);
              }
            }
          }
          if (this.keyPressed("v")) {
            if (this.keyPressed("z")) {
              if ((this.var("y气力") > "9.99")) {
                this.changeVar("y气力", -10);
                await this.wait(0);
                for (let i = 0, n = Number(3); i < n; i++) {
                  this.sprite.y += Number(-25);
                  await this.yieldFrame();
                }
                await this.wait(0.315);
              }
            } else {
              this.changeVar("y气力", -0.4);
              if ((this.var("y气力") < "5")) {
                this.sprite.y += Number(-2.5);
              } else {
                this.sprite.y += Number(-10);
              }
            }
          }
          if ((!String(this.list("y拥有的5大招式")).includes(String("i")))) {
            if ((this.var("ysfyxzxygxlcnsfyz4") === "0")) {
              if ((!this.touching(this.sprite, "_edge_"))) {
                if (this.keyPressed("space")) {
                  if ((this.keyPressed("z") && (this.var("y蓄力") > "99.99"))) {
                    this.changeVar("y蓄力", -100);
                    this.switchCostume(this.sprite, "4");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    if ((this.var("闪避暴击增伤") > "15")) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                    if ((this.var("闪避暴击增伤") > "20")) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                  } else {
                    for (let i = 0, n = Number((5 + this.var("yzd"))); i < n; i++) {
                      if ((this.var("y子弹持有数") > "0")) {
                        if ((!((this.backdropValue("number") === "3") || ((this.var("tzms") === "5") || (this.var("tzms") === "9"))))) {
                          this.changeVar("y子弹持有数", -1);
                        }
                        this.switchCostume(this.sprite, "2");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                      }
                      await this.yieldFrame();
                    }
                  }
                  await this.wait(this.var("ygjsd"));
                }
              }
            }
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenKey_y_141(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ?04Z%6c3!wTmW[IcTy{=, opcode: event_whenkeypressed
    this.showVariable("5大招式");
    this.showVariable("5大招式'");
    while (!(this.keyPressed("u"))) {
      if (((!String(this.list("y拥有的5大招式")).includes(String("i"))) && ((this.var("y金币") > "499.99") && this.keyPressed("i")))) {
        this.changeVar("y金币", -500);
        this.list("y拥有的5大招式").push("i");
        this.playSound(this.sprite, "jb/xl2");
      }
      if (((!String(this.list("y拥有的5大招式")).includes(String("o"))) && ((this.var("y金币") > "999.99") && this.keyPressed("o")))) {
        this.changeVar("y金币", -1000);
        this.list("y拥有的5大招式").push("o");
        this.playSound(this.sprite, "jb/xl2");
      }
      if (((!String(this.list("y拥有的5大招式")).includes(String("p"))) && ((this.var("y金币") > "749.99") && this.keyPressed("p")))) {
        this.changeVar("y金币", -750);
        this.list("y拥有的5大招式").push("p");
        this.playSound(this.sprite, "jb/xl2");
      }
      if (((!String(this.list("y拥有的5大招式")).includes(String("a"))) && ((this.var("y金币") > "749.99") && this.keyPressed("a")))) {
        this.changeVar("y金币", -750);
        this.list("y拥有的5大招式").push("a");
        this.playSound(this.sprite, "jb/xl2");
      }
      if (((!String(this.list("y拥有的5大招式")).includes(String("s"))) && ((this.var("y金币") > "299.99") && this.keyPressed("s")))) {
        this.changeVar("y金币", -300);
        this.list("y拥有的5大招式").push("s");
        this.playSound(this.sprite, "jb/xl2");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenKey_u_142(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: yXCELL,Mo*F=j^qvqmPh, opcode: event_whenkeypressed
    this.hideVariable("5大招式");
    this.hideVariable("5大招式'");
  }

  async y2_whenGreenFlag_143(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Jh@!%{VIV#|Od!/-7nr#, opcode: event_whenflagclicked
    this.setVar("5大招式", "1.走动时可发射子弹,500元(i) 2.子弹具有穿透效果,1000元(o) 3.蓄力释放绝招,750元(p)");
    this.setVar("5大招式'", "4.体力小于25000时可自动每秒回100点体力,750元(a)5.免毒伤,300元(s)");
  }

  async y2_whenBackdrop_1_144(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Z%~!!XvhGN$Z:R)V:Ua|, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        if (String(this.list("y拥有的5大招式")).includes(String("i"))) {
          if ((this.var("ysfyxzxygxlcnsfyz4") === "0")) {
            if ((!this.touching(this.sprite, "_edge_"))) {
              if (this.keyPressed("space")) {
                for (let i = 0, n = Number((5 + this.var("yzd"))); i < n; i++) {
                  if ((this.var("y子弹持有数") > "0")) {
                    if ((!((this.backdropValue("number") === "3") || ((this.var("tzms") === "5") || (this.var("tzms") === "9"))))) {
                      this.changeVar("y子弹持有数", -1);
                    }
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                  }
                  await this.yieldFrame();
                }
                if (String(this.list("y拥有的5大招式")).includes(String("p"))) {
                  if ((this.keyPressed("z") && (this.var("y蓄力") > "99.99"))) {
                    this.changeVar("y蓄力", -100);
                    this.switchCostume(this.sprite, "4");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    if ((this.var("闪避暴击增伤") > "15")) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                    if ((this.var("闪避暴击增伤") > "20")) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                    for (let i = 0, n = Number(100); i < n; i++) {
                      if ((this.var("y子弹持有数") > "0")) {
                        if ((!((this.backdropValue("number") === "3") || ((this.var("tzms") === "5") || (this.var("tzms") === "9"))))) {
                          this.changeVar("y子弹持有数", -1);
                        }
                        this.switchCostume(this.sprite, "2");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                      }
                      await this.yieldFrame();
                    }
                    this.switchCostume(this.sprite, "4");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.switchCostume(this.sprite, "4");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                  }
                } else {
                  if ((this.keyPressed("z") && (this.var("y蓄力") > "99.99"))) {
                    this.changeVar("y蓄力", -100);
                    this.switchCostume(this.sprite, "4");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    if ((this.var("闪避暴击增伤") > "15")) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                    if ((this.var("闪避暴击增伤") > "20")) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                  }
                }
                await this.wait(this.var("ygjsd"));
              }
            }
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_145(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: @XaaUJ9z0Hn9_o)f.qw+, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "3")) {
      for (let i = 0, n = Number((this.var("yhdfy") + 25)); i < n; i++) {
        while (!(this.touching(this.sprite, "d2"))) await this.yieldFrame();
        this.setVar("y3sfpdd", "1");
        this.playSound(this.sprite, "hd");
        await this.wait(0.01);
        await this.yieldFrame();
      }
      this.playSound(this.sprite, "pd");
      this.deleteThisClone(this.sprite); return;
    }
  }

  async y2_whenStartAsClone_146(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: |BIQJ6JFMd4%+pKXA!ZJ, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "2")) {
        if (this.touching(this.sprite, "d2")) {
          if ((!String(this.list("y拥有的5大招式")).includes(String("o")))) {
            await this.wait(0.01);
            this.deleteThisClone(this.sprite); return;
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenGreenFlag_147(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: RsxwybX*xAt0JUwY=P+J, opcode: event_whenflagclicked
    this.hideList("y拥有的5大招式");
  }

  async y2_whenKey_d_148(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +qkDpy,7=;x+Laz.6!Cy, opcode: event_whenkeypressed
    this.showList("y拥有的5大招式");
  }

  async y2_whenKey_f_149(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: #=JX=LrOE,e.mte$#Fq~, opcode: event_whenkeypressed
    this.hideList("y拥有的5大招式");
  }

  async y2_whenBackdrop_2_150(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: $FecaAJ}S9O_44dtlPw#, opcode: event_whenbackdropswitchesto
    while (true) {
      if (String(this.list("y拥有的5大招式")).includes(String("a"))) {
        if ((!(this.var("tzms") === "2"))) {
          if ((this.var("ycstl") < "250")) {
            while (!((this.var("y体力") > (this.var("ycstl") - 0.01)))) {
              await this.wait(1);
              this.changeVar("y体力", 1);
              await this.yieldFrame();
            }
          } else {
            while (!((this.var("y体力") > "249.99"))) {
              await this.wait(1);
              this.changeVar("y体力", 1);
              await this.yieldFrame();
            }
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_151(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: yF^Xl+R],B//DX/g`2_W, opcode: event_whenbackdropswitchesto
    this.setVar("ytl2", "0");
    while (true) {
      if ((this.var("dbysp2阶段") === "1")) {
        this.setVar("ygj", ((0.52 + (this.mathOp("floor", this.var("y等级")) * 0.01)) * 2));
        await this.wait(0.15);
        this.setVar("dbysp2阶段", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_152(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Wx;L{=eMg~EA[(Q@x%A1, opcode: event_whenbackdropswitchesto
    if ((this.var("tzms") === "3")) {
      this.setVar("ygj", "0.1");
    } else {
      this.setVar("ygj", (0.52 + (this.mathOp("floor", this.var("y等级")) * 0.01)));
    }
  }

  async y2_whenBackdrop_2_153(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: =2$v8[My3aK^2nVPod2i, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("tzms") === "4")) {
        if (this.keyPressed("x")) {
          this.switchCostume(this.sprite, "3");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "1");
          await this.wait(20);
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_154(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: F?20}-_*z/g=h8!5#H[$, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "3")) {
        this.goToXY(this.sprite, this.var("yx"), this.var("yy"));
        this.pointTowards(this.sprite, "_mouse_");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_155(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: C+u`0b3$zTP2rs/P^;bi, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_cg_156(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: g1`xWN77o?ET_aM+_I/x, opcode: event_whenbroadcastreceived
    this.setVar("dsfcz", "0");
    this.setVar("dbysp", "0");
    this.setVar("dbysp2阶段", "0");
  }

  async y2_whenBroadcast_sb_157(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 6y@M$MM]|wRQ:t/%vQ=e, opcode: event_whenbroadcastreceived
    this.setVar("dsfcz", "0");
    this.setVar("dbysp", "0");
    this.setVar("dbysp2阶段", "0");
  }

  async y2_whenBackdrop_2_158(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: iiVPYNt}pm*A2(]$cKQ$, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y3sfpdd") === "1")) {
        await this.wait(0.1);
        this.setVar("y3sfpdd", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_159(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;Li+=S.Em}~??Odadrmu, opcode: event_whenbackdropswitchesto
    this.setVar("y4sfpdd", "0");
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        if ((!((this.var("tzms") === "5") || ((this.var("tzms") === "6") || (this.var("tzms") === "7"))))) {
          if (this.keyPressed("x")) {
            if (this.keyPressed("z")) {
              if ((this.var("yz轰炸匕首") > "0")) {
                this.changeVar("yz轰炸匕首", -1);
                this.switchCostume(this.sprite, "4");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
              }
            } else {
              if ((!(this.var("tzms") === "4"))) {
                if ((this.var("yz炫夜护盾") > "0")) {
                  this.changeVar("yz炫夜护盾", -1);
                  this.switchCostume(this.sprite, "3");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                }
              }
            }
            await this.wait(0.2);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_160(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: =%AYz^tWP:d-ZJ2T~*;{, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "4")) {
        this.moveSteps(this.sprite, 40);
        if ((this.touching(this.sprite, "d2") && (this.var("y4sfpdd") === "1"))) {
          this.changeVar("d体力", (this.var("ygj") * -25));
          this.playSound(this.sprite, "bz");
          this.deleteThisClone(this.sprite); return;
        }
        if (this.touching(this.sprite, "_edge_")) {
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_161(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: mNu(/xc`9/k|d0%Qs|l/, opcode: control_start_as_clone
    while (true) {
      if ((this.var("y4sfpdd") === "1")) {
        await this.wait(0.1);
        this.setVar("y4sfpdd", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenGreenFlag_162(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 9-Z/6xBH}~ys).[ZkSlt, opcode: event_whenflagclicked
    this.setVar("y满级", ((this.var("轮回数") * 12) + 36));
    while (true) {
      if ((this.var("y等级") > this.var("y满级"))) {
        this.setVar("y等级", this.var("y满级"));
      }
      await this.yieldFrame();
    }
  }

  async y2_whenGreenFlag_163(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: %pdacgYb9kmG-4C^,nOE, opcode: event_whenflagclicked
    while (true) {
      this.setVar("dgj", ((1 + ((this.var("轮回数") - 1) * 0.4)) - (this.mathOp("floor", this.var("y等级")) * 0.01)));
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_xlh_164(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: .$@:,C)RBa:1.}q~2%9), opcode: event_whenbroadcastreceived
    this.setVar("ycstl", "25");
    this.setVar("ygjsd", "0.4");
    this.setVar("yzd", "0");
  }

  async y2_whenBroadcast_xlh_165(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: (kcvfVoaQFjfjC`q#sVi, opcode: event_whenbroadcastreceived
    this.deleteOfList("y拥有的5大招式", this.itemNumOfList("y拥有的5大招式", "i"));
    this.deleteOfList("y拥有的5大招式", this.itemNumOfList("y拥有的5大招式", "o"));
    this.deleteOfList("y拥有的5大招式", this.itemNumOfList("y拥有的5大招式", "p"));
  }

  async y2_whenBroadcast_xlh_166(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: HVqOt~0f/%2`.e~*6/0L, opcode: event_whenbroadcastreceived
    this.setVar("y金币", "0");
    this.setVar("yz持攻豆", "0");
    this.setVar("yz金光薇", "0");
    this.setVar("yz毁灭毒针", "0");
    this.setVar("yz炫夜护盾", "0");
    this.setVar("yz轰炸匕首", "0");
    this.setVar("yz月勾环", "0");
    this.setVar("yz妍妍三叉戟", "0");
    this.setVar("yz尖刺匕首", "0");
    this.setVar("yz三叉戟持攻豆", "0");
    this.setVar("yz炫夜短震荡波", "0");
  }

  async y2_whenGreenFlag_167(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: EGqb/2.M%`C.v|Keugmx, opcode: event_whenflagclicked
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.setVar("dsfcz", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenGreenFlag_168(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: OwJR+Wx[qh}KG?##WX(c, opcode: event_whenflagclicked
    while (true) {
      if (this.touching(this.sprite, "d2")) {
        this.setVar("ysfzd2", "1");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_169(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: kOP6e$JdM:!5L^t.GT7W, opcode: event_whenbackdropswitchesto
    this.setVar("剩余好友", this.var("战斗时好友数"));
    while (true) {
      if ((!(this.var("tzms") === "7"))) {
        if (this.keyPressed("k")) {
          if ((this.var("剩余好友") > "0")) {
            this.changeVar("剩余好友", -1);
            this.switchCostume(this.sprite, "5");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "1");
            await this.wait(0.1);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_170(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: VB:sx83JPX;[;ATDw6et, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "5")) {
        this.sprite.rotationStyle = "don't rotate";
        await this.glideTo(this.sprite, 0.6, "_random_");
        for (let i = 0, n = Number(2); i < n; i++) {
          await this.wait(0.4);
          for (let i = 0, n = Number(5); i < n; i++) {
            this.switchCostume(this.sprite, "2");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "5");
            await this.yieldFrame();
          }
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_171(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 8Nhmjq_i|lyT7oSs{FM1, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "5")) {
      for (let i = 0, n = Number(Math.round(Number(this.var("ycstl")))); i < n; i++) {
        while (!(this.touching(this.sprite, "d2"))) await this.yieldFrame();
        await this.wait(0.01);
        await this.yieldFrame();
      }
      this.deleteThisClone(this.sprite); return;
    }
  }

  async y2_whenBackdrop_1_172(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: *;UWAfm-TD8)l{Lb:ib9, opcode: event_whenbackdropswitchesto
    this.deleteThisClone(this.sprite); return;
  }

  async y2_whenBackdrop_2_173(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: UuBV4M-kjo4].c5?3Mcz, opcode: event_whenbackdropswitchesto
    this.deleteThisClone(this.sprite); return;
  }

  async y2_whenStartAsClone_174(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: /(vU5.egcinf`Tp|B{:6, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "5")) {
        this.setEffect(this.sprite, "COLOR", 150);
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_xyx_175(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: n6ubG,}$|7q{a3IxW%]Q, opcode: event_whenbroadcastreceived
    this.setVar("y皮肤颜色", "0");
  }

  async y2_whenBackdrop_2_176(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hES[~v4(jMc`6*)rJq0g, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        if ((this.var("tzms") === "5")) {
          if (this.keyPressed("x")) {
            if (this.keyPressed("z")) {
              this.switchCostume(this.sprite, "4");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              this.switchCostume(this.sprite, "4");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              this.switchCostume(this.sprite, "4");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              this.switchCostume(this.sprite, "4");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
            } else {
              this.switchCostume(this.sprite, "3");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
            }
            await this.wait(0.2);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_177(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Yc#}*7/u`(J?97*B|z^G, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.var("tzms") === "5")) {
          if ((this.var("y体力") < "100.01")) {
            this.setVar("y体力", (400 * (1 + ((this.var("轮回数") - 1) * 0.4))));
          }
          if ((this.var("d体力") < "100.01")) {
            this.setVar("d体力", this.var("d满血"));
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_178(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: F;_MX:5Y(PRmaT17N+m], opcode: event_whenbackdropswitchesto
    this.setVar("ysfpdd11", "0");
    while (true) {
      if (this.touching(this.sprite, "d2")) {
        this.setVar("ysfpdd11", "1");
      }
      if ((this.var("ysfpdd11") === "1")) {
        await this.wait(0.1);
        this.setVar("ysfpdd11", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_179(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: }X93!hq+gJeQxR[DGVr9, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("zhbs") === "1")) {
        await this.wait(3);
        for (let i = 0, n = Number(2); i < n; i++) {
          this.switchCostume(this.sprite, "4");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "1");
          this.switchCostume(this.sprite, "4");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "1");
          this.switchCostume(this.sprite, "4");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "1");
          this.switchCostume(this.sprite, "4");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "1");
          await this.wait(0.25);
          await this.yieldFrame();
        }
        this.setVar("zhbs", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_180(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: M3eTK:=^cuV]9XYhBM;v, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("zhqxhd") === "1")) {
        this.switchCostume(this.sprite, "6");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "1");
        this.setVar("zhqxhd", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_181(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: )TqjnXiy?{onXj3w%-c7, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "6")) {
        this.goToXY(this.sprite, this.var("yx"), this.var("yy"));
        if (this.touching(this.sprite, "d2")) {
          this.playSound(this.sprite, "hd");
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_182(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: upkvpYiZ~ryox;Z/4OGC, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "6")) {
        await this.wait(4);
        this.playSound(this.sprite, "pd");
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2_whenGreenFlag_183(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: IM{SQf`rxNjxD=3fCM8:, opcode: event_whenflagclicked
    this.sprite.size = Number(100);
  }

  async y2_whenBackdrop_2_184(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: sk9LIk,,fj(ynsDBRMTt, opcode: event_whenbackdropswitchesto
    this.setVar("ymjsfcfxg", "0");
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        if ((this.var("y等级") === this.var("y满级"))) {
          if ((this.var("ymjsfcfxg") === "0")) {
            this.switchCostume(this.sprite, "7");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "1");
            this.setVar("ymjsfcfxg", "1");
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_185(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: iA)w9Za=#hi={Nc8~k=l, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "7")) {
        this.turnRight(this.sprite, 20);
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_186(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: oJJpe$T/R:AII[RT@1fx, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "7")) {
        this.goToXY(this.sprite, this.var("yx"), this.var("yy"));
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_xlh_187(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ~@%;~*gkpR)6`%sO4-09, opcode: event_whenbroadcastreceived
    this.setVar("y回血药水数量", "0");
    this.setVar("y无敌药水数量", "0");
    this.setVar("y解毒药水数量", "0");
  }

  async y2_whenBackdrop_1_188(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: YQ{F@CN^tZLQ,?1#t|^Q, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        if ((this.sprite.x < "-220")) {
          this.sprite.x += Number(25);
        }
        if ((this.sprite.x > "220")) {
          this.sprite.x += Number(-25);
        }
        if ((this.sprite.y < "-160")) {
          this.sprite.y += Number(25);
        }
        if ((this.sprite.y > "160")) {
          this.sprite.y += Number(-25);
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_3_189(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ]VHwCRDzK,/:Cx~4Fyhf, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
  }

  async y2_whenBackdrop_3_190(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: xSQL|oQWJ?bq9r)3Kc4F, opcode: event_whenbackdropswitchesto
    this.setVar("y体力", "10");
    while (true) {
      if (this.touching(this.sprite, "d2")) {
        this.changeVar("y体力", (0 - this.var("dgj")));
        this.playSound(this.sprite, "ybjs");
      }
      if ((this.var("y体力") < "0")) {
        this.switchBackdrop("1");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_3_191(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: xR)519*AJQxeC!c1@|wB, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "3")) {
        if ((this.var("ysfyxzxygxlcnsfyz4") === "1")) {
          if (this.keyPressed("x")) {
            this.switchCostume(this.sprite, "3");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "1");
            await this.wait(5);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_192(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: rx/M!?j`sH{*}B8-6]iH, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "3")) {
        if ((this.costumeValue(this.sprite, "number") === "3")) {
          await this.wait(1);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_193(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: yC(Q8.p0ZBp.p[M7UQ`Z, opcode: event_whenbackdropswitchesto
    this.setVar("ysfyxzxygxlcnsfyz4", "0");
    while (true) {
      if ((this.var("难度") === "1")) {
        this.setVar("ysfzd", "0");
        this.setVar("ysfzd2", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_1_194(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: uL=Y+Ro}zwu$h(riRQ(C, opcode: event_whenbackdropswitchesto
    this.setVar("y气力", this.var("y最高气力"));
    while (true) {
      this.changeVar("y气力", 0.3);
      if ((this.var("y气力") > this.var("y最高气力"))) {
        this.setVar("y气力", this.var("y最高气力"));
      }
      if ((this.var("y气力") < "0")) {
        this.setVar("y气力", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_1_195(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: F06?r0E.|Oc4^o1nZXK?, opcode: event_whenbackdropswitchesto
    this.setVar("y蓄力", "0");
    while (true) {
      if ((this.var("y蓄力") > "100")) {
        this.setVar("y蓄力", "100");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_196(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: qbJzXb(??,U{R*+}Kaz6, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        if (this.touching(this.sprite, "d2")) {
          await this.wait(0.01);
          if ((this.sprite.x > this.sensingOf("x position", "d2"))) {
            this.sprite.x += Number(6);
          }
          if ((this.sensingOf("x position", "d2") > this.sprite.x)) {
            this.sprite.x += Number(-6);
          }
          if ((this.sprite.y > this.sensingOf("y position", "d2"))) {
            this.sprite.y += Number(6);
          }
          if ((this.sensingOf("y position", "d2") > this.sprite.y)) {
            this.sprite.y += Number(-6);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_ydz_197(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: [:V6QclSX)5f/xQ9HwIT, opcode: event_whenbroadcastreceived
    if ((this.var("y等级") === this.var("y满级"))) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.costumeValue(this.sprite, "number") === "5")) {
          for (let i = 0, n = Number(100); i < n; i++) {
            this.switchCostume(this.sprite, "2");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "5");
            await this.yieldFrame();
          }
          this.switchCostume(this.sprite, "4");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "5");
        }
      }
    }
  }

  async y2_whenBackdrop_2_198(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ~[q1*V`~THT?Hy_:19AJ, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.var("y蓄力2") > "600")) {
          this.setVar("y蓄力2", "600");
        }
        if (((this.var("y蓄力2") < "0") || (!this.keyPressed("m")))) {
          if ((this.var("y蓄力2") > "249")) {
            this.switchCostume(this.sprite, "4");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "1");
            if ((this.var("y蓄力2") > "344")) {
              this.switchCostume(this.sprite, "4");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              if ((this.var("y蓄力2") > "434")) {
                this.switchCostume(this.sprite, "4");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                if ((this.var("y蓄力2") > "519")) {
                  this.switchCostume(this.sprite, "4");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  if ((this.var("y蓄力2") > "599")) {
                    this.switchCostume(this.sprite, "4");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    if (((this.var("y蓄力") > "99") && (this.list("y拥有的5大招式").includes("i") && this.list("y拥有的5大招式").includes("p")))) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                  }
                }
              }
            }
          }
          await this.wait(0);
          this.setVar("y蓄力2", "0");
        }
        if (this.keyPressed("m")) {
          this.changeVar("y气力", -1);
          this.changeVar("y蓄力2", ((this.var("y蓄力速度") * 2) - 0.2));
          this.playSound(this.sprite, "xl22");
        }
        if (this.touching(this.sprite, "d2")) {
          this.changeVar("y蓄力2", -50);
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_199(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: LU9eWg+X3=zS5Q_,S#`t, opcode: control_start_as_clone
    while (true) {
      if (((this.costumeValue(this.sprite, "number") === "5") && (this.var("y等级") === this.var("y满级")))) {
        if (((this.var("y蓄力2") < "0") || (!this.keyPressed("m")))) {
          if ((this.var("y蓄力2") > "249")) {
            this.switchCostume(this.sprite, "4");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "5");
            if ((this.var("y蓄力2") > "344")) {
              this.switchCostume(this.sprite, "4");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "5");
              if ((this.var("y蓄力2") > "434")) {
                this.switchCostume(this.sprite, "4");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "5");
                if ((this.var("y蓄力2") > "519")) {
                  this.switchCostume(this.sprite, "4");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "5");
                  if ((this.var("y蓄力2") > "599")) {
                    this.switchCostume(this.sprite, "4");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "5");
                    if (((this.var("y蓄力") > "99") && (this.list("y拥有的5大招式").includes("i") && this.list("y拥有的5大招式").includes("p")))) {
                      this.switchCostume(this.sprite, "4");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "5");
                    }
                  }
                }
              }
            }
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_200(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: @k(6K@~L}8kfGB2P`6vq, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!((this.var("y蓄力2") > "249"))) await this.yieldFrame();
      this.setSoundEffect(this.sprite, "PITCH", -40);
      await this.playSoundUntilDone(this.sprite, "jb/xl2");
      this.setSoundEffect(this.sprite, "PITCH", 0);
      while (!((this.var("y蓄力2") < "250"))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_201(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 20~e@~]m$M`bO!q/aPEN, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!((this.var("y蓄力2") > "344"))) await this.yieldFrame();
      this.setSoundEffect(this.sprite, "PITCH", 10);
      await this.playSoundUntilDone(this.sprite, "jb/xl2");
      this.setSoundEffect(this.sprite, "PITCH", 0);
      while (!((this.var("y蓄力2") < "345"))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_202(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Ni^3E2+)beR[Q7Y??|:$, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!((this.var("y蓄力2") > "434"))) await this.yieldFrame();
      this.setSoundEffect(this.sprite, "PITCH", 60);
      await this.playSoundUntilDone(this.sprite, "jb/xl2");
      this.setSoundEffect(this.sprite, "PITCH", 0);
      while (!((this.var("y蓄力2") < "435"))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_203(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 6p)Xp@.8]n[hX^aCW5L4, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!((this.var("y蓄力2") > "519"))) await this.yieldFrame();
      this.setSoundEffect(this.sprite, "PITCH", 110);
      await this.playSoundUntilDone(this.sprite, "jb/xl2");
      this.setSoundEffect(this.sprite, "PITCH", 0);
      while (!((this.var("y蓄力2") < "520"))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_204(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: frLsmTz$R$c(}/y=:uyq, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!((this.var("y蓄力2") > "599"))) await this.yieldFrame();
      this.setSoundEffect(this.sprite, "PITCH", 160);
      await this.playSoundUntilDone(this.sprite, "jb/xl2");
      this.setSoundEffect(this.sprite, "PITCH", 0);
      while (!((this.var("y蓄力2") < "600"))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_205(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: kR;!EkZ]MrE]1[UtkwB=, opcode: event_whenbackdropswitchesto
    this.setEffect(this.sprite, "GHOST", 100);
    while (true) {
      if ((this.var("y法术·隐") === "1")) {
        this.setEffect(this.sprite, "GHOST", 85);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async y2_whenStartAsClone_206(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: yWMEmcNcg|XbR_y*6UZK, opcode: control_start_as_clone
    this.setEffect(this.sprite, "GHOST", 0);
  }

  async y2_whenBroadcast_y隐_207(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: bc%PM)%@;0O59@_)^*=!, opcode: event_whenbroadcastreceived
    if ((this.random(1, 2) === "1")) {
      for (let i = 0, n = Number(5); i < n; i++) {
        this.sprite.y += Number(30);
        await this.yieldFrame();
      }
    } else {
      for (let i = 0, n = Number(5); i < n; i++) {
        this.sprite.y += Number(-30);
        await this.yieldFrame();
      }
    }
  }

  async y2_whenBackdrop_2_208(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: #`i@c?+af$(M~g*RIp8,, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!(((this.var("y蓄力2") > "599") && (this.var("y蓄力") > "99")))) await this.yieldFrame();
      this.setSoundEffect(this.sprite, "PITCH", 210);
      await this.playSoundUntilDone(this.sprite, "jb/xl2");
      this.setSoundEffect(this.sprite, "PITCH", 0);
      while (!(((this.var("y蓄力2") < "600") && (this.var("y蓄力") > "99")))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_209(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: =*Nj:/;:TsOv{6vFQ,-`, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((this.var("tzms") === "2") && (this.var("y体力") > "0"))) {
        this.setVar("y体力", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_1_210(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: viivLcG::+H?fp1S*]@b, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y2fzsfpdd") === "1")) {
        if ((!this.touching(this.sprite, "d2"))) {
          this.changeVar("y蓄力", 5);
          this.playSound(this.sprite, "sb");
          if ((this.var("y等级") === this.var("y满级"))) {
            this.changeVar("y体力", 1);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_1_211(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ($MqRvA|g`g^UZ{4U8i{, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        this.setVar("yx", this.sprite.x);
        this.setVar("yy", this.sprite.y);
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_ysd_212(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Uu[o0i8AkSkE==.?:StH, opcode: event_whenbroadcastreceived
    this.setVar("闪避暴击增伤", "25");
  }

  async y2_whenBackdrop_1_213(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: l77b?o2f`S25%V,t,_3], opcode: event_whenbackdropswitchesto
    while (true) {
      this.changeVar("闪避暴击增伤", -1);
      if ((this.var("闪避暴击增伤") > "25")) {
        this.setVar("闪避暴击增伤", "25");
      }
      if ((this.var("闪避暴击增伤") < "0")) {
        this.setVar("闪避暴击增伤", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBroadcast_能量结算_214(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ,{7-@3_w3~XQq`-FL=W}, opcode: event_whenbroadcastreceived
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      if ((this.var("y蓄力3") > "24")) {
        this.switchCostume(this.sprite, "4");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "1");
      }
      if ((this.var("y蓄力3") > "49")) {
        this.switchCostume(this.sprite, "4");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "1");
      }
      if ((this.var("y蓄力3") > "74")) {
        this.switchCostume(this.sprite, "4");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "1");
      }
      if ((this.var("y蓄力3") > "99")) {
        this.switchCostume(this.sprite, "4");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "1");
      }
      this.setVar("y蓄力3", "0");
    }
  }

  async y2_whenBroadcast_y炸_215(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ^LCHIn}U/cn`$}LN/W$w, opcode: event_whenbroadcastreceived
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      while (!(this.keyPressed("space"))) await this.yieldFrame();
      this.switchCostume(this.sprite, "4");
      this.createClone("_myself_");
      this.switchCostume(this.sprite, "1");
      if ((this.var("y等级") > (this.var("y满级") - 6.01))) {
        this.switchCostume(this.sprite, "4");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "1");
      }
    }
  }

  async y2_whenBackdrop_2_216(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: c?)Z,y%};_revP.@yiDs, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "y2fz6")) {
        this.setVar("ysfpdy火", "1");
      } else {
        this.setVar("ysfpdy火", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2_whenBackdrop_2_217(): Promise<void> {
    this.sprite = this.sprites["y2"] ?? { name: "y2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !ujEIPrB-lrYhX?msW=8, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    if ((this.var("tzms") === "2")) {
      this.setVar("y体力", "0");
    } else {
      this.setVar("y体力", "999999999999999999999998");
    }
    if ((!(this.var("tzms") === "9"))) {
      if ((this.var("tzms") === "7")) {
        this.setVar("d体力", "999999999999999999999998");
      } else {
        if ((this.var("tzms") === "5")) {
          this.setVar("d体力", (400 * (1 + ((this.var("轮回数") - 1) * 0.4))));
        } else {
          if ((this.var("难度") === "1")) {
            if ((this.var("rwzdqd") > "1")) {
              if ((this.var("rwzdqd") === "5")) {
                this.setVar("d体力", (this.random(250, 350) * (1 + ((this.var("轮回数") - 1) * 0.4))));
              } else {
                if (((this.var("rwzdqd") === "3") || (this.var("rwzdqd") === "4"))) {
                  this.setVar("d体力", (this.random(175, 250) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                } else {
                  this.setVar("d体力", (this.random(100, 150) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                }
              }
            } else {
              this.setVar("d体力", (this.random(25, 50) * (1 + ((this.var("轮回数") - 1) * 0.4))));
            }
          }
          if ((this.var("难度") === "2")) {
            if ((this.var("rwzdqd") > "1")) {
              if ((this.var("rwzdqd") === "5")) {
                this.setVar("d体力", (this.random(350, 350) * (1 + ((this.var("轮回数") - 1) * 0.4))));
              } else {
                if (((this.var("rwzdqd") === "3") || (this.var("rwzdqd") === "4"))) {
                  this.setVar("d体力", (this.random(250, 250) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                } else {
                  this.setVar("d体力", (this.random(150, 150) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                }
              }
            } else {
              this.setVar("d体力", (this.random(50, 50) * (1 + ((this.var("轮回数") - 1) * 0.4))));
            }
          }
          if ((this.var("难度") === "3")) {
            if ((this.var("rwzdqd") > "1")) {
              if ((this.var("rwzdqd") === "5")) {
                this.setVar("d体力", (this.random(350, 400) * (1 + ((this.var("轮回数") - 1) * 0.4))));
              } else {
                if (((this.var("rwzdqd") === "3") || (this.var("rwzdqd") === "4"))) {
                  this.setVar("d体力", (this.random(250, 300) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                } else {
                  this.setVar("d体力", (this.random(150, 200) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                }
              }
            } else {
              this.setVar("d体力", (this.random(50, 100) * (1 + ((this.var("轮回数") - 1) * 0.4))));
            }
          }
          if ((this.var("难度") === "4")) {
            if ((this.var("rwzdqd") > "1")) {
              if ((this.var("rwzdqd") === "5")) {
                this.setVar("d体力", (this.random(400, 400) * (1 + ((this.var("轮回数") - 1) * 0.4))));
              } else {
                if (((this.var("rwzdqd") === "3") || (this.var("rwzdqd") === "4"))) {
                  this.setVar("d体力", (this.random(300, 300) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                } else {
                  this.setVar("d体力", (this.random(200, 200) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                }
              }
            } else {
              this.setVar("d体力", (this.random(100, 100) * (1 + ((this.var("轮回数") - 1) * 0.4))));
            }
          }
          if ((this.var("难度") === "5")) {
            if ((this.var("rwzdqd") > "1")) {
              if ((this.var("rwzdqd") === "5")) {
                this.setVar("d体力", (this.random(400, 800) * (1 + ((this.var("轮回数") - 1) * 0.4))));
              } else {
                if (((this.var("rwzdqd") === "3") || (this.var("rwzdqd") === "4"))) {
                  this.setVar("d体力", (this.random(300, 600) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                } else {
                  this.setVar("d体力", (this.random(200, 400) * (1 + ((this.var("轮回数") - 1) * 0.4))));
                }
              }
            } else {
              this.setVar("d体力", (this.random(100, 200) * (1 + ((this.var("轮回数") - 1) * 0.4))));
            }
          }
        }
      }
      this.setVar("d体力", (this.var("d体力") * (1 + (this.var("战斗时好友数") * 0.3))));
    }
    this.setVar("d满血", this.var("d体力"));
  }

  async y2y_whenBackdrop_2_218(): Promise<void> {
    this.sprite = this.sprites["y2y"] ?? { name: "y2y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: n=FLo.;9I;_,C;YssWu|, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    while (true) {
      this.goTo(this.sprite, "y2");
      this.setEffect(this.sprite, "GHOST", (100 - this.var("yld")));
      await this.yieldFrame();
    }
  }

  async y2y_whenBackdrop_1_219(): Promise<void> {
    this.sprite = this.sprites["y2y"] ?? { name: "y2y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hH%jG0cCOr3G^tHnIM0L, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.sprite.size = Number(100);
  }

  async y2fz_whenBackdrop_3_220(): Promise<void> {
    this.sprite = this.sprites["y2fz"] ?? { name: "y2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: q8+;~zJeUA!k}J$5;XR@, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y2fz_whenBackdrop_1_221(): Promise<void> {
    this.sprite = this.sprites["y2fz"] ?? { name: "y2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7qA/F9ZH(pr:j,8[7=:d, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 100, 0);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.switchCostume(this.sprite, "1");
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        if (this.touching(this.sprite, "d2")) {
          this.setVar("y2fzsfpdd", "1");
        } else {
          this.setVar("y2fzsfpdd", "0");
        }
        if (this.touching(this.sprite, "d2")) {
          await this.wait(0.01);
          this.sprite.visible = false;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2fz_whenBackdrop_2_222(): Promise<void> {
    this.sprite = this.sprites["y2fz"] ?? { name: "y2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M%Qc]cLf:Sw%@7UH2{~, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y2fz_whenBroadcast_ysd_223(): Promise<void> {
    this.sprite = this.sprites["y2fz"] ?? { name: "y2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0KjEvjia7lAtB5L*/#m], opcode: event_whenbroadcastreceived
    if ((this.var("y等级") === this.var("y满级"))) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        for (let i = 0, n = Number(3); i < n; i++) {
          this.createClone("_myself_");
          await this.yieldFrame();
        }
      }
    }
  }

  async y2fz_whenStartAsClone_224(): Promise<void> {
    this.sprite = this.sprites["y2fz"] ?? { name: "y2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 6za#Sq`{rcV$eU$8%iOk, opcode: control_start_as_clone
    this.sprite.visible = true;
    this.switchCostume(this.sprite, "2");
    this.goTo(this.sprite, "y2");
    this.setEffect(this.sprite, "GHOST", 80);
    for (let i = 0, n = Number(20); i < n; i++) {
      this.changeEffect(this.sprite, "GHOST", 1);
      await this.yieldFrame();
    }
    this.setEffect(this.sprite, "GHOST", 100);
    this.deleteThisClone(this.sprite); return;
  }

  async y2fz_whenBroadcast_ysd_225(): Promise<void> {
    this.sprite = this.sprites["y2fz"] ?? { name: "y2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Okv*=C3^E{PW!t+fG{vg, opcode: event_whenbroadcastreceived
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      this.goTo(this.sprite, "y2");
      if ((!this.touching(this.sprite, "d2"))) {
        this.sprite.visible = true;
        await this.wait(0.25);
        this.sprite.visible = false;
      }
    }
  }

  async y2fz2_whenBackdrop_2_226(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: JN~s347ozd!Bd4rq3_CU, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y等级") === this.var("y满级"))) {
        this.changeEffect(this.sprite, "COLOR", 1);
      }
      await this.yieldFrame();
    }
  }

  async y2fz2_whenBackdrop_2_227(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Sp6NFm?1XUC0H{iajw^R, opcode: event_whenbackdropswitchesto
    await this.wait(0.1);
    this.setEffect(this.sprite, "COLOR", (this.var("y皮肤颜色") * 2));
    while (true) {
      if ((this.var("ygj") === ((0.52 + (this.mathOp("floor", this.var("y等级")) * 0.01)) * 2))) {
        this.playSound(this.sprite, "yspcg");
        this.setEffect(this.sprite, "COLOR", 105);
        await this.wait(1);
        this.setEffect(this.sprite, "COLOR", (this.var("y皮肤颜色") * 2));
        if ((this.var("tzms") === "3")) {
          this.setVar("ygj", "0.1");
        } else {
          this.setVar("ygj", (0.52 + (this.mathOp("floor", this.var("y等级")) * 0.01)));
        }
      }
      await this.yieldFrame();
    }
  }

  async y2fz2_whenBroadcast_ybjs_228(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: eSmH]DK6iDZ3DR+{x4*3, opcode: event_whenbroadcastreceived
    this.setEffect(this.sprite, "BRIGHTNESS", 25);
  }

  async y2fz2_whenBackdrop_1_229(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: #:@~kJ1CqzdKs//UM06Q, opcode: event_whenbackdropswitchesto
    while (true) {
      this.setEffect(this.sprite, "BRIGHTNESS", 0);
      await this.wait(0.2);
      await this.yieldFrame();
    }
  }

  async y2fz2_whenBackdrop_2_230(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: P;#P[(P#c.O.KtL$]644, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 0);
    if ((this.random(1, 10000) === "1")) {
      this.switchCostume(this.sprite, "2");
    } else {
      this.switchCostume(this.sprite, "1");
    }
    if (String(this.var("昵称")).includes(String("dlxy"))) {
      this.pointInDirection(this.sprite, -90);
    } else {
      this.pointInDirection(this.sprite, 90);
    }
    while (true) {
      if ((this.var("y法术·隐") === "0")) {
        this.setEffect(this.sprite, "GHOST", 0);
        this.goTo(this.sprite, "y2");
      }
      await this.yieldFrame();
    }
  }

  async y2fz2_whenBackdrop_2_231(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: :S7!X*GD9.*a0oP6T~KB, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y法术·隐") === "1")) {
        this.playSound(this.sprite, "y隐");
        this.setEffect(this.sprite, "GHOST", 100);
        await this.glideTo(this.sprite, 25, "_random_");
        if ((this.var("y等级") > (this.var("y满级") - 6.01))) {
          await this.glideTo(this.sprite, 5, "_random_");
        }
        this.setVar("y法术·隐", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2fz2_whenBackdrop_1_232(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: m$hkAVcth|5c#JIM;Q2*, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y2fz2_whenBackdrop_3_233(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: s`^R9%6eexA{n|3AJj5e, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 0);
    if (String(this.var("昵称")).includes(String("dlxy"))) {
      this.pointInDirection(this.sprite, -90);
    } else {
      this.pointInDirection(this.sprite, 90);
    }
    while (true) {
      if ((this.var("y法术·隐") === "0")) {
        this.setEffect(this.sprite, "GHOST", 0);
        this.goTo(this.sprite, "y2");
      }
      await this.yieldFrame();
    }
  }

  async y2fz2_whenBroadcast_y隐_234(): Promise<void> {
    this.sprite = this.sprites["y2fz2"] ?? { name: "y2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: NQ`2|8u`@e;f0akZPVsA, opcode: event_whenbroadcastreceived
    if ((this.var("y等级") === this.var("y满级"))) {
      this.changeVar("y蓄力", 25);
      this.changeVar("y体力", 5);
      for (let i = 0, n = Number(30); i < n; i++) {
        if ((this.var("y法术·隐") === "1")) {
          if (this.list("y拥有的5大招式").includes("a")) {
            this.changeVar("y体力", 1);
            await this.wait(1);
          }
        }
        await this.yieldFrame();
      }
    }
  }

  async y2fz3_whenBackdrop_1_235(): Promise<void> {
    this.sprite = this.sprites["y2fz3"] ?? { name: "y2fz3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7qA/F9ZH(pr:j,8[7=:d, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 100, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y2fz3_whenBackdrop_2_236(): Promise<void> {
    this.sprite = this.sprites["y2fz3"] ?? { name: "y2fz3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M%Qc]cLf:Sw%@7UH2{~, opcode: event_whenbackdropswitchesto
    if (((this.var("y等级") === this.var("y满级")) && (this.random(1, 3) === "1"))) {
      this.sprite.visible = true;
    } else {
      this.sprite.visible = false;
    }
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      this.goTo(this.sprite, "y2");
      this.turnRight(this.sprite, 9);
      this.changeEffect(this.sprite, "COLOR", 1);
      await this.yieldFrame();
    }
  }

  async y2fz4_whenStartAsClone_237(): Promise<void> {
    this.sprite = this.sprites["y2fz4"] ?? { name: "y2fz4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: YSWY.JH~?|ToGp}V)7S_, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2fz4_whenBackdrop_1_238(): Promise<void> {
    this.sprite = this.sprites["y2fz4"] ?? { name: "y2fz4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: cXlSXvGnf`CnWN/@iOD8, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y2fz4_whenStartAsClone_239(): Promise<void> {
    this.sprite = this.sprites["y2fz4"] ?? { name: "y2fz4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: HSly68+eJ@SVfq/s6)^Z, opcode: control_start_as_clone
    this.sprite.visible = true;
    this.switchCostume(this.sprite, "1");
    this.playSound(this.sprite, "1");
    while (true) {
      while (!(this.touching(this.sprite, "d2"))) {
        this.moveSteps(this.sprite, 15);
        if (this.touching(this.sprite, "_edge_")) {
          this.deleteThisClone(this.sprite); return;
        }
        await this.yieldFrame();
      }
      for (let i = 0, n = Number(300); i < n; i++) {
        this.switchCostume(this.sprite, "2");
        this.goTo(this.sprite, "d2");
        this.turnRight(this.sprite, 18);
        await this.yieldFrame();
      }
      if ((this.var("y等级") > (this.var("y满级") - 6.01))) {
        for (let i = 0, n = Number(100); i < n; i++) {
          this.switchCostume(this.sprite, "2");
          this.goTo(this.sprite, "d2");
          this.turnRight(this.sprite, 18);
          await this.yieldFrame();
        }
      }
      this.deleteThisClone(this.sprite); return;
      await this.yieldFrame();
    }
  }

  async y2fz4_whenBackdrop_2_240(): Promise<void> {
    this.sprite = this.sprites["y2fz4"] ?? { name: "y2fz4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4@kGGm57;?9tC*lNdGDD, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.var("y法术·破") === "1")) {
        this.goTo(this.sprite, "y2");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.setVar("y法术·破", "0");
      }
      await this.yieldFrame();
    }
  }

  async y2fz5_whenBackdrop_1_241(): Promise<void> {
    this.sprite = this.sprites["y2fz5"] ?? { name: "y2fz5", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: `}y2bGu`2GB8_M*pD(C7, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      this.goTo(this.sprite, "y2");
      await this.yieldFrame();
    }
  }

  async y2fz5_whenBackdrop_2_242(): Promise<void> {
    this.sprite = this.sprites["y2fz5"] ?? { name: "y2fz5", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4@kGGm57;?9tC*lNdGDD, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.setVar("y蓄力3", "0");
    while (true) {
      if ((this.var("y法术·吸") === "1")) {
        this.sprite.visible = true;
        this.switchCostume(this.sprite, "1");
        this.setEffect(this.sprite, "COLOR", 0);
        await this.wait(7);
        if ((this.var("y等级") > (this.var("y满级") - 6.01))) {
          await this.wait(2);
        }
        this.setVar("y法术·吸", "0");
        if ((this.var("y蓄力3") > "24")) {
          this.switchCostume(this.sprite, "2");
          this.setEffect(this.sprite, "COLOR", ((this.var("y蓄力3") - 25) * 2));
          while (!(this.keyPressed("space"))) await this.yieldFrame();
        }
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenStartAsClone_243(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ?(ktrEZ2TkTU-#0.ly$S, opcode: control_start_as_clone
    this.setVar("y火方向", this.sprite.direction);
    await this.wait(2);
    while (true) {
      if (((this.var("ysfpdy火") === "0") && this.touching(this.sprite, "y2"))) {
        if ((this.costumeValue(this.sprite, "number") === "1")) {
          this.pointTowards(this.sprite, "_mouse_");
          this.switchCostume(this.sprite, "2");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "1");
          this.pointInDirection(this.sprite, this.var("y火方向"));
        }
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenStartAsClone_244(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: a-JHgj5/pqQT2y2rNOMO, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenStartAsClone_245(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: %k0bvQovA3#05Wvnx1Af, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "2")) {
        if (this.touching(this.sprite, "d2fz3")) {
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenStartAsClone_246(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: /Yq^MBj}#_4QPiKURK;s, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        if (this.touching(this.sprite, "d2fz3")) {
          for (let i = 0, n = Number(50); i < n; i++) {
            this.changeEffect(this.sprite, "GHOST", 2);
            await this.yieldFrame();
          }
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenBackdrop_1_247(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Q:l;95S/oORl%4kk_xG}, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y2fz6_whenStartAsClone_248(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: MpZQbAh7WknOx}FHD9o+, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "3")) {
        if (this.touching(this.sprite, "d2")) {
          this.playSound(this.sprite, "2");
        }
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenStartAsClone_249(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: GK=k+AMm/k2$ynR6[Sf#, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "3")) {
        for (let i = 0, n = Number(25); i < n; i++) {
          this.setSoundEffect(this.sprite, "PITCH", -40);
          this.setSoundEffect(this.sprite, "PITCH", 10);
          this.setSoundEffect(this.sprite, "PITCH", 60);
          await this.yieldFrame();
        }
        for (let i = 0, n = Number(25); i < n; i++) {
          this.setSoundEffect(this.sprite, "PITCH", -30);
          this.setSoundEffect(this.sprite, "PITCH", 20);
          this.setSoundEffect(this.sprite, "PITCH", 70);
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenStartAsClone_250(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: zFLdhH*UBk=aq!sxFD.Y, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "3")) {
        this.turnRight(this.sprite, 18);
      }
      await this.yieldFrame();
    }
  }

  async y2fz6_whenStartAsClone_251(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: HSly68+eJ@SVfq/s6)^Z, opcode: control_start_as_clone
    this.sprite.visible = true;
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      for (let i = 0, n = Number(6); i < n; i++) {
        this.moveSteps(this.sprite, 15);
        await this.yieldFrame();
      }
      await this.wait(35);
      this.deleteThisClone(this.sprite); return;
    }
    if ((this.costumeValue(this.sprite, "number") === "2")) {
      while (true) {
        this.moveSteps(this.sprite, 15);
        if (this.touching(this.sprite, "_edge_")) {
          this.deleteThisClone(this.sprite); return;
        }
        await this.yieldFrame();
      }
    }
    if ((this.costumeValue(this.sprite, "number") === "3")) {
      await this.glideToXY(this.sprite, 1, -200, this.sensingOf("y position", "d2"));
      for (let i = 0, n = Number(16); i < n; i++) {
        this.sprite.x += Number(25);
        await this.yieldFrame();
      }
      await this.glideToXY(this.sprite, 0.6, 200, this.sensingOf("y position", "d2"));
      await this.glideToXY(this.sprite, 1, 200, this.sensingOf("y position", "d2"));
      await this.glideTo(this.sprite, 0.4, "y2");
      for (let i = 0, n = Number(10); i < n; i++) {
        this.goTo(this.sprite, "y2");
        await this.yieldFrame();
      }
      this.deleteThisClone(this.sprite); return;
    }
  }

  async y2fz6_whenBackdrop_2_252(): Promise<void> {
    this.sprite = this.sprites["y2fz6"] ?? { name: "y2fz6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4@kGGm57;?9tC*lNdGDD, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    while (true) {
      if ((this.var("y法术·火") === "1")) {
        this.switchCostume(this.sprite, "1");
        this.goTo(this.sprite, "y2");
        this.pointInDirection(this.sprite, 90);
        for (let i = 0, n = Number(20); i < n; i++) {
          this.turnRight(this.sprite, 18);
          this.createClone("_myself_");
          await this.yieldFrame();
        }
        this.switchCostume(this.sprite, "2");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        this.turnRight(this.sprite, 9);
        this.createClone("_myself_");
        if ((this.var("y等级") > (this.var("y满级") - 6.01))) {
          this.switchCostume(this.sprite, "3");
          this.createClone("_myself_");
        }
        this.playSound(this.sprite, "1");
        if ((this.var("y等级") === this.var("y满级"))) {
          for (let i = 0, n = Number(5); i < n; i++) {
            this.switchCostume(this.sprite, "2");
            await this.wait(0.1);
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.turnRight(this.sprite, 9);
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "3");
            this.createClone("_myself_");
            this.playSound(this.sprite, "1");
            await this.yieldFrame();
          }
        }
        this.setVar("y法术·火", "0");
        this.switchCostume(this.sprite, "1");
        this.createClone("_myself_");
      }
      await this.yieldFrame();
    }
  }

  async y火fz_whenBackdrop_2_253(): Promise<void> {
    this.sprite = this.sprites["y火fz"] ?? { name: "y火fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: HS]9Y7Z-M1OgCA*?EJqE, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!((this.var("d火") === "1"))) await this.yieldFrame();
      for (let i = 0, n = Number(10); i < n; i++) {
        this.createClone("_myself_");
        await this.wait(0);
        await this.yieldFrame();
      }
      while (!((this.var("d火") === "0"))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async y火fz_whenStartAsClone_254(): Promise<void> {
    this.sprite = this.sprites["y火fz"] ?? { name: "y火fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: a-JHgj5/pqQT2y2rNOMO, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y火fz_whenBackdrop_1_255(): Promise<void> {
    this.sprite = this.sprites["y火fz"] ?? { name: "y火fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Q:l;95S/oORl%4kk_xG}, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y火fz_whenStartAsClone_256(): Promise<void> {
    this.sprite = this.sprites["y火fz"] ?? { name: "y火fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: HSly68+eJ@SVfq/s6)^Z, opcode: control_start_as_clone
    this.sprite.visible = true;
    this.switchCostume(this.sprite, "2");
    while (true) {
      this.goTo(this.sprite, "d2");
      this.turnRight(this.sprite, 18);
      if ((this.var("d火") === "0")) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y火fz_whenBackdrop_2_257(): Promise<void> {
    this.sprite = this.sprites["y火fz"] ?? { name: "y火fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4@kGGm57;?9tC*lNdGDD, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    while (true) {
      if ((this.var("d火") === "1")) {
        this.sprite.visible = true;
        this.goTo(this.sprite, "d2");
        this.pointInDirection(this.sprite, 90);
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async y2wdfz_whenBackdrop_1_258(): Promise<void> {
    this.sprite = this.sprites["y2wdfz"] ?? { name: "y2wdfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7qA/F9ZH(pr:j,8[7=:d, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 100, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async y2wdfz_whenBackdrop_2_259(): Promise<void> {
    this.sprite = this.sprites["y2wdfz"] ?? { name: "y2wdfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M%Qc]cLf:Sw%@7UH2{~, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      this.goTo(this.sprite, "y2");
      if ((this.var("ysfwd") === "1")) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenKey_r_260(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !@_v4fY`fi[-VsAsn$Xj, opcode: event_whenkeypressed
    this.showVariable("yz持攻豆");
    this.showVariable("yz金光薇");
    this.showVariable("yz毁灭毒针");
    this.showVariable("yz炫夜护盾");
    this.showVariable("yz轰炸匕首");
    this.showVariable("yz月勾环");
    this.showVariable("yz妍妍三叉戟");
    this.showVariable("yz尖刺匕首");
    this.showVariable("yz三叉戟持攻豆");
    this.showVariable("yz炫夜短震荡波");
  }

  async y2z2_whenKey_t_261(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: UBzd@4|q250VcuG^A%kL, opcode: event_whenkeypressed
    this.hideVariable("yz持攻豆");
    this.hideVariable("yz金光薇");
    this.hideVariable("yz毁灭毒针");
    this.hideVariable("yz炫夜护盾");
    this.hideVariable("yz轰炸匕首");
    this.hideVariable("yz月勾环");
    this.hideVariable("yz妍妍三叉戟");
    this.hideVariable("yz尖刺匕首");
    this.hideVariable("yz三叉戟持攻豆");
    this.hideVariable("yz炫夜短震荡波");
  }

  async y2z2_whenStartAsClone_262(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: uvMW$y+N+x`;,SE70G}2, opcode: control_start_as_clone
    this.sprite.visible = true;
    if ((!((this.costumeValue(this.sprite, "number") === "4") || ((this.costumeValue(this.sprite, "number") === "9") || (this.costumeValue(this.sprite, "number") === "10"))))) {
      this.goTo(this.sprite, "y2");
    }
    await this.wait(30);
    this.deleteThisClone(this.sprite); return;
  }

  async y2z2_whenStartAsClone_263(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: xsX|iBF/H(OJ6ZFIud/), opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "2")) {
        await this.wait(this.var("难度"));
        for (let i = 0, n = Number(14); i < n; i++) {
          this.switchCostume(this.sprite, "4");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "2");
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_264(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: :r7u]o%kHP61k;G8OA*O, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "4")) {
      this.pointTowards(this.sprite, "d2");
    }
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "4")) {
        this.moveSteps(this.sprite, 15);
        if ((this.touching(this.sprite, "_edge_") || this.touching(this.sprite, "d2"))) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_265(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: @{9RXPk2y1Of_xd4f*`k, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "3")) {
      this.pointTowards(this.sprite, "_mouse_");
    }
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "3")) {
        this.moveSteps(this.sprite, 25);
        if (this.touching(this.sprite, "_edge_")) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
        if (this.touching(this.sprite, "d2")) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenBackdrop_2_266(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 8}nT=Vj77*`|Pz_9qlvO, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    while (true) {
      if ((!((this.var("tzms") === "5") || (this.var("tzms") === "7")))) {
        if (this.keyPressed("q")) {
          if ((this.var("yz持攻豆") > "0.99")) {
            this.changeVar("yz持攻豆", -1);
            this.switchCostume(this.sprite, "1");
            this.createClone("_myself_");
            await this.wait(0.1);
          }
        }
        if (this.keyPressed("w")) {
          if ((this.var("yz金光薇") > "0.99")) {
            this.changeVar("yz金光薇", -1);
            this.switchCostume(this.sprite, "2");
            this.createClone("_myself_");
            await this.wait(0.1);
          }
        }
        if (this.keyPressed("e")) {
          if ((this.var("yz毁灭毒针") > "0.99")) {
            this.changeVar("yz毁灭毒针", -1);
            this.switchCostume(this.sprite, "3");
            this.createClone("_myself_");
            await this.wait(0.1);
          }
        }
        if ((this.var("xz1zs") === "1")) {
          if ((this.var("yz月勾环") > "0.99")) {
            this.changeVar("yz月勾环", -1);
            this.switchCostume(this.sprite, "5");
            this.createClone("_myself_");
            this.setVar("xz1zs", "0");
            await this.wait(0.1);
          }
        }
        if ((this.var("xz2zs") === "1")) {
          if ((this.var("yz妍妍三叉戟") > "0.99")) {
            this.changeVar("yz妍妍三叉戟", -1);
            this.switchCostume(this.sprite, "6");
            for (let i = 0, n = Number(25); i < n; i++) {
              this.createClone("_myself_");
              await this.yieldFrame();
            }
            this.setVar("xz2zs", "0");
            await this.wait(0.1);
          }
        }
        if ((this.var("xz3zs") === "1")) {
          if ((this.var("yz尖刺匕首") > "0.99")) {
            this.changeVar("yz尖刺匕首", -1);
            this.switchCostume(this.sprite, "7");
            this.createClone("_myself_");
            this.setVar("xz3zs", "0");
            await this.wait(0.1);
          }
        }
        if ((this.var("xz4zs") === "1")) {
          if ((this.var("yz三叉戟持攻豆") > "0.99")) {
            this.changeVar("yz三叉戟持攻豆", -1);
            this.switchCostume(this.sprite, "8");
            this.createClone("_myself_");
            this.setVar("xz4zs", "0");
            await this.wait(0.1);
          }
        }
        if ((this.var("xz5zs") === "1")) {
          if ((this.var("yz炫夜短震荡波") > "0.99")) {
            this.changeVar("yz炫夜短震荡波", -1);
            this.switchCostume(this.sprite, "9");
            for (let i = 0, n = Number(63); i < n; i++) {
              this.goToXY(this.sprite, -200, (-210 + (this.random(1, 6) * 60)));
              this.createClone("_myself_");
              await this.yieldFrame();
            }
            this.setVar("xz5zs", "0");
            await this.wait(0.1);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_267(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: m/]x;krRrHA^[D~xLl66, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.sprite.visible = false;
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenBackdrop_1_268(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: }p,4:g+x7~NF3:@,+5Ax, opcode: event_whenbackdropswitchesto
    if ((this.backdropValue("number") === "1")) {
      this.deleteThisClone(this.sprite); return;
    }
    return; // stop "other scripts in sprite"
  }

  async y2z2_whenGreenFlag_269(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
  }

  async y2z2_whenBackdrop_2_270(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: [!lP]|XTpLlf!/osk95A, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("tzms") === "5")) {
        if (this.keyPressed("q")) {
          this.switchCostume(this.sprite, "1");
          this.createClone("_myself_");
          await this.wait(0.1);
        }
        if (this.keyPressed("w")) {
          this.switchCostume(this.sprite, "2");
          this.createClone("_myself_");
          await this.wait(0.1);
        }
        if (this.keyPressed("e")) {
          this.switchCostume(this.sprite, "3");
          this.createClone("_myself_");
          await this.wait(0.1);
        }
        if ((this.var("xz1zs") === "1")) {
          this.switchCostume(this.sprite, "5");
          this.createClone("_myself_");
          this.setVar("xz1zs", "0");
          await this.wait(0.1);
        }
        if ((this.var("xz2zs") === "1")) {
          this.switchCostume(this.sprite, "6");
          for (let i = 0, n = Number(25); i < n; i++) {
            this.createClone("_myself_");
            await this.yieldFrame();
          }
          this.setVar("xz2zs", "0");
          await this.wait(0.1);
        }
        if ((this.var("xz3zs") === "1")) {
          this.switchCostume(this.sprite, "7");
          this.createClone("_myself_");
          this.setVar("xz3zs", "0");
          await this.wait(0.1);
        }
        if ((this.var("xz4zs") === "1")) {
          this.switchCostume(this.sprite, "8");
          this.createClone("_myself_");
          this.setVar("xz4zs", "0");
          await this.wait(0.1);
        }
        if ((this.var("xz5zs") === "1")) {
          this.switchCostume(this.sprite, "9");
          for (let i = 0, n = Number(63); i < n; i++) {
            this.goToXY(this.sprite, -200, (-210 + (this.random(1, 6) * 60)));
            this.createClone("_myself_");
            await this.yieldFrame();
          }
          this.setVar("xz5zs", "0");
          await this.wait(0.1);
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_271(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !f5YqpMhM2F1!o.rE4%:, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.sprite.visible = false;
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_272(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: /*o8I{M:V,i5d,igw}N_, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "3")) {
        if (this.touching(this.sprite, "d2")) {
          this.setVar("dsfzd2", "1");
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenBackdrop_1_273(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: vn37Gyo(zMtdY5^AgExX, opcode: event_whenbackdropswitchesto
    while (true) {
      this.sprite.visible = false;
      this.deleteThisClone(this.sprite); return;
      await this.yieldFrame();
    }
  }

  async y2z2_whenBackdrop_2_274(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: AO4[CJ-xldd4(_uoCzb5, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.deleteThisClone(this.sprite); return;
  }

  async y2z2_whenStartAsClone_275(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: B*reKgGqq7iuf#t:NVM), opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "5")) {
        this.setVar("zhqxhd", "1");
        for (let i = 0, n = Number(70); i < n; i++) {
          this.goTo(this.sprite, "y2");
          this.turnRight(this.sprite, 36);
          await this.yieldFrame();
        }
        await this.glideTo(this.sprite, 0.4, "d2");
        for (let i = 0, n = Number(70); i < n; i++) {
          this.goTo(this.sprite, "d2");
          this.sprite.x += Number(-50);
          this.turnRight(this.sprite, 36);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_276(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: qmrfnk7o@ZWvd.*7/u2q, opcode: control_start_as_clone
    if (((this.costumeValue(this.sprite, "number") === "1") || (this.costumeValue(this.sprite, "number") === "10"))) {
      await this.wait(5);
      this.deleteThisClone(this.sprite); return;
    }
  }

  async y2z2_whenStartAsClone_277(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: LIMEr+K({Jr1Lw7vYfWY, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "6")) {
        await this.wait(1);
        this.pointTowards(this.sprite, "d2");
        while (!(this.touching(this.sprite, "d2"))) {
          this.moveSteps(this.sprite, 40);
          await this.yieldFrame();
        }
        await this.wait(1);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_278(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ~PStRKNgfd)+NtEy%*vr, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "7")) {
        this.pointTowards(this.sprite, "d2");
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 40);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_279(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: M7)QZfCWbInGFA{`mf:0, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "7")) {
        if (this.touching(this.sprite, "d2")) {
          this.setVar("zhbs", "1");
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_280(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: w1=i7]B.y1F!(IR/3lVk, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "6")) {
        await this.wait(2);
        if (this.touching(this.sprite, "_edge_")) {
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_281(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: $kNd2`{2B^tE!g~)08._, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "2")) {
        if ((this.sprite.x > "0")) {
          this.sprite.x = Number(0);
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_282(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: d_)*++U%.|rX}nAO=eu%, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "8")) {
        this.goToXY(this.sprite, -200, this.random(-160, 160));
        this.pointInDirection(this.sprite, 90);
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 25);
          this.switchCostume(this.sprite, "10");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "8");
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2z2_whenStartAsClone_283(): Promise<void> {
    this.sprite = this.sprites["y2z2"] ?? { name: "y2z2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: P%Dzg(AoIx!-~K-P;%xQ, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "9")) {
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 10);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenStartAsClone_284(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ,R}afa*G-:9w?nOB8;,A, opcode: control_start_as_clone
    while (true) {
      if ((this.mouseDown() && this.touching(this.sprite, "_mouse_"))) {
        if ((this.costumeValue(this.sprite, "number") === "7")) {
          if ((this.var("y是否击败2级新夜怪") === "1")) {
            this.setVar("y法术·定", "1");
            await this.wait(50);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenStartAsClone_285(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: r(p{RJ#rh93d9okQU.oT, opcode: control_start_as_clone
    while (true) {
      if ((this.mouseDown() && this.touching(this.sprite, "_mouse_"))) {
        if ((this.costumeValue(this.sprite, "number") === "8")) {
          if ((this.var("y是否击败3级新夜怪") === "1")) {
            this.setVar("y法术·隐", "1");
            await this.wait(75);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenStartAsClone_286(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: I*b]Lx/rHe7n,R5H3(_S, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.mouseDown() && this.touching(this.sprite, "_mouse_"))) {
          if ((this.costumeValue(this.sprite, "number") === "1")) {
            this.setVar("xz1zs", "1");
          }
          if ((this.costumeValue(this.sprite, "number") === "2")) {
            this.setVar("xz2zs", "1");
          }
          if ((this.costumeValue(this.sprite, "number") === "3")) {
            this.setVar("xz3zs", "1");
          }
          if ((this.costumeValue(this.sprite, "number") === "4")) {
            this.setVar("xz4zs", "1");
          }
          if ((this.costumeValue(this.sprite, "number") === "5")) {
            this.setVar("xz5zs", "1");
          }
          await this.wait(0.2);
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenStartAsClone_287(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: @E_]Lx?NrD8M:1qPI$Co, opcode: control_start_as_clone
    this.setEffect(this.sprite, "GHOST", 63);
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if (this.keyPressed("n")) {
          this.sprite.visible = true;
        } else {
          this.sprite.visible = false;
        }
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenGreenFlag_288(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: [@eqIh9:}pACBG?]8p`[, opcode: event_whenflagclicked
    this.setVar("xz1zs", "0");
    this.setVar("xz2zs", "0");
    this.setVar("xz3zs", "0");
    this.setVar("xz4zs", "0");
    this.setVar("xz5zs", "0");
    this.setVar("y法术·定", "0");
    this.setVar("y法术·隐", "0");
    this.setVar("y法术·破", "0");
    this.setVar("y法术·吸", "0");
    this.setVar("y法术·火", "0");
    this.sprite.visible = false;
    this.pointInDirection(this.sprite, 90);
    this.goToXY(this.sprite, -200, -120);
    this.switchCostume(this.sprite, "1");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -160, -120);
    this.switchCostume(this.sprite, "2");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -120, -120);
    this.switchCostume(this.sprite, "3");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -80, -120);
    this.switchCostume(this.sprite, "4");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -40, -120);
    this.switchCostume(this.sprite, "5");
    this.createClone("_myself_");
    this.goToXY(this.sprite, 0, -120);
    this.switchCostume(this.sprite, "6");
    this.createClone("_myself_");
    this.goToXY(this.sprite, 40, -120);
    this.switchCostume(this.sprite, "7");
    this.createClone("_myself_");
    this.goToXY(this.sprite, 80, -120);
    this.switchCostume(this.sprite, "8");
    this.createClone("_myself_");
    this.goToXY(this.sprite, 120, -120);
    this.switchCostume(this.sprite, "9");
    this.createClone("_myself_");
    this.goToXY(this.sprite, 160, -120);
    this.switchCostume(this.sprite, "10");
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, -120);
    this.switchCostume(this.sprite, "11");
    this.createClone("_myself_");
  }

  async y2z2fz_whenBackdrop_1_289(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: tk/*q6Sh5Z(:s[#ano}A, opcode: event_whenbackdropswitchesto
    this.setVar("xz1zs", "0");
    this.setVar("xz2zs", "0");
    this.setVar("xz3zs", "0");
    this.setVar("xz4zs", "0");
    this.setVar("xz5zs", "0");
    this.setVar("y法术·定", "0");
    this.setVar("y法术·隐", "0");
    this.setVar("y法术·破", "0");
    this.setVar("y法术·吸", "0");
    this.setVar("y法术·火", "0");
  }

  async y2z2fz_whenBroadcast_cg_290(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: _Kgf.gI@R_q{_`=ixwJN, opcode: event_whenbroadcastreceived
    if (((this.var("y是否击败1级新夜怪") === "0") && ((this.var("rwzdqd") === "1") && (this.var("tzms") === "1")))) {
      this.setVar("y是否击败1级新夜怪", "1");
      await this.wait(3);
      this.playSound(this.sprite, "1");
    } else {
      this.setVar("y是否击败2级新夜怪", "1");
      await this.wait(3);
      this.playSound(this.sprite, "2");
    }
  }

  async y2z2fz_whenStartAsClone_291(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: _YLx=G*Tup)8yYowBZ!!, opcode: control_start_as_clone
    while (true) {
      if ((this.mouseDown() && this.touching(this.sprite, "_mouse_"))) {
        if ((this.costumeValue(this.sprite, "number") === "9")) {
          if ((this.var("y是否击败3级新夜怪") === "1")) {
            this.setVar("y法术·破", "1");
            await this.wait(35);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenStartAsClone_292(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !/.,1^.N*64E+f8V:L}D, opcode: control_start_as_clone
    while (true) {
      if ((this.mouseDown() && this.touching(this.sprite, "_mouse_"))) {
        if ((this.costumeValue(this.sprite, "number") === "10")) {
          if ((this.var("y是否击败4级新夜怪") === "1")) {
            this.setVar("y法术·吸", "1");
            await this.wait(75);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenStartAsClone_293(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: cwTT2lmWv1V3!F)IqD)s, opcode: control_start_as_clone
    while (true) {
      if ((this.mouseDown() && this.touching(this.sprite, "_mouse_"))) {
        if ((this.costumeValue(this.sprite, "number") === "6")) {
          if ((this.var("y是否击败1级新夜怪") === "1")) {
            await this.wait(75);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2fz_whenStartAsClone_294(): Promise<void> {
    this.sprite = this.sprites["y2z2fz"] ?? { name: "y2z2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: L5-dL%#qxM@!iS18Py5L, opcode: control_start_as_clone
    while (true) {
      if ((this.mouseDown() && this.touching(this.sprite, "_mouse_"))) {
        if ((this.costumeValue(this.sprite, "number") === "11")) {
          if ((this.var("y是否击败5级新夜怪") === "1")) {
            this.setVar("y法术·火", "1");
            await this.wait(75);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async y2z2fzfz_whenBackdrop_1_295(): Promise<void> {
    this.sprite = this.sprites["y2z2fzfz"] ?? { name: "y2z2fzfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: CoveuBxc#hvgoZdIWu=:, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
  }

  async y2z2fzfz_whenBroadcast_y击败1级新夜怪_296(): Promise<void> {
    this.sprite = this.sprites["y2z2fzfz"] ?? { name: "y2z2fzfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: @j1ouJF]ji5%n6H22`hJ, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    for (let i = 0, n = Number(30); i < n; i++) {
      this.switchCostume(this.sprite, this.random(1, 25));
      this.playSound(this.sprite, "1");
      await this.wait(0);
      await this.yieldFrame();
    }
    this.switchCostume(this.sprite, "1");
    this.playSound(this.sprite, "2");
    await this.wait(1);
    this.sprite.visible = false;
  }

  async y2z2fzfz_whenBroadcast_y击败2级新夜怪_297(): Promise<void> {
    this.sprite = this.sprites["y2z2fzfz"] ?? { name: "y2z2fzfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: G.WDX!!+y8w5bVH{HjH-, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    for (let i = 0, n = Number(30); i < n; i++) {
      this.switchCostume(this.sprite, this.random(1, 25));
      this.playSound(this.sprite, "1");
      await this.wait(0);
      await this.yieldFrame();
    }
    this.switchCostume(this.sprite, "2");
    this.playSound(this.sprite, "2");
    await this.wait(1);
    this.sprite.visible = false;
  }

  async y2z2fzfz_whenBroadcast_y击败3级新夜怪_298(): Promise<void> {
    this.sprite = this.sprites["y2z2fzfz"] ?? { name: "y2z2fzfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: {X-1:E9/2;Wy+M+DRecn, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    for (let i = 0, n = Number(30); i < n; i++) {
      this.switchCostume(this.sprite, this.random(1, 25));
      this.playSound(this.sprite, "1");
      await this.wait(0);
      await this.yieldFrame();
    }
    this.switchCostume(this.sprite, "3");
    this.playSound(this.sprite, "2");
    await this.wait(1);
    this.switchCostume(this.sprite, "4");
    this.playSound(this.sprite, "2");
    await this.wait(1);
    this.sprite.visible = false;
  }

  async y2z2fzfz_whenBroadcast_y击败4级新夜怪_299(): Promise<void> {
    this.sprite = this.sprites["y2z2fzfz"] ?? { name: "y2z2fzfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: )m4K#[kA8Ho)cov1I.6/, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    for (let i = 0, n = Number(30); i < n; i++) {
      this.switchCostume(this.sprite, this.random(1, 25));
      this.playSound(this.sprite, "1");
      await this.wait(0);
      await this.yieldFrame();
    }
    this.switchCostume(this.sprite, "5");
    this.playSound(this.sprite, "2");
    await this.wait(1);
    this.sprite.visible = false;
  }

  async y2z2fzfz_whenBroadcast_y击败5级新夜怪_300(): Promise<void> {
    this.sprite = this.sprites["y2z2fzfz"] ?? { name: "y2z2fzfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: o{]g%=pPla}lTuDt79ar, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    for (let i = 0, n = Number(30); i < n; i++) {
      this.switchCostume(this.sprite, this.random(1, 25));
      this.playSound(this.sprite, "1");
      await this.wait(0);
      await this.yieldFrame();
    }
    this.switchCostume(this.sprite, "6");
    this.playSound(this.sprite, "2");
    await this.wait(1);
    this.sprite.visible = false;
  }

  async d2_whenStartAsClone_301(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 6T_grN9TWq/d8xGpej{K, opcode: control_start_as_clone
    while (true) {
      if (((this.backdropValue("number") === "2") && (!(this.costumeValue(this.sprite, "number") === "26")))) {
        if ((this.var("y法术·定") === "1")) {
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_302(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: LJc7x7U^sb`7H;Pn[3=v, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((this.costumeValue(this.sprite, "number") === "1") && (this.backdropValue("number") === "2"))) {
        if ((this.sprite.x < "-220")) {
          this.sprite.x += Number(5);
        }
        if ((this.sprite.x > "220")) {
          this.sprite.x += Number(-5);
        }
        if ((this.sprite.y < "-160")) {
          this.sprite.y += Number(5);
        }
        if ((this.sprite.y > "160")) {
          this.sprite.y += Number(-5);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_303(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: TZCm7YDARQRQ,/s_,us:, opcode: event_whenbackdropswitchesto
    while (true) {
      this.setEffect(this.sprite, "BRIGHTNESS", 0);
      await this.wait(0.2);
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_304(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: *2B(1|}Zp,^f?UHB;pfY, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") > "1")) {
        if ((this.touching(this.sprite, "y2") || this.touching(this.sprite, "y2z2"))) {
          await this.wait(0.01);
          if ((this.sprite.x > this.sensingOf("x position", "y2"))) {
            this.sprite.x += Number(4);
          }
          if ((this.sensingOf("x position", "y2") > this.sprite.x)) {
            this.sprite.x += Number(-4);
          }
          if ((this.sprite.y > this.sensingOf("y position", "y2"))) {
            this.sprite.y += Number(4);
          }
          if ((this.sensingOf("y position", "y2") > this.sprite.y)) {
            this.sprite.y += Number(-4);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_305(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ncxf#/!1-VKq/6b_/~a}, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "23")) {
        this.sprite.rotationStyle = "don't rotate";
        await this.glideTo(this.sprite, 0.6, "_random_");
        for (let i = 0, n = Number(2); i < n; i++) {
          await this.wait(0.4);
          for (let i = 0, n = Number(5); i < n; i++) {
            this.pointTowards(this.sprite, "_mouse_");
            this.switchCostume(this.sprite, "24");
            this.createClone("_myself_");
            this.pointInDirection(this.sprite, 90);
            this.switchCostume(this.sprite, "23");
            await this.yieldFrame();
          }
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_306(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: V[FfyPvZB}w3~]^Dn()=, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("tzms") === "9")) {
        if ((this.costumeValue(this.sprite, "number") === "1")) {
          this.goToXY(this.sprite, 200, 0);
          this.pointInDirection(this.sprite, 90);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_307(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: C_,7;qvpW6URIz=d(T}], opcode: control_start_as_clone
    this.sprite.visible = true;
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "2")) {
        this.moveSteps(this.sprite, 25);
        if ((this.touching(this.sprite, "_edge_") || this.touching(this.sprite, "y2"))) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      if ((this.costumeValue(this.sprite, "number") === "3")) {
        await this.wait(10);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBroadcast_sd_308(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: /D,ltPTAaYQjCmN2lieE, opcode: event_whenbroadcastreceived
    if ((this.var("难度") > "2")) {
      if ((this.var("y法术·定") === "0")) {
        if ((this.costumeValue(this.sprite, "number") === "1")) {
          if (((this.var("rwm") === "队长") && (this.random(1, 6) === "1"))) {
            this.setEffect(this.sprite, "GHOST", 100);
            this.goTo(this.sprite, "_random_");
            await this.wait(this.random(1, 3));
            this.setEffect(this.sprite, "GHOST", 0);
            for (let i = 0, n = Number(5); i < n; i++) {
              this.pointTowards(this.sprite, "y2fz2");
              this.switchCostume(this.sprite, "2");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              this.pointInDirection(this.sprite, 90);
              await this.yieldFrame();
            }
            this.goToXY(this.sprite, 200, 0);
          } else {
            if ((this.random(1, 2) === "1")) {
              for (let i = 0, n = Number(6); i < n; i++) {
                this.sprite.y += Number(10);
                await this.yieldFrame();
              }
              if ((this.var("rwzdqd") > "1")) {
                if (((!(this.var("tzms") === "9")) && (this.random(1, 6) === "1"))) {
                  for (let i = 0, n = Number(5); i < n; i++) {
                    this.pointTowards(this.sprite, "y2fz2");
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.pointInDirection(this.sprite, 90);
                    await this.yieldFrame();
                  }
                }
              }
              for (let i = 0, n = Number(6); i < n; i++) {
                this.sprite.y += Number(-10);
                await this.yieldFrame();
              }
            } else {
              for (let i = 0, n = Number(6); i < n; i++) {
                this.sprite.y += Number(-10);
                await this.yieldFrame();
              }
              if ((this.var("rwzdqd") > "1")) {
                if (((!(this.var("tzms") === "9")) && (this.random(1, 6) === "1"))) {
                  for (let i = 0, n = Number(5); i < n; i++) {
                    this.pointTowards(this.sprite, "y2fz2");
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.pointInDirection(this.sprite, 90);
                    await this.yieldFrame();
                  }
                }
              }
              for (let i = 0, n = Number(6); i < n; i++) {
                this.sprite.y += Number(10);
                await this.yieldFrame();
              }
            }
          }
        }
      }
    }
  }

  async d2_whenStartAsClone_309(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: R~tMxmW?q3Z#E7_FAu8d, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_310(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7k9Tcf7.3yA5;JQRLy;l, opcode: event_whenbackdropswitchesto
    this.deleteThisClone(this.sprite); return;
  }

  async d2_whenBackdrop_2_311(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: z^z(A@mWLKUZRg1!;8o., opcode: event_whenbackdropswitchesto
    this.setVar("y得分", "0");
    while (true) {
      if ((this.touching(this.sprite, "y2") || this.touching(this.sprite, "y2z2"))) {
        this.changeVar("d体力", (0 - this.var("ygj")));
        this.changeVar("y蓄力", this.var("y蓄力速度"));
        if ((this.var("tzms") === "7")) {
          this.changeVar("y得分", this.var("ygj"));
        }
        this.playSound(this.sprite, "dbjs");
        this.setEffect(this.sprite, "BRIGHTNESS", 25);
        if ((this.var("y连击值") === "25")) {
          this.changeVar("d体力", (0 - (this.var("ygj") / 20)));
        }
        if ((this.var("y法术·定") === "1")) {
          this.playSound(this.sprite, "d定");
        }
        if ((this.var("rwzdqd") > "2")) {
          if ((this.random(1, 2) === "1")) {
            if ((this.costumeValue(this.sprite, "number") === "1")) {
              this.playSound(this.sprite, "hd");
              for (let i = 0, n = Number(2); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.pointTowards(this.sprite, "y2fz2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                this.pointInDirection(this.sprite, 90);
                await this.yieldFrame();
              }
            }
          }
        }
      }
      if ((this.var("d体力") < "0")) {
        this.switchBackdrop("1");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_312(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: U?ExTA/,@:_]q8!D%DoS, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((!(this.var("tzms") === "9"))) {
        if ((this.var("rwzdqd") > "1")) {
          if ((this.var("rwzdqd") > "2")) {
            if ((this.var("rwzdqd") > "3")) {
              if (((this.var("新夜怪主人") === "王队长") && (this.var("tzms") === "11"))) {
                for (let i = 0, n = Number(4); i < n; i++) {
                  this.setVar("dzs", this.random(1, 12));
                  if ((this.var("dzs") === "1")) {
                    for (let i = 0, n = Number((this.var("难度") + 2)); i < n; i++) {
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, 90);
                  }
                  if ((this.var("dzs") === "2")) {
                    await this.glideToXY(this.sprite, 0.1, 200, 0);
                    this.pointInDirection(this.sprite, 90);
                    this.switchCostume(this.sprite, "11");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.pointInDirection(this.sprite, 180);
                    this.switchCostume(this.sprite, "11");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.pointInDirection(this.sprite, -90);
                    this.switchCostume(this.sprite, "11");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.pointInDirection(this.sprite, 0);
                    this.switchCostume(this.sprite, "11");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.pointInDirection(this.sprite, 90);
                    await this.wait(2);
                  }
                  if ((this.var("dzs") === "3")) {
                    this.goToXY(this.sprite, 160, 40);
                    this.pointInDirection(this.sprite, -90);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.goToXY(this.sprite, 160, 0);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.goToXY(this.sprite, 160, -40);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    await this.glideToXY(this.sprite, 0.2, 200, 0);
                    this.pointInDirection(this.sprite, -120);
                    for (let i = 0, n = Number(11); i < n; i++) {
                      this.switchCostume(this.sprite, "13");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.turnRight(this.sprite, 6);
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, 90);
                    for (let i = 0, n = Number(40); i < n; i++) {
                      this.switchCostume(this.sprite, "14");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.switchCostume(this.sprite, "18");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.switchCostume(this.sprite, "6");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    for (let i = 0, n = Number(25); i < n; i++) {
                      this.switchCostume(this.sprite, "7");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    for (let i = 0, n = Number(10); i < n; i++) {
                      this.switchCostume(this.sprite, "11");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    await this.wait(3);
                  }
                  if ((this.var("dzs") === "4")) {
                    for (let i = 0, n = Number(((this.var("难度") * 3) + 5)); i < n; i++) {
                      if ((this.random(1, 2) === "1")) {
                        this.sprite.y = Number(90);
                        this.switchCostume(this.sprite, "7");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.wait(0.4);
                      } else {
                        this.sprite.y = Number(-90);
                        this.switchCostume(this.sprite, "7");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.wait(0.3);
                      }
                      await this.yieldFrame();
                    }
                    this.sprite.y = Number(0);
                  }
                  if ((this.var("dzs") === "5")) {
                    for (let i = 0, n = Number(3); i < n; i++) {
                      await this.glideTo(this.sprite, 1, "_random_");
                      await this.yieldFrame();
                    }
                    while (!((!this.touching(this.sprite, "y")))) {
                      await this.glideTo(this.sprite, 1, "_random_");
                      await this.yieldFrame();
                    }
                    this.pointTowards(this.sprite, "y2fz2");
                    for (let i = 0, n = Number(6); i < n; i++) {
                      this.switchCostume(this.sprite, "8");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, 90);
                  }
                  if ((this.var("dzs") === "6")) {
                    this.pointInDirection(this.sprite, 90);
                    await this.glideToXY(this.sprite, 0.2, -200, 160);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    for (let i = 0, n = Number(5); i < n; i++) {
                      this.sprite.y += Number(-64);
                      this.switchCostume(this.sprite, "12");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, -90);
                    await this.glideToXY(this.sprite, 0.2, 200, 160);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    for (let i = 0, n = Number(5); i < n; i++) {
                      this.sprite.y += Number(-64);
                      this.switchCostume(this.sprite, "12");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    await this.glideToXY(this.sprite, 0.2, 200, 0);
                    this.pointInDirection(this.sprite, 90);
                  }
                  if ((this.var("dzs") === "7")) {
                    for (let i = 0, n = Number((this.var("难度") * 2)); i < n; i++) {
                      await this.glideTo(this.sprite, 0.3, "y2");
                      for (let i = 0, n = Number(20); i < n; i++) {
                        this.switchCostume(this.sprite, "14");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.yieldFrame();
                      }
                      await this.yieldFrame();
                    }
                    await this.glideToXY(this.sprite, 0.4, 200, 0);
                  }
                  if ((this.var("dzs") === "8")) {
                    if ((this.var("难度") > "1")) {
                      await this.sayForSecs(this.sprite, "吃我一刃", 0.98);
                      this.pointTowards(this.sprite, "y2fz2");
                      await this.wait(0.02);
                      this.switchCostume(this.sprite, "15");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.pointInDirection(this.sprite, 90);
                    }
                  }
                  if ((this.var("dzs") === "9")) {
                    for (let i = 0, n = Number(((this.var("难度") * 5) + 10)); i < n; i++) {
                      this.switchCostume(this.sprite, "19");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, 90);
                  }
                  if ((this.var("dzs") === "10")) {
                    this.goToXY(this.sprite, 0, 0);
                    this.pointTowards(this.sprite, "y2fz2");
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    await this.wait(0.4);
                    this.turnRight(this.sprite, 60);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 60);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 60);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 60);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 60);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.goToXY(this.sprite, 200, 0);
                  }
                  if ((this.var("dzs") === "11")) {
                    if ((this.var("难度") > "1")) {
                      for (let i = 0, n = Number(25); i < n; i++) {
                        this.sprite.y = Number(this.random(-160, 160));
                        this.pointTowards(this.sprite, "y2fz2");
                        this.switchCostume(this.sprite, "2");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.yieldFrame();
                      }
                      this.sprite.y = Number(0);
                      this.pointInDirection(this.sprite, 90);
                      await this.wait(0.4);
                      for (let i = 0, n = Number(17); i < n; i++) {
                        this.sprite.x += Number(2);
                        await this.yieldFrame();
                      }
                      this.goTo(this.sprite, "y2fz2");
                      this.sprite.x += Number(100);
                      this.switchCostume(this.sprite, "11");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.wait(0.8);
                      this.goToXY(this.sprite, 200, 0);
                    }
                  }
                  if ((this.var("dzs") === "12")) {
                    for (let i = 0, n = Number((this.var("难度") + 2)); i < n; i++) {
                      this.switchCostume(this.sprite, "23");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    await this.wait(1);
                  }
                  await this.wait(1);
                  await this.yieldFrame();
                }
                await this.glideToXY(this.sprite, 0.4, 200, 0);
                await this.wait(2.6);
              } else {
                for (let i = 0, n = Number(4); i < n; i++) {
                  this.setVar("dzs", this.random(1, 12));
                  if ((this.var("dzs") === "1")) {
                    for (let i = 0, n = Number((10 + (this.var("难度") * 5))); i < n; i++) {
                      this.switchCostume(this.sprite, "4");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.turnRight(this.sprite, this.random(-15, 15));
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, 90);
                  }
                  if ((this.var("dzs") === "2")) {
                    if ((this.var("难度") > "1")) {
                      await this.glideToXY(this.sprite, 0.1, 200, 0);
                      this.pointInDirection(this.sprite, 90);
                      this.switchCostume(this.sprite, "11");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.pointInDirection(this.sprite, 180);
                      this.switchCostume(this.sprite, "11");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.pointInDirection(this.sprite, -90);
                      this.switchCostume(this.sprite, "11");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.pointInDirection(this.sprite, 0);
                      this.switchCostume(this.sprite, "11");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.pointInDirection(this.sprite, 90);
                      await this.wait(2);
                    }
                  }
                  if ((this.var("dzs") === "3")) {
                    if ((this.var("难度") > "1")) {
                      this.switchCostume(this.sprite, "6");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                    }
                  }
                  if ((this.var("dzs") === "4")) {
                    for (let i = 0, n = Number(((this.var("难度") * 3) + 5)); i < n; i++) {
                      if ((this.random(1, 2) === "1")) {
                        this.sprite.y = Number(90);
                        this.switchCostume(this.sprite, "7");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.wait(0.4);
                      } else {
                        this.sprite.y = Number(-90);
                        this.switchCostume(this.sprite, "7");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.wait(0.4);
                      }
                      await this.yieldFrame();
                    }
                    this.sprite.y = Number(0);
                  }
                  if ((this.var("dzs") === "5")) {
                    if ((this.var("难度") > "1")) {
                      for (let i = 0, n = Number(3); i < n; i++) {
                        await this.glideTo(this.sprite, 1, "_random_");
                        await this.yieldFrame();
                      }
                      while (!((!this.touching(this.sprite, "y")))) {
                        await this.glideTo(this.sprite, 1, "_random_");
                        await this.yieldFrame();
                      }
                      this.pointTowards(this.sprite, "y2fz2");
                      for (let i = 0, n = Number(5); i < n; i++) {
                        this.switchCostume(this.sprite, "8");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.yieldFrame();
                      }
                      this.pointInDirection(this.sprite, 90);
                    }
                  }
                  if ((this.var("dzs") === "6")) {
                    this.pointInDirection(this.sprite, 90);
                    await this.glideToXY(this.sprite, 0.2, -200, 160);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    for (let i = 0, n = Number(4); i < n; i++) {
                      this.sprite.y += Number(-80);
                      this.switchCostume(this.sprite, "12");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, -90);
                    await this.glideToXY(this.sprite, 0.2, 200, 160);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    for (let i = 0, n = Number(4); i < n; i++) {
                      this.sprite.y += Number(-80);
                      this.switchCostume(this.sprite, "12");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    await this.glideToXY(this.sprite, 0.2, 200, 0);
                    this.pointInDirection(this.sprite, 90);
                  }
                  if ((this.var("dzs") === "7")) {
                    for (let i = 0, n = Number((this.var("难度") * 2)); i < n; i++) {
                      await this.glideTo(this.sprite, 0.3, "y2fz2");
                      for (let i = 0, n = Number(20); i < n; i++) {
                        this.switchCostume(this.sprite, "14");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.yieldFrame();
                      }
                      await this.yieldFrame();
                    }
                    await this.glideToXY(this.sprite, 0.4, 200, 0);
                  }
                  if ((this.var("dzs") === "8")) {
                    if ((this.var("难度") > "1")) {
                      await this.sayForSecs(this.sprite, "吃我一刃", 0.98);
                      this.pointTowards(this.sprite, "y2fz2");
                      await this.wait(0.02);
                      this.switchCostume(this.sprite, "15");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.pointInDirection(this.sprite, 90);
                    }
                  }
                  if ((this.var("dzs") === "9")) {
                    for (let i = 0, n = Number(((this.var("难度") * 5) + 10)); i < n; i++) {
                      this.switchCostume(this.sprite, "19");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, 90);
                  }
                  if ((this.var("dzs") === "10")) {
                    this.switchCostume(this.sprite, "18");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    for (let i = 0, n = Number(36); i < n; i++) {
                      this.switchCostume(this.sprite, "17");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.turnRight(this.sprite, 10);
                      await this.yieldFrame();
                    }
                  }
                  if ((this.var("dzs") === "11")) {
                    if ((this.var("难度") > "1")) {
                      for (let i = 0, n = Number(25); i < n; i++) {
                        this.sprite.y = Number(this.random(-160, 160));
                        this.pointTowards(this.sprite, "y2fz2");
                        this.switchCostume(this.sprite, "2");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        await this.yieldFrame();
                      }
                      this.sprite.y = Number(0);
                      this.pointInDirection(this.sprite, 90);
                      await this.wait(0.4);
                      for (let i = 0, n = Number(17); i < n; i++) {
                        this.sprite.x += Number(2);
                        await this.yieldFrame();
                      }
                      this.goTo(this.sprite, "y2fz2");
                      this.sprite.x += Number(100);
                      this.switchCostume(this.sprite, "11");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.wait(0.8);
                      this.goToXY(this.sprite, 200, 0);
                    }
                  }
                  if ((this.var("dzs") === "12")) {
                    for (let i = 0, n = Number((this.var("难度") - 1)); i < n; i++) {
                      this.switchCostume(this.sprite, "23");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    await this.wait(1);
                  }
                  await this.wait(1);
                  await this.yieldFrame();
                }
                await this.glideToXY(this.sprite, 0.4, 200, 0);
                await this.wait(2.6);
              }
            } else {
              for (let i = 0, n = Number(4); i < n; i++) {
                this.setVar("dzs", this.random(1, 10));
                if ((this.var("dzs") === "1")) {
                  for (let i = 0, n = Number(((this.var("难度") * 3) + 5)); i < n; i++) {
                    this.switchCostume(this.sprite, "4");
                    this.pointTowards(this.sprite, "y2fz2");
                    this.turnRight(this.sprite, this.random(-15, 15));
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "2")) {
                  this.switchCostume(this.sprite, "3");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.glideToXY(this.sprite, 0.4, 0, 0);
                  for (let i = 0, n = Number((this.var("难度") - this.random(-1, 1))); i < n; i++) {
                    this.pointInDirection(this.sprite, this.random(1, 360));
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 45);
                    await this.wait(1);
                    await this.yieldFrame();
                  }
                  this.switchCostume(this.sprite, "16");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  this.pointInDirection(this.sprite, 90);
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                }
                if ((this.var("dzs") === "3")) {
                  this.turnRight(this.sprite, -36);
                  await this.wait(0.2);
                  for (let i = 0, n = Number(((this.var("难度") * 10) + 20)); i < n; i++) {
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "5");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 36);
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "4")) {
                  for (let i = 0, n = Number((this.var("难度") + 2)); i < n; i++) {
                    for (let i = 0, n = Number(14); i < n; i++) {
                      this.switchCostume(this.sprite, "9");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    await this.wait(0.1);
                    await this.yieldFrame();
                  }
                }
                if ((this.var("dzs") === "5")) {
                  if ((this.var("难度") > "1")) {
                    this.goToXY(this.sprite, 200, this.random(-160, 160));
                    this.pointInDirection(this.sprite, -90);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.goToXY(this.sprite, this.random(-200, 200), 160);
                    this.pointInDirection(this.sprite, 180);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.goToXY(this.sprite, 200, this.sensingOf("y position", "y2fz2"));
                    this.pointInDirection(this.sprite, -90);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.goToXY(this.sprite, this.sensingOf("x position", "y2fz2"), 160);
                    this.pointInDirection(this.sprite, 180);
                    this.switchCostume(this.sprite, "20");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.goToXY(this.sprite, 200, 0);
                    this.pointInDirection(this.sprite, 90);
                    await this.wait(2);
                    for (let i = 0, n = Number(10); i < n; i++) {
                      for (let i = 0, n = Number(5); i < n; i++) {
                        this.switchCostume(this.sprite, "2");
                        this.pointTowards(this.sprite, "y2fz2");
                        this.createClone("_myself_");
                        this.switchCostume(this.sprite, "1");
                        this.pointInDirection(this.sprite, 90);
                        await this.yieldFrame();
                      }
                      await this.wait(0.4);
                      await this.yieldFrame();
                    }
                  }
                }
                if ((this.var("dzs") === "6")) {
                  for (let i = 0, n = Number(((this.var("难度") * 3) + 5)); i < n; i++) {
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    await this.wait(0.8);
                    await this.yieldFrame();
                  }
                  this.sprite.y = Number(0);
                }
                if ((this.var("dzs") === "7")) {
                  await this.glideToXY(this.sprite, 0.1, -200, 140);
                  this.pointInDirection(this.sprite, 135);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.glideToXY(this.sprite, 0.1, 200, 140);
                  this.pointInDirection(this.sprite, -135);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.glideToXY(this.sprite, 0.1, -200, -140);
                  this.pointInDirection(this.sprite, 45);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.glideToXY(this.sprite, 0.1, 200, -140);
                  this.pointInDirection(this.sprite, -45);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.glideToXY(this.sprite, 0.1, 200, 0);
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "8")) {
                  if ((this.var("难度") > "1")) {
                    await this.glideToXY(this.sprite, 0.4, 200, 0);
                    this.pointInDirection(this.sprite, 90);
                    for (let i = 0, n = Number(45); i < n; i++) {
                      this.switchCostume(this.sprite, "13");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      this.turnRight(this.sprite, 8);
                      await this.yieldFrame();
                    }
                    this.pointInDirection(this.sprite, 90);
                  }
                }
                if ((this.var("dzs") === "9")) {
                  for (let i = 0, n = Number(this.var("难度")); i < n; i++) {
                    await this.glideTo(this.sprite, 0.4, "_random_");
                    this.switchCostume(this.sprite, "16");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    await this.wait(1);
                    await this.yieldFrame();
                  }
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                  await this.wait(1);
                }
                if ((this.var("dzs") === "10")) {
                  await this.glideToXY(this.sprite, 0.4, 0, 0);
                  this.switchCostume(this.sprite, "18");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  this.switchCostume(this.sprite, "25");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  this.pointInDirection(this.sprite, 30);
                  await this.wait(1);
                  for (let i = 0, n = Number(2); i < n; i++) {
                    for (let i = 0, n = Number(3); i < n; i++) {
                      await this.wait(0.5);
                      this.turnRight(this.sprite, 30);
                      this.switchCostume(this.sprite, "17");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "1");
                      await this.yieldFrame();
                    }
                    this.turnRight(this.sprite, 90);
                    await this.yieldFrame();
                  }
                  this.sprite.x += Number(-15);
                  for (let i = 0, n = Number(2); i < n; i++) {
                    this.switchCostume(this.sprite, "19");
                    this.sprite.y += Number(-50);
                    this.pointInDirection(this.sprite, 180);
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.sprite.y += Number(50);
                    this.sprite.x += Number(30);
                    this.pointInDirection(this.sprite, 90);
                    await this.yieldFrame();
                  }
                  this.sprite.x += Number(-45);
                  this.pointInDirection(this.sprite, 90);
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                  await this.wait(2);
                }
                await this.yieldFrame();
              }
              await this.glideToXY(this.sprite, 0.4, 200, 0);
              await this.wait(2.6);
            }
            await this.wait(1);
          } else {
            for (let i = 0, n = Number(4); i < n; i++) {
              this.setVar("dzs", this.random(1, 8));
              if ((this.var("dzs") === "1")) {
                this.pointTowards(this.sprite, "y2fz2");
                await this.wait(0.2);
                for (let i = 0, n = Number((this.var("难度") + 2)); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
              }
              if ((this.var("dzs") === "2")) {
                await this.glideTo(this.sprite, 0.4, "y2fz2");
                this.sprite.x += Number(-100);
                await this.wait(0.4);
                this.pointTowards(this.sprite, "y2fz2");
                for (let i = 0, n = Number(2); i < n; i++) {
                  for (let i = 0, n = Number((this.var("难度") + 2)); i < n; i++) {
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    await this.yieldFrame();
                  }
                  await this.wait(0.2);
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
                await this.glideToXY(this.sprite, 0.4, 200, 0);
              }
              if ((this.var("dzs") === "3")) {
                this.turnRight(this.sprite, -36);
                await this.wait(0.2);
                for (let i = 0, n = Number(((this.var("难度") * 10) + 20)); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  this.turnRight(this.sprite, 36);
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
              }
              if ((this.var("dzs") === "4")) {
                for (let i = 0, n = Number(this.random(0, 4)); i < n; i++) {
                  for (let i = 0, n = Number(6); i < n; i++) {
                    this.sprite.x += Number(5);
                    await this.yieldFrame();
                  }
                  this.pointTowards(this.sprite, "y2fz2");
                  for (let i = 0, n = Number(5); i < n; i++) {
                    this.moveSteps(this.sprite, 40);
                    await this.yieldFrame();
                  }
                  await this.glideToXY(this.sprite, 0.2, 200, 0);
                  await this.yieldFrame();
                }
                for (let i = 0, n = Number(6); i < n; i++) {
                  this.sprite.x += Number(5);
                  await this.yieldFrame();
                }
                this.pointTowards(this.sprite, "y2fz2");
                await this.glideTo(this.sprite, 0.4, "y2fz2");
                this.switchCostume(this.sprite, "3");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                this.moveSteps(this.sprite, 100);
                this.turnRight(this.sprite, 180);
                for (let i = 0, n = Number(5); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
                await this.glideToXY(this.sprite, 0.4, 200, 0);
              }
              if ((this.var("dzs") === "5")) {
                if ((this.var("难度") > "3")) {
                  await this.glideToXY(this.sprite, 0.4, 200, this.sensingOf("y position", "y2fz2"));
                  await this.wait(0.4);
                  this.pointInDirection(this.sprite, ((this.random(0, 1) * 180) - 90));
                  for (let i = 0, n = Number(12); i < n; i++) {
                    this.sprite.x += Number(-10);
                    this.switchCostume(this.sprite, "13");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 180);
                    this.switchCostume(this.sprite, "13");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 20);
                    this.sprite.x += Number(-10);
                    this.switchCostume(this.sprite, "13");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 180);
                    this.switchCostume(this.sprite, "13");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 20);
                    this.sprite.x += Number(-10);
                    this.switchCostume(this.sprite, "13");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 180);
                    this.switchCostume(this.sprite, "13");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 20);
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                  this.switchCostume(this.sprite, "19");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  this.switchCostume(this.sprite, "19");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.wait(0.4);
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                }
              }
              if ((this.var("dzs") === "6")) {
                if ((this.var("难度") > "1")) {
                  for (let i = 0, n = Number(10); i < n; i++) {
                    this.turnRight(this.sprite, 36);
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                  for (let i = 0, n = Number(60); i < n; i++) {
                    this.switchCostume(this.sprite, "8");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "1");
                    this.turnRight(this.sprite, 54);
                    await this.yieldFrame();
                  }
                  this.pointTowards(this.sprite, "y2fz2");
                  this.switchCostume(this.sprite, "8");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  this.pointInDirection(this.sprite, 90);
                }
              }
              if ((this.var("dzs") === "7")) {
                this.pointInDirection(this.sprite, -90);
                for (let i = 0, n = Number(((this.var("难度") * 5) + 10)); i < n; i++) {
                  this.switchCostume(this.sprite, "17");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
              }
              if ((this.var("dzs") === "8")) {
                this.switchCostume(this.sprite, "18");
                this.createClone("_myself_");
                for (let i = 0, n = Number((this.var("难度") * 2)); i < n; i++) {
                  this.switchCostume(this.sprite, "19");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.yieldFrame();
                }
              }
              await this.wait(1);
              await this.yieldFrame();
            }
            await this.wait(3);
          }
        } else {
          for (let i = 0, n = Number(4); i < n; i++) {
            this.setVar("dzs", this.random(1, 6));
            if ((this.var("dzs") === "1")) {
              this.pointTowards(this.sprite, "y2fz2");
              await this.wait(0.4);
              for (let i = 0, n = Number((this.var("难度") + 2)); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
            }
            if ((this.var("dzs") === "2")) {
              await this.glideTo(this.sprite, 0.6, "y2fz2");
              this.sprite.x += Number(-100);
              await this.wait(0.6);
              this.pointTowards(this.sprite, "y2fz2");
              for (let i = 0, n = Number(2); i < n; i++) {
                for (let i = 0, n = Number((this.var("难度") + 2)); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.yieldFrame();
                }
                await this.wait(0.4);
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
              await this.glideToXY(this.sprite, 0.6, 200, 0);
            }
            if ((this.var("dzs") === "3")) {
              this.turnRight(this.sprite, -36);
              await this.wait(0.2);
              for (let i = 0, n = Number(((this.var("难度") * 10) + 20)); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                this.turnRight(this.sprite, 36);
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
            }
            if ((this.var("dzs") === "4")) {
              for (let i = 0, n = Number(6); i < n; i++) {
                this.sprite.x += Number(5);
                await this.yieldFrame();
              }
              this.pointTowards(this.sprite, "y2fz2");
              await this.glideTo(this.sprite, 0.6, "y2fz2");
              this.switchCostume(this.sprite, "3");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              this.moveSteps(this.sprite, 100);
              this.turnRight(this.sprite, 180);
              for (let i = 0, n = Number(5); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
              await this.glideToXY(this.sprite, 0.6, 200, 0);
            }
            if ((this.var("dzs") === "5")) {
              this.turnRight(this.sprite, -36);
              await this.wait(0.2);
              this.pointInDirection(this.sprite, 90);
              for (let i = 0, n = Number((this.var("难度") * 20)); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                this.turnRight(this.sprite, 54);
                await this.yieldFrame();
              }
              this.pointTowards(this.sprite, "y2");
              this.switchCostume(this.sprite, "2");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              this.pointInDirection(this.sprite, 90);
            }
            if ((this.var("dzs") === "6")) {
              if ((this.var("难度") > "1")) {
                for (let i = 0, n = Number(6); i < n; i++) {
                  this.sprite.x += Number(5);
                  await this.yieldFrame();
                }
                this.pointTowards(this.sprite, "y2fz2");
                await this.glideTo(this.sprite, 0.6, "y2fz2");
                this.switchCostume(this.sprite, "3");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                for (let i = 0, n = Number(5); i < n; i++) {
                  this.moveSteps(this.sprite, 20);
                  await this.yieldFrame();
                }
                for (let i = 0, n = Number(5); i < n; i++) {
                  this.turnRight(this.sprite, 60);
                  await this.glideTo(this.sprite, 0.3, "y2fz2");
                  this.switchCostume(this.sprite, "3");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  for (let i = 0, n = Number(5); i < n; i++) {
                    this.moveSteps(this.sprite, 20);
                    await this.yieldFrame();
                  }
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
                await this.glideToXY(this.sprite, 0.6, 200, 0);
              }
            }
            await this.wait(1.2);
            await this.yieldFrame();
          }
          await this.wait(4);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBroadcast_cg_313(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: xvFMQf4O74Nbw$yU7^ih, opcode: event_whenbroadcastreceived
    if ((this.var("tzms") === "1")) {
      if ((this.sensingOf("costume #", "tz") === "3")) {
        if ((this.var("rwzdqd") === "4")) {
          this.changeVar("y金币", this.random(30, 40));
          this.changeVar("y等级", (0.2 + (this.var("难度") * 0.1)));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(20, 30));
            this.changeVar("y等级", (0.15 + (this.var("难度") * 0.05)));
            if ((this.random(1, 2) === "1")) {
              this.changeVar("yz月勾环", 1);
            }
            if ((this.random(1, 2) === "1")) {
              this.changeVar("yz妍妍三叉戟", 1);
            }
            if ((this.random(1, 2) === "1")) {
              this.changeVar("yz尖刺匕首", 1);
            }
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(6, 10));
              this.changeVar("y等级", (0.04 + (this.var("难度") * 0.02)));
            } else {
              this.changeVar("y金币", this.random(2, 6));
              this.changeVar("y等级", (0.01 + (this.var("难度") * 0.01)));
            }
          }
        }
      } else {
        if ((this.var("rwzdqd") > "3")) {
          this.changeVar("y金币", this.random(15, 20));
          this.changeVar("y等级", (0.2 + (this.var("难度") * 0.1)));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(10, 15));
            this.changeVar("y等级", (0.15 + (this.var("难度") * 0.05)));
            if ((this.random(1, 3) === "1")) {
              this.changeVar("yz月勾环", 1);
            }
            if ((this.random(1, 3) === "1")) {
              this.changeVar("yz妍妍三叉戟", 1);
            }
            if ((this.random(1, 3) === "1")) {
              this.changeVar("yz尖刺匕首", 1);
            }
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(3, 5));
              this.changeVar("y等级", (0.04 + (this.var("难度") * 0.02)));
            } else {
              this.changeVar("y金币", this.random(1, 3));
              this.changeVar("y等级", (0.01 + (this.var("难度") * 0.01)));
            }
          }
        }
      }
      if ((this.random(1, 2) === "1")) {
        this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      }
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
      this.setVar("dbybjlsj", this.random(1, 110));
      if ((this.var("dbybjlsj") === "1")) {
        this.changeVar("yz持攻豆", 1);
      }
      if ((this.var("dbybjlsj") === "2")) {
        this.changeVar("yz金光薇", 1);
      }
      if ((this.var("dbybjlsj") === "3")) {
        this.changeVar("yz毁灭毒针", 1);
      }
      if ((this.var("dbybjlsj") === "4")) {
        this.changeVar("yz炫夜护盾", 1);
      }
      if ((this.var("dbybjlsj") === "5")) {
        this.changeVar("yz轰炸匕首", 1);
      }
      if ((this.var("dbybjlsj") === "6")) {
        this.changeVar("y回血药水数量", 1);
      }
      if ((this.var("dbybjlsj") === "7")) {
        this.changeVar("y无敌药水数量", 1);
      }
      if ((this.var("dbybjlsj") === "8")) {
        this.changeVar("y解毒药水数量", 1);
      }
      if ((this.var("dbybjlsj") === "9")) {
        if (((this.var("y最高气力") + (this.var("y大力丹数量") * 10)) < "400")) {
          this.changeVar("y大力丹数量", 1);
        }
      }
      if ((this.var("dbybjlsj") === "10")) {
        if (((this.var("y最高精力") + (this.var("y提神丹数量") * 10)) < "400")) {
          this.changeVar("y提神丹数量", 1);
        }
      }
      if ((this.var("dbybjlsj") === "11")) {
        if (((this.var("y蓄力速度") + (this.var("y蓄力丹数量") * 0.01)) < "0.9")) {
          this.changeVar("y蓄力丹数量", 1);
        }
      }
    }
    if ((this.var("tzms") === "2")) {
      if ((this.sensingOf("costume #", "tz") === "3")) {
        if ((this.var("rwzdqd") === "4")) {
          this.changeVar("y金币", this.random(90, 120));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(60, 90));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(18, 30));
            } else {
              this.changeVar("y金币", this.random(6, 18));
            }
          }
        }
      } else {
        if ((this.var("rwzdqd") > "3")) {
          this.changeVar("y金币", this.random(45, 60));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(30, 45));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(9, 15));
            } else {
              this.changeVar("y金币", this.random(3, 9));
            }
          }
        }
      }
      this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
    }
    if ((this.var("tzms") === "3")) {
      if ((this.sensingOf("costume #", "tz") === "3")) {
        if ((this.var("rwzdqd") === "4")) {
          this.changeVar("y金币", this.random(60, 80));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(40, 60));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(12, 20));
            } else {
              this.changeVar("y金币", this.random(4, 12));
            }
          }
        }
      } else {
        if ((this.var("rwzdqd") > "3")) {
          this.changeVar("y金币", this.random(30, 40));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(20, 30));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(6, 10));
            } else {
              this.changeVar("y金币", this.random(2, 6));
            }
          }
        }
      }
      this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
    }
    if ((this.var("tzms") === "4")) {
      if ((this.sensingOf("costume #", "tz") === "3")) {
        if ((this.var("rwzdqd") === "4")) {
          this.changeVar("y金币", this.random(60, 90));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(60, 90));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(60, 90));
            } else {
              this.changeVar("y金币", this.random(6, 18));
            }
          }
        }
      } else {
        if ((this.var("rwzdqd") > "3")) {
          this.changeVar("y金币", this.random(30, 45));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(30, 45));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(30, 45));
            } else {
              this.changeVar("y金币", this.random(3, 9));
            }
          }
        }
      }
      this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
    }
    if ((this.var("tzms") === "6")) {
      if ((this.sensingOf("costume #", "tz") === "3")) {
        if ((this.var("rwzdqd") === "4")) {
          this.changeVar("y金币", this.random(90, 120));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(60, 90));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(18, 30));
            } else {
              this.changeVar("y金币", this.random(6, 18));
            }
          }
        }
      } else {
        if ((this.var("rwzdqd") > "3")) {
          this.changeVar("y金币", this.random(45, 60));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(30, 45));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(9, 15));
            } else {
              this.changeVar("y金币", this.random(3, 9));
            }
          }
        }
      }
      this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
    }
    if ((this.var("tzms") === "7")) {
      if ((this.var("y得分") > "0")) {
        if ((this.sensingOf("costume #", "tz") === "3")) {
          this.changeVar("y金币", Math.round(Number((this.var("y得分") / 30))));
        } else {
          this.changeVar("y金币", Math.round(Number((this.var("y得分") / 60))));
        }
      }
      if ((this.random(1, 5) === "1")) {
        this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      }
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
      if ((this.var("y得分") > this.var("最高分"))) {
        this.setVar("最高分", this.var("y得分"));
        this.setVar("y得分", "0");
      }
    }
    if ((this.var("tzms") === "8")) {
      if ((this.sensingOf("costume #", "tz") === "3")) {
        if ((this.var("rwzdqd") === "4")) {
          this.changeVar("y金币", this.random(60, 80));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(40, 60));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(12, 20));
            } else {
              this.changeVar("y金币", this.random(4, 12));
            }
          }
        }
      } else {
        if ((this.var("rwzdqd") > "3")) {
          this.changeVar("y金币", this.random(30, 40));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(20, 30));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(6, 10));
            } else {
              this.changeVar("y金币", this.random(2, 6));
            }
          }
        }
      }
      if ((this.random(1, 5) === "1")) {
        this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      }
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
    }
    if ((this.var("tzms") === "10")) {
      if ((this.sensingOf("x position", "tz") === "3")) {
        if ((this.var("rwzdqd") === "4")) {
          this.changeVar("y金币", this.random(120, 160));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(80, 120));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(24, 40));
            } else {
              this.changeVar("y金币", this.random(8, 24));
            }
          }
        }
      } else {
        if ((this.var("rwzdqd") > "3")) {
          this.changeVar("y金币", this.random(60, 80));
        } else {
          if ((this.var("rwzdqd") === "3")) {
            this.changeVar("y金币", this.random(40, 60));
          } else {
            if ((this.var("rwzdqd") === "2")) {
              this.changeVar("y金币", this.random(12, 20));
            } else {
              this.changeVar("y金币", this.random(4, 12));
            }
          }
        }
      }
      this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
    }
    if ((this.var("tzms") === "11")) {
      this.changeVar("y金币", 50);
    }
  }

  async d2_whenStartAsClone_314(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Zr)4@s`oVLVFvIYVIX*s, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "4")) {
        if ((this.touching(this.sprite, "_edge_") || (this.touching(this.sprite, "y2") || this.touching(this.sprite, "y2z2")))) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_315(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: p5@JtH8zUGBLG%9[qB+0, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "4")) {
        for (let i = 0, n = Number(10); i < n; i++) {
          this.moveSteps(this.sprite, 25);
          await this.yieldFrame();
        }
        while (true) {
          await this.wait(3);
          this.switchCostume(this.sprite, "5");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "4");
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_316(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: |D{r:)G5Ja!YT6?y[MV9, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "5")) {
        for (let i = 0, n = Number(60); i < n; i++) {
          this.pointTowards(this.sprite, "y2fz2");
          this.moveSteps(this.sprite, 6);
          await this.yieldFrame();
        }
        while (true) {
          this.moveSteps(this.sprite, 25);
          if ((this.touching(this.sprite, "_edge_") || this.touching(this.sprite, "y2"))) {
            await this.wait(0.01);
            this.deleteThisClone(this.sprite); return;
          }
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBroadcast_dys_317(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ./frp^^JJYTOJ]`uV2%;, opcode: event_whenbroadcastreceived
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      this.setEffect(this.sprite, "GHOST", 100);
      await this.wait(20);
      this.setEffect(this.sprite, "GHOST", 0);
    }
  }

  async d2_whenStartAsClone_318(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: /PtBPx8CA_C,ltJ]0qX9, opcode: control_start_as_clone
    while (true) {
      if ((!((this.costumeValue(this.sprite, "number") === "11") || (this.costumeValue(this.sprite, "number") === "30")))) {
        this.setEffect(this.sprite, "GHOST", 0);
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_319(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: D1vJ5|gWsr8*7fco/neK, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "7")) {
        this.pointInDirection(this.sprite, 90);
        this.sprite.x += Number(-10);
        if (this.touching(this.sprite, "y2")) {
          this.setVar("d7sfpdy", "1");
        }
        if ((this.touching(this.sprite, "_edge_") && (!this.touching(this.sprite, "y2")))) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_320(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: SSb#4N1$`P-aal6AVUxN, opcode: control_start_as_clone
    while (true) {
      if (((this.costumeValue(this.sprite, "number") === "4") || (this.costumeValue(this.sprite, "number") === "7"))) {
        this.sprite.rotationStyle = "don't rotate";
      } else {
        this.sprite.rotationStyle = "all around";
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_321(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0868iRCbn}zoRXPi|esZ, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "8")) {
        this.moveSteps(this.sprite, 25);
        if (this.touching(this.sprite, "_edge_")) {
          await this.glideToXY(this.sprite, 0.4, 200, 0);
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
        if (this.touching(this.sprite, "y2")) {
          this.setVar("ysfzd", "1");
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBroadcast_xyx_322(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: aA)+cu_z~Ni%.H,)hxd], opcode: event_whenbroadcastreceived
    this.list("战斗烦恼名单").length = 0;
    this.list("邀请战斗名单").length = 0;
  }

  async d2_whenKey_7_323(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: (d3Kz)FgNEF-76HS+Xe6, opcode: event_whenkeypressed
    this.showList("战斗烦恼名单");
  }

  async d2_whenKey_8_324(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: QBxmg=MwDW)cXi?_l?_1, opcode: event_whenkeypressed
    this.hideList("战斗烦恼名单");
  }

  async d2_whenGreenFlag_325(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4eL~Dj50PnbjyTu+3[P8, opcode: event_whenflagclicked
    this.hideList("战斗烦恼名单");
    this.hideList("邀请战斗名单");
  }

  async d2_whenBroadcast_ys_326(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +2C3L]uC`.=@,E3oJvtF, opcode: event_whenbroadcastreceived
    if ((this.costumeValue(this.sprite, "number") === "7")) {
      if (((this.var("d7sfpdy") === "1") && this.touching(this.sprite, "y2"))) {
        this.changeVar("y体力", (0 - (this.var("dgj") * 10)));
        this.deleteThisClone(this.sprite); return;
      }
    }
  }

  async d2_whenBroadcast_sb_327(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j};zoDHD+CKa*m=PMMl7, opcode: event_whenbroadcastreceived
    if ((!(this.var("tzms") === "9"))) {
      if ((this.random(1, 4) === "1")) {
        this.list("战斗烦恼名单").push(this.var("新夜怪主人"));
      }
      if (String(this.list("邀请战斗名单")).includes(String(this.var("新夜怪主人")))) {
        this.deleteOfList("邀请战斗名单", this.itemNumOfList("邀请战斗名单", this.var("新夜怪主人")));
      }
    }
  }

  async d2_whenBroadcast_xyx_328(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: RgjNgacZ[^i@bUj=.]Vp, opcode: event_whenbroadcastreceived
    this.hideList("战斗烦恼名单");
    this.hideList("邀请战斗名单");
  }

  async d2_whenKey_9_329(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4~7P_w!DOezU8BJbY2:,, opcode: event_whenkeypressed
    this.showList("邀请战斗名单");
  }

  async d2_whenKey_0_330(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: *Pm,/858H4R/h`:!-}.p, opcode: event_whenkeypressed
    this.hideList("邀请战斗名单");
  }

  async d2_whenStartAsClone_331(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4%2Up:h1(D7h3g~#Jw%4, opcode: control_start_as_clone
    this.setEffect(this.sprite, "COLOR", 0);
    while (true) {
      if (String(this.list("邀请战斗名单")).includes(String(this.var("新夜怪主人")))) {
        this.changeEffect(this.sprite, "COLOR", 3);
      } else {
        if ((!(this.costumeValue(this.sprite, "number") === "11"))) {
          if (String(this.list("好友单")).includes(String(this.var("新夜怪主人")))) {
            this.setEffect(this.sprite, "COLOR", 30);
          } else {
            this.setEffect(this.sprite, "COLOR", 0);
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_332(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: U6IdAt+TS[EO6MnoF2#s, opcode: event_whenbackdropswitchesto
    this.setEffect(this.sprite, "COLOR", 0);
    while (true) {
      if (String(this.list("邀请战斗名单")).includes(String(this.var("新夜怪主人")))) {
        this.changeEffect(this.sprite, "COLOR", 3);
      } else {
        if (String(this.list("好友单")).includes(String(this.var("新夜怪主人")))) {
          this.setEffect(this.sprite, "COLOR", 30);
        } else {
          this.setEffect(this.sprite, "COLOR", 0);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenGreenFlag_333(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: LOAbNm.*dA(o?%$[pG)K, opcode: event_whenflagclicked
    this.setVar("dbybjlsj", "0");
  }

  async d2_whenBackdrop_2_334(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: bn!63sFIW/!=+}-J,u;?, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("dsfcz") === "1")) {
        await this.wait(0.3);
        this.setVar("dtl2", this.var("d体力"));
        await this.wait(0.1);
        this.setVar("dsfcz", "0");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_335(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: p]nn@d[OE1.y`0^aCX_w, opcode: control_start_as_clone
    this.setVar("dsfcz", "1");
    if ((this.var("tzms") === "4")) {
      this.setVar("dms4sj", this.random(1, 6));
      if ((this.var("dms4sj") === "1")) {
        this.switchCostume(this.sprite, "2");
      } else {
        this.switchCostume(this.sprite, "8");
      }
    }
  }

  async d2_whenBackdrop_2_336(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: o!kEDSV=RHkKCf:Pz(7!, opcode: event_whenbackdropswitchesto
    this.setVar("dtl2", "0");
    this.setVar("dbysp", "0");
    while (true) {
      if ((this.var("dsfcz") === "1")) {
        if (((this.var("d体力") < this.var("dtl2")) && this.touching(this.sprite, "y2"))) {
          this.setVar("dbysp", "1");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_337(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: |:=2:mu(bfN%D~||*Ifs, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("dbysp") === "1")) {
        await this.wait(0.15);
        this.setVar("dbysp", "0");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_338(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: mB5r@tfO!;)z(A$1ZL%5, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "9")) {
        this.pointTowards(this.sprite, "y2fz2");
        for (let i = 0, n = Number(15); i < n; i++) {
          this.moveSteps(this.sprite, -1);
          await this.yieldFrame();
        }
        this.pointTowards(this.sprite, "y2fz2");
        for (let i = 0, n = Number(4); i < n; i++) {
          this.moveSteps(this.sprite, 40);
          await this.yieldFrame();
        }
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 40);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_339(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: -V5|`OoZ#?]rQHAt/AZP, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "10")) {
        this.goTo(this.sprite, "d2fz2");
        this.turnRight(this.sprite, 25);
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_340(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: BD$(^Zc=7|Mh5q7eksaR, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "10")) {
        await this.wait(5);
        this.createClone("_myself_");
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_341(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: *_rfK~#*JKQKmy/U(cB/, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "9")) {
        if (this.touching(this.sprite, "y2")) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_342(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: FBGD2.e:8!uF$H*ow%47, opcode: event_whenbackdropswitchesto
    this.setVar("ysfzd", "0");
    this.setVar("ysfzd2", "0");
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if (((this.var("ysfzd") === "1") && (this.var("ysfzd2") === "1"))) {
          if ((!String(this.list("y拥有的5大招式")).includes(String("s")))) {
            for (let i = 0, n = Number(45); i < n; i++) {
              await this.wait(1);
              if ((this.var("ysfzd") === "1")) {
                this.changeVar("y体力", (0 - this.var("dgj")));
              }
              await this.yieldFrame();
            }
            this.setVar("ysfzd", "0");
            this.setVar("ysfzd2", "0");
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_343(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: i^XxrNf?.tuZzm!4[=)_, opcode: event_whenbackdropswitchesto
    this.setVar("dsfzd", "0");
    this.setVar("dsfzd2", "0");
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if (((this.var("dsfzd") === "1") && (this.var("dsfzd2") === "1"))) {
          for (let i = 0, n = Number(45); i < n; i++) {
            await this.wait(1);
            this.changeVar("d体力", (0 - this.var("ygj")));
            await this.yieldFrame();
          }
          this.setVar("dsfzd", "0");
          this.setVar("dsfzd2", "0");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_344(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2Cqf%ZK,Dn+s2t`W~DL9, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "6")) {
        if (this.touching(this.sprite, "y2")) {
          this.playSound(this.sprite, "hd");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_345(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: mt{6+t[=Yn?bWvuQ(t[%, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.touching(this.sprite, "y2") && (this.var("y3sfpdd") === "1"))) {
        this.sprite.x += Number(20);
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_346(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: mwwy-S.{dS%Sg2?8$]zz, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "y2")) {
        this.setVar("y4sfpdd", "1");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBroadcast_xlh_347(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 8*)1L9fTvGkH.iv^j?G2, opcode: event_whenbroadcastreceived
    this.setVar("yhdfy", "0");
  }

  async d2_whenBroadcast_xlh_348(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: P%pN}x+E/qbs3WRTNowz, opcode: event_whenbroadcastreceived
    this.list("战斗烦恼名单").length = 0;
    this.list("邀请战斗名单").length = 0;
  }

  async d2_whenBackdrop_2_349(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: y*V:lYhodN0#;2EhjQ$Q, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if (((this.var("ysfzd") === "1") && (this.var("ysfzd2") === "1"))) {
          if ((!String(this.list("y拥有的5大招式")).includes(String("s")))) {
            await this.playSoundUntilDone(this.sprite, "yzd");
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_350(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: kLV+.?pSfo_GkwS()xO-, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "11")) {
        this.goTo(this.sprite, "d2fz");
        if (((this.var("ysfpdd11") === "1") && this.touching(this.sprite, "y2"))) {
          this.changeVar("y体力", -25);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_351(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: r}{|R=velK[+9`)W=R(|, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.var("ysfzd2") === "1")) {
          await this.wait(0.1);
          this.setVar("ysfzd2", "0");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_352(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 94d9e2-smRYA!K%MV!;m, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.var("dsfzd2") === "1")) {
          await this.wait(0.1);
          this.setVar("dsfzd2", "0");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_353(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: [tr#/mGK3TTKMcCil{h@, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "y2")) {
        this.setVar("ysfpdd", "1");
      }
      if ((this.var("ysfpdd") === "1")) {
        await this.wait(0.1);
        this.setVar("ysfpdd", "0");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_354(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: cV`3/?nWbwcb)GHBly1%, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "12")) {
        await this.wait(3);
        for (let i = 0, n = Number(2); i < n; i++) {
          for (let i = 0, n = Number(3); i < n; i++) {
            this.switchCostume(this.sprite, "9");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "12");
            await this.yieldFrame();
          }
          await this.wait(0.2);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_355(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: `6l!8}GUs,0ajRA8F,n[, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "13")) {
        for (let i = 0, n = Number(6); i < n; i++) {
          this.moveSteps(this.sprite, 10);
          await this.yieldFrame();
        }
        this.switchCostume(this.sprite, "3");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_356(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Yz8]MFYk6b|0z?~zc`y0, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "6")) {
      await this.wait(15);
      this.deleteThisClone(this.sprite); return;
    }
  }

  async d2_whenStartAsClone_357(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: -53R;#;/Ao@9FX`1}dMM, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "6")) {
        this.pointInDirection(this.sprite, 90);
        await this.wait(3);
        for (let i = 0, n = Number(2); i < n; i++) {
          this.switchCostume(this.sprite, "9");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "6");
          await this.wait(0.2);
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_358(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ={%.:8q5!g)9d`L8Lltd, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "6")) {
        this.goTo(this.sprite, "d2fz");
        this.setEffect(this.sprite, "GHOST", 63);
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_359(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7?ld?]:},#e;CEV)^qr4, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "14")) {
        for (let i = 0, n = Number(this.random(100, 150)); i < n; i++) {
          this.turnRight(this.sprite, 18);
          await this.yieldFrame();
        }
        this.pointTowards(this.sprite, "y2fz2");
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 25);
          if ((this.distanceTo(this.sprite, "y2") < "50")) {
            for (let i = 0, n = Number(5); i < n; i++) {
              for (let i = 0, n = Number(10); i < n; i++) {
                this.goTo(this.sprite, "y2fz2");
                await this.yieldFrame();
              }
              this.switchCostume(this.sprite, "8");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "14");
              await this.yieldFrame();
            }
            this.deleteThisClone(this.sprite); return;
          }
          await this.yieldFrame();
        }
        await this.wait(0.4);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_360(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: G|c!3zgW,YWd+QSy!noO, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "15")) {
        this.moveSteps(this.sprite, 120);
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 120);
          if (this.touching(this.sprite, "y2")) {
            this.changeVar("y体力", (0 - (this.var("dgj") * 25)));
          }
          await this.yieldFrame();
        }
        await this.wait(0.2);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_1_361(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: MbtHA.xSj$5R:y2$qcB5, opcode: event_whenbackdropswitchesto
    this.setVar("dsfzd", "0");
    this.setVar("dsfzd2", "0");
  }

  async d2_whenBackdrop_2_362(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2T(T+oG}rO37I/yUzucf, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("dsfzd") === "1")) {
        await this.wait(0.1);
        this.setVar("dsfzd", "0");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_363(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: na0ct(?A4p@:4%ZD6-uw, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "y2z2")) {
        this.setVar("dsfzd", "1");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBroadcast_zbdz_364(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: bexO27K^Y/1GEZkH-0K~, opcode: event_whenbroadcastreceived
    while (!((this.backdropValue("number") === "2"))) {
      this.sprite.visible = true;
      this.goToXY(this.sprite, 200, 0);
      this.pointInDirection(this.sprite, 90);
      this.switchCostume(this.sprite, "1");
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_365(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ?(7me~WGDeLF.f:6Pz5V, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_366(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;`S]GV#5j$ymXn:BZgcX, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "11")) {
        await this.wait(1);
        for (let i = 0, n = Number(30); i < n; i++) {
          this.turnRight(this.sprite, 24);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_367(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: GV5Qyl}=fJ8[nDmb7OR%, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "11")) {
      this.setEffect(this.sprite, "COLOR", this.random(1, 200));
      this.setEffect(this.sprite, "GHOST", 37);
    }
  }

  async d2_whenBackdrop_2_368(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2XrZG^`MAJFP-GGqF:RW, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("tzms") === "9")) {
        if ((this.costumeValue(this.sprite, "number") === "1")) {
          this.goToXY(this.sprite, 200, 0);
          this.pointInDirection(this.sprite, 90);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_369(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: :7BIQpbh0ZHBrlugz.xX, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "16")) {
        this.turnRight(this.sprite, 36);
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_370(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: HJ#C~~Xc(,2l|4;XfjRe, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "16")) {
        await this.wait(1);
        await this.glideTo(this.sprite, 0.3, "y2fz2");
        this.sprite.x += Number(50);
        if (this.touching(this.sprite, "y2")) {
          for (let i = 0, n = Number(25); i < n; i++) {
            this.goTo(this.sprite, "y2fz2");
            await this.wait(0.1);
            await this.yieldFrame();
          }
          await this.glideTo(this.sprite, 0.2, "d2fz");
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_371(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2_08]W@~0_LzAf#9;P5}, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "17")) {
        await this.wait(4);
        this.pointTowards(this.sprite, "y2fz2");
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 40);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_372(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: P}%!GBppn4Y9QH,SVrxb, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "18")) {
        this.turnRight(this.sprite, 36);
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_373(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: k#bX?dp*,F0;rms-+ls6, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "18")) {
        await this.wait(4);
        this.switchCostume(this.sprite, "16");
        this.createClone("_myself_");
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_374(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: T5#o9l;oW32+Iuid)xI_, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "19")) {
        await this.wait(1);
        this.pointInDirection(this.sprite, -90);
        await this.glideTo(this.sprite, 0.1, "d2fz");
        await this.glideToXY(this.sprite, 0.2, 200, ((this.random(0, 1) * 300) - 150));
        for (let i = 0, n = Number(20); i < n; i++) {
          this.sprite.x += Number(1);
          await this.yieldFrame();
        }
        this.pointTowards(this.sprite, "y2fz2");
        this.moveSteps(this.sprite, 100);
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 100);
          await this.yieldFrame();
        }
        await this.wait(0.1);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_375(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: t~D5FbRTe;|Y.|/lITze, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "19")) {
        if (this.touching(this.sprite, "y2")) {
          this.switchCostume(this.sprite, "13");
          this.createClone("_myself_");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_376(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: FS8Mv8=i^9za|C+LA^[7, opcode: control_start_as_clone
    while (true) {
      if (((this.costumeValue(this.sprite, "number") === "17") || (this.costumeValue(this.sprite, "number") === "19"))) {
        if (this.touching(this.sprite, "y2")) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_377(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: _ni9X8s,UH!P!mRhE~G%, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "20")) {
        await this.wait(1);
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 25);
          this.switchCostume(this.sprite, "3");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "20");
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_378(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: k?!;3d[$%=y%v5n0L.1i, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "21")) {
        await this.wait(1);
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.moveSteps(this.sprite, 25);
          await this.yieldFrame();
        }
        await this.wait(1);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_379(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: {{6_}s)y`%l#?|/WSYGw, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "22")) {
        this.sprite.x += Number(-10);
        if (this.touching(this.sprite, "_edge_")) {
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenGreenFlag_380(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 568`Qi_).cs!n/^hKFwJ, opcode: event_whenflagclicked
    this.sprite.size = Number(100);
  }

  async d2_whenStartAsClone_381(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Vg+F2e*3T3c^q,z!.%zw, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "23")) {
      await this.wait(25);
      this.deleteThisClone(this.sprite); return;
    }
  }

  async d2_whenStartAsClone_382(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: f:3HxD#FXu-7Y/yIO]L~, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "24")) {
        this.moveSteps(this.sprite, 25);
        if ((this.touching(this.sprite, "_edge_") || this.touching(this.sprite, "y2"))) {
          await this.wait(0.01);
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_383(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: I?%;J%)Z}8+z8|R_%l)2, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "23")) {
        if ((this.touching(this.sprite, "y2") || this.touching(this.sprite, "y2z2"))) {
          for (let i = 0, n = Number(6); i < n; i++) {
            this.switchCostume(this.sprite, "17");
            this.createClone("_myself_");
            this.switchCostume(this.sprite, "23");
            this.turnRight(this.sprite, 60);
            await this.yieldFrame();
          }
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_384(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: w@,./05$yvC^VrQ`xcx3, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "25")) {
        this.goToXY(this.sprite, 0, 160);
        this.pointInDirection(this.sprite, 60);
        for (let i = 0, n = Number(48); i < n; i++) {
          this.turnRight(this.sprite, 5);
          await this.yieldFrame();
        }
        for (let i = 0, n = Number(48); i < n; i++) {
          this.turnLeft(this.sprite, 5);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_385(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ddh2%/ASE9D}$|p#so$[, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("难度") > "1")) {
        if ((!(this.var("tzms") === "9"))) {
          if ((this.backdropValue("number") === "2")) {
            if ((this.var("d体力") < (this.var("d满血") / 2))) {
              if ((this.var("rwzdqd") === "1")) {
                for (let i = 0, n = Number(25); i < n; i++) {
                  this.switchCostume(this.sprite, "9");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.yieldFrame();
                }
                this.switchCostume(this.sprite, "12");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
              } else {
                for (let i = 0, n = Number(6); i < n; i++) {
                  this.switchCostume(this.sprite, "25");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "1");
                  await this.wait(0.1);
                  await this.yieldFrame();
                }
                await this.glideToXY(this.sprite, 1, 0, 170);
                this.goToXY(this.sprite, -60, 170);
                this.pointInDirection(this.sprite, 180);
                this.switchCostume(this.sprite, "20");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                this.goToXY(this.sprite, 60, 170);
                this.pointInDirection(this.sprite, 180);
                this.switchCostume(this.sprite, "20");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                await this.wait(1.7);
                await this.glideToXY(this.sprite, 0.2, 230, 0);
                this.goToXY(this.sprite, 230, -60);
                this.pointInDirection(this.sprite, -90);
                this.switchCostume(this.sprite, "20");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                this.goToXY(this.sprite, 230, 60);
                this.pointInDirection(this.sprite, -90);
                this.switchCostume(this.sprite, "20");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                await this.wait(1.7);
                await this.glideToXY(this.sprite, 0.2, 170, 0);
                this.goToXY(this.sprite, 170, 170);
                this.pointInDirection(this.sprite, -135);
                this.switchCostume(this.sprite, "20");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                this.goToXY(this.sprite, 170, -170);
                this.pointInDirection(this.sprite, -45);
                this.switchCostume(this.sprite, "20");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "1");
                await this.glideToXY(this.sprite, 0.4, 200, 0);
              }
              while (!((this.backdropValue("number") === "1"))) await this.yieldFrame();
            }
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_386(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7BdB2-m*{kY@nyDWkmE], opcode: event_whenbackdropswitchesto
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      if ((this.var("tzms") === "10")) {
        for (let i = 0, n = Number(5); i < n; i++) {
          this.switchCostume(this.sprite, "26");
          this.createClone("_myself_");
          this.switchCostume(this.sprite, "1");
          await this.yieldFrame();
        }
      }
    }
  }

  async d2_whenStartAsClone_387(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: x/.N3:K%o(h2i$+cU{8^, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "26")) {
        if ((this.var("rwzdqd") > "1")) {
          if ((this.var("rwzdqd") > "2")) {
            if ((this.var("rwzdqd") > "3")) {
              for (let i = 0, n = Number(4); i < n; i++) {
                this.setVar("dzs", this.random(1, 12));
                if ((this.var("dzs") === "1")) {
                  for (let i = 0, n = Number(25); i < n; i++) {
                    this.switchCostume(this.sprite, "4");
                    this.pointTowards(this.sprite, "y2fz2");
                    this.turnRight(this.sprite, this.random(-15, 15));
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "2")) {
                  await this.glideToXY(this.sprite, 0.1, 200, 0);
                  this.pointInDirection(this.sprite, 90);
                  this.switchCostume(this.sprite, "11");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.pointInDirection(this.sprite, 180);
                  this.switchCostume(this.sprite, "11");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.pointInDirection(this.sprite, -90);
                  this.switchCostume(this.sprite, "11");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.pointInDirection(this.sprite, 0);
                  this.switchCostume(this.sprite, "11");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.pointInDirection(this.sprite, 90);
                  await this.wait(2);
                }
                if ((this.var("dzs") === "3")) {
                  this.switchCostume(this.sprite, "6");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                }
                if ((this.var("dzs") === "4")) {
                  for (let i = 0, n = Number(14); i < n; i++) {
                    if ((this.random(1, 2) === "1")) {
                      this.sprite.y = Number(90);
                      this.switchCostume(this.sprite, "7");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "26");
                      await this.wait(0.4);
                    } else {
                      this.sprite.y = Number(-90);
                      this.switchCostume(this.sprite, "7");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "26");
                      await this.wait(0.4);
                    }
                    await this.yieldFrame();
                  }
                  this.sprite.y = Number(0);
                }
                if ((this.var("dzs") === "5")) {
                  for (let i = 0, n = Number(3); i < n; i++) {
                    await this.glideTo(this.sprite, 1, "_random_");
                    await this.yieldFrame();
                  }
                  while (!((!this.touching(this.sprite, "y")))) {
                    await this.glideTo(this.sprite, 1, "_random_");
                    await this.yieldFrame();
                  }
                  this.pointTowards(this.sprite, "y2fz2");
                  for (let i = 0, n = Number(5); i < n; i++) {
                    this.switchCostume(this.sprite, "8");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "6")) {
                  this.pointInDirection(this.sprite, 90);
                  await this.glideToXY(this.sprite, 0.2, -200, 160);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  for (let i = 0, n = Number(4); i < n; i++) {
                    this.sprite.y += Number(-80);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, -90);
                  await this.glideToXY(this.sprite, 0.2, 200, 160);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  for (let i = 0, n = Number(4); i < n; i++) {
                    this.sprite.y += Number(-80);
                    this.switchCostume(this.sprite, "12");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  await this.glideToXY(this.sprite, 0.2, 200, 0);
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "7")) {
                  for (let i = 0, n = Number(6); i < n; i++) {
                    await this.glideTo(this.sprite, 0.3, "y2fz2");
                    for (let i = 0, n = Number(20); i < n; i++) {
                      this.switchCostume(this.sprite, "14");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "26");
                      await this.yieldFrame();
                    }
                    await this.yieldFrame();
                  }
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                }
                if ((this.var("dzs") === "8")) {
                  await this.sayForSecs(this.sprite, "吃我一刃", 0.98);
                  this.pointTowards(this.sprite, "y2fz2");
                  await this.wait(0.02);
                  this.switchCostume(this.sprite, "15");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "9")) {
                  for (let i = 0, n = Number(25); i < n; i++) {
                    this.switchCostume(this.sprite, "19");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "10")) {
                  this.switchCostume(this.sprite, "18");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  for (let i = 0, n = Number(36); i < n; i++) {
                    this.switchCostume(this.sprite, "17");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 10);
                    await this.yieldFrame();
                  }
                }
                if ((this.var("dzs") === "11")) {
                  for (let i = 0, n = Number(25); i < n; i++) {
                    this.sprite.y = Number(this.random(-160, 160));
                    this.pointTowards(this.sprite, "y2fz2");
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  this.sprite.y = Number(0);
                  this.pointInDirection(this.sprite, 90);
                  await this.wait(0.4);
                  for (let i = 0, n = Number(17); i < n; i++) {
                    this.sprite.x += Number(2);
                    await this.yieldFrame();
                  }
                  this.goTo(this.sprite, "y2fz2");
                  this.sprite.x += Number(100);
                  this.switchCostume(this.sprite, "11");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.wait(0.8);
                  this.goToXY(this.sprite, 200, 0);
                }
                if ((this.var("dzs") === "12")) {
                  for (let i = 0, n = Number(2); i < n; i++) {
                    this.switchCostume(this.sprite, "23");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  await this.wait(1);
                }
                await this.wait(1);
                await this.yieldFrame();
              }
              await this.glideToXY(this.sprite, 0.4, 200, 0);
              await this.wait(2.6);
            } else {
              for (let i = 0, n = Number(4); i < n; i++) {
                this.setVar("dzs", this.random(1, 10));
                if ((this.var("dzs") === "1")) {
                  for (let i = 0, n = Number(14); i < n; i++) {
                    this.switchCostume(this.sprite, "4");
                    this.pointTowards(this.sprite, "y2fz2");
                    this.turnRight(this.sprite, this.random(-15, 15));
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "2")) {
                  this.switchCostume(this.sprite, "3");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.glideToXY(this.sprite, 0.4, 0, 0);
                  for (let i = 0, n = Number(this.random(2, 4)); i < n; i++) {
                    this.pointInDirection(this.sprite, this.random(1, 360));
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    this.switchCostume(this.sprite, "21");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 45);
                    await this.wait(1);
                    await this.yieldFrame();
                  }
                  this.switchCostume(this.sprite, "16");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.pointInDirection(this.sprite, 90);
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                }
                if ((this.var("dzs") === "3")) {
                  this.turnRight(this.sprite, -36);
                  await this.wait(0.2);
                  for (let i = 0, n = Number(50); i < n; i++) {
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "5");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 36);
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "4")) {
                  for (let i = 0, n = Number(5); i < n; i++) {
                    for (let i = 0, n = Number(14); i < n; i++) {
                      this.switchCostume(this.sprite, "9");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "26");
                      await this.yieldFrame();
                    }
                    await this.wait(0.1);
                    await this.yieldFrame();
                  }
                }
                if ((this.var("dzs") === "5")) {
                  this.goToXY(this.sprite, 200, this.random(-160, 160));
                  this.pointInDirection(this.sprite, -90);
                  this.switchCostume(this.sprite, "20");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.goToXY(this.sprite, this.random(-200, 200), 160);
                  this.pointInDirection(this.sprite, 180);
                  this.switchCostume(this.sprite, "20");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.goToXY(this.sprite, 200, this.sensingOf("y position", "y2fz2"));
                  this.pointInDirection(this.sprite, -90);
                  this.switchCostume(this.sprite, "20");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.goToXY(this.sprite, this.sensingOf("x position", "y2fz2"), 160);
                  this.pointInDirection(this.sprite, 180);
                  this.switchCostume(this.sprite, "20");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.goToXY(this.sprite, 200, 0);
                  this.pointInDirection(this.sprite, 90);
                  await this.wait(2);
                  for (let i = 0, n = Number(10); i < n; i++) {
                    for (let i = 0, n = Number(5); i < n; i++) {
                      this.switchCostume(this.sprite, "2");
                      this.pointTowards(this.sprite, "y2fz2");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "26");
                      this.pointInDirection(this.sprite, 90);
                      await this.yieldFrame();
                    }
                    await this.wait(0.4);
                    await this.yieldFrame();
                  }
                }
                if ((this.var("dzs") === "6")) {
                  for (let i = 0, n = Number(14); i < n; i++) {
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.sprite.y = Number((-210 + (this.random(1, 6) * 60)));
                    this.switchCostume(this.sprite, "22");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.wait(0.8);
                    await this.yieldFrame();
                  }
                  this.sprite.y = Number(0);
                }
                if ((this.var("dzs") === "7")) {
                  await this.glideToXY(this.sprite, 0.1, -200, 140);
                  this.pointInDirection(this.sprite, 135);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.glideToXY(this.sprite, 0.1, 200, 140);
                  this.pointInDirection(this.sprite, -135);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.glideToXY(this.sprite, 0.1, -200, -140);
                  this.pointInDirection(this.sprite, 45);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.glideToXY(this.sprite, 0.1, 200, -140);
                  this.pointInDirection(this.sprite, -45);
                  this.switchCostume(this.sprite, "12");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.glideToXY(this.sprite, 0.1, 200, 0);
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "8")) {
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                  this.pointInDirection(this.sprite, 90);
                  for (let i = 0, n = Number(45); i < n; i++) {
                    this.switchCostume(this.sprite, "13");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.turnRight(this.sprite, 8);
                    await this.yieldFrame();
                  }
                  this.pointInDirection(this.sprite, 90);
                }
                if ((this.var("dzs") === "9")) {
                  for (let i = 0, n = Number(3); i < n; i++) {
                    await this.glideTo(this.sprite, 0.4, "_random_");
                    this.switchCostume(this.sprite, "16");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.wait(1);
                    await this.yieldFrame();
                  }
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                  await this.wait(1);
                }
                if ((this.var("dzs") === "10")) {
                  await this.glideToXY(this.sprite, 0.4, 0, 0);
                  this.switchCostume(this.sprite, "18");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.switchCostume(this.sprite, "25");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.pointInDirection(this.sprite, 30);
                  await this.wait(1);
                  for (let i = 0, n = Number(2); i < n; i++) {
                    for (let i = 0, n = Number(3); i < n; i++) {
                      await this.wait(0.5);
                      this.turnRight(this.sprite, 30);
                      this.switchCostume(this.sprite, "17");
                      this.createClone("_myself_");
                      this.switchCostume(this.sprite, "26");
                      await this.yieldFrame();
                    }
                    this.turnRight(this.sprite, 90);
                    await this.yieldFrame();
                  }
                  this.sprite.x += Number(-15);
                  for (let i = 0, n = Number(2); i < n; i++) {
                    this.switchCostume(this.sprite, "19");
                    this.sprite.y += Number(-50);
                    this.pointInDirection(this.sprite, 180);
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    this.sprite.y += Number(50);
                    this.sprite.x += Number(30);
                    this.pointInDirection(this.sprite, 90);
                    await this.yieldFrame();
                  }
                  this.sprite.x += Number(-45);
                  this.pointInDirection(this.sprite, 90);
                  await this.glideToXY(this.sprite, 0.4, 200, 0);
                  await this.wait(2);
                }
                await this.yieldFrame();
              }
              await this.glideToXY(this.sprite, 0.4, 200, 0);
              await this.wait(2.6);
            }
            await this.wait(1);
          } else {
            for (let i = 0, n = Number(4); i < n; i++) {
              this.setVar("dzs", this.random(1, 8));
              if ((this.var("dzs") === "1")) {
                this.pointTowards(this.sprite, "y2fz2");
                await this.wait(0.2);
                for (let i = 0, n = Number(5); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
              }
              if ((this.var("dzs") === "2")) {
                await this.glideTo(this.sprite, 0.4, "y2fz2");
                this.sprite.x += Number(-100);
                await this.wait(0.4);
                this.pointTowards(this.sprite, "y2fz2");
                for (let i = 0, n = Number(2); i < n; i++) {
                  for (let i = 0, n = Number(5); i < n; i++) {
                    this.switchCostume(this.sprite, "2");
                    this.createClone("_myself_");
                    this.switchCostume(this.sprite, "26");
                    await this.yieldFrame();
                  }
                  await this.wait(0.2);
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
                await this.glideToXY(this.sprite, 0.4, 200, 0);
              }
              if ((this.var("dzs") === "3")) {
                this.turnRight(this.sprite, -36);
                await this.wait(0.2);
                for (let i = 0, n = Number(50); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.turnRight(this.sprite, 36);
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
              }
              if ((this.var("dzs") === "4")) {
                for (let i = 0, n = Number(this.random(0, 4)); i < n; i++) {
                  for (let i = 0, n = Number(6); i < n; i++) {
                    this.sprite.x += Number(5);
                    await this.yieldFrame();
                  }
                  this.pointTowards(this.sprite, "y2fz2");
                  for (let i = 0, n = Number(5); i < n; i++) {
                    this.moveSteps(this.sprite, 40);
                    await this.yieldFrame();
                  }
                  await this.glideToXY(this.sprite, 0.2, 200, 0);
                  await this.yieldFrame();
                }
                for (let i = 0, n = Number(6); i < n; i++) {
                  this.sprite.x += Number(5);
                  await this.yieldFrame();
                }
                this.pointTowards(this.sprite, "y2fz2");
                await this.glideTo(this.sprite, 0.4, "y2fz2");
                this.switchCostume(this.sprite, "3");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "26");
                this.moveSteps(this.sprite, 100);
                this.turnRight(this.sprite, 180);
                for (let i = 0, n = Number(5); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
                await this.glideToXY(this.sprite, 0.4, 200, 0);
              }
              if ((this.var("dzs") === "5")) {
                await this.glideToXY(this.sprite, 0.4, 0, 0);
                for (let i = 0, n = Number(250); i < n; i++) {
                  this.pointTowards(this.sprite, "y2fz2");
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
                await this.glideToXY(this.sprite, 0.4, 200, 0);
              }
              if ((this.var("dzs") === "6")) {
                for (let i = 0, n = Number(10); i < n; i++) {
                  this.turnRight(this.sprite, 36);
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
                for (let i = 0, n = Number(60); i < n; i++) {
                  this.switchCostume(this.sprite, "8");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  this.turnRight(this.sprite, 54);
                  await this.yieldFrame();
                }
                this.pointTowards(this.sprite, "y2fz2");
                this.switchCostume(this.sprite, "8");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "26");
                this.pointInDirection(this.sprite, 90);
              }
              if ((this.var("dzs") === "7")) {
                this.pointInDirection(this.sprite, -90);
                for (let i = 0, n = Number(25); i < n; i++) {
                  this.switchCostume(this.sprite, "17");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.yieldFrame();
                }
                this.pointInDirection(this.sprite, 90);
              }
              if ((this.var("dzs") === "8")) {
                this.switchCostume(this.sprite, "18");
                this.createClone("_myself_");
                for (let i = 0, n = Number(6); i < n; i++) {
                  this.switchCostume(this.sprite, "19");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.yieldFrame();
                }
              }
              await this.wait(1);
              await this.yieldFrame();
            }
            await this.wait(3);
          }
        } else {
          for (let i = 0, n = Number(4); i < n; i++) {
            this.setVar("dzs", this.random(1, 6));
            if ((this.var("dzs") === "1")) {
              this.pointTowards(this.sprite, "y2fz2");
              await this.wait(0.4);
              for (let i = 0, n = Number(5); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "26");
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
            }
            if ((this.var("dzs") === "2")) {
              await this.glideTo(this.sprite, 0.6, "y2fz2");
              this.sprite.x += Number(-100);
              await this.wait(0.6);
              this.pointTowards(this.sprite, "y2fz2");
              for (let i = 0, n = Number(2); i < n; i++) {
                for (let i = 0, n = Number(5); i < n; i++) {
                  this.switchCostume(this.sprite, "2");
                  this.createClone("_myself_");
                  this.switchCostume(this.sprite, "26");
                  await this.yieldFrame();
                }
                await this.wait(0.4);
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
              await this.glideToXY(this.sprite, 0.6, 200, 0);
            }
            if ((this.var("dzs") === "3")) {
              this.turnRight(this.sprite, -36);
              await this.wait(0.2);
              for (let i = 0, n = Number(50); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "26");
                this.turnRight(this.sprite, 36);
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
            }
            if ((this.var("dzs") === "4")) {
              for (let i = 0, n = Number(6); i < n; i++) {
                this.sprite.x += Number(5);
                await this.yieldFrame();
              }
              this.pointTowards(this.sprite, "y2fz2");
              await this.glideTo(this.sprite, 0.6, "y2fz2");
              this.switchCostume(this.sprite, "3");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "26");
              this.moveSteps(this.sprite, 100);
              this.turnRight(this.sprite, 180);
              for (let i = 0, n = Number(5); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "26");
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
              await this.glideToXY(this.sprite, 0.6, 200, 0);
            }
            if ((this.var("dzs") === "5")) {
              this.turnRight(this.sprite, -36);
              await this.wait(0.2);
              this.pointInDirection(this.sprite, 90);
              for (let i = 0, n = Number(60); i < n; i++) {
                this.switchCostume(this.sprite, "2");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "26");
                this.turnRight(this.sprite, 54);
                await this.yieldFrame();
              }
              this.pointTowards(this.sprite, "y2fz2");
              this.switchCostume(this.sprite, "2");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "26");
              this.pointInDirection(this.sprite, 90);
            }
            if ((this.var("dzs") === "6")) {
              for (let i = 0, n = Number(6); i < n; i++) {
                this.sprite.x += Number(5);
                await this.yieldFrame();
              }
              this.pointTowards(this.sprite, "y2fz2");
              await this.glideTo(this.sprite, 0.6, "y2fz2");
              this.switchCostume(this.sprite, "3");
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "26");
              for (let i = 0, n = Number(5); i < n; i++) {
                this.moveSteps(this.sprite, 20);
                await this.yieldFrame();
              }
              for (let i = 0, n = Number(5); i < n; i++) {
                this.turnRight(this.sprite, 60);
                await this.glideTo(this.sprite, 0.3, "y2fz2");
                this.switchCostume(this.sprite, "3");
                this.createClone("_myself_");
                this.switchCostume(this.sprite, "26");
                for (let i = 0, n = Number(5); i < n; i++) {
                  this.moveSteps(this.sprite, 20);
                  await this.yieldFrame();
                }
                await this.yieldFrame();
              }
              this.pointInDirection(this.sprite, 90);
              await this.glideToXY(this.sprite, 0.6, 200, 0);
            }
            await this.wait(1.2);
            await this.yieldFrame();
          }
          await this.wait(4);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_388(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: -:Wybs;HYY7$J(nrFKc/, opcode: event_whenbackdropswitchesto
    if ((this.costumeValue(this.sprite, "number") === "26")) {
      this.pointInDirection(this.sprite, 90);
    }
  }

  async d2_whenStartAsClone_389(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: =)jR1LC-NGl^HO(*Cu0p, opcode: control_start_as_clone
    if ((this.backdropValue("number") === "2")) {
      if ((this.costumeValue(this.sprite, "number") === "26")) {
        for (let i = 0, n = Number(Math.round(Number((this.var("d满血") / 5)))); i < n; i++) {
          while (!(this.touching(this.sprite, "y2"))) await this.yieldFrame();
          this.changeVar("dbbgjcs", 1);
          await this.wait(0.01);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
    }
  }

  async d2_whenBroadcast_xlh_390(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: RJEX~k~UK({YxRQsDQ*,, opcode: event_whenbroadcastreceived
    this.setVar("ysftg", "0");
  }

  async d2_whenBroadcast_xyx_391(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XW}^Ue!mw]l4y~0W2q5`, opcode: event_whenbroadcastreceived
    this.setVar("ysftg", "0");
  }

  async d2_whenBroadcast_cg_392(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: RaZr?P=8}xFj01NAh6S-, opcode: event_whenbroadcastreceived
    if (((this.var("新夜怪主人") === "王队长") && (this.var("tzms") === "11"))) {
      this.setVar("ysftg", "1");
    }
  }

  async d2_whenBackdrop_2_393(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: rAbkm^5qG}uM}8|:feN], opcode: event_whenbackdropswitchesto
    this.setVar("tzms9zhzx", "1");
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        if (((this.backdropValue("number") === "2") && (this.var("tzms") === "9"))) {
          if (this.keyPressed("1")) {
            this.answer = await this.ask("召唤dz");
            this.setVar("tzms9zhzx", this.answer);
            this.answer = await this.ask("召唤数量");
            await this.wait(1);
            for (let i = 0, n = Number(this.answer); i < n; i++) {
              this.pointTowards(this.sprite, "y2fz2");
              this.switchCostume(this.sprite, this.var("tzms9zhzx"));
              this.createClone("_myself_");
              this.switchCostume(this.sprite, "1");
              await this.yieldFrame();
            }
            this.setVar("tzms9zhzx", "1");
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_394(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: gRpNh;Uhb?|/BRu5zME^, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((this.costumeValue(this.sprite, "number") === "1") && (this.var("tzms") === "9"))) {
        this.pointTowards(this.sprite, "y2fz2");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_395(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: sNq]9~dn*lG5,wi-AOl+, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_396(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: oLE$;pOwWjW3gkRZl^SZ, opcode: control_start_as_clone
    while (true) {
      if (((this.backdropValue("number") === "2") && (this.var("tzms") === "9"))) {
        if (this.keyPressed("2")) {
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_397(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: FR{y,$4769`.UgQ~ahZ@, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if (this.touching(this.sprite, "y2")) {
          this.playSound(this.sprite, "dbjs");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_3_398(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: gjlHFFXUx.2opFo{4m!a, opcode: event_whenbackdropswitchesto
    this.setVar("tzms", "1");
    this.setVar("dfz", "0");
    this.setVar("ysfyxzxygxlcnsfyz4", "0");
    for (let i = 0, n = Number(25); i < n; i++) {
      this.goTo(this.sprite, "_random_");
      this.switchCostume(this.sprite, "27");
      this.createClone("_myself_");
      this.switchCostume(this.sprite, "1");
      this.changeVar("dfz", 1);
      await this.yieldFrame();
    }
    for (let i = 0, n = Number(5); i < n; i++) {
      this.goTo(this.sprite, "_random_");
      this.switchCostume(this.sprite, "28");
      this.createClone("_myself_");
      this.switchCostume(this.sprite, "1");
      this.changeVar("dfz", 10);
      await this.yieldFrame();
    }
    while (!((this.var("dfz") < "0.01"))) await this.yieldFrame();
    this.setVar("ysfyxzxygxlcnsfyz4", "1");
    this.setVar("y体力", "10");
    for (let i = 0, n = Number(100); i < n; i++) {
      this.changeVar("dfz", 1);
      await this.yieldFrame();
    }
    for (let i = 0, n = Number(100); i < n; i++) {
      await this.wait(0.2);
      this.goToXY(this.sprite, 200, this.random(-160, 160));
      this.switchCostume(this.sprite, "29");
      this.createClone("_myself_");
      this.switchCostume(this.sprite, "1");
      this.changeVar("dfz", -1);
      await this.yieldFrame();
    }
    while (!((this.var("dfz") < "0.01"))) await this.yieldFrame();
    this.setVar("ysfyxzxygxlcnsfyz4", "0");
    this.setVar("y体力", this.var("ycstl"));
    for (let i = 0, n = Number(100); i < n; i++) {
      this.changeVar("dfz", 1);
      await this.yieldFrame();
    }
    this.switchCostume(this.sprite, "26");
    this.createClone("_myself_");
    this.switchCostume(this.sprite, "1");
    while (!((this.var("dfz") < "0.01"))) await this.yieldFrame();
    this.changeVar("y等级", 0.05);
    this.switchBackdrop("1");
    this.stopAllSounds();
    this.playSound(this.sprite, "cg");
  }

  async d2_whenStartAsClone_399(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: DMgJcjPA8Vf7nhkk$2%e, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "27")) {
        while (!(this.touching(this.sprite, "y2"))) await this.yieldFrame();
        this.playSound(this.sprite, "dbjs");
        this.changeVar("dfz", -1);
        await this.wait(0.01);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_400(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !528|Do~}F5kmSq~U?xM, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "27")) {
        this.pointInDirection(this.sprite, this.random(1, 360));
        for (let i = 0, n = Number(50); i < n; i++) {
          this.moveSteps(this.sprite, 2);
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_3_401(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: VLKxO?@tz4Q/QfNqaol^, opcode: event_whenbackdropswitchesto
    this.deleteThisClone(this.sprite); return;
  }

  async d2_whenStartAsClone_402(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: %3K}3Y|2Z5x*)Jg.*SiC, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "27")) {
        await this.wait(25);
        this.switchCostume(this.sprite, "28");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "27");
        this.changeVar("dfz", 9);
        this.playSound(this.sprite, "sb");
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_403(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: :JI@ZQ3J(+D]TzwLio]F, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "28")) {
        await this.wait(25);
        this.switchCostume(this.sprite, "27");
        this.createClone("_myself_");
        this.switchCostume(this.sprite, "28");
        this.changeVar("dfz", 1);
        this.playSound(this.sprite, "zh");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_404(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: cR]IU1Ud4`rxqoDr|G,[, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "28")) {
        for (let i = 0, n = Number(25); i < n; i++) {
          while (!(this.touching(this.sprite, "y2"))) await this.yieldFrame();
          this.playSound(this.sprite, "dbjs");
          this.changeVar("dfz", -0.4);
          await this.wait(0.01);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_405(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 5Q@!yVFv5k`uvGM;Xkn=, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") === "29")) {
      await this.wait(1);
    }
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "29")) {
        this.sprite.x += Number(-25);
        if (this.touching(this.sprite, "_edge_")) {
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_406(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: VtrEAWvSzlnbw]kh0Z1D, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "29")) {
        while (!(this.touching(this.sprite, "y2"))) await this.yieldFrame();
        this.playSound(this.sprite, "dbjs");
        await this.wait(0.01);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_407(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ?l+r,?)q=xQq$:W5)k8J, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "3")) {
        if ((this.costumeValue(this.sprite, "number") === "26")) {
          for (let i = 0, n = Number(Math.round(Number((this.var("d满血") / 5)))); i < n; i++) {
            while (!(this.touching(this.sprite, "y2"))) await this.yieldFrame();
            this.playSound(this.sprite, "dbjs");
            this.changeVar("dfz", (0 - (100 / Math.round(Number((this.var("d满血") / 5))))));
            await this.wait(0.01);
            await this.yieldFrame();
          }
          this.deleteThisClone(this.sprite); return;
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_408(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 19m,AAY4u#b,Fw7iKFV4, opcode: control_start_as_clone
    this.turnRight(this.sprite, this.random(-1, 1));
  }

  async d2_whenBackdrop_2_409(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: alf6s?$:d1u{Va]i833J, opcode: event_whenbackdropswitchesto
    this.setVar("y连击值", "0");
    while (true) {
      if ((this.touching(this.sprite, "y2") || this.touching(this.sprite, "y2z2"))) {
        this.changeVar("y连击值", 10);
      } else {
        this.changeVar("y连击值", -1);
      }
      if ((this.var("y连击值") < "0")) {
        this.setVar("y连击值", "0");
      }
      if ((this.var("y连击值") > "25")) {
        this.setVar("y连击值", "25");
      }
      if ((this.var("y连击值") < "1")) {
        this.setVar("dtl3", this.var("d体力"));
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_410(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: `B.W9uBSKoOcNyL34,F#, opcode: event_whenbackdropswitchesto
    this.setVar("y连击值2", "0");
    while (true) {
      if ((this.touching(this.sprite, "y2") || this.touching(this.sprite, "y2z2"))) {
        this.changeVar("y连击值2", 2);
      } else {
        this.changeVar("y连击值2", -1);
      }
      if ((this.var("y连击值2") < "0")) {
        this.setVar("y连击值2", "0");
      }
      if ((this.var("y连击值2") > "2")) {
        this.setVar("y连击值2", "2");
      }
      if ((this.var("y连击值2") < "1")) {
        this.setVar("dtl4", this.var("d体力"));
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_411(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: {4b+TUTn[qQ(0![yyYbt, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.var("y法术·定") === "1")) {
          this.playSound(this.sprite, "d定");
          if ((this.costumeValue(this.sprite, "number") === "1")) {
            this.setVar("d定x", this.sprite.x);
            this.setVar("d定y", this.sprite.y);
          }
          for (let i = 0, n = Number(100); i < n; i++) {
            this.goToXY(this.sprite, this.var("d定x"), this.var("d定y"));
            this.pointInDirection(this.sprite, 90);
            await this.yieldFrame();
          }
          if ((this.var("y等级") > (this.var("y满级") - 6.01))) {
            for (let i = 0, n = Number(50); i < n; i++) {
              this.goToXY(this.sprite, this.var("d定x"), this.var("d定y"));
              this.pointInDirection(this.sprite, 90);
              await this.yieldFrame();
            }
          }
          this.playSound(this.sprite, "pd");
          this.setVar("y法术·定", "0");
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_412(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ~d=@ex]ukE)bf+uOr_E*, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "y2fz4")) {
        this.changeVar("d体力", (0 - ((this.var("战斗时好友数") + 1) / 100)));
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_413(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: FdD]$sFF0XIN;kGKj1E), opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") < "25")) {
        if ((this.touching(this.sprite, "y2fz5") && (this.var("y法术·吸") === "1"))) {
          if ((this.var("y等级") === this.var("y满级"))) {
            this.changeVar("y体力", 0.1);
          }
          if ((this.var("y蓄力3") < "100")) {
            this.changeVar("y蓄力3", 1);
            this.setSoundEffect(this.sprite, "PITCH", this.var("y蓄力3"));
            this.playSound(this.sprite, "yx");
            this.deleteThisClone(this.sprite); return;
          } else {
            this.changeVar("y蓄力", this.var("y蓄力速度"));
            this.setSoundEffect(this.sprite, "PITCH", this.var("y蓄力3"));
            this.playSound(this.sprite, "yx");
            this.deleteThisClone(this.sprite); return;
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBroadcast_能量结算_414(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ++t$CE(WzyE.YvST4riP, opcode: event_whenbroadcastreceived
    this.setSoundEffect(this.sprite, "PITCH", 0);
  }

  async d2_whenBackdrop_2_415(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2(jrP/^8Ag_%#jbm0wgl, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "y2fz6")) {
        await this.wait(0.01);
        if ((this.sprite.x > this.sensingOf("x position", "y2"))) {
          this.sprite.x += Number(10);
        }
        if ((this.sensingOf("x position", "y2") > this.sprite.x)) {
          this.sprite.x += Number(-10);
        }
        if ((this.sprite.y > this.sensingOf("y position", "y2"))) {
          this.sprite.y += Number(10);
        }
        if ((this.sensingOf("y position", "y2") > this.sprite.y)) {
          this.sprite.y += Number(-10);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_416(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;#z/l^Ym*(R`jh(GYAQ_, opcode: event_whenbackdropswitchesto
    this.setVar("d火", "0");
    while (true) {
      for (let i = 0, n = Number(25); i < n; i++) {
        while (!(this.touching(this.sprite, "y2fz6"))) await this.yieldFrame();
        await this.yieldFrame();
      }
      this.setVar("d火", "1");
      for (let i = 0, n = Number(6); i < n; i++) {
        for (let i = 0, n = Number(2); i < n; i++) {
          if ((this.var("d火") === "1")) {
            this.changeVar("d体力", (0 - this.var("ygj")));
            this.playSound(this.sprite, "d火2");
            await this.wait(0.1);
          }
          if ((this.var("d火") === "1")) {
            this.changeVar("d体力", (0 - this.var("ygj")));
            this.playSound(this.sprite, "d火2");
            await this.wait(0.25);
          }
          await this.yieldFrame();
        }
        for (let i = 0, n = Number(4); i < n; i++) {
          if ((this.var("d火") === "1")) {
            this.changeVar("d体力", (0 - this.var("ygj")));
            this.playSound(this.sprite, "d火2");
            await this.wait(0.1);
          }
          await this.yieldFrame();
        }
        if ((this.var("d火") === "1")) {
          this.changeVar("d体力", (0 - this.var("ygj")));
          this.playSound(this.sprite, "d火2");
          await this.wait(0.25);
        }
        await this.yieldFrame();
      }
      this.setVar("d火", "0");
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_2_417(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ,]x|#BhLF/yE4:77B/l%, opcode: event_whenbackdropswitchesto
    while (true) {
      if (this.touching(this.sprite, "y2fz6")) {
        this.changeVar("d体力", (0 - this.var("ygj")));
        this.playSound(this.sprite, "d火");
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_418(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: #X*V?OVKSi/!ze@-oG$`, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "30")) {
        for (let i = 0, n = Number(10); i < n; i++) {
          this.moveSteps(this.sprite, 2);
          await this.yieldFrame();
        }
        for (let i = 0, n = Number(50); i < n; i++) {
          this.changeEffect(this.sprite, "GHOST", 2);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async d2_whenStartAsClone_419(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: vKr^Nb05WBx$jwte:{Vx, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") < "25")) {
        if ((this.costumeValue(this.sprite, "number") === "23")) {
          for (let i = 0, n = Number(25); i < n; i++) {
            while (!(this.touching(this.sprite, "y2fz6"))) await this.yieldFrame();
            await this.yieldFrame();
          }
          this.deleteThisClone(this.sprite); return;
        } else {
          if ((!(((this.costumeValue(this.sprite, "number") === "7") || (this.costumeValue(this.sprite, "number") === "12")) || ((this.costumeValue(this.sprite, "number") === "18") || (this.costumeValue(this.sprite, "number") === "23"))))) {
            for (let i = 0, n = Number(5); i < n; i++) {
              while (!(this.touching(this.sprite, "y2fz6"))) await this.yieldFrame();
              await this.yieldFrame();
            }
            this.switchCostume(this.sprite, "30");
            this.createClone("_myself_");
            this.deleteThisClone(this.sprite); return;
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async d2_whenBackdrop_1_420(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7qA/F9ZH(pr:j,8[7=:d, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
    return; // stop "other scripts in sprite"
  }

  async d2_whenBackdrop_2_421(): Promise<void> {
    this.sprite = this.sprites["d2"] ?? { name: "d2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M%Qc]cLf:Sw%@7UH2{~, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    this.setEffect(this.sprite, "GHOST", 0);
    this.setVar("dzs", "0");
  }

  async d2y_whenBroadcast_dys_422(): Promise<void> {
    this.sprite = this.sprites["d2y"] ?? { name: "d2y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Ib8NT[tO)ZF!2IvW-Kz-, opcode: event_whenbroadcastreceived
    this.sprite.visible = false;
    await this.wait(20);
    this.sprite.visible = true;
  }

  async d2y_whenBackdrop_2_423(): Promise<void> {
    this.sprite = this.sprites["d2y"] ?? { name: "d2y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: n=FLo.;9I;_,C;YssWu|, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    while (true) {
      this.goTo(this.sprite, "d2");
      this.setEffect(this.sprite, "GHOST", (100 - this.var("yld")));
      await this.yieldFrame();
    }
  }

  async d2y_whenBackdrop_1_424(): Promise<void> {
    this.sprite = this.sprites["d2y"] ?? { name: "d2y", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hH%jG0cCOr3G^tHnIM0L, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.sprite.size = Number(100);
  }

  async d2fz_whenBackdrop_1_425(): Promise<void> {
    this.sprite = this.sprites["d2fz"] ?? { name: "d2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7qA/F9ZH(pr:j,8[7=:d, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 100, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async d2fz_whenBackdrop_2_426(): Promise<void> {
    this.sprite = this.sprites["d2fz"] ?? { name: "d2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M%Qc]cLf:Sw%@7UH2{~, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    while (true) {
      this.goTo(this.sprite, "d2");
      if ((!(this.var("tzms") === "9"))) {
        if ((this.touching(this.sprite, "y2") || this.touching(this.sprite, "y2z2"))) {
          await this.wait(1);
        }
      }
      await this.yieldFrame();
    }
  }

  async d2fz2_whenBackdrop_1_427(): Promise<void> {
    this.sprite = this.sprites["d2fz2"] ?? { name: "d2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7qA/F9ZH(pr:j,8[7=:d, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 100, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async d2fz2_whenBackdrop_2_428(): Promise<void> {
    this.sprite = this.sprites["d2fz2"] ?? { name: "d2fz2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M%Qc]cLf:Sw%@7UH2{~, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      await this.glideToXY(this.sprite, 5.5, 220, 160);
      await this.glideToXY(this.sprite, 4.5, 220, -160);
      await this.glideToXY(this.sprite, 5.5, -220, -160);
      await this.glideToXY(this.sprite, 4.5, -220, 160);
      await this.yieldFrame();
    }
  }

  async d2fz3_whenBackdrop_1_429(): Promise<void> {
    this.sprite = this.sprites["d2fz3"] ?? { name: "d2fz3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Q:l;95S/oORl%4kk_xG}, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.goToLayer(this.sprite, "front");
  }

  async d2fz3_whenBackdrop_2_430(): Promise<void> {
    this.sprite = this.sprites["d2fz3"] ?? { name: "d2fz3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4@kGGm57;?9tC*lNdGDD, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    this.setEffect(this.sprite, "GHOST", 80);
    this.setVar("d火", "0");
    if ((this.var("rwzdqd") > "3")) {
      while (!((this.var("d火") === "1"))) await this.yieldFrame();
      this.sprite.visible = true;
      this.playSound(this.sprite, "1");
      this.setVar("d火", "0");
      await this.wait(5);
      this.sprite.visible = false;
    }
  }

  async d定fz_whenBackdrop_1_431(): Promise<void> {
    this.sprite = this.sprites["d定fz"] ?? { name: "d定fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7qA/F9ZH(pr:j,8[7=:d, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 100, 0);
    this.pointInDirection(this.sprite, 90);
  }

  async d定fz_whenBackdrop_2_432(): Promise<void> {
    this.sprite = this.sprites["d定fz"] ?? { name: "d定fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0M%Qc]cLf:Sw%@7UH2{~, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      this.goTo(this.sprite, "d2");
      if ((this.var("y法术·定") === "1")) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async sbycg_whenBroadcast_cg_433(): Promise<void> {
    this.sprite = this.sprites["sbycg"] ?? { name: "sbycg", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: w5E:NLnDYo_9TqcR$~O5, opcode: event_whenbroadcastreceived
    if (((this.var("tzms") === "11") && (this.var("新夜怪主人") === "王队长"))) {
      this.sprite.visible = true;
      this.switchCostume(this.sprite, "3");
      this.stopAllSounds();
      this.playSound(this.sprite, "cg");
      await this.wait(3);
      this.sprite.visible = false;
    } else {
      this.sprite.visible = true;
      this.switchCostume(this.sprite, "2");
      this.stopAllSounds();
      this.playSound(this.sprite, "cg");
      await this.wait(3);
      this.sprite.visible = false;
    }
  }

  async sbycg_whenBroadcast_sb_434(): Promise<void> {
    this.sprite = this.sprites["sbycg"] ?? { name: "sbycg", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ejh886l(tZaRwdz:I(WJ, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    this.switchCostume(this.sprite, "1");
    this.stopAllSounds();
    this.playSound(this.sprite, "sb");
    await this.wait(3);
    this.sprite.visible = false;
  }

  async sbycg_whenBroadcast_xyx_435(): Promise<void> {
    this.sprite = this.sprites["sbycg"] ?? { name: "sbycg", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: UGa4,c?bV!$}O~,uj+=k, opcode: event_whenbroadcastreceived
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 100);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
  }

  async sbycg_whenGreenFlag_436(): Promise<void> {
    this.sprite = this.sprites["sbycg"] ?? { name: "sbycg", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = false;
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async xyx_whenGreenFlag_437(): Promise<void> {
    this.sprite = this.sprites["xyx"] ?? { name: "xyx", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: [kGd/:b_vbM4UTe#Vk!v, opcode: event_whenflagclicked
    while (true) {
      this.sprite.visible = true;
      this.goToXY(this.sprite, -200, -160);
      this.pointInDirection(this.sprite, 90);
      this.switchCostume(this.sprite, "1");
      while (!((this.mouseDown() && this.touching(this.sprite, "_mouse_")))) await this.yieldFrame();
      this.switchCostume(this.sprite, "2");
      this.goToXY(this.sprite, 200, -160);
      while (!((this.mouseDown() && this.touching(this.sprite, "_mouse_")))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async xyx_whenBroadcast_xyx_438(): Promise<void> {
    this.sprite = this.sprites["xyx"] ?? { name: "xyx", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Suid%tg/3ATxp(JHg8B@, opcode: event_whenbroadcastreceived
    this.setVar("昵称", "");
    this.setVar("y金币", "0");
    this.setVar("y等级", "0");
    this.setVar("轮回数", "1");
    this.setVar("y精力", "100");
    this.setVar("y饱食度", "100");
    this.setVar("y水分", "100");
    this.setVar("y面包数量", "0");
    this.setVar("y水瓶数", "0");
    this.setVar("y烧鸡数量", "0");
    this.setVar("y子弹持有数", "10000");
    this.setVar("y回血药水数量", "0");
    this.setVar("y无敌药水数量", "0");
    this.setVar("y解毒药水数量", "0");
    this.setVar("y大力丹数量", "0");
    this.setVar("y提神丹数量", "0");
    this.setVar("y蓄力丹数量", "0");
    this.setVar("背包等级", "0");
    this.setVar("y最高气力", "100");
    this.setVar("y最高精力", "100");
    this.setVar("y蓄力速度", "0.6");
    this.setVar("最高分", "0");
    this.setVar("ycstl", "25");
    this.setVar("yhdfy", "0");
    this.setVar("ygjsd", "0.4");
    this.setVar("yzd", "0");
    this.setVar("yz持攻豆", "0");
    this.setVar("yz金光薇", "0");
    this.setVar("yz毁灭毒针", "0");
    this.setVar("yz炫夜护盾", "0");
    this.setVar("yz轰炸匕首", "0");
    this.setVar("yz月勾环", "0");
    this.setVar("yz妍妍三叉戟", "0");
    this.setVar("yz尖刺匕首", "0");
    this.setVar("yz三叉戟持攻豆", "0");
    this.setVar("yz炫夜短震荡波", "0");
    this.setVar("y是否击败1级新夜怪", "0");
    this.setVar("y是否击败2级新夜怪", "0");
    this.setVar("y是否击败3级新夜怪", "0");
    this.setVar("y是否击败4级新夜怪", "0");
    this.setVar("y是否击败5级新夜怪", "0");
    this.list("好友单").length = 0;
    this.list("签到表").length = 0;
    this.list("战斗烦恼名单").length = 0;
    this.list("邀请战斗名单").length = 0;
    this.list("睡眠名单").length = 0;
    this.list("y拥有的5大招式").length = 0;
  }

  async xlh_whenBackdrop_1_439(): Promise<void> {
    this.sprite = this.sprites["xlh"] ?? { name: "xlh", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ^Z#nKJ0P+d~xOTe`~?p|, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((this.var("ysftg") === "1") && ((this.var("y等级") === this.var("y满级")) && ((this.var("ycstl") > "249") && (this.var("ygjsd") < "0.3001"))))) {
        this.sprite.visible = true;
        this.goToXY(this.sprite, -140, -160);
        this.pointInDirection(this.sprite, 90);
        this.switchCostume(this.sprite, "1");
        while (!((this.mouseDown() && this.touching(this.sprite, "_mouse_")))) await this.yieldFrame();
        this.switchCostume(this.sprite, "2");
        this.goToXY(this.sprite, 200, -160);
        while (!((this.mouseDown() && this.touching(this.sprite, "_mouse_")))) await this.yieldFrame();
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async xlh_whenBackdrop_1_440(): Promise<void> {
    this.sprite = this.sprites["xlh"] ?? { name: "xlh", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: b4$,YJx3C9!G.2V]pv=7, opcode: event_whenbackdropswitchesto
    while (true) {
      this.setVar("y满级", (36 + (this.var("轮回数") * 12)));
      await this.yieldFrame();
    }
  }

  async yrxnfqtz_whenBroadcast_yrfqtz_441(): Promise<void> {
    this.sprite = this.sprites["yrxnfqtz"] ?? { name: "yrxnfqtz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: $@sW8+sFJ.FSRoNBkWKN, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    this.playSound(this.sprite, "yrxnfqtz");
    await this.wait(3);
    this.sprite.visible = false;
  }

  async yrxnfqtz_whenGreenFlag_442(): Promise<void> {
    this.sprite = this.sprites["yrxnfqtz"] ?? { name: "yrxnfqtz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 100);
  }

  async shuijfz_whenBroadcast_ysj_443(): Promise<void> {
    this.sprite = this.sprites["shuijfz"] ?? { name: "shuijfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: eNX5E29WEoh6wl/8q.BD, opcode: event_whenbroadcastreceived
    this.sprite.visible = true;
    this.setVar("ysfsj", "1");
    this.setEffect(this.sprite, "GHOST", 100);
    for (let i = 0, n = Number(100); i < n; i++) {
      this.changeEffect(this.sprite, "GHOST", -1);
      await this.yieldFrame();
    }
    for (let i = 0, n = Number(3); i < n; i++) {
      this.playSound(this.sprite, "1");
      await this.wait(3);
      await this.yieldFrame();
    }
    if ((this.random(1, 2) === "1")) {
      this.setVar("sj", "140");
      this.setVar("时", "7");
      this.setVar("分", "0");
      this.changeVar("y精力", (this.var("y最高精力") * 0.75));
    } else {
      this.setVar("sj", "180");
      this.setVar("时", "9");
      this.setVar("分", "0");
      this.setVar("y精力", this.var("y最高精力"));
    }
    for (let i = 0, n = Number(2); i < n; i++) {
      this.switchCostume(this.sprite, "2");
      await this.wait(0.2);
      this.switchCostume(this.sprite, "1");
      await this.wait(1);
      await this.yieldFrame();
    }
    this.switchCostume(this.sprite, "2");
    await this.wait(0.2);
    this.switchCostume(this.sprite, "1");
    this.sprite.visible = false;
    this.setVar("ysfsj", "0");
  }

  async shuijfz_whenGreenFlag_444(): Promise<void> {
    this.sprite = this.sprites["shuijfz"] ?? { name: "shuijfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +fQtD(mzq+#ZE]a+*ehs, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 0);
    this.switchCostume(this.sprite, "1");
    this.goToLayer(this.sprite, "front");
    this.setVar("ysfsj", "0");
  }

  async bj3_whenBackdrop_4_445(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: s9]pchT9v.Ez7Z/jg(?}, opcode: event_whenbackdropswitchesto
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.backdropValue("number") === "4")) {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async bj3_whenGreenFlag_446(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: D/:_$BpMNDs3,.*}Xus., opcode: event_whenflagclicked
    while (true) {
      await this.wait(1);
      this.changeVar("sj", 1);
      this.changeVar("分", 3);
      if ((this.var("sj") > "479")) {
        this.setVar("sj", "0");
      }
      if ((this.var("分") > "59")) {
        this.setVar("分", "0");
        this.changeVar("时", 1);
      }
      await this.yieldFrame();
    }
  }

  async bj3_whenBroadcast_xyx_447(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: W]b149BU]Kr~%|#dvZuC, opcode: event_whenbroadcastreceived
    this.setVar("sj", "0");
    this.setVar("分", "0");
    this.setVar("时", "0");
    this.setVar("时间", "0");
  }

  async bj3_whenGreenFlag_448(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: SXj)9TEtHx#s!eFbA(Pp, opcode: event_whenflagclicked
    while (true) {
      if (((this.var("sj") > "0") && (this.var("sj") < "240"))) {
        this.setVar("yld", ((this.var("sj") * 0.4) + 4));
      }
      if (((this.var("sj") > "240") && (this.var("sj") < "480"))) {
        this.setVar("yld", (((480 - this.var("sj")) * 0.4) + 4));
      }
      this.setEffect(this.sprite, "GHOST", this.var("yld"));
      await this.yieldFrame();
    }
  }

  async bj3_whenGreenFlag_449(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hxtm|ZQ/0NAWxcr1Kgy^, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("时") > "23")) {
        this.setVar("时", "0");
      }
      if ((this.var("时") < "10")) {
        if ((this.var("分") < "10")) {
          this.setVar("时间", String(String("0") + String(this.var("时"))) + String(String(":") + String(String("0") + String(this.var("分")))));
        } else {
          this.setVar("时间", String(String("0") + String(this.var("时"))) + String(String(":") + String(this.var("分"))));
        }
      } else {
        if ((this.var("分") < "10")) {
          this.setVar("时间", String(this.var("时")) + String(String(":") + String(String("0") + String(this.var("分")))));
        } else {
          this.setVar("时间", String(this.var("时")) + String(String(":") + String(this.var("分"))));
        }
      }
      await this.yieldFrame();
    }
  }

  async bj3_whenGreenFlag_450(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Jr=6)Y=6|~Ptg.{YYcH`, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("sj") === "0")) {
        this.setVar("分", "0");
        this.setVar("时", "0");
        this.setVar("时间", "00:00");
      }
      await this.yieldFrame();
    }
  }

  async bj3_whenBroadcast_xlh_451(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: E@ufK[n81b+DPtlok72o, opcode: event_whenbroadcastreceived
    this.setVar("sj", "0");
    this.setVar("分", "0");
    this.setVar("时", "0");
    this.setVar("时间", "0");
  }

  async bj3_whenGreenFlag_452(): Promise<void> {
    this.sprite = this.sprites["bj3"] ?? { name: "bj3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Jyt*X6UIV4S{RO%J4Zc$, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToLayer(this.sprite, "back");
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.switchCostume(this.sprite, "1");
      } else {
        this.switchCostume(this.sprite, "2");
      }
      await this.yieldFrame();
    }
  }

  async bj4_whenStartAsClone_453(): Promise<void> {
    this.sprite = this.sprites["bj4"] ?? { name: "bj4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Q|=#$|KRqgn5%-_3.M`p, opcode: control_start_as_clone
    this.sprite.visible = true;
    this.setEffect(this.sprite, "GHOST", 40);
  }

  async bj4_whenStartAsClone_454(): Promise<void> {
    this.sprite = this.sprites["bj4"] ?? { name: "bj4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: v.DkS^:zeoyFvS~6hLgb, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        this.goToXY(this.sprite, this.random(-235, 235), 160);
        this.sprite.y += Number(-10);
        while (!(this.touching(this.sprite, "_edge_"))) {
          this.sprite.y += Number(-10);
          await this.yieldFrame();
        }
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async bj4_whenStartAsClone_455(): Promise<void> {
    this.sprite = this.sprites["bj4"] ?? { name: "bj4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 9$~el~99ku2J6/t{4e+U, opcode: control_start_as_clone
    while (true) {
      if ((this.costumeValue(this.sprite, "number") === "2")) {
        this.goTo(this.sprite, "_random_");
        await this.wait(1);
        this.switchCostume(this.sprite, "3");
        await this.wait(0.3);
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async bj4_whenGreenFlag_456(): Promise<void> {
    this.sprite = this.sprites["bj4"] ?? { name: "bj4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: eovCtx2Av1X5)uiv!}WQ, opcode: event_whenflagclicked
    while (true) {
      if ((this.var("xy") === "1")) {
        await this.playSoundUntilDone(this.sprite, "xy");
      }
      await this.yieldFrame();
    }
  }

  async bj4_whenGreenFlag_457(): Promise<void> {
    this.sprite = this.sprites["bj4"] ?? { name: "bj4", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Jyt*X6UIV4S{RO%J4Zc$, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.var("xy") === "1")) {
        if ((this.backdropValue("number") === "1")) {
          this.switchCostume(this.sprite, "1");
          this.createClone("_myself_");
        }
        if ((this.backdropValue("number") === "2")) {
          this.switchCostume(this.sprite, "2");
          this.createClone("_myself_");
        }
      }
      await this.yieldFrame();
    }
  }

  async bj5_whenGreenFlag_458(): Promise<void> {
    this.sprite = this.sprites["bj5"] ?? { name: "bj5", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: m8x,oK?bsIV-q~3}DyUK, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, -180, 25);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    this.setEffect(this.sprite, "GHOST", 25);
    this.goToXY(this.sprite, -180, 25);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 180, 25);
    this.createClone("_myself_");
  }

  async bj5_whenStartAsClone_459(): Promise<void> {
    this.sprite = this.sprites["bj5"] ?? { name: "bj5", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !;v,rxlwa3+3Rl?5syS-, opcode: control_start_as_clone
    this.setEffect(this.sprite, "GHOST", 25);
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 2);
    while (true) {
      if (((this.var("sj") > "360") && (this.var("sj") < "480"))) {
        this.switchCostume(this.sprite, "2");
      } else {
        this.switchCostume(this.sprite, "1");
      }
      await this.yieldFrame();
    }
  }

  async bj5_whenStartAsClone_460(): Promise<void> {
    this.sprite = this.sprites["bj5"] ?? { name: "bj5", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: @R2Q553-hBdSdhmZ,1_I, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async bj6_whenGreenFlag_461(): Promise<void> {
    this.sprite = this.sprites["bj6"] ?? { name: "bj6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: lbRr^zT*ll]@$r/[Nf+K, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 0, -60);
    this.pointInDirection(this.sprite, 0);
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    while (true) {
      if ((this.var("sj") < "240")) {
        this.sprite.y = Number((-180 + (this.var("sj") * 1.5)));
      } else {
        this.sprite.y = Number((360 - (-180 + (this.var("sj") * 1.5))));
      }
      await this.yieldFrame();
    }
  }

  async bj6_whenGreenFlag_462(): Promise<void> {
    this.sprite = this.sprites["bj6"] ?? { name: "bj6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !#6/%cHS]S$+g}@s0*E{, opcode: event_whenflagclicked
    while (true) {
      if (((this.var("xy") === "0") && ((this.backdropValue("number") === "1") && (this.sprite.y > "0")))) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async bj6_whenGreenFlag_463(): Promise<void> {
    this.sprite = this.sprites["bj6"] ?? { name: "bj6", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;1z{=z.sV1Uu-]5$D6Z{, opcode: event_whenflagclicked
    while (true) {
      this.setEffect(this.sprite, "BRIGHTNESS", (this.sprite.y / 1.8));
      await this.yieldFrame();
    }
  }

  async bj7_whenGreenFlag_464(): Promise<void> {
    this.sprite = this.sprites["bj7"] ?? { name: "bj7", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: z({sE5;Wbc`*qIAd:UtA, opcode: event_whenflagclicked
    while (true) {
      if (((this.var("xy") === "0") && ((this.backdropValue("number") === "1") && (this.sprite.y > "0")))) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async bj7_whenGreenFlag_465(): Promise<void> {
    this.sprite = this.sprites["bj7"] ?? { name: "bj7", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: |N;^b`4LT)*%p`+D8B#o, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 0, 160);
    this.pointInDirection(this.sprite, 90);
    if ((this.random(1, 21) === "1")) {
      this.switchCostume(this.sprite, "5");
    } else {
      this.switchCostume(this.sprite, this.random(1, 4));
    }
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    while (true) {
      if ((this.var("sj") < "240")) {
        this.sprite.y = Number((180 - (this.var("sj") * 1.5)));
      } else {
        this.sprite.y = Number(((this.var("sj") * 1.5) - 540));
      }
      await this.yieldFrame();
    }
  }

  async bj8_whenBackdrop_4_466(): Promise<void> {
    this.sprite = this.sprites["bj8"] ?? { name: "bj8", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: UT4~2gJ}1d*0|s1gB,-J, opcode: event_whenbackdropswitchesto
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.backdropValue("number") === "4")) {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async bj8_whenGreenFlag_467(): Promise<void> {
    this.sprite = this.sprites["bj8"] ?? { name: "bj8", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XG]Wl8;Fo2Qo@{ZS)S,$, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    this.setEffect(this.sprite, "GHOST", 40);
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.switchCostume(this.sprite, "1");
        this.setEffect(this.sprite, "COLOR", 0);
      } else {
        this.switchCostume(this.sprite, "2");
        this.setEffect(this.sprite, "COLOR", -15);
      }
      await this.yieldFrame();
    }
  }

  async bj8_whenBackdrop_1_468(): Promise<void> {
    this.sprite = this.sprites["bj8"] ?? { name: "bj8", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: +)G#mtZq-8~19hMy3+T^, opcode: event_whenbackdropswitchesto
    while (true) {
      if (((this.var("sj") > "100") && (this.var("sj") < "140"))) {
        if ((this.var("sj") < "120")) {
          this.setEffect(this.sprite, "GHOST", (((120 - this.var("sj")) * 4) + 20));
        } else {
          this.setEffect(this.sprite, "GHOST", (100 - ((140 - this.var("sj")) * 4)));
        }
      } else {
        if ((this.var("sj") < "360")) {
          this.setEffect(this.sprite, "GHOST", (((360 - this.var("sj")) * 4) + 20));
        } else {
          this.setEffect(this.sprite, "GHOST", (100 - ((380 - this.var("sj")) * 4)));
        }
      }
      await this.yieldFrame();
    }
  }

  async bj9_whenGreenFlag_469(): Promise<void> {
    this.sprite = this.sprites["bj9"] ?? { name: "bj9", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: |N;^b`4LT)*%p`+D8B#o, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    this.setEffect(this.sprite, "GHOST", 40);
    this.sprite.rotationStyle = "left-right";
    while (true) {
      if ((this.var("xy") === "1")) {
        await this.wait(this.random(5, 10));
        this.createClone("_myself_");
      }
      await this.yieldFrame();
    }
  }

  async bj9_whenStartAsClone_470(): Promise<void> {
    this.sprite = this.sprites["bj9"] ?? { name: "bj9", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: [6CO@KW`m.04{a=eQ|bv, opcode: control_start_as_clone
    if ((this.backdropValue("number") === "1")) {
      this.sprite.visible = true;
    } else {
      this.sprite.visible = false;
    }
    this.sprite.x = Number(this.random(-200, 200));
    this.sprite.rotationStyle = "left-right";
    this.playSound(this.sprite, "1");
    for (let i = 0, n = Number(this.random(2, 4)); i < n; i++) {
      this.turnRight(this.sprite, 180);
      await this.wait(0.2);
      await this.yieldFrame();
    }
    this.deleteThisClone(this.sprite); return;
  }

  async bj10_whenGreenFlag_471(): Promise<void> {
    this.sprite = this.sprites["bj10"] ?? { name: "bj10", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ]}mCz3*TC,To0L7$@YD?, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, 190, 40);
    this.pointInDirection(this.sprite, 90);
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    for (let i = 0, n = Number(25); i < n; i++) {
      this.goToXY(this.sprite, this.random(-200, 200), this.random(-160, 0));
      this.createClone("_myself_");
      await this.yieldFrame();
    }
    while (true) {
      await this.wait(this.random(1, 3));
      this.goToXY(this.sprite, this.random(-200, 200), this.random(-160, 0));
      this.createClone("_myself_");
      await this.yieldFrame();
    }
  }

  async bj10_whenBackdrop_1_472(): Promise<void> {
    this.sprite = this.sprites["bj10"] ?? { name: "bj10", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: N;e@Ys?8SD!;~^QtMOq}, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
  }

  async bj10_whenBackdrop_2_473(): Promise<void> {
    this.sprite = this.sprites["bj10"] ?? { name: "bj10", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: CRe|x#;A.E(+yd4v4Zq., opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
  }

  async bj10_whenStartAsClone_474(): Promise<void> {
    this.sprite = this.sprites["bj10"] ?? { name: "bj10", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: x5`l*zR4l98nwKsr+Mf2, opcode: control_start_as_clone
    while (true) {
      this.setVar("bj10dz", this.random(1, 3));
      if ((this.var("bj10dz") === "1")) {
        for (let i = 0, n = Number(250); i < n; i++) {
          this.sprite.x += Number((this.sprite.size * 0.01));
          await this.yieldFrame();
        }
      }
      if ((this.var("bj10dz") === "2")) {
        for (let i = 0, n = Number(250); i < n; i++) {
          this.sprite.x += Number((this.sprite.size * -0.01));
          await this.yieldFrame();
        }
      }
      if ((this.var("bj10dz") === "3")) {
        this.pointInDirection(this.sprite, this.random(1, 360));
        for (let i = 0, n = Number(100); i < n; i++) {
          this.moveSteps(this.sprite, (this.sprite.size * 0.01));
          await this.yieldFrame();
        }
      }
      await this.yieldFrame();
    }
  }

  async bj10_whenStartAsClone_475(): Promise<void> {
    this.sprite = this.sprites["bj10"] ?? { name: "bj10", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 4)3t?#w$$,70@XdBYy!$, opcode: control_start_as_clone
    if ((this.random(1, 100) === "1")) {
      this.setEffect(this.sprite, "COLOR", 33);
    } else {
      this.setEffect(this.sprite, "COLOR", 0);
    }
    this.sprite.rotationStyle = "don't rotate";
    while (true) {
      this.sprite.size = Number((0 - this.sprite.y));
      if (this.touching(this.sprite, "_edge_")) {
        this.deleteThisClone(this.sprite); return;
      }
      if ((this.sprite.y > "0")) {
        this.deleteThisClone(this.sprite); return;
      }
      if ((this.backdropValue("number") === "1")) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async bj11_whenGreenFlag_476(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: |N;^b`4LT)*%p`+D8B#o, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, 160);
    this.pointInDirection(this.sprite, 0);
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    this.switchCostume(this.sprite, "1");
  }

  async bj11_whenStartAsClone_477(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: .ACe?/Pf^KLSIj;V![,4, opcode: control_start_as_clone
    this.switchCostume(this.sprite, "2");
    while (true) {
      if (((this.backdropValue("number") === "1") && ((this.var("xy") === "0") && ((this.var("sj") < "120") || (this.var("sj") > "360"))))) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async bj11_whenBackdrop_1_478(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: u{1e3[cZS?@oGu2XsA]r, opcode: event_whenbackdropswitchesto
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      for (let i = 0, n = Number(this.random(10, 25)); i < n; i++) {
        this.goToXY(this.sprite, this.random(-240, 240), this.random(40, 180));
        this.createClone("_myself_");
        await this.yieldFrame();
      }
    }
  }

  async bj11_whenBackdrop_2_479(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: )HJKOUXaXH4U]:~mNt?/, opcode: event_whenbackdropswitchesto
    this.deleteThisClone(this.sprite); return;
  }

  async bj11_whenBroadcast_xyx_480(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: VJ]9F+;6MD=;U]}:|+TI, opcode: event_whenbroadcastreceived
    this.deleteThisClone(this.sprite); return;
  }

  async bj11_whenBroadcast_xlh_481(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Lfu(zx:U]XP.auLw:jo,, opcode: event_whenbroadcastreceived
    this.deleteThisClone(this.sprite); return;
  }

  async bj11_whenBackdrop_3_482(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: jwLG]@?hPYh1JvzLzH3/, opcode: event_whenbackdropswitchesto
    this.deleteThisClone(this.sprite); return;
  }

  async bj11_whenBackdrop_4_483(): Promise<void> {
    this.sprite = this.sprites["bj11"] ?? { name: "bj11", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: fMAk44j{-oGx}Ug:#0Ce, opcode: event_whenbackdropswitchesto
    this.deleteThisClone(this.sprite); return;
  }

  async bj12_whenGreenFlag_484(): Promise<void> {
    this.sprite = this.sprites["bj12"] ?? { name: "bj12", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: |N;^b`4LT)*%p`+D8B#o, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 120, -60);
    this.pointInDirection(this.sprite, 90);
    this.goToLayer(this.sprite, "back");
    this.changeLayer(this.sprite, "forward", 1);
    if ((this.random(1, 630) === "1")) {
      this.switchCostume(this.sprite, "2");
    } else {
      this.switchCostume(this.sprite, "1");
    }
  }

  async bj12_whenBroadcast_xlh_485(): Promise<void> {
    this.sprite = this.sprites["bj12"] ?? { name: "bj12", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Lfu(zx:U]XP.auLw:jo,, opcode: event_whenbroadcastreceived
    this.deleteThisClone(this.sprite); return;
  }

  async bj12_whenBackdrop_1_486(): Promise<void> {
    this.sprite = this.sprites["bj12"] ?? { name: "bj12", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: t1r+V9_ILa%H8k`)@U6], opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 120, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async bj12_whenBackdrop_2_487(): Promise<void> {
    this.sprite = this.sprites["bj12"] ?? { name: "bj12", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: h|0/xG?F$gv|zZ22]@JI, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 120, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async bj12_whenBackdrop_3_488(): Promise<void> {
    this.sprite = this.sprites["bj12"] ?? { name: "bj12", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: S;ElXyOLyv!*)fVG{;l}, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 120, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async bj12_whenBackdrop_4_489(): Promise<void> {
    this.sprite = this.sprites["bj12"] ?? { name: "bj12", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: CHL$-o%iEh#SMI`+^h5t, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 120, -60);
    this.pointInDirection(this.sprite, 90);
  }

  async grbj_whenGreenFlag_490(): Promise<void> {
    this.sprite = this.sprites["grbj"] ?? { name: "grbj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 0C30~^Y+*9IH%x;pZo]E, opcode: event_whenflagclicked
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async grbj_whenGreenFlag_491(): Promise<void> {
    this.sprite = this.sprites["grbj"] ?? { name: "grbj", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XK$Rr%%k!Vl`8pOx}#E-, opcode: event_whenflagclicked
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.var("tzms") === "8")) {
          this.sprite.visible = true;
          this.goToLayer(this.sprite, "front");
          for (let i = 0, n = Number(48); i < n; i++) {
            this.sprite.x += Number(5);
            await this.yieldFrame();
          }
          for (let i = 0, n = Number(48); i < n; i++) {
            this.sprite.x += Number(-5);
            await this.yieldFrame();
          }
        }
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async qdjl_whenBroadcast_qd_492(): Promise<void> {
    this.sprite = this.sprites["qdjl"] ?? { name: "qdjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;,O~_o^Z#?KHO!aBYE4H, opcode: event_whenbroadcastreceived
    this.setVar("qdjl", this.random(1, 9));
    if ((this.var("qdjl") === "1")) {
      this.changeVar("y金币", 10);
    }
    if ((this.var("qdjl") === "2")) {
      this.changeVar("yz持攻豆", 1);
    }
    if ((this.var("qdjl") === "3")) {
      this.changeVar("yz金光薇", 1);
    }
    if ((this.var("qdjl") === "4")) {
      this.changeVar("yz毁灭毒针", 1);
    }
    if ((this.var("qdjl") === "5")) {
      this.changeVar("yz炫夜护盾", 1);
    }
    if ((this.var("qdjl") === "6")) {
      this.changeVar("yz轰炸匕首", 1);
    }
    if ((this.var("qdjl") === "7")) {
      this.changeVar("yz三叉戟持攻豆", 1);
    }
    if ((this.var("qdjl") === "8")) {
      this.changeVar("yz炫夜短震荡波", 1);
    }
    if ((this.var("qdjl") === "9")) {
      this.changeVar("y等级", 0.3);
    }
    this.switchCostume(this.sprite, this.var("qdjl"));
    this.playSound(this.sprite, "1");
    this.setEffect(this.sprite, "GHOST", 60);
    await this.wait(1);
    this.setEffect(this.sprite, "GHOST", 100);
  }

  async qdjl_whenGreenFlag_493(): Promise<void> {
    this.sprite = this.sprites["qdjl"] ?? { name: "qdjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XK$Rr%%k!Vl`8pOx}#E-, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.setVar("qdjl", "0");
  }

  async zbdz_whenGreenFlag_494(): Promise<void> {
    this.sprite = this.sprites["zbdz"] ?? { name: "zbdz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 1Ns68gg9GiJC^,W=)uj), opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 0, 0);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.switchCostume(this.sprite, "1");
    this.goToLayer(this.sprite, "front");
    this.setVar("sfzbcz", "0");
  }

  async zbdz_whenBroadcast_zbdz_495(): Promise<void> {
    this.sprite = this.sprites["zbdz"] ?? { name: "zbdz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: *KR2$_mV*-L)0ROqU)t=, opcode: event_whenbroadcastreceived
    this.setVar("sfzbcz", "1");
    this.stopAllSounds();
    this.setEffect(this.sprite, "GHOST", 0);
    this.switchCostume(this.sprite, "1");
    this.playSound(this.sprite, "zbdz");
    await this.wait(1);
    this.switchCostume(this.sprite, "2");
    this.playSound(this.sprite, "zbdz");
    await this.wait(1);
    this.switchCostume(this.sprite, "3");
    this.playSound(this.sprite, "zbdz");
    await this.wait(1);
    this.setEffect(this.sprite, "GHOST", 60);
    this.switchCostume(this.sprite, "4");
    await this.wait(0.5);
    this.setEffect(this.sprite, "GHOST", 100);
    this.switchCostume(this.sprite, "1");
  }

  async zbdz_whenBroadcast_zbdz_496(): Promise<void> {
    this.sprite = this.sprites["zbdz"] ?? { name: "zbdz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: %.Rgp09ZKRUo`jw?e_.r, opcode: event_whenbroadcastreceived
    if ((this.sensingOf("costume #", "tz") === "3")) {
      await this.sayForSecs(this.sprite, String(this.var("新夜怪主人")) + String("派出了炫彩新夜怪"), 2.5);
    } else {
      if (String(this.list("好友单")).includes(String(this.var("新夜怪主人")))) {
        await this.sayForSecs(this.sprite, String(this.var("新夜怪主人")) + String("派出了黄金新夜怪"), 2.5);
      } else {
        await this.sayForSecs(this.sprite, String(this.var("新夜怪主人")) + String("派出了红色新夜怪"), 2.5);
      }
    }
  }

  async zbdz_whenBackdrop_1_497(): Promise<void> {
    this.sprite = this.sprites["zbdz"] ?? { name: "zbdz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: BKdNt~w}uP|)t%^S:YjH, opcode: event_whenbackdropswitchesto
    this.setVar("sfzbcz", "0");
  }

  async yhyfz_whenGreenFlag_498(): Promise<void> {
    this.sprite = this.sprites["yhyfz"] ?? { name: "yhyfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XK$Rr%%k!Vl`8pOx}#E-, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -110, 160);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if (String(this.list("好友单")).includes(String(this.var("新夜怪主人")))) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      if ((this.backdropValue("number") === "1")) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async ysftg_whenGreenFlag_499(): Promise<void> {
    this.sprite = this.sprites["ysftg"] ?? { name: "ysftg", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XK$Rr%%k!Vl`8pOx}#E-, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 100, 160);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.var("ysftg") === "1")) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      if ((this.backdropValue("number") === "1")) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      await this.yieldFrame();
    }
  }

  async smrwfz_whenGreenFlag_500(): Promise<void> {
    this.sprite = this.sprites["smrwfz"] ?? { name: "smrwfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XK$Rr%%k!Vl`8pOx}#E-, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -60, 160);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if (((this.backdropValue("number") === "1") && String(this.list("睡眠名单")).includes(String(this.var("新夜怪主人"))))) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async ytl_whenStartAsClone_501(): Promise<void> {
    this.sprite = this.sprites["ytl"] ?? { name: "ytl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: P;a[2jsX*d6n)rKtVzg(, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async ytl_whenStartAsClone_502(): Promise<void> {
    this.sprite = this.sprites["ytl"] ?? { name: "ytl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: .|`;r}yF#F:T{MG_oE({, opcode: control_start_as_clone
    if ((!(this.var("tzms") === "2"))) {
      this.pen("pen.penDown", {});
      while (true) {
        if ((this.backdropValue("number") === "2")) {
          if ((this.var("tzms") === "5")) {
            this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
            this.sprite.x = Number(-200);
            this.sprite.x = Number(200);
            this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
            this.sprite.x = Number((-200 + this.var("y体力")));
          } else {
            this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
            this.sprite.x = Number(-200);
            this.sprite.x = Number((-200 + (this.var("ycstl") * 2)));
            this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
            this.sprite.x = Number((-200 + this.var("y体力")));
          }
        }
        await this.yieldFrame();
      }
    }
  }

  async ytl_whenBackdrop_2_503(): Promise<void> {
    this.sprite = this.sprites["ytl"] ?? { name: "ytl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 140);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, 136);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 138);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 140);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 142);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 144);
    this.createClone("_myself_");
  }

  async ytl_whenBackdrop_1_504(): Promise<void> {
    this.sprite = this.sprites["ytl"] ?? { name: "ytl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 140);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async ytl_whenGreenFlag_505(): Promise<void> {
    this.sprite = this.sprites["ytl"] ?? { name: "ytl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 140);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yzd_whenStartAsClone_506(): Promise<void> {
    this.sprite = this.sprites["yzd"] ?? { name: "yzd", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !.*;ZyY#tPZ(:8XBV|b9, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async yzd_whenStartAsClone_507(): Promise<void> {
    this.sprite = this.sprites["yzd"] ?? { name: "yzd", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: !~I-_C`k?q7/PXP(|i]U, opcode: control_start_as_clone
    this.pen("pen.penDown", {});
    this.sprite.x += Number((100 + (this.var("背包等级") * 20)));
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
        this.sprite.x = Number((-200 + (this.var("y子弹持有数") / 100)));
        this.pen("pen.penDown", {});
      }
      await this.yieldFrame();
    }
  }

  async yzd_whenBackdrop_2_508(): Promise<void> {
    this.sprite = this.sprites["yzd"] ?? { name: "yzd", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 130);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#0014ff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, 126);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 128);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 130);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 132);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 134);
    this.createClone("_myself_");
  }

  async yzd_whenBackdrop_1_509(): Promise<void> {
    this.sprite = this.sprites["yzd"] ?? { name: "yzd", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 130);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#002eff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yzd_whenGreenFlag_510(): Promise<void> {
    this.sprite = this.sprites["yzd"] ?? { name: "yzd", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 130);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#002eff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yql_whenStartAsClone_511(): Promise<void> {
    this.sprite = this.sprites["yql"] ?? { name: "yql", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: RtlVZ)e*L-S(z-nd|0m{, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async yql_whenStartAsClone_512(): Promise<void> {
    this.sprite = this.sprites["yql"] ?? { name: "yql", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 10E499Vh(*D*~c.7;R7;, opcode: control_start_as_clone
    this.pen("pen.penDown", {});
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        this.pen("pen.setPenColorToColor", {COLOR: "#fff600"});
        this.sprite.x = Number(-200);
        this.sprite.x = Number((-200 + this.var("y最高气力")));
        this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
        this.sprite.x = Number((-200 + this.var("y气力")));
      }
      await this.yieldFrame();
    }
  }

  async yql_whenBackdrop_2_513(): Promise<void> {
    this.sprite = this.sprites["yql"] ?? { name: "yql", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 120);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#faff00"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, 116);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 118);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 120);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 122);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 124);
    this.createClone("_myself_");
  }

  async yql_whenBackdrop_1_514(): Promise<void> {
    this.sprite = this.sprites["yql"] ?? { name: "yql", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 120);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#faff00"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yql_whenGreenFlag_515(): Promise<void> {
    this.sprite = this.sprites["yql"] ?? { name: "yql", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 120);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#faff00"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yjl_whenStartAsClone_516(): Promise<void> {
    this.sprite = this.sprites["yjl"] ?? { name: "yjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: qfHBXnY,sSJmGPy2cXP,, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async yjl_whenStartAsClone_517(): Promise<void> {
    this.sprite = this.sprites["yjl"] ?? { name: "yjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: zi.tu*vLA^z}Y:=L0N5S, opcode: control_start_as_clone
    this.pen("pen.penDown", {});
    this.sprite.x += Number(this.var("y最高精力"));
    this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
        this.sprite.x = Number((-200 + this.var("y精力")));
        this.pen("pen.penDown", {});
      }
      await this.yieldFrame();
    }
  }

  async yjl_whenBackdrop_2_518(): Promise<void> {
    this.sprite = this.sprites["yjl"] ?? { name: "yjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 110);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, 106);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 108);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 110);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 112);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, 114);
    this.createClone("_myself_");
  }

  async yjl_whenBackdrop_1_519(): Promise<void> {
    this.sprite = this.sprites["yjl"] ?? { name: "yjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 110);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yjl_whenGreenFlag_520(): Promise<void> {
    this.sprite = this.sprites["yjl"] ?? { name: "yjl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 110);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yxl_whenStartAsClone_521(): Promise<void> {
    this.sprite = this.sprites["yxl"] ?? { name: "yxl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: J#U5B:D^V64fTZQ;`tj1, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async yxl_whenBackdrop_2_522(): Promise<void> {
    this.sprite = this.sprites["yxl"] ?? { name: "yxl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: b4;k96ffie5zy|;2nKYh, opcode: event_whenbackdropswitchesto
    while (true) {
      while (!((this.var("y蓄力") > "99.99"))) await this.yieldFrame();
      this.playSound(this.sprite, "xlcg");
      while (!((this.var("y蓄力") < "100"))) await this.yieldFrame();
      await this.yieldFrame();
    }
  }

  async yxl_whenStartAsClone_523(): Promise<void> {
    this.sprite = this.sprites["yxl"] ?? { name: "yxl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: tG3ojc9ZDZmP#onxg}Zr, opcode: control_start_as_clone
    this.pen("pen.penDown", {});
    this.sprite.x += Number(-400);
    this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
    this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 0});
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: this.var("y蓄力")});
        this.sprite.x = Number((-200 + (this.var("y蓄力") * 4)));
        this.pen("pen.penDown", {});
        if (((this.keyPressed("space") && this.keyPressed("z")) && (this.var("y蓄力") > "99.99"))) {
          this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
          this.sprite.x += Number(-400);
          this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
          await this.wait(0.4);
        }
      }
      await this.yieldFrame();
    }
  }

  async yxl_whenBackdrop_2_524(): Promise<void> {
    this.sprite = this.sprites["yxl"] ?? { name: "yxl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 100);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, 200, 96);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 98);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 100);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 102);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 104);
    this.createClone("_myself_");
  }

  async yxl_whenBackdrop_1_525(): Promise<void> {
    this.sprite = this.sprites["yxl"] ?? { name: "yxl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 100);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yxl_whenGreenFlag_526(): Promise<void> {
    this.sprite = this.sprites["yxl"] ?? { name: "yxl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 100);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yxl2_whenStartAsClone_527(): Promise<void> {
    this.sprite = this.sprites["yxl2"] ?? { name: "yxl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: :84#VcHk@A}ftg(zWACl, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async yxl2_whenStartAsClone_528(): Promise<void> {
    this.sprite = this.sprites["yxl2"] ?? { name: "yxl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2Cqe(U{!`Y7*i^]hFi^u, opcode: control_start_as_clone
    this.pen("pen.penDown", {});
    this.sprite.x += Number(-400);
    this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
    this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 0});
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        if ((this.var("y蓄力2") === "0")) {
          this.sprite.x = Number(200);
          this.pen("pen.penUp", {});
          this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
          this.pen("pen.setPenSizeTo", {SIZE: 2});
          this.pen("pen.penDown", {});
          this.sprite.x += Number(-400);
          this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
          this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 0});
        }
        if ((this.var("y蓄力2") > "599")) {
          if (((this.var("y蓄力") > "99") && (this.list("y拥有的5大招式").includes("i") && this.list("y拥有的5大招式").includes("p")))) {
            this.setVar("y蓄力2段数", "6");
            this.sprite.x = Number((-200 + (((this.var("y蓄力2") - 520) * 400) / 80)));
            this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 85});
          } else {
            this.setVar("y蓄力2段数", "5");
            this.sprite.x = Number((-200 + (((this.var("y蓄力2") - 520) * 400) / 80)));
            this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 85});
          }
        } else {
          if ((this.var("y蓄力2") > "519")) {
            this.setVar("y蓄力2段数", "4");
            this.sprite.x = Number((-200 + (((this.var("y蓄力2") - 520) * 400) / 80)));
            this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 85});
          } else {
            if ((this.var("y蓄力2") > "434")) {
              this.setVar("y蓄力2段数", "3");
              this.sprite.x = Number((-200 + (((this.var("y蓄力2") - 435) * 400) / 85)));
              this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 64});
            } else {
              if ((this.var("y蓄力2") > "344")) {
                this.setVar("y蓄力2段数", "2");
                this.sprite.x = Number((-200 + (((this.var("y蓄力2") - 345) * 400) / 90)));
                this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 39});
              } else {
                if ((this.var("y蓄力2") > "249")) {
                  this.setVar("y蓄力2段数", "1");
                  this.sprite.x = Number((-200 + (((this.var("y蓄力2") - 250) * 400) / 95)));
                  this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 16});
                } else {
                  this.setVar("y蓄力2段数", "0");
                  this.sprite.x = Number((-200 + (((this.var("y蓄力2") - 0) * 400) / 250)));
                  this.pen("pen.setPenColorParamTo", {COLOR_PARAM: "color", VALUE: 0});
                }
              }
            }
          }
        }
        this.pen("pen.penDown", {});
      }
      await this.yieldFrame();
    }
  }

  async yxl2_whenBackdrop_2_529(): Promise<void> {
    this.sprite = this.sprites["yxl2"] ?? { name: "yxl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 90);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, 200, 86);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 88);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 90);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 92);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 94);
    this.createClone("_myself_");
  }

  async yxl2_whenBackdrop_1_530(): Promise<void> {
    this.sprite = this.sprites["yxl2"] ?? { name: "yxl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 90);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yxl2_whenGreenFlag_531(): Promise<void> {
    this.sprite = this.sprites["yxl2"] ?? { name: "yxl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 90);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yxl2fz_whenStartAsClone_532(): Promise<void> {
    this.sprite = this.sprites["yxl2fz"] ?? { name: "yxl2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: /H]umie/u)*0UIm1ujuU, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        this.sprite.visible = true;
      } else {
        this.sprite.visible = false;
      }
      if ((this.var("y蓄力2段数") > (this.costumeValue(this.sprite, "number") - 1))) {
        if (((this.var("y蓄力2段数") === "6") && (this.costumeValue(this.sprite, "number") === "5"))) {
          this.setEffect(this.sprite, "BRIGHTNESS", 25);
        } else {
          this.setEffect(this.sprite, "BRIGHTNESS", 0);
        }
      } else {
        this.setEffect(this.sprite, "BRIGHTNESS", -100);
      }
      await this.yieldFrame();
    }
  }

  async yxl2fz_whenBackdrop_2_533(): Promise<void> {
    this.sprite = this.sprites["yxl2fz"] ?? { name: "yxl2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.pointInDirection(this.sprite, 90);
  }

  async yxl2fz_whenBackdrop_1_534(): Promise<void> {
    this.sprite = this.sprites["yxl2fz"] ?? { name: "yxl2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.pointInDirection(this.sprite, 90);
  }

  async yxl2fz_whenGreenFlag_535(): Promise<void> {
    this.sprite = this.sprites["yxl2fz"] ?? { name: "yxl2fz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.pointInDirection(this.sprite, 90);
    this.goToXY(this.sprite, -200, 70);
    this.switchCostume(this.sprite, "1");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -180, 70);
    this.switchCostume(this.sprite, "2");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -160, 70);
    this.switchCostume(this.sprite, "3");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -140, 70);
    this.switchCostume(this.sprite, "4");
    this.createClone("_myself_");
    this.goToXY(this.sprite, -120, 70);
    this.switchCostume(this.sprite, "5");
    this.createClone("_myself_");
  }

  async yxl3_whenStartAsClone_536(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: b0VWg[gen6mM3xluk@Jf, opcode: control_start_as_clone
    while (true) {
      if ((!(this.backdropValue("number") === "2"))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async yxl3_whenBackdrop_2_537(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: LlQk(?Z!w^0I]$c]%ay2, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        while (!((this.var("y蓄力3") > "24"))) await this.yieldFrame();
        this.setSoundEffect(this.sprite, "PITCH", -40);
        await this.playSoundUntilDone(this.sprite, "xl");
        this.setSoundEffect(this.sprite, "PITCH", 0);
        while (!((this.var("y蓄力3") < "25"))) await this.yieldFrame();
      }
      await this.yieldFrame();
    }
  }

  async yxl3_whenBackdrop_2_538(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ,#$1A_`g@_=FcffA#JdZ, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        while (!((this.var("y蓄力3") > "49"))) await this.yieldFrame();
        this.setSoundEffect(this.sprite, "PITCH", 10);
        await this.playSoundUntilDone(this.sprite, "xl");
        this.setSoundEffect(this.sprite, "PITCH", 0);
        while (!((this.var("y蓄力3") < "50"))) await this.yieldFrame();
      }
      await this.yieldFrame();
    }
  }

  async yxl3_whenBackdrop_2_539(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: b]54|rMIa$MREj-R;NZ:, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        while (!((this.var("y蓄力3") > "74"))) await this.yieldFrame();
        this.setSoundEffect(this.sprite, "PITCH", 60);
        await this.playSoundUntilDone(this.sprite, "xl");
        this.setSoundEffect(this.sprite, "PITCH", 0);
        while (!((this.var("y蓄力3") < "75"))) await this.yieldFrame();
      }
      await this.yieldFrame();
    }
  }

  async yxl3_whenBackdrop_2_540(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 7uqR(M%fe%vv/3-8|RGv, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        while (!((this.var("y蓄力3") > "99"))) await this.yieldFrame();
        this.setSoundEffect(this.sprite, "PITCH", 110);
        await this.playSoundUntilDone(this.sprite, "xl");
        this.setSoundEffect(this.sprite, "PITCH", 0);
        while (!((this.var("y蓄力3") < "100"))) await this.yieldFrame();
      }
      await this.yieldFrame();
    }
  }

  async yxl3_whenStartAsClone_541(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: %q1$eEZN^%xkme9nc|Zh, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "2")) {
        this.pen("pen.penUp", {});
        this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
        this.pen("pen.setPenSizeTo", {SIZE: 2});
        this.pen("pen.penDown", {});
        this.sprite.x += Number(-400);
        this.pen("pen.setPenColorToColor", {COLOR: "#fff600"});
        this.sprite.x = Number((-200 + (this.var("y蓄力3") * 4)));
        this.pen("pen.penDown", {});
      }
      await this.yieldFrame();
    }
  }

  async yxl3_whenBackdrop_2_542(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 50);
    this.pointInDirection(this.sprite, 90);
    await this.wait(0.1);
    this.goToXY(this.sprite, 200, 46);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 48);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 50);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 52);
    this.createClone("_myself_");
    this.goToXY(this.sprite, 200, 54);
    this.createClone("_myself_");
  }

  async yxl3_whenBackdrop_1_543(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 50);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async yxl3_whenGreenFlag_544(): Promise<void> {
    this.sprite = this.sprites["yxl3"] ?? { name: "yxl3", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, 200, 50);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async dtl_whenStartAsClone_545(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: XTf`qA4)-TtFHUvcOS5P, opcode: control_start_as_clone
    while (true) {
      if ((!((this.backdropValue("number") === "2") || (this.backdropValue("number") === "3")))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async dtl_whenBackdrop_2_546(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: QMGfXFV-Vl]R.(cqmFo=, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.sprite.x === "200")) {
        this.sprite.visible = false;
      } else {
        this.sprite.visible = true;
      }
      await this.yieldFrame();
    }
  }

  async dtl_whenStartAsClone_547(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: s=X:kdgjS|__n-_Ja!6i, opcode: control_start_as_clone
    this.pen("pen.penDown", {});
    while (true) {
      if ((this.backdropValue("number") === "3")) {
        if ((this.var("dfz") > "100")) {
          this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
          this.sprite.x = Number(-200);
          this.sprite.x = Number(200);
          this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
          this.sprite.x = Number(200);
        } else {
          this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
          this.sprite.x = Number(-200);
          this.sprite.x = Number(200);
          this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
          this.sprite.x = Number((-200 + (this.var("dfz") * 4)));
        }
      }
      await this.yieldFrame();
    }
  }

  async dtl_whenStartAsClone_548(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hM+veG4R5s,~beJI@R5r, opcode: control_start_as_clone
    if ((this.backdropValue("number") === "2")) {
      if ((!(this.var("tzms") === "7"))) {
        if ((this.var("tzms") === "5")) {
          this.pen("pen.penDown", {});
          this.sprite.x = Number(200);
          this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
          await this.wait(0.1);
          while (true) {
            while (!((this.var("d体力") === this.var("dtl3")))) {
              this.sprite.x = Number((-200 + ((400 / this.var("d满血")) * this.var("d体力"))));
              this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
              await this.yieldFrame();
            }
            await this.wait(0.1);
            this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
            this.sprite.x = Number(200);
            if ((this.var("d体力") < "100.01")) {
              this.sprite.x = Number(-200);
              this.pen("pen.penUp", {});
              this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
              this.pen("pen.penDown", {});
              this.sprite.x = Number(200);
              this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
            }
            await this.yieldFrame();
          }
        } else {
          this.pen("pen.penDown", {});
          this.sprite.x = Number(200);
          this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
          await this.wait(0.1);
          while (true) {
            while (!((this.var("d体力") === this.var("dtl3")))) {
              this.sprite.x = Number((-200 + ((400 / this.var("d满血")) * this.var("d体力"))));
              this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
              await this.yieldFrame();
            }
            await this.wait(0.2);
            this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
            this.sprite.x = Number(200);
            await this.yieldFrame();
          }
        }
      }
    }
  }

  async dtl_whenBackdrop_1_549(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 9e-0jUG$~/$c/U;vFK=|, opcode: event_whenbackdropswitchesto
    this.pen("pen.clear", {});
  }

  async dtl_whenBackdrop_3_550(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hGnH@woKPriik!vorgrT, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, -144);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -142);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -140);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -138);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -136);
    this.createClone("_myself_");
  }

  async dtl_whenBackdrop_2_551(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    if ((this.var("rwzdqd") > "3")) {
      this.pen("pen.setPenColorToColor", {COLOR: "#faff00"});
    } else {
      this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    }
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, -144);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -142);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -140);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -138);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -136);
    this.createClone("_myself_");
  }

  async dtl_whenBackdrop_1_552(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async dtl_whenGreenFlag_553(): Promise<void> {
    this.sprite = this.sprites["dtl"] ?? { name: "dtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async dtl2_whenStartAsClone_554(): Promise<void> {
    this.sprite = this.sprites["dtl2"] ?? { name: "dtl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;(#lu;*XN!6jThF=pr)m, opcode: control_start_as_clone
    while (true) {
      if ((!((this.backdropValue("number") === "2") || (this.backdropValue("number") === "3")))) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async dtl2_whenStartAsClone_555(): Promise<void> {
    this.sprite = this.sprites["dtl2"] ?? { name: "dtl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: $U-E6B]W/bP9VF_jr/Jn, opcode: control_start_as_clone
    if ((this.backdropValue("number") === "2")) {
      if ((!(this.var("tzms") === "7"))) {
        if ((this.var("tzms") === "5")) {
          this.pen("pen.penDown", {});
          this.sprite.x = Number(200);
          this.pen("pen.setPenColorToColor", {COLOR: "#ff7f7f"});
          await this.wait(0.1);
          while (true) {
            while (!((this.var("d体力") === this.var("dtl4")))) {
              this.sprite.x = Number((-200 + ((400 / this.var("d满血")) * this.var("d体力"))));
              this.pen("pen.setPenColorToColor", {COLOR: "#ff7f7f"});
              await this.yieldFrame();
            }
            this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
            this.sprite.x = Number((-200 + ((400 / this.var("d满血")) * this.var("dtl3"))));
            if ((this.var("d体力") < "100.01")) {
              this.sprite.x = Number(-200);
              this.pen("pen.penUp", {});
              this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
              this.pen("pen.penDown", {});
              this.sprite.x = Number(200);
              this.pen("pen.setPenColorToColor", {COLOR: "#ff7d7d"});
            }
            await this.yieldFrame();
          }
        } else {
          this.pen("pen.penDown", {});
          this.sprite.x = Number(200);
          this.pen("pen.setPenColorToColor", {COLOR: "#ff7d7d"});
          await this.wait(0.1);
          while (true) {
            while (!((this.var("d体力") === this.var("dtl4")))) {
              this.sprite.x = Number((-200 + ((400 / this.var("d满血")) * this.var("d体力"))));
              this.pen("pen.setPenColorToColor", {COLOR: "#ff7f7f"});
              await this.yieldFrame();
            }
            this.pen("pen.setPenColorToColor", {COLOR: "#ff0000"});
            this.sprite.x = Number((-200 + ((400 / this.var("d满血")) * this.var("dtl3"))));
            await this.yieldFrame();
          }
        }
      }
    }
  }

  async dtl2_whenStartAsClone_556(): Promise<void> {
    this.sprite = this.sprites["dtl2"] ?? { name: "dtl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: z5QN0Y-IsCRD0@D/XuK=, opcode: control_start_as_clone
    this.pen("pen.penDown", {});
    while (true) {
      if ((this.backdropValue("number") === "3")) {
        if ((this.var("dfz") > "100")) {
          this.sprite.x = Number(-200);
          this.sprite.x = Number(200);
        } else {
          this.sprite.x = Number(-200);
          this.sprite.x = Number((-200 + (this.var("dfz") * 4)));
        }
      }
      await this.yieldFrame();
    }
  }

  async dtl2_whenBackdrop_3_557(): Promise<void> {
    this.sprite = this.sprites["dtl2"] ?? { name: "dtl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hGnH@woKPriik!vorgrT, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, -144);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -142);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -140);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -138);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -136);
    this.createClone("_myself_");
  }

  async dtl2_whenBackdrop_2_558(): Promise<void> {
    this.sprite = this.sprites["dtl2"] ?? { name: "dtl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    if ((this.var("rwzdqd") > "3")) {
      this.pen("pen.setPenColorToColor", {COLOR: "#faff00"});
    } else {
      this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    }
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    await this.wait(0.1);
    this.goToXY(this.sprite, -200, -144);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -142);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -140);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -138);
    this.createClone("_myself_");
    this.goToXY(this.sprite, -200, -136);
    this.createClone("_myself_");
  }

  async dtl2_whenBackdrop_1_559(): Promise<void> {
    this.sprite = this.sprites["dtl2"] ?? { name: "dtl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async dtl2_whenGreenFlag_560(): Promise<void> {
    this.sprite = this.sprites["dtl2"] ?? { name: "dtl2", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -140);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async dbtl_whenBackdrop_2_561(): Promise<void> {
    this.sprite = this.sprites["dbtl"] ?? { name: "dbtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    this.setVar("dbbgjcs", "0");
    await this.wait(0.1);
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -132);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    if ((this.var("tzms") === "10")) {
      this.pen("pen.penDown", {});
      this.goToXY(this.sprite, 200, -130);
      this.pen("pen.setPenColorToColor", {COLOR: "#000000"});
      while (true) {
        if ((this.var("dbbgjcs") > "0")) {
          this.sprite.x += Number((0 - (400 / (Math.round(Number((this.var("d满血") / 5))) * 5))));
          this.changeVar("dbbgjcs", -1);
        }
        await this.yieldFrame();
      }
    }
  }

  async dbtl_whenBackdrop_1_562(): Promise<void> {
    this.sprite = this.sprites["dbtl"] ?? { name: "dbtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -132);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async dbtl_whenGreenFlag_563(): Promise<void> {
    this.sprite = this.sprites["dbtl"] ?? { name: "dbtl", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, -132);
    this.pointInDirection(this.sprite, 90);
    this.setEffect(this.sprite, "GHOST", 100);
    this.pen("pen.penUp", {});
    this.pen("pen.clear", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async dtlfz_whenGreenFlag_564(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: fE?K6;eNJs#VXUN=cSw3, opcode: event_whenflagclicked
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, -120);
    this.pointInDirection(this.sprite, 90);
  }

  async dtlfz_whenBackdrop_1_565(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ~$BPQnE,UeSt~lD$:iZT, opcode: event_whenbackdropswitchesto
    this.sprite.visible = false;
    this.goToXY(this.sprite, 0, -120);
    this.pointInDirection(this.sprite, 90);
  }

  async dtlfz_whenBackdrop_2_566(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: lLzobqNTBqt+)_sbMv5,, opcode: event_whenbackdropswitchesto
    if ((this.var("tzms") === "7")) {
      this.sprite.visible = false;
    } else {
      this.sprite.visible = true;
    }
    this.goToXY(this.sprite, -160, -160);
    this.pointInDirection(this.sprite, 90);
    if ((this.var("rwx") === "王")) {
      this.setVar("rwx4", "1");
    } else {
      this.setVar("rwx4", "2");
    }
    if ((this.var("rwm") === "新焰")) {
      this.setVar("rwm4", "1");
    } else {
      this.setVar("rwm4", "2");
    }
    this.switchCostume(this.sprite, "36");
    this.createClone("_myself_");
    if ((this.var("新夜怪主人") === "王队长")) {
      this.switchCostume(this.sprite, "42");
      this.createClone("_myself_");
    } else {
      this.switchCostume(this.sprite, (36 + this.var("rwzdqd")));
      this.createClone("_myself_");
    }
    this.switchCostume(this.sprite, this.var("rwx4"));
    this.createClone("_myself_");
  }

  async dtlfz_whenStartAsClone_567(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Ja;Ef+k^b9LWxV;szKA?, opcode: control_start_as_clone
    if ((this.costumeValue(this.sprite, "number") < "26")) {
      this.goToXY(this.sprite, -140, -160);
      this.pointInDirection(this.sprite, 90);
      this.switchCostume(this.sprite, (10 + this.var("rwm4")));
    } else {
      if (((this.costumeValue(this.sprite, "number") > "35") && (this.costumeValue(this.sprite, "number") < "43"))) {
        if ((this.costumeValue(this.sprite, "number") === "36")) {
          this.goToXY(this.sprite, -30, -160);
          this.pointInDirection(this.sprite, 90);
        } else {
          this.goToXY(this.sprite, 50, -160);
          this.pointInDirection(this.sprite, 90);
        }
      }
    }
  }

  async dtlfz_whenStartAsClone_568(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: C3=rMidD]dg}|hxCyETb, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "1")) {
        this.deleteThisClone(this.sprite); return;
      }
      await this.yieldFrame();
    }
  }

  async dtlfz_whenBackdrop_3_569(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ,f+D)|pIN`=B=sAeQ|YX, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -160, -160);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "43");
  }

  async dtlfz_whenBroadcast_训练场2阶段_570(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: eZ5vUUwbkOIeQZYCzN,=, opcode: event_whenbroadcastreceived
    this.switchCostume(this.sprite, "44");
  }

  async dtlfz_whenBroadcast_训练场3阶段_571(): Promise<void> {
    this.sprite = this.sprites["dtlfz"] ?? { name: "dtlfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: r}fOpQtQG3#3E.L6/=c0, opcode: event_whenbroadcastreceived
    this.switchCostume(this.sprite, "45");
  }

  async jefz_whenBackdrop_1_572(): Promise<void> {
    this.sprite = this.sprites["jefz"] ?? { name: "jefz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: J(a`jRZF.g8aQ6Ge2FeR, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y饱食度") < "0")) {
        this.setVar("y饱食度", "0");
      }
      await this.yieldFrame();
    }
  }

  async jefz_whenBackdrop_2_573(): Promise<void> {
    this.sprite = this.sprites["jefz"] ?? { name: "jefz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 2e`K?seIQz!/Th~9QXO7, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y饱食度") === "0")) {
        await this.wait(1);
        this.changeVar("y体力", -3);
      }
      await this.yieldFrame();
    }
  }

  async jefz_whenBackdrop_1_574(): Promise<void> {
    this.sprite = this.sprites["jefz"] ?? { name: "jefz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;h.{%l+),JpB8/pTA)]F, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 0, 160);
    this.pointInDirection(this.sprite, 90);
    while (true) {
      if ((this.var("y饱食度") < "20")) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async jefz_whenBackdrop_1_575(): Promise<void> {
    this.sprite = this.sprites["jefz"] ?? { name: "jefz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: =nz?`7utDU[YrLtUPb#e, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y饱食度") < "20")) {
        await this.playSoundUntilDone(this.sprite, "je");
      }
      await this.yieldFrame();
    }
  }

  async qsfz_whenBackdrop_1_576(): Promise<void> {
    this.sprite = this.sprites["qsfz"] ?? { name: "qsfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;dr?qO?5rp:hq+K_.a5J, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y水分") < "0")) {
        this.switchCostume(this.sprite, "2");
        await this.wait(1);
        this.setVar("轮回数2", this.var("轮回数"));
        this.setVar("轮回数", this.var("轮回数2"));
        if ((this.var("轮回数") > "1")) {
          this.setVar("y等级", (24 + (this.var("轮回数") * 12)));
        }
      }
      await this.yieldFrame();
    }
  }

  async qsfz_whenBackdrop_1_577(): Promise<void> {
    this.sprite = this.sprites["qsfz"] ?? { name: "qsfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: ;h.{%l+),JpB8/pTA)]F, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, 60, 160);
    this.pointInDirection(this.sprite, 90);
    this.switchCostume(this.sprite, "1");
    while (true) {
      if ((this.var("y水分") < "20")) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async qsfz_whenBackdrop_1_578(): Promise<void> {
    this.sprite = this.sprites["qsfz"] ?? { name: "qsfz", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: =nz?`7utDU[YrLtUPb#e, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.var("y水分") < "20")) {
        await this.playSoundUntilDone(this.sprite, "qs");
      }
      await this.yieldFrame();
    }
  }

  async ysxs_whenKey_h_579(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: dXK%1qZSdX(VJ`W;p`]., opcode: event_whenkeypressed
    if (((this.backdropValue("number") === "1") && (this.var("sffxwb") === "1"))) {
      if ((this.costumeValue(this.sprite, "number") === "1")) {
        this.goToXY(this.sprite, 0, 85);
        for (let i = 0, n = Number(5); i < n; i++) {
          this.sprite.y += Number(-15);
          this.nextCostume(this.sprite);
          this.createClone("_myself_");
          await this.yieldFrame();
        }
        for (let i = 0, n = Number(2); i < n; i++) {
          this.sprite.y += Number(-10);
          this.nextCostume(this.sprite);
          this.createClone("_myself_");
          await this.yieldFrame();
        }
        for (let i = 0, n = Number(4); i < n; i++) {
          this.sprite.y += Number(-15);
          this.nextCostume(this.sprite);
          this.createClone("_myself_");
          await this.yieldFrame();
        }
        this.switchCostume(this.sprite, "1");
        this.goToXY(this.sprite, -200, 0);
        this.switchBackdrop("4");
        this.showVariable("优势");
        this.switchCostume(this.sprite, "1");
      }
    }
  }

  async ysxs_whenKey_j_580(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: hYi4ek2.U:BF$uwyOKqw, opcode: event_whenkeypressed
    if ((this.backdropValue("number") === "4")) {
      this.switchBackdrop("1");
      this.hideVariable("优势");
      this.deleteThisClone(this.sprite); return;
    }
  }

  async ysxs_whenBackdrop_1_581(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: .GpQD)D#sFA,x{MN=LRY, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "4")) {
        this.setEffect(this.sprite, "GHOST", 0);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async ysxs_whenBackdrop_4_582(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: Ho#ovqWpU/(btNw=Wr]E, opcode: event_whenbackdropswitchesto
    while (true) {
      if ((this.backdropValue("number") === "4")) {
        if ((this.costumeValue(this.sprite, "number") === "1")) {
          if ((this.mouseDown() && ((this.mouseX > (-200.01 + (200 / this.list("血量比值").length))) && (this.mouseX < "200.01")))) {
            this.sprite.x = Number((((this.list("血量比值").length % 2) * (-200 / this.list("血量比值").length)) + (Math.round(Number((this.mouseX / (400 / this.list("血量比值").length)))) * (400 / this.list("血量比值").length))));
            this.setVar("yys", (Math.round(Number((this.itemOfList("血量比值", (Math.round(Number((this.list("血量比值").length / 2))) + (this.sprite.x / (400 / this.list("血量比值").length)))) * 100))) / 100));
            if ((this.var("yys") > "70")) {
              this.setVar("yys2", "蓝胜势");
            } else {
              this.setVar("yys2", "蓝大优");
            }
            if ((this.var("yys2") === "均势")) {
              this.setVar("优势", String(this.var("yys2")) + String(this.var("yys")));
            } else {
              this.setVar("优势", String(this.var("yys2")) + String(this.mathOp("abs", this.var("yys"))));
            }
          }
        }
      }
      await this.yieldFrame();
    }
  }

  async ysxs_whenStartAsClone_583(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: $awF#9N:{DmL4C={NZ4v, opcode: control_start_as_clone
    while (true) {
      if ((this.backdropValue("number") === "4")) {
        this.setEffect(this.sprite, "GHOST", 40);
      } else {
        this.setEffect(this.sprite, "GHOST", 100);
      }
      await this.yieldFrame();
    }
  }

  async ysxs_whenBackdrop_2_584(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: j(Hjp8pfF7Z(ir+rE|9i, opcode: event_whenbackdropswitchesto
    if ((this.costumeValue(this.sprite, "number") === "1")) {
      await this.wait(0.1);
      this.setVar("血量比例编号", "0");
      this.list("血量比值").length = 0;
      this.goToXY(this.sprite, -200, 0);
      this.sprite.visible = true;
      this.pointInDirection(this.sprite, 90);
      this.setVar("sffxwb", "0");
      this.pen("pen.penUp", {});
      while (!((this.backdropValue("number") === "1"))) {
        await this.wait(0.1);
        this.list("血量比值").push((((this.var("y体力") / this.var("ycstl")) - (this.var("d体力") / this.var("d满血"))) * 160));
        await this.yieldFrame();
      }
      this.deleteOfList("血量比值", this.list("血量比值").length);
      await this.wait(0.1);
      this.pen("pen.penDown", {});
      for (let i = 0, n = Number(this.list("血量比值").length); i < n; i++) {
        this.changeVar("血量比例编号", 1);
        this.goToXY(this.sprite, (this.sprite.x + (400 / this.list("血量比值").length)), this.itemOfList("血量比值", this.var("血量比例编号")));
        await this.yieldFrame();
      }
      this.pen("pen.penUp", {});
      this.setVar("sffxwb", "1");
    }
  }

  async ysxs_whenBackdrop_1_585(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: by8ew]~hc`TX[Q!_jrL?, opcode: event_whenbackdropswitchesto
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
  }

  async ysxs_whenGreenFlag_586(): Promise<void> {
    this.sprite = this.sprites["ysxs"] ?? { name: "ysxs", x: 0, y: 0, direction: 90, size: 100, visible: true };
    // source block: 85^5OMZR6R7v}lYXfan!, opcode: event_whenflagclicked
    this.sprite.visible = true;
    this.goToXY(this.sprite, -200, 0);
    this.pointInDirection(this.sprite, 90);
    this.pen("pen.penUp", {});
    this.pen("pen.setPenColorToColor", {COLOR: "#ffffff"});
    this.pen("pen.setPenSizeTo", {SIZE: 2});
    this.hideVariable("优势");
    this.goToXY(this.sprite, 0, 85);
    this.switchCostume(this.sprite, "1");
  }

}

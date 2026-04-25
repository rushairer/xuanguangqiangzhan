import './style.css';
import logoArt from '../mindplus-source/ef95a65d7c0f2457b1cb509f69d6275f.svg';
import enemyArt from '../mindplus-source/99b81507e260738a02a31e8ae16e29ed.svg';
import playerArt from '../mindplus-source/8f041be2ac3ef14c3ce8316a40507551.svg';
import {
  SCRATCH_COMPATIBILITY_MODE,
  type GameHandle,
  type ScratchMonitor,
  startScratchGame
} from './scratchGame';
import type {PersistedRuntimeState, RuntimePersistenceStatus, RuntimeSaveSlot} from './runtimePersistence';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('#app not found');
}

app.innerHTML = `
  <main class="shell">
    <section class="panel">
      <div class="main-column">
        <div class="stage-wrap">
          <canvas id="scratch-stage" width="960" height="720" tabindex="0" aria-label="游戏舞台"></canvas>
          <div class="monitor-layer" id="monitor-layer" aria-live="polite"></div>
          <form class="ask-box hidden" id="ask-box">
            <label id="ask-label" for="ask-input"></label>
            <div class="ask-row">
              <input id="ask-input" autocomplete="off" />
              <button type="submit">确定</button>
            </div>
          </form>
          <div class="overlay" id="overlay">
            <div class="start-card" id="start-card">
              <h2>启动游戏</h2>
              <p>点击后会加载 Mind+ 的 page0 项目、初始化 Scratch VM，并解锁浏览器音频。游戏开始后键盘会直接控制舞台。</p>
              <button class="start" id="start">开始</button>
            </div>
            <div class="loading-card hidden" id="loading-card" role="status" aria-live="polite">
              <h2>正在加载</h2>
              <p id="loading-message">准备初始化 Scratch VM...</p>
              <div class="progress-track" aria-label="加载进度">
                <div class="progress-fill" id="progress-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <section class="guide-board" aria-label="游戏说明">
          <div class="guide-heading">
            <p class="eyebrow">Game Guide</p>
            <h2>《炫广枪战》说明书</h2>
            <p class="guide-intro">从 README 提炼出目标、流程、战斗判定和高频键位，做成能扫读的图解区，而不是纯文字堆叠。</p>
          </div>

          <div class="art-strip" aria-label="原作素材预览">
            <article class="art-card">
              <img src="${logoArt}" alt="《炫广枪战》原始标题素材" loading="lazy" />
              <div>
                <strong>标题素材</strong>
                <span>直接取自项目原始 SVG，用来建立作品辨识度。</span>
              </div>
            </article>
            <article class="art-card">
              <img src="${playerArt}" alt="玩家角色原始立绘" loading="lazy" />
              <div>
                <strong>玩家立绘</strong>
                <span>README 里以 y 表示玩家，这里放原始角色线稿。</span>
              </div>
            </article>
            <article class="art-card">
              <img src="${enemyArt}" alt="电脑角色原始立绘" loading="lazy" />
              <div>
                <strong>敌方立绘</strong>
                <span>README 里以 d 表示电脑，对照阅读会更直观。</span>
              </div>
            </article>
          </div>

          <div class="guide-grid">
            <article class="guide-card guide-card-goal">
              <div class="card-heading">
                <span class="card-index">01</span>
                <div>
                  <h3>通关目标</h3>
                  <p>四项条件同时达成后，才会进入下一轮回。</p>
                </div>
              </div>
              <div class="goal-badges">
                <span class="goal-badge">击败王队长</span>
                <span class="goal-badge">角色满级</span>
                <span class="goal-badge">血量达到 46 级</span>
                <span class="goal-badge">攻速达到 21 级</span>
              </div>
              <div class="tip-strip">
                <span class="tip-pill">上</span>
                <p>若开局压力太大，可先按 <strong>上方向键</strong> 调节难度，再推进挑战。</p>
              </div>
            </article>

            <article class="guide-card guide-card-flow">
              <div class="card-heading">
                <span class="card-index">02</span>
                <div>
                  <h3>界面流程</h3>
                  <p>游戏共有三个主要界面，主界面负责分流到战斗与训练。</p>
                </div>
              </div>
              <div class="flow-map" aria-hidden="true">
                <div class="flow-node is-core">
                  <strong>主界面</strong>
                  <span>升级、查看信息、好友管理</span>
                </div>
                <div class="flow-branch">
                  <div class="flow-arrow"></div>
                  <div class="flow-node">
                    <strong>挑战</strong>
                    <span>进入正式战斗界面</span>
                  </div>
                </div>
                <div class="flow-branch">
                  <div class="flow-arrow"></div>
                  <div class="flow-node">
                    <strong>新夜怪训练场</strong>
                    <span>攻击 / 闪避 / 实战</span>
                  </div>
                </div>
              </div>
              <div class="stage-steps">
                <div class="stage-step">
                  <strong>攻击阶段</strong>
                  <span>击败所有五角星</span>
                </div>
                <div class="stage-step">
                  <strong>闪避阶段</strong>
                  <span>躲过 100 个五角星</span>
                </div>
                <div class="stage-step">
                  <strong>实战阶段</strong>
                  <span>击败训练对手</span>
                </div>
              </div>
            </article>

            <article class="guide-card guide-card-battle">
              <div class="card-heading">
                <span class="card-index">03</span>
                <div>
                  <h3>战斗判定</h3>
                  <p>白色进度条就是血条。上方代表玩家，下方代表电脑，先清空对方血量即获胜。</p>
                </div>
              </div>
              <div class="hud-demo" aria-hidden="true">
                <div class="hud-row">
                  <span>玩家血条</span>
                  <div class="hud-track"><div class="hud-fill is-player"></div></div>
                </div>
                <div class="hud-row">
                  <span>电脑血条</span>
                  <div class="hud-track"><div class="hud-fill is-enemy"></div></div>
                </div>
              </div>
              <div class="legend-list">
                <span><strong>y</strong> 玩家</span>
                <span><strong>d</strong> 电脑</span>
                <span><strong>yz</strong> 玩家招式</span>
                <span><strong>dz</strong> 电脑招式</span>
                <span><strong>qd</strong> 电脑首领</span>
                <span><strong>yb / db</strong> 双方士兵</span>
              </div>
            </article>

            <article class="guide-card guide-card-controls">
              <div class="card-heading">
                <span class="card-index">04</span>
                <div>
                  <h3>键位速览</h3>
                  <p>只选最常用的一批按键做可视化展示，完整细节仍沿用 README 里的原始规则。</p>
                </div>
              </div>
              <div class="control-columns">
                <section class="control-group">
                  <h4>主界面常用</h4>
                  <div class="key-line"><span class="keycap">1</span><span class="keycap">2</span><span class="keycap">3</span><span>升级血量 / 护盾 / 攻速</span></div>
                  <div class="key-line"><span class="keycap">4</span><span class="keycap">5</span><span>子弹数量与技能点</span></div>
                  <div class="key-line"><span class="keycap">R</span><span class="keycap">T</span><span>查看 / 关闭道具</span></div>
                  <div class="key-line"><span class="keycap">Y</span><span class="keycap">U</span><span>五大招式列表开 / 关</span></div>
                  <div class="key-line"><span class="keycap">G</span><span>切换模式</span></div>
                  <div class="key-line"><span class="keycap">←</span><span class="keycap">→</span><span>搜索人物 / 切换人物</span></div>
                </section>
                <section class="control-group">
                  <h4>战斗界面常用</h4>
                  <div class="key-line"><span class="keycap">G</span><span class="keycap">V</span><span class="keycap">C</span><span class="keycap">B</span><span>上下左右移动</span></div>
                  <div class="key-line"><span class="keycap wide">Space</span><span>开枪</span></div>
                  <div class="key-line"><span class="keycap">Z</span><span class="keycap wide">Space</span><span>释放绝招</span></div>
                  <div class="key-line"><span class="keycap">Q</span><span class="keycap">W</span><span class="keycap">E</span><span class="keycap">X</span><span>四类招式</span></div>
                  <div class="key-line"><span class="keycap">K</span><span>召唤好友</span></div>
                  <div class="key-line"><span class="keycap">N</span><span class="keycap">M</span><span>其他招式列表 / 蓄力</span></div>
                </section>
              </div>
              <details class="full-manual">
                <summary>展开完整键位表</summary>
                <div class="manual-grid">
                  <section class="manual-section">
                    <h4>主界面完整键位</h4>
                    <ul class="manual-list">
                      <li><strong>1 / 2 / 3 / 4</strong> 升级血量、护盾防御、攻速、子弹发射数量</li>
                      <li><strong>5 / 6</strong> 查看 / 关闭技能点</li>
                      <li><strong>7 / 8</strong> 打开 / 关闭战斗烦恼名单</li>
                      <li><strong>9 / 10</strong> 打开 / 关闭邀请战斗名单</li>
                      <li><strong>R / T</strong> 查看 / 关闭道具</li>
                      <li><strong>Y / U</strong> 显示列表并升级五大招式 / 关闭五大招式列表</li>
                      <li><strong>D / F</strong> 查看 / 关闭五大招式显示</li>
                      <li><strong>G</strong> 切换模式</li>
                      <li><strong>H / J</strong> 查看 / 关闭优势统计图</li>
                      <li><strong>K / L</strong> 添加好友 / 删除好友</li>
                      <li><strong>X</strong> 签到</li>
                      <li><strong>上 / 下</strong> 查看 / 关闭玩家信息</li>
                      <li><strong>左 / 右</strong> 搜索人物 / 切换人物</li>
                    </ul>
                  </section>
                  <section class="manual-section">
                    <h4>战斗界面完整键位</h4>
                    <ul class="manual-list">
                      <li><strong>1 / 2</strong> 召唤 / 清除 dz</li>
                      <li><strong>3 / 4</strong> 切换 dz</li>
                      <li><strong>Space</strong> 开枪</li>
                      <li><strong>G / V / C / B</strong> 向上 / 向下 / 向左 / 向右移动</li>
                      <li><strong>Z + Space</strong> 释放绝招</li>
                      <li><strong>Q / W / E / X</strong> 使用持攻豆、金光薇、毁灭毒针、炫夜护盾招式</li>
                      <li><strong>Z + X</strong> 使用轰炸匕首招式</li>
                      <li><strong>K</strong> 召唤好友</li>
                      <li><strong>N</strong> 打开其他招式列表并点击释放</li>
                      <li><strong>M</strong> 蓄力</li>
                    </ul>
                  </section>
                </div>
              </details>
            </article>
          </div>
        </section>
      </div>

      <aside class="side">
        <div class="side-heading">
          <p class="eyebrow">Mind+ Web Runtime</p>
          <h1>炫广枪战</h1>
        </div>
        <section class="save-module" aria-label="游戏存档">
          <div class="module-heading">
            <h2>游戏存档</h2>
            <span id="save-status">手动保存，手动加载</span>
          </div>
          <select id="save-slot-select" aria-label="选择存档">
            <option value="">暂无存档</option>
          </select>
          <div class="save-actions">
            <button class="utility-button" id="manual-save" type="button">保存</button>
            <button class="utility-button" id="new-save" type="button">另存</button>
            <button class="utility-button" id="load-save" type="button">加载</button>
            <button class="utility-button" id="copy-save" type="button">复制</button>
            <button class="utility-button" id="rename-save" type="button">改名</button>
            <button class="utility-button" id="export-save" type="button">导出</button>
            <button class="utility-button" id="import-save" type="button">导入</button>
            <button class="utility-button danger" id="delete-save" type="button">删除</button>
          </div>
          <input class="hidden" id="import-save-file" type="file" accept="application/json,.json" />
        </section>
        <div class="controls">
          <span><strong>键盘：</strong>沿用原 Mind+ 项目里的按键脚本</span>
          <span><strong>鼠标：</strong>点击舞台触发角色点击事件</span>
          <span><strong>存档：</strong>浏览器本地手动保存，可导入/导出备份</span>
        </div>
        <p class="status runtime-note" id="status">待启动。首次加载会解析 project.json 和全部角色素材。</p>
      </aside>
    </section>
  </main>
`;

const canvas = document.querySelector<HTMLCanvasElement>('#scratch-stage');
const startButton = document.querySelector<HTMLButtonElement>('#start');
const overlay = document.querySelector<HTMLDivElement>('#overlay');
const startCard = document.querySelector<HTMLDivElement>('#start-card');
const loadingCard = document.querySelector<HTMLDivElement>('#loading-card');
const loadingMessage = document.querySelector<HTMLParagraphElement>('#loading-message');
const progressFill = document.querySelector<HTMLDivElement>('#progress-fill');
const status = document.querySelector<HTMLParagraphElement>('#status');
const saveStatus = document.querySelector<HTMLParagraphElement>('#save-status');
const saveSlotSelect = document.querySelector<HTMLSelectElement>('#save-slot-select');
const manualSaveButton = document.querySelector<HTMLButtonElement>('#manual-save');
const newSaveButton = document.querySelector<HTMLButtonElement>('#new-save');
const loadSaveButton = document.querySelector<HTMLButtonElement>('#load-save');
const copySaveButton = document.querySelector<HTMLButtonElement>('#copy-save');
const renameSaveButton = document.querySelector<HTMLButtonElement>('#rename-save');
const exportSaveButton = document.querySelector<HTMLButtonElement>('#export-save');
const importSaveButton = document.querySelector<HTMLButtonElement>('#import-save');
const importSaveFile = document.querySelector<HTMLInputElement>('#import-save-file');
const deleteSaveButton = document.querySelector<HTMLButtonElement>('#delete-save');
const monitorLayer = document.querySelector<HTMLDivElement>('#monitor-layer');
const askBox = document.querySelector<HTMLFormElement>('#ask-box');
const askLabel = document.querySelector<HTMLLabelElement>('#ask-label');
const askInput = document.querySelector<HTMLInputElement>('#ask-input');

if (
  !canvas ||
  !startButton ||
  !overlay ||
  !startCard ||
  !loadingCard ||
  !loadingMessage ||
  !progressFill ||
  !status ||
  !saveStatus ||
  !saveSlotSelect ||
  !manualSaveButton ||
  !newSaveButton ||
  !loadSaveButton ||
  !copySaveButton ||
  !renameSaveButton ||
  !exportSaveButton ||
  !importSaveButton ||
  !importSaveFile ||
  !deleteSaveButton ||
  !monitorLayer ||
  !askBox ||
  !askLabel ||
  !askInput
) {
  throw new Error('game DOM is incomplete');
}

const stageCanvas = canvas;
const startControl = startButton;
const startOverlay = overlay;
const startPanel = startCard;
const loadingPanel = loadingCard;
const loadingText = loadingMessage;
const progressBar = progressFill;
const statusPanel = status;
const saveStatusPanel = saveStatus;
const saveSlotControl = saveSlotSelect;
const manualSaveControl = manualSaveButton;
const newSaveControl = newSaveButton;
const loadSaveControl = loadSaveButton;
const copySaveControl = copySaveButton;
const renameSaveControl = renameSaveButton;
const exportSaveControl = exportSaveButton;
const importSaveControl = importSaveButton;
const importSaveFileControl = importSaveFile;
const deleteSaveControl = deleteSaveButton;
const monitorsRoot = monitorLayer;
const answerForm = askBox;
const answerLabel = askLabel;
const answerInput = askInput;

let started = false;
let runtime: GameHandle | null = null;
let lastPersistenceStatus: RuntimePersistenceStatus | null = null;

function monitorName(monitor: ScratchMonitor): string {
  return monitor.params?.VARIABLE ?? monitor.params?.LIST ?? monitor.id;
}

function formatMonitorValue(value: unknown): string {
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'number') return Number.isInteger(value) ? String(value) : value.toFixed(2);
  return String(value ?? '');
}

function isListMonitor(monitor: ScratchMonitor): boolean {
  return monitor.mode === 'list' || Array.isArray(monitor.value);
}

function progressForMessage(message: string): number {
  if (message.includes('初始化 Scratch VM')) return 8;
  if (message.includes('配置资源加载器')) return 18;
  if (message.includes('初始化舞台渲染')) return 32;
  if (message.includes('初始化音频')) return 44;
  if (message.includes('读取 Mind+ 项目')) return 62;
  if (message.includes('反序列化')) return 84;
  if (message.includes('启动事件循环')) return 96;
  if (message.includes('已启动')) return 100;
  return 50;
}

function updateLoadingProgress(message: string): void {
  const progress = progressForMessage(message);
  statusPanel.textContent = message;
  loadingText.textContent = message;
  progressBar.style.width = `${progress}%`;
}

function formatSavedAt(savedAt: number | undefined): string {
  if (!savedAt) return '';
  return new Date(savedAt).toLocaleString();
}

function updatePersistenceStatus(status: RuntimePersistenceStatus): void {
  lastPersistenceStatus = status;
  renderSaveSlots();

  if (!status.enabled) {
    saveStatusPanel.textContent = `不可用${status.error ? `：${status.error}` : ''}`;
    return;
  }

  if (status.error) {
    saveStatusPanel.textContent = status.error;
    return;
  }

  const slotName = status.activeSlotName ? `「${status.activeSlotName}」` : '当前存档';
  const savedAt = status.savedAt ? ` · ${formatSavedAt(status.savedAt)}` : '';
  saveStatusPanel.textContent = `${slotName} · ${status.variableCount} 项${savedAt}`;
}

function renderSaveSlots(): void {
  const slots = runtime?.persistence?.listSlots() ?? [];
  const activeSlotId = runtime?.persistence?.getActiveSlotId() ?? lastPersistenceStatus?.activeSlotId ?? '';
  saveSlotControl.innerHTML = '';

  if (slots.length === 0) {
    saveSlotControl.append(new Option('暂无存档', ''));
    saveSlotControl.disabled = true;
    return;
  }

  saveSlotControl.disabled = false;
  for (const slot of slots) {
    const option = new Option(formatSlotLabel(slot), slot.id);
    option.selected = slot.id === activeSlotId;
    saveSlotControl.append(option);
  }
}

function formatSlotLabel(slot: RuntimeSaveSlot): string {
  const time = slot.savedAt ? new Date(slot.savedAt).toLocaleString() : '未保存';
  return `${slot.name} · ${time}`;
}

function selectedSlotId(): string | null {
  return saveSlotControl.value || runtime?.persistence?.getActiveSlotId() || null;
}

function requireRuntime(): GameHandle | null {
  if (runtime) return runtime;
  saveStatusPanel.textContent = '请先启动游戏。';
  return null;
}

function askSaveName(message: string, fallback: string): string | null {
  const name = window.prompt(message, fallback)?.trim();
  return name ? name : null;
}

function exportSelectedSave(): void {
  const handle = requireRuntime();
  const slotId = selectedSlotId();
  if (!handle || !slotId) return;

  const exported = handle.persistence?.exportSlot(slotId);
  if (!exported) {
    saveStatusPanel.textContent = '导出失败：找不到指定存档。';
    return;
  }

  const blob = new Blob([JSON.stringify(exported, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${safeFileName(exported.slot.name)}-${new Date(exported.slot.savedAt).toISOString().slice(0, 19)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importSelectedSave(file: File): Promise<void> {
  const handle = requireRuntime();
  if (!handle) return;

  try {
    const imported = JSON.parse(await file.text()) as {slot?: RuntimeSaveSlot; state?: PersistedRuntimeState} | PersistedRuntimeState;
    const state = 'state' in imported && imported.state ? imported.state : imported as PersistedRuntimeState;
    const fallbackName = 'slot' in imported && imported.slot?.name ? imported.slot.name : file.name.replace(/\.json$/i, '');
    const name = askSaveName('导入为', fallbackName);
    if (!name) return;

    handle.persistence?.importSlot(name, state);
    renderSaveSlots();
  } catch (error) {
    saveStatusPanel.textContent = `导入失败：${error instanceof Error ? error.message : String(error)}`;
  } finally {
    importSaveFileControl.value = '';
  }
}

function safeFileName(name: string): string {
  return name.replace(/[\\/:*?"<>|]/g, '_') || 'save';
}

function monitorTargetId(monitor: ScratchMonitor): string | null {
  if (!runtime) return null;
  if (monitor.targetId) return monitor.targetId;
  if (monitor.spriteName) {
    const target = runtime.vm.runtime.targets?.find((candidate: any) => candidate.sprite?.name === monitor.spriteName);
    return target?.id ?? null;
  }
  return runtime.vm.runtime.getTargetForStage?.()?.id ?? runtime.vm.runtime.targets?.find((target: any) => target.isStage)?.id ?? null;
}

function setMonitorVariableValue(monitor: ScratchMonitor, value: number): boolean {
  if (!runtime || monitor.opcode !== 'data_variable') return false;
  const targetId = monitorTargetId(monitor);
  if (!targetId) return false;
  return Boolean(runtime.vm.setVariableValue(targetId, monitor.id, value));
}

function renderMonitors(monitors: ScratchMonitor[]): void {
  const visibleMonitors = monitors.filter(monitor => monitor.visible !== false);
  monitorsRoot.innerHTML = '';

  for (const monitor of visibleMonitors) {
    const node = document.createElement('div');
    const valueText = formatMonitorValue(monitor.value);
    const longValue = valueText.length > 28;
    node.className = [
      'monitor',
      `monitor-${monitor.mode ?? 'default'}`,
      isListMonitor(monitor) ? 'monitor-list' : '',
      longValue ? 'monitor-long' : ''
    ].filter(Boolean).join(' ');
    node.style.left = `${Math.max(0, Math.min(100, ((monitor.x ?? 5) / 480) * 100))}%`;
    node.style.top = `${Math.max(0, Math.min(100, ((monitor.y ?? 5) / 360) * 100))}%`;
    renderMonitorContent(node, monitor);
    monitorsRoot.append(node);
  }
}

function renderMonitorContent(node: HTMLDivElement, monitor: ScratchMonitor): void {
  const name = document.createElement('span');
  name.className = 'monitor-name';
  name.textContent = monitorName(monitor);
  node.append(name);

  if (isListMonitor(monitor)) {
    const list = document.createElement('div');
    list.className = 'monitor-list-items';
    const items = Array.isArray(monitor.value) ? monitor.value : [];

    if (items.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'monitor-list-row monitor-list-empty';
      empty.textContent = '空';
      list.append(empty);
    } else {
      items.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'monitor-list-row';
        row.textContent = `${index + 1}. ${formatMonitorValue(item)}`;
        list.append(row);
      });
    }

    node.append(list);
    return;
  }

  if (monitor.mode === 'slider') {
    const value = Number(monitor.value ?? 0);
    const min = Number(monitor.sliderMin ?? 0);
    const max = Number(monitor.sliderMax ?? 100);
    const valueWrap = document.createElement('span');
    valueWrap.className = 'monitor-value monitor-slider-value';
    valueWrap.textContent = formatMonitorValue(value);

    const slider = document.createElement('input');
    slider.className = 'monitor-slider-input';
    slider.type = 'range';
    slider.min = String(min);
    slider.max = String(max);
    slider.step = monitor.isDiscrete === false ? '0.01' : '1';
    slider.value = String(Math.max(min, Math.min(max, Number.isFinite(value) ? value : min)));
    slider.addEventListener('input', event => {
      const nextValue = Number((event.currentTarget as HTMLInputElement).value);
      if (!Number.isFinite(nextValue)) return;
      valueWrap.textContent = formatMonitorValue(nextValue);
      setMonitorVariableValue(monitor, nextValue);
    });

    node.append(valueWrap, slider);
    return;
  }

  const value = document.createElement('span');
  value.className = 'monitor-value';
  value.textContent = formatMonitorValue(monitor.value);
  node.append(value);
}

function showQuestion(question: string | null): void {
  if (question === null) {
    answerForm.classList.add('hidden');
    answerInput.value = '';
    stageCanvas.focus();
    return;
  }

  answerLabel.textContent = question || '请输入答案';
  answerForm.classList.remove('hidden');
  answerInput.value = '';
  answerInput.focus();
}

answerForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!runtime) return;
  runtime.vm.runtime.emit('ANSWER', answerInput.value);
  answerForm.classList.add('hidden');
  answerInput.value = '';
  stageCanvas.focus();
});

manualSaveControl.addEventListener('click', () => {
  requireRuntime()?.persistence?.saveNow();
  renderSaveSlots();
});

newSaveControl.addEventListener('click', () => {
  const handle = requireRuntime();
  const name = askSaveName('新存档名称', '手动存档');
  if (!handle || !name) return;
  handle.persistence?.saveAs(name);
  renderSaveSlots();
});

loadSaveControl.addEventListener('click', () => {
  const handle = requireRuntime();
  const slotId = selectedSlotId();
  if (!handle || !slotId) return;
  handle.persistence?.loadSlot(slotId);
  renderSaveSlots();
  stageCanvas.focus();
});

copySaveControl.addEventListener('click', () => {
  const handle = requireRuntime();
  const slotId = selectedSlotId();
  const selectedName = saveSlotControl.selectedOptions[0]?.textContent?.split(' · ')[0] ?? '存档';
  const name = askSaveName('复制为', `${selectedName} 副本`);
  if (!handle || !slotId || !name) return;
  handle.persistence?.duplicate(slotId, name);
  renderSaveSlots();
});

renameSaveControl.addEventListener('click', () => {
  const handle = requireRuntime();
  const slotId = selectedSlotId();
  const selectedName = saveSlotControl.selectedOptions[0]?.textContent?.split(' · ')[0] ?? '存档';
  const name = askSaveName('存档新名称', selectedName);
  if (!handle || !slotId || !name) return;
  handle.persistence?.rename(slotId, name);
  renderSaveSlots();
});

deleteSaveControl.addEventListener('click', () => {
  const handle = requireRuntime();
  const slotId = selectedSlotId();
  if (!handle || !slotId) return;
  if (!window.confirm('确定删除这个存档？此操作不可撤销。')) return;
  handle.persistence?.deleteSlot(slotId);
  renderSaveSlots();
});

exportSaveControl.addEventListener('click', exportSelectedSave);

importSaveControl.addEventListener('click', () => {
  if (!requireRuntime()) return;
  importSaveFileControl.click();
});

importSaveFileControl.addEventListener('change', () => {
  const file = importSaveFileControl.files?.[0];
  if (file) void importSelectedSave(file);
});

saveSlotControl.addEventListener('change', () => {
  const slotId = selectedSlotId();
  if (slotId) saveStatusPanel.textContent = '已选择存档，点击“加载”后生效。';
});

startControl.addEventListener('click', async () => {
  if (started) return;
  started = true;
  startControl.disabled = true;
  startPanel.classList.add('hidden');
  loadingPanel.classList.remove('hidden');
  updateLoadingProgress('加载 Scratch VM 和项目资源...');

  try {
    runtime = await startScratchGame(stageCanvas, {
      onProgress: message => {
        updateLoadingProgress(message);
      },
      onMonitors: renderMonitors,
      onQuestion: showQuestion,
      onPersistenceStatus: updatePersistenceStatus
    });
    updateLoadingProgress('已启动。');
    startOverlay.classList.add('hidden');
    statusPanel.textContent = `已启动 · Scratch 兼容速度：${SCRATCH_COMPATIBILITY_MODE ? '30Hz' : '60Hz'}`;
    renderSaveSlots();
    stageCanvas.focus();
  } catch (error) {
    started = false;
    runtime = null;
    startControl.disabled = false;
    startPanel.classList.remove('hidden');
    loadingPanel.classList.add('hidden');
    progressBar.style.width = '0%';
    statusPanel.textContent = error instanceof Error ? error.stack ?? error.message : String(error);
    console.error(error);
  }
});

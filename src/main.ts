import './style.css';
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

import VirtualMachine from 'scratch-vm';
import ScratchRender from 'scratch-render';
import AudioEngine from 'scratch-audio';
import ScratchSVGRenderer from 'scratch-svg-renderer';
import {Buffer} from 'buffer';
import process from 'process';
import {
  createRuntimePersistence,
  type RuntimePersistenceController,
  type RuntimePersistenceStatus
} from './runtimePersistence';

globalThis.Buffer ??= Buffer;
(globalThis as typeof globalThis & {process?: typeof process}).process ??= process;

type ScratchStorageCtor = new () => {
  AssetType: {
    Project: unknown;
    ImageVector: unknown;
    ImageBitmap: unknown;
    Sound: unknown;
  };
  addWebSource(types: unknown[], getUrl: (asset: {assetId: string; dataFormat: string}) => string): void;
};

export type GameHandle = {
  vm: any;
  persistence: RuntimePersistenceController | null;
  stop: () => void;
};

type StartProgress = (message: string) => void;

export const SCRATCH_COMPATIBILITY_MODE = true;
const SAY_BUBBLE_FALLBACK_MS = 4000;
const RUNTIME_STORAGE_KEY = 'mindplus-web-runtime:炫广枪战:variables:v1';

export type ScratchMonitor = {
  id: string;
  mode?: string;
  opcode?: string;
  params?: Record<string, string>;
  spriteName?: string | null;
  targetId?: string | null;
  value: unknown;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  sliderMin?: number | null;
  sliderMax?: number | null;
  isDiscrete?: boolean | null;
  visible?: boolean;
};

type StartScratchGameOptions = {
  onProgress?: StartProgress;
  onQuestion?: (question: string | null) => void;
  onMonitors?: (monitors: ScratchMonitor[]) => void;
  onPersistenceStatus?: (status: RuntimePersistenceStatus) => void;
};

function withTimeout<T>(label: string, promise: Promise<T>, ms = 20000): Promise<T> {
  let timeout: ReturnType<typeof setTimeout>;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeout = setTimeout(() => {
      reject(new Error(`${label} timed out after ${Math.round(ms / 1000)}s`));
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timeout));
}

async function createStorage(): Promise<InstanceType<ScratchStorageCtor>> {
  const storageModule = await import('scratch-storage');
  const Storage = (storageModule.ScratchStorage ?? storageModule.default ?? storageModule) as ScratchStorageCtor;
  const storage = new Storage();
  const {AssetType} = storage;

  storage.addWebSource([AssetType.Project], () => '/mindplus-project.json');
  storage.addWebSource(
    [AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound],
    asset => `/mindplus-assets/${asset.assetId}.${asset.dataFormat}`
  );

  return storage as InstanceType<ScratchStorageCtor>;
}

function postMouse(vm: any, canvas: HTMLCanvasElement, event: MouseEvent, isDown?: boolean): void {
  if (isMonitorElement(event.target)) return;
  const rect = canvas.getBoundingClientRect();
  vm.postIOData('mouse', {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    canvasWidth: rect.width,
    canvasHeight: rect.height,
    ...(typeof isDown === 'boolean' ? {isDown} : {})
  });
}

function wireInput(vm: any, canvas: HTMLCanvasElement): () => void {
  const postedKeys = new Set<string>();
  const onMouseMove = (event: MouseEvent) => postMouse(vm, canvas, event);
  const onMouseDown = (event: MouseEvent) => {
    canvas.focus();
    postMouse(vm, canvas, event, true);
    event.preventDefault();
  };
  const onMouseUp = (event: MouseEvent) => {
    postMouse(vm, canvas, event, false);
    event.preventDefault();
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (isEditableElement(event.target)) return;
    vm.postIOData('keyboard', {key: event.key, keyCode: event.keyCode, isDown: true});
    postedKeys.add(event.key);
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
      event.preventDefault();
    }
  };
  const onKeyUp = (event: KeyboardEvent) => {
    if (isEditableElement(event.target) && !postedKeys.has(event.key)) return;
    vm.postIOData('keyboard', {key: event.key, keyCode: event.keyCode, isDown: false});
    postedKeys.delete(event.key);
  };

  window.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    canvas.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
  };
}

function isEditableElement(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tagName = target.tagName.toLowerCase();
  return tagName === 'input' || tagName === 'textarea' || tagName === 'select' || target.isContentEditable;
}

function isMonitorElement(target: EventTarget | null): boolean {
  return target instanceof Element && Boolean(target.closest('.monitor'));
}

function normalizeMonitorRecord(record: any): ScratchMonitor {
  if (record?.toJS) return record.toJS() as ScratchMonitor;
  if (record?.toObject) return record.toObject() as ScratchMonitor;
  return record as ScratchMonitor;
}

function normalizeMonitorList(monitorList: any): ScratchMonitor[] {
  if (!monitorList) return [];
  if (Array.isArray(monitorList)) return monitorList.map(normalizeMonitorRecord);
  if (typeof monitorList.valueSeq === 'function') {
    return monitorList.valueSeq().map(normalizeMonitorRecord).toArray() as ScratchMonitor[];
  }
  if (typeof monitorList.toArray === 'function') {
    return monitorList.toArray().map(normalizeMonitorRecord) as ScratchMonitor[];
  }
  return Object.values(monitorList).map(normalizeMonitorRecord);
}

function wireRuntimeEvents(vm: any, options: StartScratchGameOptions): () => void {
  const bubbleTimers = new Map<object, ReturnType<typeof setTimeout>>();
  let questionBubbleActive = false;
  let questionBubbleTarget: object | null = null;
  let lastSayTarget: object | null = null;
  const onQuestion = (question: string | null) => {
    if (question === '') {
      questionBubbleActive = true;
      questionBubbleTarget = lastSayTarget;
      if (questionBubbleTarget) {
        const questionTimer = bubbleTimers.get(questionBubbleTarget);
        if (questionTimer) {
          clearTimeout(questionTimer);
          bubbleTimers.delete(questionBubbleTarget);
        }
      }
    }
    if (question === null) {
      questionBubbleActive = false;
      questionBubbleTarget = null;
    }
    options.onQuestion?.(question);
  };
  const onAnswer = () => {
    questionBubbleActive = false;
    questionBubbleTarget = null;
  };
  const onMonitors = (monitorList: any) => options.onMonitors?.(normalizeMonitorList(monitorList));
  const onSay = (target: object | null, type: string, text: unknown) => {
    if (!target) return;
    lastSayTarget = target;
    const currentTimer = bubbleTimers.get(target);
    if (currentTimer) clearTimeout(currentTimer);

    if (text === '') {
      bubbleTimers.delete(target);
      return;
    }

    if (questionBubbleActive && target === questionBubbleTarget) return;

    const timer = setTimeout(() => {
      bubbleTimers.delete(target);
      vm.runtime.emit('SAY', target, type, '');
    }, SAY_BUBBLE_FALLBACK_MS);
    bubbleTimers.set(target, timer);
  };

  vm.runtime.on('QUESTION', onQuestion);
  vm.runtime.on('ANSWER', onAnswer);
  vm.runtime.on('SAY', onSay);
  vm.on('MONITORS_UPDATE', onMonitors);

  return () => {
    bubbleTimers.forEach(timer => clearTimeout(timer));
    vm.runtime.off?.('QUESTION', onQuestion);
    vm.runtime.off?.('ANSWER', onAnswer);
    vm.runtime.off?.('SAY', onSay);
    vm.off?.('MONITORS_UPDATE', onMonitors);
  };
}

export async function startScratchGame(
  canvas: HTMLCanvasElement,
  optionsOrProgress: StartScratchGameOptions | StartProgress = {}
): Promise<GameHandle> {
  const options = typeof optionsOrProgress === 'function' ? {onProgress: optionsOrProgress} : optionsOrProgress;
  const onProgress = options.onProgress ?? (() => {});
  onProgress('初始化 Scratch VM...');
  const vm = new VirtualMachine();
  vm.setTurboMode(false);
  vm.setCompatibilityMode(SCRATCH_COMPATIBILITY_MODE);

  onProgress('配置资源加载器...');
  const storage = await createStorage();
  vm.attachStorage(storage);

  onProgress('初始化舞台渲染...');
  const renderer = new ScratchRender(canvas);
  vm.attachRenderer(renderer);

  onProgress('初始化音频...');
  const audioEngine = new AudioEngine();
  vm.attachAudioEngine(audioEngine);
  vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter());

  const cleanupInput = wireInput(vm, canvas);
  const cleanupRuntimeEvents = wireRuntimeEvents(vm, options);
  onProgress('读取 Mind+ 项目...');
  const project = await withTimeout('fetch mindplus-project.json', fetch('/mindplus-project.json').then(response => {
    if (!response.ok) throw new Error(`Failed to load project: ${response.status}`);
    return response.json();
  }));

  onProgress('反序列化角色、声音和积木...');
  await withTimeout(
    'Scratch project deserialization',
    vm.deserializeProject({...project, projectVersion: 3}, null)
      .then(() => vm.runtime.handleProjectLoaded()),
    45000
  );

  onProgress('初始化运行时存档模块...');
  const persistence = createRuntimePersistence(vm, {
    storageKey: RUNTIME_STORAGE_KEY,
    onStatus: options.onPersistenceStatus
  });

  options.onMonitors?.(normalizeMonitorList(project.monitors));
  onProgress('启动事件循环...');
  vm.start();
  vm.greenFlag();
  canvas.focus();

  return {
    vm,
    persistence,
    stop: () => {
      persistence.stop();
      vm.stopAll();
      vm.quit();
      cleanupInput();
      cleanupRuntimeEvents();
    }
  };
}

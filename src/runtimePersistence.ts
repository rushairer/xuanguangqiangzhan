type ScratchVariable = {
  name: string;
  type: string;
  value: unknown;
};

type ScratchTarget = {
  id?: string;
  isStage?: boolean;
  sprite?: {name?: string};
  variables?: Record<string, ScratchVariable>;
};

type ScratchVm = {
  runtime?: {
    targets?: ScratchTarget[];
    getTargetForStage?: () => ScratchTarget | null;
  };
};

type PersistedVariable = {
  targetName: string;
  isStage: boolean;
  id: string;
  name: string;
  type: string;
  value: unknown;
};

export type PersistedRuntimeState = {
  version: 1;
  savedAt: number;
  variables: PersistedVariable[];
};

export type RuntimeSaveSlot = {
  id: string;
  name: string;
  savedAt: number;
  variableCount: number;
};

type RuntimeSaveIndex = {
  version: 1;
  activeSlotId: string;
  slots: RuntimeSaveSlot[];
};

export type RuntimePersistenceStatus = {
  enabled: boolean;
  restored: boolean;
  savedAt?: number;
  variableCount: number;
  activeSlotId?: string;
  activeSlotName?: string;
  error?: string;
};

export type RuntimePersistenceController = {
  restore: () => RuntimePersistenceStatus;
  saveNow: () => RuntimePersistenceStatus;
  saveAs: (name: string) => RuntimePersistenceStatus;
  duplicate: (slotId: string, name: string) => RuntimePersistenceStatus;
  rename: (slotId: string, name: string) => RuntimePersistenceStatus;
  deleteSlot: (slotId: string) => RuntimePersistenceStatus;
  loadSlot: (slotId: string) => RuntimePersistenceStatus;
  exportSlot: (slotId: string) => {slot: RuntimeSaveSlot; state: PersistedRuntimeState} | null;
  importSlot: (name: string, state: PersistedRuntimeState) => RuntimePersistenceStatus;
  listSlots: () => RuntimeSaveSlot[];
  getActiveSlotId: () => string | null;
  clear: () => RuntimePersistenceStatus;
  stop: () => void;
  storageKey: string;
};

type RuntimePersistenceOptions = {
  storageKey: string;
  onStatus?: (status: RuntimePersistenceStatus) => void;
};

const RUNTIME_PERSISTENCE_VERSION = 1;
const DEFAULT_SLOT_NAME = '手动存档';
const PERSISTABLE_VARIABLE_TYPES = new Set(['', 'list']);

export function createRuntimePersistence(vm: ScratchVm, options: RuntimePersistenceOptions): RuntimePersistenceController {
  const storageKey = options.storageKey;
  const indexKey = `${storageKey}:index`;
  const onStatus = options.onStatus ?? (() => {});

  const report = (status: RuntimePersistenceStatus) => {
    onStatus(status);
    return status;
  };

  const slotKey = (slotId: string) => `${storageKey}:slot:${slotId}`;

  const readIndex = (): RuntimeSaveIndex => {
    const rawIndex = localStorage.getItem(indexKey);
    if (rawIndex) {
      const index = JSON.parse(rawIndex) as RuntimeSaveIndex;
      if (index.version === RUNTIME_PERSISTENCE_VERSION && Array.isArray(index.slots)) return index;
    }

    return migrateLegacyState(storageKey, slotKey, indexKey);
  };

  const writeIndex = (index: RuntimeSaveIndex) => {
    localStorage.setItem(indexKey, JSON.stringify(index));
  };

  const readState = (slotId: string): PersistedRuntimeState | null => {
    const rawState = localStorage.getItem(slotKey(slotId));
    if (!rawState) return null;
    const state = JSON.parse(rawState) as PersistedRuntimeState;
    return state.version === RUNTIME_PERSISTENCE_VERSION && Array.isArray(state.variables) ? state : null;
  };

  const writeState = (slot: RuntimeSaveSlot, state: PersistedRuntimeState) => {
    localStorage.setItem(slotKey(slot.id), JSON.stringify(state));
  };

  const upsertSlot = (slot: RuntimeSaveSlot, active = true) => {
    const index = readIndex();
    const slots = [slot, ...index.slots.filter(existing => existing.id !== slot.id)];
    writeIndex({
      version: RUNTIME_PERSISTENCE_VERSION,
      activeSlotId: active ? slot.id : index.activeSlotId,
      slots
    });
  };

  const saveToSlot = (slot: RuntimeSaveSlot) => {
    const state = snapshotRuntimeState(vm);
    const nextSlot = {...slot, savedAt: state.savedAt, variableCount: state.variables.length};
    writeState(nextSlot, state);
    upsertSlot(nextSlot);
    return report(statusForSlot(nextSlot, true, true));
  };

  const saveNow = () => {
    try {
      const index = readIndex();
      const activeSlot = index.slots.find(slot => slot.id === index.activeSlotId) ?? createSlot(DEFAULT_SLOT_NAME);
      return saveToSlot(activeSlot);
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const saveAs = (name: string) => {
    try {
      return saveToSlot(createSlot(name.trim() || DEFAULT_SLOT_NAME));
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const restore = () => {
    try {
      const index = readIndex();
      const activeSlot = index.slots.find(slot => slot.id === index.activeSlotId) ?? index.slots[0];
      if (!activeSlot) return report({enabled: true, restored: false, variableCount: 0});
      const state = readState(activeSlot.id);
      if (!state) return report(statusForSlot(activeSlot, false, false, '存档数据不存在'));
      const restoredCount = restoreRuntimeState(vm, state);
      return report({...statusForSlot(activeSlot, restoredCount > 0, false), variableCount: restoredCount});
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const loadSlot = (slotId: string) => {
    try {
      const index = readIndex();
      const slot = index.slots.find(item => item.id === slotId);
      if (!slot) return report({enabled: true, restored: false, variableCount: 0, error: '找不到指定存档'});
      const state = readState(slot.id);
      if (!state) return report(statusForSlot(slot, false, false, '存档数据不存在'));
      const restoredCount = restoreRuntimeState(vm, state);
      writeIndex({...index, activeSlotId: slot.id});
      return report({...statusForSlot(slot, restoredCount > 0, false), variableCount: restoredCount});
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const duplicate = (slotId: string, name: string) => {
    try {
      const index = readIndex();
      const sourceSlot = index.slots.find(slot => slot.id === slotId);
      const sourceState = sourceSlot ? readState(slotId) : null;
      if (!sourceSlot || !sourceState) return report({enabled: true, restored: false, variableCount: 0, error: '找不到可复制的存档'});

      const nextSlot = {
        ...createSlot(name.trim() || `${sourceSlot.name} 副本`),
        savedAt: Date.now(),
        variableCount: sourceState.variables.length
      };
      writeState(nextSlot, {...sourceState, savedAt: nextSlot.savedAt});
      upsertSlot(nextSlot, false);
      return report(statusForSlot(nextSlot, false, false));
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const rename = (slotId: string, name: string) => {
    try {
      const index = readIndex();
      const slots = index.slots.map(slot => slot.id === slotId ? {...slot, name: name.trim() || slot.name} : slot);
      const renamedSlot = slots.find(slot => slot.id === slotId);
      writeIndex({...index, slots});
      return report(renamedSlot ? statusForSlot(renamedSlot, false, false) : {enabled: true, restored: false, variableCount: 0, error: '找不到指定存档'});
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const deleteSlot = (slotId: string) => {
    try {
      const index = readIndex();
      localStorage.removeItem(slotKey(slotId));
      const slots = index.slots.filter(slot => slot.id !== slotId);
      const activeSlotId = index.activeSlotId === slotId ? slots[0]?.id ?? '' : index.activeSlotId;
      writeIndex({version: RUNTIME_PERSISTENCE_VERSION, activeSlotId, slots});
      return report(slots[0] ? statusForSlot(slots[0], false, false) : {enabled: true, restored: false, variableCount: 0});
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const exportSlot = (slotId: string) => {
    const index = readIndex();
    const slot = index.slots.find(item => item.id === slotId);
    const state = slot ? readState(slot.id) : null;
    return slot && state ? {slot, state} : null;
  };

  const importSlot = (name: string, state: PersistedRuntimeState) => {
    try {
      if (state.version !== RUNTIME_PERSISTENCE_VERSION || !Array.isArray(state.variables)) {
        return report({enabled: true, restored: false, variableCount: 0, error: '导入失败：存档格式不兼容'});
      }

      const savedAt = state.savedAt || Date.now();
      const slot = {
        ...createSlot(name.trim() || DEFAULT_SLOT_NAME),
        savedAt,
        variableCount: state.variables.length
      };
      writeState(slot, {...state, savedAt});
      upsertSlot(slot, false);
      return report(statusForSlot(slot, false, false));
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  const listSlots = () => readIndex().slots;
  const getActiveSlotId = () => readIndex().activeSlotId || null;

  const clear = () => {
    try {
      const index = readIndex();
      index.slots.forEach(slot => localStorage.removeItem(slotKey(slot.id)));
      localStorage.removeItem(indexKey);
      localStorage.removeItem(storageKey);
      return report({enabled: true, restored: false, variableCount: 0});
    } catch (error) {
      return report(statusFromError(error));
    }
  };

  return {
    restore,
    saveNow,
    saveAs,
    duplicate,
    rename,
    deleteSlot,
    loadSlot,
    exportSlot,
    importSlot,
    listSlots,
    getActiveSlotId,
    clear,
    stop: () => {},
    storageKey
  };
}

function createSlot(name: string): RuntimeSaveSlot {
  return {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    savedAt: 0,
    variableCount: 0
  };
}

function migrateLegacyState(
  storageKey: string,
  slotKey: (slotId: string) => string,
  indexKey: string
): RuntimeSaveIndex {
  const legacyRaw = localStorage.getItem(storageKey);
  const slots: RuntimeSaveSlot[] = [];
  let activeSlotId = '';

  if (legacyRaw) {
    try {
      const legacyState = JSON.parse(legacyRaw) as PersistedRuntimeState;
      if (legacyState.version === RUNTIME_PERSISTENCE_VERSION && Array.isArray(legacyState.variables)) {
        const slot = createSlot(DEFAULT_SLOT_NAME);
        const migratedSlot = {
          ...slot,
          savedAt: legacyState.savedAt,
          variableCount: legacyState.variables.length
        };
        localStorage.setItem(slotKey(migratedSlot.id), JSON.stringify(legacyState));
        slots.push(migratedSlot);
        activeSlotId = migratedSlot.id;
      }
    } catch {
      // Ignore invalid legacy storage and start fresh.
    }
  }

  const index = {version: RUNTIME_PERSISTENCE_VERSION, activeSlotId, slots} as RuntimeSaveIndex;
  localStorage.setItem(indexKey, JSON.stringify(index));
  return index;
}

function snapshotRuntimeState(vm: ScratchVm): PersistedRuntimeState {
  const variables: PersistedVariable[] = [];

  for (const target of vm.runtime?.targets ?? []) {
    const targetName = target.isStage ? 'Stage' : target.sprite?.name ?? target.id ?? 'unknown';
    for (const [id, variable] of Object.entries(target.variables ?? {})) {
      if (!PERSISTABLE_VARIABLE_TYPES.has(variable.type)) continue;
      variables.push({
        targetName,
        isStage: Boolean(target.isStage),
        id,
        name: variable.name,
        type: variable.type,
        value: clonePersistableValue(variable.value)
      });
    }
  }

  return {
    version: RUNTIME_PERSISTENCE_VERSION,
    savedAt: Date.now(),
    variables
  };
}

function restoreRuntimeState(vm: ScratchVm, state: PersistedRuntimeState): number {
  let restoredCount = 0;

  for (const savedVariable of state.variables) {
    const target = findTarget(vm, savedVariable);
    const variable = target?.variables?.[savedVariable.id] ?? findVariableByName(target, savedVariable);
    if (!variable) continue;

    variable.value = clonePersistableValue(savedVariable.value);
    restoredCount += 1;
  }

  return restoredCount;
}

function findTarget(vm: ScratchVm, variable: PersistedVariable): ScratchTarget | null {
  const targets = vm.runtime?.targets ?? [];
  if (variable.isStage) {
    return vm.runtime?.getTargetForStage?.() ?? targets.find(target => target.isStage) ?? null;
  }

  return targets.find(target => !target.isStage && target.sprite?.name === variable.targetName) ?? null;
}

function findVariableByName(target: ScratchTarget | null | undefined, savedVariable: PersistedVariable): ScratchVariable | null {
  for (const variable of Object.values(target?.variables ?? {})) {
    if (variable.name === savedVariable.name && variable.type === savedVariable.type) return variable;
  }
  return null;
}

function clonePersistableValue(value: unknown): unknown {
  if (Array.isArray(value)) return [...value];
  return value;
}

function statusForSlot(
  slot: RuntimeSaveSlot,
  restored: boolean,
  saved: boolean,
  error?: string
): RuntimePersistenceStatus {
  return {
    enabled: true,
    restored,
    savedAt: slot.savedAt || (saved ? Date.now() : undefined),
    variableCount: slot.variableCount,
    activeSlotId: slot.id,
    activeSlotName: slot.name,
    error
  };
}

function statusFromError(error: unknown): RuntimePersistenceStatus {
  return {
    enabled: false,
    restored: false,
    variableCount: 0,
    error: error instanceof Error ? error.message : String(error)
  };
}

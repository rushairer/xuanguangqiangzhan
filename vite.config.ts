import {defineConfig, type Plugin} from 'vite';
import {existsSync, readdirSync, readFileSync} from 'node:fs';
import {basename, extname, join} from 'node:path';

const assetExtensions = new Set(['.svg', '.wav', '.mp3', '.png', '.jpg', '.jpeg', '.gif', '.bmp']);
const mimeByExt: Record<string, string> = {
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.bmp': 'image/bmp'
};

function adaptMindPlusProject(raw: unknown): string {
  const root = raw as {pageIndex?: number; page0?: unknown; [key: string]: unknown};
  type ScratchBlock = {
    opcode?: string;
    next?: string | null;
    parent?: string | null;
    inputs?: Record<string, unknown[]>;
    fields?: Record<string, unknown[]>;
    shadow?: boolean;
    topLevel?: boolean;
    x?: number;
    y?: number;
  };

  const page = root[`page${root.pageIndex ?? 0}`] as {
    targets?: Array<{
      blocks?: Record<string, ScratchBlock>;
    }>;
    monitors?: unknown[];
    extensions?: string[];
    meta?: unknown;
  };

  if (!page?.targets) {
    throw new Error('project.json does not contain a Mind+ page with targets');
  }

  const project = structuredClone({
    targets: page.targets,
    monitors: page.monitors ?? [],
    extensions: page.extensions ?? [],
    meta: page.meta ?? {semver: '3.0.0', vm: '0.1.0'}
  });

  const opcodeMap: Record<string, string> = {
    'control_loop': 'control_forever',
    'pen.clear': 'pen_clear',
    'pen.penDown': 'pen_penDown',
    'pen.penUp': 'pen_penUp',
    'pen.setPenColorToColor': 'pen_setPenColorToColor',
    'pen.setPenColorParamTo': 'pen_setPenColorParamTo',
    'pen.setPenSizeTo': 'pen_setPenSizeTo',
    'pen.menu.colorParam': 'pen_menu_colorParam',
    'music.getTempo': 'music_getTempo'
  };

  const inputIndex = (name: string, prefix: string) => {
    if (name === prefix) return 1;
    if (!name.startsWith(prefix)) return null;
    const value = Number(name.slice(prefix.length));
    return Number.isFinite(value) ? value : null;
  };

  const rewriteMindPlusIfElseSpecial = (blocks: Record<string, ScratchBlock>, blockId: string, block: ScratchBlock) => {
    const inputs = block.inputs ?? {};
    const branchIndexes = Object.keys(inputs)
      .map(name => inputIndex(name, 'CONDITION'))
      .filter((value): value is number => value !== null)
      .sort((a, b) => a - b)
      .filter(index => inputs[index === 1 ? 'SUBSTACK' : `SUBSTACK${index}`]);

    if (branchIndexes.length === 0) {
      block.opcode = 'control_if';
      return;
    }

    const originalNext = block.next ?? null;
    const originalParent = block.parent ?? null;
    const originalTopLevel = block.topLevel ?? false;
    const originalShadow = block.shadow ?? false;
    const originalX = block.x;
    const originalY = block.y;
    const elseInput = inputs[`SUBSTACK${branchIndexes[branchIndexes.length - 1] + 1}`] ?? null;
    let currentId = blockId;

    for (let position = 0; position < branchIndexes.length; position += 1) {
      const branchIndex = branchIndexes[position];
      const conditionName = branchIndex === 1 ? 'CONDITION' : `CONDITION${branchIndex}`;
      const substackName = branchIndex === 1 ? 'SUBSTACK' : `SUBSTACK${branchIndex}`;
      const isLastBranch = position === branchIndexes.length - 1;
      const nextElseId = isLastBranch ? null : `${blockId}:elseif:${branchIndexes[position + 1]}`;
      const parentId = position === 0 ? originalParent : position === 1 ? blockId : `${blockId}:elseif:${branchIndexes[position - 1]}`;
      const rewritten: ScratchBlock = {
        opcode: 'control_if_else',
        next: position === 0 ? originalNext : null,
        parent: parentId,
        inputs: {
          CONDITION: inputs[conditionName],
          SUBSTACK: inputs[substackName],
          ...(nextElseId ? {SUBSTACK2: [2, nextElseId]} : elseInput ? {SUBSTACK2: elseInput} : {})
        },
        fields: {},
        shadow: position === 0 ? originalShadow : false,
        topLevel: position === 0 ? originalTopLevel : false,
        ...(position === 0 && typeof originalX === 'number' ? {x: originalX} : {}),
        ...(position === 0 && typeof originalY === 'number' ? {y: originalY} : {})
      };

      blocks[currentId] = rewritten;

      const substackId = rewritten.inputs?.SUBSTACK?.[1];
      if (typeof substackId === 'string' && blocks[substackId]) {
        blocks[substackId].parent = currentId;
      }

      if (isLastBranch) {
        const elseId = elseInput?.[1];
        if (typeof elseId === 'string' && blocks[elseId]) {
          blocks[elseId].parent = currentId;
        }
        break;
      }

      const childId = nextElseId as string;
      blocks[childId] = {
        opcode: 'control_if_else',
        next: null,
        parent: currentId,
        inputs: {},
        fields: {},
        shadow: false,
        topLevel: false
      };
      currentId = childId;
    }
  };

  for (const target of project.targets) {
    const blocks = target.blocks ?? {};
    for (const [blockId, block] of Object.entries(blocks)) {
      if (block.opcode === 'control_if_else_special') {
        rewriteMindPlusIfElseSpecial(blocks, blockId, block);
      }
      if (block.opcode && opcodeMap[block.opcode]) {
        block.opcode = opcodeMap[block.opcode];
      }
    }
  }

  return JSON.stringify(project);
}

function mindPlusAssetsPlugin(): Plugin {
  const root = process.cwd();
  const mindPlusSourceDir = join(root, 'mindplus-source');
  const projectPath = join(mindPlusSourceDir, 'project.json');
  const scratchStorageWorkerDir = join(root, 'node_modules/scratch-storage/dist/web/chunks');
  const scratchVmWorkerDir = join(root, 'node_modules/scratch-vm/dist/web');

  const findWorker = (urlPath: string): string | undefined => {
    const file = basename(urlPath.split('?')[0]);

    if (file.startsWith('fetch-worker.') && file.endsWith('.js')) {
      const exact = join(scratchStorageWorkerDir, file);
      if (existsSync(exact)) return exact;

      const fallback = readdirSync(scratchStorageWorkerDir)
        .find(name => name.startsWith('fetch-worker.') && name.endsWith('.js'));
      return fallback ? join(scratchStorageWorkerDir, fallback) : undefined;
    }

    if (file === 'extension-worker.js') {
      const exact = join(scratchVmWorkerDir, file);
      return existsSync(exact) ? exact : undefined;
    }

    return undefined;
  };

  return {
    name: 'mindplus-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();

        if (req.url === '/mindplus-project.json') {
          const raw = JSON.parse(readFileSync(projectPath, 'utf-8'));
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(adaptMindPlusProject(raw));
          return;
        }

        if (req.url.startsWith('/mindplus-assets/')) {
          const file = decodeURIComponent(req.url.slice('/mindplus-assets/'.length).split('?')[0]);
          const ext = extname(file).toLowerCase();
          const path = join(mindPlusSourceDir, file);
          if (assetExtensions.has(ext) && existsSync(path)) {
            res.setHeader('Content-Type', mimeByExt[ext] ?? 'application/octet-stream');
            res.end(readFileSync(path));
            return;
          }
        }

        const workerPath = findWorker(req.url);
        if (workerPath) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
          res.end(readFileSync(workerPath));
          return;
        }

        next();
      });
    },
    generateBundle() {
      const raw = JSON.parse(readFileSync(projectPath, 'utf-8'));
      this.emitFile({
        type: 'asset',
        fileName: 'mindplus-project.json',
        source: adaptMindPlusProject(raw)
      });

      for (const target of raw.page0.targets ?? []) {
        const assets = [...(target.costumes ?? []), ...(target.sounds ?? [])];
        for (const asset of assets) {
          const md5ext = asset.md5ext ?? `${asset.assetId}.${asset.dataFormat}`;
          const path = join(mindPlusSourceDir, md5ext);
          if (!existsSync(path)) continue;
          this.emitFile({
            type: 'asset',
            fileName: `mindplus-assets/${md5ext}`,
            source: readFileSync(path)
          });
        }
      }

      if (existsSync(scratchStorageWorkerDir)) {
        for (const name of readdirSync(scratchStorageWorkerDir)) {
          if (!name.startsWith('fetch-worker.') || !name.endsWith('.js')) continue;
          const source = readFileSync(join(scratchStorageWorkerDir, name));
          this.emitFile({type: 'asset', fileName: name, source});
          this.emitFile({type: 'asset', fileName: `chunks/${name}`, source});
        }
      }

      const extensionWorker = join(scratchVmWorkerDir, 'extension-worker.js');
      if (existsSync(extensionWorker)) {
        this.emitFile({
          type: 'asset',
          fileName: 'extension-worker.js',
          source: readFileSync(extensionWorker)
        });
      }
    }
  };
}

export default defineConfig({
  plugins: [mindPlusAssetsPlugin()],
  define: {
    global: 'globalThis'
  },
  optimizeDeps: {
    include: ['buffer', 'process', 'events']
  },
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser',
      stream: 'stream-browserify'
    }
  }
});

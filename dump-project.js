#!/usr/bin/env node
/**
 * dump-project.js
 * Gera um único TXT com:
 *  - Árvore filtrada do projeto (sem deps/builds/ocultos irrelevantes)
 *  - Conteúdo dos arquivos relevantes (código/config/docs)
 *  - Redação automática de segredos comuns (API_KEY, SECRET, TOKEN, etc.)
 *
 * Uso:
 *   node dump-project.js [pasta_raiz] [arquivo_saida]
 * Ex:
 *   node dump-project.js . project_dump.txt
 */

const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const ROOT = path.resolve(process.argv[2] || '.');
const OUT = path.resolve(process.argv[3] || 'project_dump.txt');

// Limites (ajustáveis por env)
const MAX_FILE_BYTES = parseInt(process.env.DUMP_MAX_FILE_BYTES || '', 10) || 1 * 1024 * 1024; // 1MB por arquivo
const MAX_TOTAL_BYTES = parseInt(process.env.DUMP_MAX_TOTAL_BYTES || '', 10) || 20 * 1024 * 1024; // 20MB total

// Diretórios ignorados
const IGNORE_DIRS = new Set([
  'node_modules', '.git', '.next', '.turbo', '.vercel', '.vscode', '.idea',
  '.cache', '.pnpm-store', 'dist', 'build', 'out', 'coverage', '.DS_Store',
  '.yarn', '.output', '.sst', '.terraform', '.serverless', '.docusaurus',
  'cdk.out', '.nx', '.parcel-cache', '.rollup.cache', 'lib', '.expo',
]);

// Extensões relevantes (código/config/docs)
const CODE_EXT = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
  '.json', '.yml', '.yaml',
  '.md', '.mdx',
  '.css', '.scss', '.sass', '.less',
  '.html',
]);

// Arquivos relevantes por nome
const IMPORTANT_BASENAMES = new Set([
  'pnpm-workspace.yaml', 'turbo.json',
  'package.json', 'pnpm-lock.yaml', 'yarn.lock', 'package-lock.json',
  'tsconfig.json', 'tsconfig.base.json', 'tsconfig.build.json',
  'next.config.js', 'next.config.mjs', 'next.config.ts',
  'eslint.config.js', '.eslintrc', '.eslintrc.js', '.eslintrc.cjs', '.eslintrc.json',
  'prettier.config.js', '.prettierrc', '.prettierrc.js', '.prettierrc.json',
  'tailwind.config.js', 'tailwind.config.ts', 'postcss.config.js',
  'vite.config.ts', 'vite.config.js',
  'jest.config.js', 'jest.config.ts', 'vitest.config.ts', 'vitest.config.js',
  'Dockerfile', 'dockerfile', 'docker-compose.yml', 'docker-compose.yaml',
  'Makefile', 'Procfile',
  'firebase.json', '.firebaserc', 'firestore.rules', 'storage.rules',
  'README.md', 'README.mdx',
  // pastas típicas monorepo
  'apps', 'packages', 'services', 'functions',
]);

// Extensões a excluir (binários/pesados)
const IGNORE_FILE_EXT = new Set([
  '.png','.jpg','.jpeg','.gif','.webp','.avif','.ico','.bmp','.tiff',
  '.mp3','.wav','.flac','.m4a','.ogg','.mp4','.mov','.mkv','.webm',
  '.zip','.tar','.gz','.tgz','.rar','.7z',
  '.pdf','.exe','.dll','.so','.dylib','.wasm',
]);

function isEnvLike(name) {
  const lower = name.toLowerCase();
  return lower === '.env' || lower.startsWith('.env.');
}

function shouldSkipDir(absOrName) {
  const name = path.basename(absOrName);
  if (IGNORE_DIRS.has(name)) return true;
  if (name.startsWith('.')) return true; // ignora dot-dirs em geral
  return false;
}

function isProbablyBinaryByExt(file) {
  const ext = path.extname(file).toLowerCase();
  return IGNORE_FILE_EXT.has(ext);
}

function isRelevantFile(filePath) {
  const base = path.basename(filePath);
  if (isEnvLike(base)) return false;

  const ext = path.extname(base).toLowerCase();
  if (isProbablyBinaryByExt(base)) return false;

  if (CODE_EXT.has(ext)) return true;
  if (IMPORTANT_BASENAMES.has(base)) return true;

  const lower = base.toLowerCase();
  if (['makefile', 'procfile'].includes(lower)) return true;

  return false;
}

// Redação ingênua de segredos (linhas .env e JSON)
function redactSecrets(content, relPath) {
  try {
    const isJSON = relPath.endsWith('.json');
    let out = content;

    // .env / INI-like: KEY=VALUE
    out = out.replace(
      /^([A-Z0-9_]*?(?:KEY|SECRET|TOKEN|PASSWORD|PASS|API|ACCESS|PRIVATE|SESSION|CERT|CREDENTIALS)[A-Z0-9_]*?)\s*=\s*.+$/gim,
      '$1=[REDACTED]'
    );

    // URLs com tokens
    out = out.replace(
      /(https?:\/\/[^\s?&]+[?&](?:token|access_token|auth|signature|sig|key)=[^&\s]+)/gi,
      (m) => m.replace(/(=)[^&\s]+/gi, '$1[REDACTED]')
    );

    // JSON: "key": "value" (para chaves sensíveis)
    if (isJSON) {
      out = out.replace(
        /("(?:(?:api|access|private|secret|token|password|client|auth|session|credential)s?)"[ \t]*:[ \t]*)(?:"[^"]*"|null|true|false|\d+|\{[^\}]*\}|\[[^\]]*\])/gim,
        '$1"[REDACTED]"'
      );
    }

    return out;
  } catch {
    return content;
  }
}

async function buildTree(dir, relBase = '', lines = [], depth = 0) {
  let entries;
  try {
    entries = await fsp.readdir(dir, { withFileTypes: true });
  } catch {
    return lines;
  }
  const sorted = entries
    .filter(e => e.name !== '.' && e.name !== '..')
    .sort((a,b) => (a.isDirectory() === b.isDirectory() ? a.name.localeCompare(b.name) : (a.isDirectory()? -1 : 1)));

  for (const ent of sorted) {
    const abs = path.join(dir, ent.name);
    const rel = path.join(relBase, ent.name);

    if (ent.isDirectory()) {
      if (shouldSkipDir(abs)) continue;
      lines.push(`${'  '.repeat(depth)}📁 ${ent.name}`);
      await buildTree(abs, rel, lines, depth + 1);
    } else if (ent.isFile()) {
      if (isRelevantFile(abs)) {
        lines.push(`${'  '.repeat(depth)}📄 ${ent.name}`);
      }
    }
  }
  return lines;
}

async function walk(dir, relBase = '') {
  let entries;
  try {
    entries = await fsp.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const files = [];
  for (const ent of entries) {
    const abs = path.join(dir, ent.name);
    const rel = path.join(relBase, ent.name);

    if (ent.isDirectory()) {
      if (shouldSkipDir(abs)) continue;
      files.push(...await walk(abs, rel));
    } else if (ent.isFile()) {
      if (isRelevantFile(abs)) files.push({ abs, rel });
    }
  }
  return files;
}

async function main() {
  const treeLines = await buildTree(ROOT);
  const files = await walk(ROOT);

  let out = '';
  const now = new Date().toISOString();
  let totalBytes = 0;

  out += `# PROJECT DUMP\n`;
  out += `Root: ${ROOT}\nGenerated: ${now}\nFiles included (pre-filter): ${files.length}\n`;
  out += `Per-file cap: ${MAX_FILE_BYTES} bytes • Total cap: ${MAX_TOTAL_BYTES} bytes\n`;
  out += `\n=== PROJECT TREE (filtered) ===\n`;
  out += treeLines.join('\n') + '\n';

  for (const { abs, rel } of files) {
    if (totalBytes >= MAX_TOTAL_BYTES) {
      out += `\n\n===== FILE: [LIMIT REACHED] =====\nTotal size cap (${MAX_TOTAL_BYTES} bytes) reached. Remaining files skipped.\n===== END FILE =====\n`;
      break;
    }
    try {
      const stat = await fsp.stat(abs);
      if (stat.size > MAX_FILE_BYTES) {
        out += `\n\n===== FILE: ${rel} (${stat.size} bytes) — SKIPPED (too large) =====\n`;
        continue;
      }
      let content = await fsp.readFile(abs, 'utf8');
      content = content.replace(/\u0000/g, '');
      content = redactSecrets(content, rel);

      const block =
`\n\n===== FILE: ${rel} =====
${content}
===== END FILE: ${rel} =====
`;
      if (totalBytes + Buffer.byteLength(block, 'utf8') > MAX_TOTAL_BYTES) {
        out += `\n\n===== FILE: ${rel} — SKIPPED (total cap would be exceeded) =====\n`;
        continue;
      }
      out += block;
      totalBytes += Buffer.byteLength(block, 'utf8');
    } catch (e) {
      out += `\n\n===== FILE: ${rel} — ERROR READING: ${e.message} =====\n`;
    }
  }

  await fsp.writeFile(OUT, out, 'utf8');
  console.log(`✅ Dump gerado: ${OUT}`);
}

main().catch(err => {
  console.error('Erro:', err);
  process.exit(1);
});

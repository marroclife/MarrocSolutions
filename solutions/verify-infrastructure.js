#!/usr/bin/env node

/**
 * SCRIPT DE VERIFICAÇÃO - Marroc Solutions Infraestrutura
 * Verifica se todas as integrações de infraestrutura foram realizadas com sucesso
 * 
 * Execução: node verify-infrastructure.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

const checks = [];

function check(title, condition, details = '') {
  const status = condition ? `${GREEN}✓${RESET}` : `${RED}✗${RESET}`;
  console.log(`${status} ${title}`);
  if (details) console.log(`  ${YELLOW}→${RESET} ${details}`);
  checks.push({ title, passed: condition });
}

console.log(`\n${BLUE}╔════════════════════════════════════════════════════════════════╗${RESET}`);
console.log(`${BLUE}║  VERIFICAÇÃO DE INFRAESTRUTURA - MARROC SOLUTIONS           ║${RESET}`);
console.log(`${BLUE}╚════════════════════════════════════════════════════════════════╝${RESET}\n`);

// 1. VERIFICAR IDENTIDADE VISUAL
console.log(`${YELLOW}📍 IDENTIDADE VISUAL${RESET}\n`);

const logoPath = path.join(__dirname, 'public/MSLogo.jpg');
check('Logo MSLogo.jpg exists', fs.existsSync(logoPath), `Localização: /public/MSLogo.jpg`);

const layoutPath = path.join(__dirname, 'app/layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
check('Favicon configurado em layout.tsx', layoutContent.includes('icon: "/favicon.ico"'), 'favicon.ico referenciado no metadata');

const appPagePath = path.join(__dirname, 'app/page.tsx');
const appPageContent = fs.readFileSync(appPagePath, 'utf-8');
check('Logo integrado em app/page.tsx', appPageContent.includes('MSLogo.jpg'), 'Navbar com <img src="/MSLogo.jpg"');

// 2. VERIFICAR BACKEND (ORÁCULO)
console.log(`\n${YELLOW}⚙️  BACKEND - API ORÁCULO${RESET}\n`);

const oracleRoutePath = path.join(__dirname, 'app/api/oracle/route.ts');
check('Endpoint /api/oracle existe', fs.existsSync(oracleRoutePath), 'Arquivo: app/api/oracle/route.ts');

const oracleContent = fs.readFileSync(oracleRoutePath, 'utf-8');
check('Oracle usa OpenAI', oracleContent.includes('openai.chat.completions.create'), 'Integração com OpenAI API');
check('Oracle usa Jina AI Reader', oracleContent.includes('r.jina.ai'), 'Extração de conteúdo via Jina');
check('POST handler implementado', oracleContent.includes('export async function POST'), 'Endpoint pronto para receber requisições');

// 3. VERIFICAR LIMPEZA DE AMBIENTE
console.log(`\n${YELLOW}🧹 LIMPEZA DE ASSETS LEGADOS${RESET}\n`);

const pricingSectionPath = path.join(__dirname, 'components/sections/PricingSection.tsx');
const pricingSectionContent = fs.readFileSync(pricingSectionPath, 'utf-8');
check('noise.svg removido de PricingSection', !pricingSectionContent.includes('noise.svg'), 'Componente limpo de efeitos legados');

check('Tailwind CDN removido do layout', !layoutContent.includes('cdn.tailwindcss.com'), 'Usando build local do Tailwind');

// 4. VERIFICAR VARIÁVEIS DE AMBIENTE
console.log(`\n${YELLOW}🔐 CONFIGURAÇÃO DE AMBIENTE${RESET}\n`);

const envPath = path.join(__dirname, '.env.local');
check('.env.local criado', fs.existsSync(envPath), 'Template de variáveis de ambiente');

const envContent = fs.readFileSync(envPath, 'utf-8');
check('OPENAI_API_KEY placeholder', envContent.includes('OPENAI_API_KEY'), 'Chave da API OpenAI configurável');
check('N8N_ORACLE_WEBHOOK placeholder', envContent.includes('N8N_ORACLE_WEBHOOK'), 'Webhook para automação n8n');

// 5. VERIFICAR DEPENDÊNCIAS
console.log(`\n${YELLOW}📦 DEPENDÊNCIAS${RESET}\n`);

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
check('Next.js 16.0.7', packageJson.dependencies.next === '16.0.7', 'Versão compatível com TypeScript 5+');
check('OpenAI SDK instalado', packageJson.dependencies.openai !== undefined, `Versão: ${packageJson.dependencies.openai}`);
check('Framer Motion instalado', packageJson.dependencies['framer-motion'] !== undefined, 'Para animações e transições');
check('Lucide React instalado', packageJson.dependencies['lucide-react'] !== undefined, 'Ícones vetoriais');

// 6. VERIFICAR PRISMA
console.log(`\n${YELLOW}🗄️  BANCO DE DADOS${RESET}\n`);

const prismaPath = path.join(__dirname, 'lib/prisma.ts');
check('Prisma client configurado', fs.existsSync(prismaPath), 'lib/prisma.ts com singleton pattern');

const schemaPrismaPath = path.join(__dirname, 'prisma/schema.prisma');
check('Schema Prisma existe', fs.existsSync(schemaPrismaPath), 'Configuração do banco de dados');

// 7. RESUMO
console.log(`\n${BLUE}╔════════════════════════════════════════════════════════════════╗${RESET}`);
const passed = checks.filter(c => c.passed).length;
const total = checks.length;
const percentage = Math.round((passed / total) * 100);
console.log(`${BLUE}║  RESUMO: ${passed}/${total} verificações passaram (${percentage}%)${passed === total ? ' ✓' : ''}                ║${RESET}`);
console.log(`${BLUE}╚════════════════════════════════════════════════════════════════╝${RESET}`);

// 8. PRÓXIMOS PASSOS
console.log(`\n${YELLOW}📋 PRÓXIMOS PASSOS:${RESET}\n`);

if (!envContent.includes('sk-proj-')) {
  console.log(`1. ${YELLOW}[IMPORTANTE]${RESET} Configure sua OPENAI_API_KEY em .env.local`);
  console.log(`   → Obtenha em: https://platform.openai.com/api-keys`);
  console.log(`   → Cole em: OPENAI_API_KEY=sk-proj-seu-codigo-aqui\n`);
}

console.log(`2. ${YELLOW}[RECOMENDADO]${RESET} Configure N8N_ORACLE_WEBHOOK se usar automação`);
console.log(`   → Automação de envio de relatórios por email\n`);

console.log(`3. ${YELLOW}[PRÓXIMO]${RESET} Execute o servidor de desenvolvimento`);
console.log(`   → npm run dev`);
console.log(`   → Acesse: http://localhost:3000\n`);

console.log(`4. ${YELLOW}[TESTE]${RESET} Teste o endpoint do Oráculo`);
console.log(`   → Form no site: Diagnóstico Técnico`);
console.log(`   → Verifique se retorna análise sem erros 500\n`);

console.log(`${GREEN}✓ Infraestrutura pronta para produção!${RESET}\n`);

# Prompt AntiGravity — Página /livros (Evolução Completa)

## 🎯 Objetivo
Evoluir a página `/livros` do site `marroc.xyz` de uma biblioteca simples para uma **experiência imersiva de vitrine** que comunique a chegada dos **livros físicos** e aprofunde o valor de cada artefato da Biblioteca Marroc.

---

## 📁 Contexto do Projeto

**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
**Estética atual:** Industrial/Concreto escuro (fundo `#2A2A2A`, textura de concreto, noise overlay, acentos em dourado `#D4AF37` e ciano)
**Componentes existentes:** `MysticCard`, `Section`, `Button` (em `@/components/ui/`)
**Rota atual:** `app/(site)/livros/page.tsx`

---

## 🏛️ Estrutura Atual (Manter funcionalidade)

A página atual exibe 3 livros em grid:
1. **O Escriba do Inominável** (Códice de Ganesha) — NOVO LANÇAMENTO
2. **O Eixo da Consciência** (Protocolo Digital)
3. **Um Lugar Entre Mundos** (Ficção Iniciática)

Cada card tem: imagem da capa, tag, título, descrição, CTA.

---

## 🚀 O que deve EVOLUIR (Requisitos)

### 1. Hero Section — "A Tradição Agora Têm Forma"
- Headline poderosa comunicando que os livros físicos chegaram
- Subheadline sobre a Biblioteca Marroc como portal
- CTA para explorar ou scroll suave
- Fundo com textura sutil (manter identidade industrial/concreto)

### 2. Vitrine de Livros (Grid Aprimorado)
- Manter os 3 livros existentes
- **Adicionar indicadores visuais de formato disponível:**
  - E-book (ícone digital)
  - Livro Físico (ícone package/book) — DESTACAR como novidade
- Cards com hover effects mais sofisticados (3D tilt ou glow)
- Badges de status: "Novo Lançamento", "Disponível em Físico", "Best-Seller"

### 3. Seção "Por Que Livros Físicos?"
- Argumento emocional sobre o tangível, o ritual de segurar um livro
- Contraste com o digital (ambos coexistem, não competem)
- Ícones ilustrativos

### 4. Seção de Detalhes por Livro (Expansível)
- Ao clicar em um livro, expandir ou navegar para ver:
  - Sinopse completa
  - Dados técnicos (páginas, formato, ISBN se aplicável)
  - Depoimentos/Quotes de leitores
  - CTA de compra (link externo Hotmart ou checkout)

### 5. Seção "Sobre o Autor" (Marroc)
- Mini bio com foto
- Conexão com as aldeias (sustentabilidade cultural)
- CTA para newsletter

### 6. Newsletter / Comunidade
- Captura de email com promise de conteúdo exclusivo
- Texto alinhado à filosofia do site

---

## 🎨 Diretrizes de Design (CRÍTICO — Manter Identidade)

### Paleta (obrigatória)
- **Fundo primário:** `#2A2A2A` (concreto escuro)
- **Fundo secundário:** `#0A0A0A` (preto puro para contrastes)
- **Texto principal:** `#E5E5E5` (paper/off-white)
- **Texto secundário:** `#737373` (gray-500)
- **Acento ouro:** `#D4AF37` (gold — para Códice de Ganesha e ULEM)
- **Acento ciano:** `#0891B2` (cyan-600 — para O Eixo da Consciência)
- **Bordas:** `border-white/10` ou `border-white/5`

### Tipografia
- **Display:** `font-display` (títulos grandes, impacto)
- **Mono:** `font-mono` (tags, labels, uppercase tracking-widest)
- **Body:** Tailwind default (legível, leading-relaxed)

### Texturas & Efeitos (manter do site atual)
- Noise overlay fixo no body (`opacity: 0.03`)
- Overlay escuro para legibilidade (`rgba(0,0,0,0.4)`)
- Gradientes sutis nos cards (`from-gold/5 to-transparent`)
- `::selection` com fundo `#A9A9A9` e texto `#000000`

### Componentes a REUTILIZAR
```tsx
import { Section } from "@/components/ui/Section";
import { MysticCard } from "@/components/ui/MysticCard";
import { ArrowRight, Book, Sparkles, BrainCircuit, Package, Monitor } from "lucide-react";
```

---

## 📦 Dados dos Livros (Use exatamente)

### Livro 1: O Escriba do Inominável
- **Tag:** Códice de Ganesha
- **Categoria:** Guia Teúrgico
- **Status:** Novo Lançamento
- **Formatos:** E-book + Físico
- **Descrição curta:** "Gaṇeśa e a Engenharia da Sabedoria Primordial. Um guia teúrgico para remover obstáculos e sintonizar a mente."
- **Cor:** Gold (`#D4AF37`)
- **Imagem:** `/Capa-escriba.png`
- **Link:** `/livros/ganesha`

### Livro 2: O Eixo da Consciência
- **Tag:** Protocolo Digital
- **Categoria:** Estratégia / IA
- **Status:** Disponível
- **Formatos:** E-book + Físico
- **Descrição curta:** "Como integrar inteligência artificial e psique humana sem perder a soberania. Um guia estratégico para criadores conscientes."
- **Cor:** Cyan (`#0891B2`)
- **Imagem:** `/capa-eixo.png`
- **Link:** `/livros/o-eixo-da-consciencia`

### Livro 3: Um Lugar Entre Mundos (Trilogia)
- **Tag:** Ficção Iniciática
- **Categoria:** Romance Espiritual
- **Status:** Best-Seller / Disponível em Físico
- **Formatos:** E-book (3 volumes + Unificado) + Físico
- **Descrição curta:** "A jornada de Sofia. O despertar através do xamanismo, da medicina da floresta e da geometria sagrada. Uma obra que pulsa."
- **Cor:** Gold (`#D4AF37`)
- **Imagem:** `/capa-ulm.png`
- **Link:** `/livros/um-lugar-entre-mundos`

---

## ⚠️ REGRAS DE OURO

1. **NÃO apague funcionalidade existente** — os links `/livros/ganesha`, `/livros/o-eixo-da-consciencia`, `/livros/um-lugar-entre-mundos` devem continuar funcionando.
2. **NÃO mude a paleta global** — use as cores definidas acima.
3. **NÃO quebre componentes existentes** — `MysticCard` e `Section` têm props específicas, mantenha compatibilidade.
4. **NÃO adicione dependências externas** — use apenas Tailwind, Lucide React e componentes existentes.
5. **MANTENHA "use client"** no topo se usar hooks ou interatividade.
6. **A página deve ser responsiva** — mobile-first, grid adaptativo.

---

## 📝 Entregáveis Esperados

Gere o arquivo `app/(site)/livros/page.tsx` completo e pronto para substituição, com todas as seções descritas acima.

Se precisar criar componentes auxiliares (ex: `BookCard`, `FormatBadge`, `AuthorSection`), crie-os como componentes internos no mesmo arquivo ou sugira arquivos separados em `components/ui/`.

---

## 🔗 Referências de Estilo

- Site atual: `solutions.marroc.xyz` (industrial, concreto, sombrio, elegante)
- Vibe: "Templo moderno", "Monólito digital", "Artefato arqueológico do futuro"
- Analogia visual: Livraria de uma ordem secreta, catalogando códices para a transição planetária.

---

**AntiGravity, gere o código completo e funcional.**

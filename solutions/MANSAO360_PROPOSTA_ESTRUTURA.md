# 🏛️ Proposta Mansão 360 — Estrutura Visual

## ✅ Página Implementada: `/propostas/mansao-360`

A página profissional da proposta Mansão 360 foi estruturada seguindo a metodologia de apresentação clara, estratégica e visualmente organizada.

---

## 📋 Estrutura da Página

### 1. **Header Sticky** (`HeaderBreadcrumb`)
- Botão de voltar para lista de propostas
- Breadcrumb de navegação
- Design minimalista com backdrop blur

### 2. **Hero Section** (`Mansao360Hero`)
- **Título:** Mansão 360
- **Subtítulo:** Experiência digital imersiva para apresentação institucional
- **CTA Principal:** "Ver Mockup Interativo" com ícone de filme
- Fundo decorativo com efeitos de blur
- Design premium e imersivo

### 3. **Contexto do Projeto** (`Mansao360Contexto`)
- **Card 1:** Tipo de Negócio
  - "Hospedagem / espaço de locação de alto padrão"
- **Card 2:** Desafio Atual
  - Limitações de plataformas tradicionais (Airbnb, PDF)
- **Card 3:** Necessidade
  - Criar base digital própria com controle total
- Layout em 3 colunas (responsivo)

### 4. **Objetivos do Projeto** (`PropostaBlocoObjetivos`)
- ✓ Apresentação visual clara da mansão e seus diferenciais
- ✓ Organização por tipo de serviço (Day Use, Suítes, Eventos, Locação Completa)
- ✓ Direcionamento inteligente para WhatsApp
- ✓ Fortalecimento da presença digital própria e independente
- ✓ Base profissional para crescimento futuro

### 5. **Estrutura Pensada** (`PropostaBlocoEstrutura`)
**Páginas Previstas:**
- Início
- A Mansão
- Day Use
- Suítes
- Eventos
- Locação Completa
- Galeria
- Contato

**Organização:** Por tipos de serviço
**Lógica de Navegação:** Clara e intuitiva com direcionamento para WhatsApp

### 6. **Mockup Interativo** (`Mansao360Mockup`)
- Seção dedicada (ID: `mockup-section`)
- Aviso: "Esta é uma prévia visual do front-end"
- Placeholder para inserção de iframe do mockup
- Informação clara sobre fase de implementação

### 7. **Domínio** (`Mansao360Dominio`)
- **Destaque:** mansao360.com disponível
- **Incluso:** Configuração, hospedagem e SSL
- Ícone de globo
- Design card aprimorado

### 8. **Opções de Implementação** (`Mansao360Opcoes`)
Sistema com toggle entre 2 opções:

#### Opção 1 — Site Institucional (Recomendado)
- **Valor:** R$ 2.800,00
- **Inclui:**
  - Estrutura completa conforme mockup
  - Organização por tipo de serviço
  - Galeria de imagens responsiva
  - Site mobile-first e responsivo
  - Domínio incluso
  - Hospedagem e SSL inclusos
  - Direcionamento inteligente para WhatsApp
  - SEO básico implementado

#### Opção 2 — Versão Simplificada (Landing Page)
- **Valor:** a partir de R$ 1.500,00
- **Inclui:**
  - Página única (landing page)
  - Apresentação visual geral
  - Galeria básica
  - Direcionamento para WhatsApp
  - Responsividade mobile
  - Domínio incluso

### 9. **Visão de Evolução** (`Mansao360Evolucao`)
- **Fase 1:** Site Profissional (atual)
- **Fase 2:** Automação com IA (próxima)
  - Chatbot WhatsApp 24/7
  - Qualificação automática de leads
  - Agendamentos inteligentes

### 10. **Próximo Passo** (`Mansao360ProximoPasso`)
- Convite para análise da proposta
- Lista de pontos de alinhamento:
  - Tirar dúvidas sobre estrutura e prazos
  - Ajustar detalhes conforme necessidade
  - Definir cronograma e forma de pagamento
  - Iniciar desenvolvimento

**CTAs:**
- Botão verde: "Conversar no WhatsApp" (com link integrado)
- Botão secundário: "Enviar Email"

**Nota de Validade:** 30 dias

### 11. **Footer**
- Informações de copyright
- Botão de volta para propostas

---

## 🔐 Sistema de Autenticação

- **Senha:** M360
- **Armazenamento:** localStorage com chave `proposta_auth_mansao-360`
- **Modal de Senha:** `PasswordModal`
- **Comportamento:** Bloqueia página até autenticação bem-sucedida

---

## 🎨 Componentes Criados

1. **Mansao360Hero.tsx** - Hero principal com CTA
2. **Mansao360Contexto.tsx** - Contexto em 3 cards
3. **Mansao360Mockup.tsx** - Seção de mockup
4. **Mansao360Dominio.tsx** - Informações de domínio
5. **Mansao360Opcoes.tsx** - Opções de implementação com toggle
6. **Mansao360Evolucao.tsx** - Visão de evolução (Fases 1 e 2)
7. **Mansao360ProximoPasso.tsx** - Chamada para ação final

---

## 📱 Design Responsivo

- **Desktop:** Layout completo com 3 colunas onde aplicável
- **Tablet:** Grid adaptativo
- **Mobile:** Stack vertical com full-width

### Classes Tailwind Principais
- `max-w-4xl` ou `max-w-5xl` para containers
- `md:grid-cols-` para responsividade
- `bg-white/5` e `border border-white/10` para cards
- `text-neon-green` para destaque de CTA
- `bg-gradient-to-r` para gradientes

---

## 🔗 Integração com Sistema

### Links Internos
- Botão voltar → `/propostas`
- Scroll suave para mockup → `#mockup-section`

### Links Externos
- WhatsApp → Usa `CONTACT.whatsapp` de `lib/constants.ts`
- Mensagem pré-preenchida em UTF-8

---

## 📝 Dados Atualizados

**Arquivo:** `lib/propostas.ts`

```typescript
contexto: {
  tipoDenegocio: "Hospedagem / espaço de locação de alto padrão",
  situacao: "A apresentação da mansão em plataformas tradicionais...",
  necessidadePrincipal: "Organizar digitalmente os serviços..."
}

objetivos: [
  "Apresentação visual clara...",
  "Organização por tipo de serviço...",
  // ... 5 objetivos
]

estrutura: {
  paginas: ["Início", "A Mansão", "Day Use", "Suítes", "Eventos", "Locação Completa", "Galeria", "Contato"],
  organizacao: "Site institucional com navegação por tipos de serviço...",
  logicaNavegacao: "Navegação clara e intuitiva..."
}

visaoEvolucao: {
  faseAtual: ["Site institucional responsivo..."],
  fasePossivel: ["Fase 2: Automação de WhatsApp com IA..."]
}
```

---

## 🎯 Funcionalidades Especiais

### 1. **Toggle de Opções**
Estado local para alternar entre Site Institucional e Landing Page
- Mantém seleção durante navegação
- Cards dinâmicos com valores e features

### 2. **Scroll Suave**
- Botão "Ver Mockup" scrolla para seção `#mockup-section`
- Transição suave com `behavior: smooth`

### 3. **Integração WhatsApp**
- Mensagem pré-preenchida
- URL encoding automático
- Abre em nova aba

### 4. **Indicadores Visuais**
- Badge "Recomendado" para Site Institucional
- Badge "Próxima Fase" para automação com IA
- Ícones de status (CheckCircle2, Star, Zap, etc.)

---

## 📊 Tipografia e Cores

### Tipografia
- **H1 (Hero):** `font-display text-5xl md:text-6xl lg:text-7xl`
- **H2 (Seções):** `font-display text-2xl md:text-3xl`
- **Corpo:** `text-base md:text-lg` com `text-white/80`
- **Destaque:** `text-neon-green`

### Cores
- **Fundo:** `bg-[#050505]`
- **Cards:** `bg-white/5` com `border-white/10`
- **Destaque:** `text-neon-green` / `bg-neon-green/20`
- **Texto:** `text-white` com variações de `/70`, `/60`, `/50`

---

## ✨ Estilo Visual: Premium & Profissional

✅ Sem excesso de texto  
✅ Visual limpo e organizado  
✅ Consistente com Marroc Solutions  
✅ Efeitos decorativos sutis (blur)  
✅ Hierarquia visual clara  
✅ CTAs destacados estrategicamente  

---

## 🚀 Próximos Passos

1. **Substituir URL do WhatsApp** em `lib/constants.ts`
   - Atualize `CONTACT.whatsapp` com número real

2. **Adicionar Mockup**
   - Insira URL do Framer/Figma em `Mansao360Mockup.tsx`
   - Ou utilize iframe do mockup interativo

3. **Adicionar Imagens**
   - Galeria de fotos da mansão em `/public/images/mansao-360/`
   - Se necessário, crie componente para galeria

4. **Testes**
   - Verificar responsividade em mobile/tablet
   - Testar autenticação com senha "M360"
   - Validar links e CTAs

5. **Email de Contato**
   - Integrar formulário ou serviço de email
   - Atualizar `handleEmailClick()` em `Mansao360ProximoPasso.tsx`

---

## 📞 Contatos Configuráveis

**Arquivo:** `lib/constants.ts`

```typescript
export const CONTACT = {
  whatsapp: "5511999999999",        // ← Atualizar
  email: "contato@marrocsolutions.com",
  instagram: "@marrocsolutions",
};
```

---

Generated: 2025-01-24  
Project: Marroc Solutions — Proposta Mansão 360

// lib/cases.ts
// Hub unificado de cases do Marroc Solutions.
// Substitui o antigo lib/propostas.ts (extinto em 03/06/2026).
// Origem: 5 cases SaaS/Autoridade + 3 cases de Saliência Regional.
//
// Categorias:
//   - "software"            → SaaS / Sistemas inteligentes (Axis, R2+B, Guardian's Eye)
//   - "autoridade"          → Design de Autoridade pra profissionais premium
//   - "saliencia-regional"  → Ecossistemas de Autoridade Local (Mr. Imóveis, Total Fit, etc.)
//
// Placeholders de copy marcados com `// PRISMA:` indicam pontos onde
// a copywriter pode intervir sem quebrar a estrutura.

export type CaseCategory = "software" | "autoridade" | "saliencia-regional";

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  year: number;
  category: CaseCategory;
  image: string;
  summary: string[];
  results: string[];
  /** Métrica-âncora pra header do case (ex: "+45% conversão", "180 leads/mês"). */
  headline?: string;
  /** Stack tecnológico usado (opcional, mais útil pra SaaS). */
  stack?: string[];
  /** URL externa do site do cliente (só Saliência Regional). */
  liveUrl?: string;
  /** Notas internas pra equipe / handover. */
  notes?: string;
  /** Case prioritário por obrigação comercial (ex: cliente já pagou). */
  priority?: boolean;
  /** Origem do case antes de virar case (ex: "ex-proposta FUZZION"). */
  origin?: string;
};

// =====================================================================
//  SEÇÃO 1 — INTELIGÊNCIA E SOFTWARE (SaaS / Sistemas)
// =====================================================================

export const CASES_SOFTWARE: CaseStudy[] = [
  {
    slug: "axis-protocol",
    name: "Axis Protocol",
    tagline: "Editorial Intelligence Engine",
    year: 2025,
    category: "software",
    image: "/images/axis-protocol.png",
    headline: "Redução de 70% no tempo de editoração", // PRISMA: confirmar headline
    summary: [
      "Interface de editoração avançada para autores e editoras.",
      "Processamento em tempo real do motor Vyasa Scribe.",
      "Exportação automática para PDF com formatação profissional.",
      "Integração com ecossistema de publicação digital.",
    ],
    results: [
      "Redução de 70% no tempo de editoração",
      "Compatibilidade com múltiplos formatos de saída",
      "Interface intuitiva para usuários não-técnicos",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind"], // PRISMA: revisar stack
    notes: "Backend já com Prisma/migrations. Imagem placeholder.",
  },
  {
    slug: "gerador-r2b",
    name: "Gerador R2+B",
    tagline: "Automação de Contratos e Propostas",
    year: 2025,
    category: "software",
    image: "/images/gerador-r2b.png",
    headline: "De horas pra segundos em propostas técnicas", // PRISMA: confirmar
    summary: [
      "Aplicação para escritórios de engenharia e arquitetura.",
      "Converte dados complexos de escopo em propostas técnicas.",
      "Geração de contratos jurídicos em segundos.",
      "Automação completa de documentos comerciais.",
    ],
    results: [
      "Redução de 80% no tempo de elaboração de propostas",
      "Conformidade legal e técnica garantida",
      "Integração com dados de escopo existentes",
    ],
    stack: ["Next.js", "TypeScript", "PDF generation"], // PRISMA: revisar
  },
  {
    slug: "guardians-eye",
    name: "Guardian's Eye v1.0",
    tagline: "Inteligência em Pipeline de Vendas",
    year: 2025,
    category: "software",
    image: "/images/guardians-eye.png",
    headline: "+45% taxa de fechamento", // PRISMA: confirmar
    summary: [
      "Dashboard operacional de CRM focado em triagem neural.",
      "Visualização da temperatura de leads em tempo real.",
      "Taxa de conversão otimizada através de funil inteligente.",
      "Análise preditiva de oportunidades de vendas.",
    ],
    results: [
      "Aumento de 45% na taxa de fechamento",
      "Redução de 60% em ciclo de vendas",
      "Identificação de leads de alto valor com IA",
    ],
    stack: ["Next.js", "Prisma", "OpenAI", "Realtime"], // PRISMA: revisar
  },
];

// =====================================================================
//  SEÇÃO 2 — DESIGN DE AUTORIDADE (Landing Pages premium)
// =====================================================================

export const CASES_AUTORIDADE: CaseStudy[] = [
  {
    slug: "portfolio-pedro",
    name: "Pedro - Design de Interiores",
    tagline: "Portfólio Premium de Autoridade",
    year: 2025,
    category: "autoridade",
    image: "/images/portfolio-profissionais-pedro.png",
    headline: "65% de conversão pra agendamento", // PRISMA: confirmar
    summary: [
      "Ecossistema digital para designer de interiores de elite.",
      "Showcasing de projetos com galeria visual imersiva.",
      "Design de autoridade com foco em agendamento direto.",
      "Integração com WhatsApp para consultoria de projetos.",
    ],
    results: [
      "Taxa de conversão de 65% para agendamentos",
      "Apresentação visual de alto padrão",
      "Funil otimizado para profissionais premium",
    ],
    liveUrl: undefined, // PRISMA: preencher se houver URL pública
  },
  {
    slug: "portfolio-selma",
    name: "Selma - Estética Home Care",
    tagline: "Ecossistema de Agendamento Premium",
    year: 2025,
    category: "autoridade",
    image: "/images/portfolio-profissionais-selma.png",
    headline: "72% conversão + 3x leads qualificados", // PRISMA: confirmar
    summary: [
      "Plataforma de presença para profissional de estética home care.",
      "Sistema integrado de agendamento online com disponibilidade.",
      "Design elegante focado em conversão de consultas.",
      "Integração com WhatsApp para upsell de serviços.",
    ],
    results: [
      "Taxa de conversão de 72% para agendamentos",
      "Redução de 80% em tempo de marcação manual",
      "Aumento de 3x em leads qualificados",
    ],
    // PRISMA: nota sistêmica — caso Selma Barbosa (Dona Selma) tem
    // tratamento especial e marketing ativo. Não alterar copy sem
    // consultar MEMORY.md (regra de prioridade do sistema).
    notes: "PRIORIDADE SISTÊMICA: Selma Barbosa (Dona Selma). Respeitar regra de tratamento + autonomia em divulgação.",
  },
];

// =====================================================================
//  SEÇÃO 3 — ECOSSISTEMAS DE AUTORIDADE LOCAL (Saliência Regional)
// =====================================================================
// Atualizado em 03/06/2026: cardápio novo (6 cases), todos com site em
// produção via Vercel. Cases anteriores (Serra no Topo, Mansão 360,
// Academia Fuzzion) foram descontinuados do portfólio público — ver
// MEMORY.md para obrigações comerciais pendentes.
//
// ORIGEM DOS CASES: lista enviada por Marroc em 03/06/2026.

export const CASES_SALIENCIA: CaseStudy[] = [
  {
    slug: "mr-imoveis",
    name: "MR Imóveis",
    tagline: "Vitrine Digital Imobiliária de Alta Conversão",
    year: 2026,
    category: "saliencia-regional",
    image: "/cases/mr-imoveis/preview.png",
    headline: "Sua Nova Referência em Imóveis de Luxo em Mangaratiba", // PRISMA: copy do hero do site já bate
    summary: [
      "Curadoria exclusiva de propriedades de luxo em Mangaratiba.",
      "Sofisticação encontra a natureza: posicionamento premium regional.",
      "Consultoria IA integrada pra qualificar leads de alto valor.",
    ],
    results: [
      "Site premium com hero cinematográfico",
      "Botão Consultoria IA: qualificação de leads de alto ticket",
      "WhatsApp flutuante + menu premium",
    ],
    liveUrl: "https://mr-imoveis-premium.vercel.app/", // confirmado 03/06/2026
    origin: "lista Saliência Regional 03/06/2026",
  },
  {
    slug: "frio-costa-verde",
    name: "Frio Costa Verde",
    tagline: "Refrigeração e Climatização Regional",
    year: 2026,
    category: "saliencia-regional",
    image: "/cases/frio-costa-verde/preview.png",
    headline: "Atendimento Imediato na Costa Verde",
    summary: [
      "Mais de uma década vendendo peças originais e prestando manutenção especializada.",
      "Atende residências, pousadas, comércios e restaurantes com agilidade total.",
      "Plataforma de chamados técnicos + e-commerce de peças + diagnóstico remoto.",
    ],
    results: [
      "Estrutura de vendas: Venda de Peças + Diagnóstico Rápido + Solicitar Orçamento",
      "Sistema de chamados técnicos online (Efetuar Chamado Técnico Já)",
      "Atendimento regional: Angra dos Reis e Região, plantão 24h",
    ],
    liveUrl: "https://frio-costa-verde.vercel.app", // confirmado 03/06/2026
    origin: "lista Saliência Regional 03/06/2026",
  },
  {
    slug: "total-fit",
    name: "Total Fit",
    tagline: "Academia de Treinamento Funcional",
    year: 2026,
    category: "saliencia-regional",
    image: "/cases/total-fit/preview.png",
    headline: "A Mudança que Você Precisa",
    summary: [
      "Academia premium de Mangaratiba — posicionamento agressivo de elite fitness.",
      "Equipamentos de última geração + mentores de elite + melhor estrutura em El Ranchito.",
      "Suporte integral domingo a domingo, com localização em Mangaratiba, RJ.",
    ],
    results: [
      "Hero cinematográfico: copy agressivo + visual de impacto",
      "Múltiplos CTAs: Quero Treinar, Começar Agora, Matrícula Expressa",
      "Estrutura completa: Início, Sobre, Modalidades, Estrutura, Planos, Contato",
    ],
    liveUrl: "https://total-fit-seven.vercel.app/", // confirmado 03/06/2026
    origin: "lista Saliência Regional 03/06/2026",
  },
  {
    slug: "auto-escola-amanhecer",
    name: "Auto Escola Amanhecer",
    tagline: "Centro de Formação de Condutores",
    year: 2026,
    category: "saliencia-regional",
    image: "/cases/auto-escola-amanhecer/preview.png",
    headline: "Mais que uma CNH, a confiança para dominar as ruas",
    summary: [
      "Auto escola premium em Mangaratiba com prova social forte (94% aprovados).",
      "Posicionamento emocional: conquista da independência, não só habilitação.",
      "Diferencial geográfico: treine nas belas retas e curvas planas da orla de Mangaratiba.",
    ],
    results: [
      "Headline emocional com gatilho de confiança",
      "Prova social: 94% Aprovados de Primeira | 100% Instrutores Pacientes",
      "CTA direto: Quero começar minha habilitação agora + Avaliar: Estou Pronto?",
      "Atendimento humanizado via chat (Fale com a Aline)",
    ],
    liveUrl: "https://auto-escola-amanhecer.vercel.app", // confirmado 03/06/2026
    origin: "lista Saliência Regional 03/06/2026",
  },
  {
    slug: "brendo-costa-cell",
    name: "Brendo Costa Cell",
    tagline: "Assistência Técnica de Celulares",
    year: 2026,
    category: "saliencia-regional",
    image: "/cases/brendo-costa-cell/preview.png",
    headline: "Seu Celular Parou? Nós Trazemos de Volta à Vida",
    summary: [
      "Assistência técnica especializada em smartphones na Costa Verde (Mangaratiba e região).",
      "Headline memorável + dor específica: areia, água salgada, placa queimada — tudo resolvido.",
      "Diferencial único: Laboratório Online pra acompanhar o conserto em tempo real.",
    ],
    results: [
      "Headline agressivo e memorável: \"Trazemos de Volta à Vida\"",
      "Serviços claros: Reparo Expresso | Garantia Total | Leva e Traz Náutico",
      "CTA principal: Simular Conserto + SOS Celular Molhado (emergência)",
      "SOS flutuante sempre visível + WhatsApp direto",
    ],
    liveUrl: "https://brendo-costa-cell-site.vercel.app/", // confirmado 03/06/2026
    origin: "lista Saliência Regional 03/06/2026",
  },
  {
    slug: "loja-produtos-naturais",
    name: "Sabor da Terra — Armazém",
    tagline: "E-commerce Premium de Saúde Integrativa",
    year: 2026,
    category: "saliencia-regional",
    image: "/cases/loja-produtos-naturais/preview.png",
    headline: "Onde a riqueza da terra encontra a sua saúde e equilíbrio",
    summary: [
      "E-commerce premium de chás, especiarias raras, suplementos, sementes, farinhas e grãos em Mangaratiba.",
      "Repocicionamento de marca: de \"loja\" para \"Armazém\" — identidade de elite, não de varejo.",
      "Herbário botânico exclusivo: cada item vem com seus benefícios desvendados.",
    ],
    results: [
      "Headline cinematográfico com tipografia mista (regular + itálico orgânico)",
      "Hero visual com cards flutuantes de produtos em destaque",
      "Estrutura completa: Início, O Empório, O Herbário, Sobre Nós, carrinho, dark mode",
      "Conversão premium pra público de saúde integrativa e bem-estar",
    ],
    // OBS: projeto migrou de "loja que fechou" para "Sabor da Terra — Armazém"
    // (e-commerce premium ativo com nova identidade visual).
    liveUrl: "https://sabor-da-terra-site-two.vercel.app/", // confirmado 03/06/2026
    origin: "lista Saliência Regional 03/06/2026",
    notes: "Projeto migrou pra marca 'Sabor da Terra — Armazém' com nova identidade visual premium.",
  },
];

// =====================================================================
//  AGREGADOS (usados pela home, portfólio e páginas internas)
// =====================================================================

export const ALL_CASES: CaseStudy[] = [
  ...CASES_SOFTWARE,
  ...CASES_AUTORIDADE,
  ...CASES_SALIENCIA,
];

export const CASES_BY_CATEGORY: Record<CaseCategory, CaseStudy[]> = {
  software: CASES_SOFTWARE,
  autoridade: CASES_AUTORIDADE,
  "saliencia-regional": CASES_SALIENCIA,
};

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return ALL_CASES.find((c) => c.slug === slug);
}

export function getPriorityCases(): CaseStudy[] {
  return ALL_CASES.filter((c) => c.priority);
}

export const CATEGORY_LABELS: Record<CaseCategory, string> = {
  software: "Inteligência e Software",
  autoridade: "Design de Autoridade",
  "saliencia-regional": "Ecossistemas de Autoridade Local",
};

export const CATEGORY_DESCRIPTIONS: Record<CaseCategory, string> = {
  software: "SaaS e Sistemas que automatizam operações complexas com IA e processamento inteligente.",
  autoridade: "Ecossistemas digitais para profissionais premium com foco em conversão e agendamento.",
  "saliencia-regional": "Implementações de Saliência Regional — dominação de mercado local via presença digital estratégica.",
};

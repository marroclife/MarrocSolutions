// ============================================
// EXEMPLO: Como adicionar novos projetos
// Arquivo: lib/propostas.ts
// ============================================

// EXEMPLO 2: E-commerce de Luxo
{
  id: "ecom-joias",
  slug: "ecom-joias",
  titulo: "E-commerce de Joias",
  descricaoBreve: "Plataforma de e-commerce de alto padrão com experiência premium.",
  contexto: {
    tipoDenegocio: "Joalheria de luxo / Joias artesanais de alto valor",
    situacao: "Cliente com presença parcial online, mas sem plataforma que comunicasse qualidade e exclusividade",
    necessidadePrincipal: "Criar ambiente digital que elevasse percepção de marca e facilitasse conversão de clientes VIP",
  },
  objetivos: [
    "Comunicar qualidade e exclusividade das peças",
    "Simplificar jornada de compra de produtos de alto valor",
    "Integrar checkout seguro com múltiplas formas de pagamento",
    "Permitir agendamento de consultoria para peças customizadas",
    "Criar experiência de gallery que mostre detalhes técnicos",
  ],
  mockupUrl: "https://framer.com/...",
  mockupDescricao: "Visualização interativa do layout de produto e checkout.",
  estrutura: {
    paginas: [
      "Home / Coleções",
      "Catálogo de Produtos",
      "Página de Produto (com zoom 360°)",
      "Carrinho",
      "Checkout",
      "Agendamento de Consultoria",
      "Área de Cliente",
    ],
    organizacao: "Hierarquia por tipo de joia (colares, anéis, brincos, pulseiras) + busca avançada por material",
    logicaNavegacao: "Breadcrumb, filtros persistentes, carrinho flutuante",
  },
  visaoEvolucao: {
    faseAtual: [
      "Catálogo responsivo com detalhes de produtos",
      "Checkout com integração de pagamento",
      "Formulário de agendamento",
      "Sistema de favoritos",
    ],
    fasePossivel: [
      "Integração com AR para visualizar joias",
      "Configurador de peças customizadas",
      "Live shopping com consultora",
      "Clube de membros com preview exclusivo",
    ],
  },
}

// ============================================
// EXEMPLO 3: SaaS B2B
{
  id: "saas-crm",
  slug: "saas-crm",
  titulo: "Dashboard CRM",
  descricaoBreve: "Plataforma integrada de gestão de relacionamento com cliente.",
  contexto: {
    tipoDenegocio: "SaaS B2B / CRM de médio porte",
    situacao: "Empresa com produto consolidado mas comunicação de features dispersa e sem apresentação clara da arquitetura",
    necessidadePrincipal: "Criar proposta visual que mostre fluxos, integrações e casos de uso de forma estruturada",
  },
  objetivos: [
    "Explicar arquitetura do CRM de forma visual",
    "Demonstrar fluxo de trabalho típico",
    "Mostrar integrações disponíveis",
    "Listar features principais com contexto de uso",
    "Facilitar decisão de leads B2B",
  ],
  mockupUrl: undefined,
  estrutura: {
    paginas: [
      "Visão Geral / Features",
      "Fluxo de Trabalho",
      "Integrações",
      "Casos de Uso",
      "Pricing (opcional)",
      "Documentação Rápida",
    ],
    organizacao: "Hierarquia por módulo (vendas, suporte, marketing) com ligações entre eles",
    logicaNavegacao: "Menu lateral, destaque de relações entre módulos",
  },
  visaoEvolucao: {
    faseAtual: [
      "Diagramas da arquitetura",
      "Descrição de features por módulo",
      "Lista de integrações",
    ],
    fasePossivel: [
      "Demo interativa do dashboard",
      "Video walkthrough de fluxos",
      "Teste com dados fictícios",
    ],
  },
}

// ============================================
// TEMPLATE VAZIO (copie e cole)
// ============================================

// {
//   id: "",
//   slug: "",
//   titulo: "",
//   descricaoBreve: "",
//   contexto: {
//     tipoDenegocio: "",
//     situacao: "",
//     necessidadePrincipal: "",
//   },
//   objetivos: [
//     "",
//     "",
//   ],
//   mockupUrl: undefined,
//   mockupDescricao: "",
//   estrutura: {
//     paginas: [
//       "",
//       "",
//     ],
//     organizacao: "",
//     logicaNavegacao: "",
//   },
//   visaoEvolucao: {
//     faseAtual: [
//       "",
//       "",
//     ],
//     fasePossivel: [
//       "",
//       "",
//     ],
//   },
// }

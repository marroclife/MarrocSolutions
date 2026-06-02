export interface ProjetoProposal {
  id: string;
  slug: string;
  titulo: string;
  descricaoBreve: string;
  senha: string;
  contexto: {
    tipoDenegocio: string;
    situacao: string;
    necessidadePrincipal: string;
  };
  objetivos: string[];
  mockupUrl?: string;
  mockupDescricao?: string;
  estrutura: {
    paginas: string[];
    organizacao: string;
    logicaNavegacao: string;
  };
  visaoEvolucao: {
    faseAtual: string[];
    fasePossivel?: string[];
  };
}

export const projetos: ProjetoProposal[] = [
  {
    id: "serra-no-topo",
    slug: "serra-no-topo",
    titulo: "Serra no Topo",
    descricaoBreve:
      "Hub de visibilidade e presença digital para negócios da Serra do Piloto",
    senha: "SERRA", // Se precisar de senha, senão removemos a lógica
    contexto: {
      tipoDenegocio: "Comércio Local / Turismo",
      situacao:
        "Negócios locais com excelente potencial mas invisíveis digitalmente para turistas e novos clientes",
      necessidadePrincipal:
        "Criar uma vitrine digital profissional, acessível e focada em conversão para WhatsApp",
    },
    objetivos: [
      "Posicionar a Serra do Piloto no mapa digital",
      "Aumentar a visibilidade de comércios locais",
      "Facilitar o contato direto via WhatsApp",
      "Criar senso de comunidade e autoridade local",
    ],
    mockupUrl: "/serra-no-topo",
    mockupDescricao:
      "Apresentação do conceito 'Hub Digital' com 3 exemplos práticos de aplicação para negócios reais da região.",
    estrutura: {
      paginas: ["Hub Principal", "Agropec", "Padaria & Coisas", "Art-Café"],
      organizacao:
        "Página centralizadora (Hub) que distribui tráfego para páginas dedicadas de cada parceiro",
      logicaNavegacao:
        "Foco total em conversão: Entendeu o valor -> Clicou -> Chamou no WhatsApp",
    },
    visaoEvolucao: {
      faseAtual: [
        "Lançamento do Portal Serra no Topo",
        "Páginas One-Page para os parceiros fundadores",
        "Otimização básica para Google (SEO Local)",
      ],
      fasePossivel: [
        "Expansão para novos comércios",
        "Guia turístico completo da região",
        "Sistema de cupons e promoções cruzadas",
      ],
    },
  },
  {
    id: "mansao-360",
    slug: "mansao-360",
    titulo: "Mansão 360",
    descricaoBreve:
      "Experiência digital imersiva para apresentação institucional",
    senha: "M360",
    contexto: {
      tipoDenegocio:
        "Hospedagem / espaço de locação de alto padrão",
      situacao:
        "A apresentação da mansão em plataformas tradicionais (Airbnb, PDF) limita o controle sobre a narrativa, reduz a visibilidade própria e não permite um posicionamento premium diferenciado",
      necessidadePrincipal:
        "Organizar digitalmente os serviços, apresentar a estrutura da mansão com profissionalismo e criar uma base digital própria fora de plataformas de terceiros",
    },
    objetivos: [
      "Apresentação visual clara da mansão e seus diferenciais",
      "Organização por tipo de serviço (Day Use, Suítes, Eventos, Locação Completa)",
      "Direcionamento inteligente para WhatsApp",
      "Fortalecimento da presença digital própria e independente",
      "Base profissional para crescimento futuro",
    ],
    mockupUrl: "/propostas/mansao-360/mockup",
    mockupDescricao:
      "Esta visualização é um mockup do front-end que demonstra a estrutura, fluxo visual e experiência proposta. Funcionalidades e integrações estarão ativas após implementação.",
    estrutura: {
      paginas: [
        "Início",
        "A Mansão",
        "Day Use",
        "Suítes",
        "Eventos",
        "Locação Completa",
        "Galeria",
        "Contato",
      ],
      organizacao:
        "Site institucional com navegação por tipos de serviço, permitindo que cada tipo de cliente (turista, empresas, eventos) encontre facilmente o que procura",
      logicaNavegacao:
        "Navegação clara e intuitiva com direcionamento estratégico para WhatsApp, garantindo que o cliente possa explorar e sair com a impressão correta sobre a mansão",
    },
    visaoEvolucao: {
      faseAtual: [
        "Site institucional responsivo com estrutura completa",
        "Apresentação visual profissional com galeria de imagens",
        "Direcionamento inteligente para WhatsApp",
      ],
      fasePossivel: [
        "Fase 2: Automação de WhatsApp com IA",
        "Atendimento automatizado 24/7",
        "Qualificação inteligente de leads",
        "Organização automática de agendamentos",
      ],
    },
  },
  {
    id: "academia-fuzzion",
    slug: "academia-fuzzion",
    titulo: "Academia Fuzzion",
    descricaoBreve:
      "Transforme sua academia em uma máquina de atrair alunos todos os dias através de presença digital profissional",
    senha: "FUZZION",
    contexto: {
      tipoDenegocio: "Academia / Treinamento Funcional",
      situacao:
        "Mesmo com uma estrutura física sólida e bons resultados, a academia perde novos alunos diariamente por não ter uma presença digital profissional e estratégica",
      necessidadePrincipal:
        "Criar uma presença digital que não apenas represente a academia, mas que atraia, engaje e converta visitantes em alunos ativos via WhatsApp",
    },
    objetivos: [
      "Atrair novos alunos diariamente pela internet",
      "Converter visitantes em alunos via WhatsApp",
      "Posicionar a academia como referência local em treino funcional",
      "Apresentar planos, horários e diferenciais de forma clara e estratégica",
      "Reduzir dependência de indicação e boca a boca",
    ],
    mockupUrl: "/propostas/academia-fuzzion/mockup",
    mockupDescricao:
      "Veja exatamente como seus futuros alunos irão enxergar sua academia. Esta visualização demonstra a experiência real de navegação, estrutura e conversão proposta.",
    estrutura: {
      paginas: [
        "Home",
        "Sobre",
        "Modalidades",
        "Planos",
        "Horários",
        "Galeria",
        "Contato",
      ],
      organizacao:
        "Landing page estruturada para conduzir o visitante desde o impacto inicial até a decisão de entrar em contato, destacando resultados, diferenciais e planos",
      logicaNavegacao:
        "Fluxo estratégico: impacto visual → prova de resultado → entendimento do método → apresentação dos planos → conversão via WhatsApp",
    },
    visaoEvolucao: {
      faseAtual: [
        "Site institucional responsivo com foco em conversão",
        "Apresentação estratégica de modalidades e planos",
        "Integração direta com WhatsApp",
        "Base sólida para captação contínua de novos alunos",
      ],
      fasePossivel: [
        "Sistema de agendamento de aulas online",
        "Atendimento automatizado via WhatsApp com IA",
        "Área do aluno com treinos personalizados",
        "Sistema de check-in via QR Code",
      ]
    },
  },
  ];

export function obterProjetoPorSlug(slug: string): ProjetoProposal | undefined {
  return projetos.find((p) => p.slug === slug);
}

export function listarTodosProjetos(): ProjetoProposal[] {
  return projetos;
}

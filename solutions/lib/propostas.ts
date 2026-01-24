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
    mockupUrl: undefined,
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
];

export function obterProjetoPorSlug(slug: string): ProjetoProposal | undefined {
  return projetos.find((p) => p.slug === slug);
}

export function listarTodosProjetos(): ProjetoProposal[] {
  return projetos;
}

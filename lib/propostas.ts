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
      "Experiência digital imersiva para apresentação institucional.",
    senha: "M360",
    contexto: {
      tipoDenegocio:
        "Empreendimento de luxo/prestígio que necessita de experiência digital diferenciada",
      situacao:
        "Apresentações tradicionais em PDF ou presenciais limitavam o alcance e não transmitiam a experiência visual do projeto",
      necessidadePrincipal:
        "Criar uma experiência navegável que comunique escala, qualidade e detalhe arquitetônico de forma clara e envolvente",
    },
    objetivos: [
      "Apresentar visualmente o projeto imóvel e seus diferenciais",
      "Permitir navegação por diferentes áreas e serviços",
      "Facilitar entendimento da estrutura arquitetônica",
      "Criar momento de impacto que anteceda conversas comerciais",
      "Disponibilizar ferramenta compartilhável entre stakeholders",
    ],
    mockupUrl: "https://framer.com/projects", // URL de exemplo
    mockupDescricao:
      "Esta visualização é um mockup navegável criado para facilitar o entendimento da estrutura e da experiência proposta. Você pode interagir com as diferentes seções e observar como a navegação se organiza.",
    estrutura: {
      paginas: [
        "Home/Apresentação",
        "Galeria Visual",
        "Detalhes Arquitetônicos",
        "Serviços e Amenidades",
        "Localização e Entorno",
        "Formulário de Interesse",
      ],
      organizacao:
        "Organização por áreas principais do empreendimento, com subnav para detalhes técnicos e comerciais",
      logicaNavegacao:
        "Navegação intuitiva com breadcrumbs, permitindo voltar a qualquer momento e explorar áreas em qualquer ordem",
    },
    visaoEvolucao: {
      faseAtual: [
        "Apresentação visual estática com galerria e textos descritivos",
        "Formulário básico de captura de interesse",
        "Responsividade mobile/tablet completa",
      ],
      fasePossivel: [
        "Incorporação de tour virtual 360° ou vídeos imersivos",
        "Integração com CRM para acompanhar interações",
        "Simulação de diferentes períodos (dia/noite, estações)",
        "Chat em tempo real para dúvidas técnicas",
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

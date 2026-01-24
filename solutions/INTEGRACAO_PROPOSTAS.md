// Sugestão: Adicionar link ao Header.tsx para acesso à Área de Propostas
// 
// Em: components/site/Header.tsx
// Adicione à array NAV:

const NAV: NavItem[] = [
  { href: "/livros", label: "Livros" }, 
  { href: "/guardian", label: "Oráculo" },
  { href: "/projetos", label: "Projetos" },
  { href: "/propostas", label: "Propostas" },  // ← NOVO
  { href: "/rituais", label: "Rituais" },
  { href: "/agenda", label: "Agenda" },
  { href: "/conteudos", label: "Artigos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

// ============================================
// OU: Sugestão para página principal
// 
// Em: app/page.tsx
// Adicione link no Hero ou em uma seção:

<a 
  href="/propostas"
  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors"
>
  <span>Explorar Propostas</span>
  <ArrowRight className="w-4 h-4" />
</a>

// ============================================
// Link útil para colocar em emails/materiais:
// 
// https://solutions.marroc.xyz/propostas
// https://solutions.marroc.xyz/propostas/mansao-360

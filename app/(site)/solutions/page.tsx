// app/(site)/solutions/page.tsx
// Hub do Marroc Solutions dentro de marroc.xyz.
// Substitui o antigo solutions.marroc.xyz (subdomínio extinto em 03/06/2026).
//
// APRESENTAÇÃO DA EMPRESA — não lista cases.
// Cases vivem em /solutions/portfolio (separação intencional Marroc + Prisma).
//
// COPY: aprovada por Prisma em 03/06/2026 (Copy_Home_Final.md).
// Tom: "Engenharia com Alma" — brand soul + ROI agressivo.

import Link from "next/link";
import { ArrowRight, Search, Cpu, Bot, MapPin, Zap, Hexagon } from "lucide-react";

export const metadata = {
  title: "Marroc Solutions — Arquitetura Digital de Alta Performance",
  description:
    "Saliência de entidade, ultra-performance e agentes autônomos. Arquitetura digital de alta performance para negócios que precisam crescer rápido.",
};

const PILLARS = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Saliência de Entidade & SEO",
    valueProp: "Não tente \"aparecer\" no Google. Torne-se a referência absoluta.",
    detail:
      "Dominamos a estrutura para que o algoritmo reconheça você como a autoridade máxima do seu nicho.",
    color: "text-neon-green",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Arquitetura de Ultra-Performance",
    valueProp: "Velocidade não é luxo, é conversão.",
    detail:
      "Sites em Next.js com carregamento < 2s que retêm o usuário e agradam o algoritmo.",
    color: "text-cyan-400",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Agentes Autônomos (IA)",
    valueProp: "Substitua processos manuais por inteligência.",
    detail:
      "IAs que qualificam leads e orquestram fluxos 24/7, liberando você para a estratégia.",
    color: "text-fuchsia-400",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Dominação Regional",
    valueProp: "Saliência Local.",
    detail:
      "Para quem quer ser o dono do seu mercado geográfico, tornando-se a escolha óbvia em cada busca regional.",
    color: "text-yellow-400",
  },
];

const PROCESS = [
  {
    phase: "Diagnóstico",
    subtitle: "A Auditoria",
    description:
      "Raio-X técnico e estratégico. Identificamos os gargalos que estão drenando seu lucro.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    phase: "Arquitetura",
    subtitle: "A Construção",
    description:
      "Design de conversão e infraestrutura enterprise. Onde a copy afiada encontra a performance bruta.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    phase: "Deploy & Iteração",
    subtitle: "A Manifestação",
    description:
      "72h para ir ao ar. A partir daí, medimos, ajustamos e escalamos.",
    icon: <Hexagon className="w-6 h-6" />,
  },
];

const DIFFERENTIALS = [
  {
    title: "Velocidade de Execução",
    desc: "Do briefing ao deploy em 72h.",
  },
  {
    title: "Foco em ROI",
    desc: "Não medimos 'cliques', medimos conversão e crescimento de receita.",
  },
  {
    title: "Acesso ao Arquiteto",
    desc: "Você não fala com um gerente de conta, você fala com quem projeta a solução.",
  },
  {
    title: "Stack Enterprise",
    desc: "Segurança e escala de nível corporativo para negócios que não podem cair.",
  },
];

export default function SolutionsHubPage() {
  return (
    <div className="bg-[#050505] text-white">
      {/* 1. HERO */}
      <section className="relative pt-24 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-deep-emerald/30 via-[#050505] to-[#050505] z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-neon-green mb-4">
            <Hexagon size={20} />
            <span className="font-mono text-xs tracking-widest uppercase">
              Marroc Solutions
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-6 max-w-4xl">
            Arquitetura Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-green">
              de Alta Performance
            </span>
          </h1>
          <p className="font-mono text-paper/60 text-base md:text-lg max-w-2xl border-l border-neon-green/30 pl-4 mb-10">
            Engenharia com alma. Resultado com ROI mensurável.
            <br />
            <strong className="text-white">Onde a complexidade vira conversão.</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5521990387232?text=Quero%20agendar%20um%20diagn%C3%B3stico"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neon-green text-black font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white transition-colors"
            >
              Agendar Diagnóstico <ArrowRight size={14} />
            </a>
            <Link
              href="/solutions/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-neon-green/40 text-neon-green hover:bg-neon-green hover:text-black font-bold uppercase tracking-widest text-xs rounded-lg transition-colors"
            >
              Ver Portfólio
            </Link>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOMOS — Conexão com a home principal
          (evita repetir "Por que consultoria produz música psicodélica?" que
          já está na home de marroc.xyz; aqui o foco é o que o Marroc Solutions
          FAZ com essa complexidade). */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-neon-green text-xs md:text-sm uppercase tracking-widest mb-6">
            // Quem Somos
          </h2>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-paper/90">
            O Marroc Solutions é o <span className="text-white border-b border-neon-green">braço técnico</span> do ecossistema. Enquanto o Labs cultiva frequências, nós cultivamos resultados. Traduzimos a mesma inteligência que orquestra música psicodélica em sites ultra-rápidos, SEO estrutural e automação por IA. O método é o mesmo. <strong className="text-white">O palco agora é o seu negócio.</strong>
          </p>
        </div>
      </section>

      {/* 3. O QUE FAZEMOS — 4 Pilares */}
      <section className="py-20 px-6 border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-neon-green text-xs md:text-sm uppercase tracking-widest mb-12">
            // O Que Fazemos
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-[#171717] to-[#0a0a0a] hover:ring-white/20 transition-all"
              >
                <div className={`${p.color} mb-6`}>{p.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className={`font-mono text-sm uppercase tracking-wide ${p.color} mb-4`}>
                  {p.valueProp}
                </p>
                <p className="text-paper/70 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMO TRABALHAMOS — 3 Etapas */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-neon-green text-xs md:text-sm uppercase tracking-widest mb-12">
            // Como Trabalhamos
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Linha conectora (apenas desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />
            {PROCESS.map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-start text-left"
              >
                <div className="w-24 h-24 rounded-full bg-[#050505] border border-slate-700 flex items-center justify-center mb-6 text-neon-green shadow-xl">
                  {step.icon}
                </div>
                <p className="text-xs font-mono text-paper/40 uppercase tracking-widest mb-1">
                  {step.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.phase}
                </h3>
                <p className="text-paper/70 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POR QUE NÓS — 4 Diferenciais */}
      <section className="py-20 px-6 border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-neon-green text-xs md:text-sm uppercase tracking-widest mb-12">
            // Por Que Nós
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENTIALS.map((d, i) => (
              <div key={i} className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center text-neon-green font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{d.title}</h3>
                <p className="text-sm text-paper/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Pronto para arquitetar sua próxima escala?
          </h2>
          <p className="text-paper/60 text-lg mb-8 max-w-2xl mx-auto">
            Cada case do nosso portfólio começou com um diagnóstico gratuito de 30 minutos.
          </p>
          <a
            href="https://wa.me/5521990387232?text=Quero%20agendar%20um%20diagn%C3%B3stico%20t%C3%A9cnico"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-white transition-colors text-lg"
          >
            Agendar Diagnóstico
          </a>
        </div>
      </section>
    </div>
  );
}

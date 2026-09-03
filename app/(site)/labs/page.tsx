import React from "react";
import Link from "next/link";
import { Music, Heart, BookOpen, Sparkles, Brain, ArrowRight, Zap, ArrowLeft, Waves, Compass } from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { GlowButton } from "@/components/ui/GlowButton";

const TERRITORIES = [
  {
    id: "som",
    title: "Som",
    subtitle: "Som como portal",
    icon: <Music className="w-8 h-8" />,
    color: "fuchsia",
    description:
      "Psytrance autoral, performance ao vivo, instrumentos orgânicos, voz, mantras e sound healing. A música não é apenas som — é engenharia de estados.",
    href: "/musica",
    quote: "Frequência como linguagem. Silêncio como matéria-prima.",
  },
  {
    id: "reconexao",
    title: "Reconexão",
    subtitle: "Não é curar. É te lembrar quem você é.",
    icon: <Heart className="w-8 h-8" />,
    color: "cyan",
    description:
      "Reiki, alinhamento somático, astrologia, Tarot, Runas, cristaloterapia e práticas multidimensionais. Diferentes portas para o mesmo movimento: voltar para si.",
    href: "/terapias",
    quote: "Corpo, campo e frequência em diálogo.",
  },
  {
    id: "sabedoria",
    title: "Sabedoria",
    subtitle: "Tradição viva",
    icon: <BookOpen className="w-8 h-8" />,
    color: "amber",
    description:
      "Ganesha, mantras, geometria sagrada, símbolos e práticas contemplativas. Saberes antigos como tecnologias internas — não como dogmas.",
    href: "/conteudos",
    quote: "A tradição é mapa, não prisão.",
  },
  {
    id: "consciencia",
    title: "Consciência",
    subtitle: "Investigação do estar",
    icon: <Brain className="w-8 h-8" />,
    color: "purple",
    description:
      "Presença, percepção, transe, atenção, fluxo e estados alterados. O eixo conceitual que conecta todos os territórios do laboratório.",
    href: "/sobre",
    quote: "explorar → experimentar → atravessar → integrar",
  },
  {
    id: "obra",
    title: "Obra",
    subtitle: "A Tradição Agora Tem Forma",
    icon: <Sparkles className="w-8 h-8" />,
    color: "gold",
    description:
      "Livros, ficção iniciática, ensaios, textos e manifestações autorais. Da matéria etérea à página física.",
    href: "/livros",
    quote: "Escrever é ritual. Ler é entrada em outro mundo.",
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  fuchsia: {
    text: "text-fuchsia-300",
    border: "border-fuchsia-500/30",
    bg: "bg-fuchsia-950/10",
    glow: "shadow-[0_0_40px_rgba(192,38,211,0.15)]",
  },
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-500/30",
    bg: "bg-cyan-950/10",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.15)]",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-500/30",
    bg: "bg-amber-950/10",
    glow: "shadow-[0_0_40px_rgba(251,191,36,0.15)]",
  },
  purple: {
    text: "text-purple-300",
    border: "border-purple-500/30",
    bg: "bg-purple-950/10",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.15)]",
  },
  gold: {
    text: "text-gold",
    border: "border-gold/30",
    bg: "bg-yellow-950/10",
    glow: "shadow-[0_0_40px_rgba(234,179,8,0.15)]",
  },
};

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-paper overflow-x-hidden font-sans">
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-900/10 blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* --- NAV VOLTAR --- */}
      <nav className="absolute top-0 left-0 w-full p-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 hover:text-white transition uppercase tracking-widest bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
        >
          <ArrowLeft size={14} /> Voltar ao Nexus
        </Link>
      </nav>

      {/* --- HERO --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-20">
        <div className="relative mb-8 animate-in fade-in zoom-in duration-1000">
          <div className="absolute inset-0 bg-purple-600 blur-[100px] opacity-20 rounded-full"></div>
          <div className="relative w-32 h-32 border border-white/20 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Zap className="w-12 h-12 text-purple-400" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-md">
            <span className="text-xs font-mono text-purple-200 tracking-widest uppercase">Uma extensão de @marroc.xyz</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl text-white tracking-tight leading-[0.95] drop-shadow-xl">
            Marroc
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300">Labs</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto leading-relaxed font-display italic">
            Som × Consciência × Experiência
          </p>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Um laboratório onde som, corpo, símbolo, ritual e criação se tornam linguagens para
            investigar a experiência humana.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <GlowButton variant="purple" href="#territorios">
              Explorar Territórios
            </GlowButton>
            <Link
              href="https://instagram.com/marroc.labs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white/90 text-sm font-mono tracking-widest uppercase rounded transition flex items-center justify-center gap-3"
            >
              <Compass size={16} /> Acompanhar no Instagram
            </Link>
          </div>
        </div>
      </section>

      {/* --- FILOSOFIA --- */}
      <section className="relative py-20 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-mono text-purple-400 text-xs uppercase tracking-widest">// Filosofia do Laboratório</h2>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-gray-200">
            Não buscamos respostas prontas.
            <br />
            <span className="text-white">Criamos condições para que você encontre as suas.</span>
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12 font-mono text-sm text-gray-400 leading-relaxed">
            <p>
              <strong className="text-white">Ágape como modo operacional.</strong> Cada prática,
              cada som e cada texto parte do reconhecimento de que o outro é, essencialmente,
              como eu. Não existe hierarquia espiritual aqui — existe encontro.
            </p>
            <p>
              <strong className="text-white">Expansão da Consciência Planetária.</strong> A missão
              é sutil: não converter, mas disponibilizar. Não ensinar, mas lembrar. Cada pessoa
              que desperta um pouco muda o campo ao redor.
            </p>
          </div>
        </div>
      </section>

      {/* --- TERRITÓRIOS --- */}
      <section id="territorios" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-mono text-purple-400 text-xs uppercase tracking-widest">// Cinco Territórios</h2>
            <p className="font-display text-3xl md:text-5xl text-white">Laboratórios de investigação</p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cada território é uma linguagem. Juntos, formam um mapa para quem quer atravessar o
              ruído e chegar mais perto de si.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TERRITORIES.map((t) => {
              const c = colorMap[t.color];
              return (
                <Link
                  key={t.id}
                  href={t.href}
                  className={`group block p-8 rounded-2xl ring-1 ${c.border} ${c.bg} hover:ring-white/30 hover:${c.bg} transition-all ${c.glow}`}
                >
                  <div className={`${c.text} mb-6`}>{t.icon}</div>
                  <p className={`font-mono text-xs uppercase tracking-widest ${c.text} mb-2`}>{t.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform">
                    {t.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{t.description}</p>
                  <p className={`font-serif italic text-sm ${c.text} mb-6 border-l border-white/10 pl-4`}>
                    “{t.quote}”
                  </p>
                  <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${c.text}`}>
                    Acessar <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="relative py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Waves className="w-12 h-12 text-purple-400 mx-auto" />
          <h2 className="font-display text-3xl md:text-5xl text-white">A experimentação começa na escuta</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A Labs não é um destino. É um campo. Quanto mais você entra, mais descobre que já
            estava dentro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <GlowButton variant="purple" href="/musica">
              Ouvir Marroc
            </GlowButton>
            <Link
              href="/terapias"
              className="px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white/90 text-sm font-mono tracking-widest uppercase rounded transition"
            >
              Agendar Reconexão
            </Link>
            <Link
              href="/livros"
              className="px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white/90 text-sm font-mono tracking-widest uppercase rounded transition"
            >
              Explorar Obra
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

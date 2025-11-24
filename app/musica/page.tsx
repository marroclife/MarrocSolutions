import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Play, Music, Mic, Activity, ArrowLeft, Zap, Disc, Headphones, Calendar, Youtube, ExternalLink } from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Marroc | Live Psytrance Ritual",
  description: "Progressive Trance com instrumentos ao vivo e mantras. A pista de dança como templo de transformação.",
};

// CONSTANTES ATUALIZADAS
const VIDEOS = [
  { 
    id: "PXv-ViQn3Os", 
    title: "Live Set: Instrumentos & Mantras", 
    tag: "FULL EXPERIENCE" 
  },
  { 
    id: "4G3P8siK_fg", 
    title: "Abertura Cerimonial", 
    tag: "RITUAL" 
  }
];

const LINKS = {
  youtube: "https://www.youtube.com/@marroc-life",
  spotify: "https://open.spotify.com/artist/74vMSJj7Vy2CzAo1U3x9YY",
  apple: "https://music.apple.com/br/artist/marroc/1562267631"
};

export default function MusicaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-paper selection:bg-fuchsia-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(192,38,211,0.25),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* --- NAV VOLTAR --- */}
      <nav className="absolute top-0 left-0 w-full p-6 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-fuchsia-300 hover:text-white transition uppercase tracking-widest bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
        >
          <ArrowLeft size={14} /> Voltar ao Nexus
        </Link>
      </nav>

      {/* --- 1. HERO: O RITUAL --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        
        {/* Visualizer Effect */}
        <div className="relative mb-8 animate-in fade-in zoom-in duration-1000">
           <div className="absolute inset-0 bg-fuchsia-600 blur-[100px] opacity-30 rounded-full"></div>
           <div className="relative w-32 h-32 border border-white/20 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <Activity className="w-12 h-12 text-fuchsia-400 animate-pulse" />
           </div>
        </div>

        <div className="relative z-10 max-w-5xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-fuchsia-500/30 rounded-full bg-fuchsia-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            <span className="text-xs font-mono text-fuchsia-200 tracking-widest uppercase">
              132 - 142 BPM
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl text-white tracking-tight leading-[0.9] drop-shadow-xl">
            Live Psytrance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-200 to-cyan-300">Ritualístico</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Energia de pista, alma de templo. <br />
            <span className="text-fuchsia-300 font-medium">Beats Eletrônicos</span> + <span className="text-emerald-300 font-medium">Instrumentos Orgânicos</span> + <span className="text-gold font-medium">Voz ao Vivo</span>.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <GlowButton variant="cyan" href="#videos">
              Ver Performance
            </GlowButton>
            <Link 
              href="/contato"
              className="px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white/90 text-sm font-mono tracking-widest uppercase rounded transition flex items-center justify-center gap-3"
            >
              <Calendar size={16} /> Booking / Agenda
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. O CONCEITO --- */}
      <Section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container grid md:grid-cols-3 gap-8">
            <div className="p-6 border-l-2 border-fuchsia-500/40 space-y-4 bg-black/40 rounded-r-xl hover:bg-black/60 transition-colors">
                <Disc className="text-fuchsia-400 w-8 h-8 mb-2 drop-shadow-glow" />
                <h3 className="text-xl font-display text-white">Prog & Psy</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    A base é sólida. Grooves progressivos e psicodélicos desenhados para induzir estados de transe e movimento contínuo.
                </p>
            </div>

            <div className="p-6 border-l-2 border-emerald-500/40 space-y-4 bg-black/40 rounded-r-xl hover:bg-black/60 transition-colors">
                <Music className="text-emerald-400 w-8 h-8 mb-2 drop-shadow-glow" />
                <h3 className="text-xl font-display text-white">Multi-Instrumentista</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    Não é apenas um DJ set. Flautas, percussões e sintetizadores são tocados ao vivo, trazendo a energia do momento presente.
                </p>
            </div>

            <div className="p-6 border-l-2 border-gold/40 space-y-4 bg-black/40 rounded-r-xl hover:bg-black/60 transition-colors">
                <Mic className="text-gold w-8 h-8 mb-2 drop-shadow-glow" />
                <h3 className="text-xl font-display text-white">Voz & Mantra</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    O rezo no meio da pista. Cantos sagrados e mantras são entoados sobre as batidas, elevando a vibração coletiva.
                </p>
            </div>
        </div>
      </Section>

      {/* --- 3. MAIN STAGE (VIDEOS) --- */}
      <section id="videos" className="py-24 container max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">A Experiência</h2>
            <p className="text-gray-400">Registros do campo de batalha espiritual.</p>
        </div>

        {/* Destaque Principal (Live Set Completo) */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(192,38,211,0.15)] group bg-black">
             <div className="absolute top-4 left-4 z-10 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-widest shadow-lg">
                {VIDEOS[0].tag}
             </div>
            <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEOS[0].id}?rel=0&modestbranding=1`}
                title={VIDEOS[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

        {/* Vídeo Secundário (Abertura Cerimonial) */}
        <div className="mt-8">
             <MysticCard className="p-0 overflow-hidden border-white/10 bg-black/60 hover:border-fuchsia-500/30 group">
                 <div className="grid md:grid-cols-2">
                    <div className="relative aspect-video bg-black">
                         <div className="absolute top-4 left-4 z-10 bg-black/80 text-fuchsia-300 text-[10px] font-bold px-3 py-1 rounded border border-fuchsia-500/30 backdrop-blur-sm">
                            {VIDEOS[1].tag}
                         </div>
                        <iframe
                            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                            src={`https://www.youtube-nocookie.com/embed/${VIDEOS[1].id}?rel=0&modestbranding=1`}
                            title={VIDEOS[1].title}
                            allowFullScreen
                        />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-white font-display text-2xl mb-2">{VIDEOS[1].title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            O início da jornada. A invocação das direções e o estabelecimento do campo energético antes da música começar a fluir.
                        </p>
                    </div>
                 </div>
            </MysticCard>
        </div>

        <div className="mt-12 text-center">
            <a 
              href={LINKS.youtube}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-300 transition border-b border-fuchsia-500/30 pb-1"
            >
              <Youtube size={16} /> Ver canal completo no YouTube <ExternalLink size={12} />
            </a>
        </div>
      </section>

      {/* --- 4. MANIFESTO RÁPIDO --- */}
      <section className="py-20 bg-gradient-to-r from-black via-[#1a0b2e] to-black border-y border-white/10">
        <div className="container max-w-4xl text-center space-y-8">
            <Zap className="w-10 h-10 text-fuchsia-500 mx-auto animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                "Música não é entretenimento. É portal. <br />
                No Marroc, a pista de dança é um templo. O público, um círculo sagrado. <br />
                Não estamos aqui apenas para tocar música. Estamos aqui para invocar."
            </p>
            <p className="text-fuchsia-400/60 font-mono text-sm uppercase tracking-widest">
                — Manifesto do Som Ritual
            </p>
        </div>
      </section>

      {/* --- 5. FOOTER CTA (LINKS REAIS) --- */}
      <section className="py-24 text-center">
        <div className="container max-w-2xl">
            <Headphones className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Siga o Artista</h2>
            <p className="text-gray-400 mb-10 text-lg">
                Disponível em todas as plataformas digitais.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href={LINKS.spotify}
                    target="_blank"
                    className="px-8 py-4 bg-[#1DB954] text-black font-bold text-sm uppercase tracking-widest rounded transition hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(29,185,84,0.3)]"
                >
                    <Music size={16} /> Spotify
                </a>
                <a 
                    href={LINKS.apple}
                    target="_blank"
                    className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest rounded transition hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    <Music size={16} /> Apple Music
                </a>
            </div>
            
            <div className="mt-8">
                <Link 
                    href="/contato"
                    className="text-white/50 text-sm hover:text-white transition border-b border-white/10 pb-1"
                >
                    Produtor/Booker? Clique aqui para contato.
                </Link>
            </div>
        </div>
      </section>

    </main>
  );
}
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, BookOpen, Music, Zap, ArrowRight, Star, Lock, Waves, Radio, Monitor, Code } from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Marroc | Arte, Ritual & Código",
  description: "O hub digital de Marroc. Onde o misticismo ancestral encontra a tecnologia sutil.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-paper selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* --- 1. HERO: O NEXUS --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-10 overflow-hidden">
        
        {/* Background FX */}
        <div className="absolute inset-0 bg-[url('/bg-forest.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none" />
        
        {/* Orb Glow Central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Tagline Tech */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-xs font-mono text-white/80 tracking-widest uppercase">
              Protocolo: Misticismo Digital
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1]">
            A Tecnologia Ancestral <br />
            da <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Palavra</span> e do <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-200 to-purple-400">Som</span>.
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Bem-vindo ao limiar. Sou Marroc, e aqui exploramos as fronteiras onde a sabedoria xamânica encontra o futuro digital.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <GlowButton href="/livros/um-lugar-entre-mundos" variant="gold">
              Adquirir o Livro
            </GlowButton>
            <Link 
              href="/musica"
              className="px-8 py-4 text-sm font-mono text-purple-300 border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-400 transition flex items-center justify-center gap-2 rounded-sm uppercase tracking-widest"
            >
              <Music size={16} />
              Ouvir Som Ritual
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. GRID DE PORTAIS (A Navegação) --- */}
      <Section className="relative z-20 -mt-20 pb-24">
        <div className="container">
          
          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* --- CARD 1: O LIVRO (Destaque Principal - Full Width no Mobile, 4 cols no Desktop) --- */}
            <Link href="/livros/um-lugar-entre-mundos" className="col-span-1 md:col-span-6 lg:col-span-4 group">
              <MysticCard className="h-full relative overflow-hidden border-gold/30 bg-gradient-to-br from-black to-[#1a1500]">
                {/* Imagem de Fundo Sutil */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-[url('/capa-ulm.png')] bg-cover bg-center mix-blend-overlay mask-linear-fade" />
                
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[280px]">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-gold/10 rounded-full">
                      <BookOpen className="text-gold w-8 h-8" />
                    </div>
                    <span className="text-xs font-mono text-gold border border-gold/30 px-2 py-1 rounded uppercase">Destaque</span>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-3 group-hover:text-gold transition-colors">
                      Um Lugar Entre Mundos
                    </h3>
                    <p className="text-white/70 text-lg max-w-md leading-relaxed">
                      Não é apenas uma leitura. É um download de consciência. A ficção iniciática que une xamanismo e realidade simulada.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-gold text-sm font-bold tracking-widest uppercase">
                    Iniciar Leitura <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </MysticCard>
            </Link>

            {/* --- CARD 2: MÚSICA (Vertical no Desktop) --- */}
            <Link href="/musica" className="col-span-1 md:col-span-3 lg:col-span-2 group">
              <MysticCard className="h-full border-purple-500/30 hover:bg-purple-900/10 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col h-full justify-between min-h-[280px]">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-purple-500/10 rounded-full">
                      <Music className="text-purple-400 w-8 h-8" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                      Psytrance Ritual
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Onde o mantra encontra o grave. Sets ao vivo com instrumentos orgânicos e síntese digital.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center text-purple-400 text-xs font-bold tracking-widest uppercase">
                    Ouvir Agora <ArrowRight size={12} className="ml-2" />
                  </div>
                </div>
              </MysticCard>
            </Link>

            {/* --- CARD NOVO: MARROC SOLUTIONS --- */}
            <Link href="/marrocsolutions" className="col-span-1 md:col-span-3 group">
              <MysticCard className="h-full border-blue-500/30 hover:bg-blue-900/10 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col h-full justify-between min-h-[220px]">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-full">
                        <Monitor className="text-blue-400 w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl text-white group-hover:text-blue-400 transition-colors">
                        Marroc Solutions
                      </h3>
                    </div>
                    <div className="p-1.5 bg-blue-500/20 rounded border border-blue-500/30">
                        <Code className="text-blue-400 w-4 h-4" />
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    A divisão de tecnologia. Criação de sites de alta performance, automação com IA e design minimalista.
                  </p>
                  <div className="flex items-center text-blue-400 text-xs font-bold tracking-widest uppercase">
                    Acessar Agência <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </MysticCard>
            </Link>

            {/* --- CARD 3: TERAPIAS (Horizontal) --- */}
            <Link href="/rituais" className="col-span-1 md:col-span-3 group">
              <MysticCard className="h-full border-emerald-500/30 hover:bg-emerald-900/10 transition-colors">
                <div className="flex flex-col h-full justify-between min-h-[220px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/10 rounded-full">
                      <Sparkles className="text-emerald-400 w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl text-white group-hover:text-emerald-400 transition-colors">
                      Rituais & Terapias
                    </h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    Atendimentos individuais para reconexão. Astrologia, Tarot e Alinhamento Energético para sua jornada.
                  </p>
                  <div className="flex items-center text-emerald-400 text-xs font-bold tracking-widest uppercase">
                    Ver Serviços <ArrowRight size={12} className="ml-2" />
                  </div>
                </div>
              </MysticCard>
            </Link>

            {/* --- CARD 4: HIGHER HZ (Expandido para Full Width) --- */}
            <div className="col-span-1 md:col-span-6 relative group cursor-default">
               <Link href="/higher-hz" className="block h-full">
                <MysticCard className="h-full border-blue-500/30 hover:bg-blue-900/10 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 h-full">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-full">
                          <Radio className="text-blue-400 w-6 h-6" />
                        </div>
                        <h3 className="font-display text-2xl text-white group-hover:text-blue-400 transition-colors">
                          Higher Hz
                        </h3>
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                        Projeto de frequências sonoras e expansão coletiva. A ciência da vibração aplicada à cura.
                      </p>
                    </div>
                    <div className="flex items-center text-blue-400 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                      Conhecer Projeto <ArrowRight size={12} className="ml-2" />
                    </div>
                  </div>
                </MysticCard>
               </Link>
            </div>

            {/* --- CARD 5: O GUARDIÃO (Bloqueado/Hype) --- */}
            <div className="col-span-1 md:col-span-6 relative group cursor-not-allowed">
              {/* Camada de Bloqueio */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center p-4 border border-white/5 rounded-xl">
                <Lock className="text-tech-cyan/50 w-8 h-8 mb-2" />
                <p className="text-tech-cyan font-mono text-sm tracking-widest uppercase animate-pulse">
                  [ SISTEMA EM COMPILAÇÃO ]
                </p>
                <p className="text-white/40 text-xs mt-2">
                  O Oráculo está processando a sabedoria ancestral...
                </p>
              </div>

              {/* Card Fundo (Visual Tech) */}
              <MysticCard className="h-full border-tech-cyan/20 opacity-40">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-tech-cyan/10 rounded-full">
                    <Zap className="text-tech-cyan w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-display text-2xl text-white mb-2">O Guardião</h3>
                <p className="text-sm text-white/60">
                  Inteligência Artificial Mística.
                </p>
              </MysticCard>
            </div>

          </div>
        </div>
      </Section>

      {/* --- 3. QUEM SOU EU (RESUMO) --- */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Imagem Estilizada */}
            <div className="w-full md:w-1/3 relative group">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/autor.png" 
                  alt="Marroc" 
                  width={400} 
                  height={500} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <span className="text-xs font-mono text-gold tracking-widest">MARROC</span>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl text-white">
                O Artífice
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Sou Marcio Rocha — no palco e no rito, me chamam Marroc. 
                Minha missão é criar pontes. Pontes entre a espiritualidade antiga e a vida moderna. Pontes entre o som da floresta e o código do computador.
              </p>
              <div className="pt-4">
                <Link 
                  href="/sobre" 
                  className="text-gold hover:text-white border-b border-gold hover:border-white transition-colors pb-1 font-mono text-sm uppercase tracking-widest"
                >
                  Ler biografia completa
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. NEWSLETTER --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container relative z-10 max-w-2xl text-center space-y-8">
          <Star className="text-white/30 w-8 h-8 mx-auto animate-pulse" />
          
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Entre na Frequência
          </h2>
          <p className="text-white/60">
            Receba o aviso quando o <strong>Guardião despertar</strong>, convites para rituais e lançamentos de capítulos.
          </p>

          <form action="/api/subscribe" method="POST" className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              name="email"
              placeholder="seu@email.com" 
              className="flex-1 bg-white/5 border border-white/10 rounded px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              required
            />
            <button type="submit" className="bg-white text-black px-8 py-4 font-bold rounded hover:bg-gold transition-colors">
              ASSINAR
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
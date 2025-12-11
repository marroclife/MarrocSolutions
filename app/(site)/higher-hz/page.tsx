"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mic, Disc, Sparkles, Brain, Users, ArrowLeft, Star, Hexagon, Sliders, Layers, Music as MusicIcon, Dices, RefreshCw } from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Section } from "@/components/ui/Section";

// Dados dos 22 Arcanos para o Sorteio
const ARCANOS = [
  { id: 0, name: "The Fool", meaning: "Início, Salto de Fé, Potencial Infinito" },
  { id: 1, name: "The Magician", meaning: "Manifestação, Poder, Ação" },
  { id: 2, name: "The High Priestess", meaning: "Intuição, Mistério, Subconsciente" },
  { id: 3, name: "The Empress", meaning: "Criação, Natureza, Abundância" },
  { id: 4, name: "The Emperor", meaning: "Estrutura, Autoridade, Ordem" },
  { id: 5, name: "The Hierophant", meaning: "Tradição, Ensino, Espiritualidade" },
  { id: 6, name: "The Lovers", meaning: "Escolhas, União, Harmonia" },
  { id: 7, name: "The Chariot", meaning: "Vontade, Vitória, Determinação" },
  { id: 8, name: "Strength", meaning: "Coragem, Compaixão, Força Interior" },
  { id: 9, name: "The Hermit", meaning: "Introspecção, Guia Interior, Solidão" },
  { id: 10, name: "Wheel of Fortune", meaning: "Ciclos, Destino, Mudança" },
  { id: 11, name: "Justice", meaning: "Verdade, Causa e Efeito, Equilíbrio" },
  { id: 12, name: "The Hanged Man", meaning: "Nova Perspectiva, Pausa, Sacrifício" },
  { id: 13, name: "Death", meaning: "Transformação, Fim, Renascimento" },
  { id: 14, name: "Temperance", meaning: "Alquimia, Paciência, Moderação" },
  { id: 15, name: "The Devil", meaning: "Sombra, Apego, Materialismo" },
  { id: 16, name: "The Tower", meaning: "Ruptura, Revelação, Despertar Súbito" },
  { id: 17, name: "The Star", meaning: "Esperança, Inspiração, Cura" },
  { id: 18, name: "The Moon", meaning: "Ilusão, Medo, Sonhos" },
  { id: 19, name: "The Sun", meaning: "Alegria, Sucesso, Vitalidade" },
  { id: 20, name: "Judgement", meaning: "Chamado, Absolvição, Renascer" },
  { id: 21, name: "The World", meaning: "Conclusão, Integração, Viagem" },
];

export default function HigherHzPage() {
  // Estado para o Oráculo D22
  const [result, setResult] = useState<typeof ARCANOS[0] | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setResult(null);
    
    // Simula o tempo de "rolagem"
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * ARCANOS.length);
      setResult(ARCANOS[randomIndex]);
      setIsRolling(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-paper selection:bg-purple-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
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

      {/* --- 1. HERO: O PALCO --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        
        <div className="relative mb-8 animate-in fade-in zoom-in duration-1000">
           <div className="absolute inset-0 bg-purple-600 blur-[100px] opacity-30 rounded-full"></div>
           <div className="relative w-32 h-32 border border-gold/40 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-24 h-24 border border-purple-500/60 rounded-full flex items-center justify-center animate-spin-slow">
                 <Hexagon className="w-10 h-10 text-gold drop-shadow-[0_0_15px_rgba(199,169,75,0.8)]" />
              </div>
           </div>
        </div>

        <div className="relative z-10 max-w-5xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-tight leading-[0.9] drop-shadow-lg">
            Higher <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-200 to-gold">Hz</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            A Jornada Completa. <br />
            <span className="text-purple-300 font-medium">22 Arquétipos</span>. <span className="text-gold font-medium">22 Frequências</span>. <span className="text-blue-300 font-medium">Um Álbum</span>.
          </p>

          <p className="text-sm font-mono text-gray-400 uppercase tracking-[0.2em]">
            Álbum Disponível em Todas as Plataformas
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <GlowButton variant="gold" href="#oracle">
              Consultar o D22
            </GlowButton>
            <button 
              onClick={() => document.getElementById('album')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-purple-200 text-sm font-mono tracking-widest uppercase rounded transition flex items-center justify-center gap-3"
            >
              <Disc size={16} /> Ouvir Álbum
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. ORÁCULO SONORO (D22) --- */}
      <section id="oracle" className="py-24 border-y border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#12081f]">
        <div className="container max-w-4xl text-center">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/20 mb-4">
                    <Dices size={14} /> Oráculo Interativo
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Sorteie sua Frequência</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Não sabe o que ouvir? Deixe a sincronicidade guiar. 
                    Clique abaixo para rolar o D22 e descobrir qual arquétipo rege o seu momento.
                </p>
            </div>

            <div className="relative min-h-[300px] flex flex-col items-center justify-center">
                {/* Área do Resultado */}
                {!result && !isRolling && (
                    <button 
                        onClick={rollDice}
                        className="group relative w-40 h-40 rounded-full border-2 border-purple-500/30 hover:border-gold flex items-center justify-center transition-all duration-500 hover:scale-105 bg-black/40"
                    >
                        <span className="text-6xl font-display text-white/20 group-hover:text-gold transition-colors">?</span>
                        <div className="absolute inset-0 rounded-full bg-purple-500/10 group-hover:bg-gold/5 blur-xl transition-colors" />
                        <p className="absolute -bottom-10 text-sm font-mono text-purple-300 tracking-widest uppercase group-hover:text-gold">Rolar Dado</p>
                    </button>
                )}

                {isRolling && (
                    <div className="animate-spin-slow">
                        <Hexagon className="w-32 h-32 text-purple-500 animate-pulse" strokeWidth={1} />
                    </div>
                )}

                {result && !isRolling && (
                    <div className="animate-in zoom-in-95 duration-500 w-full max-w-md">
                        <MysticCard className="border-gold/40 bg-black/80 text-center py-8 relative overflow-visible">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black border border-gold text-gold px-4 py-1 rounded-full font-mono text-sm font-bold">
                                ARCANO {result.id}
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-display text-white mb-2 mt-4">{result.name}</h3>
                            <p className="text-purple-300 text-sm mb-6 italic">"{result.meaning}"</p>
                            
                            <div className="p-4 bg-white/5 rounded border border-white/10 mb-6">
                                <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-2">Sua Missão Sonora</p>
                                <p className="text-white">Vá ao player abaixo e ouça a <strong>Faixa #{result.id + 1}</strong></p>
                            </div>

                            <button 
                                onClick={rollDice}
                                className="text-xs text-white/40 hover:text-white flex items-center justify-center gap-2 mx-auto transition-colors"
                            >
                                <RefreshCw size={12} /> Tentar outro sorteio
                            </button>
                        </MysticCard>
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* --- 3. O ÁLBUM (PLAYER) --- */}
      <section id="album" className="py-24 container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Coluna da Esquerda: Player & Capa */}
            <div className="relative group">
                <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
                
                <MysticCard className="relative z-10 p-0 overflow-hidden border-gold/30 bg-black">
                    <iframe 
                        style={{borderRadius: '12px'}} 
                        src="https://open.spotify.com/embed/album/21V0dAGNJiJKarYgLOzqhQ?utm_source=generator&theme=0" 
                        width="100%" 
                        height="352" 
                        frameBorder="0" 
                        allowFullScreen 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        className="bg-black"
                    ></iframe>
                </MysticCard>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="https://open.spotify.com/album/21V0dAGNJiJKarYgLOzqhQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-[#1DB954] text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        <Disc size={20} /> Ouvir no Spotify
                    </a>
                    <a 
                        href="https://music.apple.com/br/artist/higher-hz/1778849222" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        <MusicIcon size={20} /> Apple Music
                    </a>
                </div>
            </div>

            {/* Coluna da Direita: O Conceito */}
            <div className="space-y-8">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                        O Grimório Sonoro
                    </h2>
                    <p className="text-xl text-purple-300 font-light">
                        22 Faixas. Uma história de ascensão.
                    </p>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        <strong>Higher Hz</strong> materializou os 22 Arcanos Maiores em uma obra completa. 
                        Cada música é um portal para o arquétipo que ela representa.
                    </p>
                    <p>
                        Do caos primordial do <em>Louco (0)</em> à integração total do <em>Mundo (21)</em>, 
                        o álbum navega por gêneros musicais distintos — Rock, Trap, Eletrônico, Ambient — para capturar a essência exata de cada carta.
                    </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                    <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Arquitetura do Projeto</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <Mic size={16} className="text-purple-400" />
                            <span>Voz: Multi-Flow</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <Star size={16} className="text-gold" />
                            <span>Base: Lei Hermética</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <Brain size={16} className="text-blue-400" />
                            <span>Prod: AI Collective</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <Layers size={16} className="text-emerald-400" />
                            <span>Freq: 432hz Tuning</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* --- 4. OS 3 PILARES (CONCEPT) --- */}
      <Section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container grid md:grid-cols-3 gap-8">
            <div className="p-6 border-l-2 border-purple-500/40 space-y-4 bg-black/20 rounded-r-xl">
                <Sliders className="text-purple-400 w-8 h-8 mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                <h3 className="text-xl font-display text-white">Estilo Adaptativo</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    A música serve à mensagem. A sonoridade é moldada pela energia que a carta do Tarot exige, sem se prender a um único gênero.
                </p>
            </div>

            <div className="p-6 border-l-2 border-gold/40 space-y-4 bg-black/20 rounded-r-xl">
                <Star className="text-gold w-8 h-8 mb-2 drop-shadow-[0_0_8px_rgba(199,169,75,0.5)]" />
                <h3 className="text-xl font-display text-white">Simbologia Profunda</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    Versos estruturados na Sequência de Fibonacci e nos princípios do Kybalion. Cada linha é um código de ativação.
                </p>
            </div>

            <div className="p-6 border-l-2 border-blue-500/40 space-y-4 bg-black/20 rounded-r-xl">
                <Brain className="text-blue-400 w-8 h-8 mb-2 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                <h3 className="text-xl font-display text-white">Ecossistema IA</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    Um time de inteligências (Lyricist, Astrologer, Producer) trabalhando em simbiose para criar arte intencional.
                </p>
            </div>
        </div>
      </Section>

      {/* --- 5. FOOTER CTA --- */}
      <section className="py-24 border-t border-white/10 text-center bg-gradient-to-b from-[#0a0a0a] to-[#1a0b2e]">
        <div className="container max-w-2xl">
            <Disc className="w-12 h-12 text-purple-500 mx-auto mb-6 animate-spin-slow" />
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Próxima Fase: EPs Temáticos</h2>
            <p className="text-gray-300 mb-10 text-lg">
                Os Arcanos foram apenas o começo. Fibonacci, Kybalion e Chakras serão os próximos capítulos sonoros.
            </p>
            <GlowButton variant="gold" href="/newsletter">
                Ser Avisado
            </GlowButton>
        </div>
      </section>

    </main>
  );
}
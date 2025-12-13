import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Telescope, Layers, Leaf, Atom, Calendar, MessageCircle, ArrowLeft, User, Lock, CheckCircle2 } from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Rituais de Reconexão | Marroc",
  description: "Terapias holísticas para relembrar quem você é: Astrologia Viva, Tarot, Reiki e Sistema Arcturiano.",
};

const WHATS = "https://wa.me/5521992669980?text=Olá,%20quero%20agendar%20uma%20sessão%20de%20Rituais%20de%20Reconexão.";
const CALENDLY = "https://calendly.com/SEU_USUARIO/rituais"; 

// Dados atualizados com ícones Lucide para consistência visual
const RITUAIS = [
  {
    icon: <Telescope className="w-8 h-8 text-emerald-400" />,
    title: "Astrologia Viva",
    desc: "Mais do que mapas, espelhos cósmicos. A leitura astral torna-se uma ativação: revela potenciais, padrões e portais.",
    bullets: [
      "Leitura intuitiva do Mapa Natal",
      "Trânsitos e Ciclos atuais",
      "Rituais de alinhamento planetário",
    ],
  },
  {
    icon: <Layers className="w-8 h-8 text-purple-400" />,
    title: "Tarot + Runas",
    desc: "Tecnologia ancestral. Traduz o invisível em orientação prática. Espelhos ativos para decisões com clareza.",
    bullets: [
      "Tiragem de Mandala Astrológica",
      "Mapeamento de caminhos",
      "Ato ritual para selar escolhas",
    ],
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-400" />,
    title: "Reiki & Energia",
    desc: "O corpo fala, mas o campo grita. Reiki Usui e canalizações para desbloqueio e harmonização dos chakras.",
    bullets: [
      "Alinhamento de Chakras",
      "Limpeza de campo áurico",
      "Reconexão do fluxo vital",
    ],
  },
  {
    icon: <Atom className="w-8 h-8 text-cyan-400" />,
    title: "Cura Arcturiana",
    desc: "Para quem sente o chamado das estrelas. Terapia vibracional multidimensional para expansão de consciência.",
    bullets: [
      "Limpeza de registros kármicos",
      "Reprogramação celular",
      "Geometria sagrada avançada",
    ],
  },
];

export default function RituaisPage() {
  return (
    <main className="min-h-screen bg-[#020502] text-paper selection:bg-emerald-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND FX (ILUMINAÇÃO ESMERALDA) --- */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Spot de luz Verde no topo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),rgba(0,0,0,0))]" />
        {/* Spot secundário inferior */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
      </div>

      

      {/* --- 1. HERO: O TEMPLO --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        
        <div className="relative mb-8 animate-in fade-in zoom-in duration-1000">
           <div className="absolute inset-0 bg-emerald-600 blur-[100px] opacity-20 rounded-full"></div>
           <div className="relative w-32 h-32 border border-emerald-500/30 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-24 h-24 border border-emerald-400/50 rounded-full flex items-center justify-center animate-pulse-slow">
                 <Leaf className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
              </div>
           </div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-emerald-500/30 rounded-full bg-emerald-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-emerald-200 tracking-widest uppercase">
              Sessões Online & Presenciais
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight leading-[1.1] drop-shadow-xl">
            Rituais de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-200 to-teal-400">Reconexão</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            O mistério encontra o método. <br/>
            Um espaço seguro para relembrar quem você é através da ciência sutil e das tecnologias ancestrais.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <a 
                href={WHATS}
                target="_blank"
                className="bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
            >
                Agendar Sessão
            </a>
            <Link 
              href="#terapias"
              className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white/80 text-sm font-mono tracking-widest uppercase rounded transition flex items-center justify-center gap-3"
            >
              Conhecer Métodos
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. AS TERAPIAS (GRID) --- */}
      <section id="terapias" className="py-24 container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-white mb-4">Caminhos de Cura</h2>
          <p className="text-emerald-200/50">Escolha a chave que abre sua próxima porta.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {RITUAIS.map((ritual, i) => (
            <MysticCard key={i} className="border-emerald-500/20 hover:border-emerald-400/50 hover:bg-emerald-900/10 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-full border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    {ritual.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-display text-white mb-3 group-hover:text-emerald-300 transition-colors">
                {ritual.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {ritual.desc}
              </p>

              <div className="space-y-2 pt-4 border-t border-emerald-500/10">
                {ritual.bullets?.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                    href={WHATS} 
                    target="_blank"
                    className="text-xs font-bold text-emerald-400 uppercase tracking-widest hover:text-white transition flex items-center gap-2"
                >
                    Saber mais <ArrowLeft className="rotate-180 w-4 h-4" />
                </a>
              </div>
            </MysticCard>
          ))}
        </div>
      </section>

      {/* --- 3. O FACILITADOR --- */}
      <Section className="border-y border-emerald-900/30 bg-emerald-950/10">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-emerald-500/20 grayscale hover:grayscale-0 transition-all duration-1000 group">
                 {/* Substitua pelo path real da sua foto de terapeuta se tiver uma diferente, ou use a padrão */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60" />
                 {/* Placeholder visual caso a imagem não carregue ou para efeito */}
                 <div className="absolute inset-0 bg-[url('/astro.png')] bg-cover bg-center" />
                 
                 <div className="absolute bottom-8 left-8 z-20">
                    <p className="text-emerald-400 font-mono text-xs tracking-widest mb-2">TERAPEUTA HOLÍSTICO</p>
                    <h3 className="text-3xl font-display text-white">Marroc</h3>
                 </div>
            </div>

            <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl text-white">
                    A Visão do Terapeuta
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Não é curar. É te lembrar quem você é, para que a tua própria energia faça o resto.
                    </p>
                    <p>
                        Sou iniciado no <strong>Reiki Usui</strong> e caminho entre o som e o silêncio. 
                        Minha abordagem integra a precisão da astrologia com a sensibilidade da leitura de campo.
                    </p>
                    <p>
                        Não entrego respostas prontas. Eu abro caminhos. 
                        Cada consulta é um rito, e cada rito é um chamado ao seu centro.
                    </p>
                </div>
                <div className="pt-4 flex gap-4">
                    <Link 
                        href="/sobre"
                        className="text-emerald-400 border-b border-emerald-500/30 pb-1 hover:text-white hover:border-white transition"
                    >
                        Ler biografia completa
                    </Link>
                </div>
            </div>
        </div>
      </Section>

      {/* --- 4. ÁREA DO CLIENTE (LOGIN) --- */}
      <section className="py-24 container max-w-4xl">
        <MysticCard className="border-gold/30 bg-gradient-to-br from-black to-[#1a1500]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4">
                <div className="space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase border border-gold/20 px-3 py-1 rounded-full">
                        <Lock size={12} /> Acesso Restrito
                    </div>
                    <h3 className="font-display text-3xl text-white">Área do Iniciado</h3>
                    <p className="text-gray-400 max-w-md">
                        Se você já passou por um atendimento, acesse aqui seus materiais: Mapa Astral Digital, Gravações e Resumos de Tarot.
                    </p>
                </div>
                
                <div className="flex-shrink-0">
                    <GlowButton href="/rituais/rituaisclient" variant="gold" className="w-full md:w-auto">
                        Acessar Materiais
                    </GlowButton>
                </div>
            </div>
        </MysticCard>
      </section>

      {/* --- 5. FOOTER CTA --- */}
      <section className="py-20 text-center border-t border-white/5">
        <div className="container max-w-2xl space-y-8">
            <MessageCircle className="w-12 h-12 text-emerald-500 mx-auto" />
            <h2 className="font-display text-3xl md:text-4xl text-white">
                Pronto para começar?
            </h2>
            <p className="text-gray-400">
                Agende uma conversa inicial pelo WhatsApp para entendermos qual terapia é a ideal para o seu momento.
            </p>
            <a 
                href={WHATS}
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded hover:bg-emerald-400 hover:scale-105 transition-all duration-300"
            >
                CHAMAR NO WHATSAPP
            </a>
        </div>
      </section>

    </main>
  );
}
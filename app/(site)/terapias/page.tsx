// app/(site)/terapias/page.tsx
// Atualizado em 03/06/2026 — paleta de cor trocada de ESMERALDA para AZUL ÁGUA.
// Padronizado com o card Terapias da página /projetos.
// Rota: /terapias (substituiu /rituais).
//
// 5 serviços:
//   1. Astrologia Viva — cyan (água)
//   2. Alinhamento Frequencial Somático — blue (água profunda, NOVO)
//   3. Oráculos (Tarot + Runas) — purple (mantido)
//   4. Alinhamento Sutil (Reiki) — cyan (água)
//   5. Cura Arcturiana — cyan/cyan-400 (estelar, mantido)

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Telescope, Layers, Leaf, Atom, MessageCircle, ArrowLeft, Lock, CheckCircle2, Waves } from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terapias Holísticas | Marroc",
  description:
    "Terapias para relembrar quem você é: Astrologia Viva, Alinhamento Frequencial Somático, Oráculos, Reiki e Cura Arcturiana.",
};

const WHATS = "https://wa.me/5521983821884?text=Olá,%20quero%20agendar%20uma%20sessão%20de%20Terapias%20Holísticas.";

// Cor principal da página: cyan/sky (azul água). Blue reservado pro "Alinhamento Frequencial".
const ICON_BASE_CLASS = "w-8 h-8 text-cyan-300";
const ICON_BASE_DEEP = "w-8 h-8 text-blue-400";
const ICON_PURPLE = "w-8 h-8 text-purple-400";

const RITUAIS = [
  {
    icon: <Telescope className={ICON_BASE_CLASS} />,
    title: "Astrologia Viva",
    desc: "Mais do que mapas, espelhos cósmicos. A leitura astral torna-se uma ativação profunda: revela seu potencial inato, decodifica padrões repetitivos e abre portais.",
    bullets: [
      "Leitura Intuitiva do Mapa Natal",
      "Trânsitos, Ciclos e Ajuste de Rota",
      "Revolução Solar e Ativação Kármica",
    ],
    color: "cyan",
  },
  {
    icon: <Waves className={ICON_BASE_DEEP} />,
    title: "Alinhamento Frequencial Somático",
    desc: "Um reboot completo do seu sistema. O toque físico dissolve bloqueios (hardware), a energia cristalina e o som recalibram sua frequência (software).",
    bullets: [
      "Massagem para Descompressão e Aterramento",
      "Reiki e Cristaloterapia (Fluxo)",
      "Sound Healing (Ajuste Frequencial)",
    ],
    color: "blue",
    badge: "Novo Serviço",
  },
  {
    icon: <Layers className={ICON_PURPLE} />,
    title: "Oráculos (Tarot + Runas)",
    desc: "Tecnologia ancestral que traduz o invisível em orientação prática. Espelhos ativos para tomada de decisões com clareza brutal e pragmatismo estratégico.",
    bullets: [
      "Tiragem de Mandala Astrológica",
      "Mapeamento de Caminhos e Sombras",
      "Ato Ritual para Selar Escolhas",
    ],
    color: "purple",
  },
  {
    icon: <Leaf className={ICON_BASE_CLASS} />,
    title: "Alinhamento Sutil (Reiki)",
    desc: "O corpo fala, mas o campo grita. Canalizações de Reiki para desbloqueio profundo e harmonização dos chakras, focado apenas no campo sutil (sem massagem).",
    bullets: [
      "Alinhamento Completo de Chakras",
      "Limpeza e Blindagem Áurica",
      "Reconexão do Fluxo Vital",
    ],
    color: "cyan",
  },
  {
    icon: <Atom className={ICON_BASE_CLASS} />,
    title: "Cura Arcturiana",
    desc: "Para quem sente o chamado estelar. Terapia vibracional multidimensional avançada para expansão de consciência e cura anímica em níveis sutis.",
    bullets: [
      "Limpeza de Registros Kármicos",
      "Reprogramação Celular e Emocional",
      "Geometria Sagrada Avançada",
    ],
    color: "cyan",
  },
];

// Classes reutilizáveis pra MysticCard
const CARD_CYAN = "border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-900/10";
const CARD_BLUE = "md:col-span-2 border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-900/10 bg-blue-950/20";
const HEADER_TEXT_CYAN = "text-cyan-300";

export default function TerapiasPage() {
  return (
    <main className="min-h-screen bg-[#02060a] text-paper selection:bg-cyan-500 selection:text-white overflow-x-hidden font-sans">

      {/* --- BACKGROUND FX (ILUMINAÇÃO AZUL ÁGUA) --- */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Spot de luz Cyan no topo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.15),rgba(0,0,0,0))]" />
        {/* Spot secundário inferior — sky/azul mais profundo */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-900/15 blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* --- 1. HERO: O TEMPLO --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20">

        <div className="relative mb-8 animate-in fade-in zoom-in duration-1000">
          <div className="absolute inset-0 bg-cyan-600 blur-[100px] opacity-20 rounded-full"></div>
          <div className="relative w-32 h-32 border border-cyan-500/30 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-24 h-24 border border-cyan-400/50 rounded-full flex items-center justify-center animate-pulse-slow">
              <Waves className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono text-cyan-200 tracking-widest uppercase">
              Sessões Online & Presenciais
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight leading-[1.1] drop-shadow-xl">
            Terapias de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-teal-300">
              Reconexão
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            O mistério encontra o método. <br />
            Um espaço seguro para relembrar quem você é através da ciência sutil e das tecnologias ancestrais.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={WHATS}
              target="_blank"
              className="bg-cyan-600 text-white hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
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
      <section id="terapias" className="py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white mb-4">Caminhos de Cura</h2>
            <p className="text-cyan-200/50">Escolha a chave que abre sua próxima porta.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Primeiro card: Astrologia Viva — largura total, cyan */}
            <MysticCard className={`md:col-span-2 ${CARD_CYAN} transition-all group`}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
                    {RITUAIS[0].icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {RITUAIS[0].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{RITUAIS[0].desc}</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 pt-4 border-t border-cyan-500/10">
                    {RITUAIS[0].bullets?.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-300/80">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a href={WHATS} target="_blank" className="text-xs font-bold text-cyan-400 uppercase tracking-widest hover:text-white transition flex items-center gap-2">
                      Saber mais <ArrowLeft className="rotate-180 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </MysticCard>

            {/* Segundo card: Alinhamento Frequencial Somático — destaque especial, blue */}
            <MysticCard className={`${CARD_BLUE} transition-all group`}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                    {RITUAIS[1].icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-blue-300 tracking-widest uppercase">Novo Serviço</span>
                  </div>
                  <h3 className="text-2xl font-display text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {RITUAIS[1].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{RITUAIS[1].desc}</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 pt-4 border-t border-blue-500/10">
                    {RITUAIS[1].bullets?.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-300/80">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a href={WHATS} target="_blank" className="text-xs font-bold text-blue-400 uppercase tracking-widest hover:text-white transition flex items-center gap-2">
                      Agendar agora <ArrowLeft className="rotate-180 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </MysticCard>

            {/* Demais cards: 2 por linha */}
            {RITUAIS.slice(2).map((ritual, i) => {
              const cardClass = ritual.color === "purple"
                ? "border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/10 transition-all group"
                : `${CARD_CYAN} transition-all group`;
              const iconBg = ritual.color === "purple"
                ? "bg-purple-500/10 border-purple-500/20"
                : "bg-cyan-500/10 border-cyan-500/20";
              const titleHover = ritual.color === "purple"
                ? "group-hover:text-purple-300"
                : "group-hover:text-cyan-300";
              const checkColor = ritual.color === "purple"
                ? "text-purple-500"
                : "text-cyan-500";
              const linkColor = ritual.color === "purple"
                ? "text-purple-400"
                : "text-cyan-400";
              const borderDivider = ritual.color === "purple"
                ? "border-purple-500/10"
                : "border-cyan-500/10";

              return (
                <MysticCard key={i} className={cardClass}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 ${iconBg} rounded-full group-hover:scale-110 transition-transform duration-500`}>
                      {ritual.icon}
                    </div>
                  </div>

                  <h3 className={`text-2xl font-display text-white mb-3 ${titleHover} transition-colors`}>
                    {ritual.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {ritual.desc}
                  </p>

                  <div className={`space-y-2 pt-4 border-t ${borderDivider}`}>
                    {ritual.bullets?.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-300/80">
                        <CheckCircle2 className={`w-4 h-4 ${checkColor} mt-0.5 shrink-0`} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href={WHATS}
                      target="_blank"
                      className={`text-xs font-bold ${linkColor} uppercase tracking-widest hover:text-white transition flex items-center gap-2`}
                    >
                      Saber mais <ArrowLeft className="rotate-180 w-4 h-4" />
                    </a>
                  </div>
                </MysticCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 3. O FACILITADOR --- */}
      <Section className="border-y border-cyan-900/30 bg-cyan-950/10">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20 grayscale hover:grayscale-0 transition-all duration-1000 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60" />
            <div className="absolute inset-0 bg-[url('/astro.png')] bg-cover bg-center" />

            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-cyan-400 font-mono text-xs tracking-widest mb-2">TERAPEUTA HOLÍSTICO</p>
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
                className="text-cyan-400 border-b border-cyan-500/30 pb-1 hover:text-white hover:border-white transition"
              >
                Ler biografia completa
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* --- 4. ÁREA DO CLIENTE (LOGIN) — mantém gold (CTA de destaque) --- */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4">
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
                <GlowButton href="/terapias/terapiasclient" variant="gold" className="w-full md:w-auto">
                  Acessar Materiais
                </GlowButton>
              </div>
            </div>
          </MysticCard>
        </div>
      </section>

      {/* --- 5. FOOTER CTA --- */}
      <section className="py-20 text-center border-t border-white/5">
        <div className="container max-w-2xl mx-auto px-4 space-y-8">
          <MessageCircle className="w-12 h-12 text-cyan-500 mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Pronto para começar?
          </h2>
          <p className="text-gray-400">
            Agende uma conversa inicial pelo WhatsApp para entendermos qual terapia é a ideal para o seu momento.
          </p>
          <a
            href={WHATS}
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
          >
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </section>

    </main>
  );
}

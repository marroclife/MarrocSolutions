// components/sections/TerapiasSection.tsx
// Atualizado em 03/06/2026 (compactado).
// Copy extraída diretamente de app/(site)/terapias/page.tsx (RITUAIS const).
// 5 serviços reais do Marroc como terapeuta holístico:
//   1. Astrologia Viva
//   2. Alinhamento Frequencial Somático (NOVO)
//   3. Oráculos (Tarot + Runas)
//   4. Alinhamento Sutil (Reiki)
//   5. Cura Arcturiana
//
// Layout: grid-cols-1 md:grid-cols-3 (consistente com Solutions/Gaja Hai).
// 5 cards → primeira linha 3 cards, segunda linha 2 cards (alinhados à esquerda).

import React from "react";
import Link from "next/link";
import {
  Telescope,
  Waves,
  Layers,
  Leaf,
  Atom,
  ArrowRight,
} from "lucide-react";

const TERAPIAS = [
  {
    icon: <Telescope className="w-7 h-7" />,
    title: "Astrologia Viva",
    desc: "Mais do que mapas, espelhos cósmicos. A leitura astral revela seu potencial inato e abre portais.",
    color: "emerald",
  },
  {
    icon: <Waves className="w-7 h-7" />,
    title: "Alinhamento Frequencial Somático",
    desc: "Reboot completo do sistema. Toque físico dissolve bloqueios, energia cristalina e som recalibram sua frequência.",
    color: "blue",
    badge: "Novo Serviço",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Oráculos (Tarot + Runas)",
    desc: "Tecnologia ancestral que traduz o invisível em orientação prática. Decisões com clareza brutal.",
    color: "purple",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Alinhamento Sutil (Reiki)",
    desc: "O corpo fala, mas o campo grita. Canalizações para desbloqueio profundo e harmonização dos chakras.",
    color: "emerald",
  },
  {
    icon: <Atom className="w-7 h-7" />,
    title: "Cura Arcturiana",
    desc: "Terapia vibracional multidimensional avançada pra expansão de consciência e cura anímica.",
    color: "cyan",
  },
];

const COLOR_CLASSES: Record<
  string,
  { text: string; border: string; bg: string; hover: string }
> = {
  emerald: {
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    hover: "hover:border-emerald-400/50",
  },
  blue: {
    text: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    hover: "hover:border-blue-400/50",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    hover: "hover:border-purple-400/50",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    hover: "hover:border-cyan-400/50",
  },
};

export function TerapiasSection() {
  return (
    <section className="relative w-full py-24 bg-[#020502] text-white overflow-hidden border-t border-white/5">
      {/* Detalhe Verde Esmeralda de Fundo (igual à /terapias) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] font-mono border border-emerald-500/30 text-emerald-300 rounded-full uppercase tracking-widest bg-emerald-500/10">
                Rituais de Reconexão
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Terapias{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-200 to-teal-400">
                Holísticas
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              O mistério encontra o método. Um espaço seguro para relembrar quem você é
              através da ciência sutil e das tecnologias ancestrais.
            </p>
          </div>

          <Link
            href="/terapias"
            className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-emerald-400 hover:text-emerald-400 transition-all"
          >
            Ver todos os Rituais{" "}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid 3-coluna — padrão igual Solutions/Gaja Hai */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TERAPIAS.map((t, i) => {
            const c = COLOR_CLASSES[t.color];
            return (
              <div
                key={i}
                className={`group p-8 rounded-2xl bg-white/5 border ${c.border} ${c.hover} transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-3 ${c.bg} rounded-full border ${c.border} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className={c.text}>{t.icon}</div>
                  </div>
                  {t.badge && (
                    <span
                      className={`text-[10px] font-mono ${c.text} border ${c.border} ${c.bg} px-2 py-1 rounded-full uppercase tracking-widest`}
                    >
                      {t.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {t.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

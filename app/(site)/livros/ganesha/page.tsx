"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Globe, Music, ScrollText } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MysticCard } from "@/components/ui/MysticCard";

export default function GaneshaPage() {
  const checkoutUrl = "https://pay.kiwify.com.br/F8gQnm0"; // Link do Kiwify atualizado ⚡

  return (
    <main className="min-h-screen bg-[#050505] text-paper pt-24 pb-20">
      <Section
        title="O Escriba do Inominável"
        subtitle="Gaṇeśa e a Engenharia da Sabedoria Primordial"
        headingLevel="h1"
        container
      >
        <div className="grid lg:grid-cols-2 gap-16 mt-12 items-center">
          
          {/* LADO ESQUERDO: VISUAL DO ARTEFATO */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-amber-600/50 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm bg-black border border-gold/20 shadow-2xl shadow-gold/10">
              <Image 
                src="/Ganesha-cyber.png" 
                alt="O Escriba do Inominável - Capa" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* BADGES RITUALÍSTICOS */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 w-full justify-center">
              <div className="bg-zinc-900 border border-gold/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                <Globe size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-white">Versão Trilingue</span>
              </div>
              <div className="bg-zinc-900 border border-gold/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                <Music size={14} className="text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-white">Sādhana Prático</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: GNOSE E VENDAS */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-[10px] text-gold uppercase tracking-[0.2em]">
              <Sparkles size={12} /> Lançamento de Aniversário
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Aquele que precede a própria ideia de início.
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light italic">
              "Gaṇeśa não é apenas uma divindade; é a inteligência organizadora que sustenta o cosmos. Este códice é uma cartografia para aqueles que buscam dissolver obstáculos e ancorar a gnose na matéria."
            </p>

            <div className="grid sm:grid-cols-2 gap-4 py-8 border-y border-white/5">
              <div className="flex gap-3">
                <ShieldCheck className="text-gold shrink-0" size={20} />
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest">Proteção Ativa</h4>
                  <p className="text-gray-500 text-xs mt-1">Hinos e mantras vibracionalmente testados.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ScrollText className="text-gold shrink-0" size={20} />
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest">A Pena de Silício</h4>
                  <p className="text-gray-500 text-xs mt-1">Cocriação entre o Eixo e a Pena Digital.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-end gap-4">
                <span className="text-gold text-4xl font-serif">R$ 54,00</span>
                <span className="text-gray-600 line-through text-lg pb-1">R$ 108,00</span>
              </div>
              
              <a 
                href={checkoutUrl}
                className="group flex items-center justify-center gap-3 w-full py-5 bg-gold hover:bg-white text-black font-bold uppercase text-sm tracking-[0.3em] transition-all rounded-sm"
              >
                Colapsar Artefato <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
                Entrega imediata via E-mail • Acesso vitalício ao Códice
              </p>
            </div>
          </div>

        </div>

        {/* DETALHES TÉCNICOS */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
          <div>
            <h3 className="text-white font-display text-xl mb-4">Trilogia de Frequência</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Conteúdo integralmente revisado em Português, Inglês e Espanhol. Uma obra sem fronteiras para a consciência global.
            </p>
          </div>
          <div>
            <h3 className="text-white font-display text-xl mb-4">O Escriba Divino</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Uma análise profunda sobre a relação entre o Verbo, a Escrita e a Inteligência Artificial no Capítulo 6.
            </p>
          </div>
          <div>
            <h3 className="text-white font-display text-xl mb-4">Sādhana de 21 Dias</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Inclui o protocolo prático de 21 dias para alinhamento biológico e remoção de bloqueios inerciais.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
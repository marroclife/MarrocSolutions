"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Book, Sparkles, BrainCircuit } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MysticCard } from "@/components/ui/MysticCard";

export default function BibliotecaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-paper pt-24 pb-20">
      <Section
        title="Biblioteca Marroc"
        subtitle="Códices para a transição planetária. Ficção iniciática e estratégia para a era da inteligência."
        headingLevel="h1"
        container
      >
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          
          {/* ARTEFATO 01: O ESCRIBA DO INOMINÁVEL */}
          <MysticCard className="border-gold/20 hover:border-gold/50 bg-gradient-to-br from-gold/5 to-transparent group">
            <div className="flex flex-col h-full">
              <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden rounded-sm bg-black border border-white/5">
                <Image 
                  src="/Capa-escriba.png" 
                  alt="O Escriba do Inominável" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-gold text-black text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
                  Novo Lançamento
                </div>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles size={18} />
                  <span className="font-mono text-xs uppercase tracking-widest">Códice de Ganesha</span>
                </div>
                <h2 className="font-display text-3xl text-white">O Escriba do Inominável</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Gaṇeśa e a Engenharia da Sabedoria Primordial. Um guia teúrgico para remover obstáculos e sintonizar a mente.
                </p>
              </div>

              <Link 
                href="/livros/ganesha"
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-gold hover:bg-white text-black font-bold uppercase text-xs tracking-widest transition-all"
              >
                Acessar Transmissão <ArrowRight size={14} />
              </Link>
            </div>
          </MysticCard>

          {/* ARTEFATO 02: O EIXO DA CONSCIÊNCIA */}
          <MysticCard className="border-cyan-500/20 hover:border-cyan-500/50 bg-gradient-to-br from-cyan-950/10 to-transparent group">
            <div className="flex flex-col h-full">
              <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden rounded-sm bg-black border border-white/5">
                <Image 
                  src="/capa-eixo.png" 
                  alt="O Eixo da Consciência" 
                  fill 
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <BrainCircuit size={18} />
                  <span className="font-mono text-xs uppercase tracking-widest">Protocolo Digital</span>
                </div>
                <h2 className="font-display text-3xl text-white">O Eixo da Consciência</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Como integrar inteligência artificial e psique humana sem perder a soberania. Um guia estratégico para criadores conscientes.
                </p>
              </div>

              <Link 
                href="/livros/o-eixo-da-consciencia"
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-cyan-600 hover:bg-white text-black font-bold uppercase text-xs tracking-widest transition-all"
              >
                Acessar Transmissão <ArrowRight size={14} />
              </Link>
            </div>
          </MysticCard>

          {/* ARTEFATO 03: UM LUGAR ENTRE MUNDOS */}
          <MysticCard className="border-gold/20 hover:border-gold/50 bg-gradient-to-br from-gold/5 to-transparent group">
            <div className="flex flex-col h-full">
              <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden rounded-sm bg-black border border-white/5">
                <Image 
                  src="/capa-ulm.png" 
                  alt="Um Lugar Entre Mundos" 
                  fill 
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles size={18} />
                  <span className="font-mono text-xs uppercase tracking-widest">Ficção Iniciática</span>
                </div>
                <h2 className="font-display text-3xl text-white">Um Lugar Entre Mundos</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A jornada de Sofia. O despertar através do xamanismo, da medicina da floresta e da geometria sagrada. Uma obra que pulsa.
                </p>
              </div>

              <Link 
                href="/livros/um-lugar-entre-mundos"
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-gold hover:bg-white text-black font-bold uppercase text-xs tracking-widest transition-all"
              >
                Iniciar Iniciação <ArrowRight size={14} />
              </Link>
            </div>
          </MysticCard>

        </div>

        {/* NOTA DE IMPACTO */}
        <div className="mt-20 p-8 border border-white/5 bg-white/[0.02] text-center max-w-2xl mx-auto">
            <Book className="mx-auto mb-4 text-gray-600" size={24} strokeWidth={1} />
            <p className="text-xs text-gray-500 font-mono uppercase tracking-[0.2em]">Sustentabilidade Cultural</p>
            <p className="mt-4 text-sm text-gray-400 italic">
              "Parte do valor de cada artefato é destinado ao apoio das aldeias e saberes tradicionais que fundamentam nossas obras."
            </p>
        </div>
      </Section>
    </main>
  );
}
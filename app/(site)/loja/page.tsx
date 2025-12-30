// app/(site)/loja/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { BookOpen, Sparkles, ShoppingBag, ArrowRight, BrainCircuit, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Arsenal de Artefatos — Marroc",
  description: "Adquira as obras 'O Eixo da Consciência' e 'Um Lugar Entre Mundos'. Vestuário e objetos de poder na GAJA HAI.",
};

export default function LojaPage() {
  return (
    <main className="bg-[#050505] text-paper min-h-screen pb-20">
      
      {/* CABEÇALHO DA PÁGINA */}
      <Section
        title="Arsenal de Frequência"
        subtitle="Ferramentas narrativas e tecnológicas para o despertar da soberania humana."
        headingLevel="h1"
        className="pt-24 pb-12"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* ARTEFATO 01: O EIXO DA CONSCIÊNCIA (CYAN) */}
          <div className="relative group bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-full md:w-40 aspect-[3/4.5] shrink-0 overflow-hidden rounded-sm bg-black border border-white/5">
                <Image src="/capa-eixo.png" alt="O Eixo da Consciência" fill className="object-contain" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <BrainCircuit size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">Novo Lançamento</span>
                </div>
                <h2 className="font-display text-2xl text-white">O Eixo da Consciência</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como integrar IA e psique humana sem perder a essência. Um download de soberania estratégica.
                </p>
                <div className="pt-4 space-y-3">
                    <p className="text-xs text-cyan-500/70 font-mono uppercase tracking-tighter">Valor de Troca:</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xs text-white/40">R$</span>
                        <span className="text-3xl font-display text-white">47,00</span>
                    </div>
                    <a 
                      href="https://pay.kiwify.com.br/QhQvSHx" 
                      target="_blank" 
                      className="inline-flex items-center justify-center w-full py-4 bg-cyan-600 hover:bg-white text-black font-bold uppercase text-[10px] tracking-widest transition-all"
                    >
                      Adquirir via Kiwify <ArrowRight size={14} className="ml-2" />
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* ARTEFATO 02: UM LUGAR ENTRE MUNDOS (GOLD) */}
          <div className="relative group bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-full md:w-40 aspect-[3/4.5] shrink-0 overflow-hidden rounded-sm bg-black border border-white/5">
                <Image src="/capa-ulm.png" alt="Um Lugar Entre Mundos" fill className="object-contain" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">Ficção Iniciática</span>
                </div>
                <h2 className="font-display text-2xl text-white">Um Lugar Entre Mundos</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  A jornada de Sofia através do xamanismo e da realidade simulada. Medicina da floresta em palavras.
                </p>
                <div className="pt-4">
                    <p className="text-xs text-gold/70 font-mono uppercase tracking-tighter mb-3">Escolha sua contribuição:</p>
                    <div className="grid grid-cols-2 gap-3">
                        <a 
                            href="https://pay.hotmart.com/M101238238O?off=ur3sdp6i" 
                            target="_blank"
                            className="text-center py-3 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold border border-white/10 uppercase tracking-widest transition-all"
                        >
                            Simbólico <br/> <span className="text-gold">R$ 22,20</span>
                        </a>
                        <a 
                            href="https://pay.hotmart.com/M101238238O?off=p1uhfzib" 
                            target="_blank"
                            className="text-center py-3 bg-gold/10 hover:bg-gold text-gold hover:text-black text-[10px] font-bold border border-gold/20 uppercase tracking-widest transition-all"
                        >
                            Consciente <br/> <span className="font-extrabold text-white group-hover:text-black">R$ 33,30</span>
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* SEÇÃO GAJA HAI (DESTAQUE FINAL) */}
      <Section className="mt-12">
        <div className="relative overflow-hidden rounded-sm border border-white/5 bg-white/[0.01] p-10 md:p-16 text-center">
          {/* Efeito de fundo sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(199,169,75,0.03),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="flex justify-center">
              <div className="relative w-24 h-24 transition-transform duration-700 hover:scale-110">
                <Image src="/gaja-logo.png" alt="Gaja Hai" fill className="object-contain" />
              </div>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-gold/60">
                    <ShoppingBag size={18} />
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Vestuário & Artefatos</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-tighter">
                    GAJA <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">HAI</span>
                </h2>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                    A materialização da frequência. Explore nossa curadoria de roupas codificadas e objetos de poder.
                </p>
            </div>

            <div className="pt-6">
                <a 
                    href="https://store.marroc.xyz" 
                    target="_blank"
                    className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-gold hover:shadow-[0_0_30px_rgba(199,169,75,0.3)]"
                >
                    Entrar na Store <ArrowRight size={16} />
                </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-10 text-white/20 border-t border-white/5">
                <div className="flex flex-col items-center gap-1">
                    <ShieldCheck size={20} />
                    <span className="text-[8px] uppercase font-mono tracking-widest">Segurança Digital</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <ShoppingBag size={20} />
                    <span className="text-[8px] uppercase font-mono tracking-widest">Logística Global</span>
                </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
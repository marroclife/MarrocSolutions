// app/apoiar/page.tsx (ou app/loja/page.tsx)
import React from "react";
import type { Metadata } from "next";
// Se tiver a imagem da capa, descomente a linha abaixo
// import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { BookOpen, Sparkles, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Loja & Apoio — Marroc",
  description: "Adquira 'Um Lugar Entre Mundos' e apoie o movimento. Loja completa em 17 de Dezembro.",
};

export default function LojaPage() {
  return (
    <main className="bg-[#0b0b0b] text-paper min-h-screen">
      
      {/* SEÇÃO 1: O PRODUTO DESTAQUE (LIVRO) */}
      <Section
        title="Arsenal de Frequência"
        subtitle="Ferramentas disponíveis para o seu despertar agora."
        headingLevel="h1"
        className="py-12 md:py-20"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center bg-[#121212] rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
          
          {/* Lado Esquerdo: Capa Visual (Placeholder ou Imagem) */}
          <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto md:mx-0 overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-lg border border-white/10 flex items-center justify-center group">
             {/* 
                DICA: Quando tiver a imagem da capa, use assim:
                <Image src="/capa-livro.jpg" alt="Capa do Livro" fill className="object-cover" />
             */}
             <div className="z-10 text-center p-6">
                <BookOpen className="w-16 h-16 text-amber-200 mx-auto mb-4 opacity-80" />
                <h3 className="font-display text-2xl text-white">Um Lugar Entre Mundos</h3>
                <p className="text-sm text-white/50 mt-2">Edição Digital (PDF)</p>
             </div>
             
             {/* Efeito de brilho ao passar o mouse */}
             <div className="absolute inset-0 bg-amber-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Lado Direito: Copy de Venda e Preços */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-200/10 text-amber-200 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
                Disponível Imediatamente
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Um Lugar Entre Mundos
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Não é apenas uma leitura. É um download de consciência. 
                Uma ficção iniciática que une xamanismo e realidade simulada, 
                preparando sua mente para o que está por vir.
              </p>
            </div>

            {/* Explicação dos Valores */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <p className="text-sm text-white/60 italic">
                Escolha o valor que ressoa com o seu momento:
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Opção 1: Simbólico (R$ 22,20) */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-amber-200/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold text-sm">Valor Simbólico</span>
                    </div>
                    <p className="text-2xl font-display text-amber-200">R$ 22,20</p>
                    <p className="text-xs text-white/50 mt-1 mb-4 leading-snug">
                      Acessível para todos. Energia de troca básica.
                    </p>
                  </div>
                  <a 
                    href="https://pay.hotmart.com/M101238238O?off=ur3sdp6i" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full text-center py-3 rounded-lg bg-white/10 text-white text-sm font-bold hover:bg-amber-200 hover:text-black transition-all"
                  >
                    Comprar
                  </a>
                </div>

                {/* Opção 2: Consciente (R$ 33,30) */}
                <div className="rounded-xl border border-amber-200/30 bg-amber-200/5 p-4 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 bg-amber-200 text-black text-[9px] font-bold px-2 py-1 rounded-bl-lg">
                    APOIO
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold text-sm">Valor Consciente</span>
                      <Sparkles className="w-4 h-4 text-amber-200" />
                    </div>
                    <p className="text-2xl font-display text-amber-200">R$ 33,30</p>
                    <p className="text-xs text-white/50 mt-1 mb-4 leading-snug">
                      Contribui diretamente para a expansão do projeto.
                    </p>
                  </div>
                  <a 
                    href="https://pay.hotmart.com/M101238238O?off=p1uhfzib" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full text-center py-3 rounded-lg bg-amber-200 text-black text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(253,230,138,0.2)]"
                  >
                    Contribuir
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SEÇÃO 2: EM BREVE (TEASER 17 DEZ) */}
      <Section className="pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-8 md:p-12 text-center">
          {/* Decoração de fundo */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/5 p-4 rounded-full border border-white/10 animate-pulse">
                <Lock className="w-8 h-8 text-white/50" />
              </div>
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
              O Portal Abre em <span className="text-amber-200">17 de Dezembro</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-8">
              A Loja completa está sendo ancorada. Em breve, você terá acesso ao <strong>Tarot Higher Hz</strong> e novas ferramentas de expansão.
            </p>

            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-amber-200/80 border border-amber-200/20 px-4 py-2 rounded-full bg-amber-200/5">
              <Sparkles className="w-4 h-4" />
              <span>Faltam poucos dias para a ativação</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
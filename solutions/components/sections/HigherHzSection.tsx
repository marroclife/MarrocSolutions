import React from "react";
import Link from "next/link"; // Importando Link
import { Sparkles, Hexagon, PlayCircle, ArrowRight } from "lucide-react";

export function HigherHzSection() {
  const ALBUM_ID = "21V0dAGNJiJKarYgLOzqhQ";

  return (
    <section className="relative py-24 px-4 overflow-hidden border-b border-white/5 bg-[#050505]">
      {/* Detalhe Dourado de Fundo */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Player do Álbum (Esquerda) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="rounded-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(234,179,8,0.2)] border border-yellow-500/20">
              <iframe 
                style={{borderRadius: '12px'}} 
                src={`https://open.spotify.com/embed/album/${ALBUM_ID}?utm_source=generator&theme=0`} 
                width="100%" 
                height="450" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Texto (Direita) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-right lg:text-left">
            <div className="flex items-center justify-end lg:justify-start gap-2 mb-4">
              <Sparkles className="text-yellow-500" size={16} />
              <span className="text-yellow-500 text-xs font-mono uppercase tracking-widest">
                AI Music Collective
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-white">
              Higher <span className="text-yellow-500">Hz</span>
            </h2>
            
            <p className="text-2xl text-gray-200">
              22 Arquétipos. 22 Frequências. <br/> Um Álbum Gerado por IA.
            </p>

            <p className="text-gray-400 leading-relaxed max-w-2xl ml-auto lg:ml-0">
              O projeto explora a intersecção entre a <strong className="text-white">Criação Generativa</strong> e a 
              <strong className="text-white"> Intenção Humana</strong>. O último lançamento materializou os 
              Arcanos Maiores do Tarot em paisagens sonoras, do Caos do Louco à completude do Mundo.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 bg-white/5 p-6 rounded-xl border border-white/10">
               <div>
                  <span className="block text-xs text-gray-500 uppercase">Próxima Fase</span>
                  <span className="text-white font-medium">Eletrônica & Frequência</span>
               </div>
               <div>
                  <span className="block text-xs text-gray-500 uppercase">Tecnologia</span>
                  <span className="text-white font-medium">Suno / Udio / Ableton</span>
               </div>
            </div>

            {/* Link para a página interna Higher Hz */}
            <div className="pt-4 flex justify-end lg:justify-start">
              <Link 
                href="https://marroc.xyz/higher-hz"
                className="group inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Entrar na Frequência <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
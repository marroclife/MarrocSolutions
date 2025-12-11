import React from "react";
import Link from "next/link"; // Importando Link
import { Terminal, Cpu, Globe, ArrowRight, ShieldCheck } from "lucide-react";

export function SolutionsSection() {
  return (
    <section className="relative w-full py-24 bg-[#030303] text-white overflow-hidden border-t border-white/5">
      
      {/* Background Decorativo (Grid Tecnológico) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] font-mono border border-cyan-500/30 text-cyan-400 rounded-full uppercase tracking-widest bg-cyan-950/10">
                Divisão B2B
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Marroc <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Solutions</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              O braço tecnológico do ecossistema. Transformamos a visão mística em 
              código de alta performance e sistemas de inteligência ética.
            </p>
          </div>

          {/* Link para a página interna Solutions */}
          <Link 
            href="/marrocsolutions" 
            className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            Conhecer a Divisão <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>

        {/* Grid de Serviços (A Proposta de Valor) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Card 1 */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <Globe className="text-cyan-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Arquitetura Digital</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sites imersivos e aplicações web que não apenas informam, mas envolvem. 
              Foco total em performance (Core Web Vitals) e SEO semântico.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <Cpu className="text-blue-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Sistemas de IA Ética</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Implementação do <strong>Guardião™</strong>. Chatbots, automações e 
              análise de dados que respeitam a privacidade e alinham-se aos valores da marca.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <ShieldCheck className="text-purple-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Consultoria Visionária</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Diagnóstico técnico e vibracional. Ajudamos marcas a encontrar 
              o equilíbrio entre inovação tecnológica e propósito humano.
            </p>
          </div>
        </div>

        {/* Feature: O Oráculo de Performance */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Terminal size={16} />
                <span className="text-xs font-mono uppercase">System Check</span>
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">
                Sua marca está pronta para o futuro?
              </h3>
              <p className="text-gray-400 mb-8">
                O Oráculo analisa seu código atual em busca de falhas de performance 
                e oportunidades de inovação com IA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  placeholder="www.suamarca.com.br" 
                  className="bg-black/50 border border-white/20 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:border-cyan-500 font-mono text-sm"
                />
                <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                  Analisar Agora
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-2">* Diagnóstico gratuito preliminar.</p>
            </div>

            {/* Visual Abstracto de Código */}
            <div className="hidden md:block font-mono text-xs text-green-500/50 bg-black/50 p-6 rounded-lg border border-white/5 leading-loose select-none">
              <p>{`> Initiating protocol...`}</p>
              <p>{`> Connecting to The Guardian Node...`}</p>
              <p>{`> Analysis: PENDING`}</p>
              <p className="text-white/20">--------------------------------</p>
              <p>{`{`}</p>
              <p>{`  "target": "future_ready",`}</p>
              <p>{`  "status": "awaiting_input",`}</p>
              <p>{`  "ai_integration": true`}</p>
              <p>{`}`}</p>
              <div className="animate-pulse mt-2">_</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
import React from "react";
import { Check, Zap, Rocket, Crown } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5" id="planos">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Escolha sua Velocidade
          </h2>
          <p className="text-gray-400 font-mono text-sm">ARQUITETURA PRONTA PARA ESCALAR.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* PLANO 1 */}
          <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-8 flex flex-col hover:border-white/30 transition-colors">
            <div className="mb-4 bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center text-white">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Essencial</h3>
            <p className="text-gray-400 text-sm mb-6">Presença digital rápida e elegante.</p>
            <div className="text-3xl font-display text-white mb-6">
              <span className="text-sm text-gray-500 font-sans">A partir de</span> R$ 1.500
            </div>
            <ul className="space-y-3 mb-8 flex-1 font-mono text-xs text-gray-300">
              <li className="flex gap-2"><Check size={14} className="text-white"/> Site One-Page</li>
              <li className="flex gap-2"><Check size={14} className="text-white"/> Design Premium</li>
              <li className="flex gap-2"><Check size={14} className="text-white"/> Entrega em 72h</li>
            </ul>
            <a href="https://wa.me/5521992669980?text=Quero%20o%20plano%20Essencial" target="_blank" className="block w-full py-3 text-center border border-white/20 rounded-lg text-white hover:bg-white hover:text-black transition-all font-bold text-sm uppercase tracking-widest">
              Selecionar
            </a>
          </div>

          {/* PLANO 2 (DESTAQUE NEON) */}
          <div className="border border-neon-green/50 bg-deep-emerald/10 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_-10px_rgba(0,255,148,0.15)]">
            <div className="absolute top-0 right-0 bg-neon-green text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg font-mono uppercase">Mais Vendido</div>
            <div className="mb-4 bg-neon-green/20 w-12 h-12 rounded-lg flex items-center justify-center text-neon-green">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Negócio Local</h3>
            <p className="text-gray-400 text-sm mb-6">O pacote completo para captar clientes.</p>
            <div className="text-3xl font-display text-neon-green mb-6">
              <span className="text-sm text-gray-500 font-sans text-white">A partir de</span> R$ 2.500
            </div>
            <ul className="space-y-3 mb-8 flex-1 font-mono text-xs text-white">
              <li className="flex gap-2"><Check size={14} className="text-neon-green"/> Tudo do Essencial +</li>
              <li className="flex gap-2"><Check size={14} className="text-neon-green"/> Até 5 Páginas</li>
              <li className="flex gap-2"><Check size={14} className="text-neon-green"/> SEO Local (Google)</li>
              <li className="flex gap-2"><Check size={14} className="text-neon-green"/> Domínio Grátis (1 ano)</li>
            </ul>
            <a href="https://wa.me/5521992669980?text=Quero%20o%20plano%20Negocio" target="_blank" className="block w-full py-4 text-center bg-neon-green rounded-lg text-black hover:bg-white transition-all font-bold text-sm uppercase tracking-widest shadow-lg hover:shadow-neon-green/50">
              Contratar Agora
            </a>
          </div>

          {/* PLANO 3 */}
          <div className="border border-purple-500/30 bg-purple-950/5 rounded-2xl p-8 flex flex-col hover:border-purple-500/60 transition-colors">
            <div className="mb-4 bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center text-purple-400">
              <Crown size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ecossistema IA</h3>
            <p className="text-gray-400 text-sm mb-6">Automação total e Inteligência Artificial.</p>
            <div className="text-3xl font-display text-purple-400 mb-6">
              <span className="text-sm text-gray-500 font-sans text-white">Sob Medida</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1 font-mono text-xs text-gray-300">
              <li className="flex gap-2"><Check size={14} className="text-purple-500"/> Chatbot IA (Guardião)</li>
              <li className="flex gap-2"><Check size={14} className="text-purple-500"/> CRM no WhatsApp</li>
              <li className="flex gap-2"><Check size={14} className="text-purple-500"/> Área de Membros</li>
            </ul>
            <a href="https://wa.me/5521992669980?text=Quero%20o%20plano%20Ecossistema%20IA" target="_blank" className="block w-full py-3 text-center border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
              Agendar Diagnóstico
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
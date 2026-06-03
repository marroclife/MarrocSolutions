import Link from "next/link";
import { Star, Lock, Eye, Sparkles } from "lucide-react";

export default function RituaisClientPage() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen font-sans selection:bg-gold/30">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        
        {/* Cabeçalho */}
        <div className="mb-12 border-b border-white/10 pb-8 text-center md:text-left">
          <h1 className="font-display text-4xl md:text-5xl mb-4 text-white">Área do Cliente</h1>
          <p className="text-white/70 text-lg mb-2 font-light">
            Seu portal exclusivo para acessar materiais de sessão e análises profundas.
          </p>
          <p className="text-white/40 text-sm italic font-serif">
            "Respeitando a individualidade sagrada de cada frequência."
          </p>
        </div>

        <div className="space-y-12">
            
            {/* SEÇÃO: Clientes Ativos (Privado) */}
            <div className="space-y-6">
                <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Análises Premium Disponíveis
                </h2>

                {/* 1. Card Tamires (Novo - Tema Santuário) */}
                <div className="group relative overflow-hidden rounded-xl border border-[#e6b8a2]/30 bg-gradient-to-br from-[#151e1c] to-[#0f1614] p-8 transition-all duration-500 hover:border-[#e6b8a2]/60 hover:shadow-[0_0_30px_-10px_rgba(230,184,162,0.15)]">
                    <div className="absolute top-0 right-0 p-3 bg-[#e6b8a2]/10 rounded-bl-2xl border-b border-l border-[#e6b8a2]/20 flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-[#e6b8a2] font-bold">Novo</span>
                        <Sparkles className="w-3 h-3 text-[#e6b8a2] animate-pulse" />
                    </div>
                    
                    <div className="mb-6 relative z-10">
                        <h3 className="font-serif text-3xl text-[#e8e4dc] mb-2">Tamires Freitas Rossi</h3>
                        <p className="text-[#e8e4dc]/60 text-sm max-w-lg leading-relaxed font-light">
                            Tema: <strong>"Santuário de Pedra e Céu"</strong>. Uma análise focada na estrutura de Touro, na diplomacia de Libra e na visão da Águia Lunar.
                        </p>
                    </div>
                    
                    <Link 
                        href="/terapias/terapiasclient/tamires"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e6b8a2] text-[#151e1c] font-bold uppercase tracking-widest text-[10px] md:text-xs rounded hover:bg-white hover:shadow-[0_0_20px_rgba(230,184,162,0.4)] transition-all duration-300"
                    >
                        <Lock size={12} />
                        Acessar Santuário
                    </Link>

                    {/* Background Effect Tamires */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#e6b8a2]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#e6b8a2]/10 transition-colors" />
                </div>

                {/* 2. Card Serena (Tema Cósmico) */}
                <div className="group relative overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-black to-[#1a1500] p-8 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_30px_-10px_rgba(199,169,75,0.15)]">
                    <div className="absolute top-0 right-0 p-3 bg-gold/10 rounded-bl-2xl border-b border-l border-gold/20 flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Premium</span>
                        <Star className="w-3 h-3 text-gold animate-pulse" />
                    </div>
                    
                    <div className="mb-6 relative z-10">
                        <h3 className="font-serif text-3xl text-gold mb-2">Serena Barroca</h3>
                        <p className="text-white/60 text-sm max-w-lg leading-relaxed font-light">
                            Tema: <strong>"Cosmic Acoustic"</strong>. Uma imersão profunda nos portais da alma, vibrando na frequência do Ouro e do Som.
                        </p>
                    </div>
                    
                    <Link 
                        href="/terapias/terapiasclient/serena"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-bold uppercase tracking-widest text-[10px] md:text-xs rounded hover:bg-white hover:shadow-[0_0_20px_rgba(199,169,75,0.4)] transition-all duration-300"
                    >
                        <Lock size={12} />
                        Acessar Análise
                    </Link>

                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
                </div>
            </div>

            <div className="border-t border-white/5 my-12"></div>

            {/* SEÇÃO: Showcase Público */}
            <div>
                 <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-6 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Portfólio & Demonstração
                </h2>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white/[0.05] transition-all duration-500">
                    
                    <div className="text-center md:text-left relative z-10">
                        <div className="inline-block px-3 py-1 border border-purple-500/30 bg-purple-500/10 rounded-full text-[10px] uppercase tracking-widest text-purple-300 mb-3">
                            Modelo Público
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl text-white mb-2">Antonela Carreiras</h3>
                        <p className="text-white/50 text-sm max-w-md leading-relaxed">
                            Quer conhecer o nível de profundidade do nosso trabalho? <br className="hidden md:block"/>
                            Acesse este modelo de demonstração completo (visualização clássica).
                        </p>
                    </div>

                    <div className="relative z-10">
                         <a 
                            href="/terapias/mapa_anto.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Ver Mapa Modelo <Eye size={14} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    {/* Decorative Gradients for Showcase */}
                    <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                </div>
            </div>

            {/* Grid para Futuros Conteúdos (Menor destaque) */}
            <div className="grid gap-4 md:grid-cols-2 mt-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                <div className="border border-white/5 border-dashed rounded-xl p-6 text-center">
                    <h3 className="text-sm font-bold text-white mb-1">🃏 Tarot & Runas</h3>
                    <p className="text-white/30 text-xs">Em breve</p>
                </div>

                <div className="border border-white/5 border-dashed rounded-xl p-6 text-center">
                    <h3 className="text-sm font-bold text-white mb-1">🎙️ Gravações de Sessão</h3>
                    <p className="text-white/30 text-xs">Em breve</p>
                </div>
            </div>
        </div>

        {/* Nota de Rodapé e Voltar */}
        <div className="mt-20 text-center border-t border-white/5 pt-8">
            <Link href="/terapias" className="text-white/30 hover:text-gold text-xs uppercase tracking-widest transition-colors pb-1 border-b border-transparent hover:border-gold">
                ← Voltar para o Menu Principal
            </Link>
        </div>
      </div>
    </main>
  );
}
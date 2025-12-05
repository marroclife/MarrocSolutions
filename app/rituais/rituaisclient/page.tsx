// app/rituais/rituaisclient/page.tsx
import Link from "next/link";
import { Star, Lock } from "lucide-react";

export default function RituaisClientPage() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        
        {/* Cabeçalho */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="font-display text-4xl md:text-5xl mb-4">Área do Cliente</h1>
          <p className="text-white/70 text-lg mb-2">
            Conteúdo exclusivo para clientes — seus materiais de sessão e recursos.
          </p>
          <p className="text-white/40 text-sm italic font-serif">
            "Lembrando que cada análise é única, respeitando a individualidade sagrada de cada ser."
          </p>
        </div>

        <div className="space-y-8">
            
            {/* NOVO: Card Análise Premium Serena */}
            <div className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-black to-[#1a1500] p-8 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_30px_-10px_rgba(199,169,75,0.15)]">
                {/* Badge de Destaque */}
                <div className="absolute top-0 right-0 p-3 bg-gold/10 rounded-bl-2xl border-b border-l border-gold/20 flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Premium</span>
                    <Star className="w-4 h-4 text-gold animate-pulse" />
                </div>
                
                <div className="mb-6 relative z-10">
                    <h3 className="font-display text-3xl text-gold mb-2">Análise: Serena Barroca</h3>
                    <p className="text-white/60 text-sm max-w-lg leading-relaxed">
                        Relatório exclusivo <strong>"Cosmic Acoustic"</strong>. Uma imersão profunda nos portais da sua alma, desenhada sob medida para sua frequência vibracional.
                    </p>
                </div>
                
                <Link 
                    href="/rituais/rituaisclient/serena"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white hover:shadow-[0_0_20px_rgba(199,169,75,0.4)] transition-all duration-300"
                >
                    <Lock size={14} />
                    Acessar Análise (Senha)
                </Link>

                {/* Efeito de Fundo Sutil */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
            </div>

            {/* Seção Mapa Natal - Anto */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/[0.08] transition duration-300">
                <div>
                    <h2 className="text-xl font-bold mb-1 text-white">Análise: Antonela Carreiras</h2>
                    <p className="text-white/50 text-sm">
                        Visualização clássica do mapa astral.
                    </p>
                </div>
                
                <div>
                    <a 
                    href="/rituais/mapa_anto.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline rounded-full px-6 py-2 text-sm border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-colors"
                    >
                    🔮 Abrir Mapa
                    </a>
                </div>
            </div>

            {/* Grid para Futuros Conteúdos */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-50 hover:opacity-100 transition-opacity">
                    <h3 className="text-lg font-bold mb-2">🃏 Tarot & Runas</h3>
                    <p className="text-white/50 text-sm mb-4">
                        Resumos e gravações das suas sessões de Tarot e Runas.
                    </p>
                    <span className="text-xs border border-white/20 text-white/40 px-3 py-1 rounded-full">Em breve</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-50 hover:opacity-100 transition-opacity">
                    <h3 className="text-lg font-bold mb-2">🎙️ Gravações</h3>
                    <p className="text-white/50 text-sm mb-4">
                        Histórico de áudios das sessões anteriores.
                    </p>
                    <span className="text-xs border border-white/20 text-white/40 px-3 py-1 rounded-full">Em breve</span>
                </div>
            </div>
        </div>

        {/* Nota de Rodapé e Voltar */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
            <Link href="/rituais" className="text-white/40 hover:text-gold text-sm transition-colors border-b border-transparent hover:border-gold pb-1">
                ← Voltar para Menu de Rituais
            </Link>
        </div>
      </div>
    </main>
  );
}
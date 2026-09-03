import Link from "next/link";
import { Lock, Sparkles } from "lucide-react";

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

        {/* Card de acesso centralizado */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10 md:p-14 text-center hover:bg-white/[0.05] transition-all duration-500">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Lock className="w-7 h-7 text-gold" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
            Portal do Cliente
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed mb-8">
            Digite sua chave de acesso única para visualizar seu material exclusivo.
            Cada frequência tem seu próprio espaço sagrado.
          </p>

          <Link
            href="/terapias/login"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(199,169,75,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={14} />
              Acessar Portal
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        {/* Nota de Rodapé e Voltar */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <Link href="/terapias" className="text-white/30 hover:text-gold text-xs uppercase tracking-widest transition-colors pb-1 border-b border-transparent hover:border-gold">
            ← Voltar para o Menu Principal
          </Link>
        </div>
      </div>
    </main>
  );
}

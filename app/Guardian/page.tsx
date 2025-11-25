"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Zap } from "lucide-react";

const OPAL_URL = "https://opal.google/_app/?flow=drive:/1lKi3fjTh7g0YeMscFX56VmS9cGuW01QL&shared&mode=app";

export default function GuardianEmbedPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="h-screen w-screen bg-[#050505] text-paper overflow-hidden relative flex flex-col">
      
      {/* --- NAV FLUTUANTE --- */}
      <nav className="absolute top-6 left-6 z-20">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-gold transition uppercase tracking-widest bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-gold/50 shadow-lg"
        >
          <ArrowLeft size={14} /> Voltar ao Nexus
        </Link>
      </nav>

      {/* --- LOADER (Enquanto o Google carrega) --- */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505]">
           <Loader2 className="w-12 h-12 text-gold animate-spin mb-4" />
           <p className="text-gold/60 font-mono text-sm tracking-[0.3em] animate-pulse">
             ESTABELECENDO CONEXÃO...
           </p>
        </div>
      )}

      {/* --- O PORTAL (IFRAME) --- */}
      <div className="flex-1 w-full h-full relative z-0">
        <iframe
          src={OPAL_URL}
          title="O Guardião da Espiral"
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
          allow="microphone; clipboard-read; clipboard-write"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>

      {/* --- BARRA INFERIOR (Marca D'água Sutil) --- */}
      <div className="absolute bottom-4 right-6 z-20 pointer-events-none opacity-50">
        <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <Zap size={10} /> Powered by Google Opal
        </div>
      </div>

    </main>
  );
}
import React from 'react';

export default function SoberaniaDigitalPage() {
  return (
    <div className="min-h-screen bg-black w-full flex flex-col">
      {/* Header de Contexto para o Vídeo - Minimalista e High-End */}
      <div className="w-full p-6 flex justify-between items-center border-b border-white/10 bg-stone-950/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase font-bold">
            Soberania Digital • Framework de Inteligência
          </span>
        </div>
        <div className="text-[10px] font-mono text-stone-500 uppercase tracking-tighter">
          Marroc Solutions / Lab de Inovação
        </div>
      </div>

      {/* Container do App Interativo */}
      <div className="flex-1 relative w-full h-[calc(100vh-64px)] overflow-hidden bg-black">
        <iframe 
          src="/soberania-digital/index.html" 
          className="absolute inset-0 w-full h-full border-none"
          title="Soberania Digital Ecosystem"
          allow="accelerometer; gyroscope; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>

      {/* Floating Footer Indicator para Green Screen - Auxilia na composição do vídeo */}
      <div className="fixed bottom-6 right-6 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
        <p className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">
          Sincronizando Fluxos de Dados • <span className="text-gold-500 font-bold">LIVE</span>
        </p>
      </div>
    </div>
  );
}

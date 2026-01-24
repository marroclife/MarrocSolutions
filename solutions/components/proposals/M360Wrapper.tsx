import dynamic from 'next/dynamic';
import React from 'react';

// Carrega o M360 dinamicamente para evitar problemas
const M360Component = dynamic(() => import('../../app/propostas/M360').then(mod => ({ default: mod.default })), {
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-[#050505]">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/60">Carregando mockup...</p>
      </div>
    </div>
  ),
  ssr: false,
});

export const M360Wrapper: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Espaço para o M360 */}
      <M360Component />
    </div>
  );
};

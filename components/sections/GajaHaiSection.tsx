// components/sections/GajaHaiSection.tsx
// Criado em 03/06/2026.
// Cor: âmbar/cobre (amber-500) — combina com o lado "loja, dropshipping, artefatos".
// Conteúdo: store.marroc.xyz (loja do Gaja Hai, marca de vestuário & artefatos).

import React from "react";
import Link from "next/link";
import { ShoppingBag, Shirt, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

export function GajaHaiSection() {
  const STORE_URL = "https://store.marroc.xyz";

  return (
    <section className="relative w-full py-24 bg-[#030303] text-white overflow-hidden border-t border-white/5">
      {/* Detalhe Cobre de Fundo */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] font-mono border border-amber-500/30 text-amber-500 rounded-full uppercase tracking-widest bg-amber-500/5">
                Dropshipping & Artefatos
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Gaja{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Hai
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              Vestuário & artefatos do ecossistema Marroc. Curadoria de produtos
              alinhados com a estética, propósito e frequência da marca.
            </p>
          </div>

          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-amber-400 hover:text-amber-400 transition-all"
          >
            Visitar Loja <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <Shirt className="text-amber-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Vestuário</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Camisetas, moletons e peças Statement. Estética Hertz & Bits
              que comunica o ecossistema sem precisar explicar.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/50 hover:bg-white/[0.07] transition-all duration-300">
            <Sparkles className="text-orange-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Artefatos</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cristais, incensos, joias e objetos rituais. Cada peça selecionada
              com a mesma curadoria dos sets ao vivo.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/50 hover:bg-white/[0.07] transition-all duration-300">
            <ShoppingBag className="text-amber-300 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Dropshipping</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Modelo de operação enxuta: catálogo curado + fulfillment terceirizado.
              Estoque zero, risco mínimo, marca forte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

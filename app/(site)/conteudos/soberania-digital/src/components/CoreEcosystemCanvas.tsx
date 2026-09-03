import React, { useState } from "react";

interface NodeProps {
  name: string;
  type: "rented" | "sovereign";
  description: string;
  icon: string;
  color: string;
}

export default function CoreEcosystemCanvas() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: NodeProps[] = [
    {
      name: "Meta / Instagram",
      type: "rented",
      description: "Terreno Alugado. Algoritmo instável, alcance orgânico artificialmente restrito (<3%) e risco constante de exclusão.",
      icon: "📸",
      color: "#a020f0"
    },
    {
      name: "ByteDance / TikTok",
      type: "rented",
      description: "Atenção Efêmera. Retenção baixíssima, dependência completa de tendências rápidas e entrega imprevisível.",
      icon: "🎥",
      color: "#a020f0"
    },
    {
      name: "Google / YouTube",
      type: "rented",
      description: "Tráfego Descentralizado. Excelente busca, mas a audiência pertence à plataforma e às regras de monetização alheias.",
      icon: "📺",
      color: "#a020f0"
    },
    {
      name: "Soberania Core (Seu Domínio)",
      type: "sovereign",
      description: "O Castelo Digital. Controle absoluto de dados, pixel de rastreio próprio, audiência proprietária e zero pedágio algorítmico.",
      icon: "🏰",
      color: "#00ff41"
    }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center bg-black/60 rounded-3xl p-6 border border-zinc-800/80 overflow-hidden glow-purple">
      {/* Reticle, scanner and ambient details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,32,240,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-scanline pointer-events-none" />
      
      {/* Decorative Matrix Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-30" />

      {/* SVG Animation Arena */}
      <svg className="absolute w-full h-full inset-0 pointer-events-none" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="purpleToGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a020f0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ff41" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <stop offset="0%" stopColor="#a020f0" />
            <stop offset="100%" stopColor="#00ff41" />
          </filter>
        </defs>

        {/* Orbit Rings */}
        <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(160,32,240,0.15)" strokeWidth="1.5" strokeDasharray="5 7 animate-orbit-clockwise" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(0,255,65,0.15)" strokeWidth="1" strokeDasharray="3 3 animate-orbit-counter" />

        {/* Connecting Data Lanes with animated dash arrays */}
        <line x1="80" y1="100" x2="200" y2="200" stroke="url(#purpleToGreen)" strokeWidth="1.5" strokeDasharray="8 8" className="opacity-60 animate-[dash_2s_linear_infinite]" />
        <line x1="320" y1="100" x2="200" y2="200" stroke="url(#purpleToGreen)" strokeWidth="1.5" strokeDasharray="8 8" className="opacity-60 animate-[dash_2.5s_linear_infinite]" />
        <line x1="200" y1="320" x2="200" y2="200" stroke="url(#purpleToGreen)" strokeWidth="1.5" strokeDasharray="8 8" className="opacity-60 animate-[dash_3s_linear_infinite]" />

        {/* Central Sovereign Platform Anchor */}
        <g className="cursor-pointer pointer-events-auto transform transition-all duration-300 hover:scale-110"
           onClick={() => setActiveNode("sovereign")}>
          <circle cx="200" cy="200" r="42" fill="#000000" stroke="#00ff41" strokeWidth="2.5" className="glow-green" />
          <circle cx="200" cy="200" r="34" fill="rgba(0,255,65,0.05)" stroke="rgba(0,255,65,0.3)" strokeWidth="1" />
        </g>
        
        {/* Orbit Node Targets (Drawn for Visual Alignment) */}
        <g className="cursor-pointer pointer-events-auto transform transition-all duration-300 hover:scale-110"
           onClick={() => setActiveNode("rented-insta")}>
          <circle cx="80" cy="100" r="22" fill="#000000" stroke="#a020f0" strokeWidth="1.5" />
        </g>
        <g className="cursor-pointer pointer-events-auto transform transition-all duration-300 hover:scale-110"
           onClick={() => setActiveNode("rented-tiktok")}>
          <circle cx="320" cy="100" r="22" fill="#000000" stroke="#a020f0" strokeWidth="1.5" />
        </g>
        <g className="cursor-pointer pointer-events-auto transform transition-all duration-300 hover:scale-110"
           onClick={() => setActiveNode("rented-youtube")}>
          <circle cx="200" cy="320" r="22" fill="#000000" stroke="#a020f0" strokeWidth="1.5" />
        </g>

        {/* Animated Traveling Data Packets */}
        <circle cx="200" cy="200" r="4" fill="#00ff41" className="animate-ping" style={{ transformOrigin: "200px 200px" }} />
      </svg>

      {/* Render Node Details Interactively */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
        {/* Top Nodes */}
        <div className="flex justify-between w-full">
          {/* Instagram */}
          <button
            id="node-insta-btn"
            onClick={() => setActiveNode(activeNode === "rented-insta" ? null : "rented-insta")}
            className={`pointer-events-auto px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 flex items-center gap-1.5 backdrop-blur-sm ${
              activeNode === "rented-insta" 
                ? "bg-purple-950/85 text-purple-400 border-purple-500 scale-105" 
                : "bg-black/80 text-zinc-400 border-zinc-800 hover:border-purple-800"
            }`}
          >
            <span className="text-sm">📸</span> Instagram
          </button>

          {/* TikTok */}
          <button
            id="node-tiktok-btn"
            onClick={() => setActiveNode(activeNode === "rented-tiktok" ? null : "rented-tiktok")}
            className={`pointer-events-auto px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 flex items-center gap-1.5 backdrop-blur-sm ${
              activeNode === "rented-tiktok" 
                ? "bg-purple-950/85 text-purple-400 border-purple-500 scale-105" 
                : "bg-black/80 text-zinc-400 border-zinc-800 hover:border-purple-800"
            }`}
          >
            <span className="text-sm">🎥</span> TikTok
          </button>
        </div>

        {/* Center Sovereign Node Dashboard Display */}
        <div className="flex flex-col items-center justify-center py-2">
          {/* Central Castle Icon representation on top of the SVG anchor */}
          <button
            id="node-core-btn"
            onClick={() => setActiveNode(activeNode === "sovereign" ? null : "sovereign")}
            className={`pointer-events-auto transform transition-all duration-300 w-16 h-16 rounded-full flex flex-col items-center justify-center relative ${
              activeNode === "sovereign" ? "scale-105" : "hover:scale-105"
            }`}
          >
            <span className="text-3xl filter drop-shadow-[0_0_12px_#00ff41] animate-bounce duration-[2.5s]">🏰</span>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#00ff41] mt-1 glow-text-green uppercase">SOBERANO</span>
          </button>
        </div>

        {/* Bottom Nodes */}
        <div className="flex justify-center w-full">
          {/* YouTube */}
          <button
            id="node-youtube-btn"
            onClick={() => setActiveNode(activeNode === "rented-youtube" ? null : "rented-youtube")}
            className={`pointer-events-auto px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 flex items-center gap-1.5 backdrop-blur-sm ${
              activeNode === "rented-youtube" 
                ? "bg-purple-950/85 text-purple-400 border-purple-500 scale-105" 
                : "bg-black/80 text-zinc-400 border-zinc-800 hover:border-purple-800"
            }`}
          >
            <span className="text-sm">📺</span> YouTube
          </button>
        </div>
      </div>

      {/* Interactive Hub detail overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 border border-zinc-800/90 rounded-2xl p-3.5 backdrop-blur-md transition-all duration-300 pointer-events-auto">
        {!activeNode ? (
          <div className="text-center">
            <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              ⚡ Sistema de Soberania Interativo
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Selecione um nó do ecossistema para auditar os fluxos de atenção.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                {activeNode === "sovereign" ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[#00ff41] glow-text-green">Núcleo Soberano</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-purple-400">Canal de Captação Externa</span>
                  </>
                )}
              </span>
              <button 
                id="clear-node-selection-btn"
                className="text-[9px] font-mono text-zinc-500 hover:text-zinc-300 px-1"
                onClick={() => setActiveNode(null)}
              >
                [reset]
              </button>
            </div>
            
            {activeNode === "rented-insta" && (
              <div>
                <h4 className="text-xs font-semibold text-white">Instagram (Rede Alugada)</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                  Tráfego de alta fricção. O algoritmo pune links externos. Solução: Capturar o lead direcionando-os ao ecossistema próprio imediatamente ("Link na Bio").
                </p>
              </div>
            )}
            
            {activeNode === "rented-tiktok" && (
              <div>
                <h4 className="text-xs font-semibold text-white">TikTok (Atenção Efêmera)</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                  Interesse relâmpago. Requer Landing Pages ultra-leves e promessas magnéticas de recompensa imediata para transformar scrolls casuais em contatos fixos.
                </p>
              </div>
            )}

            {activeNode === "rented-youtube" && (
              <div>
                <h4 className="text-xs font-semibold text-white">YouTube (Busca & Retenção)</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                  Alto poder educativo. Perfeito para introduzir teses complexas, ancorando o lead com links diretos de conversão na descrição e comentários fixados.
                </p>
              </div>
            )}

            {activeNode === "sovereign" && (
              <div>
                <h4 className="text-xs font-semibold text-white">Seu Ecossistema (O Castelo)</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                  Onde a conversão acontece. Livre de distrações concorrentes, com autonomia de pixels, cookies e formulários otimizados de alta conversão.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

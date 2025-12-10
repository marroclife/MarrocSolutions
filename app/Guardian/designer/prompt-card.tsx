'use client';

import React, { useState, useCallback } from 'react';
import { PromptCardProps } from './designer-types';

export const PromptCard: React.FC<PromptCardProps> = ({ 
  title, 
  promptText, 
  delay = 0,
  imageStatus,
  imageUrl,
  onSelect,
  isSelected
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering selection
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }, [promptText]);

  // Animation delay style
  const fadeStyle = {
    animation: `fadeIn 0.5s ease-out forwards`,
    animationDelay: `${delay}ms`,
    opacity: 0,
  };

  return (
    <div 
      onClick={onSelect}
      className={`
        border p-4 flex flex-col h-full relative group transition-all duration-300 cursor-pointer
        ${isSelected 
          ? 'border-[#00ffff] bg-[#001111] shadow-[0_0_20px_#00ffff40] scale-[1.02]' 
          : 'border-[#004444] bg-[#0a0a0a] hover:border-[#008888]'
        }
      `}
      style={fadeStyle}
    >
      {/* Selection Marker */}
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-[#00ffff] text-black text-xs font-bold px-2 py-1 z-20">
          SELECTED
        </div>
      )}

      {/* Decorative corner markers */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${isSelected ? 'border-[#00ffff]' : 'border-[#004444]'}`}></div>
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${isSelected ? 'border-[#00ffff]' : 'border-[#004444]'}`}></div>
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${isSelected ? 'border-[#00ffff]' : 'border-[#004444]'}`}></div>
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${isSelected ? 'border-[#00ffff]' : 'border-[#004444]'}`}></div>

      <div className="mb-4 border-b border-[#004444] pb-2 flex justify-between items-center">
        <h3 className={`text-lg font-bold tracking-widest ${isSelected ? 'neon-text' : 'text-[#008888]'}`}>{title}</h3>
        {imageStatus === 'LOADING' && (
          <div className="w-2 h-2 bg-[#ff00ff] rounded-full animate-ping"></div>
        )}
        {imageStatus === 'SUCCESS' && (
          <div className="w-2 h-2 bg-[#00ffff] rounded-full shadow-[0_0_5px_#00ffff]"></div>
        )}
      </div>

      {/* Visual Placeholder / Image Area */}
      <div className={`w-full aspect-square mb-4 border border-dashed border-[#004444] flex items-center justify-center bg-[#000505] overflow-hidden relative transition-colors ${imageStatus === 'IDLE' ? 'group-hover:border-[#008888]' : 'border-[#00ffff]'}`}>
        
        {imageStatus === 'IDLE' && (
          <span className="text-[#004444] text-xs group-hover:text-[#008888] transition-colors">
            [IMG_PLACEHOLDER_404]
          </span>
        )}

        {imageStatus === 'LOADING' && (
          <div className="flex flex-col items-center justify-center space-y-2 w-full h-full bg-[#000505]">
             <div className="w-8 h-8 border-2 border-[#00ffff] border-t-transparent rounded-full animate-spin"></div>
             <span className="text-[10px] text-[#00ffff] animate-pulse tracking-widest">RENDERING_TEXTURES...</span>
             {/* Scanning effect */}
             <div className="absolute top-0 left-0 w-full h-1 bg-[#00ffff] opacity-50 animate-[scan_2s_linear_infinite]"></div>
          </div>
        )}

        {imageStatus === 'ERROR' && (
          <div className="flex flex-col items-center text-red-500">
            <span className="text-2xl mb-1">⚠️</span>
            <span className="text-[10px] tracking-widest">RENDER_FAILURE</span>
          </div>
        )}

        {imageStatus === 'SUCCESS' && imageUrl && (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover animate-in fade-in duration-700"
          />
        )}
      </div>

      <div className="flex-grow mb-4 overflow-y-auto max-h-48 pr-2 scrollbar-thin">
        <p className="text-xs leading-relaxed text-[#ccffff] opacity-90 font-light">
          {promptText}
        </p>
      </div>

      <button
        onClick={handleCopy}
        className={`
          w-full py-3 px-4 text-sm font-bold uppercase tracking-wider
          border border-[#00ffff] transition-all duration-200
          ${copied 
            ? 'bg-[#00ffff] text-black shadow-[0_0_10px_#00ffff]' 
            : 'bg-transparent text-[#00ffff] hover:bg-[#00ffff10] hover:shadow-[0_0_10px_#00ffff]'
          }
        `}
      >
        {copied ? '>> COPIED_TO_CLIPBOARD <<' : 'INIT_COPY_SEQUENCE()'}
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

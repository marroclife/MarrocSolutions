'use client';

import React, { useState, useCallback, useRef } from 'react';
import { generateDesignSpecs, generateDesignImage, processImage } from './gemini';
import { PromptCard } from './prompt-card';
import { AppState, DesignSpecs, ImageStatus, ProcessingMode, ProcessingState } from './designer-types';

// Global styles for this specific designer module
const DesignerStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
    
    .marroc-designer {
      font-family: 'Space Mono', monospace;
      background-color: #050505;
      color: #00ffff;
    }
    .neon-border {
      box-shadow: 0 0 10px #00ffff, inset 0 0 5px #00ffff;
    }
    .neon-text {
      text-shadow: 0 0 5px #00ffff;
    }
    .marroc-designer ::-webkit-scrollbar {
      width: 8px;
    }
    .marroc-designer ::-webkit-scrollbar-track {
      background: #050505;
    }
    .marroc-designer ::-webkit-scrollbar-thumb {
      background: #004444;
    }
    .marroc-designer ::-webkit-scrollbar-thumb:hover {
      background: #00ffff;
    }
  `}} />
);

interface ImageState {
  status: ImageStatus;
  url: string | null;
}

const initialImageState: ImageState = { status: 'IDLE', url: null };

export default function DesignerPage() {
  const [concept, setConcept] = useState('');
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [specs, setSpecs] = useState<DesignSpecs | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Separate state for each card's image
  const [backImage, setBackImage] = useState<ImageState>(initialImageState);
  const [leftImage, setLeftImage] = useState<ImageState>(initialImageState);
  const [rightImage, setRightImage] = useState<ImageState>(initialImageState);

  // Post Processing State
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [procState, setProcState] = useState<ProcessingState>({ 
    status: 'IDLE', 
    mode: null, 
    resultUrl: null 
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerImageGeneration = async (specs: DesignSpecs) => {
    // Helper to generate individual image
    const genImage = async (prompt: string, setter: React.Dispatch<React.SetStateAction<ImageState>>) => {
      setter({ status: 'LOADING', url: null });
      try {
        const url = await generateDesignImage(prompt);
        setter({ status: 'SUCCESS', url });
      } catch (err) {
        console.error(err);
        setter({ status: 'ERROR', url: null });
      }
    };

    // Trigger all 3 in parallel
    Promise.all([
      genImage(specs.backPrompt, setBackImage),
      genImage(specs.leftSleevePrompt, setLeftImage),
      genImage(specs.rightSleevePrompt, setRightImage),
    ]);
  };

  const handleGenerate = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concept.trim()) return;

    // API Key Check for Generation
    try {
      const aiStudio = (window as any).aistudio;
      if (aiStudio) {
        const hasKey = await aiStudio.hasSelectedApiKey();
        if (!hasKey) {
          await aiStudio.openSelectKey();
          const hasKeyAfter = await aiStudio.hasSelectedApiKey();
          if (!hasKeyAfter) return;
        }
      }
    } catch (e) {
      // Ignore errors if window.aistudio doesn't exist
    }

    setAppState(AppState.GENERATING);
    setError(null);
    setSpecs(null);
    setSelectedCardIndex(null);
    
    // Reset images
    setBackImage(initialImageState);
    setLeftImage(initialImageState);
    setRightImage(initialImageState);

    try {
      // Step 1: Generate Text Specs
      const result = await generateDesignSpecs(concept);
      setSpecs(result);
      setAppState(AppState.COMPLETE);

      // Step 2: Trigger Image Generation immediately after text is ready
      triggerImageGeneration(result);

    } catch (err) {
      setAppState(AppState.ERROR);
      setError("SYSTEM_FAILURE: Unable to connect to Design Core. Please retry.");
    }
  }, [concept]);

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index);
    setUploadedImage(null); // Clear upload to focus on card
    setProcState({ status: 'IDLE', mode: null, resultUrl: null });
    
    // Scroll to processing unit
    const element = document.getElementById('processing-unit');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setSelectedCardIndex(null); // Deselect cards
        setProcState({ status: 'IDLE', mode: null, resultUrl: null });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcessing = async (mode: ProcessingMode) => {
    let sourceUrl: string | null = null;

    if (selectedCardIndex !== null) {
      const imageMap = [backImage, leftImage, rightImage];
      sourceUrl = imageMap[selectedCardIndex].url;
    } else if (uploadedImage) {
      sourceUrl = uploadedImage;
    }

    if (!sourceUrl) return;

    // API Key Check for Pro Model
    try {
      const aiStudio = (window as any).aistudio;
      if (aiStudio) {
        const hasKey = await aiStudio.hasSelectedApiKey();
        if (!hasKey) {
          await aiStudio.openSelectKey();
          const hasKeyAfter = await aiStudio.hasSelectedApiKey();
          if (!hasKeyAfter) return;
        }
      }
    } catch (e) {
      // Ignore errors if window.aistudio doesn't exist
    }

    setProcState({ status: 'LOADING', mode: mode, resultUrl: null });

    try {
      const result = await processImage(sourceUrl, mode);
      setProcState({ status: 'SUCCESS', mode: mode, resultUrl: result });
    } catch (err) {
      console.error(err);
      setProcState({ status: 'ERROR', mode: mode, resultUrl: null });
    }
  };

  // Determine active source name for UI
  const getActiveSourceName = () => {
    if (uploadedImage) return 'UPLOADED_ASSET';
    if (selectedCardIndex === 0) return 'BACK_PRINT';
    if (selectedCardIndex === 1) return 'LEFT_SLEEVE';
    if (selectedCardIndex === 2) return 'RIGHT_SLEEVE';
    return null;
  };

  const activeSource = getActiveSourceName();
  const activeImageUrl = uploadedImage || (selectedCardIndex !== null ? [backImage, leftImage, rightImage][selectedCardIndex]?.url : null);

  return (
    <div className="marroc-designer min-h-screen bg-[#050505] text-[#00ffff] font-mono">
      <DesignerStyles />
      <div className="p-4 md:p-8 flex flex-col max-w-7xl mx-auto pb-24">
        {/* Header */}
        <header className="mb-12 border-b border-[#00ffff] pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter neon-text mb-1">
              MARROC <span className="text-xs md:text-lg font-normal opacity-70 align-top">DESIGN ENGINE v1.0</span>
            </h1>
            <p className="text-xs text-[#008888]">
              // TECHNO-SHAMANISM AESTHETIC INTEGRATION
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs text-[#00ffff] animate-pulse">SYS_ONLINE</div>
            <div className="text-[10px] text-[#004444]">{new Date().toISOString().split('T')[0]}</div>
          </div>
        </header>

        {/* Input Section */}
        <section className="mb-12">
          <form onSubmit={handleGenerate} className="w-full relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative group">
                <label 
                  htmlFor="concept" 
                  className="absolute -top-3 left-4 bg-[#050505] px-2 text-xs text-[#00ffff] z-10"
                >
                  ENTER_DESIGN_CONCEPT
                </label>
                <input
                  id="concept"
                  type="text"
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  placeholder="e.g. Cyberpunk Ganesh in Neon Rain..."
                  className="w-full bg-[#050505] border border-[#004444] p-4 text-[#00ffff] placeholder-[#004444] focus:outline-none focus:border-[#00ffff] focus:shadow-[0_0_10px_#00ffff40] transition-all text-lg font-mono"
                  autoComplete="off"
                  disabled={appState === AppState.GENERATING}
                />
              </div>
              <button
                type="submit"
                disabled={appState === AppState.GENERATING || !concept.trim()}
                className={`
                  px-8 py-4 font-bold tracking-widest uppercase border border-[#00ffff]
                  transition-all duration-300 md:w-64
                  ${appState === AppState.GENERATING 
                    ? 'bg-[#002222] text-[#004444] cursor-not-allowed' 
                    : 'bg-[#00ffff] text-black hover:bg-[#ccffff] hover:shadow-[0_0_20px_#00ffff]'
                  }
                `}
              >
                {appState === AppState.GENERATING ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin h-4 w-4 border-2 border-[#004444] border-t-transparent rounded-full"></span>
                    PROCESSING
                  </span>
                ) : (
                  'INITIALIZE'
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Error Display */}
        {appState === AppState.ERROR && (
          <div className="border border-red-500 bg-red-900/10 p-4 mb-8 text-red-400 font-mono text-center">
            {error}
          </div>
        )}

        {/* Results Dashboard */}
        {appState === AppState.COMPLETE && specs && (
          <main className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Analysis Section */}
            <div className="mb-12 border-l-2 border-[#00ffff] pl-4 py-2 bg-gradient-to-r from-[#00ffff05] to-transparent">
              <h2 className="text-sm font-bold text-[#008888] mb-2 uppercase tracking-wider">// Concept Analysis</h2>
              <p className="text-lg md:text-xl text-[#ccffff] leading-relaxed max-w-4xl">
                {specs.analysis}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              <PromptCard 
                title="BACK_PRINT [MASTER]" 
                promptText={specs.backPrompt} 
                delay={100}
                imageStatus={backImage.status}
                imageUrl={backImage.url}
                onSelect={() => handleCardSelect(0)}
                isSelected={selectedCardIndex === 0}
              />
              <PromptCard 
                title="LEFT_SLEEVE [INSIGNIA]" 
                promptText={specs.leftSleevePrompt} 
                delay={300}
                imageStatus={leftImage.status}
                imageUrl={leftImage.url}
                onSelect={() => handleCardSelect(1)}
                isSelected={selectedCardIndex === 1}
              />
              <PromptCard 
                title="RIGHT_SLEEVE [DATA]" 
                promptText={specs.rightSleevePrompt} 
                delay={500}
                imageStatus={rightImage.status}
                imageUrl={rightImage.url}
                onSelect={() => handleCardSelect(2)}
                isSelected={selectedCardIndex === 2}
              />
            </div>
            
            <div className="mt-12 text-center text-[#004444] text-xs uppercase tracking-[0.2em]">
              // OUTPUT_COMPLETE // READY_FOR_ENHANCEMENT
            </div>
          </main>
        )}

        {/* Idle State Decorator (Only show if not processing results) */}
        {appState === AppState.IDLE && (
          <div className="mb-16 flex items-center justify-center opacity-20 pointer-events-none select-none">
            <div className="text-center">
              <div className="text-6xl md:text-9xl font-bold border-4 border-[#004444] p-8 inline-block rotate-45 transform">
                M
              </div>
              <div className="mt-8 text-[#00ffff] tracking-[1em] text-xs">AWAITING INPUT</div>
            </div>
          </div>
        )}

        {/* Post Processing Unit - Always Available */}
        <section id="processing-unit" className="border-t border-[#004444] pt-8 mt-auto">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              POST-PROCESSING UNIT <span className="text-[#00ffff]">_v2</span>
            </h2>
            <span className="bg-[#002222] text-[#00ffff] text-[10px] px-2 py-1 border border-[#004444]">
                GEMINI-3-PRO-IMAGE // ENABLED
            </span>
          </div>

          {!activeSource ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-dashed border-[#004444] bg-[#0a0a0a] p-12 rounded-sm">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-[#008888] font-bold">OPTION A: GENERATE DESIGN</p>
                  <p className="text-xs text-[#004444]">Enter a concept above and select a generated card to enhance.</p>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center space-y-4 border-l border-[#004444] pl-8">
                  <p className="text-[#00ffff] font-bold">OPTION B: UPLOAD ASSET</p>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-3 border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff10] transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    UPLOAD SOURCE FILE
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    accept="image/*" 
                    className="hidden" 
                  />
                  <p className="text-xs text-[#004444]">Supports PNG, JPG (Max 5MB)</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-[#004444] bg-[#0a0a0a] p-6 relative overflow-hidden animate-in fade-in duration-500">
              {/* Background Grid Decoration */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
              </div>

              {/* Controls */}
              <div className="relative z-10 flex flex-col justify-center space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-[#00ffff] font-bold">TARGET_SOURCE: <span className="text-white">{activeSource}</span></h3>
                    <button 
                      onClick={() => {
                        setUploadedImage(null);
                        setSelectedCardIndex(null);
                      }}
                      className="text-[10px] text-[#ff00ff] hover:text-white underline"
                    >
                      [RESET_SOURCE]
                    </button>
                  </div>

                  {/* Preview Thumbnail for Context */}
                  {activeImageUrl && (
                    <div className="w-24 h-24 mb-4 border border-[#004444]">
                        <img src={activeImageUrl} alt="Source" className="w-full h-full object-cover opacity-50" />
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => handleProcessing('UPSCALE')}
                      disabled={procState.status === 'LOADING'}
                      className="flex items-center justify-between p-4 border border-[#00ffff] bg-[#001111] hover:bg-[#00ffff20] transition-all group"
                    >
                      <div className="text-left">
                        <div className="font-bold text-[#00ffff]">ENHANCE RESOLUTION (4K)</div>
                        <div className="text-[10px] text-gray-400">UPSCALING // DETAIL_INJECTION // SHARPEN</div>
                      </div>
                      <span className="text-xl group-hover:scale-125 transition-transform">✨</span>
                    </button>

                    <button 
                      onClick={() => handleProcessing('REMOVE_BG')}
                      disabled={procState.status === 'LOADING'}
                      className="flex items-center justify-between p-4 border border-[#00ffff] bg-[#001111] hover:bg-[#00ffff20] transition-all group"
                    >
                        <div className="text-left">
                        <div className="font-bold text-[#00ffff]">REMOVE BACKGROUND</div>
                        <div className="text-[10px] text-gray-400">ISOLATION // ALPHA_SIMULATION // CLEAN_CUT</div>
                      </div>
                      <span className="text-xl group-hover:scale-125 transition-transform">✂️</span>
                    </button>
                  </div>
                </div>

                <div className="text-[10px] text-[#008888]">
                  NOTE: HIGH-FIDELITY PROCESSING REQUIRES ADDITIONAL COMPUTATIONAL CREDITS (PAID API KEY).
                  <br />
                  <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-[#00ffff]">VIEW BILLING DOCS</a>
                </div>
              </div>

              {/* Viewport */}
              <div className="relative z-10 aspect-square bg-[#000505] border border-[#004444] flex items-center justify-center overflow-hidden">
                {procState.status === 'IDLE' && activeImageUrl && (
                    <img src={activeImageUrl} alt="Original" className="w-full h-full object-contain opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                )}
                
                {procState.status === 'LOADING' && (
                    <div className="flex flex-col items-center absolute inset-0 bg-[#000505] justify-center z-20">
                      <div className="w-12 h-12 border-4 border-[#00ffff] border-t-transparent rounded-full animate-spin mb-4"></div>
                      <div className="text-[#00ffff] text-xs animate-pulse tracking-widest">
                        PROCESSING_{procState.mode}...
                      </div>
                    </div>
                )}

                {procState.status === 'SUCCESS' && procState.resultUrl && (
                  <div className="relative w-full h-full group z-20 bg-[#000505]">
                    <img src={procState.resultUrl} className="w-full h-full object-contain" alt="Processed Result" />
                    <a 
                      href={procState.resultUrl} 
                      download={`MARROC_${procState.mode}_${Date.now()}.png`}
                      className="absolute bottom-4 right-4 bg-[#00ffff] text-black px-4 py-2 text-xs font-bold uppercase hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      DOWNLOAD_ASSET
                    </a>
                  </div>
                )}

                  {procState.status === 'ERROR' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#000505] z-20 text-red-500 text-xs">
                      PROCESSING_FAILURE // CHECK API KEY
                    </div>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
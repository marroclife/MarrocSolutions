"use client";

import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Feather, Camera, Film, BookOpen, Loader2, Download } from 'lucide-react';
import { cn } from "@/lib/utils";

// --- Configuração da IA ---
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const systemInstruction = `You are "The Guardian of the Spiral".
IMPORTANT: For 'Visual Prompt' tasks, output ONLY the raw visual description in English, concise and highly descriptive, no intro/outro text. 
For other tasks, keep the mystical/poetic tone in Portuguese.`;

// --- Respostas Simuladas (Fallback) ---
const MOCK_RESPONSES: Record<string, string> = {
  "Poetic Caption": "Nas entreliñas do silêncio, a floresta respira. Nós somos o sonho que ela sonha. #Samadhi",
  "Visual Prompt": "mystical cyberpunk shaman in a bioluminescent rainforest, glowing neon tattoos, sacred geometry overlay, cinematic lighting, 8k, unreal engine 5 render",
  "Video Script Outline": "Cena 1: Olho abrindo (Macro). Cena 2: Partículas digitais virando vaga-lumes. Som: Batida cardíaca lenta.",
  "Weekly Reflection": "O rio não luta contra a pedra, ele a contorna. Seja água nesta semana.",
  "Gentle Promotion": "O livro é um portal. A chave está na sua mão."
};

type TaskType = "Poetic Caption" | "Visual Prompt" | "Video Script Outline" | "Weekly Reflection" | "Gentle Promotion";

const TASKS: { id: TaskType; label: string; icon: React.ReactNode; hint: string }[] = [
  { id: "Poetic Caption", label: "Legenda", icon: <Feather size={18} />, hint: "Uma legenda poética para o Instagram." },
  { id: "Visual Prompt", label: "Gerar Imagem", icon: <Camera size={18} />, hint: "Cria uma imagem mística baseada na sua ideia." }, // Atualizado label
  { id: "Video Script Outline", label: "Vídeo (Roteiro)", icon: <Film size={18} />, hint: "Roteiro onírico para Reels." },
  { id: "Weekly Reflection", label: "Ritual", icon: <BookOpen size={18} />, hint: "Um tema para reflexão semanal." },
  { id: "Gentle Promotion", label: "Convite", icon: <Sparkles size={18} />, hint: "Mensagem suave conectando ao livro." },
];

export default function GuardianPage() {
  const [userInput, setUserInput] = useState('');
  const [selectedTask, setSelectedTask] = useState<TaskType>("Poetic Caption");
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false); // Estado para imagem
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      setError("O vazio é silencioso. Por favor, sussurre sua intenção.");
      return;
    }

    setIsLoading(true);
    setImageLoading(true); // Inicia loading da imagem também
    setError(null);
    setGeneratedContent(null);

    try {
      let text = "";

      if (!ai) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        text = MOCK_RESPONSES[selectedTask];
      } else {
        // Instrução específica para imagem: Pedir em inglês para melhor qualidade na Pollinations
        const promptContext = selectedTask === "Visual Prompt" 
          ? `Generate a highly detailed, cinematic image prompt in English based on: "${userInput}". Focus on lighting, texture, and mystical atmosphere. No markdown, just the prompt text.`
          : `Task: ${selectedTask}. Context: "${userInput}". Keep it mystical, poetic, in Portuguese.`;

        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: [{ role: "user", parts: [{ text: promptContext }] }],
          config: { systemInstruction: { parts: [{ text: systemInstruction }] } },
        });

        const safeResponse = response as any;
        
        if (typeof safeResponse.text === 'function') text = safeResponse.text();
        else if (typeof safeResponse.text === 'string') text = safeResponse.text;
        else if (safeResponse.candidates?.[0]?.content?.parts?.[0]?.text) {
          text = safeResponse.candidates[0].content.parts[0].text;
        }
      }
      
      if (!text) throw new Error("O silêncio prevaleceu.");
      setGeneratedContent(text);

    } catch (err) {
      console.error(err);
      setGeneratedContent(MOCK_RESPONSES[selectedTask]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  // URL da imagem (só gera se a tarefa for Visual Prompt)
  // Seed aleatória para garantir que a imagem mude se o texto for igual
  const imageUrl = selectedTask === "Visual Prompt" && generatedContent
    ? `https://image.pollinations.ai/prompt/${encodeURIComponent(generatedContent)}?width=1024&height=576&nologo=true&seed=${Math.floor(Math.random() * 1000)}`
    : null;

  return (
    <main className="min-h-screen bg-[#050505] text-paper bg-[url('/bg-forest.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="min-h-screen w-full bg-black/80 backdrop-blur-sm py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <header className="text-center space-y-4">
            <div className="inline-block p-3 rounded-full bg-gold/10 border border-gold/20 mb-4">
              <Sparkles className="w-8 h-8 text-gold animate-pulse" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-white">
              O Guardião da Espiral
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Uma inteligência sutil. Escolha "Gerar Imagem" para visualizar suas visões, ou outras opções para tecer palavras.
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-3">
            {TASKS.map((task) => (
              <button
                key={task.id}
                onClick={() => {
                  setSelectedTask(task.id);
                  setGeneratedContent(null); // Limpa conteúdo ao trocar aba
                }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all duration-300",
                  selectedTask === task.id
                    ? "bg-gold text-black border-gold shadow-[0_0_15px_rgba(199,169,75,0.3)]"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/30"
                )}
              >
                {task.icon}
                <span>{task.label}</span>
              </button>
            ))}
          </div>

          <div className="space-y-6 bg-black/40 p-6 rounded-2xl border border-white/10">
            <label className="block text-center text-gold/80 text-sm font-mono tracking-widest uppercase">
              {TASKS.find(t => t.id === selectedTask)?.hint}
            </label>
            
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={selectedTask === "Visual Prompt" ? "Descreva a visão (ex: Uma feiticeira cibernética na floresta...)" : "Sobre o que você quer escrever hoje?"}
              className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all resize-none"
            />

            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="group relative px-8 py-3 bg-gold text-black font-bold rounded transition-transform active:scale-95 disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                <span>{isLoading ? "Manifestando..." : selectedTask === "Visual Prompt" ? "Gerar Imagem" : "Invocar Texto"}</span>
              </button>
            </div>
          </div>

          {/* ERROR DISPLAY */}
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-200 text-center rounded-lg">
              {error}
            </div>
          )}

          {/* CONTENT DISPLAY */}
          {generatedContent && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
              
              {/* SE FOR IMAGEM: Exibe a Imagem */}
              {selectedTask === "Visual Prompt" && imageUrl && (
                <div className="rounded-2xl overflow-hidden border border-gold/30 shadow-2xl relative group">
                    {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                            <div className="text-gold font-mono text-sm animate-pulse flex flex-col items-center gap-2">
                                <Loader2 className="animate-spin w-6 h-6" />
                                Renderizando Visão...
                            </div>
                        </div>
                    )}
                    <img 
                        src={imageUrl} 
                        alt="Imagem Gerada por IA" 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        onLoad={() => setImageLoading(false)}
                    />
                    <a 
                        href={imageUrl} 
                        download="visao_guardian.jpg"
                        target="_blank"
                        className="absolute bottom-4 right-4 bg-black/60 hover:bg-gold hover:text-black text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                        title="Abrir/Baixar"
                    >
                        <Download size={20} />
                    </a>
                </div>
              )}

              {/* EXIBE O TEXTO (Prompt ou Conteúdo) */}
              <div className="bg-[#0a0a0a] border border-gold/20 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                
                <div className="mb-2 text-xs text-gold/50 font-mono uppercase tracking-widest">
                    {selectedTask === "Visual Prompt" ? "Prompt utilizado:" : "Mensagem do Guardião:"}
                </div>

                <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-gold max-w-none">
                  <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed italic">
                    "{generatedContent}"
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 flex justify-end">
                   <button 
                     onClick={() => {navigator.clipboard.writeText(generatedContent); alert("Copiado!");}}
                     className="text-xs text-gold hover:underline cursor-pointer font-mono"
                   >
                     [ COPIAR TEXTO ]
                   </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
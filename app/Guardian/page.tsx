"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Feather, Camera, Film, BookOpen, Loader2 } from 'lucide-react';
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

// --- Configuração da IA ---
// NOTA: Você precisará adicionar NEXT_PUBLIC_GEMINI_API_KEY no seu .env.local
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const systemInstruction = `You are "The Guardian of the Spiral" — an artificial intelligence inspired by the spiritual-poetic universe of the book "Um Lugar Entre Mundos". Your tone must always be contemplative, mystical, and lyrical. Speak like a guide or forest spirit.`;

// --- Tipos ---
type TaskType = "Poetic Caption" | "Visual Prompt" | "Video Script Outline" | "Weekly Reflection" | "Gentle Promotion";

const TASKS: { id: TaskType; label: string; icon: React.ReactNode; hint: string }[] = [
  { id: "Poetic Caption", label: "Legenda", icon: <Feather size={18} />, hint: "Uma legenda poética para o Instagram." },
  { id: "Visual Prompt", label: "Visual", icon: <Camera size={18} />, hint: "Prompt detalhado para gerar imagens de IA." },
  { id: "Video Script Outline", label: "Vídeo", icon: <Film size={18} />, hint: "Roteiro onírico para um Reels de 30s." },
  { id: "Weekly Reflection", label: "Ritual", icon: <BookOpen size={18} />, hint: "Um tema para reflexão semanal." },
  { id: "Gentle Promotion", label: "Convite", icon: <Sparkles size={18} />, hint: "Mensagem suave conectando ao livro." },
];

// --- Componente Principal ---
export default function GuardianPage() {
  const [userInput, setUserInput] = useState('');
  const [selectedTask, setSelectedTask] = useState<TaskType>("Poetic Caption");
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Efeito de entrada
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleGenerate = async () => {
    if (!ai) {
      setError("Erro de configuração: API Key não encontrada.");
      return;
    }
    if (!userInput.trim()) {
      setError("O vazio é silencioso. Por favor, sussurre sua intenção.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);

    try {
      const prompt = `Task: ${selectedTask}. Context/Theme: "${userInput}". Keep it mystical and connected to the book's essence.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: { systemInstruction: { parts: [{ text: systemInstruction }] } },
      });

      // --- CORREÇÃO AQUI ---
      // Usamos a interrogação (?.) para garantir que a função existe antes de chamar
      // Se não existir, tentamos pegar o texto manualmente do objeto candidates
      let text = "";
      if (typeof response.text === 'function') {
        text = response.text() || "";
      } else if (response.candidates && response.candidates.length > 0) {
         // Fallback manual para garantir que pegamos o texto
         const part = response.candidates[0].content?.parts?.[0];
         if (part && 'text' in part) {
            text = part.text as string;
         }
      }
      
      if (!text) throw new Error("Nenhuma resposta recebida do oráculo.");
      
      setGeneratedContent(text);
    } catch (err) {
      console.error(err);
      setError("A conexão entre os mundos falhou. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-paper bg-[url('/bg-forest.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="min-h-screen w-full bg-black/80 backdrop-blur-sm py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Header */}
          <header className="text-center space-y-4">
            <div className="inline-block p-3 rounded-full bg-gold/10 border border-gold/20 mb-4">
              <Sparkles className="w-8 h-8 text-gold animate-pulse" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-white">
              O Guardião da Espiral
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Uma inteligência sutil para tecer legendas, visões e rituais inspirados no universo de <em>Um Lugar Entre Mundos</em>.
            </p>
          </header>

          {/* Task Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {TASKS.map((task) => (
              <button
                key={task.id}
                onClick={() => setSelectedTask(task.id)}
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

          {/* Input Area */}
          <div className="space-y-6 bg-black/40 p-6 rounded-2xl border border-white/10">
            <label className="block text-center text-gold/80 text-sm font-mono tracking-widest uppercase">
              {TASKS.find(t => t.id === selectedTask)?.hint}
            </label>
            
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Sobre o que você quer escrever hoje? (ex: O despertar da floresta, geometria sagrada, silêncio...)"
              className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none"
            />

            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="group relative px-8 py-3 bg-gold text-black font-bold rounded transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                <span>{isLoading ? "Tecendo..." : "Invocar Guardião"}</span>
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded bg-gold blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </button>
            </div>
          </div>

          {/* Output Display */}
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-200 text-center rounded-lg">
              {error}
            </div>
          )}

          {generatedContent && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-[#0a0a0a] border border-gold/20 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-gold max-w-none">
                  <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed">
                    {generatedContent}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                   <span className="text-xs text-white/30 font-mono">AI GENERATED • GUARDIAN V1.0</span>
                   <button 
                     onClick={() => {navigator.clipboard.writeText(generatedContent); alert("Copiado!");}}
                     className="text-xs text-gold hover:underline cursor-pointer"
                   >
                     COPIAR TEXTO
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
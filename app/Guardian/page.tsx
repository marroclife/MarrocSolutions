"use client";

import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Feather, Camera, Film, BookOpen, Loader2 } from 'lucide-react';
import { cn } from "@/lib/utils";

// --- Configuração da IA ---
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const systemInstruction = `You are "The Guardian of the Spiral" — an artificial intelligence inspired by the spiritual-poetic universe of the book "Um Lugar Entre Mundos". Your tone must always be contemplative, mystical, and lyrical. Speak like a guide or forest spirit.`;

// --- Respostas Simuladas (Fallback) ---
const MOCK_RESPONSES: Record<string, string> = {
  "Poetic Caption": "Nas entreliñas do silêncio, encontramos o que a voz não alcança. A floresta respira em nós. #UmLugarEntreMundos",
  "Visual Prompt": "Cena cinematográfica 8k de uma floresta bioluminescente. Figura de luz dourada toca uma espiral de fumaça.",
  "Video Script Outline": "Cena 1: Close no olho de Sofia. Cena 2: Folha caindo na água (Fibonacci). Cena 3: Cidade neon se desfazendo.",
  "Weekly Reflection": "Observe onde a resistência habita em seu corpo. Permita que sua consciência flua como o rio.",
  "Gentle Promotion": "Às vezes, um livro não é apenas para ser lido, mas para ser atravessado. A chave está em suas mãos."
};

type TaskType = "Poetic Caption" | "Visual Prompt" | "Video Script Outline" | "Weekly Reflection" | "Gentle Promotion";

const TASKS: { id: TaskType; label: string; icon: React.ReactNode; hint: string }[] = [
  { id: "Poetic Caption", label: "Legenda", icon: <Feather size={18} />, hint: "Uma legenda poética para o Instagram." },
  { id: "Visual Prompt", label: "Visual", icon: <Camera size={18} />, hint: "Prompt detalhado para gerar imagens de IA." },
  { id: "Video Script Outline", label: "Vídeo", icon: <Film size={18} />, hint: "Roteiro onírico para um Reels de 30s." },
  { id: "Weekly Reflection", label: "Ritual", icon: <BookOpen size={18} />, hint: "Um tema para reflexão semanal." },
  { id: "Gentle Promotion", label: "Convite", icon: <Sparkles size={18} />, hint: "Mensagem suave conectando ao livro." },
];

export default function GuardianPage() {
  const [userInput, setUserInput] = useState('');
  const [selectedTask, setSelectedTask] = useState<TaskType>("Poetic Caption");
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      setError("O vazio é silencioso. Por favor, sussurre sua intenção.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);

    try {
      if (!ai) {
        // Modo Simulação se a chave falhar ou não existir
        await new Promise(resolve => setTimeout(resolve, 1500));
        setGeneratedContent(MOCK_RESPONSES[selectedTask] || "O oráculo sussurra em códigos antigos...");
        setIsLoading(false);
        return;
      }

      const prompt = `Task: ${selectedTask}. Context/Theme: "${userInput}". Keep it mystical and connected to the book's essence.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: { systemInstruction: { parts: [{ text: systemInstruction }] } },
      });

      // --- CORREÇÃO DO ERRO DE BUILD ---
      // Forçamos o tipo 'any' para evitar o erro de TypeScript
      const safeResponse = response as any;
      let text = "";

      // Verifica se é função, propriedade ou array
      if (typeof safeResponse.text === 'function') {
        text = safeResponse.text();
      } else if (typeof safeResponse.text === 'string') {
        text = safeResponse.text;
      } else if (safeResponse.candidates && safeResponse.candidates.length > 0) {
        text = safeResponse.candidates[0].content?.parts?.[0]?.text || "";
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
              Uma inteligência sutil para tecer legendas, visões e rituais inspirados no universo de <em>Um Lugar Entre Mundos</em>.
            </p>
          </header>

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

          <div className="space-y-6 bg-black/40 p-6 rounded-2xl border border-white/10">
            <label className="block text-center text-gold/80 text-sm font-mono tracking-widest uppercase">
              {TASKS.find(t => t.id === selectedTask)?.hint}
            </label>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Sobre o que você quer escrever hoje? (ex: O despertar da floresta...)"
              className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all resize-none"
            />
            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="group relative px-8 py-3 bg-gold text-black font-bold rounded transition-transform active:scale-95 disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                <span>{isLoading ? "Tecendo..." : "Invocar Guardião"}</span>
              </button>
            </div>
          </div>

          {generatedContent && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-[#0a0a0a] border border-gold/20 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-gold max-w-none">
                  <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed">
                    {generatedContent}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                   <span className="text-xs text-white/30 font-mono">
                     {ai ? "AI GENERATED" : "SIMULATION"} • GUARDIAN V1.0
                   </span>
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
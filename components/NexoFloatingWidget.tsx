"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Sparkles, Zap, Trash2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "nexo-lite-history";
const INTRO_MESSAGE: Message = {
  role: "assistant",
  content:
    "**Nexo online.** 🌀\nPosso te ajudar a navegar pelo ecossistema Marroc. Qual é a sua intenção?",
};

function getStoredMessages(): Message[] {
  if (typeof window === "undefined") return [INTRO_MESSAGE];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [INTRO_MESSAGE];
    const parsed = JSON.parse(raw) as Message[];
    if (!Array.isArray(parsed) || parsed.length === 0) return [INTRO_MESSAGE];
    return parsed;
  } catch {
    return [INTRO_MESSAGE];
  }
}

function errorMessage(statusCode?: number, fallback?: string): string {
  if (statusCode === 429) {
    return "Muitas mensagens em pouco tempo. Aguarda 30 segundos e tenta de novo.";
  }
  if (statusCode === 401 || statusCode === 403) {
    return "Autenticação do Nexo está pendente no servidor. Enquanto isso, fale com a gente no WhatsApp: https://wa.me/5521990387232";
  }
  if (statusCode === 408 || statusCode === 504) {
    return "O Nexo demorou demais pra responder. Tenta de novo com uma pergunta mais curta.";
  }
  return fallback || "Falha no sinal. Tenta de novo daqui a pouco.";
}

export default function NexoFloatingWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Carrega histórico ao montar
  useEffect(() => {
    setMessages(getStoredMessages());
  }, []);

  // Persiste histórico a cada mudança
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const clearHistory = useCallback(() => {
    setMessages([INTRO_MESSAGE]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);

    try {
      const recentHistory = messages.slice(-10).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch("/api/nexo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: recentHistory }),
      });
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(
          errorMessage(data.statusCode || response.status, data.error)
        );
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "" },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          fixed bottom-6 right-6 z-[60]
          w-16 h-16 rounded-full
          bg-transparent
          shadow-[0_0_30px_rgba(124,58,237,0.4)]
          hover:scale-110 active:scale-95 transition-all duration-300
          overflow-hidden
          ${open ? "scale-0 opacity-0" : "scale-100 opacity-100"}
        `}
        aria-label="Abrir Nexo - Assistente do Ecossistema"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nexo-lite-icon.png"
          alt="Nexo Lite"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6 z-[60] 
            w-[90vw] max-w-[400px] h-[600px] max-h-[80vh]
            bg-[#0a0a0a]/95 backdrop-blur-xl 
            border border-fuchsia-500/30 rounded-2xl 
            shadow-[0_0_50px_rgba(217,70,239,0.3)]
            flex flex-col overflow-hidden
            animate-in slide-in-from-bottom-4 fade-in duration-300
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-mono text-white tracking-widest uppercase flex items-center gap-1">
                  <Sparkles size={12} className="text-fuchsia-400" />
                  Nexo
                </div>
                <div className="text-[10px] text-white/50 font-mono">
                  Assistente do Ecossistema
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearHistory}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition"
                aria-label="Limpar conversa"
                title="Limpar conversa"
              >
                <Trash2 size={14} />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-fuchsia-500/20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-[85%] rounded-lg p-3 text-sm leading-relaxed
                    ${
                      msg.role === "user"
                        ? "bg-fuchsia-500/20 border border-fuchsia-500/30 text-white"
                        : "bg-cyan-500/10 border border-cyan-500/20 text-gray-100"
                    }
                  `}
                >
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 text-cyan-400/70 text-xs font-mono animate-pulse flex items-center gap-2">
                  <Zap size={12} /> Processando...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-3 border-t border-white/10 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={loading ? "Nexo processando..." : "Pergunte ao Nexo..."}
              className="flex-1 bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-fuchsia-500/50 cursor-text"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2 rounded-lg bg-fuchsia-500 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-fuchsia-400 transition"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

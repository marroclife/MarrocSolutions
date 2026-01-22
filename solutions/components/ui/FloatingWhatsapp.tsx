"use client";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5521992669980?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Marroc%20Solutions%20e%20quero%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black border border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-black font-bold py-3 px-5 rounded-full shadow-[0_0_20px_rgba(0,255,148,0.2)] transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-10"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline text-sm font-mono tracking-wider">ORÇAMENTO RÁPIDO</span>
    </a>
  );
}
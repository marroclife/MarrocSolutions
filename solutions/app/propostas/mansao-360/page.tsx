"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { Mansao360Hero } from "@/components/proposals/Mansao360Hero";
import { Mansao360Contexto } from "@/components/proposals/Mansao360Contexto";
import { PropostaBlocoObjetivos } from "@/components/proposals/PropostaBlocoObjetivos";
import { PropostaBlocoEstrutura } from "@/components/proposals/PropostaBlocoEstrutura";

import { Mansao360Dominio } from "@/components/proposals/Mansao360Dominio";
import { Mansao360Opcoes } from "@/components/proposals/Mansao360Opcoes";
import { Mansao360Evolucao } from "@/components/proposals/Mansao360Evolucao";
import { Mansao360ProximoPasso } from "@/components/proposals/Mansao360ProximoPasso";
import { PasswordModal } from "@/components/proposals/PasswordModal";

export default function Mansao360Page() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const slug = "mansao-360";
  const senha = "M360";

  // Verifica autenticação
  useEffect(() => {
    const auth = localStorage.getItem(`proposta_auth_${slug}`);
    setIsAuthenticated(auth === "true");
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <main className="bg-[#050505] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Carregando...</p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <PasswordModal
        senha={senha}
        onSuccess={() => {
          localStorage.setItem(`proposta_auth_${slug}`, "true");
          setIsAuthenticated(true);
        }}
      />
    );
  }

  const handleMockupClick = () => {
    // Scroll suave para seção de mockup
    const mockupSection = document.getElementById("mockup-section");
    if (mockupSection) {
      mockupSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsappClick = () => {
    const message = encodeURIComponent(
      "Olá! Tenho interesse na proposta Mansão 360. Gostaria de conhecer mais detalhes."
    );
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="bg-[#050505]">
      {/* Header sticky */}
      <section className="sticky top-0 z-30 bg-[#050505]/80 backdrop-blur border-b border-white/10 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/propostas")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
          <nav className="text-xs text-white/50 hidden md:flex items-center gap-2">
            <a href="/propostas" className="hover:text-white transition-colors">
              Propostas
            </a>
            <span>/</span>
            <span className="text-white/70">Mansão 360</span>
          </nav>
          <div className="w-20" />
        </div>
      </section>

      {/* Hero Principal */}
      <Mansao360Hero onMockupClick={handleMockupClick} />

      {/* Contexto do Projeto */}
      <Mansao360Contexto />

      {/* Objetivos do Projeto */}
      <PropostaBlocoObjetivos
        objetivos={[
          "Apresentação visual clara da mansão e seus diferenciais",
          "Organização por tipo de serviço (Day Use, Suítes, Eventos, Locação Completa)",
          "Direcionamento inteligente para WhatsApp",
          "Fortalecimento da presença digital própria e independente",
          "Base profissional para crescimento futuro",
        ]}
      />

      {/* Estrutura Pensada */}
      <PropostaBlocoEstrutura
        estrutura={{
          paginas: [
            "Início",
            "A Mansão",
            "Day Use",
            "Suítes",
            "Eventos",
            "Locação Completa",
            "Galeria",
            "Contato",
          ],
          organizacao:
            "Site institucional com navegação por tipos de serviço, permitindo que cada tipo de cliente (turista, empresas, eventos) encontre facilmente o que procura",
          logicaNavegacao:
            "Navegação clara e intuitiva com direcionamento estratégico para WhatsApp, garantindo que o cliente possa explorar e sair com a impressão correta sobre a mansão",
        }}
      />

     

      {/* Domínio */}
      <Mansao360Dominio />

      {/* Opções de Implementação */}
      <Mansao360Opcoes />

      {/* Visão de Evolução */}
      <Mansao360Evolucao />

      {/* Próximo Passo */}
      <Mansao360ProximoPasso onWhatsappClick={handleWhatsappClick} />

      {/* Footer */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-white/60 text-sm mb-6">
              © 2025 Marroc Solutions. Todos os direitos reservados.
            </p>
            <button
              onClick={() => router.push("/propostas")}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Voltar às propostas</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

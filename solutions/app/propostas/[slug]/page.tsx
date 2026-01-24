"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { obterProjetoPorSlug } from "@/lib/propostas";
import { PropostaBlocoContexto } from "@/components/proposals/PropostaBlocoContexto";
import { PropostaBlocoObjetivos } from "@/components/proposals/PropostaBlocoObjetivos";
import { PropostaBlocoEstrutura } from "@/components/proposals/PropostaBlocoEstrutura";
import { PropostaBlocoEvolucao } from "@/components/proposals/PropostaBlocoEvolucao";
import { PropostaBlocoProximoPasso } from "@/components/proposals/PropostaBlocoProximoPasso";
import { PasswordModal } from "@/components/proposals/PasswordModal";
import { ArrowLeft, Film } from "lucide-react";

export default function PropostaPaginaIndividual() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const projeto = obterProjetoPorSlug(slug);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verifica autenticação da proposta específica
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

  if (!isAuthenticated && projeto) {
    return (
      <PasswordModal
        senha={projeto.senha}
        onSuccess={() => {
          localStorage.setItem(`proposta_auth_${slug}`, "true");
          setIsAuthenticated(true);
        }}
      />
    );
  }

  if (!projeto) {
    return (
      <main className="bg-[#050505] min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl font-semibold text-white mb-4">
            Projeto não encontrado
          </h1>
          <p className="text-white/70 mb-8">
            Desculpe, não conseguimos encontrar a proposta que você está
            procurando.
          </p>
          <button
            onClick={() => router.push("/propostas")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar às propostas
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#050505]">
      {/* Header com breadcrumb e voltar */}
      <section className="sticky top-0 z-30 bg-[#050505]/80 backdrop-blur border-b border-white/10 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/propostas")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
          <div className="text-center flex-1">
            <nav className="text-xs text-white/50 flex items-center justify-center gap-2">
              <a href="/propostas" className="hover:text-white transition-colors">
                Propostas
              </a>
              <span>/</span>
              <span className="text-white/70">{projeto.titulo}</span>
            </nav>
          </div>
          <div className="w-20" />
        </div>
      </section>

      {/* Título do projeto com design melhorado */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        {/* Fundo decorativo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
            {projeto.titulo}
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
            {projeto.descricaoBreve}
          </p>

          {/* CTA para Mockup se for mansao-360 */}
          {projeto.slug === "mansao-360" && (
            <div className="mt-8">
              <a
                href={`/propostas/${projeto.slug}/mockup`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green/20 border border-neon-green/50 hover:border-neon-green text-neon-green hover:text-white hover:bg-neon-green/30 rounded-lg transition-all duration-300"
              >
                <Film className="w-4 h-4" />
                <span>Ver Mockup Interativo →</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Conteúdo em blocos */}
      <PropostaBlocoContexto contexto={projeto.contexto} />
      <PropostaBlocoObjetivos objetivos={projeto.objetivos} />
      <PropostaBlocoEstrutura estrutura={projeto.estrutura} />
      <PropostaBlocoEvolucao visaoEvolucao={projeto.visaoEvolucao} />
      <PropostaBlocoProximoPasso />

      {/* Footer simples */}
      <section className="py-12 md:py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2">
            <a
              href="/propostas"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Ver outras propostas</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

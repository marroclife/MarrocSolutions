// app/sobre/page.tsx
// A ALQUIMIA DO ARQUITETO
// 03/06/2026 — Copy autoral da Prisma + integração de "Chefe da Seção de Informática"
// (período militar = FORJA, não conflito). Tom: manifesto de potência.
//
// Estrutura narrativa (4 atos):
// 1. SEMENTE — A Herança (Pai DJ + Mãe Massoterapeuta)
// 2. FORJA — A Disciplina (Militar como Chefe de TI)
// 3. PONTE — A Transmutação (Massagem → Reiki → Música)
// 4. MANIFESTAÇÃO — O Arquiteto Digital (Marroc Solutions B2B + Ecossistema)
// Final — Os 3 Pilares do Ser + CTAs

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre — Marroc | A Alquimia do Arquiteto",
  description:
    "Marroc é a síntese de uma alquimia genética: a herança do DJ, o cuidado da massoterapeuta, a disciplina do Chefe de TI do Exército. Hoje, Arquiteto Digital de Alta Performance.",
};

export default function SobrePage() {
  return (
    <main className="bg-[#0b0b0b] text-paper overflow-x-hidden">
      {/* === 1. SEMENTE — HERANÇA === */}
      <section className="relative py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Tag/badge no topo */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200/30 bg-amber-200/5 text-amber-200 text-[10px] uppercase tracking-widest font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-200 animate-pulse" />
            A Alquimia do Arquiteto
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-7xl text-white leading-[0.95] mb-12">
            Marroc é a síntese de uma
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
              alquimia genética.
            </span>
          </h1>

          {/* Grid: Imagem + Texto da Herança */}
          <div className="grid items-start gap-12 md:grid-cols-[1fr,2fr]">
            {/* IMAGEM */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/10 to-amber-400/5 blur-2xl rounded-3xl" />
              <div className="relative">
                <Image
                  src="/autor.png"
                  alt="Marroc: A fusão entre o ancestral e o digital"
                  width={520}
                  height={720}
                  priority
                  className="rounded-2xl border border-amber-200/20 shadow-[0_0_50px_rgba(245,158,11,0.15)] w-full max-w-[400px] md:max-w-full h-auto"
                />
                {/* Caption embaixo da imagem */}
                <p className="mt-4 text-center text-xs text-white/40 font-mono uppercase tracking-widest">
                  Marroc · Arquiteto Digital
                </p>
              </div>
            </div>

            {/* TEXTO */}
            <div className="space-y-8">
              <p className="font-serif text-xl md:text-2xl text-white/95 leading-relaxed border-l-2 border-amber-200/40 pl-6">
                Antes de ser um movimento, eu já era a fusão de dois mundos. A música e a terapia
                não foram escolhas aleatórias — elas vieram gravadas no código.
              </p>

              <div className="space-y-6">
                <h3 className="font-display text-2xl text-amber-200">
                  🧬 A Herança: O Som e o Cuidado
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Do meu <strong className="text-amber-200">pai</strong>, herdei o{" "}
                  <strong className="text-amber-200">Som</strong>. Cresci vendo a figura do DJ
                  controlar atmosferas, guiar emoções e conduzir multidões através do ritmo. O
                  amor pela música é sangue, não hobby.
                </p>
                <p className="text-white/85 leading-relaxed">
                  Da minha <strong className="text-amber-200">mãe</strong>, herdei o{" "}
                  <strong className="text-amber-200">Cuidado</strong>. Massoterapeuta e
                  esteticista, ela me ensinou a linguagem do toque, da cura e da atenção ao outro.
                </p>
                <p className="italic text-white/70 text-base border-l border-amber-200/30 pl-4">
                  Marroc é o ponto onde essas duas linhas se cruzam: a tecnologia do som aplicada
                  ao propósito da cura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. FORJA — MILITAR (background dourado/amber — símbolo de forja) === */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-amber-200/[0.03] via-amber-200/[0.05] to-amber-200/[0.03] border-y border-amber-200/10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200/40 bg-amber-200/10 text-amber-200 text-[10px] uppercase tracking-widest font-mono mb-8">
            🔥 A Forja · 2014-2020
          </div>

          <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.05] mb-10">
            Rigor e
            <br />
            <span className="text-amber-200">Complexidade.</span>
          </h2>

          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              Por anos, vesti a farda da disciplina e do silêncio. Mas, mesmo na rigidez do
              militarismo, a minha natureza era de construir pontes. Durante a maior parte do meu
              período no Exército, atuei como{" "}
              <strong className="text-amber-200 text-xl">Chefe da Seção de Informática</strong>.
            </p>
            <p>
              Lá, aprendi que a precisão é inegociável. Liderar a TI em um ambiente de alta pressão
              me deu a base do que sou hoje: a capacidade de organizar o caos, gerir
              infraestruturas críticas e operar sob a lei da eficiência absoluta.
            </p>
            <p>
              O <strong>Primeiro Tenente Rocha</strong> não desapareceu; ele foi transmutado. Ele me
              deu a estrutura. O produtor musical e o terapeuta me deram a fluidez.
            </p>
          </div>

          {/* Badge "Patente" pra reforçar autoridade */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 bg-amber-200/10 border border-amber-200/30 rounded text-amber-200 text-xs font-mono uppercase tracking-widest">
              1° Tenente · Chefe de TI
            </span>
            <span className="px-4 py-2 bg-amber-200/5 border border-amber-200/20 rounded text-amber-200/70 text-xs font-mono uppercase tracking-widest">
              Infraestrutura Crítica
            </span>
            <span className="px-4 py-2 bg-amber-200/5 border border-amber-200/20 rounded text-amber-200/70 text-xs font-mono uppercase tracking-widest">
              Precisão Inegociável
            </span>
          </div>
        </div>
      </section>

      {/* === 3. PONTE — TRANSMUTAÇÃO === */}
      <section className="relative py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/5 text-cyan-300 text-[10px] uppercase tracking-widest font-mono mb-8">
            🌀 A Ponte · 2019-2020
          </div>

          <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.05] mb-10">
            Da massagem
            <br />
            <span className="text-cyan-300">à frequência sutil.</span>
          </h2>

          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              Entre 2019 e 2020, o renascimento começou pelas mãos. Honrando a linhagem materna, a
              massoterapia me reconectou com o sentir. O toque evoluiu para o campo vibracional
              (Reiki e Som), e a música deixou de ser apenas técnica para se tornar medicina.
            </p>
            <p>
              Consagrei-me <strong className="text-cyan-300">Mestre Reiki Usui</strong> — o nível de iniciação
              (grau) dentro do <Link href="/terapias" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200 transition">Reiki oferecido em /terapias</Link> —,
              unindo a condução do pai (música) com a intenção da mãe (cura). O portal se abriu com
              Ganesha, mas foi o{" "}
              <strong className="text-cyan-300">Maha Mrityunjaya (Shiva)</strong> que selou o
              destino: o som da morte e renascimento.
            </p>
          </div>
        </div>
      </section>

      {/* === 4. MANIFESTAÇÃO — O ARQUITETO DIGITAL (highlights neon green = Solutions) === */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-neon-green/[0.03] via-neon-green/[0.06] to-neon-green/[0.03] border-y border-neon-green/10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/40 bg-neon-green/10 text-neon-green text-[10px] uppercase tracking-widest font-mono mb-8">
            🏗️ A Manifestação · Hoje
          </div>

          <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.05] mb-10">
            O Arquiteto
            <br />
            <span className="text-neon-green">Digital.</span>
          </h2>

          <div className="space-y-6 text-white/90 text-lg leading-relaxed max-w-4xl">
            <p>
              Hoje, todas essas vidas convergem em um único propósito: a{" "}
              <strong className="text-neon-green">Arquitetura Digital de Alta Performance</strong>.
            </p>
            <p>
              Eu não vejo o código apenas como linhas de comando, mas como frequências. Para mim,
              a <strong>complexidade é a minha linguagem</strong>. Uso a disciplina do militar, a
              precisão do produtor e a sensibilidade do terapeuta para construir ecossistemas
              digitais onde a Saliência de Entidade e a Velocidade Extrema não são apenas
              métricas, mas ferramentas de dominação de mercado.
            </p>
            <p className="font-display text-2xl text-white border-l-2 border-neon-green pl-6 mt-8">
              Eu não construo sites. Eu desenho a frequência onde o seu negócio se torna a
              autoridade máxima do seu nicho.
            </p>
          </div>

          {/* CTAs divididos em 2: B2C (Terapias) + B2B (Solutions) */}
          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <Link
              href="/terapias"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-cyan-300/40 text-cyan-300 hover:bg-cyan-300 hover:text-black font-bold uppercase tracking-widest text-sm rounded transition-all"
            >
              Terapias Holísticas
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-green text-black hover:bg-white font-bold uppercase tracking-widest text-sm rounded transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]"
            >
              Marroc Solutions (B2B)
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* === 5. OS 3 PILARES DO SER (3 cards horizontais) === */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-white text-center mb-4">
            Os 4 Pilares do Ser
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Quatro dimensões que se entrelaçam. Cada uma sustenta a outra. Nenhuma sozinha seria suficiente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PillarCard
              icon="🧬"
              title="A Linhagem"
              desc="A fusão do ritmo (Pai) com o cuidado (Mãe). A base emocional de tudo que faço."
              color="amber"
            />
            <PillarCard
              icon="🛡️"
              title="A Estrutura"
              desc="A precisão do comando técnico e a gestão de TI militar. Onde a disciplina encontra o caos."
              color="cyan"
            />
            <PillarCard
              icon="🎛️"
              title="A Técnica"
              desc="O produtor que traduz o invisível em áudio e performance."
              color="purple"
            />
            <PillarCard
              icon="⚡"
              title="A Frequência"
              desc="A ferramenta final. Onde o toque físico cessa, a vibração digital começa. O som como medicina."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* === 6. ECOSSISTEMA (5 serviços terapêuticos — integrado com /terapias) === */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
              Ecossistema de Ativação
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Como a herança se manifesta hoje. Cada frente é uma camada de uma mesma verdade.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <ServicoCard
              icon="🎧"
              title="Produção Musical & Sound Healing"
              desc="A herança paterna elevada. Criação de trilhas e frequências que induzem estados de cura e expansão de consciência."
            />
            <ServicoCard
              icon="🙌"
              title="Mestre Reiki Usui"
              desc="A herança materna transmutada. O cuidado não é mais físico, mas energético. Harmonização de chakras e limpeza de campo."
            />
            <ServicoCard
              icon="🃏"
              title="Tarot + Runas Nórdicas"
              desc="Tecnologias de leitura de campo. Orientação prática para decisões com clareza, coragem e verdade."
            />
            <ServicoCard
              icon="🛸"
              title="Cura Multidimensional (Arcturiana)"
              desc="Terapia vibracional canalizada. Limpeza profunda de registros kármicos e expansão de consciência."
            />
            <ServicoCard
              icon="🔭"
              title="Astrologia Intuitiva"
              desc="Mapeamento vivo que ativa caminhos. Mais do que interpretar o mapa, acionamos os movimentos necessários."
            />
          </div>
        </div>
      </section>

      {/* === 7. CTA FINAL — copy da Prisma === */}
      <section className="py-20 md:py-32 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-display text-2xl md:text-3xl text-white leading-tight">
            Se você busca mais do que um desenvolvedor — se busca um arquiteto capaz de transmutar complexidade em receita — você está no lugar certo.
          </p>
          <div className="mt-10">
            <Link
              href="https://wa.me/5521990387232?text=Quero%20agendar%20um%20Diagn%C3%B3stico%20Estrat%C3%A9gico"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-neon-green text-black hover:bg-white font-bold uppercase tracking-widest text-base rounded transition-all shadow-[0_0_30px_rgba(0,255,148,0.4)] hover:shadow-[0_0_40px_rgba(0,255,148,0.6)]"
            >
              Agendar Diagnóstico Estratégico
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Componentes locais ---------- */

function PillarCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: "amber" | "cyan" | "purple" | "green";
}) {
  const colorMap = {
    amber: {
      border: "hover:border-amber-200/50",
      icon: "group-hover:bg-amber-200/20 group-hover:text-amber-200",
      title: "group-hover:text-amber-200",
      shadow: "hover:shadow-amber-200/10",
    },
    cyan: {
      border: "hover:border-cyan-300/50",
      icon: "group-hover:bg-cyan-300/20 group-hover:text-cyan-300",
      title: "group-hover:text-cyan-300",
      shadow: "hover:shadow-cyan-300/10",
    },
    purple: {
      border: "hover:border-purple-400/50",
      icon: "group-hover:bg-purple-400/20 group-hover:text-purple-400",
      title: "group-hover:text-purple-400",
      shadow: "hover:shadow-purple-400/10",
    },
    green: {
      border: "hover:border-neon-green/50",
      icon: "group-hover:bg-neon-green/20 group-hover:text-neon-green",
      title: "group-hover:text-neon-green",
      shadow: "hover:shadow-neon-green/10",
    },
  }[color];

  return (
    <article
      className={`group rounded-2xl border border-white/10 bg-[#0b0b0b] p-8 transition-all duration-500 hover:shadow-lg ${colorMap.border} ${colorMap.shadow}`}
    >
      <div className={`mb-6 grid h-14 w-14 min-w-[3.5rem] place-items-center rounded-xl bg-white/5 text-3xl transition-colors ${colorMap.icon}`}>
        {icon}
      </div>
      <h3 className={`font-display text-2xl text-white mb-3 transition-colors ${colorMap.title}`}>
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed text-base">{desc}</p>
    </article>
  );
}

function ServicoCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition-all duration-500 hover:border-amber-200/50 hover:shadow-lg hover:shadow-amber-200/10">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-12 w-12 min-w-[3rem] place-items-center rounded-xl bg-white/5 text-2xl group-hover:bg-amber-200/20 group-hover:text-amber-200 transition-colors">
          {icon}
        </div>
        <h3 className="font-display text-xl text-white group-hover:text-amber-200 transition-colors leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-white/70 leading-relaxed text-sm md:text-base">{desc}</p>
    </article>
  );
}

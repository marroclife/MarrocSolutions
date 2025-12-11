// app/sobre/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Sobre — Marroc",
  description:
    "Quem Sou Eu — Por Marroc. A alquimia entre a herança do DJ e da Terapeuta. Música, Reiki e Tecnologia Ancestral.",
};

export default function SobrePage() {
  return (
    <main className="bg-[#0b0b0b] text-paper overflow-x-hidden">
      {/* SEÇÃO 1: A ORIGEM E A NARRATIVA */}
      <Section
        title="A Origem"
        subtitle="O encontro de duas linhagens: o Som e o Cuidado."
        headingLevel="h1"
        // Mobile: py-10 (menos espaço) | Desktop: py-20
        className="py-10 md:py-20"
      >
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
          {/* 
            IMAGEM
            Mobile: Fica normal no fluxo.
            Desktop (md): Fica 'sticky' (fixa) enquanto rola o texto ao lado.
          */}
          <div className="relative flex justify-center md:sticky md:top-24">
            <Image
              src="/autor.png"
              alt="Marroc: A fusão entre o ancestral e o digital"
              width={520}
              height={720}
              priority
              className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl grayscale transition-all duration-700 hover:grayscale-0 w-full max-w-[400px] md:max-w-full h-auto"
            />
          </div>

          {/* TEXTO - ALQUIMIA */}
          <div className="space-y-8 text-base leading-relaxed text-white/90 md:text-lg">
            <div>
              <p className="font-display text-2xl text-amber-200 mb-6 leading-tight md:text-3xl">
                Marroc é a síntese de uma alquimia genética.
              </p>
              <p>
                Antes de ser um movimento, eu já era a fusão de dois mundos. 
                A música e a terapia não foram escolhas aleatórias — elas vieram gravadas no código.
              </p>
            </div>

            {/* A HERANÇA */}
            <div className="border-l-2 border-amber-200/40 pl-4 md:pl-6 space-y-4">
              <h3 className="font-bold text-white text-xl">A Herança: O DJ e a Curadora</h3>
              <p>
                Do meu pai, herdei o <strong className="text-amber-200">Som</strong>. Cresci vendo a figura do DJ controlar atmosferas, 
                guiar emoções e conduzir multidões através do ritmo. O amor pela música é sangue, não hobby.
              </p>
              <p>
                Da minha mãe, herdei o <strong className="text-amber-200">Cuidado</strong>. Massoterapeuta e esteticista, ela me ensinou 
                a linguagem do toque, da cura e da atenção ao outro.
              </p>
              <p className="italic text-white/70 text-sm md:text-base">
                Marroc é o ponto onde essas duas linhas se cruzam: a tecnologia do som aplicada ao propósito da cura.
              </p>
            </div>

            {/* A JORNADA (2018) */}
            <div>
              <h3 className="mb-2 font-bold text-white text-lg md:text-xl">O Conflito e a Gestação (2018)</h3>
              <p className="mb-4">
                Durante anos, o Primeiro Tenente Rocha vestiu a farda da disciplina e do silêncio. 
                Mas a alma — pulsando com a herança dos pais — não cabia na caserna.
              </p>
              <p>
                Desde <strong className="text-amber-200">2018</strong>, ainda no militarismo, o estudo da produção musical já era meu refúgio. 
                Cada frequência ajustada no estúdio era uma tentativa de libertação.
              </p>
            </div>

            {/* BOX: A PONTE DA MASSAGEM */}
            <div className="bg-white/5 p-5 md:p-6 rounded-xl border border-amber-200/20">
              <h3 className="mb-2 font-bold text-white text-lg">A Ponte da Massagem</h3>
              <p className="mb-3 text-sm md:text-base">
                Quando o Tenente "morreu" entre 2019 e 2020, o renascimento começou pelas mãos. 
                Honrando a linhagem materna, atuei com <strong>massoterapia</strong>. Foi ela que me reconectou 
                com o sentir e serviu de ponte para eu sair da rigidez militar para a fluidez terapêutica.
              </p>
              <p className="text-xs md:text-sm text-white/60 italic">
                *Hoje, por proteção energética e foco na vibração sutil, não realizo mais atendimentos 
                físicos de massagem. O toque evoluiu para o campo vibracional (Reiki e Som).
              </p>
            </div>

            {/* O NASCIMENTO (2020) */}
            <div>
              <h3 className="mb-2 font-bold text-white text-lg md:text-xl">2020: A Identidade Sonora</h3>
              <p className="mb-4">
                Em <strong className="text-amber-200">2020</strong>, a chave virou. O projeto musical <strong>Marroc</strong> nasceu junto com a nova identidade. 
                A música deixou de ser apenas técnica para se tornar medicina.
              </p>
              <p>
                Consagrei-me <strong>Mestre Reiki Usui</strong>, unindo a condução do pai (música) com a intenção da mãe (cura).
                O portal se abriu com Ganesha, mas foi o <strong>Maha Mrityunjaya</strong> (Shiva) que selou o destino: 
                o som da morte e renascimento.
              </p>
            </div>

            {/* OS 3 PILARES */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="font-display text-xl text-white">
                Os Pilares do Ser
              </h3>
              <ul className="space-y-4 md:space-y-3 text-base">
                <li className="flex gap-3 items-start md:items-center">
                  <span className="text-xl mt-1 md:mt-0">🧬</span>
                  <span>
                    <strong>A Linhagem:</strong> A fusão do ritmo (Pai) com o cuidado (Mãe).
                  </span>
                </li>
                <li className="flex gap-3 items-start md:items-center">
                  <span className="text-xl mt-1 md:mt-0">🎛️</span>
                  <span>
                    <strong>A Técnica:</strong> O produtor que estuda desde 2018 para traduzir o invisível em áudio.
                  </span>
                </li>
                <li className="flex gap-3 items-start md:items-center">
                  <span className="text-xl mt-1 md:mt-0">⚡</span>
                  <span>
                    <strong>A Frequência:</strong> A ferramenta final. Onde o toque físico cessa, a vibração começa.
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA MOBILE: Botão Full Width */}
            <div className="pt-4">
              <Link href="/contato" className="btn btn-primary rounded-full px-8 py-3 w-full md:w-auto text-center block md:inline-block">
                Entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SEÇÃO 2: ECOSSISTEMA (Cards) */}
      <Section
        title="Ecossistema de Ativação"
        subtitle="Como a herança se manifesta hoje."
        headingLevel="h2"
        className="py-12 md:py-16 bg-white/5"
      >
        {/* Grid: 1 coluna no mobile, 2 no tablet/desktop */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          
          <Card
            icon="🎧"
            title="Produção Musical & Sound Healing"
            desc="A herança paterna elevada. Criação de trilhas e frequências que induzem estados de cura e expansão de consciência."
          />

          <Card
            icon="🙌"
            title="Mestre Reiki Usui"
            desc="A herança materna transmutada. O cuidado não é mais físico, mas energético. Harmonização de chakras e limpeza de campo."
          />

          <Card
            icon="🃏"
            title="Tarot + Runas Nórdicas"
            desc="Tecnologias de leitura de campo. Orientação prática para decisões com clareza, coragem e verdade."
          />

          <Card
            icon="🛸"
            title="Cura Multidimensional"
            desc="Terapia vibracional canalizada (Arcturiana) para limpeza profunda de registros kármicos."
          />

          <Card
            icon="🔭"
            title="Astrologia Intuitiva"
            desc="Mapeamento vivo que ativa caminhos. Mais do que interpretar o mapa, acionamos os movimentos necessários."
          />
        </div>
      </Section>

      {/* SEÇÃO 3: MISSÃO E CTA FINAL */}
      <Section
        title="A Missão"
        subtitle="Elevar a frequência."
        headingLevel="h2"
        className="py-12 md:py-16 text-center"
      >
        <div className="mx-auto max-w-2xl space-y-6 text-base md:text-lg leading-relaxed px-4">
          <p>
            Marroc não "cria" — ele canaliza. O "SMS do astral" chega e ele traduz em frequências.
          </p>
          <p>
            A missão é clara: ajudar cada pessoa a recordar a própria grandeza. 
            Não é curar você. É te lembrar quem você é através do som e da energia.
          </p>
          
          {/* Botões Empilhados no Mobile, Lado a Lado no Desktop */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto">
            <Link href="/agenda" className="btn btn-outline rounded-full px-6 py-3 w-full md:w-auto text-center">
              Ver Agenda
            </Link>
            <Link href="/higher-hz" className="btn btn-ghost rounded-full px-6 py-3 w-full md:w-auto text-center">
              Conhecer Higher Hz
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

/* ---------- Componentes locais ---------- */

function Card({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="group translate-y-2 animate-fadeUp rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition-all duration-500 hover:border-amber-200/50 hover:shadow-lg hover:shadow-amber-200/10">
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
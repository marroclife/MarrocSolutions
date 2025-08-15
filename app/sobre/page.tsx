// app/sobre/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Sobre — Marroc",
  description:
    "Quem Sou Eu — Por Marroc. Música, rituais e terapias integradas: Reiki Usui, Tarot + Runas, Cura Multidimensional Arcturiana, Astrologia intuitiva e Sound Healing.",
};

export default function SobrePage() {
  return (
    <main className="bg-[#0b0b0b] text-paper">
      {/* QUEM SOU EU */}
      <Section
        title="Quem sou eu"
        subtitle="Entre o som, o ritual e a palavra — minha história em cada batida."
        headingLevel="h1"
        className="py-16 md:py-20"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Imagem */}
          <div className="flex justify-center">
            <Image
              src="/autor.png"
              alt="Marroc tocando instrumento em atmosfera ritual"
              width={520}
              height={720}
              priority
              className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong>Me chamo Marroc.</strong> Minha trilha começa na música,
              mas foi no silêncio dos rituais que eu descobri o poder do
              cuidado.
            </p>
            <p>
              Sou <strong>massoterapeuta desde 2021</strong>, e foi através do
              corpo que conheci o <strong>Reiki Usui</strong> — uma medicina
              energética que mudou minha forma de sentir, tocar e escutar. A
              partir dali, minha caminhada se expandiu como uma espiral viva.
              Vieram outras linguagens. Vieram outras dimensões.
            </p>
            <p>
              No palco, minha expressão é o{" "}
              <em>Live Psytrance Ritualístico</em>: músicas autorais com
              instrumentos, voz e mantras ao vivo. Integro percussões, sopros e
              camadas criadas por mim, unindo energia de pista e alma de ritual.
              Aqui você encontra uma experiência feita para quem está pronto
              para atravessar.
            </p>
            <p className="font-display italic text-white/75">
              Entre. Ouça. Sinta. Atravesse.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/musica" className="btn btn-primary rounded-full px-5 py-2">
                Ouvir o trabalho
              </Link>
              <Link href="/rituais" className="btn btn-outline rounded-full px-5 py-2">
                Ver rituais e terapias
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* LINHAS DE TRABALHO */}
      <Section
        title="Meu trabalho integra"
        subtitle="Ciência sutil encontra espírito. Mistério encontra método."
        headingLevel="h2"
        className="py-12 md:py-16"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Card
            icon="🌿"
            title="Reiki Usui com aplicações ritualizadas"
            desc="Harmonização de chakras, limpeza do campo e reconexão do fluxo vital. Sessões preparadas com altar, intenção e presença."
          />

          <Card
            icon="🃏"
            title="Tarot + Runas Nórdicas"
            desc="Tecnologias ancestrais como espelhos ativos — orientação prática para decisões com clareza, coragem e verdade."
          />

          <Card
            icon="🛸"
            title="Cura Multidimensional Arcturiana"
            desc="Terapia vibracional canalizada para expansão de consciência, limpeza de registros kármicos e reprogramação do campo."
          />

          <Card
            icon="🔭"
            title="Astrologia intuitiva"
            desc="Mapeamento vivo que ativa caminhos, potenciais e portais — mais do que interpretar, acionar movimentos."
          />

          <Card
            icon="🎧"
            title="Sound Healing"
            desc="Frequências específicas e trilhas autorais para estados ampliados de consciência, integração e repouso do sistema."
          />
        </div>
      </Section>

      {/* COMO CONDUZO AS SESSÕES */}
      <Section
        title="Durante as sessões"
        subtitle="Cada momento tem um som. Nada é aleatório."
        headingLevel="h2"
        className="py-12 md:py-16"
      >
        <div className="card border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Item
              title="Preparação ritual"
              text="Altar, intenção, silêncio e escuta. Você não entra em uma consulta — você entra em um portal."
            />
            <Item
              title="Trilha curada"
              text="Músicas escolhidas — ou criadas — para abrir portais, silenciar a mente ou ancorar o corpo."
            />
            <Item
              title="Integração"
              text="Orientações práticas após a sessão para sustentar o movimento e ancorar o aprendizado no dia a dia."
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/rituais" className="btn btn-primary rounded-full px-5 py-2">
              Explorar rituais
            </Link>
            <Link href="/contato" className="btn btn-outline rounded-full px-5 py-2">
              Falar com o Marroc
            </Link>
          </div>
        </div>
      </Section>

      {/* PROPÓSITO */}
      <Section
        title="Meu propósito"
        subtitle="Não é curar — é lembrar quem você é."
        headingLevel="h2"
        className="py-12 md:py-16"
      >
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            Não é curar. É te lembrar quem você é, para que a tua própria
            energia faça o resto. Te guio com firmeza, respeito e verdade.
          </p>
          <p>
            Aqui, cada consulta é um rito. E cada rito é um chamado ao teu
            centro.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/agenda" className="btn btn-outline rounded-full px-5 py-2">
              Ver agenda
            </Link>
            <Link href="/newsletter" className="btn btn-ghost rounded-full px-5 py-2">
              Receber conteúdos
            </Link>
          </div>
        </div>
      </Section>

      {/* NOTA DE TRANSPARÊNCIA */}
      <Section className="pb-16 md:pb-20">
        <p className="text-xs text-white/45">
          Nota de transparência: ferramentas de IA podem ser usadas como apoio
          à comunicação e organização. A arte, condução e ritos são humanos —
          enraizados em práticas ancestrais, estudo e vivências.
        </p>
      </Section>
    </main>
  );
}

/* ---------- Componentes locais para a página ---------- */

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
    <article className="group translate-y-2 animate-fadeUp rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:border-white/20">
      <div className="mb-3 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-xl">
          {icon}
        </div>
        <h3 className="font-display text-2xl">{title}</h3>
      </div>
      <p className="text-white/80">{desc}</p>
    </article>
  );
}

function Item({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1 font-display text-xl text-white/90">{title}</h4>
      <p className="text-white/75">{text}</p>
    </div>
  );
}

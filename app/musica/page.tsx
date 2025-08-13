import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION, OG } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { VideoGrid } from "@/components/ui/VideoGrid";

export const metadata: Metadata = {
  title: `${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: OG.url,
    siteName: OG.siteName,
    images: [
      {
        url: OG.image,
        width: 1200,
        height: 630,
        alt: "Marroc — Live Psytrance Ritualístico",
      },
    ],
    locale: OG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// Exemplo de dados de vídeo
const videos = [
  { id: "dQw4w9WgXcQ", title: "Live set — percussão, mantras e psy groove", alt: "Marroc tocando ao vivo com percussão" },
  { id: "kXYiU_JCYtU", title: "Impro ao vivo — sopros e canto em 142 BPM", alt: "Marroc com instrumento de sopro e voz" },
  { id: "3JZ_D3ELwOQ", title: "Ritual de abertura — mantra e drop cerimonial", alt: "Ritual de abertura com mantra" },
];

const latestReleaseUrl = "https://www.youtube.com/embed/5qap5aO4i9A"; // Replace with dynamic value

export default function MusicaPage() {
  return (
    <main className="space-y-16 pb-24">
      {/* HERO */}
      <div className="relative isolate">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl font-serif text-off mb-4">
            Live Psytrance Ritualístico — energia de pista, alma de ritual.
          </h1>
          <p className="text-off/80 max-w-3xl leading-relaxed">
            Cada apresentação é um set autoral de Psytrance com instrumentos e voz tocados ao vivo — integrando beats eletrônicos, percussões, sopros e mantras. Música feita para dançar e atravessar.
          </p>
        </div>
      </div>

      {/* PLAYER */}
      <Section title="Ouça" subtitle="Lançamentos e registros de performance ao vivo.">
        <div className="rounded-2xl overflow-hidden ring-1 ring-off/10 bg-ink/60 shadow">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={latestReleaseUrl}
              title="Player — Último lançamento"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      {/* VIDEO GRID */}
      <Section title="Ao vivo" subtitle="Reels reenquadrados como vídeos não listados para melhor compatibilidade no site.">
        {videos.length > 0 ? (
          <VideoGrid videos={videos} />
        ) : (
          <p className="text-off/80 text-center">No videos available at the moment.</p>
        )}
      </Section>

      {/* EXPLANATION */}
      <Section>
        <div className="prose prose-invert max-w-3xl">
          <p>
            No palco, Marroc integra percussões, instrumentos de sopro, cantos e camadas gravadas pelo próprio artista, criando um portal entre pista e ritual. A vibração é eletrônica; a presença é orgânica; a intenção é sagrada.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <p className="text-off/80">
          Quer saber mais? Inscreva-se na nossa newsletter para receber atualizações sobre lançamentos e eventos.
        </p>
        <a
          href="/newsletter"
          className="inline-flex mt-6 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 ring-offset-2 ring-gold bg-gold text-ink hover:opacity-90"
        >
          Inscrever-se
        </a>
      </Section>
    </main>
  );
}
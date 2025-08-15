import Link from "next/link";
import FeaturedPlayer from "@/components/FeaturedPlayer";
import VideoCard from "@/components/VideoCard";

export const metadata = {
  title: "Música — Live Psytrance Ritualístico",
  description:
    "Músicas autorais com instrumentos, voz e mantras ao vivo. Energia de pista, alma de ritual.",
};

const VIDEOS = [
  { id: "4G3P8siK_fg", cap: "Live set — percussão, mantras e psy groove" },
  { id: "PXv-ViQn3Os", cap: "Impro ao vivo — sopros e canto em 142 BPM" },
  { id: "GcOzM4w8auo", cap: "Ritual de abertura — mantra e drop cerimonial" },
];

export default function MusicaPage() {
  return (
    <main className="bg-ritual text-paper">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Live Psytrance Ritualístico — energia de pista, alma de ritual.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Cada apresentação é um set autoral de Psytrance com instrumentos e voz tocados ao vivo —
            integrando beats eletrônicos, percussões, sopros e mantras. Música feita para dançar e atravessar.
          </p>
        </div>
      </section>

      {/* PLAYER EM DESTAQUE */}
      <div className="container mx-auto max-w-6xl px-4">
        <FeaturedPlayer ytId="PXv-ViQn3Os" title="Último lançamento" />

        <div className="mt-6 flex justify-center">
          <Link
            href="/newsletter"
            className="btn btn-outline rounded-full px-6 py-2 text-sm"
          >
            Inscrever-se
          </Link>
        </div>
      </div>

      {/* AO VIVO */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <header className="mb-6">
          <h2 className="font-display text-3xl md:text-4xl">Ao vivo</h2>
          <p className="mt-2 text-white/60">
            Reels reenquadrados como vídeos não listados para melhor compatibilidade no site.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v) => (
            <VideoCard key={v.id} ytId={v.id} title={v.cap} caption={v.cap} />
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-white/80">
          No palco, Marroc integra percussões, instrumentos de sopro, cantos e camadas gravadas
          pelo próprio artista, criando um portal entre pista e ritual. A vibração é eletrônica; a
          presença é orgânica; a intenção é sagrada.
        </p>
      </section>

      {/* FOOTER NOTE */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <p className="text-xs text-white/40">
          Nota de transparência: ferramentas de IA foram utilizadas para contextualização/edição.
          A ideia base, cenários, personagens e o conteúdo do livro são vividos, vistos ou ouvidos.
        </p>
      </section>
    </main>
  );
}

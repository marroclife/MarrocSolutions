
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto do Som Ritual",
  description:
    "Marroc | Higher Hz — Música como tecnologia de consciência. Um chamado para viver a pista de dança como templo e cada set como ritual.",
};

export default function SomRitualPage() {
  return (
    <main className="bg-black text-off">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="container mx-auto max-w-4xl px-6 py-16 md:py-24 text-center">
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
            Manifesto do Som Ritual
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Música como tecnologia de consciência.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="container mx-auto max-w-3xl px-6 py-12 md:py-20 space-y-8">
        <p className="text-xl leading-relaxed">
          Música não é entretenimento. É <strong>portal</strong>. É ponte entre o
          invisível e o visível, entre o que sentimos e o que ainda não
          conseguimos dizer.
        </p>

        <p>
          O Som Ritual nasce da lembrança de que, antes das palavras, havia
          ritmo. Antes das histórias, havia canto. Antes da razão, havia transe.
        </p>

        <p>
          Cada frequência, cada batida, cada mantra, é um fio que tece a
          consciência em padrões sagrados. O tambor desperta a memória da Terra.
          O sopro carrega o chamado do vento. A voz abre portais no coração.
        </p>

        <p>
          No <strong>Marroc</strong>, a pista de dança é um templo. O público,
          um círculo sagrado. As luzes, oferendas ao mistério. E cada set é um
          ritual vivo — onde a tecnologia encontra o espírito, e o corpo se
          torna veículo da transformação.
        </p>

        <p>
          O Som Ritual é ciência e magia. É engenharia vibracional, codificada
          para mover energia, liberar bloqueios e ancorar estados elevados de
          presença.
        </p>

        <p>
          Não estamos aqui para apenas tocar música. Estamos aqui para invocar.
          Para lembrar que dançar é orar, que cantar é curar, que viver é, acima
          de tudo, um rito.
        </p>

        <div className="pt-6 border-t border-white/10">
          <p className="font-serif italic text-white/70">
            Marroc | Higher Hz — Música como tecnologia de consciência.
          </p>
        </div>
      </section>
    </main>
  );
}

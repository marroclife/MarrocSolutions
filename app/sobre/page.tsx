import React from "react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="bg-black text-off">
      {/* Quem sou eu */}
      <Section
        title="Quem sou eu"
        subtitle="Entre o som, o ritual e a palavra — minha história em cada batida."
        headingLevel="h1"
        className="py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="flex justify-center">
            <Image
              src="/autor.png"
              alt="Marroc tocando instrumento"
              width={400}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Sou <strong>Marcio Rocha</strong> — mas no palco e no rito, me
              chamam <strong>Marroc</strong>.
            </p>
            <p>
              Meu som é o <em>Live Psytrance Ritualístico</em> — beats autorais
              com instrumentos, voz e mantras tocados ao vivo. No palco, levo
              percussões, instrumentos de sopro e camadas gravadas por mim,
              criando uma experiência onde a energia da pista se encontra com a
              alma do ritual.
            </p>
            <p>
              Cresci entre a sombra e a luz, aprendendo que a floresta é o caos
              e também a pulsação. Minha música carrega o fogo dos rituais
              hindus, a memória dos povos originários e o pulso eletrônico que
              desperta corpos e almas.
            </p>
            <p>
              Hoje, meu mapa é a arte — no palco, no estúdio e no silêncio.
              Aqui, você não encontra só música. Encontra uma experiência viva,
              feita para quem está pronto para atravessar.
            </p>
            <p className="font-serif italic text-off/80">
              Entre. Ouça. Sinta. Atravesse.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

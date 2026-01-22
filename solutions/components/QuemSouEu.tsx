// components/QuemSouEu.tsx
import Image from "next/image";
import clsx from "clsx";

export default function QuemSouEu({ className }: { className?: string }) {
  return (
    <section
      className={clsx("section", className)}
      aria-labelledby="quemsoueu-title"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="container grid gap-8 md:grid-cols-[220px,1fr] md:gap-12 items-start">
        {/* Foto (opcional). Coloque /public/autor.png */}
        <div className="mx-auto md:mx-0">
          <Image
            src="/autor.png"
            alt="Marcio Rocha (Marroc)"
            width={220}
            height={280}
            className="rounded-2xl border border-white/10 object-cover"
            itemProp="image"
          />
        </div>

        <div>
          <h2 id="quemsoueu-title" className="h2 mb-4" itemProp="name">
            Quem sou eu
          </h2>

          <div className="space-y-4 text-paper/80 leading-relaxed" itemProp="description">
            <p>Sou Marcio Rocha — mas no palco e no rito, me chamam Marroc.</p>
            <p>Não sou só músico.<br/>Sou construtor de portais: cada batida que produzo é uma ponte, cada palavra que canto é um feitiço.</p>
            <p>
                Meu som é Live Psytrance Ritualístico — beats autorais com instrumentos, voz e mantras tocados ao vivo.
                No palco, integro percussões, instrumentos de sopro, cantos e camadas gravadas por mim, 
                criando uma experiência onde a energia da pista se encontra com a alma do ritual.
            </p>
            <p>
              Cresci entre a sombra e a luz, aprendendo que a floresta e o caos têm a mesma pulsação.
              Minha música carrega o fogo dos rituais hindus, a memória dos povos originários, e o pulso eletrônico que desperta corpos e almas.
            </p>
            <p>
              Já caminhei por estradas quebradas, e foi no som que encontrei o mapa de volta para mim.
              Hoje, levo esse mapa para outros — no palco, no estúdio, no silêncio.
            </p>
            <p>
              Aqui, você não encontra só arte.<br/>
              Encontra uma experiência viva, feita para quem está pronto para atravessar.
            </p>
            <p className="font-medium text-paper">Entre. Ouça. Sinta. Atravesse.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

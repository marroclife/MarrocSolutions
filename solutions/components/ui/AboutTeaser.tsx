import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function AboutTeaser() {
  return (
    <Section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8 items-start">
        <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden rounded-2xl ring-1 ring-off/10 bg-ink/60">
          <Image
            src="/autor.png"
            alt="Marroc em retrato ritualístico"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-off mb-3">
            Quem sou eu
          </h2>
          <div className="text-off/85 leading-relaxed space-y-4">
            <p>
              Sou Marcio Rocha — no palco e no rito, me chamam Marroc. Meu som é
              <strong> Live Psytrance Ritualístico</strong>: Músicas autorais com instrumentos, voz e mantras tocados ao vivo.
            </p>
            <p>
              Integro percussões, sopros e canto em cena, unindo energia de pista e alma de ritual. Aqui, você encontra uma experiência feita para quem está pronto para atravessar.
            </p>
          </div>
          <Link
            href="https://marroc.xyz/sobre"
            className="inline-flex mt-6 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 ring-offset-2 ring-gold bg-gold text-ink hover:opacity-90"
          >
            Ler completo
          </Link>
        </div>
      </div>
    </Section>
  );
}
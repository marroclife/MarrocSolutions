import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { HomeCards } from "@/components/ui/HomeCards";
import { ImpactoHome } from "@/components/ui/Impacto";
import { AboutTeaser } from "@/components/ui/AboutTeaser";

export default function HomePage() {
  return (
    <main className="pb-24">
      {/* HERO */}
      <Hero />

      {/* CARDS */}
      <Section className="-mt-6">
        <HomeCards
          cards={[
            {
              title: "Livro",
              description: "A obra que abre o portal — ficção iniciática baseada em vivências reais.",
              href: "/livros/um-lugar-entre-mundos",
            },
            {
              title: "Projetos & Rituais",
              description:
                "Sets, imersões e ativações de som — onde a pista encontra o sagrado.",
              href: "/rituais",
            },
            {
              title: "Agenda",
              description: "Datas de apresentações, imersões e convites especiais.",
              href: "/agenda",
            },
          ]}
        />
      </Section>

      {/* IMPACTO */}
      <ImpactoHome />

      {/* QUEM SOU EU (TEASER) */}
      <AboutTeaser />

      {/* CTA FINAL (reaproveita o Hero copy em escala menor) */}
      <Section className="pt-8">
        <div className="rounded-2xl ring-1 ring-off/10 bg-ink/60 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-off">
            Música, cura e palavra — um hub vivo de portais.
          </h2>
          <p className="text-off/75 mt-2">
            Entre na lista para receber convites e datas de rituais.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/ig"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 ring-offset-2 ring-gold bg-gold text-ink hover:opacity-90"
            >
              Assinar Newsletter
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

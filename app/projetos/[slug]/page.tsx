import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";

// dados de exemplo — mantenha os seus
const DATA: Record<string, { title: string; body: string }> = {
  "imersao-conexoes": {
    title: "Imersão Conexões",
    body: "Jornada de 2 dias com práticas de presença, voz, ritmo e rituais.",
  },
  "santuario-urbano": {
    title: "Santuário Urbano",
    body: "Espaço de práticas e rituais na cidade.",
  },
  "banda-mahakarma": {
    title: "Banda MahaKarma / Live Set",
    body: "Música como tecnologia espiritual.",
  },
  "role-galaktico": {
    title: "Rolê Galáktico",
    body: "Arte, música e sincronicidades.",
  },
};

type PageProps = { params: { slug: string } };

export default function ProjetoDetalhePage({ params }: PageProps) {
  const item = DATA[params.slug];
  if (!item) return notFound();

  return (
    <main className="pb-24">
      <Section title={item.title} headingLevel="h1" className="py-12">
        <p className="text-off/80 leading-relaxed">{item.body}</p>
      </Section>
    </main>
  );
}
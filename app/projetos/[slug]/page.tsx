import { notFound } from "next/navigation";
import { Section, H2 } from "@/components/ui/Section";

const DATA: Record<string, {title:string, body:string}> = {
  "imersao-conexoes": { title: "Imersão Conexões", body: "Jornada de 2 dias com práticas de presença, voz, ritmo e rituais." },
  "santuario-urbano": { title: "Santuário Urbano", body: "Espaço vivo para práticas, estudos e cerimônias." },
  "mahakarma": { title: "MahaKarma / Live Set", body: "Live set ritual com mantras e visual sagrado." },
  "role-galaktico": { title: "Rolê Galáktico", body: "Intervenções urbanas, música e sincronicidade." }
}

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const item = DATA[params.slug];
  if (!item) return notFound();
  return (
    <Section>
      <div className="container max-w-3xl">
        <H2>{item.title}</H2>
        <p className="subtle mt-4">{item.body}</p>
      </div>
    </Section>
  )
}

import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";

const DATA: Record<string, {title:string, body:string}> = {
  "manifesto-do-som": { title: "Manifesto do Som Ritual", body: "Texto em construção (MDX em breve)." },
  "ganesha-stotram": { title: "Notas sobre o Ganesha Stotram", body: "Anotações e insights sobre o mantra." }
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const item = DATA[params.slug];
  if (!item) return notFound();
  return (
    <Section>
      <div className="container max-w-3xl">
        <h1 className="h2">{item.title}</h1>
        <p className="subtle mt-4">{item.body}</p>
      </div>
    </Section>
  );
}

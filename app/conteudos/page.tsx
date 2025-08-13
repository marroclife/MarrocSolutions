import Link from "next/link";
import { Section } from "@/components/ui/Section";

const posts = [
  { slug: "manifesto-do-som", title: "Manifesto do Som Ritual", excerpt: "Música como tecnologia de consciência." },
  { slug: "ganesha-stotram", title: "Notas sobre o Ganesha Stotram", excerpt: "Palavra, ritmo e invocação." }
];

export default function ConteudosPage() {
  return (
    <Section>
      <div className="container">
        <h2 className="font-display text-3xl">Conteúdos</h2>
        <div className="grid gap-6 mt-6">
          {posts.map(p => (
            <div key={p.slug} className="card p-6">
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="subtle mt-2">{p.excerpt}</p>
              <Link className="btn btn-outline mt-4" href={`/conteudos/${p.slug}`}>Ler</Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

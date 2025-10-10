// app/conteudos/[slug]/page.tsx
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: `Conteúdo: ${slug}`,
    description: `Página do conteúdo ${slug}`,
  };
}

export default async function ConteudoPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-6">Conteúdo: {slug}</h1>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <p>Página de conteúdo dinâmico para: {slug}</p>
        </div>
      </div>
    </main>
  );
}
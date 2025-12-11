import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

export default function LivrosPage() {
  return (
    <Section>
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Série — Um Lugar entre Mundos</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card p-6 flex gap-6">
            <Image src="/capa-ulm.png" alt="Capa do livro" width={120} height={160} className="rounded-lg object-cover" />
            <div>
              <h3 className="font-display text-2xl">Samadhi — O Despertar de Sofia</h3>
              <p className="subtle mt-2">Leitura transformadora em PDF. Acesso imediato.</p>
              <div className="mt-4 flex gap-3">
                <Link href="/livros/um-lugar-entre-mundos" className="btn btn-primary">Ver página</Link>
                <a href="https://pay.hotmart.com/" target="_blank" rel="noreferrer" className="btn btn-outline">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/Section";

export default function LojaPage() {
  return (
    <Section>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Loja / Apoiar</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card p-6">
            <p className="font-display text-2xl">Um Lugar entre Mundos (PDF)</p>
            <p className="subtle mt-2">Valor simbólico R$ 22,20 • Valor consciente R$ 33,30</p>
            <div className="mt-4 flex gap-3">
              <a className="btn btn-primary" href="https://pay.hotmart.com/M101238238O?off=ur3sdp6i" target="_blank" rel="noreferrer">Comprar</a>
              <a className="btn btn-outline" href="https://pay.hotmart.com/M101238238O?off=p1uhfzib" target="_blank" rel="noreferrer">Contribuir</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

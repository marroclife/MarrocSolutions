import { Section } from "@/components/ui/Section";

const eventos = [
  { nome: "Círculo de Voz", data: "2025-09-05", local: "Mangaratiba, RJ" },
  { nome: "Imersão Conexões", data: "2025-10-12", local: "Ilha Grande, RJ" },
];

export default function AgendaPage() {
  return (
    <Section>
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Agenda / Experiências</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {eventos.map(e => (
            <div key={e.nome} className="card p-6">
              <p className="font-display text-2xl">{e.nome}</p>
              <p className="subtle mt-1">{new Date(e.data).toLocaleDateString("pt-BR")} • {e.local}</p>
              <a className="btn btn-primary mt-4" href="https://wa.me/5521XXXXXXXXX" target="_blank" rel="noreferrer">Inscrever</a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

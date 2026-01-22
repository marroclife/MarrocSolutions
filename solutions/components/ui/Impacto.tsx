import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function ImpactoHome() {
  return (
    <Section
      title="Impacto / Partilha"
      subtitle="Parte de cada venda sustenta a aldeia que inspirou a obra — transparência trimestral."
      className="py-12"
    >
      <div className="rounded-2xl bg-ink/60 ring-1 ring-off/10 p-5 flex items-center justify-between gap-4 flex-col sm:flex-row">
        <p className="text-off/80 text-sm sm:text-base">
          Veja o relatório mais recente com entradas e saídas dedicadas ao projeto.
        </p>
        <Link
          href="/impacto"
          className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 ring-offset-2 ring-gold bg-gold text-ink hover:opacity-90"
        >
          Acessar transparência
        </Link>
      </div>
    </Section>
  );
}
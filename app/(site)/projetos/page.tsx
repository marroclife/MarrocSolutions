// app/(site)/projetos/page.tsx
// Atualizado em 03/06/2026:
// - Removido "System Check" (intruso).
// - Cor do Marroc Solutions trocada de cyan para verde neon.
// - Adicionadas seções Terapias e Gaja Hai.
// - Ordem final: Marroc → Solutions → Terapias → Higher Hz → Gaja Hai.

import React from "react";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION, OG } from "@/lib/constants";
import { MarrocSection } from "@/components/sections/MarrocSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TerapiasSection } from "@/components/sections/TerapiasSection";
import { HigherHzSection } from "@/components/sections/HigherHzSection";
import { GajaHaiSection } from "@/components/sections/GajaHaiSection";

export const metadata: Metadata = {
  title: `${SITE_TITLE} — Ecossistema`,
  description:
    "Cinco frentes do ecossistema Marroc: O Ritual (Live), A Arquitetura (Solutions), Cura (Terapias), A Alquimia (Higher Hz) e Loja (Gaja Hai).",
  openGraph: {
    title: `${SITE_TITLE} — Ecossistema`,
    description: SITE_DESCRIPTION,
    url: OG.url + "/projetos",
    siteName: OG.siteName,
    images: [{ url: OG.image, width: 1200, height: 630, alt: "Ecossistema Marroc" }],
    locale: OG.locale,
    type: "website",
  },
};

export default function ProjetosPage() {
  return (
    <main className="bg-[#030303] min-h-screen">
      {/* 1. Psytrance (Marroc Live + Txai Integrado) — Roxo */}
      <MarrocSection />

      {/* 2. Marroc Solutions (B2B) — Verde Neon */}
      <SolutionsSection />

      {/* 3. Terapias (Cura & Frequência) — Azul Água / Esmeralda */}
      <TerapiasSection />

      {/* 4. Higher Hz (AI Music) — Dourado */}
      <HigherHzSection />

      {/* 5. Gaja Hai (Dropshipping & Artefatos) — Âmbar */}
      <GajaHaiSection />
    </main>
  );
}

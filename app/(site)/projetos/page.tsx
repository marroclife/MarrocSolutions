import React from "react";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION, OG } from "@/lib/constants";
import { MarrocSection } from "@/components/sections/MarrocSection";
import { HigherHzSection } from "@/components/sections/HigherHzSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
export const metadata: Metadata = {
  title: `${SITE_TITLE} — Ecossistema`,
  description: "Três frentes de atuação: O Ritual (Marroc), A Alquimia (Higher Hz) e A Arquitetura (Solutions).",
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
      
      {/* 1. O Ritual (Marroc Live + Txai Integrado) */}
      <MarrocSection />

      {/* 2. A Alquimia (Higher Hz - AI Music) */}
      <HigherHzSection />

      {/* 3. A Arquitetura (B2B Solutions) */}
      <SolutionsSection />

    </main>
  );
}
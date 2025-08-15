import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { SITE_TITLE, SITE_DESCRIPTION, OG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} — Projetos`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_TITLE} — Projetos`,
    description: SITE_DESCRIPTION,
    url: OG.url + "/projetos",
    siteName: OG.siteName,
    images: [{ url: OG.image, width: 1200, height: 630, alt: "Projetos — Marroc" }],
    locale: OG.locale,
    type: "website",
  },
};

export default function ProjetosPage() {
  return (
    <main className="pb-24">
      <Section
        title="Projetos"
        subtitle="Três frentes vivas: Marroc, Higher Hz e Txai Marroc."
        headingLevel="h1"
        container
      >
        <div className="space-y-10">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </main>
  );
}

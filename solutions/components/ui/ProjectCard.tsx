import Image from "next/image";
import React from "react";
import { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl ring-1 ring-off/10 bg-ink/60 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[320px,1fr] gap-8 items-start">
      {/* Imagem */}
      <div className="relative w-full h-[240px] md:h-[360px] overflow-hidden rounded-xl">
        <Image
          src={project.image || "/images/default.png"} // Fallback caso não tenha imagem
          alt={`Logo do projeto ${project.name}`}
          width={220}
          height={280}
          className="rounded-2xl object-contain border border-white/10 bg-off/5"
          itemProp="image"
        />
      </div>

      {/* Conteúdo */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-serif text-off">
          {project.name}
        </h3>
        <p className="text-sm text-off/70 mt-1">
          {project.tagline}
          {project.year ? ` • desde ${project.year}` : null}
        </p>

        <div className="space-y-4 mt-6 text-off/85 leading-relaxed">
          {project.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Canais */}
        {project.channels?.length ? (
          <div className="flex flex-wrap gap-3 mt-6">
            {project.channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 ring-offset-2 ring-gold bg-gold text-ink hover:opacity-90"
              >
                {c.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

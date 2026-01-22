import React from "react";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* ... imagem ou background ... */}
      <div className="container py-16 md:py-24">
        <h1 className="font-display text-4xl md:text-6xl">
          Live Psytrance Ritualístico — Músicas autorais com instrumentos e voz ao vivo.
        </h1>
        <p className="mt-4 text-xl text-paper/80">
          Mantras, percussões e sopros guiando você por um portal de som e cura.
        </p>
        <div className="mt-8 flex gap-3 flex-wrap">
          <Link href="/musica" className="btn btn-primary">Ouvir agora</Link>
          <Link href="/rituais" className="btn btn-outline">Entrar no ritual</Link>
        </div>
      </div>
    </section>
  );
};

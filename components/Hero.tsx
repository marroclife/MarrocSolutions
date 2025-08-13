import React from "react";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-28">
        <h1 className="text-4xl sm:text-6xl font-serif text-off tracking-tight">
          Música, cura e palavra —
          <br className="hidden sm:block" />
          <span className="whitespace-nowrap">um hub vivo de portais.</span>
        </h1>
        <p className="mt-4 max-w-3xl text-off/80 leading-relaxed">
          Livros, rituais, imersões e sets que alinham arte e espiritualidade.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/livros/um-lugar-entre-mundos"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 ring-offset-2 ring-gold bg-gold text-ink hover:opacity-90"
          >
            Ler "Um Lugar entre Mundos"
          </Link>
          <Link
            href="/ig"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 ring-offset-2 ring-off/40 bg-ink text-off hover:opacity-90"
          >
            Assinar Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
};

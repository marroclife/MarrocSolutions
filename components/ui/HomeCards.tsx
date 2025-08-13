import React from "react";
import Link from "next/link";

export type HomeCard = {
  title: string;
  description?: string;
  href: string;
};

export const HomeCards: React.FC<{ cards: HomeCard[] }> = ({ cards }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {cards.map((c) => (
      <Link
        key={c.title}
        href={c.href}
        className="rounded-2xl bg-ink/60 ring-1 ring-off/10 p-5 hover:-translate-y-0.5 transition shadow"
      >
        <div className="text-off font-semibold">{c.title}</div>
        {c.description && (
          <p className="text-off/70 text-sm mt-2 leading-relaxed">
            {c.description}
          </p>
        )}
      </Link>
    ))}
  </div>
);
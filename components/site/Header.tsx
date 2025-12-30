// components/site/Header.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/livros", label: "Livros" }, 
  { href: "/guardian", label: "Oráculo" },
  { href: "/projetos", label: "Projetos" },
  { href: "/rituais", label: "Rituais" },
  { href: "/agenda", label: "Agenda" },
  { href: "/conteudos", label: "Artigos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // efeito: alterar estilo ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // efeito: fechar menu em mudança de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // efeito: travar scroll body + foco + ESC
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open && firstLinkRef.current) firstLinkRef.current.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const headerClasses =
    "sticky top-0 z-40 transition-colors border-b border-white/10 " +
    (scrolled
      ? "bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50"
      : "bg-transparent");

  const mobilePanelClasses =
    "md:hidden overflow-hidden transition-[max-height] duration-300 motion-reduce:transition-none " +
    (open ? "max-h-96" : "max-h-0");

  return (
    <header className={headerClasses}>
      <div className="container h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Ir para a home">
          <Image
            src="/marroc.png"
            alt="Marroc"
            width={240}   // mantém boa densidade (3x o tamanho do mobile)
            height={80}   // preserve a proporção da sua arte
            className="w-auto h-32 sm:h-14 md:h-16"  // mobile-first: 32px → 36px → 40px
            priority
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-5 text-sm" aria-label="Menu principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-off/90 text-off/80">
              {item.label}
            </Link>
          ))}
          <Link
            href="/loja"
            className="rounded-full bg-gold text-ink px-3 py-1.5 text-sm font-medium hover:opacity-90"
          >
            Apoiar
          </Link>
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-white/15 text-off/90"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Painel mobile */}
      <div id="mobile-menu" aria-hidden={!open} className={mobilePanelClasses}>
        <nav className="border-t border-white/10 bg-black/95" aria-label="Menu principal (mobile)">
          <ul className="flex flex-col p-3">
            {NAV.map((item, idx) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  className="block w-full rounded-lg px-3 py-3 text-off/90 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/loja"
                className="block text-center rounded-full bg-gold text-ink px-4 py-2 font-medium"
                onClick={() => setOpen(false)}
              >
                Apoiar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

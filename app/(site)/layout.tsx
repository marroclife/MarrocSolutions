// app/(site)/layout.tsx
import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/site/Header";
import NexoFloatingWidget from "@/components/NexoFloatingWidget";

// --- JSON-LD SCHEMA (Sovereign Loop - Technical Supremacy) ---
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://marroc.xyz/#organization",
      "name": "Marroc",
      "url": "https://marroc.xyz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marroc.xyz/marroc.png"
      },
      "description": "Hertz & Bits Ecosystem. Arquitetura de Sistemas Vivos, Arte Sonora e Tecnologia com Alma.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rio de Janeiro",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://instagram.com/marroc.xyz",
        "https://wa.me/5521990387232"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://marroc.xyz/#person",
      "name": "Marroc",
      "jobTitle": "Founder & Architect",
      "url": "https://marroc.xyz",
      "description": "Arquiteto de sistemas vivos e fundador do Hertz & Bits Ecosystem.",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://marroc.xyz/#organization"
      },
      "sameAs": ["https://instagram.com/marroc.xyz"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://marroc.xyz/#service",
      "name": "Marroc Solutions",
      "alternateName": "Hertz & Bits Solutions",
      "url": "https://marroc.xyz",
      "description": "Arquitetura de Inteligência Operacional para Negócios B2B. Orquestração de Agentes Autônomos, Saliência de Entidade e Sistemas Vivos Digitais.",
      "provider": {
        "@id": "https://marroc.xyz/#organization"
      },
      "areaServed": "BR",
      "serviceType": [
        "Orquestração de Agentes Autônomos",
        "Saliência de Entidade e SEO",
        "Arquitetura de Sistemas Vivos Digitais",
        "Performance Zero-Latency"
      ]
    }
  ]
};

// --- NOVAS FONTES DO BLUEPRINT V2.0 (MANTIDAS) ---
const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

// --- METADATA (MANTIDA) ---
export const metadata: Metadata = {
  metadataBase: new URL("https://marroc.xyz"),
  title: {
    default: "Marroc Solutions | Sistemas de Agentes Autônomos e IA para Negócios",
    template: "%s | Marroc",
  },
  description: "Hertz & Bits Ecosystem. Arquitetura de Sistemas Vivos, Orquestração de Agentes Autônomos e Tecnologia com Alma para Negócios B2B.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  publisher: "Marroc Solutions",
  openGraph: {
    type: "website",
    title: "Marroc Solutions | Sistemas de Agentes Autônomos e IA para Negócios",
    description: "Marroc Solutions: Sistemas de Agentes Autônomos, SEO de Entidade e Arquitetura Digital para Negócios B2B. Tecnologia com Alma do Hertz & Bits Ecosystem.",
    url: "https://marroc.xyz",
    siteName: "Marroc Portal",
    locale: "pt_BR",
    images: [{ url: "/marroc.png", alt: "Marroc - Hertz & Bits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marroc Solutions | Sistemas de Agentes Autônomos e IA para Negócios",
    description: "Marroc Solutions: Agentes Autônomos, SEO de Entidade e Arquitetura Digital para Negócios B2B. Parte do Hertz & Bits Ecosystem.",
    images: ["/marroc.png"],
  },
  icons: { icon: "/marroc.png", shortcut: "/marroc.png", apple: "/marroc.png" },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    // REMOVEMOS <html> e <body> daqui, pois já estão no app/layout.tsx
    // Usamos uma <divWrapper> que carrega todas as suas fontes e estilos
    <div className={`${syne.variable} ${mono.variable} ${inter.variable} ${playfair.variable} font-body antialiased`}>
      
      {/* SCHEMA.ORG JSON-LD (Sovereign Loop) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      {/* Injetamos seus scripts e estilos customizados diretamente */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-clip-text { padding-bottom: 0.1em; padding-right: 0.2em; }
          ::selection { background-color: #06b6d4; color: #000; }
        `
      }} />

      {/* Header unificado */}
      <Header />

      <main className="min-h-[calc(100vh-8rem)]">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="container px-4 py-10 text-sm text-paper/70 font-mono">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>MARROC ECOSYSTEM © {new Date().getFullYear()}</p>

            <div className="flex gap-4">
              <a href="https://instagram.com/marroc.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
              <a href="https://wa.me/5521990387232" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WHATSAPP</a>
              <a href="/newsletter" className="hover:text-white transition-colors">DATA_LOG</a>
            </div>

            <p className="max-w-xl text-xs text-paper/50">
              SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span>
            </p>
          </div>
        </div>
      </footer>
      <NexoFloatingWidget />
    </div>
  );
}

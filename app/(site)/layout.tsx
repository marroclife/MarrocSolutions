// app/(site)/layout.tsx
import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/site/Header";

// --- JSON-LD SCHEMA (Sovereign Loop - Technical Supremacy) ---
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://marroc.xyz/#organization",
      "name": "Marroc",
      "url": "https://marroc.xyz",
      "logo": "https://marroc.xyz/logo.png",
      "description": "Hertz & Bits Ecosystem. Arquitetura de Sistemas Vivos, Arte Sonora e Tecnologia com Alma.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rio de Janeiro",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://instagram.com/marroc.life",
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
      "sameAs": [
        "https://github.com/marroc",
        "https://linkedin.com/in/marroc"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://solutions.marroc.xyz/#service",
      "name": "Marroc Solutions",
      "alternateName": "Hertz & Bits Solutions",
      "url": "https://solutions.marroc.xyz",
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
    default: "Marroc | Hertz & Bits Ecosystem",
    template: "%s | Marroc",
  },
  description: "Hertz & Bits Ecosystem. Arquitetura de Sistemas Vivos, Orquestração de Agentes Autônomos e Tecnologia com Alma para Negócios B2B.",
  openGraph: {
    type: "website",
    title: "Marroc | Hertz & Bits Ecosystem",
    description: "Tecnologia com Alma. Consultoria B2B, AI Audio e Rituais.",
    url: "https://marroc.xyz",
    siteName: "Marroc Portal",
    locale: "pt_BR",
    images: [{ url: "/banner-portal.png", width: 1200, height: 630, alt: "Marroc - Hertz & Bits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marroc | Hertz & Bits Ecosystem",
    description: "Dominamos a frequência. Soluções Digitais e Arte Sonora.",
    images: ["/banner-portal.png"],
  },
  icons: { shortcut: "/favicon.ico" },
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
              <a href="https://instagram.com/marroc.life" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
              <a href="https://wa.me/5521990387232" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WHATSAPP</a>
              <a href="/newsletter" className="hover:text-white transition-colors">DATA_LOG</a>
            </div>

            <p className="max-w-xl text-xs text-paper/50">
              SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
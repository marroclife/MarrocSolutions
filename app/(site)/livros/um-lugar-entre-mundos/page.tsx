import type { Metadata } from "next";
import LandingPageLivro from "@/components/LandingPageLivro"; // Importa o visual que criamos

// --- AQUI FICA O SEO (METADATA) ---
// Como este arquivo NÃO tem "use client", o Next.js aceita exportar metadata.
export const metadata: Metadata = {
  title: "Um Lugar Entre Mundos | Marroc",
  description: "Uma obra iniciática que funde Xamanismo, RPG e Tecnologia. Não apenas leia. Desperte.",
  openGraph: {
    images: [{ url: "/capa-ulm.png", width: 1200, height: 630, alt: "Capa do Livro Um Lugar Entre Mundos" }],
  },
};

// --- AQUI FICA A RENDERIZAÇÃO ---
export default function Page() {
  return (
    <>
      {/* Chamamos o componente visual que contém o Modal e a interatividade */}
      <LandingPageLivro />
    </>
  );
}
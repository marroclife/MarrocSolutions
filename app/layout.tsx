// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marroc.xyz | Tecnoxamanismo",
  description: "Ecossistema de Arte, Código e Ritual.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Removi as fontes daqui para deixar o layout (site) e (b2b) controlarem suas identidades
    <html lang="pt-br" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased bg-[#050505] text-paper">
        {children}
      </body>
    </html>
  );
}
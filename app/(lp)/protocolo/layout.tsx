import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocolo Marroc | Arquitetura Digital",
  description: "Consultoria de Alta Frequência e Soluções em IA.",
};

export default function ProtocoloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      {/* Forçamos o fundo dark e removemos qualquer navegação global */}
      <body className="bg-neutral-950 text-gray-200 antialiased selection:bg-emerald-500 selection:text-black">
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
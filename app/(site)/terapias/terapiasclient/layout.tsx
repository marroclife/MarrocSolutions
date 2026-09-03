import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do Cliente",
  description: "Área reservada para clientes Marroc.",
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function ClientAreaLayout({ children }: { children: React.ReactNode }) {
  return children;
}

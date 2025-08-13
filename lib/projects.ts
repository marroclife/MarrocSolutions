export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year?: number;
  image?: string;
  summary: string[];
  channels?: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "marroc",
    name: "Marroc",
    tagline: "Live Psytrance Ritualístico",
    year: 2025,
    image: "/images/marroc.jpg",
    summary: [
      "Marroc é um projeto de Psytrance que une produção autoral e performance ao vivo.",
      "Integra instrumentos, voz e mantras em sets ritualísticos.",
    ],
    channels: [
      { label: "Spotify", href: "https://spotify.com/marroc" },
      { label: "Instagram", href: "https://instagram.com/marroc" },
    ],
  },
  {
    slug: "higher-hz",
    name: "Higher Hz",
    tagline: "Explorando frequências elevadas",
    year: 2024,
    image: "/images/higher-hz.jpg",
    summary: [
      "Higher Hz é uma jornada sonora que explora frequências elevadas para cura e meditação.",
    ],
    channels: [
      { label: "YouTube", href: "https://youtube.com/higher-hz" },
    ],
  },
  {
    slug: "txai-marroc",
    name: "Txai Marroc",
    tagline: "Conexão com a natureza e espiritualidade",
    year: 2023,
    image: "/images/txai-marroc.jpg",
    summary: [
      "Txai Marroc é um projeto que conecta música, espiritualidade e a natureza.",
    ],
    channels: [
      { label: "Website", href: "https://txai-marroc.com" },
    ],
  },
];
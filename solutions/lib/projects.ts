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
    year: 2020,
    image: "/marroc.png",
    summary: [
      "Marroc é um projeto de Psytrance que une produção autoral e performance ao vivo.",
      "Integra instrumentos, voz e mantras em sets ritualísticos.",
    ],
    channels: [
      { label: "Spotify", href: "https://open.spotify.com/artist/74vMSJj7Vy2CzAo1U3x9YY" },
      { label: "Instagram", href: "https://www.instagram.com/marroc.life/" },
    ],
  },
  {
    slug: "higher-hz",
    name: "Higher Hz",
    tagline: "Explorando frequências elevadas",
    year: 2024,
    image: "/images/Hhz.png",
    summary: [
      "Higher Hz é uma jornada sonora que explora frequências elevadas para cura e meditação.",
    ],
    channels: [
      { label: "YouTube", href: "https://www.youtube.com/channel/UC-VBON0l3c9AJATHlbJCWuQ" },
    ],
  },
  {
    slug: "txai-marroc",
    name: "Txai Marroc",
    tagline: "Conexão com a natureza e espiritualidade",
    year: 2025,
    image: "/images/txai marroc.png",
    summary: [
      "Txai Marroc é um projeto que conecta música, espiritualidade e a natureza.",
    ],
    channels: [
      { label: "Website", href: "https://txai-marroc.com" },
    ],
  },
];

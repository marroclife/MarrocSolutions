import type { MetadataRoute } from "next";
import { ARTICLES } from "@/app/(site)/conteudos/constants";
import { ALL_CASES } from "@/lib/cases";

const SITE_URL = "https://marroc.xyz";

const staticRoutes = [
  "",
  "/solutions",
  "/solutions/portfolio",
  "/sites-de-alta-performance",
  "/agentes-autonomos",
  "/performance-web",
  "/seo-saliencia-entidade",
  "/conteudos",
  "/sobre",
  "/contato",
  "/loja",
  "/higher-hz",
  "/musica",
  "/nexo",
  "/terapias",
  "/livros",
  "/livros/ganesha",
  "/livros/o-eixo-da-consciencia",
  "/livros/um-lugar-entre-mundos",
  "/projetos",
  "/labs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: generatedAt,
    changeFrequency: route === "" || route === "/conteudos" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/solutions") ? 0.9 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/conteudos/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseEntries: MetadataRoute.Sitemap = ALL_CASES.map((item) => ({
    url: `${SITE_URL}/solutions/cases/${item.slug}`,
    lastModified: generatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries, ...caseEntries];
}

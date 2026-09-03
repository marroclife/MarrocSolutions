import type { Metadata } from "next";
import { ARTICLES } from "@/app/(site)/conteudos/constants";

export function getArticleMetadata(slug: string): Metadata {
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) return {};
  const canonical = `/conteudos/${slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical },
    authors: [{ name: "Marroc", url: "/sobre" }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonical,
      type: "article",
      publishedTime: article.publishDate,
      images: [{ url: article.imageUrl, alt: article.title }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: [article.imageUrl] },
  };
}

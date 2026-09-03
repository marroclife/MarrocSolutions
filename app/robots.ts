import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/guardian/",
          "/estudos/",
          "/terapias/terapiasclient/",
        ],
      },
    ],
    sitemap: "https://marroc.xyz/sitemap.xml",
    host: "https://marroc.xyz",
  };
}

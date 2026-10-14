import type { MetadataRoute } from "next";
import { insights } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wijayapartners.co.id";
  return [
    { url: base, lastModified: new Date() },
    ...insights.map((a) => ({
      url: `${base}/insights/${a.slug}`,
      lastModified: new Date(a.date),
    })),
  ];
}

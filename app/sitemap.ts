import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/vehicles";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://brenoautomix.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/veiculos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...vehicles.map((vehicle) => ({
      url: `${siteUrl}/veiculos/${vehicle.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}

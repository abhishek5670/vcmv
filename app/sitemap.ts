import type { MetadataRoute } from "next";
import { teamPageContent } from "@/content/team-content";

const BASE_URL = "https://vcmv.in";

const servicesSlugs = [
  "forensic-audit",
  "inventory-audit",
  "ipo-advisory",
  "india-entry",
  "direct-tax",
  "international-tax",
  "transfer-pricing",
  "gst-indirect-tax",
  "assurance",
  "litigation",
  "valuation",
  "mergers-acquisitions",
  "expatriates",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const teamRoutes: MetadataRoute.Sitemap = teamPageContent.members.map(
    (member) => ({
      url: `${BASE_URL}/team/${member.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes];
}

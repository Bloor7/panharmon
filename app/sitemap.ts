import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/db/posts";

const BASE_URL = "https://panharmon.com";

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/giai-ma-giac-mo`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/bai-viet`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/san-pham`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/gioi-thieu`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/bai-viet/${post.slug}`,
    lastModified: post.updatedAt || post.date || now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}

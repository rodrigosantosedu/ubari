import { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const staticRoutes = [
    "",
    "/a-ubari",
    "/atendimentos/adultos",
    "/atendimentos/infantil-e-familia",
    "/atendimentos/online",
    "/espaco",
    "/blog",
    "/contato",
    "/agendar",
    "/politica-de-privacidade",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}

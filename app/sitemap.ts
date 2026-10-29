import type { MetadataRoute } from "next";
import { getEssays, getProjects } from "@/lib/content";

export const dynamic = "force-static";

const siteUrl = "https://visioninglab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/thinking/",
    "/projects/",
    "/press/",
    "/press/the-faith-conundrum/sources/",
    "/about/",
    "/collaborate/",
  ];
  const essays = getEssays().map((e) => `/thinking/${e.slug}/`);
  const projects = getProjects()
    .filter((p) => !p.frontmatter.external)
    .map((p) => `/projects/${p.slug}/`);

  return [...pages, ...essays, ...projects].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}

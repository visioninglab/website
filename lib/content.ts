import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export interface EssayFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  featured: boolean;
}

export interface Essay {
  slug: string;
  frontmatter: EssayFrontmatter;
  content: string;
  readingTime: string;
}

export interface ProjectFrontmatter {
  title: string;
  summary: string;
  status: string;
  year: string;
  tags: string[];
  featured: boolean;
  image?: string;
  external?: string;
  partners?: string[];
  role?: string;
  outputs?: string[];
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export function getEssays(): Essay[] {
  const dir = path.join(contentDirectory, "essays");
  const files = getMDXFiles(dir);

  const essays = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const slug = filename.replace(".mdx", "");
    const rt = readingTime(content);

    return {
      slug,
      frontmatter: data as EssayFrontmatter,
      content,
      readingTime: rt.text,
    };
  });

  return essays.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getEssayBySlug(slug: string): Essay | undefined {
  const essays = getEssays();
  return essays.find((e) => e.slug === slug);
}

export function getFeaturedEssays(): Essay[] {
  return getEssays().filter((e) => e.frontmatter.featured);
}

export function getProjects(): Project[] {
  const dir = path.join(contentDirectory, "projects");
  const files = getMDXFiles(dir);

  const projects = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const slug = filename.replace(".mdx", "");

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  });

  // Sort by year (most recent first)
  // Extract start year from "2024–", "2017–2023", or "2020" format
  return projects.sort((a, b) => {
    const yearA = parseInt(a.frontmatter.year.split("–")[0]);
    const yearB = parseInt(b.frontmatter.year.split("–")[0]);
    return yearB - yearA;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.frontmatter.featured);
}

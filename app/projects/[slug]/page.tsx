import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProjects, getProjectBySlug } from "@/lib/content";
import { renderMDX } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects
    .filter((p) => !p.frontmatter.external)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.summary,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await renderMDX(project.content);

  return (
    <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Link
        href="/projects"
        className="text-sm text-neutral-400 hover:text-neutral-600"
      >
        &larr; Back to Projects
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            {project.frontmatter.status}
          </span>
          <span className="text-xs text-neutral-300">&middot;</span>
          <span className="text-xs text-neutral-400">
            {project.frontmatter.year}
          </span>
        </div>
        <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
          {project.frontmatter.title}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-neutral-600">
          {project.frontmatter.summary}
        </p>
        {project.frontmatter.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.frontmatter.tags.map((tag) => (
              <span key={tag} className="text-xs text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose mt-12">{content}</div>
    </article>
  );
}

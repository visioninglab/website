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
  const role = project.frontmatter.role || "Co-development / R&D partner";

  return (
    <article className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Back to Projects
      </Link>

      <header className="mt-10">
        <div className="flex items-center gap-3">
          {project.frontmatter.tags[0] && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {project.frontmatter.tags[0]}
            </span>
          )}
          <span className="text-xs text-muted-foreground">
            {project.frontmatter.status}
          </span>
          <span className="text-xs text-muted-foreground/40">&middot;</span>
          <span className="text-xs text-muted-foreground">
            {project.frontmatter.year}
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-4xl font-bold tracking-tight md:text-5xl">
          {project.frontmatter.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.frontmatter.summary}
        </p>

        <div className="mt-6 space-y-2">
          <p className="text-sm text-muted-foreground">{role}</p>
          {project.frontmatter.partners &&
            project.frontmatter.partners.length > 0 && (
              <p className="text-sm text-muted-foreground">
                <span className="text-muted-foreground/60">Partners: </span>
                {project.frontmatter.partners.join(", ")}
              </p>
            )}
          {project.frontmatter.outputs &&
            project.frontmatter.outputs.length > 0 && (
              <p className="text-sm text-muted-foreground">
                <span className="text-muted-foreground/60">Outputs: </span>
                {project.frontmatter.outputs.join(", ")}
              </p>
            )}
        </div>

        {project.frontmatter.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
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

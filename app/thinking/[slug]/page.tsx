import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getEssays, getEssayBySlug } from "@/lib/content";
import { renderMDX } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const essays = getEssays();
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};

  return {
    title: essay.frontmatter.title,
    description: essay.frontmatter.summary,
    openGraph: {
      title: essay.frontmatter.title,
      description: essay.frontmatter.summary,
      type: "article",
      publishedTime: essay.frontmatter.date,
    },
  };
}

export default async function EssayPage({ params }: PageProps) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  const content = await renderMDX(essay.content);

  return (
    <article className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <Link
        href="/thinking"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Back to Thinking
      </Link>

      <header className="mt-8">
        <h1 className="max-w-2xl font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
          {essay.frontmatter.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {new Date(essay.frontmatter.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          <span className="mx-2">&middot;</span>
          {essay.readingTime}
        </p>
        {essay.frontmatter.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {essay.frontmatter.tags.map((tag) => (
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

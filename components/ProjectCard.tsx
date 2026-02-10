import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.frontmatter.external
    ? project.frontmatter.external
    : `/projects/${project.slug}`;

  const isExternal = !!project.frontmatter.external;

  return (
    <article className="group border border-neutral-200 p-6 transition-colors hover:border-neutral-400">
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
          {project.frontmatter.status}
          <span className="mx-2">&middot;</span>
          {project.frontmatter.year}
        </p>
        {isExternal && (
          <span className="text-xs text-neutral-400">&nearr;</span>
        )}
      </div>

      <Link
        href={href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="mt-3 block"
      >
        <h3 className="text-lg font-medium tracking-tight group-hover:underline">
          {project.frontmatter.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
          {project.frontmatter.summary}
        </p>
      </Link>

      {project.frontmatter.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

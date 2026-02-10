import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.frontmatter.external
    ? project.frontmatter.external
    : `/projects/${project.slug}`;

  const isExternal = !!project.frontmatter.external;
  const role = project.frontmatter.role || "Co-development / R&D partner";

  return (
    <article className="group">
      <Link
        href={href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
      >
        {project.frontmatter.image && (
          <div className="relative h-40 w-full overflow-hidden bg-muted">
            <Image
              src={`${basePath}${project.frontmatter.image}`}
              alt={project.frontmatter.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {project.frontmatter.tags[0] && (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.frontmatter.tags[0]}
              </span>
            )}
            <p className="text-xs text-muted-foreground">
              {project.frontmatter.status}
              <span className="mx-2">&middot;</span>
              {project.frontmatter.year}
            </p>
          </div>
          {isExternal && (
            <span className="text-xs text-muted-foreground">&nearr;</span>
          )}
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.frontmatter.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.frontmatter.summary}
        </p>

        <div className="mt-4 space-y-1">
          <p className="text-xs text-muted-foreground">{role}</p>
          {project.frontmatter.partners &&
            project.frontmatter.partners.length > 0 && (
              <p className="text-xs text-muted-foreground">
                <span className="text-muted-foreground/60">With </span>
                {project.frontmatter.partners.join(", ")}
              </p>
            )}
        </div>
        </div>
      </Link>
    </article>
  );
}

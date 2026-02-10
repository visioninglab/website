import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/content";
import FadeIn from "./FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function FeaturedProjects({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                Projects
              </p>
              <h2 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold md:text-4xl">
                Recent <span className="text-gradient">Work</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all &rarr;
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => {
            const href = project.frontmatter.external
              ? project.frontmatter.external
              : `/projects/${project.slug}`;
            const isExternal = !!project.frontmatter.external;

            return (
              <FadeIn key={project.slug} delay={0.1 * i}>
                <Link
                  href={href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40"
                >
                  {project.frontmatter.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-muted md:h-56">
                      <Image
                        src={`${basePath}${project.frontmatter.image}`}
                        alt={project.frontmatter.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-10 md:p-10">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-3">
                        {project.frontmatter.tags[0] && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {project.frontmatter.tags[0]}
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground">
                          {project.frontmatter.status} &middot;{" "}
                          {project.frontmatter.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-primary md:text-2xl">
                        {project.frontmatter.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {project.frontmatter.summary}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary/10">
                        <svg
                          className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { getEssays, getFeaturedProjects } from "@/lib/content";
import EssayCard from "@/components/EssayCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const essays = getEssays();
  const latestEssay = essays[0];
  const featuredEssays = essays.slice(1, 4);
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h1 className="max-w-2xl font-[family-name:var(--font-source-serif)] text-4xl font-bold tracking-tight md:text-5xl">
          Visioning Lab
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600">
          Research at the intersection of ontological thinking, infrastructure
          systems, and immersive technology.
        </p>
      </section>

      {/* Latest Essay */}
      {latestEssay && (
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Latest
            </p>
            <Link href={`/thinking/${latestEssay.slug}`} className="mt-4 block">
              <h2 className="max-w-xl font-[family-name:var(--font-source-serif)] text-2xl font-semibold tracking-tight hover:underline md:text-3xl">
                {latestEssay.frontmatter.title}
              </h2>
              <p className="mt-3 max-w-xl text-neutral-600">
                {latestEssay.frontmatter.summary}
              </p>
              <p className="mt-3 text-xs text-neutral-400">
                {new Date(latestEssay.frontmatter.date).toLocaleDateString(
                  "en-GB",
                  { day: "numeric", month: "long", year: "numeric" }
                )}
                <span className="mx-2">&middot;</span>
                {latestEssay.readingTime}
              </p>
            </Link>
          </div>
        </section>
      )}

      {/* Featured Essays */}
      {featuredEssays.length > 0 && (
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Thinking
              </p>
              <Link
                href="/thinking"
                className="text-sm text-neutral-500 hover:text-neutral-900"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {featuredEssays.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Projects
              </p>
              <Link
                href="/projects"
                className="text-sm text-neutral-500 hover:text-neutral-900"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About snippet + CTA */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              About
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Visioning Lab is a research lab that works across ontological
              thinking, infrastructure systems, and immersive technology. We
              research, build, and question — bringing rigour to complexity and
              clarity to decisions that shape the built environment.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/about"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
              >
                Learn more
              </Link>
              <Link
                href="/collaborate"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

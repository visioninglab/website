import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research projects from Visioning Lab — ontology tools, immersive experiences, and infrastructure research.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Making
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
          Research & <span className="text-gradient">Development</span>
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Research projects spanning ontology tools, immersive experiences, and
          infrastructure systems.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={0.1 * i}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

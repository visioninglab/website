import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research projects from Visioning Lab — ontology tools, immersive experiences, and infrastructure research.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
        Projects
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600">
        Research projects spanning ontology tools, immersive experiences, and
        infrastructure systems.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

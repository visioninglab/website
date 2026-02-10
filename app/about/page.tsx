import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import FounderBio from "@/components/FounderBio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Visioning Lab — a research lab working across ontological thinking, infrastructure systems, and immersive technology.",
};

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "R&D", label: "Lab Approach" },
  { value: "AI", label: "& Emerging Tech" },
  { value: "2019", label: "Founded" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          About
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          A lab for <span className="text-gradient">transformative</span> ideas
        </h1>
      </FadeIn>

      <div className="mt-16 grid items-start gap-16 md:grid-cols-2">
        <FadeIn>
          <div className="prose">
            <h2>What We Do</h2>
            <p>
              Visioning Lab is a research lab that works at the intersection of
              ontological thinking, infrastructure systems, and immersive
              technology. We research, build, and question — bringing rigour to
              complexity and clarity to decisions that shape the built
              environment.
            </p>
            <p>
              Our work spans formal research, tool development, and immersive
              experiences. We believe that the most meaningful insights emerge
              from the act of making — building systems, designing frameworks,
              and testing ideas against the grain of real-world complexity.
            </p>

            <h2>Methodology</h2>
            <p>
              Our approach is deliberately cross-disciplinary. Every project
              begins with a question that matters, and we draw from multiple
              fields to answer it:
            </p>
            <ul>
              <li>
                <strong>Ontology and knowledge systems</strong> — understanding
                how we categorise and represent the world
              </li>
              <li>
                <strong>Infrastructure research</strong> — examining the systems
                that underpin society
              </li>
              <li>
                <strong>Immersive technology</strong> — using spatial and
                interactive media to communicate complex ideas
              </li>
              <li>
                <strong>Participatory design</strong> — working with
                communities, not just for them
              </li>
            </ul>

            <h2>Collaborators</h2>
            <p>
              We work with researchers, practitioners, and organisations across
              sectors — from water utilities and infrastructure bodies to
              cultural institutions and standards organisations. Our projects are
              collaborative by design, because the most valuable knowledge is
              built together.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <p className="text-gradient font-[family-name:var(--font-source-serif)] text-3xl font-bold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="relative mt-20 h-64 w-full overflow-hidden rounded-2xl md:h-80">
          <Image
            src="/images/collaboratorium.png"
            alt="Collaboratorium — a virtual environment for academic collaboration"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          The Collaboratorium — a virtual space for collaborative research
        </p>
      </FadeIn>

      <FounderBio />
    </div>
  );
}

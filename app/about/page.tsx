import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Visioning Lab — a research lab working across ontological thinking, infrastructure systems, and immersive technology.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
        About
      </h1>

      <div className="prose mt-12">
        <h2>What We Do</h2>
        <p>
          Visioning Lab is a research lab that works at the intersection of
          ontological thinking, infrastructure systems, and immersive technology.
          We research, build, and question — bringing rigour to complexity and
          clarity to decisions that shape the built environment.
        </p>
        <p>
          Our work spans formal research, tool development, and immersive
          experiences. We believe that the most meaningful insights emerge from
          the act of making — building systems, designing frameworks, and testing
          ideas against the grain of real-world complexity.
        </p>

        <h2>Methodology</h2>
        <p>
          Our approach is deliberately cross-disciplinary. Every project begins
          with a question that matters, and we draw from multiple fields to
          answer it:
        </p>
        <ul>
          <li>
            <strong>Ontology and knowledge systems</strong> — understanding how
            we categorise and represent the world
          </li>
          <li>
            <strong>Infrastructure research</strong> — examining the systems that
            underpin society
          </li>
          <li>
            <strong>Immersive technology</strong> — using spatial and interactive
            media to communicate complex ideas
          </li>
          <li>
            <strong>Participatory design</strong> — working with communities, not
            just for them
          </li>
        </ul>

        <h2>Founder</h2>
        <p>
          Visioning Lab was founded by Jessica, whose work bridges research and
          practice across infrastructure, data systems, and immersive
          technology. Her approach combines rigorous ontological thinking with a
          commitment to making research accessible and actionable.
        </p>

        <h2>Collaborators</h2>
        <p>
          We work with researchers, practitioners, and organisations across
          sectors — from water utilities and infrastructure bodies to cultural
          institutions and standards organisations. Our projects are
          collaborative by design, because the most valuable knowledge is built
          together.
        </p>
      </div>
    </div>
  );
}

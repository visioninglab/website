import type { Metadata } from "next";
import { getEssays } from "@/lib/content";
import EssayCard from "@/components/EssayCard";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Essays and position pieces from Visioning Lab on ontology, infrastructure, and immersive technology.",
};

export default function ThinkingPage() {
  const essays = getEssays();

  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Thinking
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
          Essays & Position Pieces
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Essays and position pieces on ontology, infrastructure, and immersive
          technology.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {essays.map((essay, i) => (
          <FadeIn key={essay.slug} delay={0.1 * i}>
            <EssayCard essay={essay} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { getEssays } from "@/lib/content";
import EssayCard from "@/components/EssayCard";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Essays and position pieces from Visioning Lab on ontology, infrastructure, and immersive technology.",
};

export default function ThinkingPage() {
  const essays = getEssays();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
        Thinking
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600">
        Essays and position pieces on ontology, infrastructure, and immersive
        technology.
      </p>

      <div className="mt-12 space-y-10">
        {essays.map((essay) => (
          <EssayCard key={essay.slug} essay={essay} />
        ))}
      </div>
    </div>
  );
}

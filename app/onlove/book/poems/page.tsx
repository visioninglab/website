import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PoemCards from "@/components/onlovebook/PoemCards";

export const metadata: Metadata = {
  title: "Poems — Eight Billion Ways to Love",
  alternates: { canonical: "/onlove/book/poems/" },
};

export default function PoemsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          More <span className="text-gradient">poems</span>
        </h1>
        <div className="prose mt-6 max-w-2xl">
          <p>
            Sixteen poems made it into the journal. These twelve wait here, grouped by what they
            say about love. Each card shows the opening lines first; turn it over to find out who
            wrote it, where and when.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-10">
        <PoemCards />
      </FadeIn>
      <p className="mt-16 max-w-2xl text-sm text-muted-foreground">
        English versions of poems not written in English are new translations made with AI
        assistance. The whole poems, in their original languages, are on the Love Manifesto site.
      </p>
    </div>
  );
}

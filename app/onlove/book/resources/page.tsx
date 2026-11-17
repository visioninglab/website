import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ResearchLibrary from "@/components/onlovebook/ResearchLibrary";
import { research } from "@/lib/onlovebook/resources";

export const metadata: Metadata = {
  title: "Love research — Eight Billion Ways to Love",
  alternates: { canonical: "/onlove/book/resources/" },
};

const linkClass =
  "text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

export default function ResourcesPage() {
  const talks = research.items.filter((i) => i.video).length;
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Love <span className="text-gradient">research</span>
        </h1>
        <div className="prose mt-6 max-w-2xl">
          <p>
            Poets have had their say. Here is what researchers are finding: {research.items.length}{" "}
            talks and studies from the{" "}
            <a href="https://love-studies-institute.org/" target="_blank" rel="noopener noreferrer">
              Institute on Love Studies
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            and its conferences from 2024 to 2026, by linguists, psychologists, anthropologists,
            literary scholars and more. {talks} of them can be watched; the video links start at the
            part of the talk the summary describes.
          </p>
          <p>
            Search for a word, filter by year, or let one find you. Each summary is a short account
            of the work, not a verdict on it. Many come from conference abstracts, which can describe
            early or proposed work.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10">
        <ResearchLibrary />
      </FadeIn>

      <section className="mt-20 max-w-3xl" aria-labelledby="more">
        <h2 id="more" className="font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight">
          Where to find more
        </h2>
        <dl className="mt-6 space-y-5">
          {research.sources.map((s) => (
            <div key={s.name}>
              <dt className="font-medium">
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {s.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  s.name
                )}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.details}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { faithConundrumSources } from "@/lib/faith-conundrum-sources";

export const metadata: Metadata = {
  title: "The Faith Conundrum: Further Reading, Watching and Sources",
  description:
    "Further reading, watching and sources for The Faith Conundrum by Dr Jessica Symons.",
};

export default function FaithConundrumSourcesPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <Link
        href="/press"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Back to Visioning Press
      </Link>

      <header className="mt-8">
        <h1 className="max-w-3xl font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
          <em>The Faith Conundrum</em>: Further Reading, Watching and Sources
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A companion to the printed book, with links to the material it
          recommends.
        </p>
      </header>

      <div className="mt-12 max-w-3xl">
        {faithConundrumSources.map((section) => (
          <section
            key={section.heading}
            aria-labelledby={slugify(section.heading)}
            className="mt-12 first:mt-0"
          >
            <h2
              id={slugify(section.heading)}
              className="border-b border-border pb-3 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight"
            >
              {section.heading}
            </h2>
            <ul className="mt-6 space-y-6">
              {section.entries.map((entry, i) => (
                <li key={`${entry.title}-${i}`}>
                  <p className="font-medium leading-snug">
                    {entry.url ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      >
                        {entry.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      entry.title
                    )}
                  </p>
                  {entry.attribution && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {entry.attribution}
                    </p>
                  )}
                  {entry.description && (
                    <p className="mt-2 leading-relaxed text-foreground/90">
                      {entry.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

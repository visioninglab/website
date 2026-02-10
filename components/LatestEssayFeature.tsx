import Link from "next/link";
import type { Essay } from "@/lib/content";
import FadeIn from "./FadeIn";

export default function LatestEssayFeature({ essay }: { essay: Essay }) {
  return (
    <section className="bg-card/50 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Latest Thinking
          </p>
          <Link href={`/thinking/${essay.slug}`} className="group mt-6 block">
            <h2 className="max-w-2xl font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
              {essay.frontmatter.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {essay.frontmatter.summary}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {new Date(essay.frontmatter.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              <span className="mx-2">&middot;</span>
              {essay.readingTime}
            </p>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

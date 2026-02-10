import Link from "next/link";
import type { Essay } from "@/lib/content";
import EssayCard from "./EssayCard";
import FadeIn from "./FadeIn";

export default function EssayGrid({ essays }: { essays: Essay[] }) {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                Thinking
              </p>
              <h2 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold md:text-4xl">
                Selected Essays
              </h2>
            </div>
            <Link
              href="/thinking"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all &rarr;
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {essays.map((essay, i) => (
            <FadeIn key={essay.slug} delay={0.1 * i}>
              <EssayCard essay={essay} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

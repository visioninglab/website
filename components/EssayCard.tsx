import Link from "next/link";
import type { Essay } from "@/lib/content";

export default function EssayCard({ essay }: { essay: Essay }) {
  return (
    <article className="group">
      <Link
        href={`/thinking/${essay.slug}`}
        className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
      >
        <p className="text-xs text-muted-foreground">
          {new Date(essay.frontmatter.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          <span className="mx-2">&middot;</span>
          {essay.readingTime}
        </p>
        <h3 className="mt-3 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
          {essay.frontmatter.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {essay.frontmatter.summary}
        </p>
      </Link>
    </article>
  );
}

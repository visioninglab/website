import Link from "next/link";
import type { Essay } from "@/lib/content";

export default function EssayCard({ essay }: { essay: Essay }) {
  return (
    <article className="group">
      <Link href={`/thinking/${essay.slug}`} className="block">
        <p className="text-xs text-neutral-400">
          {new Date(essay.frontmatter.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          <span className="mx-2">&middot;</span>
          {essay.readingTime}
        </p>
        <h3 className="mt-2 text-lg font-medium tracking-tight group-hover:underline">
          {essay.frontmatter.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
          {essay.frontmatter.summary}
        </p>
      </Link>
    </article>
  );
}

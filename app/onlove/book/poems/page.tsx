import type { Metadata } from "next";
import Link from "next/link";
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
        <Link
          href="/onlove/book/poems/the-quiet-maiden/"
          className="mt-8 block max-w-2xl rounded-2xl border border-[#C4AE97] bg-[#050505] p-6 text-[#F1ECE4] transition-transform hover:-translate-y-0.5"
        >
          <p className="text-xs uppercase tracking-widest text-[#C4AE97]">A reading experience</p>
          <p className="mt-2 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight">
            <span lang="zh-Hant">靜女</span> The Quiet Maiden, unfolding
          </p>
          <p className="mt-2 text-[#F1ECE4]/75">
            The oldest poem in the book, read slowly: one character, the people in it, the whole song, and what each
            part is made of. Best with sound on.
          </p>
        </Link>
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

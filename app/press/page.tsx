import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Visioning Press works with writers and thinkers who have new ideas to share and something distinctive to say about the world.",
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Press
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Visioning <span className="text-gradient">Press</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-foreground">
          Bringing new ideas into the public domain.
        </p>
      </FadeIn>

      <div className="mt-12 grid items-start gap-16 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="prose">
            <p>
              Visioning Press works with writers and thinkers who have new ideas
              to share and something distinctive to say about the world.
            </p>
            <p>
              We are interested in books that cross boundaries, challenge
              familiar ways of thinking and make complex ideas accessible to a
              wider audience.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Coming Christmas 2026
          </p>

          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-bold italic tracking-tight md:text-3xl">
              Faith as Technology: How Religions Shape Society Through the Ages
            </h2>
            <p className="mt-3 font-medium text-muted-foreground">
              Dr Jessica Symons
            </p>

            <div className="prose mt-8 max-w-3xl">
              <p>
                Our first book explores faith as one of humanity&rsquo;s most
                enduring technologies: a way of organising knowledge, values,
                relationships and collective life.
              </p>
              <p>
                Drawing on anthropology, history and contemporary society,{" "}
                <em>Faith as Technology</em> follows the development of
                religious traditions through the ages and asks what happens when
                we look at religion not simply in terms of what people believe,
                but in terms of{" "}
                <strong>what faith enables societies to do</strong>.
              </p>
              <p>
                Written by Visioning Lab founder and anthropologist{" "}
                <strong>Dr Jessica Symons</strong>, <em>Faith as Technology</em>{" "}
                will be published by Visioning Press in time for the 2026
                Christmas reading lists.
              </p>
            </div>

            <p className="mt-8 inline-block rounded-lg border border-primary/40 px-4 py-2 text-sm font-medium text-primary">
              Publishing Christmas 2026
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

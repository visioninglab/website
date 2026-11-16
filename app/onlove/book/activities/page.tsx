import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ActivityDeck from "@/components/onlovebook/ActivityDeck";

export const metadata: Metadata = {
  title: "Activities — Eight Billion Ways to Love",
  alternates: { canonical: "/onlove/book/activities/" },
};

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          More <span className="text-gradient">activities</span>
        </h1>
        <div className="prose mt-6 max-w-2xl">
          <p>
            The journal holds nineteen activities. These twenty-three go further: some for a few
            minutes, some for a week, some to do with another person. Each one notes where it fits
            alongside the book.
          </p>
          <p>Pick one, or let the deck choose.</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-10">
        <ActivityDeck />
      </FadeIn>
    </div>
  );
}

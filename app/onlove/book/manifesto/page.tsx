import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ManifestoBuilder from "@/components/onlovebook/ManifestoBuilder";

export const metadata: Metadata = {
  title: "My Manifesto for Love — Eight Billion Ways to Love",
  alternates: { canonical: "/onlove/book/manifesto/" },
};

export default function ManifestoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          My Manifesto <span className="text-gradient">for Love</span>
        </h1>
        <div className="prose mt-6 max-w-2xl">
          <p>
            Not a vow to be kept for ever: a way of making a choice with open eyes, today. Write a
            line for each starter, sign it, and seal it. It can be rewritten as often as needed.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-10">
        <ManifestoBuilder />
      </FadeIn>
    </div>
  );
}

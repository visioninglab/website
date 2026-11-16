import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Questionnaire from "@/components/onlovebook/Questionnaire";

export const metadata: Metadata = {
  title: "Questionnaire — Eight Billion Ways to Love",
  alternates: { canonical: "/onlove/book/questionnaire/" },
};

export default function QuestionnairePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Mind, body <span className="text-gradient">and soul</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-8">
        <Questionnaire />
      </FadeIn>
    </div>
  );
}

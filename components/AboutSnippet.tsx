"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import EditableText from "./EditableText";

export default function AboutSnippet() {
  return (
    <section className="bg-card/50 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            <EditableText contentKey="about.label" defaultValue="About" />
          </p>
          <EditableText
            contentKey="about.snippet"
            defaultValue="Visioning Lab is a hybrid research and innovation lab. We co-develop R&D projects with partners — from ontology and standards work through to decision-centred infrastructure analytics and public-facing immersive experiences."
            as="p"
            multiline
            className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
          />
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-glow"
          >
            Learn more about us
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

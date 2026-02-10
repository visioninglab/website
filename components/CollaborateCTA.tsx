"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import EditableText from "./EditableText";

const pathways = [
  { label: "Research partnership", href: "/collaborate" },
  { label: "Commission", href: "/collaborate" },
  { label: "Speaking", href: "/collaborate" },
  { label: "Press", href: "/collaborate" },
];

export default function CollaborateCTA() {
  return (
    <section className="bg-card py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            <EditableText contentKey="cta.label" defaultValue="Get in Touch" />
          </p>
          <h2 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
            <EditableText
              contentKey="cta.heading"
              defaultValue="Let's work together"
            />
          </h2>
          <EditableText
            contentKey="cta.description"
            defaultValue="We are always open to meaningful collaboration. Whether you have a research question, a project brief, or an idea worth exploring."
            as="p"
            multiline
            className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {pathways.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Or email directly:{" "}
            <a
              href="mailto:hello@visioninglab.com"
              className="text-primary underline underline-offset-2 transition-colors hover:text-glow"
            >
              hello@visioninglab.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

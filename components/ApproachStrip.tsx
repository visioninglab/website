"use client";

import FadeIn from "./FadeIn";
import EditableText from "./EditableText";

const areas = [
  {
    key: "approach.area1",
    title: "Co-development & Convening",
    description:
      "Partnering with organisations to co-design and deliver ambitious R&D across sectors.",
  },
  {
    key: "approach.area2",
    title: "Ontologies & Standards",
    description:
      "Rigorous language and knowledge systems work that brings clarity to complex domains.",
  },
  {
    key: "approach.area3",
    title: "Evidence to Decisions",
    description:
      "Turning evidence into confidence — building tools and frameworks that support better decisions.",
  },
];

export default function ApproachStrip() {
  return (
    <section className="bg-card/50 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            <EditableText contentKey="approach.label" defaultValue="What We Do" />
          </p>
          <h2 className="max-w-3xl font-[family-name:var(--font-source-serif)] text-3xl font-bold md:text-4xl">
            A lab for <span className="text-gradient">transformative</span> ideas
          </h2>
          <EditableText
            contentKey="approach.description"
            defaultValue="Visioning Lab partners with organisations to co-design and deliver ambitious R&D — combining systems thinking, rigorous language/standards work, and prototyping."
            as="p"
            multiline
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {areas.map((area, i) => (
            <FadeIn key={area.key} delay={0.1 * i}>
              <div className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <h3 className="text-lg font-semibold">
                  <EditableText
                    contentKey={`${area.key}.title`}
                    defaultValue={area.title}
                  />
                </h3>
                <EditableText
                  contentKey={`${area.key}.desc`}
                  defaultValue={area.description}
                  as="p"
                  multiline
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

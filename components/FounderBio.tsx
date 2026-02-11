"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import EditableText from "./EditableText";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function FounderBio() {
  return (
    <div className="mt-24 border-t border-border pt-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Founder
        </p>
      </FadeIn>
      <div className="grid items-center gap-12 md:grid-cols-5">
        <FadeIn className="md:col-span-2">
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src={`${basePath}/images/jessica-symons.jpg`}
              alt="Dr Jessica Symons demonstrating augmented reality technology at an exhibition"
              width={1024}
              height={683}
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.15} className="md:col-span-3">
          <EditableText
            contentKey="founder.name"
            defaultValue="Dr Jessica Symons"
            as="h2"
            className="font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight md:text-3xl"
          />
          <p className="mt-1 text-sm text-primary">
            <EditableText
              contentKey="founder.subtitle"
              defaultValue="Anthropologist · Digital Consultant · Founder"
            />
          </p>
          <EditableText
            contentKey="founder.bio1"
            defaultValue="Dr Jessica Symons set up Visioning Lab in 2019, bringing 25 years of digital and social entrepreneurship and a decade of anthropological research to create projects that tackle social and environmental issues using emerging technologies."
            as="p"
            multiline
            className="mt-6 leading-relaxed text-muted-foreground"
          />
          <EditableText
            contentKey="founder.bio2"
            defaultValue="Her work spans public, private, and third sectors — from consulting for large multinationals and startups to research positions at the University of Manchester and University of Salford. She designs projects by weaving social and environmental challenges with ideas, people, places and activities."
            as="p"
            multiline
            className="mt-4 leading-relaxed text-muted-foreground"
          />
          <EditableText
            contentKey="founder.bio3"
            defaultValue="She works with a wide network of consultants, academics, artists, technologists, producers and engagers — taking a 'lab' approach that is open, inquiring, iterative and exploratory. She regularly presents at conferences and public events across the UK and internationally on sustainable and socially-minded development of emerging technologies."
            as="p"
            multiline
            className="mt-4 leading-relaxed text-muted-foreground"
          />
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/jessica-symons-63622229/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

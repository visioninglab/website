import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const siteUrl = "https://visioninglab.github.io/lovemanifesto/";
const mapUrl = "https://visioninglab.github.io/lovemanifesto/poems/map.html";
const ringPath = "/images/love-manifesto-ring.jpg";

export const metadata: Metadata = {
  title: "On Love",
  description:
    "Love Manifesto: a love poem, song or story from every country in the world, in the language it was written in and in English.",
  alternates: { canonical: "/on-love/" },
  openGraph: {
    title: "On Love — Love Manifesto",
    description:
      "A love poem, song or story from every country in the world, in the language it was written in and in English.",
    url: "/on-love/",
    images: [{ url: ringPath, width: 480, height: 480 }],
  },
};

const features = [
  {
    heading: "One for every country",
    text: "Each country has one chosen work. Some are famous, some are folk songs or oral traditions that are rarely heard outside their home.",
  },
  {
    heading: "Read it in two languages",
    text: "Where a work is out of copyright, we show it in full, in its original language beside an English version.",
  },
  {
    heading: "Follow the link",
    text: "Where it is still under copyright, we describe it and link to where you can read or listen to it.",
  },
];

export default function OnLovePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          On Love
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Love <span className="text-gradient">Manifesto</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-foreground">
          Love in every country
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
          <Image
            src={`${basePath}${ringPath}`}
            alt="The Love Manifesto emblem: ribbons of watercolour forming a ring"
            width={480}
            height={480}
            className="mx-auto h-auto w-full max-w-[320px] rounded-full"
          />
          <div className="max-w-2xl">
            <div className="prose">
              <p>
                A love poem, song or story from every country in the world, in
                the language it was written in and in English.
              </p>
              <p>
                Love Manifesto gathers writing about love from every country of
                the world: poems, songs, ballads and stories, from medieval
                Persian verse to modern pop songs. Love is one of the things
                every culture writes about, and reading these side by side shows
                how differently, and how alike, people have put it into words.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read the poems
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                See the map
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.heading}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-[family-name:var(--font-source-serif)] text-lg font-bold tracking-tight">
                {f.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-16 max-w-3xl space-y-4 leading-relaxed text-foreground/90">
          <p>
            <em>Manifesto for Love</em>, a book of 28 love poems from 28
            countries across six continents, is{" "}
            <Link
              href="/press"
              className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              coming soon from Visioning Press
            </Link>
            .
          </p>
          <p>
            This is a work in progress. Eventually, we hope to show many poems
            from every country, so if you have a love poem that you would like
            to share, please{" "}
            <Link
              href="/collaborate"
              className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              get in touch
            </Link>
            .
          </p>
          <p className="text-sm text-muted-foreground">
            English versions of poems not written in English are new
            translations made with AI assistance.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const amazonUrl =
  "https://www.amazon.co.uk/Faith-Conundrum-meaning-becomes-opportunity-ebook/dp/B0HMNZM327";
const coverPath = "/images/The_Faith_Conundrum_Kindle_Cover.jpg";
const loveCoverPath = "/images/Manifesto_for_Love_Cover.jpg";
const loveProjectUrl = "https://visioninglab.github.io/lovemanifesto/";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Visioning Press works with writers and thinkers who have new ideas to share and something distinctive to say about the world.",
  alternates: { canonical: "/press/" },
  openGraph: {
    title: "Visioning Press",
    description:
      "The Faith Conundrum by Dr Jessica Symons, and Manifesto for Love, a collection of 28 love poems from 28 countries.",
    url: "/press/",
    images: [{ url: coverPath, width: 1000, height: 1600 }],
  },
};

const bookJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "The Faith Conundrum",
    alternativeHeadline:
      "How the human search for meaning becomes an opportunity for control",
    author: { "@type": "Person", name: "Jessica Symons" },
    publisher: { "@type": "Organization", name: "Visioning Press" },
    image: `https://visioninglab.com${coverPath}`,
    url: "https://visioninglab.com/press/",
    workExample: {
      "@type": "Book",
      bookFormat: "https://schema.org/EBook",
      url: amazonUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Manifesto for Love",
    alternativeHeadline: "28 poems / 28 countries / six continents",
    genre: "Poetry",
    editor: { "@type": "Person", name: "Jessica Symons" },
    publisher: { "@type": "Organization", name: "Visioning Press" },
    image: `https://visioninglab.com${loveCoverPath}`,
    url: "https://visioninglab.com/press/",
  },
];

export default function PressPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
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
          <p className="border-b border-border pb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Now published
          </p>

          <div className="mt-8 grid gap-12 md:grid-cols-2">
            <article className="flex flex-col">
              <div className="flex justify-center rounded-md bg-muted px-8 py-10">
                <Image
                  src={`${basePath}${coverPath}`}
                  alt="Cover of The Faith Conundrum by Dr Jessica Symons"
                  width={1000}
                  height={1600}
                  className="h-auto w-full max-w-[220px] rounded-sm shadow-md"
                />
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-primary">
                Non-fiction
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight md:text-3xl">
                The Faith Conundrum
              </h2>
              <p className="mt-2 font-[family-name:var(--font-source-serif)] text-lg italic text-foreground">
                How the human search for meaning becomes an opportunity for
                control
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Dr Jessica Symons
              </p>
              <p className="mt-4 text-muted-foreground">
                An exploration of faith, meaning and power, drawing on
                anthropology, history and contemporary society.
              </p>

              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Kindle edition on Amazon
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <Link
                    href="/press/the-faith-conundrum/sources"
                    className="inline-block rounded-lg border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    Further reading
                  </Link>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  <a
                    href={`${basePath}/docs/The_Faith_Conundrum_poster_A4.pdf`}
                    className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                  >
                    Printable poster
                  </a>{" "}
                  (PDF, A4)
                </p>
              </div>
            </article>

            <article className="flex flex-col">
              <div className="flex justify-center rounded-md bg-muted px-8 py-10">
                <Image
                  src={`${basePath}${loveCoverPath}`}
                  alt="Cover of Manifesto for Love: 28 poems from 28 countries"
                  width={992}
                  height={1586}
                  className="h-auto w-full max-w-[220px] rounded-sm shadow-md"
                />
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-primary">
                Poetry &middot; Free collection
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight md:text-3xl">
                Manifesto for Love
              </h2>
              <p className="mt-2 font-[family-name:var(--font-source-serif)] text-lg italic text-foreground">
                28 poems / 28 countries / six continents
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Edited by Dr Jessica Symons &middot; A Visioning Lab project
              </p>
              <p className="mt-4 text-muted-foreground">
                Love poems from 28 countries across six continents, from Sappho
                to C&eacute;sar Vallejo, each in its original language beside
                an English translation, with a short note on its history. Part
                of a project gathering poems, songs and stories from all of the
                world&rsquo;s 195 countries.
              </p>

              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={loveProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Explore the project
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  A revised printable edition is in preparation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

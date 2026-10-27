import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
            Now published
          </p>

          <div className="grid gap-10 rounded-xl border border-border bg-card p-8 md:grid-cols-[minmax(0,260px)_1fr] md:p-10">
            <Image
              src={`${basePath}/images/The_Faith_Conundrum_Kindle_Cover.jpg`}
              alt="Cover of The Faith Conundrum by Dr Jessica Symons"
              width={1000}
              height={1600}
              className="mx-auto h-auto w-full max-w-[260px] rounded-md shadow-md"
            />
            <div>
              <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-bold italic tracking-tight md:text-3xl">
                The Faith Conundrum
              </h2>
              <p className="mt-2 font-[family-name:var(--font-source-serif)] text-lg text-foreground">
                How the human search for meaning becomes an opportunity for
                control
              </p>
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
                  <em>The Faith Conundrum</em> follows the development of
                  religious traditions through the ages and asks what happens when
                  we look at religion not simply in terms of what people believe,
                  but in terms of{" "}
                  <strong>what faith enables societies to do</strong>.
                </p>
                <p>
                  Written by Visioning Lab founder and anthropologist{" "}
                  <strong>Dr Jessica Symons</strong>,{" "}
                  <em>The Faith Conundrum</em> is published by Visioning Press
                  and available from Amazon.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.co.uk/Faith-Conundrum-meaning-becomes-opportunity-ebook/dp/B0HMNZM327"
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
                  Further reading, watching and sources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

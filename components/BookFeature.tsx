import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BookFeature() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Visioning Press
          </p>
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,160px)_1fr]">
            <Image
              src={`${basePath}/images/The_Faith_Conundrum_Kindle_Cover.jpg`}
              alt="Cover of The Faith Conundrum by Dr Jessica Symons"
              width={1000}
              height={1600}
              className="h-auto w-full max-w-[160px] rounded-md shadow-md"
            />
            <div>
              <h2 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold italic tracking-tight md:text-4xl">
                The Faith Conundrum
              </h2>
              <p className="mt-2 font-[family-name:var(--font-source-serif)] text-lg text-foreground">
                How the human search for meaning becomes an opportunity for
                control
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Dr Jessica Symons explores faith as one of humanity&rsquo;s
                most enduring technologies: a way of organising knowledge,
                values, relationships and collective life.
              </p>
              <Link
                href="/press"
                className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-glow"
              >
                About the book
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

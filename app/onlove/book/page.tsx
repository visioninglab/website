import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Passport from "@/components/onlovebook/Passport";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const coverPath = "/images/Eight_Billion_Ways_to_Love_cover.jpg";
const siteUrl = "https://visioninglab.github.io/lovemanifesto/";

export const metadata: Metadata = {
  title: "Eight Billion Ways to Love",
  description:
    "A journal in progress by Dr Jessica Symons: love poems from around the world, activities and a personal manifesto for love. Draft PDF, EPUB and companion activities.",
  alternates: { canonical: "/onlove/book/" },
  openGraph: {
    title: "Eight Billion Ways to Love",
    description:
      "A journal in progress by Dr Jessica Symons: love poems from around the world, activities and a personal manifesto for love.",
    url: "/onlove/book/",
    images: [{ url: coverPath, width: 640, height: 906 }],
  },
};

const docs = [
  {
    label: "The journal",
    detail: "PDF, A5 pages, 1 MB",
    file: "/docs/Eight_Billion_Ways_to_Love_draft_A5.pdf",
  },
  {
    label: "The journal as spreads",
    detail: "PDF, facing pages side by side as in print, 3.5 MB",
    file: "/docs/Eight_Billion_Ways_to_Love_draft_A5_spreads.pdf",
  },
  {
    label: "EPUB for Apple Books",
    detail: "Fixed-layout EPUB for iPad, 7.8 MB",
    file: "/docs/Eight_Billion_Ways_to_Love_draft.epub",
  },
  {
    label: "Companion activities",
    detail: "PDF, 23 further activities to print, 0.3 MB",
    file: "/docs/Eight_Billion_Ways_to_Love_companion_activities_A5.pdf",
  },
];

const sections = [
  "What is love?",
  "How do I love?",
  "How do I want to be loved?",
  "What am I prepared to give?",
  "My Manifesto for Love",
];

const explore = [
  { href: "/onlove/book/activities/", title: "Activities", text: "Twenty-three more activities. Draw a card, or choose by how much time there is." },
  { href: "/onlove/book/poems/", title: "Poems", text: "More poems from the collection. Turn a card over to see who wrote it." },
  { href: "/onlove/book/questionnaire/", title: "Questionnaire", text: "Ten questions about mind, body and soul, one card at a time." },
  { href: "/onlove/book/playlist/", title: "Playlist", text: "Songs that say what love is. Agree, disagree, and find my own verse." },
  { href: "/onlove/book/manifesto/", title: "My manifesto", text: "Write it line by line, seal it, and print it." },
];

const linkClass =
  "text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

export default function OnLoveBookPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Eight Billion <span className="text-gradient">Ways to Love</span>
        </h1>
        <p className="mt-3 text-lg font-medium text-foreground">
          A journal in progress
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 grid items-start gap-12 md:grid-cols-[minmax(0,300px)_1fr]">
          <Image
            src={`${basePath}${coverPath}`}
            alt="Cover of Eight Billion Ways to Love: the title above ribbons of watercolour forming a ring"
            width={640}
            height={906}
            className="mx-auto h-auto w-full max-w-[300px] rounded-lg shadow-sm"
          />
          <div className="max-w-2xl">
            <div className="prose">
              <p>
                <em>Eight Billion Ways to Love</em> by Dr Jessica Symons is a
                journal that pairs love poems from around the world with
                activities, and ends with a personal manifesto for love.
              </p>
              <p>
                Sixteen poems from the{" "}
                <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                  Love Manifesto collection
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                appear in their original language and in English. The
                activities start with images and ideas and move towards
                everyday practice. Each section ends by gathering one line, and
                the lines come together in the manifesto at the end.
              </p>
              <p>The journal has five sections:</p>
              <ol>
                {sections.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p>This is a working draft, shared for reading and comment.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="mt-20 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight md:text-3xl">
          Beyond the <span className="text-gradient">book</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A companion to play with alongside the journal. Everything written or chosen here stays in
          this browser.
        </p>
        <div className="mt-8">
          <Passport />
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((x) => (
            <li key={x.href}>
              <Link href={x.href} className="group block h-full rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <h3 className="font-[family-name:var(--font-source-serif)] text-lg font-bold group-hover:text-primary">{x.title} →</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="mt-20 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight md:text-3xl">
          Read the <span className="text-gradient">draft</span>
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {docs.map((d) => (
            <li
              key={d.file}
              className="rounded-xl border border-border bg-card p-6"
            >
              <a
                href={`${basePath}${d.file}`}
                className="font-[family-name:var(--font-source-serif)] text-lg font-bold tracking-tight text-primary hover:underline"
              >
                {d.label}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.detail}
              </p>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-16 max-w-3xl space-y-4 leading-relaxed text-foreground/90">
          <p>
            To comment on the draft, or to suggest a better translation of one
            of the poems, please{" "}
            <Link href="/collaborate" className={linkClass}>
              get in touch
            </Link>
            .
          </p>
          <p className="text-sm text-muted-foreground">
            English versions of poems not written in English are new
            translations made with AI assistance, except where the book credits
            another translator.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

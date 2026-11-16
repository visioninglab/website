import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Worksheet from "@/components/onlovebook/Worksheet";
import { book } from "@/lib/onlovebook/data";

export function generateStaticParams() {
  return book.activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = book.activities.find((x) => x.slug === slug);
  return {
    title: a ? `${a.title} — Eight Billion Ways to Love` : "Activity",
    alternates: { canonical: `/onlove/book/activities/${slug}/` },
  };
}

export default async function ActivityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = book.activities.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const a = book.activities[i];
  const prev = book.activities[(i - 1 + book.activities.length) % book.activities.length];
  const next = book.activities[(i + 1) % book.activities.length];

  return (
    <div className="mx-auto max-w-3xl px-6 pt-12 pb-16 md:pb-24">
      <Link href="/onlove/book/activities/" className="text-sm text-muted-foreground hover:text-primary print:hidden">
        ← All activities
      </Link>
      <p className="mt-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {a.time} · {a.where}
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">{a.title}</h1>
      <p className="mt-5 text-lg leading-relaxed">{a.explore}</p>
      <p className="mt-3 text-sm text-muted-foreground">
        <span className="mr-2 text-xs font-medium uppercase tracking-widest">Draws on</span>
        {a.drawsOn}
      </p>
      <ol className="mt-8 list-decimal space-y-2 pl-6 leading-relaxed marker:text-muted-foreground">
        {a.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <div className="mt-10">
        <Worksheet activity={a} />
      </div>
      <nav className="mt-16 flex justify-between gap-4 border-t border-border pt-6 text-sm print:hidden" aria-label="More activities">
        <Link href={`/onlove/book/activities/${prev.slug}/`} className="text-muted-foreground hover:text-primary">
          ← {prev.title}
        </Link>
        <Link href={`/onlove/book/activities/${next.slug}/`} className="text-right text-muted-foreground hover:text-primary">
          {next.title} →
        </Link>
      </nav>
    </div>
  );
}

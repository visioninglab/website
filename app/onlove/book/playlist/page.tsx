import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SongCards from "@/components/onlovebook/SongCards";
import { book } from "@/lib/onlovebook/data";

export const metadata: Metadata = {
  title: "Playlist — Eight Billion Ways to Love",
  alternates: { canonical: "/onlove/book/playlist/" },
};

export default function PlaylistPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pb-24">
      <FadeIn>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Love <span className="text-gradient">is a…</span>
        </h1>
        <div className="prose mt-6 max-w-2xl">
          <p>
            Songs make claims about love in their titles alone: a stranger, a battlefield, a drug,
            an open door. Here are the songs on the Manifesto for Love playlist.
          </p>
        </div>
        <ol className="mt-6 max-w-2xl list-decimal space-y-1.5 pl-6 text-sm leading-relaxed marker:text-muted-foreground">
          {book.playlist.songs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">A link to listen to the playlist will follow.</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="mt-16 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight">
          {book.playlist.intro}
        </h2>
        <div className="mt-8">
          <SongCards />
        </div>
      </FadeIn>
    </div>
  );
}

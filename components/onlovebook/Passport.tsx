"use client";

import { useState } from "react";
import LoveRing from "./LoveRing";
import { book, RIBBONS } from "@/lib/onlovebook/data";
import { DONE, MANIFESTO, QUIZ, SEEN, SONGS, forgetEverything, useStored } from "@/lib/onlovebook/store";

type Manifesto = { lines: string[]; name: string; sealed: boolean };

export default function Passport() {
  const [done] = useStored<string[]>(DONE, []);
  const [seen] = useStored<string[]>(SEEN, []);
  const [quiz] = useStored<(number | null)[]>(QUIZ, []);
  const [songs] = useStored<(number | null)[]>(SONGS, []);
  const [manifesto] = useStored<Manifesto>(MANIFESTO, { lines: [], name: "", sealed: false });
  const [asking, setAsking] = useState(false);

  const nQ = book.questionnaire.questions.length;
  const nS = book.playlist.statements.length;
  const parts = [
    { label: "Activities", value: done.length / book.activities.length, note: `${done.length} of ${book.activities.length} tried` },
    { label: "Poems", value: seen.length / book.poems.length, note: `${seen.length} of ${book.poems.length} turned over` },
    { label: "Questionnaire", value: quiz.filter((a) => a !== null && a !== undefined).length / nQ, note: `${quiz.filter((a) => a !== null && a !== undefined).length} of ${nQ} answered` },
    { label: "Playlist", value: songs.filter((a) => a !== null && a !== undefined).length / nS, note: `${songs.filter((a) => a !== null && a !== undefined).length} of ${nS} songs weighed` },
    { label: "My manifesto", value: manifesto.sealed ? 1 : manifesto.lines.filter(Boolean).length / book.manifesto.length, note: manifesto.sealed ? "sealed" : `${manifesto.lines.filter(Boolean).length} of ${book.manifesto.length} lines` },
  ];

  return (
    <div className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-[auto_1fr] md:p-8">
      <div className="mx-auto">
        <LoveRing values={parts.map((p) => p.value)} labels={parts.map((p) => p.label)} />
      </div>
      <div>
        <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight">
          My love passport
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Each ribbon fills a little as I explore. There is no score and no hurry: the ring is only
          a way of seeing where I have been. It lives in this browser and nowhere else.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {parts.map((p, i) => (
            <li key={p.label} className="flex items-center gap-3 text-sm">
              <span className="inline-block h-3 w-3 shrink-0 rounded-full" style={{ background: RIBBONS[i] }} />
              <span className="font-medium">{p.label}</span>
              <span className="text-muted-foreground">{p.note}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-sm">
          {asking ? (
            <span className="inline-flex flex-wrap items-center gap-3">
              <span>Forget everything written here, on this device?</span>
              <button
                type="button"
                onClick={() => {
                  forgetEverything();
                  setAsking(false);
                }}
                className="rounded-full border border-accent/50 px-3 py-1 text-accent hover:bg-accent/10"
              >
                Yes, forget it
              </button>
              <button type="button" onClick={() => setAsking(false)} className="text-muted-foreground underline">
                Keep it
              </button>
            </span>
          ) : (
            <button type="button" onClick={() => setAsking(true)} className="text-muted-foreground underline underline-offset-4 hover:text-foreground">
              Forget everything on this device
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { book, RIBBONS } from "@/lib/onlovebook/data";
import { SONGS, useStored } from "@/lib/onlovebook/store";

const SCALE = ["Yes", "Sort of", "Not sure", "Not really", "No"];

export default function SongCards() {
  const { statements } = book.playlist;
  const [choices, setChoices] = useStored<(number | null)[]>(SONGS, []);
  const answered = statements.map((_, i) => choices[i] ?? null);
  const set = (i: number, v: number) => {
    const next = [...answered];
    next[i] = v;
    setChoices(next);
  };

  // My love song: the titles I said yes (or sort of) to, as lines of a verse.
  const verse = statements.filter((_, i) => answered[i] !== null && (answered[i] as number) <= 1);
  const allDone = answered.every((a) => a !== null);

  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {statements.map((s, i) => (
          <li key={s} className="rounded-xl border border-border bg-card p-5">
            <p className="flex items-center gap-3 font-[family-name:var(--font-source-serif)] text-xl italic">
              <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: RIBBONS[i % 5] }} />
              {s}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5" role="group" aria-label={`Do I agree? ${s}`}>
              {SCALE.map((label, v) => (
                <motion.button
                  key={label}
                  type="button"
                  whileTap={{ scale: 0.92 }}
                  onClick={() => set(i, v)}
                  aria-pressed={answered[i] === v}
                  className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                    answered[i] === v ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-2xl border border-border p-8 text-center" style={{ background: `linear-gradient(135deg, ${RIBBONS[0]}1f, ${RIBBONS[2]}1f)` }}>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">My love song</p>
        {verse.length ? (
          <div className="mt-4 font-[family-name:var(--font-source-serif)] text-xl italic leading-loose">
            {verse.map((l) => (
              <motion.p key={l} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                {l}.
              </motion.p>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">The titles I agree with will gather here, as a verse of my own.</p>
        )}
        {allDone && <p className="mt-6 text-sm text-muted-foreground">Which line would I change? Which one surprised me?</p>}
      </div>
    </div>
  );
}

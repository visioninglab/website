"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { book, RIBBONS } from "@/lib/onlovebook/data";
import { SEEN, useStored } from "@/lib/onlovebook/store";

export default function PoemCards() {
  const groups = Array.from(new Set(book.poems.map((p) => p.group)));
  const [group, setGroup] = useState<string | null>(null);
  const [open, setOpen] = useState<string[]>([]);
  const [seen, setSeen] = useStored<string[]>(SEEN, []);

  const turn = (id: string) => {
    setOpen(open.includes(id) ? open.filter((x) => x !== id) : [...open, id]);
    if (!seen.includes(id)) setSeen([...seen, id]);
  };

  const findMe = () => {
    const pool = book.poems.filter((p) => !open.includes(p.id));
    const pick = (pool.length ? pool : book.poems)[Math.floor(Math.random() * (pool.length || book.poems.length))];
    setGroup(null);
    if (!open.includes(pick.id)) turn(pick.id);
    window.setTimeout(() => document.getElementById(`poem-${pick.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
  };

  const shown = book.poems.filter((p) => !group || p.group === group);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={findMe} className="mr-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
          Let a poem find me
        </button>
        <button
          type="button"
          onClick={() => setGroup(null)}
          aria-pressed={group === null}
          className={`rounded-full border px-3 py-1 text-sm ${group === null ? "border-primary bg-primary/10 text-primary" : "border-border"}`}
        >
          All
        </button>
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGroup(g)}
            aria-pressed={group === g}
            className={`rounded-full border px-3 py-1 text-sm ${group === g ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/40"}`}
          >
            {g}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => {
          const isOpen = open.includes(p.id);
          return (
            <li key={p.id} id={`poem-${p.id}`} className="[perspective:1200px]">
              <motion.div
                animate={{ rotateY: isOpen ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-80 [transform-style:preserve-3d]"
              >
                {/* Front: the first lines, unattributed */}
                <button
                  type="button"
                  onClick={() => turn(p.id)}
                  aria-label={`Turn over: ${p.title}`}
                  className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-border p-6 text-left [backface-visibility:hidden]"
                  style={{ background: `linear-gradient(160deg, ${RIBBONS[i % 5]}22, transparent 70%)` }}
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{p.group}</span>
                  <span className="font-[family-name:var(--font-source-serif)] text-lg italic leading-relaxed">
                    {p.firstLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                    <span className="block text-muted-foreground">…</span>
                  </span>
                  <span className="text-sm text-primary">Turn over to see who wrote it</span>
                </button>
                {/* Back: who, where, when, and the way to the whole poem */}
                <div className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl border border-border bg-card p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{p.country}</span>
                  <h3 className="mt-1 font-[family-name:var(--font-source-serif)] text-xl font-bold leading-snug">{p.title}</h3>
                  {p.original !== p.title && <p className="text-sm italic text-muted-foreground">{p.original}</p>}
                  <p className="mt-1 text-sm">
                    {p.poet}
                    {p.year ? `, ${p.year}` : ""}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                      Read the whole poem<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <button type="button" onClick={() => turn(p.id)} className="text-sm text-muted-foreground underline">
                      Turn back
                    </button>
                  </div>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { book, RIBBONS, timeBand } from "@/lib/onlovebook/data";
import { DONE, useStored } from "@/lib/onlovebook/store";

const bands = [
  { id: "all", label: "Any length" },
  { id: "quick", label: "A few minutes" },
  { id: "sitting", label: "One sitting" },
  { id: "days", label: "Over a few days" },
] as const;

type Band = (typeof bands)[number]["id"];

export default function ActivityDeck() {
  const [band, setBand] = useState<Band>("all");
  const [drawn, setDrawn] = useState<string | null>(null);
  const [done] = useStored<string[]>(DONE, []);

  const shown = book.activities.filter((a) => band === "all" || timeBand(a.time) === band);
  const card = book.activities.find((a) => a.slug === drawn);

  const draw = () => {
    const fresh = shown.filter((a) => !done.includes(a.key) && a.slug !== drawn);
    const pool = fresh.length ? fresh : shown.filter((a) => a.slug !== drawn);
    if (pool.length) setDrawn(pool[Math.floor(Math.random() * pool.length)].slug);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="How much time do I have?">
        <span className="mr-1 text-sm text-muted-foreground">How much time do I have?</span>
        {bands.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => setBand(b.id)}
            aria-pressed={band === b.id}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              band === b.id ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/40"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-primary/40 p-6 text-center">
        <button
          type="button"
          onClick={draw}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          {drawn ? "Draw another card" : "Draw a card for me"}
        </button>
        <AnimatePresence mode="wait">
          {card && (
            <motion.div
              key={card.slug}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="mx-auto mt-6 max-w-md rounded-xl border border-border bg-background p-6 text-left shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{card.time}</p>
              <h3 className="mt-1 font-[family-name:var(--font-source-serif)] text-xl font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{card.explore}</p>
              <Link href={`/onlove/book/activities/${card.slug}/`} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                Try this one →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((a, i) => {
          const isDone = done.includes(a.key);
          return (
            <li key={a.slug}>
              <Link
                href={`/onlove/book/activities/${a.slug}/`}
                className="group relative block h-full rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <span className="absolute left-0 top-5 h-8 w-1 rounded-r" style={{ background: RIBBONS[i % RIBBONS.length] }} />
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{a.time}</p>
                <h3 className="mt-1 font-[family-name:var(--font-source-serif)] text-lg font-bold leading-snug group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.where}</p>
                {isDone && (
                  <span className="absolute right-4 top-4 rotate-6 rounded-full border-2 border-primary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Tried
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

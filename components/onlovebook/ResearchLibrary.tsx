"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { research, type Study } from "@/lib/onlovebook/resources";
import { useStored } from "@/lib/onlovebook/store";

const SAVED = "research"; // ids of studies kept on my shelf
const PAGE = 24;
const YEARS = [2024, 2025, 2026];
type Format = "all" | "watch" | "read" | "shelf";

const chip = (on: boolean) =>
  `rounded-full border px-3 py-1 text-sm transition-colors ${
    on ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/40"
  }`;

const linkClass =
  "text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function ResearchLibrary() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<number | null>(null);
  const [format, setFormat] = useState<Format>("all");
  const [limit, setLimit] = useState(PAGE);
  const [found, setFound] = useState<string | null>(null);
  const [saved, setSaved] = useStored<string[]>(SAVED, []);

  const shown = useMemo(() => {
    const words = fold(query).split(/\s+/).filter(Boolean);
    return research.items.filter((s) => {
      if (year && s.year !== year) return false;
      if (format === "watch" && !s.video) return false;
      if (format === "read" && !s.writtenUrl) return false;
      if (format === "shelf" && !saved.includes(s.id)) return false;
      const hay = fold(`${s.title} ${s.authors} ${s.summary}`);
      return words.every((w) => hay.includes(w));
    });
  }, [query, year, format, saved]);

  const toggle = (id: string) => setSaved(saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id]);

  const findMe = () => {
    const pick = research.items[Math.floor(Math.random() * research.items.length)];
    setQuery("");
    setYear(null);
    setFormat("all");
    setFound(pick.id);
  };

  const picked = found ? research.items.find((s) => s.id === found) ?? null : null;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={findMe}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Let a study find me
        </button>
        <label className="relative min-w-[16rem] flex-1">
          <span className="sr-only">Search the research</span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(PAGE);
            }}
            placeholder="Search: metaphor, jealousy, Ukraine, parents…"
            className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter">
        <button type="button" aria-pressed={year === null} onClick={() => { setYear(null); setLimit(PAGE); }} className={chip(year === null)}>
          Every year
        </button>
        {YEARS.map((y) => (
          <button key={y} type="button" aria-pressed={year === y} onClick={() => { setYear(y); setLimit(PAGE); }} className={chip(year === y)}>
            {y}
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-border" aria-hidden />
        {(
          [
            ["all", "Everything"],
            ["watch", "Talks to watch"],
            ["read", "Things to read"],
            ["shelf", `My shelf${saved.length ? ` (${saved.length})` : ""}`],
          ] as [Format, string][]
        ).map(([f, label]) => (
          <button key={f} type="button" aria-pressed={format === f} onClick={() => { setFormat(f); setLimit(PAGE); }} className={chip(format === f)}>
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {picked && (
          <motion.div
            key={picked.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-8 rounded-2xl border border-primary/40 bg-primary/5 p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">This one found you</p>
              <button type="button" onClick={() => setFound(null)} className="text-sm text-muted-foreground underline underline-offset-4">
                Close
              </button>
            </div>
            <StudyBody s={picked} saved={saved.includes(picked.id)} onToggle={() => toggle(picked.id)} large />
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
        {shown.length === research.items.length
          ? `All ${shown.length} talks and studies`
          : format === "shelf" && !saved.length
            ? "Nothing on my shelf yet. Tap the heart on any study to keep it here."
            : `${shown.length} of ${research.items.length}`}
      </p>

      <ul className="mt-4 grid gap-5 md:grid-cols-2">
        {shown.slice(0, limit).map((s) => (
          <li key={s.id} className="rounded-xl border border-border bg-card p-5">
            <StudyBody s={s} saved={saved.includes(s.id)} onToggle={() => toggle(s.id)} />
          </li>
        ))}
      </ul>

      {shown.length > limit && (
        <button
          type="button"
          onClick={() => setLimit(limit + PAGE)}
          className="mt-8 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
        >
          Show more ({shown.length - limit} left)
        </button>
      )}
    </div>
  );
}

function StudyBody({ s, saved, onToggle, large = false }: { s: Study; saved: boolean; onToggle: () => void; large?: boolean }) {
  const fromAbstract = /abstract|programme|overview/i.test(s.basis);
  return (
    <article className={large ? "mt-3" : ""}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {[s.year, s.video ? "Talk" : "Study"].filter(Boolean).join(" · ")}
            {s.authors === "Jessica Symons" && <span className="ml-2 normal-case tracking-normal text-primary">by the author of this book</span>}
          </p>
          <h3
            className={`mt-1.5 font-[family-name:var(--font-source-serif)] font-bold leading-snug tracking-tight ${
              large ? "text-2xl" : "text-lg"
            }`}
          >
            {s.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{s.authors.replace(/; /g, ", ")}</p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={saved}
          aria-label={saved ? `Take “${s.title}” off my shelf` : `Keep “${s.title}” on my shelf`}
          className="shrink-0 rounded-full p-1.5 text-primary transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
            <path
              d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"
              fill={saved ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className={`mt-3 leading-relaxed ${large ? "text-base" : "text-[0.95rem]"}`}>{s.summary}</p>
      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {s.video && (
          <a href={s.video} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {s.start ? `Watch from ${s.start}` : "Watch the talk"}
            <span className="sr-only"> (YouTube, opens in a new tab)</span>
          </a>
        )}
        {s.writtenUrl && (
          <a href={s.writtenUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {s.written && /\d{4}/.test(s.written) ? `Read: ${s.written}` : "Read the paper"}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </p>
      {fromAbstract && <p className="mt-2 text-xs text-muted-foreground">Summary from the {s.basis.toLowerCase()}.</p>}
    </article>
  );
}

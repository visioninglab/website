"use client";

import { motion } from "framer-motion";
import { book, RIBBONS } from "@/lib/onlovebook/data";
import { MANIFESTO, useStored } from "@/lib/onlovebook/store";

type Manifesto = { lines: string[]; name: string; sealed: boolean; date?: string };

const box =
  "mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-[15px] leading-relaxed outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15";

/** The ring that draws itself when the manifesto is sealed. */
function Seal({ sealed }: { sealed: boolean }) {
  return (
    <svg viewBox="0 0 120 120" width={84} height={84} aria-hidden="true">
      {RIBBONS.map((c, i) => (
        <motion.circle
          key={c}
          cx={60 + (i - 2) * 1.6}
          cy={60 + ((i % 2) * 2 - 1) * 1.4}
          r={44 - i * 1.5}
          fill="none"
          stroke={c}
          strokeWidth={5}
          strokeOpacity={0.7}
          strokeLinecap="round"
          initial={false}
          animate={{ pathLength: sealed ? 1 : 0.08, rotate: sealed ? 0 : -40 }}
          transition={{ duration: 1.4, delay: sealed ? i * 0.12 : 0, ease: "easeInOut" }}
          style={{ originX: "60px", originY: "60px" }}
        />
      ))}
    </svg>
  );
}

export default function ManifestoBuilder() {
  const starters = book.manifesto;
  const [m, setM] = useStored<Manifesto>(MANIFESTO, { lines: [], name: "", sealed: false });
  const lines = starters.map((_, i) => m.lines[i] ?? "");
  const setLine = (i: number, v: string) => {
    const next = [...lines];
    next[i] = v;
    setM({ ...m, lines: next, sealed: false });
  };
  const filled = lines.filter((l) => l.trim()).length;

  const seal = () =>
    setM({ ...m, lines, sealed: true, date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) });

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,420px)]">
      <div className="space-y-6 print:hidden">
        <div className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed">
          <p className="font-medium">Lines gathered along the way</p>
          <p className="mt-1 text-muted-foreground">
            In the journal, each section ends with one line to carry forward. Those lines are good
            places to start:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted-foreground">
            {book.gathering.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ol>
        </div>
        {starters.map((s, i) => (
          <label key={s} className="block">
            <span className="font-[family-name:var(--font-source-serif)] text-lg italic">{s}</span>
            <textarea rows={3} value={lines[i]} onChange={(e) => setLine(i, e.target.value)} className={box} />
          </label>
        ))}
        <label className="block">
          <span className="font-[family-name:var(--font-source-serif)] text-lg italic">Signed</span>
          <input value={m.name} onChange={(e) => setM({ ...m, lines, name: e.target.value, sealed: false })} className={box} />
        </label>
        <p className="text-xs text-muted-foreground">What I write here stays in this browser.</p>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <motion.article
          id="manifesto-card"
          layout
          className="rounded-2xl border border-border bg-background p-8 shadow-sm"
          style={{ backgroundImage: `radial-gradient(circle at 100% 0%, ${RIBBONS[0]}22, transparent 45%), radial-gradient(circle at 0% 100%, ${RIBBONS[2]}22, transparent 45%)` }}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight">My Manifesto for Love</h2>
            <Seal sealed={m.sealed} />
          </div>
          <div className="mt-4 space-y-4 font-[family-name:var(--font-source-serif)] leading-relaxed">
            {starters.map((s, i) =>
              lines[i].trim() ? (
                <p key={s}>
                  <span className="italic text-muted-foreground">{s.replace(/…$/, "")}</span> {lines[i]}
                </p>
              ) : (
                <p key={s} className="italic text-muted-foreground/60">
                  {s}
                </p>
              ),
            )}
          </div>
          <div className="mt-8 flex items-end justify-between border-t border-border pt-4 text-sm">
            <span>{m.name || <span className="text-muted-foreground">Signed</span>}</span>
            <span className="text-muted-foreground">{m.sealed ? m.date : "Date"}</span>
          </div>
        </motion.article>

        <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
          <button
            type="button"
            onClick={seal}
            disabled={filled === 0}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            {m.sealed ? "Sealed" : "Seal my manifesto"}
          </button>
          <button type="button" onClick={() => window.print()} className="rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/10">
            Print it
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground print:hidden">
          A manifesto can be rewritten as often as needed. Changing a line breaks the seal, ready
          for the next draft.
        </p>
      </div>

      {/* Print only the card. */}
      <style>{`@media print { body * { visibility: hidden; } #manifesto-card, #manifesto-card * { visibility: visible; } #manifesto-card { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none; } }`}</style>
    </div>
  );
}

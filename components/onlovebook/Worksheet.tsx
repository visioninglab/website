"use client";

import { motion } from "framer-motion";
import type { Activity, Field } from "@/lib/onlovebook/data";
import { DONE, useStored } from "@/lib/onlovebook/store";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const box =
  "mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-[15px] leading-relaxed outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/15";

function Answer({ field, value, onChange }: { field: Field; value: string; onChange: (v: string) => void }) {
  if (field.type === "paper") return null;
  if (field.type === "scale") {
    return (
      <div className="rounded-lg border border-border bg-card p-4">
        <p className="font-[family-name:var(--font-source-serif)] italic">{field.label}</p>
        <input
          type="range"
          min={0}
          max={10}
          value={value === "" ? 5 : Number(value)}
          onChange={(e) => onChange(e.target.value)}
          aria-label={`${field.label}: ${field.left} to ${field.right}`}
          className="mt-3 w-full accent-[var(--primary)]"
        />
        <div className="flex justify-between text-xs uppercase tracking-wider text-muted-foreground">
          <span>{field.left}</span>
          <span>{field.right}</span>
        </div>
      </div>
    );
  }
  if (field.type === "number") {
    return (
      <label className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-4 py-3">
        <span className="font-[family-name:var(--font-source-serif)] italic">{field.label}</span>
        <input
          type="number"
          min={field.min}
          max={field.max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          title={field.hint}
          className="w-16 rounded-md border border-border bg-background px-2 py-1 text-center"
        />
      </label>
    );
  }
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-source-serif)] italic">{field.label}</span>
      {field.sub && <span className="ml-2 text-sm text-muted-foreground">{field.sub}</span>}
      <textarea rows={field.rows} value={value} onChange={(e) => onChange(e.target.value)} className={box} />
    </label>
  );
}

export default function Worksheet({ activity }: { activity: Activity }) {
  const [answers, setAnswers] = useStored<Record<string, string>>(`answers:${activity.key}`, {});
  const [done, setDone] = useStored<string[]>(DONE, []);
  const isDone = done.includes(activity.key);
  const set = (id: string, v: string) => setAnswers({ ...answers, [id]: v });

  const paper = activity.fields.some((f) => f.type === "paper");
  const hints = activity.fields.find((f) => f.type === "number");

  return (
    <div className="space-y-10">
      {paper && (
        <div className="rounded-xl border border-lavender/50 bg-lavender/10 p-5 text-sm leading-relaxed">
          Part of this one is drawn rather than written, so it works best on paper.{" "}
          <a href={`${basePath}${activity.pdf}`} className="font-medium text-primary underline underline-offset-4">
            Print the worksheet
          </a>{" "}
          and come back here for the reflections.
        </div>
      )}

      {activity.fields.some((f) => f.type !== "paper") && (
        <section aria-label="Worksheet" className="space-y-5">
          {hints && hints.type === "number" && <p className="text-sm text-muted-foreground">{hints.hint}</p>}
          {activity.fields.map((f, i) => (
            <Answer key={i} field={f} value={answers[`f${i}`] ?? ""} onChange={(v) => set(`f${i}`, v)} />
          ))}
        </section>
      )}

      <section aria-label="Reflection" className="space-y-5">
        {activity.prompts.map((p, i) => (
          <Answer key={p} field={{ type: "text", label: p, sub: "", rows: 3 }} value={answers[`p${i}`] ?? ""} onChange={(v) => set(`p${i}`, v)} />
        ))}
      </section>

      <section aria-label="Looking back" className="rounded-xl border border-border bg-card p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Looking back</p>
        <Answer field={{ type: "text", label: activity.emerges, sub: "", rows: 4 }} value={answers.emerges ?? ""} onChange={(v) => set("emerges", v)} />
      </section>

      {activity.variation && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">{activity.variation[0]}.</strong> {activity.variation[1]}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 print:hidden">
        <motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          onClick={() => setDone(isDone ? done.filter((k) => k !== activity.key) : [...done, activity.key])}
          className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
            isDone ? "border-2 border-primary text-primary" : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {isDone ? "✓ Stamped in my passport" : "Stamp my passport"}
        </motion.button>
        <a href={`${basePath}${activity.pdf}`} className="text-sm text-primary underline underline-offset-4">
          Printable worksheet (PDF)
        </a>
        <span className="text-xs text-muted-foreground">What I write here stays in this browser.</span>
      </div>
    </div>
  );
}

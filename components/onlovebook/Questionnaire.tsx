"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { book, RIBBONS } from "@/lib/onlovebook/data";
import { QUIZ, useStored } from "@/lib/onlovebook/store";

// Each question's three options lean towards mind, body and soul, in that order.
const LEANS = [
  { name: "Mind", colour: RIBBONS[2] },
  { name: "Body", colour: RIBBONS[0] },
  { name: "Soul", colour: RIBBONS[3] },
];

export default function Questionnaire() {
  const qs = book.questionnaire.questions;
  const [answers, setAnswers] = useStored<(number | null)[]>(QUIZ, []);
  const [step, setStep] = useState<number | null>(null);

  const answered = qs.map((_, i) => answers[i] ?? null);
  const complete = answered.every((a) => a !== null);
  const choose = (q: number, o: number) => {
    const next = [...answered];
    next[q] = o;
    setAnswers(next);
    window.setTimeout(() => setStep(q + 1 < qs.length ? q + 1 : qs.length), 320);
  };

  if (step === null) {
    return (
      <div className="max-w-2xl">
        <div className="prose">
          {book.questionnaire.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setStep(complete ? qs.length : Math.max(0, answered.findIndex((a) => a === null)))}
          className="mt-8 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          {complete ? "See my mix again" : answered.some((a) => a !== null) ? "Carry on" : "Begin"}
        </button>
      </div>
    );
  }

  if (step >= qs.length) {
    const counts = [0, 1, 2].map((o) => answered.filter((a) => a === o).length);
    const total = counts.reduce((x, y) => x + y, 0) || 1;
    return (
      <div className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight">My mix today</h2>
        <p className="mt-2 text-muted-foreground">Not a type and not a verdict: a blend, on one day, that may look different next month.</p>
        <div className="mt-6 flex h-6 w-full overflow-hidden rounded-full" role="img" aria-label={LEANS.map((l, i) => `${l.name} ${counts[i]}`).join(", ")}>
          {counts.map((c, i) => (
            <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${(c / total) * 100}%` }} transition={{ duration: 1, delay: 0.2 * i }} style={{ background: LEANS[i].colour }} />
          ))}
        </div>
        <ul className="mt-3 flex gap-6 text-sm">
          {LEANS.map((l) => (
            <li key={l.name} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: l.colour }} />
              {l.name}
            </li>
          ))}
        </ul>
        <p className="mt-8 font-[family-name:var(--font-source-serif)] text-lg italic">{book.questionnaire.closing}</p>
        <details className="mt-8 rounded-xl border border-border bg-card p-5">
          <summary className="cursor-pointer text-sm font-medium">My answers</summary>
          <ol className="mt-4 space-y-3 text-sm">
            {qs.map((q, i) => (
              <li key={q.question}>
                <span className="text-muted-foreground">{q.question}</span>
                <br />
                {answered[i] !== null && q.options[answered[i] as number]}
              </li>
            ))}
          </ol>
        </details>
        <button type="button" onClick={() => { setAnswers([]); setStep(0); }} className="mt-6 text-sm text-primary underline underline-offset-4">
          Begin again
        </button>
      </div>
    );
  }

  const q = qs[step];
  return (
    <div className="max-w-2xl">
      <div className="flex gap-1.5" aria-label={`Question ${step + 1} of ${qs.length}`}>
        {qs.map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-primary" : i === step ? "bg-primary/50" : "bg-border"}`} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
          <p className="mt-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {step + 1} of {qs.length}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-source-serif)] text-2xl font-bold leading-snug tracking-tight">{q.question}</h2>
          <div className="mt-6 grid gap-3">
            {q.options.map((o, i) => (
              <button
                key={o}
                type="button"
                onClick={() => choose(step, i)}
                className={`rounded-xl border p-4 text-left leading-relaxed transition-all hover:-translate-y-0.5 hover:border-primary/50 ${
                  answered[step] === i ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex justify-between text-sm">
        <button type="button" onClick={() => setStep(step === 0 ? null : step - 1)} className="text-muted-foreground underline underline-offset-4">
          Back
        </button>
        {answered[step] !== null && (
          <button type="button" onClick={() => setStep(step + 1)} className="text-primary underline underline-offset-4">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

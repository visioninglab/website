"use client";

import { useState, type FormEvent } from "react";

const categories = [
  "Research",
  "Speaking",
  "Commissions",
  "Exhibitions",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to Formspree or Resend serverless function
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center rounded-xl border border-border bg-card p-12">
        <div className="text-center">
          <p className="text-lg font-medium">Thank you</p>
          <p className="mt-2 text-sm text-muted-foreground">
            We will be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}

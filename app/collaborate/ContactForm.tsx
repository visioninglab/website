"use client";

import { useState, type FormEvent } from "react";

const categories = ["Research", "Speaking", "Commissions", "Exhibitions", "Other"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to Formspree or Resend serverless function
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center rounded border border-neutral-200 p-12">
        <div className="text-center">
          <p className="text-lg font-medium">Thank you</p>
          <p className="mt-2 text-sm text-neutral-500">
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
          className="mt-1 block w-full border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900"
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
          className="mt-1 block w-full border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="mt-1 block w-full border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900"
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
          className="mt-1 block w-full border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center border border-neutral-900 bg-neutral-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-neutral-900"
      >
        Send message
      </button>
    </form>
  );
}

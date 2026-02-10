"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Thinking", href: "/thinking" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Collaborate", href: "/collaborate" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Visioning Lab
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 md:hidden">
          <div className="mx-auto max-w-5xl space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm text-neutral-600 hover:text-neutral-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

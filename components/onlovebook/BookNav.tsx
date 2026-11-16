"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/onlove/book/", label: "The book" },
  { href: "/onlove/book/activities/", label: "Activities" },
  { href: "/onlove/book/poems/", label: "Poems" },
  { href: "/onlove/book/questionnaire/", label: "Questionnaire" },
  { href: "/onlove/book/playlist/", label: "Playlist" },
  { href: "/onlove/book/manifesto/", label: "My manifesto" },
];

export default function BookNav() {
  const path = usePathname() || "";
  const here = (href: string) =>
    href === "/onlove/book/"
      ? path.replace(/\/$/, "") === "/onlove/book"
      : path.startsWith(href.replace(/\/$/, ""));

  return (
    <nav aria-label="Eight Billion Ways to Love" className="print:hidden">
      <ul className="flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              aria-current={here(it.href) ? "page" : undefined}
              className={`inline-block rounded-full border px-4 py-1.5 text-sm transition-colors ${
                here(it.href)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/80 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import type { Metadata } from "next";
import BookNav from "@/components/onlovebook/BookNav";

// The companion site for Eight Billion Ways to Love is hidden for now: no links to it from
// the rest of the site, not in the sitemap, and every page asks search engines not to index it.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-28">
        <BookNav />
      </div>
      {children}
    </>
  );
}

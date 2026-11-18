import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import Unfolding from "@/components/onlovebook/Unfolding";

const display = Newsreader({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--uf-display" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--uf-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--uf-mono" });

export const metadata: Metadata = {
  title: "The Quiet Maiden, unfolding — Eight Billion Ways to Love",
  description: "A three-thousand-year-old Chinese love poem, one character at a time.",
  alternates: { canonical: "/onlove/book/poems/the-quiet-maiden/" },
};

export default function QuietMaidenPage() {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <Unfolding />
    </div>
  );
}

// Companion material for Eight Billion Ways to Love (visioninglab.com/onlove/book/).
// data.json is generated from the book's sources by export_web.py in the lovemanifesto repo.
import raw from "./data.json";

export type Field =
  | { type: "text"; label: string; sub: string; rows: number }
  | { type: "scale"; label: string; left: string; right: string }
  | { type: "number"; label: string; min: number; max: number; hint: string }
  | { type: "paper"; label: string };

export type Activity = {
  slug: string;
  key: string;
  title: string;
  where: string;
  time: string;
  explore: string;
  drawsOn: string;
  steps: string[];
  fields: Field[];
  prompts: string[];
  emerges: string;
  variation: [string, string] | null;
  pdf: string;
};

export type Poem = {
  id: string;
  title: string;
  original: string;
  poet: string;
  country: string;
  year: string;
  note: string;
  group: string;
  firstLines: string[];
  url: string;
};

export type BookData = {
  activities: Activity[];
  poems: Poem[];
  questionnaire: {
    intro: string[];
    questions: { question: string; options: string[] }[];
    closing: string;
  };
  playlist: { songs: string[]; intro: string; statements: string[] };
  manifesto: string[];
  gathering: string[];
};

export const book = raw as unknown as BookData;

/** Rough length of an activity, for the "how much time do I have?" filter. */
export function timeBand(time: string): "quick" | "sitting" | "days" {
  const t = time.toLowerCase();
  if (t.includes("day") || t.includes("week")) return "days";
  const m = t.match(/(\d+)\s*min/);
  if (m && Number(m[1]) <= 10) return "quick";
  return "sitting";
}

/** The watercolour ring's colours, from the book cover. */
export const RIBBONS = ["#d98c8c", "#e9a46b", "#a98dc2", "#2f6f6c", "#7a1f2b"];

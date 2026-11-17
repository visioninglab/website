// Love research for the companion site. resources.json is generated from the Love Studies
// research catalogue (xlsx) by export_resources.py in the lovemanifesto repo.
import raw from "./resources.json";

export type Study = {
  id: string;
  title: string;
  authors: string;
  summary: string;
  basis: string;
  video: string | null;
  start: string | null;
  written: string | null;
  writtenUrl: string | null;
  group: string;
  year: number | null;
};

type SourceNote = { name: string; details: string; url: string | null };

const data = raw as { items: Study[]; sources: SourceNote[] };
const link = (name: string) => data.sources.find((s) => s.name === name)?.url ?? null;

// The catalogue's own scope notes describe the spreadsheet; these say the same places for readers.
const sources: SourceNote[] = [
  {
    name: "Institute on Love Studies",
    details: "The home of the research: conferences, an advisory board and a network for researchers and practitioners.",
    url: link("Website research"),
  },
  {
    name: "Talks on YouTube",
    details: "Every recorded conference talk on the Institute's channel.",
    url: link("Scope"),
  },
  {
    name: "The Diversity of Love",
    details: "The Institute's open-access journal, with articles and conference proceedings on love and relationships.",
    url: link("The Diversity of Love Journal"),
  },
  {
    name: "2024 abstract book",
    details: "The first conference. The page number on each 2024 entry finds it in the PDF.",
    url: link("First conference"),
  },
  {
    name: "2025 conference",
    details: "The second conference, with its proceedings grouped by theme.",
    url: link("Second conference"),
  },
  {
    name: "2026 proceedings",
    details: "The third conference, with individual abstracts and some videos.",
    url: link("Third conference"),
  },
  {
    name: "2027 conference",
    details: "The fourth conference, online, 5 to 7 March 2027.",
    url: link("2027 conference"),
  },
  {
    name: "Resources for love researchers",
    details: "Writing guidance, and a way to sign up for updates.",
    url: link("Researcher network"),
  },
  {
    name: "Advisory board",
    details: "The researchers who advise the Institute, and where they work.",
    url: link("Advisory board"),
  },
];

export const research = { items: data.items, sources };

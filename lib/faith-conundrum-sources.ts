// Further Reading, Watching and Sources for The Faith Conundrum.
// Entries must be copied from the manuscript's own section, in the book's
// order, without adding references or rewording the author's descriptions.

export interface SourceEntry {
  /** Title as given in the book; used as the link text. */
  title: string;
  /** Author, speaker or institution, as attributed in the book. */
  attribution?: string;
  /** The author's description or note, as given in the book. */
  description?: string;
  /** Verified URL. Omit for print-only sources. */
  url?: string;
}

export interface SourceSection {
  heading: "Further Reading" | "Watching" | "Sources";
  entries: SourceEntry[];
}

export const faithConundrumSources: SourceSection[] = [
  { heading: "Further Reading", entries: [] },
  { heading: "Watching", entries: [] },
  { heading: "Sources", entries: [] },
];

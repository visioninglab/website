import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  introduction,
  noteOnSources,
  themes,
  works,
  type Block,
  type OriginalSource,
  type Recording,
  type Work,
} from "@/lib/faith-conundrum-sources";

export const metadata: Metadata = {
  title: "The Faith Conundrum: Further Reading, Watching and Sources",
  description:
    "Further reading, watching and sources for The Faith Conundrum by Dr Jessica Symons.",
};

const linkClass =
  "text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

export default function FaithConundrumSourcesPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <Link
        href="/press"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Back to Visioning Press
      </Link>

      <header className="mt-8 max-w-3xl">
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
          <em>The Faith Conundrum</em>: Further Reading, Watching and Sources
        </h1>
        <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
          {introduction.map((p) => (
            <p key={p}>{withBookTitle(p)}</p>
          ))}
          <p className="text-sm text-muted-foreground">
            Links have been added for this website and are not part of the
            printed book. Book links go to the publisher where available, or
            otherwise to the book&rsquo;s record in Open Library.
          </p>
        </div>
      </header>

      <nav
        aria-labelledby="contents"
        className="mt-12 max-w-3xl rounded-xl border border-border bg-card p-6 md:p-8"
      >
        <h2
          id="contents"
          className="text-sm font-medium uppercase tracking-widest text-primary"
        >
          Contents
        </h2>
        <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
          {themes.map((theme) => (
            <li key={theme.heading}>
              <a
                href={`#${slugify(theme.heading)}`}
                className="text-foreground/90 transition-colors hover:text-primary"
              >
                {theme.heading}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#a-note-on-sources"
              className="text-foreground/90 transition-colors hover:text-primary"
            >
              A Note on Sources
            </a>
          </li>
        </ol>
      </nav>

      <div className="mt-8 max-w-3xl">
        {themes.map((theme) => (
          <div key={theme.heading}>
            {theme.part && (
              <p className="mt-20 font-[family-name:var(--font-source-serif)] text-xl italic text-muted-foreground">
                {theme.part}
              </p>
            )}
            <section
              aria-labelledby={slugify(theme.heading)}
              className="mt-12 scroll-mt-24"
            >
              <h2
                id={slugify(theme.heading)}
                className="scroll-mt-24 border-b border-border pb-3 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight"
              >
                {theme.heading}
              </h2>
              <div className="mt-6 space-y-6">
                {theme.blocks.map((block, i) => (
                  <ThemeBlock key={i} block={block} />
                ))}
              </div>
            </section>
          </div>
        ))}

        <section aria-labelledby="a-note-on-sources" className="mt-20">
          <h2
            id="a-note-on-sources"
            className="scroll-mt-24 border-b border-border pb-3 font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight"
          >
            A Note on Sources
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
            {noteOnSources.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function ThemeBlock({ block }: { block: Block }) {
  if ("note" in block) {
    return <p className="leading-relaxed text-foreground/90">{block.note}</p>;
  }

  if ("watch" in block) {
    const { name, url, site, description, recordings } = block.watch;
    return (
      <div>
        <BlockLabel>Watch</BlockLabel>
        <p className="leading-relaxed">
          <strong className="font-semibold">
            {url ? <ExternalLink href={url}>{name}</ExternalLink> : name}
          </strong>
          {site && (
            <span className="text-sm text-muted-foreground"> ({site})</span>
          )}{" "}
          &mdash; {description}
        </p>
        {recordings && (
          <div className="mt-3 border-l-2 border-primary/30 pl-4 text-sm">
            <p className="text-muted-foreground">
              Suggested recording, added for this website:
            </p>
            <ul className="mt-1 space-y-1">
              {recordings.map((r) => (
                <li key={r.url}>
                  <RecordingLink recording={r} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <BlockLabel>{block.label}</BlockLabel>
      <ul className="space-y-3">
        {"works" in block
          ? block.works.map((id) => (
              <li key={id} className="leading-relaxed">
                <Citation work={works[id]} />
              </li>
            ))
          : block.sources.map((s) => (
              <li key={s.title} className="leading-relaxed">
                <SourceLine source={s} />
              </li>
            ))}
      </ul>
    </div>
  );
}

function BlockLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">
      {children}
    </h3>
  );
}

function Citation({ work }: { work: Work }) {
  const quoted = Boolean(work.inBook || work.journal);
  const titleText = quoted ? <>&lsquo;{work.title}&rsquo;</> : <em>{work.title}</em>;
  const title = work.url ? (
    <ExternalLink href={work.url}>{titleText}</ExternalLink>
  ) : (
    titleText
  );

  return (
    <>
      {work.authors}
      {work.year && ` (${work.year})`}, {title}
      {work.inBook && (
        <>
          , in {work.inEditors && `${work.inEditors}, `}
          <em>{work.inBook}</em>
        </>
      )}
      {work.journal && (
        <>
          , <em>{work.journal}</em>
        </>
      )}
      {work.journal ? ", " : !quoted && work.title.endsWith(".") ? " " : ". "}
      {work.edition && `${work.edition}. `}
      {work.publisher && `${work.publisher}.`}
      {work.otherEdition && (
        <span className="block text-sm text-muted-foreground">
          Other edition: {work.otherEdition}.
        </span>
      )}
    </>
  );
}

function SourceLine({ source }: { source: OriginalSource }) {
  return (
    <>
      {source.prefix}
      {source.url ? (
        <ExternalLink href={source.url}>{source.title}</ExternalLink>
      ) : (
        source.title
      )}
      {source.suffix}
      {source.urlNote && (
        <span className="text-sm text-muted-foreground">
          {" "}
          ({source.urlNote})
        </span>
      )}
    </>
  );
}

function RecordingLink({ recording }: { recording: Recording }) {
  return (
    <>
      <ExternalLink href={recording.url}>{recording.title}</ExternalLink>
      <span className="text-muted-foreground">, {recording.host}</span>
    </>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function withBookTitle(text: string) {
  const title = "The Faith Conundrum";
  const parts = text.split(title);
  return parts.map((part, i) => (
    <span key={i}>
      {i > 0 && <em>{title}</em>}
      {part}
    </span>
  ));
}

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

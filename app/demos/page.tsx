import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Demos",
  description:
    "An index of Visioning Lab prototypes hosted on GitHub — tools, research showcases, and immersive experiences.",
  robots: { index: false, follow: false },
};

type Demo = {
  name: string;
  url: string;
  repo: string;
  description: string;
};

const groups: { title: string; blurb: string; demos: Demo[] }[] = [
  {
    title: "Tools & frameworks",
    blurb:
      "Working tools that turn a method into something you can click through.",
    demos: [
      {
        name: "Systems Development Tool",
        url: "https://visioninglab.github.io/systdev/",
        repo: "systdev",
        description:
          "Visioning Lab's systems development framework — Define, Structure, Insight, Action — as an interactive walkthrough.",
      },
      {
        name: "Systems Thinking Competency Explorer",
        url: "https://visioninglab.github.io/systemsthinking/",
        repo: "systemsthinking",
        description:
          "An explorer for systems thinking competencies in the built environment, mapping skills against practice.",
      },
      {
        name: "Water Decisions",
        url: "https://visioninglab.github.io/waterdecisions/",
        repo: "waterdecisions",
        description:
          "Decision support tools for sustainable water management, exploring how choices propagate through a catchment.",
      },
      {
        name: "Feedback System",
        url: "https://visioninglab.github.io/feedbacksystem/demo/index.html",
        repo: "feedbacksystem",
        description:
          "A personalised psychology feedback newsletter, generated per reader — interactive demo.",
      },
    ],
  },
  {
    title: "Research & archives",
    blurb:
      "Prototypes that put a body of source material into a form you can search, read and question.",
    demos: [
      {
        name: "Peel Park Diaries",
        url: "https://visioninglab.github.io/peelparkdiaries/",
        repo: "peelparkdiaries",
        description:
          "AI transcription and analysis of Salford's Peel Park gardener and Parks Superintendent report books.",
      },
      {
        name: "Manchester History",
        url: "https://visioninglab.github.io/manchesterhistory/",
        repo: "manchesterhistory",
        description:
          "A Victorian Manchester natural-history workshop database, restructured as a browsable, editable network.",
      },
      {
        name: "DIR Wiki",
        url: "https://visioninglab.github.io/DIRwiki/",
        repo: "DIRwiki",
        description:
          "A case study wiki and reference resource for studying resilient infrastructure design.",
      },
      {
        name: "Legal AI",
        url: "https://visioninglab.github.io/legalai/",
        repo: "legalai",
        description:
          "Exploring AI applications in legal research and practice, and where the sector's judgement still has to sit.",
      },
    ],
  },
  {
    title: "Immersive & exhibitions",
    blurb:
      "Public-facing experiences — augmented reality, touring exhibitions and the things that travel with them.",
    demos: [
      {
        name: "PopupView v6",
        url: "https://visioninglab.github.io/popupviewv6/",
        repo: "popupviewv6",
        description:
          "The latest build of PopupView, the lab's WebAR platform for interactive popup exhibition experiences.",
      },
      {
        name: "Giant Insect World",
        url: "http://giantinsectworld.com/",
        repo: "giant-insect-world",
        description:
          "The touring exhibition site for Giant Insect World, the lab's large-scale immersive insect experience.",
      },
      {
        name: "FuzzleWorld",
        url: "https://visioninglab.github.io/FuzzleWorld/",
        repo: "FuzzleWorld",
        description:
          "Downloadable felt-puzzle (fuzzle) kits — a make-at-home companion to Giant Insect World.",
      },
    ],
  },
];

export default function DemosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Demos
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Prototypes &amp; <span className="text-gradient">working demos</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          An index of everything Visioning Lab currently has running on GitHub —
          tools, research showcases and immersive experiences. Some are polished,
          some are working sketches. All of them are live.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          This page is not linked from the site navigation.
        </p>
      </FadeIn>

      {groups.map((group, gi) => (
        <section key={group.title} className="mt-16">
          <FadeIn delay={0.05}>
            <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-bold tracking-tight md:text-3xl">
              {group.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {group.blurb}
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {group.demos.map((demo, i) => (
              <FadeIn key={demo.name} delay={gi === 0 ? i * 0.08 : 0.05}>
                <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <h3 className="font-[family-name:var(--font-source-serif)] text-xl font-bold tracking-tight group-hover:text-primary">
                      {demo.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {demo.description}
                    </p>
                  </a>
                  <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      Open demo &rarr;
                    </a>
                    <a
                      href={`https://github.com/visioninglab/${demo.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

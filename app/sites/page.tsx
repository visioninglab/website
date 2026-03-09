import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Sites",
  description:
    "Visioning Lab project sites — live demos, tools, and exhibitions built by the lab.",
};

const sites = [
  {
    name: "Giant Insect World",
    url: "http://giantinsectworld.com/",
    description:
      "Giant Insect World — touring exhibition website showcasing the immersive insect experience.",
  },
  {
    name: "DIR Wiki",
    url: "https://visioninglab.github.io/DIRwiki/",
    description:
      "DIR Case Study Wiki — a reference resource for studying resilient infrastructure design.",
  },
  {
    name: "Water Decisions",
    url: "https://visioninglab.github.io/waterdecisions/",
    description:
      "Water Decisions — exploring decision-making frameworks for water infrastructure.",
  },
  {
    name: "Legal AI",
    url: "https://visioninglab.github.io/legalai/",
    description:
      "Legal AI — investigating artificial intelligence applications in legal contexts.",
  },
  {
    name: "Feedback System",
    url: "https://visioninglab.github.io/feedbacksystem/demo/index.html",
    description:
      "Personalised Psychology Feedback Newsletter — interactive demo.",
  },
  {
    name: "PopupView WebAR",
    url: "https://visioninglab.github.io/popupviewv6/",
    description:
      "PopupView is Visioning Lab's WebAR platform for phones and tablets. Point your camera at a trigger image or QR code to launch a 3D animation with sound — no app download required. Built for artists, architects, writers, and cultural organisations to commission AR experiences that appear from posters, books, and objects in public space.",
    demoUrl: "https://visioninglab.github.io/popupviewv6/prototype/index.html",
    demoLabel: "Try the Bugs in the Woods AR demo — point your phone camera at a trigger image to identify insects in augmented reality.",
  },
];

export default function SitesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Sites
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Our <span className="text-gradient">project sites</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Live demos, tools, and exhibitions built by Visioning Lab — each
          exploring a different facet of our research.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {sites.map((site, i) => (
          <FadeIn key={site.name} delay={i * 0.1}>
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="font-[family-name:var(--font-source-serif)] text-xl font-bold tracking-tight group-hover:text-primary">
                  {site.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {site.description}
                </p>
                <p className="mt-4 text-xs text-primary">
                  Visit site &rarr;
                </p>
              </a>
              {"demoUrl" in site && site.demoUrl && (
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    {"demoLabel" in site && site.demoLabel}
                  </p>
                  <a
                    href={site.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Launch AR demo &rarr;
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

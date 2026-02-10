import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Work with Visioning Lab — research partnerships, speaking, commissions, and exhibitions.",
};

export default function CollaboratePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Get in Touch
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
          <span className="text-gradient">Collaborate</span>
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          We are always open to meaningful collaboration. Whether you have a
          research question, a project brief, or an idea worth exploring — get
          in touch.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <div>
            <h2 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold">
              What We Work On
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium">Research Partnerships</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Collaborative research across ontology, infrastructure, and
                  immersive technology.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Speaking</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Talks and keynotes on decision-centred data, ontological
                  thinking, and immersive research.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Commissions</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Bespoke research, ontology development, and immersive
                  experience design.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Exhibitions</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Immersive installations and exhibitions that communicate
                  complex research.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Or email directly:{" "}
                <a
                  href="mailto:hello@visioninglab.com"
                  className="text-primary underline underline-offset-2"
                >
                  hello@visioninglab.com
                </a>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}

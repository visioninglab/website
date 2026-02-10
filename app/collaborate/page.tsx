import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Work with Visioning Lab — research partnerships, speaking, commissions, and exhibitions.",
};

export default function CollaboratePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-4xl">
        Collaborate
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600">
        We are always open to meaningful collaboration. Whether you have a
        research question, a project brief, or an idea worth exploring — get in
        touch.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold">
            What We Work On
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-sm font-medium">Research Partnerships</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Collaborative research across ontology, infrastructure, and
                immersive technology.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Speaking</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Talks and keynotes on decision-centred data, ontological
                thinking, and immersive research.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Commissions</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Bespoke research, ontology development, and immersive
                experience design.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Exhibitions</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Immersive installations and exhibitions that communicate complex
                research.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-6">
            <p className="text-sm text-neutral-500">
              Or email directly:{" "}
              <a
                href="mailto:hello@visioninglab.com"
                className="text-neutral-900 underline underline-offset-2"
              >
                hello@visioninglab.com
              </a>
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

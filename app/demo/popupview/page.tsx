import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "PopupView AR Demo — Bugs in the Woods",
  description:
    "Try the Bugs in the Woods WebAR demo. Point your phone camera at the trigger image to see an augmented reality insect come to life.",
};

export default function PopupViewDemoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-16 md:pb-24">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          AR Demo
        </p>
        <h1 className="font-[family-name:var(--font-source-serif)] text-3xl font-bold tracking-tight md:text-5xl">
          Bugs in the Woods
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          This is a WebAR prototype built with PopupView. It uses your phone or
          tablet camera to recognise a trigger image and overlay a 3D animated
          insect in augmented reality — no app download required.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-source-serif)] text-xl font-bold">
            How to use
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Print or display the trigger image</strong>{" "}
              — open it on a second screen, or print it out and place it on a
              flat surface.
            </li>
            <li>
              <strong className="text-foreground">Launch the demo</strong> — tap
              the button below on your phone or tablet. Allow camera access when
              prompted.
            </li>
            <li>
              <strong className="text-foreground">Point your camera</strong> at
              the trigger image. When recognised, a 3D shield bug will appear on
              top of it.
            </li>
          </ol>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-10">
          <h2 className="font-[family-name:var(--font-source-serif)] text-xl font-bold">
            Trigger image
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Display this image on another screen or print it out, then point
            your phone camera at it.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://visioninglab.github.io/popupviewv6/prototype/assets/trigger.png"
              alt="PopupView AR trigger image — Bugs in the Woods"
              className="mx-auto max-h-[400px] w-auto"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://visioninglab.github.io/popupviewv6/prototype/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Launch AR Demo
          </a>
          <p className="text-center text-xs text-muted-foreground">
            Best experienced on a phone or tablet. Requires camera access and a
            modern browser.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

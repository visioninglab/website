"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import EditableText from "./EditableText";

interface HeroProps {
  latestEssaySlug?: string;
}

export default function Hero({ latestEssaySlug }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-sm font-medium uppercase tracking-widest text-primary"
          >
            <EditableText
              contentKey="hero.label"
              defaultValue="Research & Development"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <EditableText
              contentKey="hero.title"
              defaultValue="Co-developing research for complex systems — across infrastructure, policy and emerging technology"
              as="h1"
              multiline
              className="font-[family-name:var(--font-source-serif)] text-4xl font-bold leading-[1.05] sm:text-5xl md:text-7xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <EditableText
              contentKey="hero.description"
              defaultValue="We work at the intersection of ontological thinking, infrastructure systems, and immersive technology — bringing rigour to complexity and clarity to decisions that shape the built environment."
              as="p"
              multiline
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore projects
            </Link>
            {latestEssaySlug && (
              <Link
                href={`/thinking/${latestEssaySlug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 font-medium text-foreground transition-colors hover:bg-card"
              >
                Read the latest essay
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

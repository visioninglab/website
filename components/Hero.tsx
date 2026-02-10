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
      {/* Colourful gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-lavender/5" />
        {/* Teal orb — top right */}
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
        {/* Pink orb — centre left */}
        <div className="absolute top-1/3 -left-24 h-[400px] w-[400px] rounded-full bg-accent/12 blur-[100px]" />
        {/* Blue orb — bottom right */}
        <div className="absolute bottom-24 right-1/4 h-[350px] w-[350px] rounded-full bg-glow/10 blur-[100px]" />
        {/* Lavender orb — top left (subtle) */}
        <div className="absolute top-20 left-1/4 h-[300px] w-[300px] rounded-full bg-lavender/8 blur-[80px]" />
        {/* Fade to background at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
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
            <h1 className="font-[family-name:var(--font-source-serif)] text-4xl font-bold leading-[1.05] sm:text-5xl md:text-7xl">
              Co-developing <span className="text-gradient">research</span> for
              complex systems — across{" "}
              <span className="text-gradient">infrastructure</span>, policy and{" "}
              <span className="text-gradient">emerging technology</span>
            </h1>
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

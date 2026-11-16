"use client";

import { motion } from "framer-motion";
import { RIBBONS } from "@/lib/onlovebook/data";

/** Five ribbons in a ring, one per part of the companion; each deepens as it fills (0–1). */
export default function LoveRing({
  values,
  size = 220,
  labels,
}: {
  values: number[];
  size?: number;
  labels?: string[];
}) {
  const r = 80;
  const c = 100;
  const seg = 360 / 5;
  const gap = 9;
  const arc = (i: number) => {
    const a0 = ((i * seg + gap / 2 - 90) * Math.PI) / 180;
    const a1 = (((i + 1) * seg - gap / 2 - 90) * Math.PI) / 180;
    const [x0, y0] = [c + r * Math.cos(a0), c + r * Math.sin(a0)];
    const [x1, y1] = [c + r * Math.cos(a1), c + r * Math.sin(a1)];
    return `M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`;
  };

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label={
        labels
          ? labels.map((l, i) => `${l}: ${Math.round((values[i] || 0) * 100)}%`).join(", ")
          : "Progress ring"
      }
    >
      {values.map((v, i) => (
        <g key={i}>
          <path d={arc(i)} stroke={RIBBONS[i]} strokeOpacity={0.16} strokeWidth={18} strokeLinecap="round" fill="none" />
          <motion.path
            d={arc(i)}
            stroke={RIBBONS[i]}
            strokeOpacity={0.85}
            strokeWidth={18}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: Math.max(0, Math.min(1, v)), opacity: v > 0 ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.15 * i, ease: "easeOut" }}
          />
        </g>
      ))}
    </svg>
  );
}

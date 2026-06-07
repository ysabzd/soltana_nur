"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

function CountUpNumber({
  value,
  suffix,
  reducedMotion,
}: {
  value: number;
  suffix: string;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  const spring = useSpring(0, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    spring.set(value);
    return unsub;
  }, [inView, value, spring, reducedMotion]);

  const formatted =
    suffix === "K€"
      ? `${display}${suffix}`
      : suffix
        ? `${display}${suffix}`
        : display.toLocaleString("fr-FR");

  return (
    <span ref={ref} className="font-display text-5xl italic text-espresso md:text-7xl lg:text-8xl">
      {formatted}
    </span>
  );
}

export function StatBlock({
  stats,
  className,
}: {
  stats: readonly {
    value: number;
    suffix: string;
    label: string;
    description?: string;
  }[];
  className?: string;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className={cn("grid gap-10 md:grid-cols-3", className)}>
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center md:text-left"
        >
          <CountUpNumber
            value={stat.value}
            suffix={stat.suffix}
            reducedMotion={reducedMotion}
          />
          <p className="eyebrow mt-3 text-sm text-gold">{stat.label}</p>
          {stat.description && (
            <p className="mt-2 text-sm text-espresso/60">{stat.description}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

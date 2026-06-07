"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  phrases,
  className,
}: {
  phrases: readonly string[];
  className?: string;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const content = phrases.join(" • ") + " • ";

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div
      className={cn(
        "overflow-hidden bg-espresso py-4 text-cream",
        className
      )}
      aria-label="Messages de marque défilants"
    >
      <div
        className={cn(
          "flex whitespace-nowrap",
          !reducedMotion && "animate-marquee"
        )}
      >
        <span className="eyebrow px-4 text-sm tracking-[0.25em] md:text-base">
          {content}
        </span>
        {!reducedMotion && (
          <span className="eyebrow px-4 text-sm tracking-[0.25em] md:text-base" aria-hidden>
            {content}
          </span>
        )}
      </div>
    </div>
  );
}

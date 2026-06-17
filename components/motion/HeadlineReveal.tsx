"use client";

import { motion } from "framer-motion";
import { EDITORIAL_EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function HeadlineReveal({
  text,
  highlightWord,
  className,
  uppercase = false,
  light = false,
}: {
  text: string;
  highlightWord?: string;
  className?: string;
  uppercase?: boolean;
  light?: boolean;
}) {
  const words = text.split(" ");

  return (
    <h1 className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, i) => {
          const clean = word.replace(/[.,!?]/g, "");
          const highlightClean = highlightWord?.replace(/[.,!?]/g, "");
          const isHighlight = highlightWord && clean === highlightClean;
          const displayWord = uppercase ? word.toUpperCase() : word;
          const punct = word.match(/[.,!?]+$/)?.[0] ?? "";

          return (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: EDITORIAL_EASE,
                  delay: i * 0.08,
                }}
              >
                <span
                  className={cn(
                    isHighlight && (light ? "text-red" : "text-red")
                  )}
                >
                  {displayWord.replace(/[.,!?]+$/, "")}
                  {punct}
                </span>
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          );
        })}
      </span>
    </h1>
  );
}

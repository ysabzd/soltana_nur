"use client";

import { motion } from "framer-motion";
import { EDITORIAL_EASE } from "@/lib/motion";

export function HeadlineReveal({
  text,
  highlightWord,
  className,
}: {
  text: string;
  highlightWord?: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <h1
      className={className}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, i) => {
          const isHighlight = highlightWord && word.replace(/[.,!?]/g, "") === highlightWord.replace(/[.,!?]/g, "");
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
                <span className={isHighlight ? "text-red" : undefined}>
                  {word}
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

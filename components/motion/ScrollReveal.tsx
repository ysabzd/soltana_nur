"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { revealVariants, viewportConfig, staggerContainer, EDITORIAL_EASE } from "@/lib/motion";

export function ScrollReveal({
  children,
  className,
  stagger = false,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={stagger ? staggerContainer : revealVariants}
      transition={{ duration: 0.65, ease: EDITORIAL_EASE, delay }}
      className={cn(className)}
    >
      {stagger
        ? children
        : (
          <motion.div variants={revealVariants}>{children}</motion.div>
        )}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={revealVariants} className={className}>
      {children}
    </motion.div>
  );
}

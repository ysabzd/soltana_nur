"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { ImageSlot } from "@/lib/images";
import { useLenis } from "@/providers/LenisProvider";

export function CollageImage({
  image,
  borderColor = "gold",
  parallax = false,
  className,
  priority = false,
}: {
  image: ImageSlot;
  borderColor?: "gold" | "espresso";
  parallax?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useLenis();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion || !parallax ? [0, 0] : [-30, 30]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: parallax ? y : 0 }}
      className={cn(
        "relative overflow-hidden border transition-shadow duration-500 hover:shadow-xl",
        borderColor === "gold"
          ? "border-gold/50 hover:border-gold"
          : "border-espresso/20 hover:border-espresso/40",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        className="h-full w-full object-cover transition-all duration-700 hover:saturate-110"
      />
    </motion.div>
  );
}

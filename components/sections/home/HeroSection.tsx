"use client";

import Image from "next/image";
import Link from "next/link";
import { HeadlineReveal } from "@/components/motion/HeadlineReveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HERO_PORTRAIT } from "@/lib/images";
import type { HomeContent } from "@/lib/cms";

export function HeroSection({ content }: { content: HomeContent }) {
  return (
    <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_PORTRAIT.src}
          alt={HERO_PORTRAIT.alt}
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-40 text-center lg:px-10 lg:pb-32">
        <Eyebrow className="mb-6 text-gold/90">{content.heroEyebrow}</Eyebrow>
        <HeadlineReveal
          text={content.heroTitle}
          highlightWord={content.heroHighlightWord}
          light
          className="font-display text-4xl leading-[0.95] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance"
        />
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl">
          {content.heroSubtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="/rejoindre"
            className="!bg-cream !text-espresso hover:!bg-cream/90"
          >
            {content.heroCtaPrimary}
          </Button>
          <Link
            href="/qui-je-suis"
            className="link-underline link-underline-light text-sm font-medium text-cream/80 hover:text-cream"
          >
            {content.heroCtaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}

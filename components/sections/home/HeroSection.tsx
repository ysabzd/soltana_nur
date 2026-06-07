"use client";

import Link from "next/link";
import { HeadlineReveal } from "@/components/motion/HeadlineReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HERO_PORTRAIT } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-cream pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="order-2 lg:order-1">
          <Eyebrow className="mb-6">l&apos;École des Pussycat Queens™️</Eyebrow>
          <HeadlineReveal
            text="Deviens impossible à ignorer."
            highlightWord="impossible"
            className="font-display text-5xl leading-[0.95] tracking-tight text-espresso md:text-6xl lg:text-7xl xl:text-8xl text-balance"
          />
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-espresso/75 md:text-xl">
            De la valeur réelle à la valeur perçue. Pour les femmes brillantes
            qui en ont assez de minimiser leur talent.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/rejoindre" variant="primary">
              Rejoindre les Pussycat Queens
            </Button>
            <Link
              href="/qui-je-suis"
              className="link-underline text-sm font-medium text-espresso/80 hover:text-terracotta"
            >
              Découvrir mon histoire →
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:pl-8">
          <CollageImage
            image={HERO_PORTRAIT}
            rotation={2}
            parallax
            priority
            className="aspect-[4/5] w-full max-w-md lg:ml-auto lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

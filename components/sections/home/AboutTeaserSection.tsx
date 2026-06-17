import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ABOUT_1 } from "@/lib/images";
import type { HomeContent } from "@/lib/cms";

export function AboutTeaserSection({ content }: { content: HomeContent }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <CollageImage image={ABOUT_1} parallax className="aspect-[4/5] w-full" />
          <ScrollReveal>
            <Eyebrow className="mb-4">{content.aboutEyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-espresso md:text-5xl text-balance">
              {content.aboutTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/75">
              {content.aboutP1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-espresso/75">
              {content.aboutP2}
            </p>
            <Link
              href="/qui-je-suis"
              className="link-underline mt-8 inline-block text-sm font-medium text-terracotta"
            >
              {content.aboutCta}
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

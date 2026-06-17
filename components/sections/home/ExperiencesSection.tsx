import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  EXPERIENCE_FORMATION,
  EXPERIENCE_COACHING,
  EXPERIENCE_RETREAT,
} from "@/lib/images";
import type { HomeContent } from "@/lib/cms";

const experienceImages = [
  EXPERIENCE_FORMATION,
  EXPERIENCE_COACHING,
  EXPERIENCE_RETREAT,
];

export function ExperiencesSection({ content }: { content: HomeContent }) {
  return (
    <section className="bg-espresso py-16 text-cream lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow={content.experiencesEyebrow}
            title={content.experiencesTitle}
            description={content.experiencesDescription}
            className="mb-16 [&_.eyebrow]:text-cream/80 [&_h2]:text-cream [&_p]:text-cream/85"
          />
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {content.experienceItems.map((exp, i) => (
            <ScrollReveal key={exp.href} delay={i * 0.1}>
              <Link href={exp.href} className="group block">
                <div className="relative mb-6 aspect-[3/4] overflow-hidden">
                  <Image
                    src={experienceImages[i]?.src ?? experienceImages[0].src}
                    alt={experienceImages[i]?.alt ?? exp.title}
                    width={experienceImages[i]?.width ?? 682}
                    height={experienceImages[i]?.height ?? 1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <p className="eyebrow text-xs text-cream/80">{exp.eyebrow}</p>
                <h3 className="font-display mt-2 text-2xl text-cream transition-colors group-hover:text-gold md:text-3xl">
                  {exp.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/85">
                  {exp.description}
                </p>
                <span className="link-underline link-underline-light mt-4 inline-block text-sm font-medium text-cream hover:text-gold">
                  Découvrir →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

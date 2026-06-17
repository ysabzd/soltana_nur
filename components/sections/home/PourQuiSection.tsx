import type { LucideIcon } from "lucide-react";
import { Gem, KeyRound, Magnet } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HomeContent } from "@/lib/cms";

const cardIcons: LucideIcon[] = [Gem, KeyRound, Magnet];

export function PourQuiSection({ content }: { content: HomeContent }) {
  return (
    <section className="bg-espresso py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow={content.pourQuiEyebrow}
              title={content.pourQuiTitle}
              description={content.pourQuiDescription}
              className="[&_h2]:text-cream [&_p]:text-cream/70"
            />
          </div>
          <ScrollReveal stagger className="lg:col-span-8 space-y-6">
            {content.pourQuiCards.map((card, index) => {
              const Icon = cardIcons[index % cardIcons.length];
              return (
                <ScrollRevealItem key={card.title}>
                  <article className="group border border-cream/10 bg-espresso-light/30 p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-lg md:p-10">
                    <div className="flex gap-5 md:gap-6">
                      <div className="flex shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold/15 group-hover:shadow-[0_0_24px_rgba(184,148,79,0.2)] md:h-14 md:w-14">
                          <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} aria-hidden />
                        </div>
                      </div>
                      <div className="min-w-0 pt-1">
                        <h3 className="font-display text-2xl text-cream md:text-3xl">
                          {card.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-cream/75">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </ScrollRevealItem>
              );
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

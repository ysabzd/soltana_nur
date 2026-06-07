import { ScrollReveal, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pourQuiCards } from "@/lib/content/experiences";

export function PourQuiSection() {
  return (
    <section className="bg-espresso py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Pour qui ?"
              title="Tu te reconnais ?"
              description="Brillante. Compétente. Et pourtant — invisible à ta juste mesure."
              className="[&_h2]:text-cream [&_p]:text-cream/70"
            />
          </div>
          <ScrollReveal stagger className="lg:col-span-8 space-y-6">
            {pourQuiCards.map((card) => (
              <ScrollRevealItem key={card.title}>
                <article className="border border-cream/10 p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-lg md:p-10">
                  <h3 className="font-display text-2xl text-cream md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-cream/75">
                    {card.description}
                  </p>
                </article>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { ScrollReveal, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialQuote } from "@/components/ui/TestimonialQuote";
import { testimonials } from "@/lib/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Témoignages"
            title="Elles ont choisi"
            className="mb-16"
          />
        </ScrollReveal>
        <ScrollReveal stagger className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <ScrollRevealItem key={t.author}>
              <TestimonialQuote
                quote={t.quote}
                author={t.author}
                role={t.role}
              />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

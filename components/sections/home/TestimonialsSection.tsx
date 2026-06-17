import { ScrollReveal, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialQuote } from "@/components/ui/TestimonialQuote";
import type { HomeContent } from "@/lib/cms";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialsSection({
  content,
  testimonials,
}: {
  content: HomeContent;
  testimonials: Testimonial[];
}) {
  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow={content.testimonialsEyebrow}
            title={content.testimonialsTitle}
            className="mb-16"
          />
        </ScrollReveal>
        <ScrollReveal stagger className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t) => (
            <ScrollRevealItem key={t.author}>
              <TestimonialQuote
                quote={t.quote}
                author={t.author}
                role={t.role}
                size="compact"
                showStars
              />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

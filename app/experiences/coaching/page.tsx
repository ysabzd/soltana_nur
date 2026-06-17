import { createPageMetadata } from "@/lib/metadata";
import { getCoaching, getSettings, getTestimonials } from "@/lib/cms";
import { getPricing } from "@/lib/constants";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { PriceTag } from "@/components/ui/PriceTag";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { TestimonialQuote } from "@/components/ui/TestimonialQuote";
import { COACHING_HERO } from "@/lib/images";

export async function generateMetadata() {
  const coaching = await getCoaching();
  return createPageMetadata({
    title: "Coaching 1:1",
    description: coaching.metaDescription,
    path: "/experiences/coaching",
  });
}

export default async function CoachingPage() {
  const [coaching, settings, testimonials] = await Promise.all([
    getCoaching(),
    getSettings(),
    getTestimonials(),
  ]);
  const pricing = getPricing(settings);
  const featuredTestimonial = testimonials[0];

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">{coaching.heroEyebrow}</Eyebrow>
              <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl text-balance">
                {coaching.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">{coaching.heroSubtitle}</p>
              <div className="mt-8">
                <PriceTag price={pricing.coaching} label={pricing.coachingLabel} />
              </div>
            </div>
            <CollageImage image={COACHING_HERO} parallax className="aspect-[16/10] w-full" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Pour qui"
              title={coaching.forWhoTitle}
              description={coaching.forWhoDescription}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Processus"
            title={coaching.processTitle}
            className="mb-16 [&_h2]:text-cream"
          />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {coaching.steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div>
                  <span className="font-display text-5xl italic text-gold">{step.step}</span>
                  <h3 className="mt-4 font-display text-2xl text-cream">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-cream/75">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Inclus"
              title={coaching.includedTitle}
              description={coaching.includedDescription}
              className="mb-12"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-cream border-y border-espresso/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" className="mb-12" />
          <Accordion items={coaching.faq as { question: string; answer: string }[]} />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          {featuredTestimonial && (
            <TestimonialQuote
              quote={featuredTestimonial.quote}
              author={featuredTestimonial.author}
              role={featuredTestimonial.role}
              className="mb-16"
            />
          )}
          <div className="text-center">
            <h2 className="font-display text-4xl text-espresso">{coaching.ctaTitle}</h2>
            <p className="mt-4 text-lg text-espresso/75">{coaching.ctaDescription}</p>
            <WhatsAppCTA
              settings={settings}
              message={coaching.ctaWhatsappMessage}
              label={coaching.ctaButton}
              className="mt-8 inline-flex"
            />
          </div>
        </div>
      </section>
    </>
  );
}

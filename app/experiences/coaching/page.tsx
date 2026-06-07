import { createPageMetadata } from "@/lib/metadata";
import { PRICING } from "@/lib/constants";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { PriceTag } from "@/components/ui/PriceTag";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { TestimonialQuote } from "@/components/ui/TestimonialQuote";
import { coachingFaq, coachingSteps } from "@/lib/content/faq";
import { testimonials } from "@/lib/content/testimonials";
import { COACHING_HERO } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Coaching 1:1",
  description:
    "Un espace où la pleine conscience rencontre la maîtrise. Coaching personnalisé pour incarner ta souveraineté.",
  path: "/experiences/coaching",
});

export default function CoachingPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">Coaching 1:1</Eyebrow>
              <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl text-balance">
                Là où la présence rencontre la maîtrise.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                Un accompagnement intime et exigeant. Toi, ta vision, ta
                souveraineté — sans filtre, sans généralités.
              </p>
              <div className="mt-8">
                <PriceTag
                  price={PRICING.coaching}
                  label={PRICING.coachingLabel}
                />
              </div>
            </div>
            <CollageImage
              image={COACHING_HERO}
              rotation={1.5}
              parallax
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Pour qui"
              title="Ce coaching est pour toi si…"
              description="Tu es prête pour un travail profond. Tu veux de la clarté, de la présence, des résultats concrets. Tu ne cherches pas des réponses toutes faites — tu cherches à devenir."
              className="mb-0"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Processus"
            title="Comment ça se passe"
            className="mb-16 [&_h2]:text-cream"
          />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {coachingSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div>
                  <span className="font-display text-5xl italic text-gold">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-cream/75">
                    {step.description}
                  </p>
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
              title="Ce que tu reçois"
              description="Sessions en visio de 60 minutes. Plan d'action personnalisé entre chaque session. Accès direct par WhatsApp pour les questions urgentes. Minimum 3 mois d'accompagnement."
              className="mb-12"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-cream border-y border-espresso/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" className="mb-12" />
          <Accordion items={coachingFaq} />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <TestimonialQuote {...testimonials[0]} className="mb-16" />
          <div className="text-center">
            <h2 className="font-display text-4xl text-espresso">
              Postule pour un accompagnement
            </h2>
            <p className="mt-4 text-lg text-espresso/75">
              Contacte-moi sur WhatsApp pour une première conversation.
            </p>
            <WhatsAppCTA
              label="Demander un appel découverte"
              message="Bonjour Soltana, je souhaite en savoir plus sur le coaching 1:1."
              className="mt-8"
            />
          </div>
        </div>
      </section>
    </>
  );
}

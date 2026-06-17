import { createPageMetadata } from "@/lib/metadata";
import { getFormation, getSettings } from "@/lib/cms";
import { getPricing } from "@/lib/constants";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { PriceTag } from "@/components/ui/PriceTag";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { FORMATION_HERO } from "@/lib/images";

export async function generateMetadata() {
  const formation = await getFormation();
  return createPageMetadata({
    title: "Formation en ligne",
    description: formation.metaDescription,
    path: "/experiences/formation-en-ligne",
  });
}

export default async function FormationPage() {
  const [formation, settings] = await Promise.all([getFormation(), getSettings()]);
  const pricing = getPricing(settings);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">{formation.heroEyebrow}</Eyebrow>
              <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl text-balance">
                {formation.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                {formation.heroSubtitle}
              </p>
              <div className="mt-8">
                <PriceTag price={pricing.formation} label="Investissement" />
              </div>
            </div>
            <CollageImage image={FORMATION_HERO} parallax className="aspect-[4/5] w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-espresso/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading eyebrow="Curriculum" title={formation.curriculumTitle} className="mb-12" />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {formation.modules.map((mod, i) => (
              <ScrollReveal key={mod.title} delay={i * 0.08}>
                <article className="border border-espresso/10 bg-cream p-8 transition-all hover:border-gold/50 hover:shadow-md">
                  <h3 className="font-display text-xl text-espresso md:text-2xl">{mod.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-espresso/70">{mod.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Format"
                title={formation.formatTitle}
                description={formation.formatDescription}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <SectionHeading
                eyebrow="Résultat"
                title={formation.resultTitle}
                description={formation.resultDescription}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream border-y border-espresso/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" className="mb-12" />
          <Accordion items={formation.faq as { question: string; answer: string }[]} />
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-espresso md:text-5xl">{formation.ctaTitle}</h2>
            <p className="mt-4 text-lg text-espresso/75">{formation.ctaDescription}</p>
            <WhatsAppCTA
              settings={settings}
              message={formation.ctaWhatsappMessage}
              label={formation.ctaButton}
              className="mt-8 inline-flex"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import { createPageMetadata } from "@/lib/metadata";
import { getRejoindre, getSettings } from "@/lib/cms";
import { getPricing } from "@/lib/constants";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceTag } from "@/components/ui/PriceTag";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { REJOINDRE_1, REJOINDRE_2, REJOINDRE_3 } from "@/lib/images";

export async function generateMetadata() {
  const rejoindre = await getRejoindre();
  return createPageMetadata({
    title: "Rejoindre les Pussycat Queens",
    description: rejoindre.metaDescription,
    path: "/rejoindre",
  });
}

export default async function RejoindrePage() {
  const [rejoindre, settings] = await Promise.all([getRejoindre(), getSettings()]);
  const pricing = getPricing(settings);
  const tiers = Object.values(pricing.membership);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">{rejoindre.heroEyebrow}</Eyebrow>
              <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl lg:text-7xl text-balance">
                {rejoindre.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                {rejoindre.heroSubtitle}
              </p>
            </div>
            <CollageImage image={REJOINDRE_1} parallax priority className="aspect-[4/5] w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="L'école"
            title={rejoindre.schoolTitle}
            description={rejoindre.schoolDescription}
            className="mb-16 [&_h2]:text-cream [&_p]:text-cream/70"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {rejoindre.benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <article className="border border-cream/10 p-8">
                  <h3 className="font-display text-2xl text-cream">{b.title}</h3>
                  <p className="mt-3 text-cream/75">{b.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <CollageImage image={REJOINDRE_1} className="aspect-[4/5] w-full" />
            <CollageImage image={REJOINDRE_2} parallax className="aspect-[4/5] w-full md:mt-12" />
            <CollageImage image={REJOINDRE_3} className="aspect-[4/5] w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream border-y border-espresso/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Formules"
            title={rejoindre.tiersTitle}
            className="mb-12 text-center mx-auto"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {tiers.map((tier) => (
              <ScrollReveal key={tier.label}>
                <article className="border border-espresso/10 p-10 text-center transition-all hover:border-gold hover:shadow-lg">
                  <p className="eyebrow text-sm text-gold">{tier.label}</p>
                  <PriceTag price={`${tier.price}${tier.period}`} className="mt-4 items-center" />
                  <p className="mt-6 text-sm text-espresso/70">{rejoindre.tiersDescription}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-terracotta text-center text-cream">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <ScrollReveal>
            <blockquote className="font-display text-3xl italic leading-snug md:text-4xl">
              {rejoindre.quote}
            </blockquote>
            <p className="mt-8 text-lg text-cream/90">{rejoindre.ctaDescription}</p>
            <WhatsAppCTA
              settings={settings}
              label={rejoindre.ctaButton}
              message={rejoindre.ctaWhatsappMessage}
              className="mt-8"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

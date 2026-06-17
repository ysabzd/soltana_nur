import { createPageMetadata } from "@/lib/metadata";
import { PRICING } from "@/lib/constants";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceTag } from "@/components/ui/PriceTag";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { REJOINDRE_1, REJOINDRE_2, REJOINDRE_3 } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Rejoindre les Pussycat Queens",
  description:
    "L'École des Pussycat Queens™️ — communauté pour femmes souveraines. Connais ta valeur. Deviens impossible à ignorer.",
  path: "/rejoindre",
});

const benefits = [
  {
    title: "Communauté privée",
    description:
      "Un cercle de femmes brillantes qui choisissent — pas qui demandent la permission.",
  },
  {
    title: "Contenus exclusifs",
    description:
      "Masterclasses, templates, rituels d'incarnation — réservés aux Pussycat Queens.",
  },
  {
    title: "Sessions en direct",
    description:
      "Q&R mensuels, hot seats, feedback en temps réel sur ta présence et ta négociation.",
  },
  {
    title: "Accès prioritaire",
    description:
      "Places en avant-première pour les retreats, le coaching et les nouvelles formations.",
  },
];

export default function RejoindrePage() {
  const tiers = Object.values(PRICING.membership);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">l&apos;École des Pussycat Queens™️</Eyebrow>
              <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl lg:text-7xl text-balance">
                Rejoins le mouvement.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                Une femme qui connaît sa valeur devient impossible à ignorer.
                Elle ne demande plus la permission. Elle choisit.
              </p>
            </div>
            <CollageImage
              image={REJOINDRE_1}
              parallax
              priority
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="L'école"
            title="Ce que tu obtiens"
            description="Pas un cours de confiance en soi. Un espace pour incarner ta souveraineté — magnétique, assumée, sans compromis."
            className="mb-16 [&_h2]:text-cream [&_p]:text-cream/70"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((b, i) => (
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
            <CollageImage
              image={REJOINDRE_1}
              className="aspect-[4/5] w-full"
            />
            <CollageImage
              image={REJOINDRE_2}
              parallax
              className="aspect-[4/5] w-full md:mt-12"
            />
            <CollageImage
              image={REJOINDRE_3}
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream border-y border-espresso/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Formules"
            title="Choisis ton niveau"
            className="mb-12 text-center mx-auto"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {tiers.map((tier) => (
              <ScrollReveal key={tier.label}>
                <article className="border border-espresso/10 p-10 text-center transition-all hover:border-gold hover:shadow-lg">
                  <p className="eyebrow text-sm text-gold">{tier.label}</p>
                  <PriceTag
                    price={`${tier.price}${tier.period}`}
                    className="mt-4 items-center"
                  />
                  <p className="mt-6 text-sm text-espresso/70">
                    Accès communauté, contenus exclusifs et sessions en direct.
                  </p>
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
              « Ne demande plus la permission. Choisis. »
            </blockquote>
            <p className="mt-8 text-lg text-cream/90">
              Contacte-moi directement sur WhatsApp pour rejoindre
              l&apos;École des Pussycat Queens™️.
            </p>
            <WhatsAppCTA
              label="Rejoindre les Pussycat Queens"
              message="Bonjour Soltana, je souhaite rejoindre l'École des Pussycat Queens."
              className="mt-8"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

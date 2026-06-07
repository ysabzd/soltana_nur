import { createPageMetadata } from "@/lib/metadata";
import { PRICING } from "@/lib/constants";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { PriceTag } from "@/components/ui/PriceTag";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { formationFaq, formationModules } from "@/lib/content/faq";
import { FORMATION_HERO } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Formation en ligne",
  description:
    "Transforme ta valeur réelle en valeur perçue. Modules concrets sur la présence, la négociation et la souveraineté incarnée.",
  path: "/experiences/formation-en-ligne",
});

export default function FormationPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">Formation en ligne</Eyebrow>
              <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl text-balance">
                De la valeur réelle à la valeur perçue.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                Une formation pour les femmes qui en ont assez de minimiser.
                Présence, négociation, souveraineté — concrètement, sans
                compromis.
              </p>
              <div className="mt-8">
                <PriceTag price={PRICING.formation} label="Investissement" />
              </div>
            </div>
            <CollageImage
              image={FORMATION_HERO}
              rotation={-1.5}
              parallax
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-espresso/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Curriculum"
              title="Ce que tu vas apprendre"
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {formationModules.map((mod, i) => (
              <ScrollReveal key={mod.title} delay={i * 0.08}>
                <article className="border border-espresso/10 bg-cream p-8 transition-all hover:border-gold/50 hover:shadow-md">
                  <h3 className="font-display text-xl text-espresso md:text-2xl">
                    {mod.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-espresso/70">
                    {mod.description}
                  </p>
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
                title="Accès & accompagnement"
                description="Modules vidéo à ton rythme. Exercices d'incarnation. Templates de négociation. Accès à la communauté Pussycat Queens et sessions Q&R en direct."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <SectionHeading
                eyebrow="Résultat"
                title="Ce que tu deviens"
                description="Une femme qui connaît sa valeur. Qui négocie sans se trahir. Qui choisit — magnétique, assumée, impossible à ignorer."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream border-y border-espresso/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" className="mb-12" />
          <Accordion items={formationFaq} />
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-espresso md:text-5xl">
              Prête à choisir ?
            </h2>
            <p className="mt-4 text-lg text-espresso/75">
              Contacte-moi sur WhatsApp pour t&apos;inscrire à la formation.
            </p>
            <WhatsAppCTA
              label="S'inscrire à la formation"
              message="Bonjour Soltana, je souhaite m'inscrire à la formation en ligne."
              className="mt-8"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

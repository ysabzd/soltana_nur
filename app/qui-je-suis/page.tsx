import { createPageMetadata } from "@/lib/metadata";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/motion/StatBlock";
import { TestimonialQuote } from "@/components/ui/TestimonialQuote";
import { stats } from "@/lib/content/stats";
import { ABOUT_1, ABOUT_2, ABOUT_3 } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Qui je suis",
  description:
    "Juriste, ESCP, fondatrice de l'École des Pussycat Queens. De 0 à 10 millions de repas sauvés — la leçon de la valeur perçue.",
  path: "/qui-je-suis",
});

export default function QuiJeSuisPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow className="mb-4">Qui je suis</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl lg:text-7xl text-balance">
            Connais ta valeur. Deviens impossible à ignorer.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal>
                <h2 className="font-display text-3xl text-espresso md:text-4xl">
                  Background
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-espresso/80">
                  <p>
                    À 30 ans, j&apos;ai une décennie derrière moi à comprendre
                    pourquoi certaines femmes créent des opportunités là où
                    d&apos;autres voient des murs. Pas parce qu&apos;elles sont
                    plus intelligentes. Parce qu&apos;elles incarnent une valeur
                    que les autres ressentent avant même qu&apos;elles
                    n&apos;ouvrent la bouche.
                  </p>
                  <p>
                    Juriste en droit des affaires, formée à la RSE puis à la
                    direction commerciale à l&apos;ESCP. Ma carrière s&apos;est
                    bâtie sur l&apos;influence, la confiance, la valeur perçue
                    — pas sur le volume de preuves.
                  </p>
                  <p>
                    Première salariée d&apos;une association de lutte contre la
                    précarité alimentaire : de zéro à 20 personnes, 1 000
                    partenaires, 700 000 € de recettes annuelles, plus de 10
                    millions de repas sauvés. Pas avec plus de données. Avec
                    plus de présence.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <blockquote className="border-l-2 border-gold py-2 pl-6">
                  <p className="font-display text-2xl italic text-espresso md:text-3xl">
                    La leçon que l&apos;école n&apos;enseigne pas : la valeur
                    perçue change tout.
                  </p>
                </blockquote>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-3xl text-espresso md:text-4xl">
                  Comment je vois les choses dans la vie
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-espresso/80">
                  <p>
                    Je vois des femmes brillantes qui minimisent leur talent.
                    Qui négocient leurs désirs avant même de les formuler. Qui
                    attendent qu&apos;on les remarque au lieu de rayonner.
                  </p>
                  <p>
                    Ce n&apos;est pas un problème de compétence. C&apos;est un
                    problème d&apos;incarnation. Tu sais ce que tu vaux — tu ne
                    le fais juste pas sentir.
                  </p>
                  <p>
                    J&apos;ai créé l&apos;École des Pussycat Queens™️ pour
                    ça. Un espace où tu arrêtes de demander la permission. Où
                    tu choisis — souveraine, magnétique, assumée. De la valeur
                    réelle à la valeur perçue.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <CollageImage
                image={ABOUT_1}
                rotation={2}
                parallax
                className="aspect-[4/5] w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <CollageImage
                  image={ABOUT_2}
                  rotation={-2}
                  className="aspect-[4/5] w-full"
                />
                <CollageImage
                  image={ABOUT_3}
                  rotation={1}
                  className="aspect-[4/5] w-full mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 border-y border-espresso/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow className="mb-12 text-center">Impact</Eyebrow>
          <StatBlock stats={stats} />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <TestimonialQuote
            quote="Soltana ne t'apprend pas à être plus bruyante. Elle t'apprend à être impossible à ignorer."
            author="Membre Pussycat Queens"
            role="Directrice financière"
          />
        </div>
      </section>
    </>
  );
}

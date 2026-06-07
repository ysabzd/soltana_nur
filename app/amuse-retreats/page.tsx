import { createPageMetadata } from "@/lib/metadata";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { RETREAT_HERO, RETREAT_GALLERY } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "aMuse Retreats",
  description:
    "Immersion sensorielle pour femmes souveraines. Cadre luxueux, transformation profonde, places limitées.",
  path: "/amuse-retreats",
});

const cohortDates = [
  { label: "Printemps 2026", status: "Complet" },
  { label: "Été 2026", status: "Places limitées" },
  { label: "Automne 2026", status: "Liste d'attente" },
];

const inclusions = [
  "Hébergement premium en chambre individuelle",
  "Repas gastronomiques et rituels sensoriels",
  "Sessions de coaching en petit groupe",
  "Ateliers présence, négociation, valeur perçue",
  "Temps de silence, nature et connexion",
  "Accès à la communauté Pussycat Queens",
];

export default function AmuseRetreatsPage() {
  return (
    <>
      <section className="relative pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <CollageImage
            image={RETREAT_HERO}
            rotation={0}
            parallax
            priority
            className="aspect-[16/9] w-full"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Eyebrow className="mb-4">aMuse Retreats</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl lg:text-7xl text-balance">
            Une immersion pour{" "}
            <span className="italic text-red">incarner</span> ta souveraineté.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-espresso/75">
            Femmes brillantes. Cadre luxueux. Transformation profonde. Loin du
            bruit, près de toi-même — pour devenir magnétique, assumée,
            impossible à ignorer.
          </p>
        </div>
      </section>

      <section className="py-24 bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="L'expérience"
            title="Ce qui t'attend"
            description="Trois jours pour te reconnecter à ta valeur, ta présence, ton désir. Pas de théorie — de l'incarnation."
            className="mb-12 [&_h2]:text-cream [&_p]:text-cream/70"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {inclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-cream/10 p-5"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-cream/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Dates"
            title="Prochaines cohortes"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {cohortDates.map((cohort, i) => (
              <ScrollReveal key={cohort.label} delay={i * 0.1}>
                <article className="border border-espresso/10 p-8 text-center transition-all hover:border-gold hover:shadow-md">
                  <h3 className="font-display text-2xl text-espresso">
                    {cohort.label}
                  </h3>
                  <p className="eyebrow mt-3 text-sm text-gold">{cohort.status}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Galerie"
            title="L'ambiance"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RETREAT_GALLERY.map((img, i) => (
              <CollageImage
                key={img.src}
                image={img}
                rotation={i % 2 === 0 ? 1.5 : -1.5}
                parallax={i < 3}
                className="aspect-[4/5] w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-terracotta text-center text-cream">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl">
              Rejoins la liste d&apos;attente
            </h2>
            <p className="mt-4 text-lg text-cream/90">
              Places limitées. Contacte-moi sur WhatsApp pour réserver ta place
              ou te inscrire sur la liste d&apos;attente.
            </p>
            <WhatsAppCTA
              label="Réserver ma place"
              message="Bonjour Soltana, je souhaite en savoir plus sur les aMuse Retreats."
              className="mt-8"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

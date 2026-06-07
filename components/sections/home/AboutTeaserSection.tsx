import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ABOUT_1 } from "@/lib/images";

export function AboutTeaserSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <CollageImage
            image={ABOUT_1}
            rotation={-1.5}
            parallax
            className="aspect-[4/5] w-full"
          />
          <ScrollReveal>
            <Eyebrow className="mb-4">À propos</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-espresso md:text-5xl text-balance">
              Juriste. ESCP. 10 millions de repas sauvés.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/75">
              J&apos;ai passé une décennie à comprendre pourquoi certaines
              femmes créent des opportunités là où d&apos;autres voient des
              murs. La leçon que l&apos;école n&apos;enseigne pas : la valeur
              perçue change tout.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-espresso/75">
              C&apos;est pour ça que j&apos;ai créé l&apos;École des Pussycat
              Queens™️ — un espace pour les femmes qui choisissent
              d&apos;incarner leur pouvoir.
            </p>
            <Link
              href="/qui-je-suis"
              className="link-underline mt-8 inline-block text-sm font-medium text-terracotta"
            >
              Lire mon histoire →
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

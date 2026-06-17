import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MANIFESTO_1, MANIFESTO_2 } from "@/lib/images";

export function ManifestoSection() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <Eyebrow className="mb-4">Manifesto</Eyebrow>
              <h2 className="font-display text-4xl leading-tight text-espresso md:text-5xl lg:text-6xl text-balance">
                De la valeur réelle à la valeur perçue.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                Tu as les compétences. Les résultats. La preuve. Mais on ne te
                voit pas à ta juste mesure — parce que tu minimises, tu
                négocies, tu attends.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-espresso/75">
                Ne demande plus la permission. Choisis d&apos;incarner ta
                souveraineté — magnétique, assumée, impossible à ignorer.
              </p>
            </ScrollReveal>
          </div>
          <div className="space-y-8">
            <CollageImage
              image={MANIFESTO_1}
              parallax
              className="aspect-[16/10] w-full"
            />
            <CollageImage
              image={MANIFESTO_2}
              parallax
              borderColor="espresso"
              className="aspect-[3/4] ml-auto w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

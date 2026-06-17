import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MANIFESTO_1, MANIFESTO_2 } from "@/lib/images";
import type { HomeContent } from "@/lib/cms";

export function ManifestoSection({ content }: { content: HomeContent }) {
  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <Eyebrow className="mb-4">{content.manifestoEyebrow}</Eyebrow>
              <h2 className="font-display text-4xl leading-tight text-espresso md:text-5xl lg:text-6xl text-balance">
                {content.manifestoTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-espresso/75">
                {content.manifestoP1}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-espresso/75">
                {content.manifestoP2}
              </p>
            </ScrollReveal>
          </div>
          <div className="space-y-8">
            <CollageImage image={MANIFESTO_1} parallax className="aspect-[16/10] w-full" />
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

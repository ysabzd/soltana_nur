import { createPageMetadata } from "@/lib/metadata";
import { getAbout } from "@/lib/cms";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/motion/StatBlock";
import { TestimonialQuote } from "@/components/ui/TestimonialQuote";
import { ABOUT_1, ABOUT_2, ABOUT_3 } from "@/lib/images";

export async function generateMetadata() {
  const about = await getAbout();
  return createPageMetadata({
    title: "Qui je suis",
    description: about.metaDescription,
    path: "/qui-je-suis",
  });
}

export default async function QuiJeSuisPage() {
  const about = await getAbout();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow className="mb-4">{about.heroEyebrow}</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-espresso md:text-6xl lg:text-7xl text-balance">
            {about.heroTitle}
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal>
                <h2 className="font-display text-3xl text-espresso md:text-4xl">
                  {about.backgroundTitle}
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-espresso/80">
                  <p>{about.backgroundP1}</p>
                  <p>{about.backgroundP2}</p>
                  <p>{about.backgroundP3}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <blockquote className="border-l-2 border-gold py-2 pl-6">
                  <p className="font-display text-2xl italic text-espresso md:text-3xl">
                    {about.pullQuote}
                  </p>
                </blockquote>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-3xl text-espresso md:text-4xl">
                  {about.visionTitle}
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-espresso/80">
                  <p>{about.visionP1}</p>
                  <p>{about.visionP2}</p>
                  <p>{about.visionP3}</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <CollageImage image={ABOUT_1} parallax className="aspect-[4/5] w-full" />
              <div className="grid grid-cols-2 gap-4">
                <CollageImage image={ABOUT_2} className="aspect-[4/5] w-full" />
                <CollageImage image={ABOUT_3} className="aspect-[4/5] w-full mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 border-y border-espresso/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow className="mb-12 text-center">Impact</Eyebrow>
          <StatBlock
            stats={about.stats.map((s) => ({
              value: s.value ?? 0,
              suffix: s.suffix,
              label: s.label,
              description: s.description,
            }))}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <TestimonialQuote
            quote={about.closingQuote}
            author={about.closingAuthor}
            role={about.closingRole}
          />
        </div>
      </section>
    </>
  );
}

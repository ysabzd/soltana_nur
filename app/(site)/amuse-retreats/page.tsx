import { createPageMetadata } from "@/lib/metadata";
import { getRetreats, getSettings } from "@/lib/cms";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { HeadlineReveal } from "@/components/motion/HeadlineReveal";
import { CollageImage } from "@/components/ui/CollageImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { RETREAT_HERO, RETREAT_GALLERY } from "@/lib/images";

export async function generateMetadata() {
  const retreats = await getRetreats();
  return createPageMetadata({
    title: "aMuse Retreats",
    description: retreats.metaDescription,
    path: "/amuse-retreats",
  });
}

export default async function AmuseRetreatsPage() {
  const [retreats, settings] = await Promise.all([getRetreats(), getSettings()]);

  return (
    <>
      <section className="relative pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <CollageImage
            image={RETREAT_HERO}
            parallax
            priority
            className="aspect-[4/5] w-full max-h-[80vh] md:aspect-[16/9]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Eyebrow className="mb-4">{retreats.heroEyebrow}</Eyebrow>
          <HeadlineReveal
            text={retreats.heroTitle}
            highlightWord={retreats.heroHighlightWord}
            className="font-display text-5xl leading-tight text-espresso md:text-6xl lg:text-7xl text-balance"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-espresso/75">
            {retreats.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-24 bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="L'expérience"
            title={retreats.experienceTitle}
            description={retreats.experienceDescription}
            className="mb-12 [&_h2]:text-cream [&_p]:text-cream/70"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {retreats.inclusions.map((item) => (
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
          <SectionHeading eyebrow="Dates" title={retreats.datesTitle} className="mb-12" />
          <div className="grid gap-6 md:grid-cols-3">
            {retreats.cohorts.map((cohort, i) => (
              <ScrollReveal key={cohort.season} delay={i * 0.1}>
                <article className="border border-espresso/10 p-8 text-center transition-all hover:border-gold hover:shadow-md">
                  <h3 className="font-display text-2xl text-espresso">{cohort.season}</h3>
                  <p className="eyebrow mt-3 text-sm text-gold">{cohort.status}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Galerie" title={retreats.galleryTitle} className="mb-12" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RETREAT_GALLERY.map((img, i) => (
              <CollageImage
                key={img.src}
                image={img}
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
            <h2 className="font-display text-4xl md:text-5xl">{retreats.waitlistTitle}</h2>
            <p className="mt-4 text-lg text-cream/90">{retreats.waitlistDescription}</p>
            <WhatsAppCTA
              settings={settings}
              label={retreats.waitlistButton}
              message={retreats.waitlistWhatsappMessage}
              className="mt-8"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

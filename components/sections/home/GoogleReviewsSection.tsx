import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoogleReviewsEmbed } from "@/components/google/GoogleReviewsEmbed";
import type { HomeContent, Settings } from "@/lib/cms";
import { getGoogleMapsApiKey, resolveGooglePlaceId } from "@/lib/google-places";

export async function GoogleReviewsSection({
  content,
  settings,
}: {
  content: HomeContent;
  settings: Settings;
}) {
  const apiKey = getGoogleMapsApiKey();
  const mapsUrl =
    settings.googleMapsReviewsUrl?.trim() ||
    "https://maps.app.goo.gl/TZJJRCugi2zGyck97";

  const placeId = await resolveGooglePlaceId({
    placeId: settings.googlePlaceId,
    placeName: settings.googlePlaceName,
    apiKey,
  });

  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow={content.testimonialsEyebrow}
            title={content.testimonialsTitle}
            description={content.testimonialsDescription ?? undefined}
            className="mb-12"
          />
        </ScrollReveal>

        {apiKey && placeId ? (
          <ScrollReveal delay={0.1}>
            <GoogleReviewsEmbed
              apiKey={apiKey}
              placeId={placeId}
              mapsUrl={mapsUrl}
            />
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.1}>
            <div className="rounded-sm border border-espresso/10 bg-cream px-8 py-12 text-center shadow-sm">
              <p className="font-display text-2xl text-espresso md:text-3xl">
                Avis Google Maps
              </p>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-espresso/75">
                {apiKey
                  ? "Le lieu Google n’a pas pu être identifié. Ajoutez le Place ID dans les réglages Keystatic."
                  : "Configurez la clé API Google Maps (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) pour afficher les avis directement sur le site."}
              </p>
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center border border-espresso bg-espresso px-8 py-3 text-xs font-medium tracking-[0.18em] text-cream uppercase transition-colors hover:bg-espresso-light"
              >
                Lire les avis sur Google Maps
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

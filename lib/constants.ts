import type { Settings } from "@/lib/cms";

export function getWhatsAppUrl(
  settings: Pick<Settings, "whatsappNumber" | "whatsappMessage">,
  message?: string
): string {
  const text = message ?? settings.whatsappMessage;
  return `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getSocialLinks(settings: Pick<Settings, "instagram" | "linkedin" | "tiktok">) {
  return {
    instagram: settings.instagram,
    linkedin: settings.linkedin,
    tiktok: settings.tiktok,
  };
}

export function getPricing(settings: Settings) {
  return {
    formation: settings.priceFormation,
    coaching: settings.priceCoaching,
    coachingLabel: settings.priceCoachingLabel,
    membership: {
      decouverte: {
        label: settings.tierDecouverteLabel,
        price: settings.tierDecouvertePrice,
        period: settings.tierDecouvertePeriod,
      },
      souveraine: {
        label: settings.tierSouveraineLabel,
        price: settings.tierSouverainePrice,
        period: settings.tierSouverainePeriod,
      },
    },
  };
}

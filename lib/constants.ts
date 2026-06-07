export const SITE_NAME = "Soltana Nur";
export const SITE_TAGLINE = "l'École des Pussycat Queens™️";
export const SITE_URL = "https://soltananur.com";

export const WHATSAPP_NUMBER = "33600000000";
export const WHATSAPP_MESSAGE =
  "Bonjour Soltana, je souhaite en savoir plus sur l'École des Pussycat Queens.";

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
  tiktok: "#",
} as const;

export const PRICING = {
  formation: "225 €",
  coaching: "497 €",
  coachingLabel: "Sur mesure — à partir de",
  membership: {
    decouverte: { label: "Découverte", price: "47 €", period: "/mois" },
    souveraine: { label: "Souveraine", price: "97 €", period: "/mois" },
  },
} as const;

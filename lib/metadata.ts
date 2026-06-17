import type { Metadata } from "next";

const SITE_NAME = "Soltana Nur";
const SITE_TAGLINE = "l'École des Pussycat Queens™️";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://soltananur.com";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetadataOptions): Metadata {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Connais ta valeur. Deviens impossible à ignorer. L'École des Pussycat Queens™️ — de la valeur réelle à la valeur perçue.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName: SITE_NAME,
  },
};

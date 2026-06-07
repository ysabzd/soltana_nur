export const mainNav = [
  { label: "Qui je suis", href: "/qui-je-suis" },
  {
    label: "Expériences",
    href: "/experiences/formation-en-ligne",
    children: [
      { label: "Formation en ligne", href: "/experiences/formation-en-ligne" },
      { label: "Coaching 1:1", href: "/experiences/coaching" },
    ],
  },
  { label: "aMuse Retreats", href: "/amuse-retreats" },
  { label: "Blog", href: "/blog" },
] as const;

export const footerNav = [
  { label: "Qui je suis", href: "/qui-je-suis" },
  { label: "Formation en ligne", href: "/experiences/formation-en-ligne" },
  { label: "Coaching 1:1", href: "/experiences/coaching" },
  { label: "aMuse Retreats", href: "/amuse-retreats" },
  { label: "Blog", href: "/blog" },
  { label: "Rejoindre", href: "/rejoindre" },
] as const;

export const tickerPhrases = [
  "Now Booking",
  "Limited Spots",
  "Rejoins les Pussycat Queens",
  "Connais ta valeur",
  "Deviens impossible à ignorer",
  "De la valeur réelle à la valeur perçue",
  "Ne demande plus la permission",
] as const;

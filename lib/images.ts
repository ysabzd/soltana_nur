export type ImageSlot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ph = (w: number, h: number, label?: string) =>
  `https://placehold.co/${w}x${h}/BE5A38/F3E8D8${label ? `?text=${encodeURIComponent(label)}` : ""}`;

export const HERO_PORTRAIT: ImageSlot = {
  src: ph(800, 1000, "Portrait"),
  alt: "Soltana Nur — portrait chaleureux, regard confiant",
  width: 800,
  height: 1000,
};

export const MANIFESTO_1: ImageSlot = {
  src: ph(600, 800, "Manifesto"),
  alt: "Femme souveraine en lumière dorée",
  width: 600,
  height: 800,
};

export const MANIFESTO_2: ImageSlot = {
  src: ph(500, 650, "Presence"),
  alt: "Détail éditorial — présence et élégance",
  width: 500,
  height: 650,
};

export const EXPERIENCE_FORMATION: ImageSlot = {
  src: ph(700, 900, "Formation"),
  alt: "Formation en ligne — femme travaillant avec assurance",
  width: 700,
  height: 900,
};

export const EXPERIENCE_COACHING: ImageSlot = {
  src: ph(650, 850, "Coaching"),
  alt: "Coaching 1:1 — conversation intime et puissante",
  width: 650,
  height: 850,
};

export const EXPERIENCE_RETREAT: ImageSlot = {
  src: ph(750, 950, "Retreat"),
  alt: "aMuse Retreats — cadre luxueux et chaleureux",
  width: 750,
  height: 950,
};

export const ABOUT_1: ImageSlot = {
  src: ph(700, 900, "Bio"),
  alt: "Soltana Nur — portrait éditorial",
  width: 700,
  height: 900,
};

export const ABOUT_2: ImageSlot = {
  src: ph(500, 600, "Bio 2"),
  alt: "Moment de réflexion — carrière et impact",
  width: 500,
  height: 600,
};

export const ABOUT_3: ImageSlot = {
  src: ph(450, 550, "Bio 3"),
  alt: "Collage portrait — énergie magnétique",
  width: 450,
  height: 550,
};

export const RETREAT_HERO: ImageSlot = {
  src: ph(1400, 800, "Retreat Hero"),
  alt: "aMuse Retreats — paysage et ambiance sensorielle",
  width: 1400,
  height: 800,
};

export const RETREAT_GALLERY: ImageSlot[] = [
  {
    src: ph(600, 750, "Gallery 1"),
    alt: "Retreat — espace de repos et de connexion",
    width: 600,
    height: 750,
  },
  {
    src: ph(500, 650, "Gallery 2"),
    alt: "Retreat — repas partagé en lumière dorée",
    width: 500,
    height: 650,
  },
  {
    src: ph(550, 700, "Gallery 3"),
    alt: "Retreat — cercle de femmes souveraines",
    width: 550,
    height: 700,
  },
  {
    src: ph(480, 620, "Gallery 4"),
    alt: "Retreat — détail floral et textile",
    width: 480,
    height: 620,
  },
  {
    src: ph(520, 680, "Gallery 5"),
    alt: "Retreat — moment de silence au lever du soleil",
    width: 520,
    height: 680,
  },
  {
    src: ph(460, 600, "Gallery 6"),
    alt: "Retreat — architecture et nature",
    width: 460,
    height: 600,
  },
];

export const REJOINDRE_1: ImageSlot = {
  src: ph(800, 1000, "Community"),
  alt: "Communauté Pussycat Queens — énergie collective",
  width: 800,
  height: 1000,
};

export const REJOINDRE_2: ImageSlot = {
  src: ph(600, 750, "School"),
  alt: "L'école — espace d'apprentissage et de transformation",
  width: 600,
  height: 750,
};

export const REJOINDRE_3: ImageSlot = {
  src: ph(550, 700, "Queens"),
  alt: "Femmes rayonnantes — communauté assumée",
  width: 550,
  height: 700,
};

export const COACHING_HERO: ImageSlot = {
  src: ph(900, 1100, "Coaching"),
  alt: "Coaching 1:1 — présence et maîtrise",
  width: 900,
  height: 1100,
};

export const FORMATION_HERO: ImageSlot = {
  src: ph(900, 1100, "Formation"),
  alt: "Formation en ligne — promesse de transformation",
  width: 900,
  height: 1100,
};

export function getBlogImage(slug: string, index = 0): ImageSlot {
  const widths = [800, 700, 750, 650, 720, 680];
  const heights = [500, 450, 480, 420, 460, 440];
  const w = widths[index % widths.length];
  const h = heights[index % heights.length];
  return {
    src: ph(w, h, slug.slice(0, 12)),
    alt: `Illustration article — ${slug}`,
    width: w,
    height: h,
  };
}

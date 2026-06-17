export type ImageSlot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Real photography — swap paths here only
const IMG = {
  heroPool: "/images/hero-pool.png",
  portraitBw: "/images/portrait-bw.png",
  retreatPool: "/images/retreat-pool.png",
  editorialRed: "/images/editorial-red.png",
  editorialStreet: "/images/editorial-street.png",
  editorialShawl: "/images/editorial-shawl.png",
} as const;

/** Full-bleed hero — pool & desert reflection, ethereal sovereignty */
export const HERO_PORTRAIT: ImageSlot = {
  src: IMG.heroPool,
  alt: "Soltana Nur au bord d'une piscine — silhouette souveraine, reflet dans l'eau",
  width: 682,
  height: 1024,
};

/** Manifesto — red velvet, cinematic presence (valeur perçue incarnée) */
export const MANIFESTO_1: ImageSlot = {
  src: IMG.editorialRed,
  alt: "Portrait éditorial en lumière rouge — présence magnétique et assumée",
  width: 1024,
  height: 682,
};

/** Manifesto — portrait N&B, regard direct et confiant */
export const MANIFESTO_2: ImageSlot = {
  src: IMG.portraitBw,
  alt: "Portrait noir et blanc — Soltana Nur, regard confiant",
  width: 682,
  height: 1024,
};

/** Formation — énergie urbaine, assurance incarnée */
export const EXPERIENCE_FORMATION: ImageSlot = {
  src: IMG.editorialStreet,
  alt: "Portrait éditorial en ville — confiance et présence",
  width: 682,
  height: 1024,
};

/** Coaching — portrait intime N&B */
export const EXPERIENCE_COACHING: ImageSlot = {
  src: IMG.portraitBw,
  alt: "Portrait noir et blanc — coaching intime et maîtrise",
  width: 682,
  height: 1024,
};

/** Retreats — robe blanche, piscine tropicale */
export const EXPERIENCE_RETREAT: ImageSlot = {
  src: IMG.retreatPool,
  alt: "aMuse Retreats — immersion tropicale, féminité souveraine",
  width: 682,
  height: 1024,
};

/** About — portrait N&B principal */
export const ABOUT_1: ImageSlot = {
  src: IMG.portraitBw,
  alt: "Soltana Nur — portrait éditorial noir et blanc",
  width: 682,
  height: 1024,
};

/** About collage — mouvement et liberté */
export const ABOUT_2: ImageSlot = {
  src: IMG.editorialShawl,
  alt: "Soltana Nur en mouvement — énergie magnétique et libre",
  width: 682,
  height: 1024,
};

/** About collage — reflet piscine */
export const ABOUT_3: ImageSlot = {
  src: IMG.retreatPool,
  alt: "Immersion tropicale — présence et féminité",
  width: 682,
  height: 1024,
};

/** Retreat hero banner — pool tropical */
export const RETREAT_HERO: ImageSlot = {
  src: IMG.retreatPool,
  alt: "aMuse Retreats — piscine tropicale, immersion sensorielle",
  width: 682,
  height: 1024,
};

export const RETREAT_GALLERY: ImageSlot[] = [
  {
    src: IMG.retreatPool,
    alt: "Retreat — piscine tropicale, robe blanche et or",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.heroPool,
    alt: "Retreat — reflet dans l'eau, désert et sérénité",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.editorialShawl,
    alt: "Retreat — mouvement, châle brodé et joie incarnée",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.editorialStreet,
    alt: "Retreat — énergie urbaine et assurance",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.portraitBw,
    alt: "Retreat — portrait intime, connexion profonde",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.editorialRed,
    alt: "Retreat — lumière rouge, luxe et sensualité",
    width: 1024,
    height: 682,
  },
];

/** Rejoindre — énergie collective, mouvement */
export const REJOINDRE_1: ImageSlot = {
  src: IMG.editorialShawl,
  alt: "Communauté Pussycat Queens — énergie libre et magnétique",
  width: 682,
  height: 1024,
};

/** Rejoindre — immersion retreat */
export const REJOINDRE_2: ImageSlot = {
  src: IMG.retreatPool,
  alt: "L'école — immersion, piscine et transformation",
  width: 682,
  height: 1024,
};

/** Rejoindre — énergie urbaine */
export const REJOINDRE_3: ImageSlot = {
  src: IMG.editorialStreet,
  alt: "Présence en mouvement — assurance et magnétisme",
  width: 682,
  height: 1024,
};

/** Coaching page hero — lumière rouge, intimité */
export const COACHING_HERO: ImageSlot = {
  src: IMG.editorialRed,
  alt: "Coaching 1:1 — présence intime, lumière rouge",
  width: 1024,
  height: 682,
};

/** Formation page hero — mouvement et assurance */
export const FORMATION_HERO: ImageSlot = {
  src: IMG.editorialShawl,
  alt: "Formation en ligne — énergie libre et transformation",
  width: 682,
  height: 1024,
};

const BLOG_IMAGES: ImageSlot[] = [
  {
    src: IMG.editorialRed,
    alt: "Illustration éditoriale — lumière rouge",
    width: 1024,
    height: 682,
  },
  {
    src: IMG.heroPool,
    alt: "Illustration éditoriale — reflet et souveraineté",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.editorialShawl,
    alt: "Illustration éditoriale — mouvement et liberté",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.retreatPool,
    alt: "Illustration éditoriale — immersion tropicale",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.editorialStreet,
    alt: "Illustration éditoriale — présence urbaine",
    width: 682,
    height: 1024,
  },
  {
    src: IMG.portraitBw,
    alt: "Illustration éditoriale — portrait N&B",
    width: 682,
    height: 1024,
  },
];

export function getBlogImage(slug: string, index = 0): ImageSlot {
  const img = BLOG_IMAGES[index % BLOG_IMAGES.length];
  return {
    ...img,
    alt: `${img.alt} — ${slug}`,
  };
}

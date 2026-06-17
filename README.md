# Soltana Nur — l'École des Pussycat Queens™️

Production marketing website for **Soltana Nur**, founder of l'École des Pussycat Queens™️. Built with Next.js, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm start       # Start production server
```

## Configuration

### Keystatic CMS (édition du contenu)

Le contenu éditable (textes, prix, témoignages, articles de blog) est géré par [Keystatic](https://keystatic.com/).

**En local :**

```bash
npm run dev
```

Ouvre [http://localhost:3000/keystatic](http://localhost:3000/keystatic) pour modifier le contenu. Les changements sont enregistrés dans le dossier `content/`.

**Fichiers de contenu :**

| Fichier / dossier | Contenu |
|-------------------|---------|
| `content/settings.yaml` | WhatsApp, réseaux sociaux, prix |
| `content/home.yaml` | Page d'accueil |
| `content/about.yaml` | Qui je suis |
| `content/formation.yaml` | Formation en ligne |
| `content/coaching.yaml` | Coaching 1:1 |
| `content/retreats.yaml` | aMuse Retreats |
| `content/rejoindre.yaml` | Rejoindre |
| `content/testimonials/` | Témoignages |
| `content/blog/` | Articles de blog |

**En production (GitHub mode) :** définir ces variables d'environnement sur Vercel pour que la cliente édite directement depuis `/keystatic` :

```
KEYSTATIC_GITHUB_OWNER=ysabzd
KEYSTATIC_GITHUB_REPO=soltana_nur
```

Sans ces variables, Keystatic utilise le stockage local (développement uniquement).

### WhatsApp, réseaux sociaux et prix

Éditer `content/settings.yaml` via Keystatic ou directement dans le fichier :

- `whatsappNumber` — format international sans `+` (ex. `33612345678`)
- `whatsappMessage` — message pré-rempli par défaut
- `instagram`, `linkedin`, `tiktok` — liens réseaux sociaux
- `priceFormation`, `priceCoaching`, formules membership — tarifs affichés

### Site URL (SEO / OpenGraph)

Définir `NEXT_PUBLIC_SITE_URL` en variable d'environnement, ou éditer `siteUrl` dans `content/settings.yaml`.

## Replacing images

All images are centralized in [`lib/images.ts`](lib/images.ts). Replace each `src` with your own file path (place in `/public/images/`) or external URL. Layout uses explicit dimensions — swapping images will not break grids.

| Constant | Page / Section | Recommended size | Orientation |
|----------|----------------|------------------|-------------|
| `HERO_PORTRAIT` | Home — Hero (full bleed) | 682 × 1024 | Portrait — pool & desert |
| `MANIFESTO_1` | Home — Manifesto | 1024 × 682 | Landscape — red editorial |
| `MANIFESTO_2` | Home — Manifesto | 682 × 1024 | Portrait — N&B |
| `EXPERIENCE_FORMATION` | Home — Expériences | 682 × 1024 | Portrait — street |
| `EXPERIENCE_COACHING` | Home — Expériences | 682 × 1024 | Portrait — N&B |
| `EXPERIENCE_RETREAT` | Home — Expériences | 682 × 1024 | Portrait — retreat pool |
| `ABOUT_1` | Home teaser + Qui je suis | 700 × 900 | Portrait |
| `ABOUT_2` | Qui je suis — collage | 500 × 600 | Portrait |
| `ABOUT_3` | Qui je suis — collage | 450 × 550 | Portrait |
| `FORMATION_HERO` | Formation en ligne — Hero | 900 × 1100 | Portrait |
| `COACHING_HERO` | Coaching 1:1 — Hero | 900 × 1100 | Portrait |
| `RETREAT_HERO` | aMuse Retreats — Hero banner | 1400 × 800 | Landscape |
| `RETREAT_GALLERY[0–5]` | aMuse Retreats — Gallery | 460–600 × 600–750 | Portrait |
| `REJOINDRE_1` | Rejoindre — Hero + collage | 800 × 1000 | Portrait |
| `REJOINDRE_2` | Rejoindre — collage | 600 × 750 | Portrait |
| `REJOINDRE_3` | Rejoindre — collage | 550 × 700 | Portrait |
| `getBlogImage()` | Blog index + articles | 650–800 × 420–500 | Landscape |

**Example swap:**

```ts
// lib/images.ts
export const HERO_PORTRAIT: ImageSlot = {
  src: "/images/hero-portrait.jpg",
  alt: "Soltana Nur — portrait chaleureux, regard confiant",
  width: 800,
  height: 1000,
};
```

If using external URLs, add the hostname to `images.remotePatterns` in [`next.config.ts`](next.config.ts).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/qui-je-suis` | About |
| `/experiences/formation-en-ligne` | Online course |
| `/experiences/coaching` | 1:1 coaching |
| `/amuse-retreats` | Retreats |
| `/blog` | Blog index |
| `/blog/[slug]` | Article template |
| `/rejoindre` | Community / school landing + WhatsApp CTA |
| `/keystatic` | Admin CMS (édition du contenu) |

## Project structure

```
app/           — Pages (App Router)
components/    — UI, layout, motion, home sections
lib/           — Images, CMS reader, helpers, motion tokens
content/       — YAML éditable via Keystatic
providers/     — Lenis smooth scroll provider
```

## French copy

All user-facing copy lives in `content/` (Keystatic) and is loaded via `lib/cms/`. Navigation structure stays in `lib/content/navigation.ts`. Comments and code are in English.

## Motion & accessibility

- Lenis smooth scroll (disabled when `prefers-reduced-motion: reduce`)
- Framer Motion scroll reveals, parallax, stat count-up
- Skip link, semantic landmarks, focus-visible gold ring

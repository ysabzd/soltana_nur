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

### WhatsApp contact

Edit [`lib/constants.ts`](lib/constants.ts):

- `WHATSAPP_NUMBER` — international format without `+` (e.g. `33612345678`)
- `WHATSAPP_MESSAGE` — default pre-filled message

### Social links

Edit `SOCIAL_LINKS` in [`lib/constants.ts`](lib/constants.ts).

### Pricing placeholders

Edit `PRICING` in [`lib/constants.ts`](lib/constants.ts).

### Site URL (SEO / OpenGraph)

Edit `SITE_URL` in [`lib/constants.ts`](lib/constants.ts).

## Replacing images

All images are centralized in [`lib/images.ts`](lib/images.ts). Replace each `src` with your own file path (place in `/public/images/`) or external URL. Layout uses explicit dimensions — swapping images will not break grids.

| Constant | Page / Section | Recommended size | Orientation |
|----------|----------------|------------------|-------------|
| `HERO_PORTRAIT` | Home — Hero | 800 × 1000 | Portrait |
| `MANIFESTO_1` | Home — Manifesto | 600 × 800 | Portrait |
| `MANIFESTO_2` | Home — Manifesto | 500 × 650 | Portrait |
| `EXPERIENCE_FORMATION` | Home — Expériences card | 700 × 900 | Portrait |
| `EXPERIENCE_COACHING` | Home — Expériences card | 650 × 850 | Portrait |
| `EXPERIENCE_RETREAT` | Home — Expériences card | 750 × 950 | Portrait |
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

## Project structure

```
app/           — Pages (App Router)
components/    — UI, layout, motion, home sections
lib/           — Images, constants, content, motion tokens
providers/     — Lenis smooth scroll provider
```

## French copy

All user-facing copy lives in `lib/content/` and page components. Comments and code are in English.

## Motion & accessibility

- Lenis smooth scroll (disabled when `prefers-reduced-motion: reduce`)
- Framer Motion scroll reveals, parallax, stat count-up
- Skip link, semantic landmarks, focus-visible gold ring

import { config, collection, fields, singleton } from "@keystatic/core";

const cardSchema = {
  title: fields.text({ label: "Titre" }),
  description: fields.text({ label: "Description", multiline: true }),
};

const faqItemSchema = {
  question: fields.text({ label: "Question" }),
  answer: fields.text({ label: "Réponse", multiline: true }),
};

const statSchema = {
  value: fields.integer({ label: "Valeur" }),
  suffix: fields.text({ label: "Suffixe (ex: M, K€)" }),
  label: fields.text({ label: "Libellé" }),
  description: fields.text({ label: "Description", multiline: true }),
};

function getStorage():
  | { kind: "local" }
  | { kind: "github"; repo: `${string}/${string}` } {
  const owner = process.env.KEYSTATIC_GITHUB_OWNER;
  const repo = process.env.KEYSTATIC_GITHUB_REPO;
  if (owner && repo) {
    return { kind: "github", repo: `${owner}/${repo}` };
  }
  return { kind: "local" };
}

export default config({
  storage: getStorage(),
  ui: {
    brand: { name: "Soltana Nur" },
    navigation: {
      "Réglages": ["settings"],
      "Pages": ["home", "about", "formation", "coaching", "retreats", "rejoindre"],
      "Contenu": ["testimonials", "blog"],
    },
  },
  singletons: {
    settings: singleton({
      label: "Réglages du site",
      path: "content/settings",
      schema: {
        siteName: fields.text({ label: "Nom du site" }),
        siteTagline: fields.text({ label: "Slogan / tagline" }),
        siteUrl: fields.text({ label: "URL du site (SEO)" }),
        whatsappNumber: fields.text({
          label: "Numéro WhatsApp (sans +)",
          description: "Ex: 33612345678",
        }),
        whatsappMessage: fields.text({
          label: "Message WhatsApp par défaut",
          multiline: true,
        }),
        instagram: fields.text({ label: "Lien Instagram" }),
        linkedin: fields.text({ label: "Lien LinkedIn" }),
        tiktok: fields.text({ label: "Lien TikTok" }),
        footerDescription: fields.text({
          label: "Footer — texte de présentation",
          multiline: true,
        }),
        footerWhatsappLabel: fields.text({ label: "Footer — bouton WhatsApp" }),
        googleMapsReviewsUrl: fields.text({
          label: "Google Maps — lien avis",
          description: "Lien court ou URL complète vers la fiche Google (ex. maps.app.goo.gl/…)",
        }),
        googlePlaceId: fields.text({
          label: "Google Place ID (optionnel)",
          description:
            "ChIJ… — laisser vide pour recherche automatique par nom. Trouvable via le Place ID Finder Google.",
        }),
        googlePlaceName: fields.text({
          label: "Nom du lieu Google",
          description: "Utilisé si le Place ID n’est pas renseigné (recherche Places API).",
        }),
        priceFormation: fields.text({ label: "Prix formation" }),
        priceCoaching: fields.text({ label: "Prix coaching" }),
        priceCoachingLabel: fields.text({ label: "Libellé prix coaching" }),
        tierDecouverteLabel: fields.text({ label: "Formule Découverte — nom" }),
        tierDecouvertePrice: fields.text({ label: "Formule Découverte — prix" }),
        tierDecouvertePeriod: fields.text({ label: "Formule Découverte — période" }),
        tierSouveraineLabel: fields.text({ label: "Formule Souveraine — nom" }),
        tierSouverainePrice: fields.text({ label: "Formule Souveraine — prix" }),
        tierSouverainePeriod: fields.text({ label: "Formule Souveraine — période" }),
        tickerPhrases: fields.array(fields.text({ label: "Phrase" }), {
          label: "Phrases du bandeau défilant",
          itemLabel: (props) => props.value,
        }),
      },
    }),
    home: singleton({
      label: "Page d'accueil",
      path: "content/home",
      schema: {
        heroEyebrow: fields.text({ label: "Hero — eyebrow" }),
        heroTitle: fields.text({ label: "Hero — titre" }),
        heroHighlightWord: fields.text({
          label: "Hero — mot en rouge",
          description: 'Mot du titre à mettre en rouge, ex: "impossible"',
        }),
        heroSubtitle: fields.text({ label: "Hero — sous-titre", multiline: true }),
        heroCtaPrimary: fields.text({ label: "Hero — bouton principal" }),
        heroCtaSecondary: fields.text({ label: "Hero — lien secondaire" }),
        manifestoEyebrow: fields.text({ label: "Manifesto — eyebrow" }),
        manifestoTitle: fields.text({ label: "Manifesto — titre" }),
        manifestoP1: fields.text({ label: "Manifesto — paragraphe 1", multiline: true }),
        manifestoP2: fields.text({ label: "Manifesto — paragraphe 2", multiline: true }),
        pourQuiEyebrow: fields.text({ label: "Pour qui — eyebrow" }),
        pourQuiTitle: fields.text({ label: "Pour qui — titre" }),
        pourQuiDescription: fields.text({
          label: "Pour qui — description",
          multiline: true,
        }),
        pourQuiCards: fields.array(
          fields.object(cardSchema),
          { label: "Cartes Pour qui ?", itemLabel: (props) => props.fields.title.value }
        ),
        experiencesEyebrow: fields.text({ label: "Expériences — eyebrow" }),
        experiencesTitle: fields.text({ label: "Expériences — titre" }),
        experiencesDescription: fields.text({
          label: "Expériences — description",
          multiline: true,
        }),
        experienceItems: fields.array(
          fields.object({
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Titre" }),
            description: fields.text({ label: "Description", multiline: true }),
            href: fields.text({ label: "Lien (URL)" }),
          }),
          { label: "Cartes expériences", itemLabel: (props) => props.fields.title.value }
        ),
        aboutEyebrow: fields.text({ label: "À propos — eyebrow" }),
        aboutTitle: fields.text({ label: "À propos — titre" }),
        aboutP1: fields.text({ label: "À propos — paragraphe 1", multiline: true }),
        aboutP2: fields.text({ label: "À propos — paragraphe 2", multiline: true }),
        aboutCta: fields.text({ label: "À propos — lien" }),
        testimonialsEyebrow: fields.text({ label: "Témoignages — eyebrow" }),
        testimonialsTitle: fields.text({ label: "Témoignages — titre" }),
        testimonialsDescription: fields.text({
          label: "Témoignages — description",
          multiline: true,
        }),
        blogEyebrow: fields.text({ label: "Blog — eyebrow" }),
        blogTitle: fields.text({ label: "Blog — titre" }),
        blogDescription: fields.text({ label: "Blog — description", multiline: true }),
        blogCta: fields.text({ label: "Blog — lien voir tout" }),
        ctaTitle: fields.text({ label: "CTA final — titre", multiline: true }),
        ctaTitleItalic: fields.text({
          label: "CTA final — partie en italique",
          description: "Ex: impossible à ignorer",
        }),
        ctaDescription: fields.text({ label: "CTA final — description", multiline: true }),
        ctaWhatsappLabel: fields.text({ label: "CTA final — bouton WhatsApp" }),
        ctaSecondaryLabel: fields.text({ label: "CTA final — bouton secondaire" }),
      },
    }),
    about: singleton({
      label: "Qui je suis",
      path: "content/about",
      schema: {
        metaDescription: fields.text({ label: "Description SEO", multiline: true }),
        heroEyebrow: fields.text({ label: "Eyebrow" }),
        heroTitle: fields.text({ label: "Titre principal" }),
        backgroundTitle: fields.text({ label: "Section Background — titre" }),
        backgroundP1: fields.text({ label: "Background — p.1", multiline: true }),
        backgroundP2: fields.text({ label: "Background — p.2", multiline: true }),
        backgroundP3: fields.text({ label: "Background — p.3", multiline: true }),
        pullQuote: fields.text({ label: "Citation mise en avant", multiline: true }),
        visionTitle: fields.text({ label: "Section Vision — titre" }),
        visionP1: fields.text({ label: "Vision — p.1", multiline: true }),
        visionP2: fields.text({ label: "Vision — p.2", multiline: true }),
        visionP3: fields.text({ label: "Vision — p.3", multiline: true }),
        stats: fields.array(fields.object(statSchema), {
          label: "Chiffres clés",
          itemLabel: (props) => props.fields.label.value,
        }),
        closingQuote: fields.text({ label: "Témoignage de fin", multiline: true }),
        closingAuthor: fields.text({ label: "Auteur témoignage" }),
        closingRole: fields.text({ label: "Rôle auteur" }),
      },
    }),
    formation: singleton({
      label: "Formation en ligne",
      path: "content/formation",
      schema: {
        metaDescription: fields.text({ label: "Description SEO", multiline: true }),
        heroEyebrow: fields.text({ label: "Eyebrow" }),
        heroTitle: fields.text({ label: "Titre" }),
        heroSubtitle: fields.text({ label: "Sous-titre", multiline: true }),
        curriculumTitle: fields.text({ label: "Curriculum — titre" }),
        formatTitle: fields.text({ label: "Format — titre" }),
        formatDescription: fields.text({ label: "Format — description", multiline: true }),
        resultTitle: fields.text({ label: "Résultat — titre" }),
        resultDescription: fields.text({ label: "Résultat — description", multiline: true }),
        ctaTitle: fields.text({ label: "CTA — titre" }),
        ctaDescription: fields.text({ label: "CTA — description", multiline: true }),
        ctaButton: fields.text({ label: "CTA — bouton" }),
        ctaWhatsappMessage: fields.text({ label: "Message WhatsApp inscription", multiline: true }),
        modules: fields.array(
          fields.object({
            title: fields.text({ label: "Titre" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          { label: "Modules", itemLabel: (props) => props.fields.title.value }
        ),
        faq: fields.array(fields.object(faqItemSchema), {
          label: "FAQ",
          itemLabel: (props) => props.fields.question.value,
        }),
      },
    }),
    coaching: singleton({
      label: "Coaching 1:1",
      path: "content/coaching",
      schema: {
        metaDescription: fields.text({ label: "Description SEO", multiline: true }),
        heroEyebrow: fields.text({ label: "Eyebrow" }),
        heroTitle: fields.text({ label: "Titre" }),
        heroSubtitle: fields.text({ label: "Sous-titre", multiline: true }),
        forWhoTitle: fields.text({ label: "Pour qui — titre" }),
        forWhoDescription: fields.text({ label: "Pour qui — description", multiline: true }),
        processTitle: fields.text({ label: "Processus — titre" }),
        includedTitle: fields.text({ label: "Inclus — titre" }),
        includedDescription: fields.text({ label: "Inclus — description", multiline: true }),
        ctaTitle: fields.text({ label: "CTA — titre" }),
        ctaDescription: fields.text({ label: "CTA — description", multiline: true }),
        ctaButton: fields.text({ label: "CTA — bouton" }),
        ctaWhatsappMessage: fields.text({ label: "Message WhatsApp", multiline: true }),
        steps: fields.array(
          fields.object({
            step: fields.text({ label: "Numéro" }),
            title: fields.text({ label: "Titre" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          { label: "Étapes", itemLabel: (props) => props.fields.title.value }
        ),
        faq: fields.array(fields.object(faqItemSchema), {
          label: "FAQ",
          itemLabel: (props) => props.fields.question.value,
        }),
      },
    }),
    retreats: singleton({
      label: "aMuse Retreats",
      path: "content/retreats",
      schema: {
        metaDescription: fields.text({ label: "Description SEO", multiline: true }),
        heroEyebrow: fields.text({ label: "Eyebrow" }),
        heroTitle: fields.text({ label: "Titre" }),
        heroHighlightWord: fields.text({ label: "Mot en rouge" }),
        heroSubtitle: fields.text({ label: "Sous-titre", multiline: true }),
        experienceTitle: fields.text({ label: "Expérience — titre" }),
        experienceDescription: fields.text({
          label: "Expérience — description",
          multiline: true,
        }),
        datesTitle: fields.text({ label: "Dates — titre" }),
        galleryTitle: fields.text({ label: "Galerie — titre" }),
        waitlistTitle: fields.text({ label: "Liste d'attente — titre" }),
        waitlistDescription: fields.text({
          label: "Liste d'attente — description",
          multiline: true,
        }),
        waitlistButton: fields.text({ label: "Liste d'attente — bouton" }),
        waitlistWhatsappMessage: fields.text({
          label: "Message WhatsApp waitlist",
          multiline: true,
        }),
        inclusions: fields.array(fields.text({ label: "Inclusion" }), {
          label: "Ce qui est inclus",
          itemLabel: (props) => props.value,
        }),
        cohorts: fields.array(
          fields.object({
            season: fields.text({ label: "Saison" }),
            status: fields.text({ label: "Statut" }),
          }),
          { label: "Dates / cohortes", itemLabel: (props) => props.fields.season.value }
        ),
      },
    }),
    rejoindre: singleton({
      label: "Rejoindre",
      path: "content/rejoindre",
      schema: {
        metaDescription: fields.text({ label: "Description SEO", multiline: true }),
        heroEyebrow: fields.text({ label: "Eyebrow" }),
        heroTitle: fields.text({ label: "Titre" }),
        heroSubtitle: fields.text({ label: "Sous-titre", multiline: true }),
        schoolTitle: fields.text({ label: "L'école — titre" }),
        schoolDescription: fields.text({ label: "L'école — description", multiline: true }),
        tiersTitle: fields.text({ label: "Formules — titre" }),
        tiersDescription: fields.text({
          label: "Description formules (sous chaque prix)",
          multiline: true,
        }),
        quote: fields.text({ label: "Citation finale", multiline: true }),
        ctaDescription: fields.text({ label: "CTA — description", multiline: true }),
        ctaButton: fields.text({ label: "CTA — bouton" }),
        ctaWhatsappMessage: fields.text({ label: "Message WhatsApp", multiline: true }),
        benefits: fields.array(
          fields.object(cardSchema),
          { label: "Avantages", itemLabel: (props) => props.fields.title.value }
        ),
      },
    }),
  },
  collections: {
    testimonials: collection({
      label: "Témoignages",
      slugField: "author",
      path: "content/testimonials/*",
      format: "yaml",
      schema: {
        author: fields.slug({
          name: { label: "Auteur (identifiant)" },
        }),
        quote: fields.text({ label: "Citation", multiline: true }),
        displayName: fields.text({ label: "Nom affiché" }),
        role: fields.text({ label: "Rôle / titre" }),
      },
    }),
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "content/blog/*",
      format: "yaml",
      schema: {
        title: fields.slug({ name: { label: "Titre" } }),
        excerpt: fields.text({ label: "Extrait", multiline: true }),
        date: fields.date({ label: "Date de publication" }),
        readTime: fields.text({ label: "Temps de lecture" }),
        featured: fields.checkbox({ label: "Article à la une", defaultValue: false }),
        pullQuote: fields.text({ label: "Citation pull (optionnel)", multiline: true }),
        paragraphs: fields.array(
          fields.text({ label: "Paragraphe", multiline: true }),
          { label: "Contenu", itemLabel: (props) => props.value?.slice(0, 40) ?? "Paragraphe" }
        ),
      },
    }),
  },
});

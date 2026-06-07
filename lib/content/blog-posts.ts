export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
  pullQuote?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pourquoi-ta-valeur-percue-change-tout",
    title: "Pourquoi ta valeur perçue change tout",
    excerpt:
      "La valeur réelle ne suffit pas. Ce que les autres voient, ressentent, désirent — c'est ce qui ouvre les portes.",
    date: "2026-05-12",
    readTime: "6 min",
    featured: true,
    pullQuote: "Ce n'est pas du bluff. C'est de l'incarnation.",
    content: [
      "Tu as le CV. Les compétences. Les résultats. Et pourtant, quelque chose ne colle pas. Tu n'es pas vue à ta juste mesure.",
      "La valeur perçue, ce n'est pas mentir sur qui tu es. C'est honorer ce que tu apportes — et le faire sentir avant même que tu parles.",
      "J'ai appris ça en construisant une association de zéro : 10 millions de repas sauvés, 1 000 partenaires. Pas avec plus de preuves. Avec plus de présence.",
      "Commence par arrêter de minimiser. Choisis un moment cette semaine où tu ne t'excuseras pas de ton expertise. Observe ce qui change.",
    ],
  },
  {
    slug: "arreter-de-demander-la-permission",
    title: "Arrêter de demander la permission",
    excerpt:
      "Ne demande plus la permission. Choisis. La souveraineté commence quand tu arrêtes de négocier tes propres désirs.",
    date: "2026-04-28",
    readTime: "5 min",
    pullQuote: "Une femme qui connaît sa valeur ne demande plus la permission.",
    content: [
      "Combien de fois cette semaine as-tu adouci une demande avant de la formuler ? Combien de fois as-tu attendu un signe au lieu de décider ?",
      "Demander la permission, c'est externaliser ton pouvoir. C'est croire que quelqu'un d'autre doit valider ce que tu sais déjà.",
      "Les Pussycat Queens ne sont pas des femmes qui crient plus fort. Ce sont des femmes qui choisissent — avec clarté, présence, désir assumé.",
      "Exercice : écris une décision que tu repousses. Formule-la sans excuse, sans justification. Puis agis dans les 48 heures.",
    ],
  },
  {
    slug: "presence-magnetique-en-reunion",
    title: "Présence magnétique en réunion",
    excerpt:
      "Tu n'as pas besoin de parler plus. Tu as besoin d'occuper l'espace différemment. Voici comment.",
    date: "2026-04-10",
    readTime: "7 min",
    content: [
      "La présence magnétique n'est pas du volume. C'est de la densité. Chaque mot compte parce que tu es entièrement là.",
      "Avant ta prochaine réunion : trois respirations. Épaules basses. Regard stable. Tu n'es pas là pour convaincre — tu es là pour incarner.",
      "Quand tu parles, termine ta phrase. Ne monte pas en fin de phrase. Ne demande pas pardon avec ton intonation.",
      "Les femmes qui changent les dynamiques ne dominent pas la pièce. Elles la réorganisent.",
    ],
  },
  {
    slug: "negocier-sans-te-trahir",
    title: "Négocier sans te trahir",
    excerpt:
      "La négociation n'est pas un combat. C'est un acte de respect — envers toi d'abord.",
    date: "2026-03-22",
    readTime: "8 min",
    pullQuote: "Honorer ta valeur, ce n'est pas être inflexible. C'est ne plus te trahir.",
    content: [
      "Tu as probablement appris à négocier en te réduisant. À proposer moins pour éviter le rejet. À accepter vite pour ne pas déplaire.",
      "Négocier sans te trahir, c'est connaître ton plancher avant d'entrer dans la pièce. C'est savoir ce que tu refuses — pas seulement ce que tu veux.",
      "Prépare trois chiffres : ton idéal, ton acceptable, ton plancher. Si on touche au plancher, tu choisis de partir. Sans drame. Avec souveraineté.",
    ],
  },
  {
    slug: "devenir-impossible-a-ignorer",
    title: "Devenir impossible à ignorer",
    excerpt:
      "Ce n'est pas une question de visibilité. C'est une question d'énergie. Connais ta valeur. Deviens impossible à ignorer.",
    date: "2026-03-05",
    readTime: "6 min",
    content: [
      "Impossible à ignorer ne veut pas dire omniprésente. Ça veut dire mémorable. Présente. Alignée.",
      "Les femmes qu'on remarque ne cherchent pas l'attention. Elles portent une conviction que l'on ressent avant qu'elles n'ouvrent la bouche.",
      "Ta valeur perçue se construit dans les détails : comment tu entres, comment tu écoutes, comment tu dis non, comment tu dis oui.",
      "Commence par une chose : arrête de t'excuser de ton ambition. Elle n'a pas besoin d'être justifiée.",
    ],
  },
  {
    slug: "l-ecole-des-pussycat-queens",
    title: "Pourquoi j'ai créé l'École des Pussycat Queens",
    excerpt:
      "Parce que l'école n'enseigne pas la valeur perçue. Parce que les femmes brillantes méritent un espace pour devenir souveraines.",
    date: "2026-02-18",
    readTime: "9 min",
    featured: false,
    pullQuote: "De la valeur réelle à la valeur perçue.",
    content: [
      "À 30 ans, j'avais une décennie de preuves derrière moi. Juriste. ESCP. Première salariée d'une association qui est passée de 0 à 20 personnes.",
      "Et pourtant, j'observais le même schéma : des femmes extraordinaires qui minimisaient leur talent, négociaient leurs désirs, attendaient qu'on les voie.",
      "L'École des Pussycat Queens est née de cette conviction : une femme qui connaît sa valeur devient impossible à ignorer. Elle ne demande plus la permission. Elle choisit.",
      "Ce n'est pas un cours de confiance en soi. C'est un espace pour incarner ta souveraineté — magnétique, assumée, sans compromis.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestPosts(count = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

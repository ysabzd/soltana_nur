import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const reader = createReader(process.cwd(), keystaticConfig);

export type Settings = NonNullable<
  Awaited<ReturnType<typeof reader.singletons.settings.read>>
>;
export type HomeContent = NonNullable<
  Awaited<ReturnType<typeof reader.singletons.home.read>>
>;
export type AboutContent = NonNullable<
  Awaited<ReturnType<typeof reader.singletons.about.read>>
>;
export type FormationContent = NonNullable<
  Awaited<ReturnType<typeof reader.singletons.formation.read>>
>;
export type CoachingContent = NonNullable<
  Awaited<ReturnType<typeof reader.singletons.coaching.read>>
>;
export type RetreatsContent = NonNullable<
  Awaited<ReturnType<typeof reader.singletons.retreats.read>>
>;
export type RejoindreContent = NonNullable<
  Awaited<ReturnType<typeof reader.singletons.rejoindre.read>>
>;

export type BlogEntry = Awaited<
  ReturnType<typeof reader.collections.blog.all>
>[number];
export type TestimonialEntry = Awaited<
  ReturnType<typeof reader.collections.testimonials.all>
>[number];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured: boolean;
  pullQuote?: string;
  content: readonly string[];
};

function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function mapBlogEntry(
  slug: string,
  entry: {
    title: string;
    headline?: string | null;
    excerpt: string;
    date?: string | null;
    readTime: string;
    featured?: boolean | null;
    pullQuote?: string | null;
    paragraphs?: readonly string[] | null;
  }
): BlogPost {
  return {
    slug,
    title: entry.headline?.trim() || humanizeSlug(slug),
    excerpt: entry.excerpt,
    date: entry.date ?? "",
    readTime: entry.readTime,
    featured: entry.featured ?? false,
    pullQuote: entry.pullQuote || undefined,
    content: entry.paragraphs ?? [],
  };
}

export async function getSettings(): Promise<Settings> {
  const data = await reader.singletons.settings.read();
  if (!data) throw new Error("Missing content/settings.yaml");
  return data;
}

export async function getHome(): Promise<HomeContent> {
  const data = await reader.singletons.home.read();
  if (!data) throw new Error("Missing content/home.yaml");
  return data;
}

export async function getAbout(): Promise<AboutContent> {
  const data = await reader.singletons.about.read();
  if (!data) throw new Error("Missing content/about.yaml");
  return data;
}

export async function getFormation(): Promise<FormationContent> {
  const data = await reader.singletons.formation.read();
  if (!data) throw new Error("Missing content/formation.yaml");
  return data;
}

export async function getCoaching(): Promise<CoachingContent> {
  const data = await reader.singletons.coaching.read();
  if (!data) throw new Error("Missing content/coaching.yaml");
  return data;
}

export async function getRetreats(): Promise<RetreatsContent> {
  const data = await reader.singletons.retreats.read();
  if (!data) throw new Error("Missing content/retreats.yaml");
  return data;
}

export async function getRejoindre(): Promise<RejoindreContent> {
  const data = await reader.singletons.rejoindre.read();
  if (!data) throw new Error("Missing content/rejoindre.yaml");
  return data;
}

export async function getTestimonials() {
  const items = await reader.collections.testimonials.all();
  return items
    .map((t) => ({
      slug: t.slug,
      quote: t.entry.quote,
      author: t.entry.displayName,
      role: t.entry.role,
    }))
    .sort((a, b) => a.author.localeCompare(b.author));
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await reader.collections.blog.all();
  return posts
    .map((p) => mapBlogEntry(p.slug, p.entry))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await reader.collections.blog.read(slug);
  if (!post) return null;
  return mapBlogEntry(slug, post);
}

export async function getLatestPosts(count = 3) {
  const posts = await getAllBlogPosts();
  return posts.slice(0, count);
}

export async function getFeaturedPost() {
  const posts = await getAllBlogPosts();
  return posts.find((p) => p.featured) ?? posts[0];
}

export async function getBlogSlugs() {
  const posts = await reader.collections.blog.list();
  return posts;
}

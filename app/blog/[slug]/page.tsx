import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { blogPosts, getBlogPost } from "@/lib/content/blog-posts";
import { getBlogImage } from "@/lib/images";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const image = getBlogImage(slug, index);

  return (
    <article className="pt-32 pb-24 lg:pt-40">
      <header className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          href="/blog"
          className="link-underline text-sm text-terracotta"
        >
          ← Retour au blog
        </Link>
        <Eyebrow className="mt-8 mb-4">
          {new Date(post.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {post.readTime}
        </Eyebrow>
        <h1 className="font-display text-4xl leading-tight text-espresso md:text-5xl lg:text-6xl text-balance">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-espresso/75">
          {post.excerpt}
        </p>
      </header>

      <div className="mx-auto mt-12 max-w-4xl px-6 lg:px-10">
        <div className="relative aspect-[16/10] overflow-hidden border border-espresso/10">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl px-6 lg:px-10">
        <div className="prose-spacing space-y-6 text-lg leading-relaxed text-espresso/85">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        {post.pullQuote && (
          <blockquote className="my-16 border-l-2 border-gold py-2 pl-8">
            <p className="font-display text-2xl italic text-espresso md:text-3xl">
              « {post.pullQuote} »
            </p>
          </blockquote>
        )}

        <aside className="mt-20 border-t border-espresso/10 pt-12">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-terracotta font-display text-2xl text-cream">
              SN
            </div>
            <div>
              <p className="font-display text-xl text-espresso">Soltana Nur</p>
              <p className="eyebrow mt-1 text-xs text-gold">
                Fondatrice, l&apos;École des Pussycat Queens™️
              </p>
              <p className="mt-3 text-base text-espresso/70">
                Juriste, ESCP, 10 millions de repas sauvés. J&apos;enseigne aux
                femmes brillantes à transformer leur valeur réelle en valeur
                perçue.
              </p>
            </div>
          </div>
        </aside>

        <div className="mt-16 text-center">
          <p className="font-display text-2xl text-espresso">
            Prête à aller plus loin ?
          </p>
          <WhatsAppCTA className="mt-6" />
        </div>
      </div>
    </article>
  );
}

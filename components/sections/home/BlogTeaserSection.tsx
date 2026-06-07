import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { getLatestPosts } from "@/lib/content/blog-posts";

export function BlogTeaserSection() {
  const posts = getLatestPosts(3);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Blog"
              title="Penser différemment"
              description="Réflexions sur la valeur perçue, la souveraineté et le choix."
            />
          </ScrollReveal>
          <Link
            href="/blog"
            className="link-underline shrink-0 text-sm font-medium text-terracotta"
          >
            Voir tous les articles →
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <ArticleCard post={post} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

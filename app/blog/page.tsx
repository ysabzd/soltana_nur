import { createPageMetadata } from "@/lib/metadata";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { blogPosts, getFeaturedPost } from "@/lib/content/blog-posts";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Réflexions sur la valeur perçue, la souveraineté et le choix — par Soltana Nur.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = getFeaturedPost();
  const otherPosts = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Blog"
            title="Penser différemment"
            description="La valeur perçue, la souveraineté, le choix — en mots courts et incarnés."
          />
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <ArticleCard post={featured} featured index={0} />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <ArticleCard post={post} index={i + 1} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

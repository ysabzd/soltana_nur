import { createPageMetadata } from "@/lib/metadata";
import { getAllBlogPosts, getFeaturedPost } from "@/lib/cms";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { EditorialArticleCard } from "@/components/ui/EditorialArticleCard";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Réflexions sur la valeur perçue, la souveraineté et le choix, par Soltana Nur.",
  path: "/blog",
});

export default async function BlogPage() {
  const [featured, allPosts] = await Promise.all([getFeaturedPost(), getAllBlogPosts()]);
  const otherPosts = allPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Blog"
            title="Penser différemment"
            description="La valeur perçue, la souveraineté, le choix, en mots courts et incarnés."
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

      <section className="border-t border-espresso/10 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-3 md:gap-0">
            {otherPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <EditorialArticleCard
                  post={post}
                  index={i + 1}
                  showDivider={i < 2}
                  className={i > 0 ? "md:pl-10 lg:pl-12" : undefined}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

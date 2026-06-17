import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/cms";
import { getBlogImage } from "@/lib/images";
import { Eyebrow } from "./Eyebrow";

export function ArticleCard({
  post,
  index = 0,
  featured = false,
  className,
}: {
  post: BlogPost;
  index?: number;
  featured?: boolean;
  className?: string;
}) {
  const image = getBlogImage(post.slug, index);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block transition-transform duration-500 hover:scale-[1.02]",
        className
      )}
    >
      <div
        className={cn(
          "relative mb-5 overflow-hidden border border-espresso/10 transition-colors duration-500 group-hover:border-gold/50",
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <Eyebrow className="mb-2">
        {new Date(post.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Eyebrow>
      <h3
        className={cn(
          "font-display text-espresso group-hover:text-terracotta transition-colors",
          featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        )}
      >
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-espresso/70 md:text-base">
        {post.excerpt}
      </p>
      <span className="link-underline mt-4 inline-block text-sm text-terracotta">
        Lire l&apos;article →
      </span>
    </Link>
  );
}

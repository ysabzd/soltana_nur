import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/cms";
import { getBlogImage } from "@/lib/images";

export function EditorialArticleCard({
  post,
  index = 0,
  className,
  showDivider = false,
}: {
  post: BlogPost;
  index?: number;
  className?: string;
  showDivider?: boolean;
}) {
  const image = getBlogImage(post.slug, index);
  const date = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).toUpperCase();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col",
        showDivider && "border-espresso/10 md:border-r md:pr-10 lg:pr-12",
        className
      )}
    >
      <time className="label-caps text-espresso/45" dateTime={post.date}>
        {date}
      </time>
      <h3 className="headline-editorial mt-4 text-2xl leading-tight text-espresso transition-colors group-hover:text-terracotta md:text-[1.75rem]">
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-espresso/65">
        {post.excerpt}
      </p>
      <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-espresso/5">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    </Link>
  );
}

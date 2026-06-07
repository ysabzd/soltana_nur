import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageSlot } from "@/lib/images";
import { Eyebrow } from "./Eyebrow";

export function FeatureCard({
  title,
  description,
  href,
  eyebrow,
  image,
  className,
}: {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  image?: ImageSlot;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]",
        className
      )}
    >
      {image && (
        <div className="relative mb-6 aspect-[4/5] overflow-hidden border border-gold/30 transition-all duration-500 group-hover:border-gold group-hover:shadow-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover transition-all duration-700 group-hover:saturate-110"
          />
        </div>
      )}
      {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
      <h3 className="font-display text-2xl text-espresso md:text-3xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-espresso/70">{description}</p>
      <span className="link-underline mt-4 inline-block text-sm font-medium text-terracotta">
        Découvrir →
      </span>
    </Link>
  );
}

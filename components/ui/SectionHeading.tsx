import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "default",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "editorial" | "slab";
  className?: string;
}) {
  const titleClass =
    variant === "slab"
      ? "headline-slab text-3xl text-espresso md:text-4xl lg:text-5xl text-balance"
      : variant === "editorial"
        ? "headline-editorial text-3xl text-espresso md:text-4xl lg:text-5xl text-balance"
        : "font-display text-4xl leading-[1.05] tracking-tight text-espresso md:text-5xl lg:text-6xl text-balance";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        variant === "editorial" || variant === "slab" ? (
          <p className="label-caps mb-4 text-gold">{eyebrow}</p>
        ) : (
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        )
      )}
      <h2 className={titleClass}>{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-espresso/75 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-espresso md:text-5xl lg:text-6xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-espresso/75 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

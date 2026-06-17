import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

function StarRating({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label="5 sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden />
      ))}
    </div>
  );
}

export function TestimonialQuote({
  quote,
  author,
  role,
  className,
  size = "large",
  showStars = false,
}: {
  quote: string;
  author: string;
  role?: string;
  className?: string;
  size?: "large" | "compact";
  showStars?: boolean;
}) {
  return (
    <blockquote className={cn("relative", className)}>
      <p
        className={cn(
          "font-display italic leading-snug text-espresso",
          size === "compact"
            ? "text-lg md:text-xl"
            : "text-2xl md:text-3xl lg:text-4xl"
        )}
      >
        « {quote} »
      </p>
      <footer className="mt-5">
        <cite className="not-italic">
          {showStars && <StarRating className="mb-2" />}
          <span className="block font-medium text-espresso">{author}</span>
          {role && (
            <span className="eyebrow mt-1 block text-xs text-espresso/60">{role}</span>
          )}
        </cite>
      </footer>
    </blockquote>
  );
}

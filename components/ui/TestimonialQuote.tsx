import { cn } from "@/lib/utils";

export function TestimonialQuote({
  quote,
  author,
  role,
  className,
}: {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}) {
  return (
    <blockquote className={cn("relative", className)}>
      <p className="font-display text-2xl italic leading-snug text-espresso md:text-3xl lg:text-4xl">
        « {quote} »
      </p>
      <footer className="mt-6">
        <cite className="not-italic">
          <span className="block font-medium text-espresso">{author}</span>
          {role && (
            <span className="eyebrow mt-1 block text-xs text-gold">{role}</span>
          )}
        </cite>
      </footer>
    </blockquote>
  );
}

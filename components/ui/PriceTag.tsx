import { cn } from "@/lib/utils";

export function PriceTag({
  price,
  label,
  className,
}: {
  price: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex flex-col items-start gap-1", className)}>
      {label && (
        <span className="eyebrow text-xs text-espresso/60">{label}</span>
      )}
      <span className="inline-block rounded-full bg-gold px-5 py-2 font-display text-2xl italic text-espresso md:text-3xl">
        {price}
      </span>
    </div>
  );
}

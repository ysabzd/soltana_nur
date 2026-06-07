import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow text-xs font-medium text-gold md:text-sm",
        className
      )}
    >
      {children}
    </p>
  );
}

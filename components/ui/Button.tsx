import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-cream hover:bg-terracotta/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
  secondary:
    "border border-gold text-espresso hover:bg-gold/10 hover:scale-[1.02]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20bd5a] hover:scale-[1.02] shadow-sm",
  ghost: "text-espresso hover:text-terracotta link-underline bg-transparent",
};

export function Button({
  variant = "primary",
  href,
  external,
  className,
  children,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    variants[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

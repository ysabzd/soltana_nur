"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { categoryNav } from "@/lib/content/navigation";

export function CategoryNav({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex flex-wrap items-center justify-center gap-x-1 gap-y-2", className)}
      aria-label="Catégories"
    >
      {categoryNav.map((item, i) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <span key={item.href} className="flex items-center">
            {i > 0 && (
              <span
                className={cn(
                  "mx-3 hidden text-xs sm:inline",
                  light ? "text-cream/40" : "text-espresso/25"
                )}
                aria-hidden
              >
                |
              </span>
            )}
            <Link
              href={item.href}
              className={cn(
                "nav-caps relative px-1 py-2 transition-colors",
                light
                  ? "text-cream/80 hover:text-cream"
                  : "text-espresso/70 hover:text-espresso",
                isActive &&
                  (light
                    ? "text-cream after:absolute after:bottom-0 after:left-1 after:right-1 after:h-px after:bg-cream"
                    : "text-espresso after:absolute after:bottom-0 after:left-1 after:right-1 after:h-px after:bg-espresso")
              )}
            >
              {item.label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}

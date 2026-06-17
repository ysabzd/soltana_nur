"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/content/navigation";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const overlayMode = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          overlayMode
            ? "bg-transparent"
            : "bg-cream/95 shadow-sm backdrop-blur-md"
        )}
      >
        <nav
          className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5 lg:px-10"
          aria-label="Navigation principale"
        >
          <div className="hidden lg:block" aria-hidden />

          <Link
            href="/"
            className={cn(
              "headline-slab text-center text-lg tracking-tight md:text-xl lg:text-2xl",
              overlayMode ? "text-cream" : "text-espresso"
            )}
          >
            Soltana Nur
          </Link>

          <div className="flex items-center justify-end gap-4 lg:gap-6">
            <Button
              href="/rejoindre"
              variant={overlayMode ? "secondary" : "primary"}
              className={cn(
                "!px-4 !py-2 nav-caps !text-[0.625rem] !tracking-[0.2em]",
                overlayMode &&
                  "!border-cream !bg-transparent !text-cream hover:!bg-cream/10"
              )}
            >
              Rejoindre
            </Button>
            <button
              type="button"
              className={cn(
                "flex items-center gap-2 nav-caps",
                overlayMode ? "text-cream" : "text-espresso"
              )}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
            >
              {menuOpen ? "Fermer" : "Menu"}
              {menuOpen ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <Menu className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="site-menu"
          className="fixed inset-0 z-[200] flex flex-col bg-cream"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="headline-slab text-xl text-espresso"
              onClick={() => setMenuOpen(false)}
            >
              Soltana Nur
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              className="flex items-center gap-2 nav-caps text-espresso"
            >
              Fermer
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 pb-10">
            <ul className="flex flex-col">
              {mainNav.map((item) =>
                "children" in item && item.children ? (
                  <li key={item.label} className="border-b border-espresso/10 py-5">
                    <span className="eyebrow mb-4 block text-gold">
                      {item.label}
                    </span>
                    <ul className="space-y-4 pl-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="font-display text-2xl text-espresso hover:text-terracotta"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href} className="border-b border-espresso/10">
                    <Link
                      href={item.href}
                      className="block py-5 font-display text-2xl text-espresso hover:text-terracotta"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="mt-10">
              <Button
                href="/rejoindre"
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Rejoindre les Pussycat Queens
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

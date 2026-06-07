"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/content/navigation";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="font-display text-xl text-espresso md:text-2xl"
        >
          Soltana Nur
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) =>
            "children" in item && item.children ? (
              <li key={item.label} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm text-espresso/80 transition-colors hover:text-terracotta"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </button>
                {dropdownOpen && (
                  <ul
                    className="absolute left-0 top-full mt-2 min-w-[220px] border border-espresso/10 bg-cream py-2 shadow-lg"
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-espresso hover:bg-gold/10 hover:text-terracotta"
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-sm text-espresso/80 transition-colors hover:text-terracotta"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
          <li>
            <Button href="/rejoindre" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Rejoindre les Pussycat Queens
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-espresso" />
          ) : (
            <Menu className="h-6 w-6 text-espresso" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-30 bg-cream lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-8">
            {mainNav.map((item) =>
              "children" in item && item.children ? (
                <li key={item.label}>
                  <span className="eyebrow mb-2 block text-xs text-gold">
                    {item.label}
                  </span>
                  <ul className="mb-4 ml-2 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 font-display text-2xl text-espresso"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 font-display text-2xl text-espresso"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li className="mt-6">
              <Button
                href="/rejoindre"
                variant="primary"
                className="w-full"
              >
                Rejoindre les Pussycat Queens
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

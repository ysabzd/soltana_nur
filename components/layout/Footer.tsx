import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { getSettings } from "@/lib/cms";
import { getSocialLinks } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export async function Footer() {
  const settings = await getSettings();
  const social = getSocialLinks(settings);

  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl md:text-4xl">{settings.siteName}</p>
            <p className="mt-2 text-sm text-cream/70">{settings.siteTagline}</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80">
              {settings.footerDescription}
            </p>
            <div className="mt-8">
              <WhatsAppCTA
                settings={settings}
                label={settings.footerWhatsappLabel}
                variant="cream"
                className="!text-sm"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-cream/80 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="flex gap-4">
              <a
                href={social.instagram}
                aria-label="Instagram"
                className="rounded-full border border-cream/20 p-3 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                className="rounded-full border border-cream/20 p-3 transition-colors hover:border-gold hover:text-gold"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={social.tiktok}
                aria-label="TikTok"
                className="rounded-full border border-cream/20 p-3 transition-colors hover:border-gold hover:text-gold"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {settings.siteName}. Tous droits réservés.</p>
          <p>{settings.siteTagline}</p>
        </div>
      </div>
    </footer>
  );
}

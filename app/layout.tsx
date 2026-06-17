import type { Metadata } from "next";
import { Fraunces, Inter, Roboto_Slab } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { LenisProvider } from "@/providers/LenisProvider";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${robotoSlab.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-cream font-sans text-espresso antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <LenisProvider>
          <GrainOverlay />
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

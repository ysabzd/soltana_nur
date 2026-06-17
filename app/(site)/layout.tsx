import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { LenisProvider } from "@/providers/LenisProvider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisProvider>
      <GrainOverlay />
      <Nav />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </LenisProvider>
  );
}

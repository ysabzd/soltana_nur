import { HeroSection } from "@/components/sections/home/HeroSection";
import { TickerSection } from "@/components/sections/home/TickerSection";
import { ManifestoSection } from "@/components/sections/home/ManifestoSection";
import { PourQuiSection } from "@/components/sections/home/PourQuiSection";
import { ExperiencesSection } from "@/components/sections/home/ExperiencesSection";
import { AboutTeaserSection } from "@/components/sections/home/AboutTeaserSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { BlogTeaserSection } from "@/components/sections/home/BlogTeaserSection";
import { CommunityCTASection } from "@/components/sections/home/CommunityCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerSection />
      <ManifestoSection />
      <PourQuiSection />
      <ExperiencesSection />
      <AboutTeaserSection />
      <TestimonialsSection />
      <BlogTeaserSection />
      <CommunityCTASection />
    </>
  );
}

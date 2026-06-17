import { HeroSection } from "@/components/sections/home/HeroSection";
import { TickerSection } from "@/components/sections/home/TickerSection";
import { ManifestoSection } from "@/components/sections/home/ManifestoSection";
import { PourQuiSection } from "@/components/sections/home/PourQuiSection";
import { ExperiencesSection } from "@/components/sections/home/ExperiencesSection";
import { AboutTeaserSection } from "@/components/sections/home/AboutTeaserSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { BlogTeaserSection } from "@/components/sections/home/BlogTeaserSection";
import { CommunityCTASection } from "@/components/sections/home/CommunityCTASection";
import {
  getHome,
  getSettings,
  getTestimonials,
  getLatestPosts,
} from "@/lib/cms";

export default async function HomePage() {
  const [home, settings, testimonials, posts] = await Promise.all([
    getHome(),
    getSettings(),
    getTestimonials(),
    getLatestPosts(3),
  ]);

  return (
    <>
      <HeroSection content={home} />
      <TickerSection phrases={settings.tickerPhrases} />
      <ManifestoSection content={home} />
      <PourQuiSection content={home} />
      <ExperiencesSection content={home} />
      <AboutTeaserSection content={home} />
      <TestimonialsSection content={home} testimonials={testimonials} />
      <BlogTeaserSection content={home} posts={posts} />
      <CommunityCTASection content={home} settings={settings} />
    </>
  );
}

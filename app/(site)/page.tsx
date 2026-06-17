import { HeroSection } from "@/components/sections/home/HeroSection";
import { PourQuiSection } from "@/components/sections/home/PourQuiSection";
import { ExperiencesSection } from "@/components/sections/home/ExperiencesSection";
import { AboutTeaserSection } from "@/components/sections/home/AboutTeaserSection";
import { GoogleReviewsSection } from "@/components/sections/home/GoogleReviewsSection";
import { BlogTeaserSection } from "@/components/sections/home/BlogTeaserSection";
import { CommunityCTASection } from "@/components/sections/home/CommunityCTASection";
import {
  getHome,
  getSettings,
  getLatestPosts,
} from "@/lib/cms";

export default async function HomePage() {
  const [home, settings, posts] = await Promise.all([
    getHome(),
    getSettings(),
    getLatestPosts(3),
  ]);

  return (
    <>
      <HeroSection content={home} />
      <AboutTeaserSection content={home} />
      <PourQuiSection content={home} />
      <ExperiencesSection content={home} />
      <GoogleReviewsSection content={home} settings={settings} />
      <BlogTeaserSection content={home} posts={posts} />
      <CommunityCTASection content={home} settings={settings} />
    </>
  );
}

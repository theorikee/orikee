import type { Metadata } from "next";

import { EditorialBanner } from "@/components/home/editorial-banner";
import { Hero } from "@/components/home/hero";
import { HomeShowcase } from "@/components/home/home-showcase";
import { ServicesStrip } from "@/components/home/services-strip";
import { StoryBanner } from "@/components/home/story-banner";
import {
  demoCategories,
  demoProducts,
} from "@/lib/orikee-demo";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeShowcase
        categories={demoCategories}
        productsByCategory={demoProducts}
      />
      <EditorialBanner />
      <StoryBanner />
      <ServicesStrip />
    </>
  );
}

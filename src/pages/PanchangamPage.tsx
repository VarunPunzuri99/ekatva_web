import { HomeAppCta } from "@/components/home/HomeAppCta";
import { PanchangamGuide } from "@/components/panchangam/PanchangamGuide";
import { PanchangamHero } from "@/components/panchangam/PanchangamHero";
import { PanchangamHighlights } from "@/components/panchangam/PanchangamHighlights";
import { PanchangamToday } from "@/components/panchangam/PanchangamToday";
import {
  PanchangamIntro,
  PanchangamWisdomMerits,
} from "@/components/panchangam/PanchangamWisdom";

export function PanchangamPage() {
  return (
    <main>
      <PanchangamHero />
      <PanchangamIntro />
      <PanchangamWisdomMerits />
      <PanchangamHighlights />
      <PanchangamToday />
      <PanchangamGuide />
      <HomeAppCta />
    </main>
  );
}

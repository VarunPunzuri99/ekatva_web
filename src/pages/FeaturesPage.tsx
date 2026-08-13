import { Helmet } from "react-helmet-async";
import { FeaturesGrid } from "@/components/features/FeaturesGrid";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { FEATURES_CTA } from "@/content/features";

export function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>Features | Ekatva</title>
        <meta
          name="description"
          content="Explore Ekatva features — ePandit, ePradakshina, eAstro, eJapa, eWish, eDisti, ePanchangam and more for your spiritual journey."
        />
      </Helmet>
      <main className="bg-white" style={{ backgroundColor: "#FFFFFF" }}>
        <FeaturesHero />
        <FeaturesGrid />
        <HomeAppCta
          title={FEATURES_CTA.title}
          subtitle={FEATURES_CTA.subtitle}
        />
      </main>
    </>
  );
}

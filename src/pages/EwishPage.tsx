import { Helmet } from "react-helmet-async";
import { EwishBenefits } from "@/components/ewish/EwishBenefits";
import { EwishFeatures } from "@/components/ewish/EwishFeatures";
import { EwishHero } from "@/components/ewish/EwishHero";
import { EwishIntro } from "@/components/ewish/EwishIntro";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { EWISH_CTA } from "@/content/ewish";

export function EwishPage() {
  return (
    <>
      <Helmet>
        <title>eWish | Ekatva</title>
        <meta
          name="description"
          content="eWish — submit heartfelt wishes and sankalpas to the Divine, track progress, and receive personalized spiritual recommendations with Ekatva."
        />
      </Helmet>
      <main>
        <EwishHero />
        <EwishIntro />
        <EwishFeatures />
        <EwishBenefits />
        <HomeAppCta title={EWISH_CTA.title} subtitle={EWISH_CTA.subtitle} />
      </main>
    </>
  );
}

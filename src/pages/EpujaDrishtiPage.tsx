import { Helmet } from "react-helmet-async";
import { DrishtiAbout } from "@/components/epuja/DrishtiAbout";
import { DrishtiBenefits } from "@/components/epuja/DrishtiBenefits";
import { DrishtiHero } from "@/components/epuja/DrishtiHero";
import { DrishtiIdealFor } from "@/components/epuja/DrishtiIdealFor";
import { DrishtiIncludes } from "@/components/epuja/DrishtiIncludes";
import { DrishtiIntroMeta } from "@/components/epuja/DrishtiIntroMeta";
import { DrishtiTabs } from "@/components/epuja/DrishtiTabs";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { DRISHTI_CTA, DRISHTI_HERO } from "@/content/epujaDrishti";

export function EpujaDrishtiPage() {
  return (
    <>
      <Helmet>
        <title>{DRISHTI_HERO.title} | ePuja | Ekatva</title>
        <meta
          name="description"
          content={`${DRISHTI_HERO.subtitle}. ${DRISHTI_HERO.title} — book authentic Vedic rituals with verified pandits on Ekatva.`}
        />
      </Helmet>
      <main>
        <DrishtiHero />
        <DrishtiIntroMeta />
        <DrishtiAbout />
        <DrishtiBenefits />
        <DrishtiIncludes />
        <DrishtiIdealFor />
        <DrishtiTabs />
        <HomeAppCta title={DRISHTI_CTA.title} subtitle={DRISHTI_CTA.subtitle} />
      </main>
    </>
  );
}

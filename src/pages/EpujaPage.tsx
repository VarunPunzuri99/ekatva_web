import { Helmet } from "react-helmet-async";
import { EpujaHero } from "@/components/epuja/EpujaHero";
import { EpujaHow } from "@/components/epuja/EpujaHow";
import { EpujaIntro } from "@/components/epuja/EpujaIntro";
import { EpujaPopular } from "@/components/epuja/EpujaPopular";
import { EpujaShowcase } from "@/components/epuja/EpujaShowcase";
import { EpujaTrust } from "@/components/epuja/EpujaTrust";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { EPUJA_CTA } from "@/content/epuja";

export function EpujaPage() {
  return (
    <>
      <Helmet>
        <title>ePuja | Ekatva</title>
        <meta
          name="description"
          content="ePuja — book authentic Vedic pujas performed by qualified pandits. Sacred rituals made simple, anytime, anywhere."
        />
      </Helmet>
      <main>
        <EpujaHero />
        <EpujaIntro />
        <EpujaPopular />
        <EpujaHow />
        <EpujaTrust />
        <EpujaShowcase />
        <HomeAppCta title={EPUJA_CTA.title} subtitle={EPUJA_CTA.subtitle} />
      </main>
    </>
  );
}

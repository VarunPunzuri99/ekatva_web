import { Helmet } from "react-helmet-async";
import { EpradakshinaHero } from "@/components/epradakshina/EpradakshinaHero";
import { EpradakshinaHow } from "@/components/epradakshina/EpradakshinaHow";
import { EpradakshinaIntro } from "@/components/epradakshina/EpradakshinaIntro";
import { EpradakshinaShowcase } from "@/components/epradakshina/EpradakshinaShowcase";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { EPRADAKSHINA_CTA } from "@/content/epradakshina";

export function EpradakshinaPage() {
  return (
    <>
      <Helmet>
        <title>ePradakshina | Ekatva</title>
        <meta
          name="description"
          content="ePradakshina — offer virtual pradakshina to your chosen deities and temples. Walk in devotion and receive divine grace from anywhere."
        />
      </Helmet>
      <main>
        <EpradakshinaHero />
        <EpradakshinaIntro />
        <EpradakshinaHow />
        <EpradakshinaShowcase />
        <HomeAppCta
          title={EPRADAKSHINA_CTA.title}
          subtitle={EPRADAKSHINA_CTA.subtitle}
        />
      </main>
    </>
  );
}

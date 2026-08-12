import { Helmet } from "react-helmet-async";
import { EdistiHero } from "@/components/edisti/EdistiHero";
import { EdistiIntro } from "@/components/edisti/EdistiIntro";
import { EdistiRituals } from "@/components/edisti/EdistiRituals";
import { EdistiShowcase } from "@/components/edisti/EdistiShowcase";
import { EdistiTrust } from "@/components/edisti/EdistiTrust";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { EDISTI_CTA } from "@/content/edisti";

export function EdistiPage() {
  return (
    <>
      <Helmet>
        <title>eDisti | Ekatva</title>
        <meta
          name="description"
          content="eDisti — authentic Vedic Disti rituals to remove negativity and invite peace, protection and prosperity for your home and loved ones."
        />
      </Helmet>
      <main>
        <EdistiHero />
        <EdistiIntro />
        <EdistiShowcase />
        <EdistiRituals />
        <EdistiTrust />
        <HomeAppCta title={EDISTI_CTA.title} subtitle={EDISTI_CTA.subtitle} />
      </main>
    </>
  );
}

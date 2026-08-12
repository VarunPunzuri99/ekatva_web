import { Helmet } from "react-helmet-async";
import { EjapaBlessings } from "@/components/ejapa/EjapaBlessings";
import { EjapaHero } from "@/components/ejapa/EjapaHero";
import { EjapaHowAndLibrary } from "@/components/ejapa/EjapaHowAndLibrary";
import { EjapaIntro } from "@/components/ejapa/EjapaIntro";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { EJAPA_CTA } from "@/content/ejapa";

export function EjapaPage() {
  return (
    <>
      <Helmet>
        <title>eJapa | Ekatva</title>
        <meta
          name="description"
          content="eJapa — chant sacred mantras, track your practice, and invite peace, healing, and blessings with Ekatva."
        />
      </Helmet>
      <main>
        <EjapaHero />
        <EjapaIntro />
        <EjapaBlessings />
        <EjapaHowAndLibrary />
        <HomeAppCta title={EJAPA_CTA.title} subtitle={EJAPA_CTA.subtitle} />
      </main>
    </>
  );
}

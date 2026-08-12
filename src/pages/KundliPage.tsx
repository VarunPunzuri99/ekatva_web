import { Helmet } from "react-helmet-async";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { KundliHero } from "@/components/kundli/KundliHero";
import { KundliIntro } from "@/components/kundli/KundliIntro";
import { KundliMethodology } from "@/components/kundli/KundliMethodology";
import { KundliReport } from "@/components/kundli/KundliReport";
import { KundliShowcase } from "@/components/kundli/KundliShowcase";
import { KundliTrustBar } from "@/components/kundli/KundliTrustBar";

export function KundliPage() {
  return (
    <>
      <Helmet>
        <title>Kundli | Ekatva</title>
        <meta
          name="description"
          content="Generate your accurate Vedic Kundli with Ekatva — charts, KP analysis, dashas, life aspects, and personalized remedies."
        />
      </Helmet>
      <main>
        <KundliHero />
        <KundliIntro />
        <KundliMethodology />
        <KundliShowcase />
        <KundliTrustBar />
        <KundliReport />
        <HomeAppCta />
      </main>
    </>
  );
}

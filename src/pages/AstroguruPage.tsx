import { Helmet } from "react-helmet-async";
import { AstroguruHero } from "@/components/astroguru/AstroguruHero";
import { AstroguruIntro } from "@/components/astroguru/AstroguruIntro";
import { AstroguruShowcase } from "@/components/astroguru/AstroguruShowcase";
import { AstroguruWhy } from "@/components/astroguru/AstroguruWhy";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { ASTROGURU_CTA } from "@/content/astroguru";

export function AstroguruPage() {
  return (
    <>
      <Helmet>
        <title>eAstroGuru | Ekatva</title>
        <meta
          name="description"
          content="eAstroGuru — personalized AI-powered astrological guidance. Ask life's important questions and move ahead with clarity and confidence."
        />
      </Helmet>
      <main>
        <AstroguruHero />
        <AstroguruIntro />
        <AstroguruShowcase />
        <AstroguruWhy />
        <HomeAppCta
          title={ASTROGURU_CTA.title}
          subtitle={ASTROGURU_CTA.subtitle}
        />
      </main>
    </>
  );
}

import { Helmet } from "react-helmet-async";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { TermsHelp } from "@/components/terms/TermsHelp";
import { TermsHero } from "@/components/terms/TermsHero";
import { TermsNote } from "@/components/terms/TermsNote";
import { TermsSections } from "@/components/terms/TermsSections";
import { TERMS_CTA, TERMS_HERO } from "@/content/terms";

export function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Ekatva</title>
        <meta name="description" content={TERMS_HERO.subtitle} />
      </Helmet>
      <main>
        <TermsHero />
        <TermsSections />
        <TermsNote />
        <TermsHelp />
        <HomeAppCta title={TERMS_CTA.title} subtitle={TERMS_CTA.subtitle} />
      </main>
    </>
  );
}

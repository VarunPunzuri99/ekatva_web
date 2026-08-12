import { Helmet } from "react-helmet-async";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { PrivacyHelp } from "@/components/privacy/PrivacyHelp";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyPrinciples } from "@/components/privacy/PrivacyPrinciples";
import { PrivacySections } from "@/components/privacy/PrivacySections";
import { PrivacyTrust } from "@/components/privacy/PrivacyTrust";
import { PRIVACY_CTA, PRIVACY_INTRO } from "@/content/privacy";

export function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ekatva</title>
        <meta name="description" content={PRIVACY_INTRO} />
      </Helmet>
      <main>
        <PrivacyHero />
        <PrivacyPrinciples />
        <PrivacySections />
        <PrivacyTrust />
        <PrivacyHelp />
        <HomeAppCta title={PRIVACY_CTA.title} subtitle={PRIVACY_CTA.subtitle} />
      </main>
    </>
  );
}

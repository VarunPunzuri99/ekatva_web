import { Helmet } from "react-helmet-async";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { RefundHelp } from "@/components/refund/RefundHelp";
import { RefundHero } from "@/components/refund/RefundHero";
import { RefundIntro } from "@/components/refund/RefundIntro";
import { RefundNote } from "@/components/refund/RefundNote";
import { RefundSections } from "@/components/refund/RefundSections";
import { REFUND_CTA, REFUND_HERO } from "@/content/refund";

export function RefundPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Cancellation & Refund Policy | Ekatva</title>
        <meta name="description" content={REFUND_HERO.subtitle} />
      </Helmet>
      <main>
        <RefundHero />
        <RefundIntro />
        <RefundSections />
        <RefundNote />
        <RefundHelp />
        <HomeAppCta title={REFUND_CTA.title} subtitle={REFUND_CTA.subtitle} />
      </main>
    </>
  );
}

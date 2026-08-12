import { Helmet } from "react-helmet-async";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqList } from "@/components/faq/FaqList";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { FAQ_CTA, FAQ_HERO } from "@/content/faq";

export function FaqPage() {
  return (
    <>
      <Helmet>
        <title>FAQ | Ekatva</title>
        <meta name="description" content={FAQ_HERO.subtitle} />
      </Helmet>
      <main>
        <FaqHero />
        <FaqList />
        <HomeAppCta title={FAQ_CTA.title} subtitle={FAQ_CTA.subtitle} />
      </main>
    </>
  );
}

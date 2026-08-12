import { Helmet } from "react-helmet-async";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutWhy } from "@/components/about/AboutWhy";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { ABOUT_CTA } from "@/content/about";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Ekatva</title>
        <meta
          name="description"
          content="Uniting devotion and empowering your spiritual journey. Learn about Ekatva's mission, vision, values, and why devotees trust our platform."
        />
      </Helmet>
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutMissionVision />
        <AboutValues />
        <AboutWhy />
        <HomeAppCta title={ABOUT_CTA.title} subtitle={ABOUT_CTA.subtitle} />
      </main>
    </>
  );
}

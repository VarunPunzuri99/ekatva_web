import { BackToTopButton } from "@/components/home/BackToTopButton";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { HomeAstroGuru } from "@/components/home/HomeAstroGuru";
import { HomeEvents } from "@/components/home/HomeEvents";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeFreshStart } from "@/components/home/HomeFreshStart";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHowHelps } from "@/components/home/HomeHowHelps";
import { HomeMotionProvider } from "@/components/home/HomeMotionProvider";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSocialTestimonials } from "@/components/home/HomeSocialTestimonials";
import { HomeWhyChoose } from "@/components/home/HomeWhyChoose";

export function HomePage() {
  return (
    <HomeMotionProvider>
      <HomeFreshStart />
      <div className="min-h-screen bg-white font-home text-home-text antialiased">
        <HomeHeader />
        <main>
          <HomeHero />
          <HomeServices />
          <HomeHowHelps />
          <HomeAstroGuru />
          <HomeWhyChoose />
          <HomeSocialTestimonials />
          <HomeEvents />
          <HomeAppCta />
        </main>
        <HomeFooter />
        <BackToTopButton />
      </div>
    </HomeMotionProvider>
  );
}

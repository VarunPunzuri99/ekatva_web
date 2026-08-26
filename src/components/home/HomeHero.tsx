import { m, useInView, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";
import { homeAssets } from "@/assets/home";
import { StoreBadge, StoreQr } from "@/components/home/StoreBadges";
import {
  fadeUp,
  floatingMotion,
  heroStagger,
  scaleIn,
} from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Full golden misty landscape with temple on the right (matches UX mock). */
const HERO_LANDSCAPE = "/assets/hero-bg.png";

export function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  const phonesInView = useInView(phonesRef, { amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 36]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative w-full overflow-hidden bg-white"
      aria-labelledby="home-hero-heading"
    >
      <m.div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={HERO_LANDSCAPE}
          alt=""
          className="absolute inset-0 h-full w-full min-w-full object-cover object-center"
        />

        {/* Soft left wash for text readability — temple stays visible full-bleed */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,252,245,0.55) 18%, rgba(255,248,235,0.22) 34%, rgba(255,248,235,0.06) 48%, transparent 62%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </m.div>

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1fr_1.15fr] lg:gap-4 lg:px-8 lg:py-[4.5rem] xl:max-w-[1320px] xl:gap-10 xl:px-16 xl:py-20 2xl:max-w-[1440px] 2xl:gap-14 2xl:px-24">
        <m.div
          className="max-w-[34rem] xl:max-w-[40rem] 2xl:max-w-[44rem]"
          variants={heroStagger}
          initial={reduced ? false : "hidden"}
          animate="visible"
        >
          <m.h1
            id="home-hero-heading"
            variants={fadeUp}
            className="font-home text-[2.15rem] leading-[1.18] font-bold tracking-tight text-[#1A1A1A] sm:text-[2.65rem] lg:text-[3.15rem] xl:text-[3.5rem] 2xl:text-[3.85rem]"
          >
            Your{" "}
            <span className="text-[#F27022]">Spiritual Companion</span>{" "}
            Everyday
          </m.h1>

          <m.p
            variants={fadeUp}
            className="mt-4 max-w-md font-home text-[14px] leading-relaxed text-[#4B5563] sm:text-[15px] xl:mt-5 xl:max-w-lg xl:text-base 2xl:text-lg"
          >
            Ekatva connects Devotees, Pujaris &amp; Traditions in one divine
            platform.
          </m.p>

          <m.a
            href="#download"
            variants={scaleIn}
            className="btn-shine mt-7 inline-flex items-center gap-2.5 rounded-lg bg-[#F27022] px-6 py-3.5 font-home text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(242,112,34,0.28)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#E06518] hover:shadow-[0_12px_28px_rgba(242,112,34,0.34)] active:translate-y-0 xl:mt-8 xl:px-7 xl:py-4 xl:text-base"
          >
            Download App
            <Download
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 xl:h-[1.15rem] xl:w-[1.15rem]"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </m.a>

          <m.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-start gap-6 sm:gap-8 xl:mt-8 xl:gap-10"
          >
            <div className="flex flex-col items-start gap-2.5">
              <StoreQr
                store="google"
                className="h-[78px] w-[78px] xl:h-[88px] xl:w-[88px]"
              />
              <StoreBadge store="google" />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <StoreQr
                store="apple"
                className="h-[78px] w-[78px] xl:h-[88px] xl:w-[88px]"
              />
              <StoreBadge store="apple" />
            </div>
          </m.div>
        </m.div>

        <m.div
          ref={phonesRef}
          className="relative mx-auto w-full max-w-[540px] lg:max-w-none lg:pr-2 xl:pr-0"
          initial={reduced ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.25,
          }}
        >
          <m.div style={{ y: phoneY }}>
            <m.img
              src={homeAssets.bannerImage}
              alt="Ekatva mobile app screens on three phones"
              className="relative z-10 mx-auto block w-[90%] max-w-[500px] object-contain drop-shadow-[0_24px_50px_rgba(31,41,55,0.22)] sm:w-[86%] lg:ml-0 lg:w-[84%] xl:max-w-[560px] xl:w-[88%] 2xl:max-w-[620px]"
              loading="eager"
              fetchPriority="high"
              animate={
                reduced || !phonesInView ? { y: 0 } : floatingMotion
              }
            />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

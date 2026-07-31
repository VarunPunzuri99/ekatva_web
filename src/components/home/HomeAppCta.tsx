import { m } from "framer-motion";
import { homeAssets } from "@/assets/home";
import { QrPlaceholder, StoreBadge } from "@/components/home/StoreBadges";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function HomeAppCta() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16 xl:py-16"
      aria-labelledby="app-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 0% 35%, #FFE566 0%, #FFD54A 18%, #FFF3C4 42%, rgba(255,255,255,0) 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[42%] max-w-[520px]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,214,80,0.55) 0%, rgba(255,236,160,0.28) 45%, rgba(255,255,255,0) 100%)",
        }}
      />

      <m.div
        className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_auto_1.15fr] lg:gap-8 lg:px-8 xl:max-w-[1320px] xl:gap-10 xl:px-16 2xl:max-w-[1440px] 2xl:gap-12 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <m.div className="max-w-md xl:max-w-lg" variants={fadeLeft}>
          <h2
            id="app-cta-heading"
            className="font-home text-[1.75rem] font-bold leading-[1.25] tracking-tight text-[#1A1A1A] sm:text-[2rem] lg:text-[2.15rem] xl:text-[2.35rem]"
          >
            Bring your Spiritual Journey with Ekatva today.
          </h2>
          <p className="mt-3 font-home text-[14px] text-[#5C5C5C] sm:text-[15px] xl:mt-4 xl:text-base">
            Your faith. Our platform. Divine blessings.
          </p>
        </m.div>

        <m.div
          className="flex flex-wrap items-start gap-5 sm:gap-6 lg:justify-center"
          variants={fadeUp}
        >
          <div className="flex flex-col items-center gap-2.5">
            <QrPlaceholder label="Google Play QR code" className="h-20 w-20" />
            <StoreBadge store="google" />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <QrPlaceholder label="App Store QR code" className="h-20 w-20" />
            <StoreBadge store="apple" />
          </div>
        </m.div>

        <m.div
          className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
          variants={fadeRight}
        >
          <img
            src={homeAssets.templeBackground}
            alt="Sacred riverside temples and ghats"
            className="mx-auto h-auto w-full max-w-[480px] object-contain object-top lg:max-w-none lg:w-[105%] lg:translate-x-2"
            loading="lazy"
          />
        </m.div>
      </m.div>
    </section>
  );
}

import { m } from "framer-motion";
import { Check } from "lucide-react";
import { homeAssets } from "@/assets/home";
import { HOME_HELP_POINTS } from "@/content/home";
import {
  fadeRight,
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function HomeHowHelps() {
  return (
    <section
      id="features"
      className="bg-white py-10 sm:py-14 lg:py-16"
      aria-labelledby="how-helps-heading"
    >
      <div id="panchangam" className="sr-only" aria-hidden="true" />
      <div id="kundli" className="sr-only" aria-hidden="true" />
      <div id="blog" className="sr-only" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            id="how-helps-heading"
            variants={fadeUp}
            className="font-home text-2xl font-semibold text-home-orange sm:text-[1.75rem] lg:text-[2rem]"
          >
            How Ekatva Helps in Daily Life
          </m.h2>
          <ul className="mt-6 space-y-3.5 sm:mt-8 sm:space-y-4">
            {HOME_HELP_POINTS.map((point) => (
              <m.li
                key={point}
                variants={fadeUpSoft}
                className="flex items-start gap-3"
              >
                <m.span
                  variants={fadeUpSoft}
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-home-orange text-white"
                >
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </m.span>
                <span className="font-home text-sm leading-relaxed text-home-text sm:text-[15px]">
                  {point}
                </span>
              </m.li>
            ))}
          </ul>
        </m.div>

        <m.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src={homeAssets.manPraying}
            alt="Devotee in prayer with temple and floral motifs"
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </m.div>
      </div>
    </section>
  );
}

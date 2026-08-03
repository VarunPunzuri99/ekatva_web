import { m } from "framer-motion";
import { CalendarDays, Check } from "lucide-react";
import {
  MandalaMark,
  StarMark,
} from "@/components/panchangam/PanchangamIcons";
import {
  PANCHANGAM_INTRO,
  PANCHANGAM_MERITS,
  PANCHANGAM_WISDOM,
} from "@/content/panchangam";
import {
  easeOutExpo,
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function PanchangamIntro() {
  return (
    <section className="bg-white pb-10 pt-2 sm:pb-12 lg:pb-14" aria-label="Introduction">
      <m.p
        className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {PANCHANGAM_INTRO}
      </m.p>
    </section>
  );
}

export function PanchangamWisdomMerits() {
  return (
    <section
      className="bg-[#FFF8EE] py-12 sm:py-14 lg:py-16"
      aria-label="About Panchangam"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 xl:max-w-[1320px] xl:gap-20 xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex items-center gap-2">
            <MandalaMark className="h-5 w-5 text-[#F27022]" />
            <p className="font-home text-[11px] font-bold tracking-[0.16em] text-[#F27022] uppercase sm:text-[12px]">
              {PANCHANGAM_WISDOM.eyebrow}
            </p>
          </div>
          <h2 className="mt-3 font-home-display text-[1.55rem] leading-tight font-semibold text-[#8B2E28] sm:text-[1.75rem] lg:text-[1.9rem]">
            {PANCHANGAM_WISDOM.title}
          </h2>
          <div className="mt-4 space-y-4">
            {PANCHANGAM_WISDOM.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]"
              >
                {p}
              </p>
            ))}
          </div>
          <m.a
            href="#panchangam-guide"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-[#8B2E28]/70 bg-white px-4 py-2.5 font-home text-[13px] font-semibold text-[#8B2E28] transition-[transform,background-color,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#F27022] hover:bg-[#FFF8EE] hover:shadow-[0_8px_20px_rgba(139,46,40,0.1)] sm:text-[14px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
          >
            <CalendarDays className="h-4 w-4" strokeWidth={1.8} />
            {PANCHANGAM_WISDOM.cta}
          </m.a>
        </m.div>

        <m.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex items-center gap-2">
            <StarMark className="h-5 w-5 text-[#F27022]" />
            <p className="font-home text-[11px] font-bold tracking-[0.16em] text-[#F27022] uppercase sm:text-[12px]">
              {PANCHANGAM_MERITS.eyebrow}
            </p>
          </div>
          <h2 className="mt-3 font-home-display text-[1.55rem] leading-tight font-semibold text-[#8B2E28] sm:text-[1.75rem] lg:text-[1.9rem]">
            {PANCHANGAM_MERITS.title}
          </h2>
          <m.ul
            className="mt-6 space-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {PANCHANGAM_MERITS.items.map((item) => (
              <m.li
                key={item.title}
                variants={fadeUp}
                className="flex gap-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: easeOutExpo }}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8B2E28] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <p className="font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
                  <span className="font-bold text-[#8B2E28]">{item.title}</span>{" "}
                  {item.text}
                </p>
              </m.li>
            ))}
          </m.ul>
        </m.div>
      </div>
    </section>
  );
}

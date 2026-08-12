import { m } from "framer-motion";
import { Check, Info } from "lucide-react";
import { DRISHTI_INCLUDES } from "@/content/epujaDrishti";
import {
  easeOutExpo,
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function DrishtiIncludes() {
  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="drishti-includes-heading"
    >
      <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:px-8 xl:max-w-[1320px] xl:gap-14 xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.div variants={fadeUp} className="text-center lg:text-left">
            <h2
              id="drishti-includes-heading"
              className="font-home-display text-[1.4rem] font-semibold text-[#8B2E28] sm:text-[1.65rem]"
            >
              {DRISHTI_INCLUDES.title}
            </h2>
            <div
              className="mx-auto mt-2.5 h-[3px] w-14 rounded-full bg-[#F27022] lg:mx-0"
              aria-hidden
            />
          </m.div>

          <m.ul
            className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-3.5"
            variants={staggerContainer}
          >
            {DRISHTI_INCLUDES.items.map((label) => (
              <m.li key={label} variants={fadeUp} className="list-none">
                <m.div
                  className="flex items-center gap-3 rounded-[12px] border border-[#E8DFD2] bg-white px-3.5 py-3.5 shadow-[0_2px_8px_rgba(31,41,55,0.03)]"
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3E6] text-[#F27022]">
                    <Check className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                  </span>
                  <span className="font-home text-[13px] font-bold text-[#5C2A1A] sm:text-[14px]">
                    {label}
                  </span>
                </m.div>
              </m.li>
            ))}
          </m.ul>

          <m.div
            variants={fadeUp}
            className="mt-5 flex items-start gap-2.5 rounded-[12px] bg-[#FEF5E7] px-4 py-3.5"
          >
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[#F27022]"
              strokeWidth={2}
              aria-hidden
            />
            <p className="font-home text-[12px] leading-relaxed text-[#5C4A3A] sm:text-[13px]">
              {DRISHTI_INCLUDES.materialsNote}
            </p>
          </m.div>
        </m.div>

        <m.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[18px] lg:mx-0 lg:max-w-none lg:justify-self-end"
        >
          <m.img
            src={DRISHTI_INCLUDES.image}
            alt="Drishti Nivarana Pooja deity"
            className="aspect-[4/5] w-full object-cover"
            style={{ objectPosition: DRISHTI_INCLUDES.imagePosition }}
            loading="lazy"
            variants={fadeLeft}
          />
        </m.div>
      </div>
    </section>
  );
}

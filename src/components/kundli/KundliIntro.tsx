import { m } from "framer-motion";
import { KUNDLI_INTRO } from "@/content/kundli";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function KundliIntro() {
  return (
    <section
      className="bg-white pb-10 pt-2 sm:pb-12 lg:pb-14"
      aria-label="Kundli introduction"
    >
      <m.p
        className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {KUNDLI_INTRO}
      </m.p>
    </section>
  );
}

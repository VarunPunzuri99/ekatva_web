import { m } from "framer-motion";
import { EWISH_INTRO } from "@/content/ewish";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function EwishIntro() {
  return (
    <section
      className="bg-white pb-10 pt-2 sm:pb-12 lg:pb-14"
      aria-label="eWish introduction"
    >
      <m.p
        className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {EWISH_INTRO}
      </m.p>
    </section>
  );
}

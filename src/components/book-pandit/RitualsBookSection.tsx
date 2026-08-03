import { m } from "framer-motion";
import kundaArt from "@/assets/images/kunda_pic.png";
import { RitualGlyph } from "@/components/book-pandit/RitualIcons";
import { BOOK_PANDIT_RITUALS } from "@/content/bookPanditRituals";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function RitualsBookSection() {
  return (
    <section
      className="border-y border-[#F5D9B0] bg-[#FFFBF5]"
      aria-labelledby="rituals-book-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.7fr)] lg:gap-12 xl:gap-16">
          <m.div
            className="flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <m.p
              variants={fadeUp}
              className="font-home text-[11px] font-bold tracking-[0.18em] text-[#A85A32] uppercase sm:text-[12px]"
            >
              Rituals You Can Book
            </m.p>
            <m.h2
              id="rituals-book-heading"
              variants={fadeUp}
              className="mt-2.5 max-w-[14ch] font-home-display text-[1.75rem] leading-[1.2] font-semibold text-[#801B1B] sm:text-[2rem] lg:text-[2.15rem]"
            >
              Pujas, Homams &amp; Ceremonies
            </m.h2>
            <m.p
              variants={fadeUp}
              className="mt-3.5 max-w-[34ch] font-home text-[13px] leading-relaxed text-[#666666] sm:text-[14px]"
            >
              Choose from a wide range of traditional ceremonies conducted with
              strict adherence to Vedic scriptures.
            </m.p>

            <m.div
              variants={fadeUp}
              className="mt-8 flex justify-center isolate lg:mt-10 lg:justify-start"
            >
              <img
                src={kundaArt}
                alt=""
                className="h-auto w-[210px] object-contain sm:w-[240px] lg:w-[260px] xl:w-[280px]"
                style={{ mixBlendMode: "screen" }}
                loading="lazy"
                width={280}
                height={320}
              />
            </m.div>
          </m.div>

          <m.ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {BOOK_PANDIT_RITUALS.map((ritual) => (
              <m.li key={ritual.id} variants={fadeUp} className="list-none">
                <article className="group flex h-full flex-col items-center rounded-[12px] border border-[#F0DCC4] bg-[#FFF8EE] px-3 py-5 text-center shadow-[0_2px_8px_rgba(128,27,27,0.04)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#E8C9A0] hover:bg-[#FFF3E0] hover:shadow-[0_8px_20px_rgba(128,27,27,0.08)] sm:px-4 sm:py-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] sm:h-12 sm:w-12">
                    <RitualGlyph
                      icon={ritual.icon}
                      className="h-[22px] w-[22px] text-[#C45A3A] sm:h-6 sm:w-6"
                    />
                  </div>
                  <p className="mt-3 font-home text-[12px] leading-snug font-medium text-[#444444] sm:text-[13px]">
                    {ritual.label}
                  </p>
                </article>
              </m.li>
            ))}
          </m.ul>
        </div>
      </div>
    </section>
  );
}

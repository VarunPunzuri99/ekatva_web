import { m } from "framer-motion";
import kundaArt from "@/assets/images/kunda_pic.png";
import { BOOK_PANDIT_RITUALS } from "@/content/bookPanditRituals";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

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
              <m.li key={ritual.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#E8C9A0]/80 bg-white shadow-[0_4px_16px_rgba(128,27,27,0.06)] transition-[box-shadow] duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 14px 32px rgba(128,27,27,0.12)",
                  }}
                  transition={{ duration: 0.35, ease: easeOutExpo }}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#F5E6D3] sm:aspect-[4/3]">
                    <img
                      src={ritual.image}
                      alt=""
                      className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${ritual.imageClassName ?? ""}`}
                      style={{
                        objectPosition: ritual.focus ?? "center top",
                      }}
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="px-2.5 py-3 text-center font-home text-[11px] leading-snug font-semibold text-[#5C2A1A] sm:px-3 sm:text-[12px] lg:text-[13px]">
                    {ritual.label}
                  </p>
                </m.article>
              </m.li>
            ))}
          </m.ul>
        </div>
      </div>
    </section>
  );
}

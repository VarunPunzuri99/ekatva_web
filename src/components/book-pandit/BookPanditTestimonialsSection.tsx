import { m } from "framer-motion";
import { Star } from "lucide-react";
import { BOOK_PANDIT_TESTIMONIALS } from "@/content/bookPanditTestimonials";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <m.span
          key={i}
          initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: 0.35,
            delay: 0.15 + i * 0.05,
            ease: easeOutExpo,
          }}
        >
          <Star
            className="h-[18px] w-[18px] text-[#D4AF37]"
            strokeWidth={1.75}
            fill="none"
          />
        </m.span>
      ))}
    </div>
  );
}

export function BookPanditTestimonialsSection() {
  return (
    <section
      className="bg-[#FAF8F4] py-14 sm:py-16 lg:py-20"
      aria-labelledby="devotee-stories-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[11px] font-bold tracking-[0.18em] text-[#B45309] uppercase sm:text-[12px]"
          >
            What Devotees Say
          </m.p>
          <m.h2
            id="devotee-stories-heading"
            variants={fadeUp}
            className="mt-2.5 font-home-display text-[1.65rem] leading-tight font-semibold text-[#3E1F47] sm:text-[1.9rem] lg:text-[2.15rem]"
          >
            Stories of Devotion &amp; Satisfaction
          </m.h2>
        </m.div>

        <m.ul
          className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {BOOK_PANDIT_TESTIMONIALS.map((item) => (
            <m.li key={item.id} variants={fadeUp} className="list-none h-full">
              <m.article
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(62,31,71,0.06)] sm:p-7 lg:p-8"
                whileHover={{
                  y: -6,
                  boxShadow: "0 14px 36px rgba(62,31,71,0.12)",
                }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
              >
                <StarRow rating={item.rating} />

                <p className="mt-5 flex-1 font-home text-[14px] leading-relaxed text-[#854D0E] sm:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8D2] font-home text-[15px] font-bold text-[#3E1F47]"
                    aria-hidden="true"
                  >
                    {item.name.trim().charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="font-home text-[14px] font-bold text-[#3E1F47] sm:text-[15px]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 font-home text-[12px] text-[#8B7A95] sm:text-[13px]">
                      {item.location}
                    </p>
                  </div>
                </div>
              </m.article>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}

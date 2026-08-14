import { m } from "framer-motion";
import { Flower2, HeartHandshake, Sparkles, Users } from "lucide-react";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
} from "@/lib/animations";
import type { OnlinePoojaDetail } from "@/services/onlinePooja";

const ICONS = [Users, HeartHandshake, Flower2, Sparkles, Users] as const;

export function EventPoojaIdealFor({
  detail,
}: {
  detail: OnlinePoojaDetail;
}) {
  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="event-pooja-ideal-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2
            id="event-pooja-ideal-heading"
            className="font-home text-[1.4rem] font-bold text-[#8B2E28] sm:text-[1.65rem]"
          >
            Ideal For
          </h2>
          <div
            className="mx-auto mt-2.5 h-[3px] w-14 rounded-full bg-[#F27022]"
            aria-hidden
          />
        </m.div>

        <m.ul
          className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {detail.idealFor.map((label, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <m.li key={label} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col items-center justify-center rounded-[14px] border border-[#E8DFD2] bg-white px-4 py-5 text-center"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF3E6] text-[#F27022]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                  </span>
                  <p className="mt-3 font-home text-[13px] font-bold leading-snug text-[#4B5563] sm:text-[14px]">
                    {label}
                  </p>
                </m.article>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
}

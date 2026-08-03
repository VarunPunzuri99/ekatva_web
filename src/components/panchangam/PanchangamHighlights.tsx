import { m } from "framer-motion";
import {
  Bell,
  CalendarDays,
  Clock3,
  Globe2,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { PANCHANGAM_HIGHLIGHTS } from "@/content/panchangam";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof PANCHANGAM_HIGHLIGHTS)[number]["icon"], LucideIcon> =
  {
    sparkles: Sparkles,
    mapPin: MapPin,
    bell: Bell,
    clock: Clock3,
    globe: Globe2,
    calendar: CalendarDays,
  };

export function PanchangamHighlights() {
  return (
    <section
      className="bg-[#FFFBF5] py-14 sm:py-16 lg:py-20"
      aria-labelledby="panchangam-highlights-heading"
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
            Platform Features
          </m.p>
          <m.h2
            id="panchangam-highlights-heading"
            variants={fadeUp}
            className="mt-2.5 font-home-display text-[1.55rem] leading-tight font-semibold text-[#8B2E28] sm:text-[1.85rem] lg:text-[2.05rem]"
          >
            Highlights of Ekatva Panchangam
          </m.h2>
          <m.div
            variants={fadeUp}
            className="mx-auto mt-4 flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px w-16 bg-[#E8C9A0] sm:w-24" />
            <span className="h-2 w-2 rotate-45 border border-[#D48E38] bg-[#FFF8EE]" />
            <span className="h-px w-16 bg-[#E8C9A0] sm:w-24" />
          </m.div>
        </m.div>

        <m.ul
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PANCHANGAM_HIGHLIGHTS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="h-full rounded-xl border border-[#E8C9A0] bg-[#FFF9F0] p-5 sm:p-6"
                  whileHover={{
                    y: -6,
                    borderColor: "#D48E38",
                    boxShadow: "0 14px 32px rgba(139,46,40,0.1)",
                  }}
                  transition={{ duration: 0.35, ease: easeOutExpo }}
                >
                  <Icon
                    className="h-6 w-6 text-[#C47A2C]"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <h3 className="mt-3.5 font-home text-[15px] font-bold text-[#B45309] sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
                    {item.description}
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

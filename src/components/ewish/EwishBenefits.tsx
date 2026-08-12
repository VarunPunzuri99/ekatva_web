import { m } from "framer-motion";
import {
  Flame,
  HandHeart,
  Heart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { EWISH_BENEFITS } from "@/content/ewish";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EWISH_BENEFITS.items)[number]["icon"], LucideIcon> =
  {
    heart: Heart,
    flame: Flame,
    trend: TrendingUp,
    handHeart: HandHeart,
  };

export function EwishBenefits() {
  return (
    <section
      className="bg-[#FDF6EE] py-14 sm:py-16 lg:py-20"
      aria-labelledby="ewish-benefits-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[11px] font-bold tracking-[0.2em] text-[#F27022] uppercase sm:text-[12px]"
          >
            {EWISH_BENEFITS.eyebrow}
          </m.p>
          <m.h2
            id="ewish-benefits-heading"
            variants={fadeUp}
            className="mt-2.5 font-home text-[1.55rem] font-bold leading-tight text-[#8B2E28] sm:text-[1.85rem] lg:text-[2.05rem]"
          >
            {EWISH_BENEFITS.title}
          </m.h2>
        </m.div>

        <m.ul
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EWISH_BENEFITS.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col rounded-2xl border border-black/4 bg-white p-5 shadow-[0_10px_28px_rgba(31,41,55,0.06)] sm:p-6"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 36px rgba(31,41,55,0.1)",
                    transition: { duration: 0.25, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F27022]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-home text-[15px] font-bold text-[#E85D04] sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-home text-[13px] leading-relaxed text-[#6B7280]">
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

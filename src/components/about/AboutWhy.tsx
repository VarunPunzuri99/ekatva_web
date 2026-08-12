import { m } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Headset,
  LayoutGrid,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { ABOUT_WHY } from "@/content/about";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof ABOUT_WHY.items)[number]["icon"], LucideIcon> = {
  badge: BadgeCheck,
  grid: LayoutGrid,
  shield: ShieldCheck,
  user: UserRound,
  headset: Headset,
  clock: Clock3,
};

export function AboutWhy() {
  return (
    <section
      className="bg-[#FFF8F0] py-12 sm:py-14 lg:py-16"
      aria-labelledby="about-why-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.img
            src="/assets/icon.png"
            alt=""
            className="h-14 w-14 object-contain mix-blend-multiply sm:h-16 sm:w-16"
            variants={fadeUp}
            aria-hidden
          />
          <m.h2
            id="about-why-heading"
            className="mt-4 font-home text-[1.55rem] font-bold leading-tight text-[#8B2E28] sm:text-[1.85rem] lg:text-[2.05rem]"
            variants={fadeUp}
          >
            {ABOUT_WHY.title}
          </m.h2>
          <m.p
            className="mt-3 font-home text-[14px] leading-relaxed text-[#555555] sm:text-[15px]"
            variants={fadeUp}
          >
            {ABOUT_WHY.subtitle}
          </m.p>
        </m.div>

        <m.ul
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ABOUT_WHY.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col rounded-2xl border border-[#E8E0D6] bg-white px-5 py-5 shadow-[0_4px_16px_rgba(31,41,55,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-[#F27022]/50 hover:shadow-[0_10px_24px_rgba(242,112,34,0.12)] sm:px-6 sm:py-6"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1D6] text-[#F27022]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-home text-[14px] font-bold text-[#F27022] sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
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

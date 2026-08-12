import { m } from "framer-motion";
import { Eye, Target, type LucideIcon } from "lucide-react";
import { ABOUT_MISSION, ABOUT_VISION } from "@/content/about";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<"mission" | "vision", LucideIcon> = {
  mission: Target,
  vision: Eye,
};

const CARDS = [ABOUT_MISSION, ABOUT_VISION] as const;

export function AboutMissionVision() {
  return (
    <section
      className="bg-white pb-12 sm:pb-14 lg:pb-16"
      aria-label="Mission and vision"
    >
      <m.ul
        className="mx-auto grid max-w-[1200px] gap-5 px-4 sm:gap-6 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {CARDS.map((card) => {
          const Icon = ICONS[card.icon];
          return (
            <m.li key={card.title} variants={fadeUp} className="list-none h-full">
              <m.article
                className="flex h-full flex-col rounded-2xl border border-[#F27022]/35 bg-[#FFF8F0] px-6 py-7 sm:px-8 sm:py-8"
                whileHover={{
                  y: -3,
                  transition: { duration: 0.22, ease: easeOutExpo },
                }}
              >
                <span className="flex h-10 w-10 items-center justify-center text-[#F27022]">
                  <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                </span>
                <h2 className="mt-4 font-home text-[1.15rem] font-bold text-[#F27022] sm:text-[1.25rem]">
                  {card.title}
                </h2>
                <p className="mt-3 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
                  {card.description}
                </p>
              </m.article>
            </m.li>
          );
        })}
      </m.ul>
    </section>
  );
}

import { m } from "framer-motion";
import {
  Cpu,
  Heart,
  Lock,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { ABOUT_VALUES } from "@/content/about";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<
  (typeof ABOUT_VALUES.items)[number]["icon"],
  LucideIcon
> = {
  heart: Heart,
  chip: Cpu,
  lock: Lock,
  shield: Shield,
};

export function AboutValues() {
  return (
    <section
      className="bg-[#F7F5F2] py-12 sm:py-14 lg:py-16"
      aria-labelledby="about-values-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.h2
          id="about-values-heading"
          className="text-center font-home text-[1.55rem] font-bold leading-tight text-[#8B2E28] sm:text-[1.85rem] lg:text-[2.05rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ABOUT_VALUES.title}
        </m.h2>

        <m.ul
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ABOUT_VALUES.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col items-start rounded-2xl border border-[#EDE6DC] bg-white px-5 py-5 shadow-[0_4px_16px_rgba(31,41,55,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-[#F27022]/55 hover:shadow-[0_10px_24px_rgba(242,112,34,0.12)] sm:px-6 sm:py-6"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-9 w-9 items-center justify-center text-[#F27022]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-3.5 font-home text-[14px] font-bold text-[#F27022] sm:text-[15px]">
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

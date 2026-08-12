import { m } from "framer-motion";
import {
  Cpu,
  Heart,
  Lock,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { EDISTI_HIGHLIGHTS, EDISTI_INTRO } from "@/content/edisti";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EDISTI_HIGHLIGHTS)[number]["icon"], LucideIcon> = {
  heart: Heart,
  chip: Cpu,
  lock: Lock,
  shield: Shield,
};

export function EdistiIntro() {
  return (
    <section aria-label="eDisti introduction">
      <div className="bg-white pb-10 pt-2 sm:pb-12 lg:pb-14">
        <m.p
          className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EDISTI_INTRO}
        </m.p>
      </div>

      <div className="bg-[#F7F5F2] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
          <m.ul
            className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {EDISTI_HIGHLIGHTS.map((item) => {
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
      </div>
    </section>
  );
}

import { m } from "framer-motion";
import {
  Building2,
  Eye,
  Home,
  ScanEye,
  Users,
  type LucideIcon,
} from "lucide-react";
import { EDISTI_RITUALS } from "@/content/edisti";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EDISTI_RITUALS.items)[number]["icon"], LucideIcon> =
  {
    eye: Eye,
    scan: ScanEye,
    home: Home,
    users: Users,
    building: Building2,
  };

export function EdistiRituals() {
  return (
    <section
      className="bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="edisti-rituals-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.h2
          id="edisti-rituals-heading"
          className="text-center font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EDISTI_RITUALS.title}
        </m.h2>

        <m.ul
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EDISTI_RITUALS.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col rounded-2xl border border-[#EDE6DC] bg-white px-4 py-5 shadow-[0_4px_16px_rgba(31,41,55,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-[#F27022]/50 hover:shadow-[0_12px_28px_rgba(242,112,34,0.12)] sm:px-5 sm:py-6"
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF3E6] text-[#F27022]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-home text-[14px] font-bold text-[#B45309] sm:text-[15px]">
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

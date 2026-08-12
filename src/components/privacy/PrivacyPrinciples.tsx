import { m } from "framer-motion";
import {
  Eye,
  Headset,
  Lock,
  Settings2,
  Shield,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { PRIVACY_INTRO, PRIVACY_PRINCIPLES } from "@/content/privacy";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<
  (typeof PRIVACY_PRINCIPLES)[number]["icon"],
  LucideIcon
> = {
  shield: Shield,
  user: UserRound,
  lock: Lock,
  eye: Eye,
  settings: Settings2,
  headset: Headset,
};

export function PrivacyPrinciples() {
  return (
    <section aria-label="Privacy principles">
      <div className="bg-white pb-8 pt-2 sm:pb-10 lg:pb-12">
        <m.p
          className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PRIVACY_INTRO}
        </m.p>
      </div>

      <div className="bg-[#FFF8F0] pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
        <m.ul
          className="mx-auto grid max-w-[1200px] gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 lg:px-8 xl:max-w-[1320px] xl:gap-5 xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PRIVACY_PRINCIPLES.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col items-start rounded-2xl border border-[#EDE6DC] bg-white px-4 py-5 shadow-[0_4px_16px_rgba(31,41,55,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-[#F27022]/55 hover:shadow-[0_10px_24px_rgba(242,112,34,0.12)] sm:px-5"
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-9 w-9 items-center justify-center text-[#F27022]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-3 font-home text-[13px] font-bold text-[#F27022] sm:text-[14px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-home text-[11px] leading-relaxed text-[#6B7280] sm:text-[12px]">
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

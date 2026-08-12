import { m } from "framer-motion";
import {
  Clock3,
  Languages,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react";
import { DRISHTI_INTRO, DRISHTI_META } from "@/content/epujaDrishti";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function OmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M8.5 15.5c1.2 1.8 2.8 2.7 4.5 2.7 2.4 0 4-1.5 4-3.4 0-2.2-1.8-3-3.6-3.6-1.5-.5-2.6-1-2.6-2.1 0-.9.8-1.6 1.9-1.6 1.3 0 2.2.7 2.8 1.6M7.5 9.2c.7-1.8 2.2-3 4-3 1.2 0 2.2.5 2.8 1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      <path
        d="M6.5 18.5c2.2.8 4.3 1.1 6.5.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS: Record<(typeof DRISHTI_META)[number]["icon"], LucideIcon | "om"> =
  {
    clock: Clock3,
    pin: MapPin,
    om: "om",
    lang: Languages,
    users: Users,
  };

export function DrishtiIntroMeta() {
  return (
    <section aria-label="Pooja overview">
      <div className="bg-white pb-10 pt-2 sm:pb-12">
        <m.p
          className="mx-auto max-w-[44rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {DRISHTI_INTRO}
        </m.p>
      </div>

      <div className="bg-white px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <m.div
          className="mx-auto max-w-[920px] rounded-[18px] bg-[#FEF5E7] px-5 py-7 sm:px-8 sm:py-8 lg:px-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <ul className="grid gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-7">
            {DRISHTI_META.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <m.li
                  key={item.id}
                  variants={fadeUp}
                  className="list-none flex items-start gap-3.5"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-[#E8A017]">
                    {Icon === "om" ? (
                      <OmIcon className="h-6 w-6" />
                    ) : (
                      <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                    )}
                  </span>
                  <div>
                    <p className="font-home text-[12px] font-semibold text-[#E8A017] sm:text-[13px]">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-home text-[14px] font-bold text-[#5C2A1A] sm:text-[15px]">
                      {item.value}
                    </p>
                  </div>
                </m.li>
              );
            })}
          </ul>
        </m.div>
      </div>
    </section>
  );
}

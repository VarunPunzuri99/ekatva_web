import { m } from "framer-motion";
import {
  Bell,
  Heart,
  Package,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { EPUJA_TRUST } from "@/content/epuja";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function KalashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3.5c1.2 1.4 1.8 2.6 1.8 3.6 0 1-.6 1.7-1.8 1.7S10.2 8.1 10.2 7.1c0-1 .6-2.2 1.8-3.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 9.2h7.6c.7 1.8.9 3.6.5 5.6-.5 2.4-2.2 4.2-4.5 4.2s-4-1.8-4.5-4.2c-.4-2 .2-3.8.9-5.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.5h5M10 15h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OfferingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 4.5c1.5 1.8 2.2 3.2 2.2 4.2S13.3 10.5 12 10.5 9.8 9.7 9.8 8.7 10.5 6.3 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11.5c1.8-.2 3.2.4 4 1.6-.8 1-2.4 1.8-4.2 1.5-1.3-.2-2.2-1.2-2-2.3.1-.5.9-.8 2.2-.8ZM17.5 11.5c-1.8-.2-3.2.4-4 1.6.8 1 2.4 1.8 4.2 1.5 1.3-.2 2.2-1.2 2-2.3-.1-.5-.9-.8-2.2-.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 17.5c1.2.9 2.5 1.4 4 1.4s2.8-.5 4-1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NamasteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 21v-7.5M9.2 9.2c-.8 1.4-1.2 2.8-1.2 4.2 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.4-.4-2.8-1.2-4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6.5c0 1.2.7 2.2 1.6 3.1M15.5 6.5c0 1.2-.7 2.2-1.6 3.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS: Record<
  (typeof EPUJA_TRUST.items)[number]["icon"],
  LucideIcon | "kalash" | "offerings" | "namaste"
> = {
  lotus: "kalash",
  userCheck: UserCheck,
  package: "offerings",
  bell: Bell,
  heart: "namaste",
};

export function EpujaTrust() {
  return (
    <section
      className="relative overflow-hidden bg-[#F7F3EC] py-12 sm:py-14 lg:py-16"
      aria-labelledby="epuja-trust-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <m.h2
              id="epuja-trust-heading"
              variants={fadeUp}
              className="font-home-display text-[1.45rem] font-semibold leading-snug text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
            >
              {EPUJA_TRUST.title}
            </m.h2>
            <m.div
              variants={fadeUp}
              className="mt-3 h-[3px] w-12 rounded-full bg-[#E8A017]"
              aria-hidden
            />
            <m.p
              variants={fadeUp}
              className="mt-3 font-home text-[13px] text-[#6B7280] sm:text-[14px]"
            >
              {EPUJA_TRUST.tagline}
            </m.p>
          </m.div>

          <m.ul
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {EPUJA_TRUST.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <m.li
                  key={item.id}
                  variants={fadeUp}
                  className="list-none flex flex-col items-center text-center"
                >
                  <m.span
                    className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#8B2E28]/70 bg-transparent text-[#8B2E28] sm:h-[68px] sm:w-[68px]"
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.22, ease: easeOutExpo },
                    }}
                  >
                    {Icon === "kalash" ? (
                      <KalashIcon className="h-6 w-6" />
                    ) : Icon === "offerings" ? (
                      <OfferingsIcon className="h-6 w-6" />
                    ) : Icon === "namaste" ? (
                      <NamasteIcon className="h-6 w-6" />
                    ) : (
                      <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                    )}
                  </m.span>
                  <p className="mt-3 max-w-[12ch] font-home text-[11px] font-bold leading-snug text-[#8B2E28] sm:text-[12px]">
                    {item.title}
                  </p>
                </m.li>
              );
            })}
          </m.ul>
        </div>
      </div>
    </section>
  );
}

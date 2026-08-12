import { m } from "framer-motion";
import {
  Heart,
  Lock,
  Shield,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { DRISHTI_BENEFITS } from "@/content/epujaDrishti";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function CoinsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="9" cy="12" r="5.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.2 8.2a5.2 5.2 0 1 1 0 7.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 9.6v4.8M7.6 12h2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS: Record<
  (typeof DRISHTI_BENEFITS.items)[number]["icon"],
  LucideIcon | "coins"
> = {
  shield: Shield,
  heart: Heart,
  lock: Lock,
  coins: "coins",
  trend: TrendingUp,
  users: Users,
};

export function DrishtiBenefits() {
  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="drishti-benefits-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2
            id="drishti-benefits-heading"
            className="font-home-display text-[1.4rem] font-semibold text-[#8B2E28] sm:text-[1.65rem]"
          >
            {DRISHTI_BENEFITS.title}
          </h2>
          <div
            className="mx-auto mt-2.5 h-[3px] w-14 rounded-full bg-[#F27022]"
            aria-hidden
          />
        </m.div>

        <m.ul
          className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {DRISHTI_BENEFITS.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col items-center rounded-[14px] border border-[#E8DFD2] bg-white px-3.5 py-5 text-center shadow-[0_2px_10px_rgba(31,41,55,0.03)] sm:px-4"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF3E6] text-[#F27022]">
                    {Icon === "coins" ? (
                      <CoinsIcon className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                    )}
                  </span>
                  <h3 className="mt-3.5 font-home text-[13px] font-bold leading-snug text-[#C45A1A] sm:text-[14px]">
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

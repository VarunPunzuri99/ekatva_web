import { m, useReducedMotion } from "framer-motion";
import {
  Calendar,
  Clock3,
  LayoutGrid,
  Lock,
  MessageCircle,
  Shield,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import astroguruMobile from "@/assets/images/astroguruPage/astroguru_mobilepic.png";
import { CountUp } from "@/components/home/CountUp";
import { HOME_ASTROGURU } from "@/content/home";
import {
  easeOutExpo,
  fadeRight,
  fadeUp,
  fadeUpSoft,
  floatingMotionSlow,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/animations";

const FEATURE_ICONS: Record<
  (typeof HOME_ASTROGURU.features)[number]["icon"],
  LucideIcon
> = {
  ask: MessageCircle,
  insights: Calendar,
  remedies: LayoutGrid,
  private: Lock,
};

const STAT_ICONS: Record<
  (typeof HOME_ASTROGURU.stats)[number]["icon"],
  LucideIcon
> = {
  star: Star,
  clock: Clock3,
  shield: Shield,
};

function DiyaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <ellipse cx="28" cy="51" rx="14" ry="2.4" fill="#C2410C" opacity="0.12" />
      <path
        d="M28 6c-1.2 5.6-.7 11.2.2 15.4 3.6-2.6 6.6-7.2 6.6-12.2-2.6.9-4.6 0-6.8-3.2Z"
        fill="#F59E0B"
      />
      <path
        d="M28 10c-.8 4-.4 8.4.2 11.4 2.4-2 4.8-5.6 4.8-9.4-1.8.7-3.2 0-5-2Z"
        fill="#FDE68A"
      />
      <ellipse cx="28" cy="24.5" rx="2.1" ry="1.6" fill="#EA580C" />
      <path
        d="M10 36c2.4-2.6 10.4-4.4 18-4.4s15.6 1.8 18 4.4c-2.2 2.4-10.2 4.8-18 4.8S12.2 38.4 10 36Z"
        fill="#E8A317"
      />
      <path
        d="M12 37.2c2-1.6 9.2-2.8 16-2.8s14 1.2 16 2.8c-2 1.4-9.2 2.8-16 2.8s-14-1.4-16-2.8Z"
        fill="#F5C542"
      />
      <path
        d="M14 41c1.8 6.4 8.2 10.4 14 10.4s12.2-4 14-10.4c-4.2 2.4-9.2 3.2-14 3.2s-9.8-.8-14-3.2Z"
        fill="#C2410C"
      />
      <path
        d="M16.5 41.4c1.6 4.6 6.6 7.4 11.5 7.4s9.9-2.8 11.5-7.4c-3.4 1.6-7.4 2.2-11.5 2.2s-8.1-.6-11.5-2.2Z"
        fill="#9A3412"
        opacity="0.55"
      />
    </svg>
  );
}

function SparkleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0c.32 3.15 1.22 5.08 3.9 6C9.22 6.92 8.32 8.85 8 12 7.68 8.85 6.78 6.92 4.1 6 6.78 5.08 7.68 3.15 8 0Z"
      />
    </svg>
  );
}

function StatValue({ value }: { value: string }) {
  const match = /^(\d+)(%)$/.exec(value);
  if (!match) return <>{value}</>;
  return <CountUp to={Number(match[1])} suffix={match[2]} />;
}

export function HomeAstroGuru() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="astroguru"
      className="relative overflow-hidden bg-[#FFF5EB] py-12 sm:py-14 lg:py-16"
      aria-labelledby="home-astroguru-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 48% 70% at 88% 42%, rgba(255,186,120,0.26) 0%, transparent 62%), radial-gradient(ellipse 42% 50% at 8% 88%, rgba(255,214,160,0.22) 0%, transparent 58%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-16">
          <m.div
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <m.h2
              id="home-astroguru-heading"
              variants={fadeUp}
              className="font-home-display text-[2rem] font-bold leading-[1.15] text-[#8B1A1A] sm:text-[2.35rem] lg:text-[2.65rem]"
            >
              {HOME_ASTROGURU.title}
            </m.h2>
            <m.p
              variants={fadeUp}
              className="mt-2.5 font-home text-[1.05rem] font-semibold text-[#1A1A1A] sm:text-[1.15rem] lg:text-[1.2rem]"
            >
              {HOME_ASTROGURU.subtitle}
            </m.p>
            <m.p
              variants={fadeUpSoft}
              className="mt-3 max-w-[38rem] font-home text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]"
            >
              {HOME_ASTROGURU.description}
            </m.p>

            <m.ul
              className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-4 sm:gap-3"
              variants={staggerFast}
            >
              {HOME_ASTROGURU.features.map((feature) => {
                const Icon = FEATURE_ICONS[feature.icon];
                return (
                  <m.li key={feature.id} variants={fadeUp} className="h-full list-none">
                    <m.article
                      className="flex h-full flex-col items-center rounded-xl bg-white px-2.5 py-4 text-center shadow-[0_4px_16px_rgba(31,41,55,0.06)] sm:px-3 sm:py-5"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { y: -5, transition: { duration: 0.3, ease: easeOutExpo } }
                      }
                    >
                      <span className="flex h-9 w-9 items-center justify-center text-[#C2410C]">
                        <Icon className="h-[22px] w-[22px]" strokeWidth={1.55} aria-hidden />
                      </span>
                      <h3 className="mt-2.5 font-home text-[12px] font-bold leading-snug text-[#C2410C] sm:text-[13px]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 font-home text-[10px] leading-snug text-[#6B7280] sm:text-[11px]">
                        {feature.description}
                      </p>
                    </m.article>
                  </m.li>
                );
              })}
            </m.ul>

            <m.div
              className="mt-5 rounded-2xl bg-[#FDE9D2] p-2.5 sm:mt-6 sm:p-3"
              variants={fadeUp}
            >
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5">
                {HOME_ASTROGURU.stats.map((stat) => {
                  const Icon = STAT_ICONS[stat.icon];
                  return (
                    <m.li
                      key={stat.id}
                      variants={fadeUpSoft}
                      className="list-none"
                    >
                      <m.article
                        className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-3 shadow-[0_2px_10px_rgba(31,41,55,0.05)] sm:px-3.5"
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -3,
                                transition: { duration: 0.28, ease: easeOutExpo },
                              }
                        }
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#F27022]">
                          <Icon
                            className="h-[18px] w-[18px]"
                            strokeWidth={1.7}
                            aria-hidden
                          />
                        </span>
                        <div className="min-w-0">
                          <p className="font-home text-[13px] font-bold leading-tight text-[#1A1A1A] sm:text-[14px]">
                            <StatValue value={stat.value} />
                          </p>
                          <p className="mt-0.5 font-home text-[10px] leading-tight text-[#6B7280] sm:text-[11px]">
                            {stat.label}
                          </p>
                        </div>
                      </m.article>
                    </m.li>
                  );
                })}
              </ul>
            </m.div>
          </m.div>

          <m.div
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[390px]"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle, rgba(242,112,34,0.16) 0%, rgba(255,186,120,0.08) 42%, transparent 72%)",
              }}
            />
            <m.img
              src={astroguruMobile}
              alt="Talk to AstroGuru on the Ekatva mobile app"
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_52px_rgba(31,41,55,0.18)]"
              loading="lazy"
              animate={reduceMotion ? undefined : floatingMotionSlow}
            />
          </m.div>
        </div>

        <m.div
          className="relative z-10 mt-10 flex flex-col items-center gap-5 rounded-2xl bg-white px-5 py-5 shadow-[0_8px_28px_rgba(31,41,55,0.07)] sm:mt-12 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-5 lg:px-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <DiyaMark className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="font-home text-[15px] font-semibold text-[#1A1A1A] sm:text-[16px] lg:text-[17px]">
              {HOME_ASTROGURU.cta.title}
            </p>
            <p className="mt-1 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
              {HOME_ASTROGURU.cta.subtitle}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center sm:items-end">
            <span className="mb-1.5 font-home text-[11px] font-medium text-[#9CA3AF]">
              {HOME_ASTROGURU.cta.label}
            </span>
            <Link
              to={HOME_ASTROGURU.href}
              className="btn-shine inline-flex items-center gap-2 rounded-lg bg-[#F27022] px-5 py-2.5 font-home text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(242,112,34,0.28)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#E06518] hover:shadow-[0_12px_28px_rgba(242,112,34,0.34)] active:translate-y-0 sm:px-6 sm:py-3 sm:text-[14px]"
            >
              <SparkleMark className="h-3.5 w-3.5" />
              {HOME_ASTROGURU.cta.button}
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
}

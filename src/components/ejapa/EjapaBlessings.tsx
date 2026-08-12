import { m, useReducedMotion } from "framer-motion";
import {
  Bell,
  CalendarDays,
  Globe2,
  HandHeart,
  Heart,
  Shield,
  type LucideIcon,
} from "lucide-react";
import japaMobile from "@/assets/images/eJapaPage/japa_mobilepic2.png";
import { EJAPA_BLESSINGS } from "@/content/ejapa";
import {
  easeOutExpo,
  fadeLeft,
  fadeRight,
  fadeUp,
  floatingMotionSlow,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EJAPA_BLESSINGS.items)[number]["icon"], LucideIcon> =
  {
    heart: Heart,
    handHeart: HandHeart,
    bell: Bell,
    shield: Shield,
    globe: Globe2,
    calendar: CalendarDays,
  };

export function EjapaBlessings() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="ejapa-blessings-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[11px] font-bold tracking-[0.2em] text-[#F27022] uppercase sm:text-[12px]"
          >
            {EJAPA_BLESSINGS.eyebrow}
          </m.p>
          <m.h2
            id="ejapa-blessings-heading"
            variants={fadeUp}
            className="mt-2.5 font-home-display text-[1.55rem] font-semibold leading-tight text-[#8B1A1A] sm:text-[1.85rem] lg:text-[2.1rem]"
          >
            {EJAPA_BLESSINGS.title}
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl font-home text-[13px] leading-relaxed text-[#4B5563] sm:text-[14px]"
          >
            {EJAPA_BLESSINGS.subtitle}
          </m.p>
        </m.div>

        {/* Mock: 3×2 blessing cards left, phone ~1/3 width right */}
        <div className="mt-10 grid items-start gap-8 sm:mt-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-14">
          <m.ul
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {EJAPA_BLESSINGS.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <m.li key={item.id} variants={fadeLeft} className="list-none h-full">
                  <m.article
                    className="flex h-full flex-col rounded-[14px] border border-[#E8A96B]/70 bg-[#FFF8F0] p-4 transition-[border-color,box-shadow] duration-200 hover:border-[#F27022] hover:shadow-[0_10px_24px_rgba(242,112,34,0.1)] sm:p-[18px]"
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.22, ease: easeOutExpo },
                    }}
                  >
                    <span className="flex h-8 w-8 items-center justify-center text-[#F27022]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                    </span>
                    <h3 className="mt-3 font-home text-[14px] font-bold text-[#E67E22] sm:text-[15px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-home text-[12px] leading-[1.55] text-[#4B5563] sm:text-[13px]">
                      {item.description}
                    </p>
                  </m.article>
                </m.li>
              );
            })}
          </m.ul>

          <m.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-[240px] sm:max-w-[260px] lg:mx-0 lg:max-w-[280px] lg:justify-self-end lg:pt-1 xl:max-w-[300px]"
          >
            <m.img
              src={japaMobile}
              alt="Ekatva eJapa mobile app preview"
              className="relative z-10 h-auto w-full drop-shadow-[0_24px_48px_rgba(31,41,55,0.16)]"
              loading="lazy"
              animate={reduceMotion ? undefined : floatingMotionSlow}
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}

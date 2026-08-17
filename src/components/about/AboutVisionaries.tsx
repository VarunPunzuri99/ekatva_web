import { m } from "framer-motion";
import {
  Heart,
  Lightbulb,
  Settings,
  Shield,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { ABOUT_VISIONARIES } from "@/content/about";
import {
  easeOutExpo,
  fadeUp,
  fadeUpSoft,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<
  (typeof ABOUT_VISIONARIES.people)[number]["traits"][number]["icon"],
  LucideIcon
> = {
  sparkles: Sparkles,
  bulb: Lightbulb,
  heart: Heart,
  settings: Settings,
  shield: Shield,
  user: UserRound,
};

function SectionMark() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[#D9A441]" aria-hidden="true">
      <span className="h-px w-6 bg-current/55" />
      <span className="h-1.5 w-1.5 rotate-45 bg-current" />
      <span className="h-px w-6 bg-current/55" />
    </span>
  );
}

function EkatvaSeal() {
  return (
    <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[#E4B567] bg-[radial-gradient(circle_at_50%_40%,#FFF8EB_0%,#FFF3D7_55%,#FCE8B8_100%)] shadow-[0_10px_26px_rgba(217,164,65,0.14)] sm:h-[104px] sm:w-[104px]">
      <img
        src="/assets/icon.png"
        alt=""
        className="h-[66px] w-[66px] object-contain mix-blend-multiply sm:h-[74px] sm:w-[74px]"
        aria-hidden="true"
      />
    </div>
  );
}

export function AboutVisionaries() {
  return (
    <section
      className="border-t border-[#F2EBDD] bg-[linear-gradient(180deg,#FFFBEF_0%,#FFF7EA_100%)] py-12 sm:py-14 lg:py-16"
      aria-labelledby="about-visionaries-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            id="about-visionaries-heading"
            className="font-home text-[1.55rem] font-medium leading-tight text-[#B53324] sm:text-[1.85rem] lg:text-[2.05rem]"
            variants={fadeUp}
          >
            {ABOUT_VISIONARIES.title}
          </m.h2>
          <m.div variants={fadeUp} className="mt-3">
            <SectionMark />
          </m.div>
          <m.p
            className="mt-4 max-w-[42rem] font-home text-[12px] leading-relaxed text-[#6B6B6B] sm:text-[13px]"
            variants={fadeUpSoft}
          >
            {ABOUT_VISIONARIES.subtitle}
          </m.p>
        </m.div>

        <m.ul
          className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ABOUT_VISIONARIES.people.map((person) => (
            <m.li key={person.id} variants={fadeUp} className="list-none h-full">
              <m.article
                className="h-full rounded-[24px] border border-[#EEE4D5] bg-white px-5 py-5 shadow-[0_12px_34px_rgba(205,156,70,0.12)] transition-[transform,box-shadow,border-color] duration-300 sm:px-6 sm:py-6"
                whileHover={{
                  y: -4,
                  boxShadow: "0 18px 44px rgba(205,156,70,0.16)",
                  transition: { duration: 0.28, ease: easeOutExpo },
                }}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="mx-auto shrink-0 sm:mx-0">
                    <EkatvaSeal />
                  </div>

                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <h3 className="font-home text-[1.5rem] font-medium leading-tight text-[#B53324] sm:text-[1.75rem]">
                      {person.name}
                    </h3>
                    <p className="mt-2 font-home text-[11px] font-semibold tracking-[0.02em] text-[#D9A441] sm:text-[12px]">
                      {person.role}
                    </p>
                    <div className="mt-2 h-px w-14 bg-[#E7BF79] sm:w-16" />
                    <p className="mt-3 font-home text-[12px] leading-relaxed text-[#666666] sm:text-[13px]">
                      {person.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px w-full bg-[#F3E8DA]" />

                <m.ul
                  className="mt-4 grid gap-3 sm:grid-cols-3"
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {person.traits.map((trait) => {
                    const Icon = ICONS[trait.icon];
                    return (
                      <m.li
                        key={trait.id}
                        variants={fadeUpSoft}
                        className="list-none rounded-xl bg-[#FFFDFC] px-3 py-2.5"
                      >
                        <div className="flex items-center justify-center gap-2 sm:justify-start">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3D9] text-[#E0A33A]">
                            <Icon className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden />
                          </span>
                          <div className="min-w-0 text-left">
                            <p className="font-home text-[11px] font-semibold leading-tight text-[#6B3B2A]">
                              {trait.title}
                            </p>
                            <p className="mt-0.5 font-home text-[10px] leading-tight text-[#8A8A8A]">
                              {trait.subtitle}
                            </p>
                          </div>
                        </div>
                      </m.li>
                    );
                  })}
                </m.ul>
              </m.article>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}

import { m, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Check,
  Crown,
  MapPin,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import panditArt from "@/assets/images/pandit.png";
import { StoreBadge } from "@/components/home/StoreBadges";
import {
  easeOutExpo,
  fadeUp,
  floatingMotion,
  heroStagger,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

type Step = {
  title: string;
  detail: string;
  checkGreen?: boolean;
  icon: "phone" | "ritual" | "calendar" | "map" | "pandit" | "check";
};

const STEPS: Step[] = [
  { icon: "phone", title: "Step 1", detail: "Download the Ekatva Mobile App" },
  { icon: "ritual", title: "Step 2", detail: "Choose the Ritual" },
  { icon: "calendar", title: "Step 3", detail: "Select Date & Time" },
  { icon: "map", title: "Step 4", detail: "Provide Address & Detail" },
  { icon: "pandit", title: "Step 5", detail: "We Assign a Verified Pandit" },
  {
    icon: "check",
    title: "Step 6",
    detail: "Receive Confirmation & Perform the Puja",
    checkGreen: true,
  },
];

const STEP_CENTER = (STEPS.length - 1) / 2;

/** Steps gather at the row center, then fan out to their columns. */
const stepDisperse = {
  hidden: (i: number) => ({
    opacity: 0,
    x: (STEP_CENTER - i) * 72,
    scale: 0.55,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: 0.06 * Math.abs(i - STEP_CENTER),
      ease: easeOutExpo,
    },
  }),
};

const arrowReveal = {
  hidden: { opacity: 0, scaleX: 0.4 },
  visible: (i: number) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.45,
      delay: 0.45 + 0.08 * i,
      ease: easeOutExpo,
    },
  }),
};

function RitualIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="6" rx="3" ry="4" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="12" cy="18" rx="3" ry="4" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="6" cy="12" rx="4" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="18" cy="12" rx="4" ry="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const LUCIDE_ICONS: Record<
  Exclude<Step["icon"], "ritual" | "pandit" | "check">,
  LucideIcon
> = {
  phone: Smartphone,
  calendar: CalendarDays,
  map: MapPin,
};

function StepIcon({
  icon,
  checkGreen,
}: {
  icon: Step["icon"];
  checkGreen?: boolean;
}) {
  if (icon === "ritual") return <RitualIcon className="h-6 w-6" />;
  if (icon === "pandit") {
    return (
      <img
        src={panditArt}
        alt=""
        className="h-7 w-7 object-contain"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(52%) sepia(70%) saturate(1800%) hue-rotate(346deg) brightness(101%) contrast(96%)",
        }}
      />
    );
  }
  if (checkGreen || icon === "check") {
    return (
      <Check
        className="h-7 w-7 text-[#2E7D32]"
        strokeWidth={3}
        absoluteStrokeWidth
      />
    );
  }
  const Icon = LUCIDE_ICONS[icon];
  return <Icon className="h-6 w-6" strokeWidth={1.75} />;
}

function StepArrow({ index }: { index: number }) {
  return (
    <m.div
      className="pointer-events-none absolute top-[31px] left-[calc(50%+31px)] z-0 flex w-[calc(100%-62px)] origin-left -translate-y-1/2 items-center"
      aria-hidden="true"
      custom={index}
      variants={arrowReveal}
    >
      <div className="h-[1.5px] min-w-0 flex-1 bg-[#F27022]" />
      <svg
        viewBox="0 0 10 12"
        className="h-3 w-2.5 shrink-0 text-[#F27022]"
        fill="currentColor"
      >
        <path d="M0 0.5v11L10 6z" />
      </svg>
    </m.div>
  );
}

function HeroCircle({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <m.div
      className="relative z-10"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.72, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.75, ease: easeOutExpo }}
    >
      <m.div
        className="flex h-[170px] w-[170px] items-center justify-center overflow-hidden rounded-full border-[3px] border-[#F27022] shadow-[0_8px_28px_rgba(242,112,34,0.18)] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #FFF8E0 0%, #FFE9B0 55%, #FFE2A0 100%)",
        }}
        animate={reduceMotion ? undefined : floatingMotion}
      >
        <m.img
          src={panditArt}
          alt="Verified Pandit"
          className="h-[78%] w-[78%] object-contain"
          style={{
            filter: "invert(1) grayscale(1) brightness(0)",
            mixBlendMode: "multiply",
          }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        />
      </m.div>
    </m.div>
  );
}

function StepCard({
  step,
  index,
  size,
}: {
  step: Step;
  index: number;
  size: "desktop" | "mobile";
}) {
  const circle =
    size === "desktop"
      ? "h-[62px] w-[62px]"
      : "h-[58px] w-[58px]";

  return (
    <m.div
      custom={index}
      variants={stepDisperse}
      className="relative flex flex-col items-center px-1"
    >
      <m.div
        className={`relative z-10 flex ${circle} items-center justify-center rounded-full border-[1.5px] border-[#F27022] bg-[#FFF3E6] text-[#F27022]`}
        whileHover={
          size === "desktop"
            ? { scale: 1.06, y: -2 }
            : undefined
        }
        transition={{ duration: 0.3, ease: easeOutExpo }}
      >
        <StepIcon icon={step.icon} checkGreen={step.checkGreen} />
      </m.div>
      {size === "desktop" && index < STEPS.length - 1 ? (
        <StepArrow index={index} />
      ) : null}
      <p
        className={`mt-3.5 text-center font-home text-[12px] leading-snug text-black ${
          size === "desktop" ? "max-w-[130px] xl:text-[13px]" : ""
        }`}
      >
        <span className="font-bold">{step.title}</span>
        <br />
        {step.detail}
      </p>
    </m.div>
  );
}

export function BookPanditPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <main>
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="book-pandit-heading"
      >
        <div className="relative">
          <m.div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: easeOutExpo }}
            style={{
              background:
                "linear-gradient(105deg, #FFD999 0%, #FFE9B8 28%, #FFF6E4 52%, #FFFFFF 82%)",
            }}
          />

          <div className="relative mx-auto max-w-[1200px] px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
            <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-8">
              <m.div
                className="max-w-lg pb-8 sm:pb-10 lg:pb-[60px]"
                variants={heroStagger}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
              >
                <m.p
                  variants={fadeUp}
                  className="font-home text-[15px] font-bold text-[#F27022]"
                >
                  Book a Pandit
                </m.p>
                <m.h1
                  id="book-pandit-heading"
                  variants={fadeUp}
                  className="mt-2 max-w-[18ch] font-home text-[1.55rem] font-medium leading-[1.3] tracking-tight text-black sm:max-w-none sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.2rem]"
                >
                  Book Verified Pandits
                  <br />
                  for Every Sacred Occasion
                </m.h1>
              </m.div>

              <div className="relative z-10 flex justify-center lg:justify-end lg:pr-10 xl:pr-14">
                <div className="mb-[-42px] sm:mb-[-48px] lg:mb-[-52px]">
                  <HeroCircle reduceMotion={reduceMotion} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <m.div
          className="relative z-0 h-[5px] w-full origin-center bg-[#F27022] sm:h-[6px]"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0.5 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: easeOutExpo }}
        />

        <div className="h-[42px] bg-white sm:h-[48px] lg:h-[52px]" />
      </section>

      <section
        className="bg-white pb-12 pt-14 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20"
        aria-label="How it works"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
          <m.div
            className="hidden lg:grid lg:grid-cols-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {STEPS.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                index={index}
                size="desktop"
              />
            ))}
          </m.div>

          <m.ol
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {STEPS.map((step, index) => (
              <li key={step.title} className="list-none">
                <StepCard step={step} index={index} size="mobile" />
              </li>
            ))}
          </m.ol>
        </div>
      </section>

      <section
        className="bg-white pb-14 pt-2 sm:pb-16 lg:pb-20"
        aria-labelledby="booking-options-heading"
      >
        <h2 id="booking-options-heading" className="sr-only">
          Booking options
        </h2>
        <m.div
          className="mx-auto grid max-w-[1200px] gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="rounded-xl border border-[#F27022]/55 bg-[#FFF8EE] p-5 text-center sm:p-6"
          >
            <m.div variants={scaleIn}>
              <Zap
                className="mx-auto h-7 w-7 text-[#1A1A1A]"
                fill="currentColor"
                strokeWidth={1}
              />
            </m.div>
            <h3 className="mt-4 font-home text-[17px] font-bold text-[#1A1A1A]">
              Express Booking
            </h3>
            <p className="mt-2 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
              Need a pandit urgently? Our Express Booking feature helps assign
              an available verified pandit as quickly as possible.
            </p>
          </m.article>

          <m.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="rounded-xl border border-[#F27022]/55 bg-[#FFF8EE] p-5 text-center sm:p-6"
          >
            <m.div variants={scaleIn}>
              <Crown
                className="mx-auto h-7 w-7 text-[#1A1A1A]"
                strokeWidth={1.8}
              />
            </m.div>
            <h3 className="mt-4 font-home text-[17px] font-bold text-[#1A1A1A]">
              Premium Booking
            </h3>
            <p className="mt-2 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
              Choose experienced and highly rated pandits for your special
              ceremonies.
            </p>
          </m.article>

          <m.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] p-5 text-center sm:p-6 md:col-span-2 lg:col-span-1"
          >
            <h3 className="font-home text-[17px] font-bold text-[#1A1A1A]">
              Ready to Book a Pandit?
            </h3>
            <p className="mx-auto mt-2 max-w-[22ch] font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
              Book your next puja effortlessly through the Ekatva Mobile App
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <StoreBadge store="google" variant="light" />
              <StoreBadge store="apple" variant="light" />
            </div>
          </m.article>
        </m.div>
      </section>
    </main>
  );
}

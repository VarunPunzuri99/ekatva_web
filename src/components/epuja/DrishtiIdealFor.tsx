import { m } from "framer-motion";
import {
  Activity,
  Eye,
  Home,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { DRISHTI_IDEAL } from "@/content/epujaDrishti";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function BlockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7.2 7.2 16.8 16.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS: Record<
  (typeof DRISHTI_IDEAL.items)[number]["icon"],
  LucideIcon | "block"
> = {
  eye: Eye,
  pulse: Activity,
  home: Home,
  block: "block",
  spark: Sparkles,
};

export function DrishtiIdealFor() {
  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="drishti-ideal-heading"
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
            id="drishti-ideal-heading"
            className="font-home-display text-[1.4rem] font-semibold text-[#8B2E28] sm:text-[1.65rem]"
          >
            {DRISHTI_IDEAL.title}
          </h2>
          <div
            className="mx-auto mt-2.5 h-[3px] w-14 rounded-full bg-[#F27022]"
            aria-hidden
          />
        </m.div>

        <m.ul
          className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {DRISHTI_IDEAL.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col items-center justify-center rounded-[14px] border border-[#E8DFD2] bg-white px-4 py-5 text-center"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF3E6] text-[#F27022]">
                    {Icon === "block" ? (
                      <BlockIcon className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                    )}
                  </span>
                  <p className="mt-3 font-home text-[13px] font-bold leading-snug text-[#4B5563] sm:text-[14px]">
                    {item.label}
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

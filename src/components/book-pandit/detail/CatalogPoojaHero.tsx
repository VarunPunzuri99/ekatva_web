import { m, useReducedMotion } from "framer-motion";
import { ArrowLeft, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  easeOutExpo,
  fadeUp,
  floatingMotion,
  heroStagger,
} from "@/lib/animations";
import type { OnlinePoojaDetail } from "@/services/onlinePooja";

export function CatalogPoojaHero({ detail }: { detail: OnlinePoojaDetail }) {
  const reduceMotion = useReducedMotion() ?? false;
  const { pathname } = useLocation();
  const fromEpuja = pathname.startsWith("/epuja");
  const backTo = fromEpuja ? "/epuja/poojas" : "/book-pandit";
  const backLabel = fromEpuja ? "Back to All Pujas" : "Back to ePandit";
  const eyebrow = fromEpuja ? "ePuja" : "ePandit";
  const { event, pooja, subtitle } = detail;

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="catalog-pooja-heading"
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

        <div className="relative mx-auto max-w-[1200px] px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
          >
            <Link
              to={backTo}
              className="inline-flex items-center gap-1.5 font-home text-[13px] font-semibold text-[#F27022] transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              {backLabel}
            </Link>
          </m.div>

          <div className="mt-6 grid items-end gap-6 lg:grid-cols-2 lg:gap-8">
            <m.div
              className="max-w-xl pb-8 sm:pb-10 lg:pb-[60px]"
              variants={heroStagger}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
            >
              <m.p
                variants={fadeUp}
                className="font-home text-[15px] font-bold text-[#F27022]"
              >
                {eyebrow} · {pooja.category || "Sacred Ritual"}
              </m.p>
              <m.h1
                id="catalog-pooja-heading"
                variants={fadeUp}
                className="mt-2 font-home text-[1.55rem] font-bold leading-[1.25] tracking-tight text-[#1A1A1A] sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.2rem]"
              >
                {event.title}
              </m.h1>
              <m.p
                variants={fadeUp}
                className="mt-2 font-home text-[14px] text-[#4B5563] sm:text-[15px]"
              >
                {subtitle}
              </m.p>

              <m.div
                variants={fadeUp}
                className="mt-4 flex flex-col gap-2 font-home text-[13px] text-[#4B5563] sm:text-[14px]"
              >
                {pooja.duration?.trim() && (
                  <span className="inline-flex items-center gap-2">
                    <Clock3
                      className="h-4 w-4 shrink-0 text-[#F27022]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    Duration: {pooja.duration}
                  </span>
                )}
                {pooja.godName?.trim() && (
                  <span className="inline-flex items-center gap-2">
                    <Sparkles
                      className="h-4 w-4 shrink-0 text-[#F27022]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {pooja.godName}
                  </span>
                )}
              </m.div>

              <m.div
                variants={fadeUp}
                className="mt-4 inline-flex items-center gap-1.5 font-home text-[13px] font-semibold text-[#2E7D32] sm:text-[14px]"
              >
                <ShieldCheck className="h-4 w-4" strokeWidth={2} aria-hidden />
                Verified pandits · Authentic Vedic procedures
              </m.div>
            </m.div>

            <div className="relative z-10 flex justify-center lg:justify-end lg:pr-10 xl:pr-14">
              <div className="mb-[-42px] sm:mb-[-48px] lg:mb-[-52px]">
                <m.div
                  className="relative z-10"
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 0.72, rotate: -6 }
                  }
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.75, ease: easeOutExpo }}
                >
                  <m.div
                    className="h-[170px] w-[170px] overflow-hidden rounded-full border-[4px] border-[#F27022] bg-[#FFF3E0] shadow-[0_8px_28px_rgba(242,112,34,0.2)] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]"
                    animate={reduceMotion ? undefined : floatingMotion}
                  >
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: "center top" }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-home text-[13px] text-[#9CA3AF]">
                        {event.category}
                      </div>
                    )}
                  </m.div>
                </m.div>
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
  );
}

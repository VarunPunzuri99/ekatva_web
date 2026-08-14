import { m } from "framer-motion";
import {
  Clock3,
  IndianRupee,
  Languages,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  formatInr,
  type OnlinePoojaDetail,
} from "@/services/onlinePooja";

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

export function EventPoojaIntroMeta({
  detail,
}: {
  detail: OnlinePoojaDetail;
}) {
  const { event, pooja, intro } = detail;

  const meta: {
    id: string;
    label: string;
    value: string;
    icon: LucideIcon | "om";
  }[] = [
    {
      id: "duration",
      icon: Clock3,
      label: "Duration",
      value: pooja.duration?.trim() || "As per tradition",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      value: event.location,
    },
    {
      id: "type",
      icon: "om",
      label: "Pooja Type",
      value: pooja.category?.trim() || "Online Pooja",
    },
    {
      id: "language",
      icon: Languages,
      label: "Language",
      value: pooja.language?.trim() || "Sanskrit / Regional",
    },
    {
      id: "deity",
      icon: Sparkles,
      label: "Deity",
      value: pooja.godName?.trim() || "Divine Blessings",
    },
    {
      id: "price",
      icon: IndianRupee,
      label: "Price",
      value:
        event.price > 0 ? formatInr(event.price) : "On request",
    },
  ];

  return (
    <section aria-label="Pooja overview">
      <div className="bg-white pb-10 pt-2 sm:pb-12">
        <m.p
          className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {intro}
        </m.p>
      </div>

      <div className="bg-white px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <m.div
          className="mx-auto max-w-[920px] rounded-[18px] bg-[#FEF5E7] px-5 py-7 sm:px-8 sm:py-8 lg:px-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <ul className="grid gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-7 lg:grid-cols-3">
            {meta.map((item) => {
              const Icon = item.icon;
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

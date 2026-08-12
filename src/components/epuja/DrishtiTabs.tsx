import { m } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { DRISHTI_TABS } from "@/content/epujaDrishti";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/animations";

type TabId = (typeof DRISHTI_TABS.tabs)[number]["id"];

function KalashWatermark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <path
        d="M60 12c8 10 12 18 12 26 0 8-5 13-12 13s-12-5-12-13c0-8 4-16 12-26Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M38 48h44c4 12 5 24 2 36-4 16-14 28-28 28s-24-12-28-28c-3-12-2-24 2-36Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M48 68h24M50 82h20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TabBody({ tab }: { tab: TabId }) {
  if (tab === "faq") {
    return (
      <div className="space-y-5">
        {DRISHTI_TABS.faq.map((item) => (
          <div key={item.q}>
            <p className="font-home text-[14px] font-bold text-[#5C2A1A]">
              {item.q}
            </p>
            <p className="mt-1.5 font-home text-[13px] leading-relaxed text-[#5C5C5C] sm:text-[14px]">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    );
  }

  const paragraphs =
    tab === "about"
      ? DRISHTI_TABS.about
      : tab === "vidhi"
        ? DRISHTI_TABS.vidhi
        : tab === "notes"
          ? DRISHTI_TABS.notes
          : DRISHTI_TABS.reviews;

  return (
    <div className="space-y-4">
      {paragraphs.map((p) => (
        <p
          key={p.slice(0, 28)}
          className="font-home text-[13px] leading-relaxed text-[#5C5C5C] sm:text-[14px]"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function DrishtiTabs() {
  const [active, setActive] = useState<TabId>("about");

  return (
    <section
      className="border-t border-[#E8DFD2] bg-white py-10 sm:py-12 lg:py-14"
      aria-label="Pooja details tabs"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div
          className="flex gap-5 overflow-x-auto border-b border-[#E8DFD2] pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-7"
          role="tablist"
          aria-label="Pooja information"
        >
          {DRISHTI_TABS.tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={`relative shrink-0 pb-3 font-home text-[13px] transition-colors sm:text-[14px] ${
                  isActive
                    ? "font-bold text-[#8B2E28]"
                    : "font-medium text-[#6B7280] hover:text-[#8B2E28]"
                }`}
              >
                {tab.label}
                {isActive ? (
                  <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#8B2E28]" />
                ) : null}
              </button>
            );
          })}
        </div>

        <m.div
          key={active}
          className="mt-7 grid items-start gap-7 lg:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={fadeUp} role="tabpanel">
            <TabBody tab={active} />
          </m.div>

          <m.aside
            variants={fadeUp}
            className="relative overflow-hidden rounded-[16px] border border-[#E8C9A0]/70 bg-[#FEF5E7] px-5 py-5 sm:px-6 sm:py-6"
          >
            <KalashWatermark className="pointer-events-none absolute top-1/2 right-3 h-28 w-28 -translate-y-1/2 text-[#F27022]/25 sm:right-5 sm:h-32 sm:w-32" />
            <h3 className="relative z-10 font-home text-[16px] font-bold text-[#8B2E28] sm:text-[17px]">
              {DRISHTI_TABS.receiveTitle}
            </h3>
            <ul className="relative z-10 mt-4 space-y-3">
              {DRISHTI_TABS.receive.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF3E6] text-[#F27022]">
                    <Check className="h-3 w-3" strokeWidth={2.6} aria-hidden />
                  </span>
                  <span className="font-home text-[13px] font-semibold text-[#5C2A1A] sm:text-[14px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </m.aside>
        </m.div>
      </div>
    </section>
  );
}

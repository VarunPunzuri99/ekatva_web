import { m } from "framer-motion";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { OnlinePoojaDetail } from "@/services/onlinePooja";

type TabId = "about" | "vidhi" | "notes" | "story";

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

export function EventPoojaTabs({ detail }: { detail: OnlinePoojaDetail }) {
  const tabs = useMemo(() => {
    const list: { id: TabId; label: string }[] = [
      { id: "about", label: "About Pooja" },
    ];
    if (detail.vidhanamSteps.length > 0) {
      list.push({ id: "vidhi", label: "Pooja Vidhi" });
    }
    if (detail.instructionBlocks.length > 0) {
      list.push({ id: "notes", label: "Important Notes" });
    }
    if (detail.pooja.shortStory?.trim()) {
      list.push({ id: "story", label: "Sacred Story" });
    }
    return list;
  }, [detail]);

  const [active, setActive] = useState<TabId>("about");
  const activeTab = tabs.some((tab) => tab.id === active)
    ? active
    : tabs[0]?.id ?? "about";

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
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
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
          key={activeTab}
          className="mt-7 grid items-start gap-7 lg:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={fadeUp} role="tabpanel" className="space-y-4">
            {activeTab === "about" && (
              <>
                {(detail.pooja.poojaDescription || detail.intro)
                  .split(/(?<=[.!?])\s+/)
                  .reduce<string[]>((acc, sentence, index) => {
                    if (index % 2 === 0) acc.push(sentence);
                    else
                      acc[acc.length - 1] = `${acc[acc.length - 1]} ${sentence}`;
                    return acc;
                  }, [])
                  .slice(0, 4)
                  .map((p) => (
                    <p
                      key={p.slice(0, 28)}
                      className="font-home text-[13px] leading-relaxed text-[#5C5C5C] sm:text-[14px]"
                    >
                      {p}
                    </p>
                  ))}
              </>
            )}

            {activeTab === "vidhi" &&
              detail.vidhanamSteps.map((step) => (
                <p
                  key={step.slice(0, 36)}
                  className="font-home text-[13px] leading-relaxed text-[#5C5C5C] sm:text-[14px]"
                >
                  {step}
                </p>
              ))}

            {activeTab === "notes" &&
              detail.instructionBlocks.map((block) => (
                <div key={`${block.title}-${block.body.slice(0, 20)}`}>
                  <p className="font-home text-[14px] font-bold text-[#5C2A1A]">
                    {block.title}
                  </p>
                  <p className="mt-1.5 font-home text-[13px] leading-relaxed text-[#5C5C5C] sm:text-[14px]">
                    {block.body}
                  </p>
                </div>
              ))}

            {activeTab === "story" && (
              <p className="font-home text-[13px] leading-relaxed text-[#5C5C5C] sm:text-[14px]">
                {detail.pooja.shortStory}
              </p>
            )}
          </m.div>

          <m.aside
            variants={fadeUp}
            className="relative overflow-hidden rounded-[16px] border border-[#E8C9A0]/70 bg-[#FEF5E7] px-5 py-5 sm:px-6 sm:py-6"
          >
            <KalashWatermark className="pointer-events-none absolute top-1/2 right-3 h-28 w-28 -translate-y-1/2 text-[#F27022]/25 sm:right-5 sm:h-32 sm:w-32" />
            <h3 className="relative z-10 font-home text-[16px] font-bold text-[#8B2E28] sm:text-[17px]">
              You Will Receive
            </h3>
            <ul className="relative z-10 mt-4 space-y-3">
              {detail.receive.map((item) => (
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

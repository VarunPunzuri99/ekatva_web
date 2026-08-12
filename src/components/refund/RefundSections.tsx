import { m } from "framer-motion";
import {
  Ban,
  CalendarDays,
  CircleAlert,
  ClipboardList,
  Clock3,
  Copy,
  Mail,
  ShieldAlert,
  Smartphone,
  Sparkles,
  UserX,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  REFUND_SECTION_ICONS,
  type RefundSectionIcon,
} from "@/content/refund";
import { refundPolicy } from "@/content/refundPolicy";
import type { LegalBlock } from "@/content/legalTypes";
import { easeOutExpo, fadeUpSoft } from "@/lib/animations";

const ICONS: Record<RefundSectionIcon, LucideIcon> = {
  clipboard: ClipboardList,
  smartphone: Smartphone,
  calendar: CalendarDays,
  zap: Zap,
  sparkles: Sparkles,
  userX: UserX,
  copy: Copy,
  alert: CircleAlert,
  ban: Ban,
  shield: ShieldAlert,
  clock: Clock3,
  mail: Mail,
};

/** Trigger as soon as a card peeks into view — not after scrolling past the whole grid. */
const cardViewport = {
  once: true,
  amount: 0.08,
  margin: "80px 0px 80px 0px",
} as const;

function renderBlocks(blocks: LegalBlock[], keyPrefix: string) {
  return blocks.map((block, index) => {
    const key = `${keyPrefix}-${index}`;

    if (block.type === "paragraph") {
      return (
        <p
          key={key}
          className="font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]"
        >
          {block.text}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={key} className="space-y-2.5 pl-0.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 font-home text-[13px] leading-relaxed text-[#444444] sm:text-[14px]"
            >
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F27022] shadow-[0_0_0_3px_rgba(242,112,34,0.12)]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div
        key={key}
        className="rounded-xl border border-[#F27022]/12 bg-gradient-to-br from-[#FFF8EE] to-[#FFF3E6] px-3.5 py-3.5 sm:px-4 sm:py-4"
      >
        <h4 className="font-home text-[12px] font-bold tracking-[0.04em] text-[#F27022] uppercase sm:text-[13px]">
          {block.title}
        </h4>
        <div className="mt-2.5 space-y-2.5">
          {renderBlocks(block.blocks, key)}
        </div>
      </div>
    );
  });
}

export function RefundSections() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFCFA] py-12 sm:py-14 lg:py-16"
      aria-labelledby="refund-sections-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent"
        aria-hidden
      />

      <h2 id="refund-sections-heading" className="sr-only">
        Cancellation and refund policy details
      </h2>

      <ol className="relative mx-auto grid max-w-[1200px] gap-5 px-4 sm:gap-6 sm:px-6 lg:grid-cols-2 lg:gap-7 lg:px-8 xl:max-w-[1320px] xl:gap-8 xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        {refundPolicy.sections.map((section, index) => {
          const iconKey =
            REFUND_SECTION_ICONS[index] ?? REFUND_SECTION_ICONS[0];
          const Icon = ICONS[iconKey];

          return (
            <m.li
              key={section.number}
              id={`section-${section.number}`}
              className="list-none"
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="visible"
              viewport={cardViewport}
              transition={{
                duration: 0.45,
                ease: easeOutExpo,
                delay: (index % 2) * 0.06,
              }}
            >
              <m.article
                className="group flex h-full gap-3.5 rounded-2xl border border-[#EDE6DC] bg-white p-5 shadow-[0_6px_22px_rgba(31,41,55,0.05)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#F27022]/40 hover:shadow-[0_14px_32px_rgba(242,112,34,0.12)] sm:gap-4 sm:p-6"
                whileHover={{
                  y: -3,
                  transition: { duration: 0.22, ease: easeOutExpo },
                }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFF1E6] to-[#FFE4CC] text-[#F27022] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-[#F27022]/10 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14"
                  aria-hidden
                >
                  <Icon
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    strokeWidth={1.75}
                  />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-home text-[15px] font-bold text-[#F27022] sm:text-[16px] lg:text-[17px]">
                    {section.number}. {section.title}
                  </h3>
                  <div className="mt-2.5 space-y-3">
                    {renderBlocks(section.blocks, `s${section.number}`)}
                  </div>
                </div>
              </m.article>
            </m.li>
          );
        })}
      </ol>
    </section>
  );
}

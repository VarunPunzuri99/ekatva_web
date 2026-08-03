import { m } from "framer-motion";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

type Highlight = {
  id: string;
  label: string;
  icon: "badge" | "pricing" | "calendar" | "check";
};

const HIGHLIGHTS: Highlight[] = [
  { id: "verified", label: "Verified Pandit", icon: "badge" },
  { id: "pricing", label: "Transparent Pricing", icon: "pricing" },
  { id: "flexible", label: "Flexible Booking", icon: "calendar" },
  { id: "quality", label: "Quality Assured", icon: "check" },
];

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 5.5 27.8 8.2l4.6-.6 1.8 4.3 4.3 1.8-.6 4.6 2.7 3.8-2.7 3.8.6 4.6-4.3 1.8-1.8 4.3-4.6-.6L24 42.5l-3.8-2.7-4.6.6-1.8-4.3-4.3-1.8.6-4.6L7.4 24l2.7-3.8-.6-4.6 4.3-1.8 1.8-4.3 4.6.6L24 5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 24.2 21.8 28.5 31 19.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 6.5c6.2 0 11.5 2.4 14.2 6.2v8.4c0 8.6-5.6 15.6-14.2 20.4C15.4 36.7 9.8 29.7 9.8 21.1v-8.4C12.5 8.9 17.8 6.5 24 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="24"
        y="27.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="16"
        fontWeight="700"
        fontFamily="Poppins, Arial, sans-serif"
      >
        ₹
      </text>
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect
        x="9"
        y="11"
        width="30"
        height="28"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M9 19.5h30" stroke="currentColor" strokeWidth="2" />
      <path d="M17 7.5v7M31 7.5v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17.5" cy="26.5" r="1.6" fill="currentColor" />
      <circle cx="24" cy="26.5" r="1.6" fill="currentColor" />
      <circle cx="30.5" cy="26.5" r="1.6" fill="currentColor" />
      <circle cx="17.5" cy="32.5" r="1.6" fill="currentColor" />
      <circle cx="24" cy="32.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 25.5 20.5 34 37 15"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICON_MAP = {
  badge: BadgeIcon,
  pricing: PricingIcon,
  calendar: CalendarIcon,
  check: CheckIcon,
} as const;

export function BookPanditHighlightsSection() {
  return (
    <section
      className="bg-white pb-10 pt-2 sm:pb-12 lg:pb-14"
      aria-label="Why book with Ekatva"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.p
          className="mx-auto max-w-[52rem] text-center font-home text-[15px] leading-[1.7] font-semibold text-[#9C2525] sm:text-[16px] lg:text-[17px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Book qualified and verified pandits for pujas, homams, havans, temple
          rituals, and special ceremonies. At your home or any preferred
          location, with devotion and tradition.
        </m.p>

        <m.ul
          className="mx-auto mt-8 grid max-w-[720px] grid-cols-2 gap-3 sm:mt-9 sm:gap-3.5 md:grid-cols-4 lg:mt-10 lg:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {HIGHLIGHTS.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none">
                <m.article
                  className="flex flex-col items-center justify-center rounded-lg border-[1.5px] border-[#D48E38] bg-white px-2.5 py-3.5 text-center sm:px-3 sm:py-4"
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 10px 22px rgba(156,37,37,0.1)",
                  }}
                  transition={{ duration: 0.35, ease: easeOutExpo }}
                >
                  <Icon className="h-8 w-8 text-[#C47A2C] sm:h-9 sm:w-9" />
                  <p className="mt-2 max-w-[11ch] font-home text-[12px] leading-snug font-bold text-[#9C2525] sm:text-[13px]">
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

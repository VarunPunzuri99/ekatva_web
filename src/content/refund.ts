/** Refund page UI copy — body sections come from refundPolicy.ts (source of truth). */

export const REFUND_HERO = {
  eyebrow: "Cancellation & Refund Policy",
  title: "Refund & Cancellation",
  subtitle:
    "How cancellations, refunds, and service-related disputes are handled on Ekatva.",
} as const;

export const REFUND_HELP = {
  lead: "Need help with a refund?",
  body: "If you have questions about cancellations, refunds, or payments, we're here to help.",
  cta: "Contact Us",
  href: "/contact-us",
} as const;

export const REFUND_NOTE = {
  title: "Important Note",
} as const;

export const REFUND_CTA = {
  title: "Bring your Spiritual Journey with Ekatva today.",
  subtitle: "Your faith. Our platform. Divine blessings.",
} as const;

/** Icon keys mapped 1:1 to refundPolicy.sections by number. */
export const REFUND_SECTION_ICONS = [
  "clipboard",
  "smartphone",
  "calendar",
  "zap",
  "sparkles",
  "userX",
  "copy",
  "alert",
  "ban",
  "shield",
  "clock",
  "mail",
] as const;

export type RefundSectionIcon = (typeof REFUND_SECTION_ICONS)[number];

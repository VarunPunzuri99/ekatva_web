/** Terms & Conditions page copy aligned to UX mock screens. */

export const TERMS_HERO = {
  eyebrow: "Terms & Conditions",
  title: "Ekatva Conditions",
  subtitle:
    "By accessing or using Ekatva, you agree to be bound by these Terms & Conditions and our Privacy Policy.",
  privacyHref: "/privacy-policy",
  privacyLabel: "Privacy Policy",
} as const;

export const TERMS_SECTIONS = [
  {
    id: "acceptance",
    icon: "check" as const,
    title: "1. Acceptance of Terms",
    description:
      "By accessing or using Ekatva, you agree to be bound by these Terms & Conditions and our Privacy Policy.",
  },
  {
    id: "eligibility",
    icon: "user" as const,
    title: "2. User Eligibility",
    description:
      "You must be at least 18 years old to use our services. By using Ekatva, you represent that you meet this requirement.",
  },
  {
    id: "services",
    icon: "grid" as const,
    title: "3. Services Offered",
    description:
      "Ekatva provides spiritual services including Book Pandit, Kundli, Astrology, E-Pradakshina, E-Japa, E-Wish and related offerings.",
  },
  {
    id: "responsibilities",
    icon: "shield" as const,
    title: "4. User Responsibilities",
    description:
      "You agree to provide accurate information, use the platform respectfully, and not misuse any services or content.",
  },
  {
    id: "bookings",
    icon: "card" as const,
    title: "5. Bookings & Payments",
    description:
      "All bookings are subject to availability. Payments must be completed as per the selected service terms.",
  },
  {
    id: "cancellations",
    icon: "refresh" as const,
    title: "6. Cancellations & Refunds",
    description:
      "Cancellation and refund policies vary by service and will be clearly communicated at the time of booking.",
  },
  {
    id: "ip",
    icon: "award" as const,
    title: "7. Intellectual Property",
    description:
      "All content, trademarks, designs, and materials on Ekatva are the property of Ekatva or its licensors and may not be copied without permission.",
  },
  {
    id: "prohibited",
    icon: "ban" as const,
    title: "8. Prohibited Activities",
    description:
      "Users must not engage in fraudulent activity, misuse services, harass others, or violate any applicable laws.",
  },
  {
    id: "liability",
    icon: "warning" as const,
    title: "9. Limitation of Liability",
    description:
      "Ekatva is not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
  },
  {
    id: "indemnification",
    icon: "document" as const,
    title: "10. Indemnification",
    description:
      "You agree to indemnify and hold Ekatva harmless from any claims arising from your misuse of the platform or violation of these terms.",
  },
  {
    id: "third-party",
    icon: "users" as const,
    title: "11. Third-Party Services",
    description:
      "Ekatva may integrate third-party services. We are not responsible for their content, policies, or practices.",
  },
  {
    id: "termination",
    icon: "userX" as const,
    title: "12. Termination",
    description:
      "We reserve the right to suspend or terminate accounts that violate these Terms & Conditions.",
  },
  {
    id: "changes",
    icon: "edit" as const,
    title: "13. Changes to Terms",
    description:
      "Ekatva may update these Terms periodically. Continued use of the platform constitutes acceptance of the updated terms.",
  },
  {
    id: "governing",
    icon: "scale" as const,
    title: "14. Governing Law",
    description:
      "These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Hyderabad, Telangana.",
  },
  {
    id: "contact",
    icon: "mail" as const,
    title: "15. Contact Us",
    description:
      "For any questions regarding these Terms, contact us at connect@ekatva.online or +91 6303515006.",
  },
  {
    id: "effective",
    icon: "calendar" as const,
    title: "16. Effective Date",
    description:
      "These Terms & Conditions are effective as of May 21, 2025.",
  },
] as const;

export const TERMS_NOTE = {
  title: "Important Note",
  body: "These Terms & Conditions constitute a legally binding agreement between you and Ekatva. Please read them carefully before using our services.",
} as const;

export const TERMS_HELP = {
  lead: "We're here if you need clarity.",
  body: "If you have any questions about these Terms & Conditions, we're here to help.",
  cta: "Contact Us",
  href: "/contact-us",
} as const;

export const TERMS_CTA = {
  title: "Bring your Spiritual Journey with Ekatva today.",
  subtitle: "Your faith. Our platform. Divine blessings.",
} as const;

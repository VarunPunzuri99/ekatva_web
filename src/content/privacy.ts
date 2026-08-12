/** Privacy Policy page copy aligned to UX mock screens. */

export const PRIVACY_HERO = {
  eyebrow: "Privacy Policy",
  title: "Your Privacy, Our Responsibility.",
  subtitle: "Privacy matters.",
} as const;

export const PRIVACY_INTRO =
  "At Ekatva, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.";

export const PRIVACY_PRINCIPLES = [
  {
    id: "protect",
    icon: "shield" as const,
    title: "We Protect",
    description:
      "Your information with industry-standard security protocols.",
  },
  {
    id: "respect",
    icon: "user" as const,
    title: "We Respect",
    description: "Your privacy and never sell your personal information.",
  },
  {
    id: "responsible",
    icon: "lock" as const,
    title: "We Use Responsibly",
    description: "Your data is only used to provide and improve services.",
  },
  {
    id: "transparent",
    icon: "eye" as const,
    title: "We Are Transparent",
    description: "Clear explanations of what data we collect and why.",
  },
  {
    id: "control",
    icon: "settings" as const,
    title: "You're In Control",
    description: "Manage your data and active privacy preferences.",
  },
  {
    id: "support",
    icon: "headset" as const,
    title: "We Are Here",
    description: "Dedicated support for any privacy queries or concerns.",
  },
] as const;

export const PRIVACY_SECTIONS = [
  {
    id: "collect",
    icon: "user" as const,
    title: "Information We Collect",
    description:
      "We may collect account details, contact information, spiritual preferences you choose to share, device and usage data, and location when needed to fulfill bookings and services.",
  },
  {
    id: "use",
    icon: "document" as const,
    title: "How We Use Your Information",
    description:
      "We use your information to provide, personalize, and improve our services, process transactions, send service updates, communicate with you, and ensure safety and security on our platform.",
  },
  {
    id: "sharing",
    icon: "share" as const,
    title: "Sharing of Information",
    description:
      "We do not sell your personal data. We may share your information with trusted service providers and verified pandits strictly for the purpose of fulfilling your requests and providing our services.",
  },
  {
    id: "security",
    icon: "lock" as const,
    title: "Data Security",
    description:
      "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, alteration, or disclosure.",
  },
  {
    id: "cookies",
    icon: "shield" as const,
    title: "Cookies & Tracking Technologies",
    description:
      "We use cookies and similar technologies to enhance your browsing experience, analyze usage, and personalize content. You can manage cookie preferences in your browser settings.",
  },
  {
    id: "rights",
    icon: "control" as const,
    title: "Your Rights & Choices",
    description:
      "You may access, correct, or request deletion of your personal information, and withdraw consent where applicable. Manage preferences in-app or contact our support team for assistance.",
  },
  {
    id: "changes",
    icon: "edit" as const,
    title: "Changes to This Policy",
    description:
      "We may update this Privacy Policy periodically. Continued use of Ekatva constitutes acceptance of the updated policy. Material changes will be communicated through the app or website.",
  },
] as const;

export const PRIVACY_TRUST = {
  title: "Your Trust Inspires Us",
  body: "Ekatva is more than a platform — it's a sacred connection of trust, devotion, and technology. We are committed to keeping your information safe and your experience spiritual.",
} as const;

export const PRIVACY_HELP = {
  lead: "Your privacy is important to us.",
  body: "If you have any questions about this Privacy Policy, we're here to help.",
  cta: "Contact Us",
  href: "/contact-us",
} as const;

export const PRIVACY_CTA = {
  title: "Bring your Spiritual Journey with Ekatva today.",
  subtitle: "Your faith. Our platform. Divine blessings.",
} as const;

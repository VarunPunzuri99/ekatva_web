/** Contact page copy aligned to UX mock screens. */

import { SOCIAL_LINKS } from "@/lib/constants";

export const CONTACT_HERO = {
  eyebrow: "Contact",
  title: "We're Here to Help You",
  subtitle: "Our team is always ready to assist you.",
} as const;

export const CONTACT_INTRO =
  "Have a question, need support, or want to share feedback? Our team is always ready to assist you.";

export const CONTACT_HIGHLIGHTS = [
  {
    id: "support",
    icon: "heart" as const,
    title: "Quick Support",
    description: "Traditional Disti rituals as per Vedic scriptures.",
  },
  {
    id: "secure",
    icon: "chip" as const,
    title: "Trusted & Secure",
    description: "Your privacy and trust are our priority.",
  },
  {
    id: "customer",
    icon: "lock" as const,
    title: "Customer First",
    description: "We listen, we care, we solve.",
  },
] as const;

export const CONTACT_QUERY_TYPES = [
  "General Inquiry",
  "Support",
  "Feedback",
  "Booking Issue",
  "Other",
] as const;

export const CONTACT_PAGE = {
  eyebrow: CONTACT_HERO.eyebrow,
  title: CONTACT_HERO.title,
  subtitle: CONTACT_INTRO,
  formTitle: "Send us a Message",
  formHint: "Fill out the form below and we'll get back to you shortly.",
  successTitle: "Message sent",
  successDescription: "Thank you for reaching out. We'll reply soon.",
  attachHint: "Support docs, screenshots (Max 5MB)",
  maxAttachmentBytes: 5 * 1024 * 1024,
} as const;

export const COMPANY_CONTACT = {
  brand: "Ekatva",
  legalName: "Metaglobe Technologies Private Limited",
  tagline: "Tradition, technology, and trust — closer to the divine.",
  panelTitle: "Get in Touch",
  followTitle: "Follow Us",
  addressLines: [
    "Metaglobe Technologies Private Limited",
    "Plot # 37 & 38, Serinity Square,",
    "Madhapur, Hyderabad,",
    "Telangana 500081",
  ],
  phone: "+91 6303515006",
  phoneHref: "tel:+916303515006",
  whatsappHref: "https://wa.me/916303515006",
  phoneNote: "9:00 AM - 9:00 PM",
  email: "connect@ekatva.online",
  emailHref: "mailto:connect@ekatva.online",
  website: "ekatva.online",
  websiteHref: "https://ekatva.online",
  hours: "9:00 AM - 9:00 PM",
  social: [
    {
      label: "Facebook",
      href: SOCIAL_LINKS.facebook,
      kind: "facebook" as const,
    },
    {
      label: "Instagram",
      href: SOCIAL_LINKS.instagram,
      kind: "instagram" as const,
    },
    {
      label: "YouTube",
      href: SOCIAL_LINKS.youtube,
      kind: "youtube" as const,
    },
    {
      label: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
      kind: "linkedin" as const,
    },
  ],
} as const;

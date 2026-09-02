/** Home page content aligned to UX mock screens. */

import { APP_STORE_LINKS } from "@/lib/appStore";
import { SOCIAL_LINKS } from "@/lib/constants";

export const HOME_NAV = [
  { label: "Features", href: "/features" },
  { label: "Events", href: "/events" },
  { label: "ePanchangam", href: "/panchangam" },
  { label: "eAstro", href: "/kundli" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact-us" },
] as const;

export const HOME_HELP_POINTS = [
  "Save time by booking pujas & sevas from anywhere",
  "Connect with verified pandits for authentic rituals",
  "Get reminders for important tithis, vratams & festivals",
  "Stay consistent with daily spiritual routines",
  "Remove negativity and invite positivity into life",
  "Align your day with accurate Panchangam guidance",
] as const;

export const HOME_ASTROGURU = {
  title: "AstroGuru",
  subtitle: "Ask. Understand. Receive Divine Guidance.",
  description:
    "AstroGuru is your personal AI Astro coach that combines ancient wisdom with advanced AI to answer your questions about life, career, health and relationships — privately, clearly and anytime you need divine guidance.",
  href: "/astroguru",
  features: [
    {
      id: "ask",
      icon: "ask" as const,
      title: "Ask Anything",
      description: "Life, career, health, relationships & more",
    },
    {
      id: "insights",
      icon: "insights" as const,
      title: "Personalized Insights",
      description: "Based on your birth details",
    },
    {
      id: "remedies",
      icon: "remedies" as const,
      title: "Remedies & Guidance",
      description: "Practical solutions for your problems",
    },
    {
      id: "private",
      icon: "private" as const,
      title: "Private & Secure",
      description: "Your data is safe with us",
    },
  ],
  stats: [
    {
      id: "satisfaction",
      icon: "star" as const,
      value: "98%",
      label: "User Satisfaction",
    },
    {
      id: "available",
      icon: "clock" as const,
      value: "24/7",
      label: "Always Available",
    },
    {
      id: "hybrid",
      icon: "shield" as const,
      value: "AI + Vedic",
      label: "Wisdom Hybrid",
    },
  ],
  cta: {
    title: "Experience the Power of AI & Astrology",
    subtitle:
      "Get clarity in confusion, direction in uncertainty, and peace in every decision.",
    label: "Download App",
    button: "Talk to AstroGuru",
  },
} as const;

export const HOME_STATS = [
  {
    value: "50000+",
    label: "Happy Devotees",
    icon: "devotees" as const,
  },
  {
    value: "1000+",
    label: "Experts & Pujarees",
    icon: "experts" as const,
  },
  {
    value: "24/7",
    label: "Devotional Support",
    icon: "support" as const,
  },
] as const;

export const HOME_TESTIMONIALS = [
  {
    quote:
      "ePradakshina is a beautiful way to stay connected with devotion every day.",
    name: "Anitha M.",
    place: "Chennai",
  },
  {
    quote:
      "Booking a pandit through Ekatva was simple, trusted and deeply meaningful.",
    name: "Ravi K.",
    place: "Hyderabad",
  },
  {
    quote:
      "The live puja experience brought peace to our family even from afar.",
    name: "Meera S.",
    place: "Bengaluru",
  },
  {
    quote:
      "AstroGuru guidance helped us choose the right muhurtham with confidence.",
    name: "Suresh P.",
    place: "Madurai",
  },
] as const;

export const HOME_FOOTER = {
  about:
    "Ekatva is your spiritual companion connecting you to divine services, rituals, knowledge and a community of faith.",
  quote: "Let devotion be your path, divinity be your guide.",
  copyright: "Copyrights © Ekatva. All rights reserved",
  explore: [
    { label: "ePandit", href: "/book-pandit" },
    { label: "ePradakshina", href: "/epradakshina" },
    { label: "eAstro", href: "/kundli" },
    { label: "eWish", href: "/ewish" },
    { label: "ePanchangam", href: "/panchangam" },
    { label: "eDisti", href: "/edisti" },
    { label: "eJapa", href: "/ejapa" },
    { label: "ePuja", href: "/epuja" },
  ],
  helpful: [
    { label: "AI Astroguru", href: "/astroguru" },
    { label: "Events", href: "/events" },
    { label: "About us", href: "/about" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund & Cancellation", href: "/cancellation-refund-policy" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  support: {
    phone: "+91 6303515006",
    phoneHref: "tel:+916303515006",
    email: "connect@ekatva.online",
    emailHref: "mailto:connect@ekatva.online",
    hours: "Mon - Sat: 6:00 AM - 9:00 PM",
    address:
      "Metaglobe Technologies Private Limited, Plot # 37 & 38, Serinity Square, Madhapur, Hyderabad, Telangana 500081",
  },
  appStores: [
    {
      label: "Get it on",
      store: "GooglePlay",
      href: APP_STORE_LINKS.googlePlay,
      kind: "google" as const,
    },
    {
      label: "Get it on",
      store: "App Store",
      href: APP_STORE_LINKS.appStore,
      kind: "apple" as const,
    },
  ],
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
  payments: ["VISA", "Mastercard", "RuPay", "UPI", "Net Banking"] as const,
} as const;

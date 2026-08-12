import { homeAssets } from "@/assets/home";

/** Home page content aligned to UX mock screens. */

export const HOME_NAV = [
  { label: "Features", href: "/features" },
  { label: "Events", href: "/events" },
  { label: "Panchangam", href: "/panchangam" },
  { label: "Kundli", href: "/kundli" },
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

export const HOME_EVENTS = [
  {
    title: "Pournami Abhishekam",
    date: "June 10, 2025 | 8:00 PM",
    location: "Live from Rameswaram",
    image: homeAssets.pournamiAbhishekam,
  },
  {
    title: "Shani Triyodashi Puja",
    date: "June 18, 2025 | 7:30 PM",
    location: "Live from Tirunallar",
    image: homeAssets.pournami2,
  },
  {
    title: "Rahu Kethu Homam",
    date: "June 22, 2025 | 6:00 AM",
    location: "Live from Kalahasti",
    image: homeAssets.rahuKethu,
  },
  {
    title: "Vaikunta Ekadashi",
    date: "July 2, 2025 | 5:00 AM",
    location: "Live from Srirangam",
    image: homeAssets.vaikuntaEkadashi,
  },
] as const;

export const HOME_FOOTER = {
  about:
    "Ekatva is your spiritual companion connecting you to divine services, rituals, knowledge and a community of faith.",
  quote: "Let devotion be your path, divinity be your guide.",
  copyright: "Copyrights © Ekatva. All rights reserved",
  explore: [
    { label: "Book A Pandit", href: "/book-pandit" },
    { label: "ePradakshina", href: "/epradakshina" },
    { label: "Astroguru", href: "/astroguru" },
    { label: "eAstrology", href: "/kundli" },
    { label: "eWish", href: "/ewish" },
    { label: "Panchangam", href: "/panchangam" },
    { label: "eDisti", href: "/edisti" },
    { label: "eJapa", href: "/ejapa" },
    { label: "ePuja", href: "/epuja" },
    { label: "Events", href: "/events" },
  ],
  helpful: [
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
      "Plot # 37 & 38, Serinity Square, Madhapur, Hyderabad, Telangana 500081",
  },
  appStores: [
    {
      label: "Get it on",
      store: "GooglePlay",
      href: "#",
      kind: "google" as const,
    },
    {
      label: "Get it on",
      store: "App Store",
      href: "#",
      kind: "apple" as const,
    },
  ],
  social: [
    { label: "Facebook", href: "#", kind: "facebook" as const },
    { label: "Instagram", href: "#", kind: "instagram" as const },
    { label: "YouTube", href: "#", kind: "youtube" as const },
  ],
  payments: ["VISA", "Mastercard", "RuPay", "UPI", "Net Banking"] as const,
} as const;

import { homeAssets } from "@/assets/home";

/** Home page content aligned to UX mock screens. */

export const HOME_NAV = [
  { label: "Features", href: "#features" },
  { label: "Puja's & Sevas", href: "#services" },
  { label: "Panchangam", href: "/panchangam" },
  { label: "Kundli", href: "#kundli" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
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

export const HOME_FOOTER_FEATURES = [
  { label: "ePradakshina", href: "#services" },
  { label: "eJapa", href: "#services" },
  { label: "AstroGuru", href: "#services" },
  { label: "ePuja", href: "#services" },
  { label: "Book Pandit", href: "/book-pandit" },
  { label: "eDisti", href: "#services" },
  { label: "eWish", href: "#services" },
] as const;

export const HOME_FOOTER_ABOUT = [
  "About Us",
  "Our Mission",
  "vision",
  "Why Ekatva",
  "Careers",
  "Press & Media",
  "Testimonials",
  "Success Stories",
  "Blog",
  "News & Updates",
] as const;

export const HOME_FOOTER_COMPANY = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
  { label: "Cancellation Policy", path: "/cancellation-refund-policy" },
  { label: "Refund Policy", path: "/cancellation-refund-policy" },
  { label: "Cookie Policy", path: "#" },
  { label: "Disclaimer", path: "#" },
  { label: "Code of Conduct", path: "#" },
] as const;

import ganapathiPooja from "@/assets/images/poojas/ganapathi_pooja.png";
import navagrahaPng from "@/assets/images/poojas/navagraha_ppoja.png";
import rudrabishekamPng from "@/assets/images/poojas/rudrabishekam.png";
import laxmiPng from "@/assets/images/poojas/laxmi_pooja.png";
import sathyanarayanaPng from "@/assets/images/poojas/sathyanarayana.png";
import vasstu from "@/assets/images/poojas/vasstupooja.jpg";
import dristiNivarana from "@/assets/images/poojas/dristi_nivarana_pooja.jpg";

/** ePuja page copy aligned to UX mock screens. */

export const EPUJA_HERO = {
  eyebrow: "ePuja",
  title: "Sacred Rituals, Made Simple",
  subtitle: "Vedic pujas performed by qualified pandits",
} as const;

export const EPUJA_INTRO =
  "Book authentic Vedic pujas performed by qualified pandits with devotion and tradition. From your home, connect with the divine, anytime, anywhere.";

export const EPUJA_WHAT = {
  title: "What is ePuja?",
  subtitle:
    "ePuja lets you book authentic Vedic rituals online — performed by verified pandits with complete devotion, tradition and transparency.",
  items: [
    {
      id: "booking",
      icon: "calendar" as const,
      title: "Easy Booking",
      description: "Book your preferred puja in a few simple steps.",
    },
    {
      id: "pandits",
      icon: "smile" as const,
      title: "Verified Pandits",
      description: "Experienced & verified Vedic experts for every ritual.",
    },
    {
      id: "rituals",
      icon: "lotus" as const,
      title: "Authentic Rituals",
      description: "Traditional procedures as per Vedic scriptures.",
    },
    {
      id: "live",
      icon: "video" as const,
      title: "Live Updates",
      description: "Stay informed with timely ritual progress updates.",
    },
    {
      id: "secure",
      icon: "shield" as const,
      title: "Trusted & Secure",
      description: "Safe payments and trusted spiritual service.",
    },
  ],
} as const;

export const EPUJA_POPULAR = {
  title: "Popular Pujas",
  items: [
    {
      id: "drishti-nivarana",
      title: "Drishti Nivarana Pooja",
      description: "Remove Negative Energy & Evil Eye",
      image: dristiNivarana,
      imagePosition: "50% 18%",
      href: "/epuja/drishti-nivarana",
    },
    {
      id: "ganesh",
      title: "Ganesh Puja",
      description:
        "Invoke Lord Ganesha's blessings to remove obstacles and begin auspicious journeys.",
      image: ganapathiPooja,
      imagePosition: "50% 20%",
    },
    {
      id: "navagraha",
      title: "Navagraha Puja",
      description:
        "Balance planetary influences and invite harmony, clarity and prosperity.",
      image: navagrahaPng,
      imagePosition: "50% 35%",
    },
    {
      id: "rudrabhishek",
      title: "Maha Rudrabhishek",
      description:
        "A powerful Shiva ritual for purification, strength and divine protection.",
      image: rudrabishekamPng,
      imagePosition: "50% 40%",
    },
    {
      id: "lakshmi",
      title: "Lakshmi Puja",
      description:
        "Invite Goddess Lakshmi's grace for abundance, wealth and well-being.",
      image: laxmiPng,
      imagePosition: "50% 25%",
    },
    {
      id: "satyanarayan",
      title: "Satyanarayan Puja",
      description:
        "A sacred thanksgiving ritual for fulfillment of wishes and family peace.",
      image: sathyanarayanaPng,
      imagePosition: "50% 18%",
    },
    {
      id: "vastu",
      title: "Vastu Puja",
      description:
        "Harmonize your space with Vastu rituals for positivity and prosperity.",
      image: vasstu,
      imagePosition: "50% 45%",
    },
  ],
} as const;

export const EPUJA_HOW = {
  title: "How ePuja Works",
  steps: [
    {
      id: "choose-puja",
      icon: "scroll" as const,
      title: "Choose Puja",
      description: "Browse and select the puja you wish to book.",
    },
    {
      id: "choose-pandit",
      icon: "user" as const,
      title: "Choose Pandit",
      description: "Select an experienced pandit for your puja.",
    },
    {
      id: "date-time",
      icon: "calendar" as const,
      title: "Select Date & Time",
      description: "Pick a convenient date and time for the puja.",
    },
    {
      id: "details",
      icon: "form" as const,
      title: "Provide Details",
      description: "Share your name, gotra, and other details.",
    },
    {
      id: "payment",
      icon: "card" as const,
      title: "Secure Payment",
      description: "Make a safe and secure payment online.",
    },
    {
      id: "performed",
      icon: "flame" as const,
      title: "Puja Performed",
      description: "Our pandit performs the puja & sends blessings.",
    },
  ],
} as const;

export const EPUJA_TRUST = {
  title: "Why Choose Ekatva ePuja?",
  tagline: "Your devotion, our responsibility.",
  items: [
    {
      id: "authentic",
      icon: "lotus" as const,
      title: "Authentic Vedic Rituals",
    },
    {
      id: "verified",
      icon: "userCheck" as const,
      title: "Experienced & Verified Pandits",
    },
    {
      id: "samagri",
      icon: "package" as const,
      title: "Complete Puja Samagri",
    },
    {
      id: "updates",
      icon: "bell" as const,
      title: "Timely Updates",
    },
    {
      id: "trust",
      icon: "heart" as const,
      title: "Devotion & Trust",
    },
  ],
} as const;

export const EPUJA_CTA = {
  title: "Start Your Divine Conversation",
  subtitle: "Connect with AstroGuru now and unlock the answers you seek.",
} as const;

export type EpujaPopularItem = (typeof EPUJA_POPULAR.items)[number];

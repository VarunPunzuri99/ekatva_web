import pradakshinaArt from "@/assets/images/ePradakshina/ePradakshina_imae.png";
import panchangamArt from "@/assets/images/panchangam_pic.png";

/** Features page copy aligned to UX mock screens. */

export const FEATURES_HERO = {
  eyebrow: "Features",
  title: "Powerful Features for Your Spiritual Journey",
  subtitle:
    "Explore divine services designed to keep your faith, rituals and spiritual growth connected — anytime, anywhere.",
} as const;

export const FEATURES_SECTION = {
  title: "Everything You Need, All in One Place",
  subtitle:
    "Discover features that make your spiritual journey simple, personal and fulfilling.",
} as const;

export const FEATURES_CTA = {
  title: "Bring your Spiritual Journey with Ekatva today.",
  subtitle: "Your faith. Our platform. Divine blessings.",
} as const;

/** All home dashboard services + Astrology & Panchangam from mock. */
export const FEATURES_SERVICES = [
  {
    id: "book-pandit",
    title: "ePandit",
    description:
      "Book experienced and verified Pandits for your pujas, homas and rituals.",
    icon: "/assets/service-book-pandit.png",
    href: "/book-pandit",
  },
  {
    id: "epradakshina",
    title: "ePradakshina",
    description:
      "A sacred way to express devotion through every virtual step.",
    icon: pradakshinaArt,
    href: "/epradakshina",
  },
  {
    id: "eastrology",
    title: "eAstro",
    description:
      "Get personalized kundli insights and guidance for life's important decisions.",
    icon: "/assets/eAstro.png",
    href: "/kundli",
  },
  {
    id: "ejapa",
    title: "eJapa",
    description:
      "Chant sacred mantras, track your practice, and invite peace and blessings.",
    icon: "/assets/service-japa.png",
    href: "/ejapa",
  },
  {
    id: "ewish",
    title: "eWish",
    description:
      "Offer your wish with faith and receive personalized spiritual guidance.",
    icon: "/assets/eWish.png",
    href: "/ewish",
  },
  {
    id: "edisti",
    title: "eDisti",
    description:
      "Remove negative energies and protect your home and loved ones.",
    icon: "/assets/service-dristi.png",
    href: "/edisti",
  },
  {
    id: "panchangam",
    title: "ePanchangam",
    description:
      "Stay aligned with accurate tithi, nakshatra and muhurtham guidance every day.",
    icon: panchangamArt,
    href: "/panchangam",
  },
  {
    id: "epuja",
    title: "ePuja",
    description:
      "Participate in sacred pujas from anywhere and receive divine blessings.",
    icon: "/assets/ePooja.png",
    href: "/epuja",
  },
] as const;

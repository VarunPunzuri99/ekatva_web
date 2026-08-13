import pradakshinaArt from "@/assets/images/ePradakshina/ePradakshina_imae.png";
import panchangamArt from "@/assets/images/panchangam_pic.png";

const ePandit = {
  icon: "/assets/service-book-pandit.png",
  title: "ePANDIT",
  description:
    "Book experienced and verified Pandits for your pujas, homas and rituals.",
  href: "/book-pandit",
} as const;

const ePuja = {
  icon: "/assets/service-puja.png",
  title: "ePUJA",
  description:
    "Participate in sacred pujas from anywhere and receive divine blessings.",
  href: "/epuja",
} as const;

const aiAstroguru = {
  icon: "/assets/service-astrology.png",
  title: "AI ASTROGURU",
  description:
    "Consult with expert astrologers for guidance on life's important decisions.",
  href: "/astroguru",
} as const;

const eJapa = {
  icon: "/assets/service-japa.png",
  title: "eJAPA",
  description:
    "Book Japa services for peace, health, prosperity and spiritual growth.",
  href: "/ejapa",
} as const;

const eDisti = {
  icon: "/assets/service-dristi.png",
  title: "eDISTI",
  description:
    "Remove negative energies and protect your home and loved ones.",
  href: "/edisti",
} as const;

const ePradakshina = {
  icon: pradakshinaArt,
  title: "ePRADAKSHINA",
  description:
    "A sacred way to express devotion through every virtual step.",
  href: "/epradakshina",
} as const;

const ePanchangam = {
  icon: panchangamArt,
  title: "ePANCHANGAM",
  description:
    "Stay aligned with accurate tithi, nakshatra and muhurtham guidance every day.",
  href: "/panchangam",
} as const;

const eWish = {
  icon: "/assets/eWish.png",
  title: "eWISH",
  description:
    "Offer your wish with faith and receive personalized spiritual guidance.",
  href: "/ewish",
} as const;

/** Home services — AI Astroguru is a separate section, so it is omitted here. */
export const SERVICES = [
  ePandit,
  ePuja,
  eJapa,
  eDisti,
  ePradakshina,
  ePanchangam,
  eWish,
] as const;

/** Coming Soon landing cards. */
export const COMING_SOON_SERVICES = [
  ePandit,
  ePuja,
  aiAstroguru,
  eJapa,
  eDisti,
  ePradakshina,
  eWish,
] as const;

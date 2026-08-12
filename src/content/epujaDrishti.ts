import dristiNivarana from "@/assets/images/poojas/dristi_nivarana_pooja.jpg";

/** Drishti Nivarana Pooja detail page — aligned to UX mock screens. */

export const DRISHTI_HERO = {
  eyebrow: "ePooja",
  title: "Drishti Nivarana Pooja",
  subtitle: "Remove Negative Energy & Evil Eye",
  rating: "4.8",
  reviewsLabel: "(342 Reviews)",
  trusted: "Trusted by 10,000+ Devotees",
  image: dristiNivarana,
  imagePosition: "50% 18%",
} as const;

export const DRISHTI_INTRO =
  "This powerful pooja helps remove the effects of Drishti Dosha (evil eye), negative energy, and bad vibrations. It brings peace, protection, good health and positivity to you and your family.";

export const DRISHTI_META = [
  {
    id: "duration",
    icon: "clock" as const,
    label: "Duration",
    value: "60 - 90 mins (Approx.)",
  },
  {
    id: "location",
    icon: "pin" as const,
    label: "Location",
    value: "At Your Place / Online Assistance",
  },
  {
    id: "type",
    icon: "om" as const,
    label: "Pooja Type",
    value: "Shanti Pooja",
  },
  {
    id: "language",
    icon: "lang" as const,
    label: "Language",
    value: "Hindi, Telugu, Sanskrit",
  },
  {
    id: "group",
    icon: "users" as const,
    label: "Group Pooja",
    value: "Not Available",
  },
] as const;

export const DRISHTI_ABOUT = {
  eyebrow: "About This Pooja",
  title: "Why Perform Drishti Nivarana Pooja?",
  paragraphs: [
    "Drishti Nivarana Pooja is a sacred Vedic ritual performed to neutralize the ill effects of evil eye and remove negative vibrations from your life, home or workplace. It brings protection, peace and positive energy.",
    "The pooja includes powerful mantras, homa, and traditional Vedic practices performed by experienced and verified pandits with full devotion and sincerity.",
  ],
  noteTitle: "Important Note",
  note: "The duration and procedure may vary slightly depending on your personal details and pandit ji’s traditional practices.",
} as const;

export const DRISHTI_BENEFITS = {
  title: "Benefits of this Pooja",
  items: [
    {
      id: "removes",
      icon: "shield" as const,
      title: "Removes negative energy & evil eye.",
      description: "Clears aura and spatial negativity.",
    },
    {
      id: "peace",
      icon: "heart" as const,
      title: "Brings peace of mind & balance.",
      description: "Calms mental unrest and anxiety.",
    },
    {
      id: "protects",
      icon: "lock" as const,
      title: "Protects from unseen forces.",
      description: "Forms a protective divine shield.",
    },
    {
      id: "prosperity",
      icon: "coins" as const,
      title: "Improves health, wealth & prosperity.",
      description: "Attracts auspicious vibrations.",
    },
    {
      id: "success",
      icon: "trend" as const,
      title: "Enhances positivity & success.",
      description: "Removes career roadblocks.",
    },
    {
      id: "bond",
      icon: "users" as const,
      title: "Strengthens relationship bond.",
      description: "Brings family harmony.",
    },
  ],
} as const;

export const DRISHTI_INCLUDES = {
  title: "Pooja Includes",
  items: [
    "Sankalpa (Prayer initiation)",
    "Drishti Nivaran Homa",
    "Mantra Jaapa & Stotra Path",
    "Purnahuti",
    "Expert Pandit Guidance",
    "Prasadam & Blessings",
  ],
  materialsNote: "All materials for the pooja will be arranged by the pandit.",
  image: dristiNivarana,
  imagePosition: "50% 22%",
} as const;

export const DRISHTI_IDEAL = {
  title: "Ideal For",
  items: [
    { id: "evil-eye", icon: "eye" as const, label: "Evil Eye Removal" },
    {
      id: "illness",
      icon: "pulse" as const,
      label: "Frequent Illness Protection",
    },
    { id: "home", icon: "home" as const, label: "Home & Workplace Cleansing" },
    {
      id: "obstacles",
      icon: "block" as const,
      label: "Sudden Obstacles & Setbacks",
    },
    {
      id: "negativity",
      icon: "spark" as const,
      label: "Persistent Negativity",
    },
  ],
} as const;

export const DRISHTI_TABS = {
  tabs: [
    { id: "about", label: "About Pooja" },
    { id: "vidhi", label: "Pooja Vidhi" },
    { id: "notes", label: "Important Notes" },
    { id: "reviews", label: "Reviews (342)" },
    { id: "faq", label: "FAQ" },
  ],
  about: [
    "Drishti Nivarana Pooja is a sacred Vedic ritual performed to neutralize the ill effects of evil eye and remove negative vibrations from your life, home or workplace. It brings protection, peace and positive energy.",
    "The pooja includes powerful mantras, homa, and traditional Vedic practices performed by experienced and verified pandits with full devotion and sincerity.",
  ],
  vidhi: [
    "The ritual begins with Sankalpa, followed by purification rites and invocation of the deity.",
    "Drishti Nivaran Homa is performed with sacred offerings, mantra jaapa and stotra path, concluding with Purnahuti and blessings.",
  ],
  notes: [
    "Please provide accurate name, gotra and other details so the pandit can perform the sankalpa correctly.",
    "Duration and procedure may vary slightly based on traditional practices followed by the assigned pandit.",
  ],
  reviews: [
    "Devotees share that this pooja brought peace, clarity and a renewed sense of protection at home.",
    "Many families report feeling lighter and more positive after the ritual and prasadam blessings.",
  ],
  faq: [
    {
      q: "Can this pooja be done online?",
      a: "Yes. Online assistance is available along with at-home performance options.",
    },
    {
      q: "Who arranges the pooja materials?",
      a: "All materials required for the pooja will be arranged by the pandit.",
    },
  ],
  receiveTitle: "You Will Receive",
  receive: [
    "Pooja completion certificate",
    "Pooja photos & videos",
    "Prasadam delivered to you",
    "Pandit ji blessings",
  ],
} as const;

export const DRISHTI_CTA = {
  title: "Start Your Divine Conversation",
  subtitle: "Connect with AstroGuru now and unlock the answers you seek.",
} as const;

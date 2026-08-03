export type RitualItem = {
  id: string;
  label: string;
  icon:
    | "mandala"
    | "flame"
    | "sparkle"
    | "home"
    | "grid"
    | "droplet"
    | "globe"
    | "heart"
    | "bowl"
    | "book"
    | "person"
    | "gift"
    | "sun"
    | "medal";
};

export const BOOK_PANDIT_RITUALS: RitualItem[] = [
  { id: "satyanarayana", label: "Satyanarayana Puja", icon: "mandala" },
  { id: "ganapathi", label: "Ganapathi Homam", icon: "flame" },
  { id: "lakshmi", label: "Lakshmi Pooja", icon: "sparkle" },
  { id: "gruha", label: "Gruha Pravesham", icon: "home" },
  { id: "vastu", label: "Vastu Pooja", icon: "grid" },
  { id: "rudra", label: "Rudrabhishekam", icon: "droplet" },
  { id: "navagraha", label: "Navagraha Pooja", icon: "globe" },
  { id: "ayush", label: "Ayush Homam", icon: "heart" },
  { id: "annaprasana", label: "Annaprasana", icon: "bowl" },
  { id: "aksharabhyasam", label: "Aksharabhyasam", icon: "book" },
  { id: "naming", label: "Naming Ceremony", icon: "person" },
  { id: "wedding", label: "Wedding Rituals", icon: "gift" },
  { id: "shraddha", label: "Shraddha & Tarpanam", icon: "sun" },
  { id: "festivals", label: "Special Festivals", icon: "medal" },
];

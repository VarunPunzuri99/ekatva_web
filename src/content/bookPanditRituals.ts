import aksharabyasam from "@/assets/images/poojas/aksharabyasam.png";
import annaprasana from "@/assets/images/poojas/annaprasana.jpg";
import ayushHomam from "@/assets/images/poojas/ayushHomam.jpg";
import ganapathiHomam from "@/assets/images/poojas/ganapathiHomam.jpg";
import gruhapravesham from "@/assets/images/poojas/gruhapravesham.jpg";
import lakshmiPooja from "@/assets/images/poojas/lakshmiPooja.jpg";
import namingCermony from "@/assets/images/poojas/namingCermony.jpg";
import navagrahaPooja from "@/assets/images/poojas/navagrahaPooja.jpg";
import rudrabishekam from "@/assets/images/poojas/rudrabishekam.jpg";
import sathyanarayanaPooja from "@/assets/images/poojas/sathyanarayanaPooja.jpg";
import specialPoojas from "@/assets/images/poojas/specialPoojas.jpg";
import sradhatarpanam from "@/assets/images/poojas/sradhatarpanam.jpg";
import vasstupooja from "@/assets/images/poojas/vasstupooja.jpg";
import wedding from "@/assets/images/poojas/wedding.jpg";

export type RitualItem = {
  id: string;
  label: string;
  image: string;
  /** CSS object-position — frames the subject in portrait source images */
  focus?: string;
  /** Extra image classes (e.g. brightness for dark photos) */
  imageClassName?: string;
};

export const BOOK_PANDIT_RITUALS: RitualItem[] = [
  {
    id: "satyanarayana",
    label: "Satyanarayana Puja",
    image: sathyanarayanaPooja,
    focus: "center top",
  },
  {
    id: "ganapathi",
    label: "Ganapathi Homam",
    image: ganapathiHomam,
    // Face + throne sit upper-center of a tall temple illustration
    focus: "center 18%",
  },
  {
    id: "lakshmi",
    label: "Lakshmi Pooja",
    image: lakshmiPooja,
    focus: "center top",
  },
  {
    id: "gruha",
    label: "Gruha Pravesham",
    image: gruhapravesham,
    focus: "center top",
  },
  {
    id: "vastu",
    label: "Vastu Pooja",
    image: vasstupooja,
    // Top half is brand text — show Ganesha + pooja items below
    focus: "center 82%",
  },
  {
    id: "rudra",
    label: "Rudrabhishekam",
    image: rudrabishekam,
    focus: "center top",
  },
  {
    id: "navagraha",
    label: "Navagraha Pooja",
    image: navagrahaPooja,
    focus: "center top",
  },
  {
    id: "ayush",
    label: "Ayush Homam",
    image: ayushHomam,
    // Skip invitation header; show family + sacred fire
    focus: "center 72%",
  },
  {
    id: "annaprasana",
    label: "Annaprasana",
    image: annaprasana,
    focus: "center 30%",
  },
  {
    id: "aksharabhyasam",
    label: "Aksharabhyasam",
    image: aksharabyasam,
    focus: "center top",
  },
  {
    id: "naming",
    label: "Naming Ceremony",
    image: namingCermony,
    // Frame the family illustration inside the purple arch
    focus: "center 42%",
  },
  {
    id: "wedding",
    label: "Wedding Rituals",
    image: wedding,
    // Couple + havan sit mid-frame; brighten the dark scene
    focus: "center 48%",
    imageClassName: "brightness-[1.12] contrast-[1.05]",
  },
  {
    id: "shraddha",
    label: "Shraddha & Tarpanam",
    image: sradhatarpanam,
    focus: "center top",
  },
  {
    id: "festivals",
    label: "Special Festivals",
    image: specialPoojas,
    focus: "center top",
  },
];

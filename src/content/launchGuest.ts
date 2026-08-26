import drKishorePhoto from "@/assets/CGs/DrKishore.jpg";
import sumanthReddyPhoto from "@/assets/CGs/YSumanthReddy.jpg";
import ramachanderRaoPhoto from "@/assets/CGs/RamachanderRao.jpeg";

/** Soft-launch chief guests by platform. */

export type LaunchDeviceKey = "Web" | "Android" | "iOS";

export interface ChiefGuestContent {
  greeting: string;
  name: string;
  title: string;
  highlights: {
    id: string;
    icon: "document" | "chart" | "building";
    text: string;
  }[];
  closing: string;
  photo: string | null;
  photoAlt: string;
  initials: string;
}

export const CHIEF_GUESTS: Record<LaunchDeviceKey, ChiefGuestContent> = {
  Web: {
    greeting: "We are honored to have our esteemed Chief Guest for the Web launch",
    name: "Shri Dr. Kishore Ratnam garu",
    title: "Educator and visionary · Shaping young minds for over two decades",
    highlights: [
      {
        id: "vision",
        icon: "document",
        text: "An educator and visionary dedicated to shaping young minds and creating meaningful learning opportunities",
      },
      {
        id: "journey",
        icon: "chart",
        text: "Over two decades of educational leadership focused on academic excellence and overall student development",
      },
      {
        id: "values",
        icon: "building",
        text: "Nurturing critical thinking, problem-solving abilities, values, and holistic growth in students",
      },
    ],
    closing:
      "We are privileged to welcome Dr. Kishore Ratnam for the sacred launch of Ekatva on the Web",
    photo: drKishorePhoto,
    photoAlt: "Shri Dr. Kishore Ratnam garu",
    initials: "KR",
  },
  Android: {
    greeting:
      "We are honored to have our esteemed Chief Guest for the Android launch",
    name: "Shri. Sumanth Reddy garu",
    title: "Chairman · TTD Local Advisory Committee, Delhi",
    highlights: [
      {
        id: "role",
        icon: "building",
        text: "Chairman of the Tirumala Tirupati Devasthanams Local Advisory Committee, Delhi",
      },
      {
        id: "service",
        icon: "document",
        text: "Serving through his association with TTD in this important spiritual and community role",
      },
      {
        id: "impact",
        icon: "chart",
        text: "Contributing towards supporting and strengthening spiritual and community initiatives associated with TTD",
      },
    ],
    closing:
      "We are privileged to welcome Shri. Sumanth Reddy for the sacred launch of Ekatva on Android",
    photo: sumanthReddyPhoto,
    photoAlt: "Shri. Sumanth Reddy garu",
    initials: "SR",
  },
  iOS: {
    greeting: "We are honored to have our esteemed Chief Guest for the iOS launch",
    name: "Sri. Rama Chander Rao garu",
    title: "President of BJP, Telangana State",
    highlights: [
      {
        id: "leader",
        icon: "building",
        text: "A respected public leader and an experienced voice in public life",
      },
      {
        id: "service",
        icon: "document",
        text: "Significant contributions through years of dedicated service and leadership",
      },
      {
        id: "community",
        icon: "chart",
        text: "Through leadership and engagement with people, continues to inspire and contribute to the larger community",
      },
    ],
    closing:
      "We are privileged to welcome Sri. Rama Chander Rao for the sacred launch of Ekatva on iOS",
    photo: ramachanderRaoPhoto,
    photoAlt: "Sri. Rama Chander Rao garu",
    initials: "RR",
  },
};

/** @deprecated Use CHIEF_GUESTS.Web */
export const CHIEF_GUEST = CHIEF_GUESTS.Web;

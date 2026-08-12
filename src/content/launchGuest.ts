import jayeshPhoto from "@/assets/images/jayesh.png";

/** Soft-launch modal — chief guest intro + access code. */

export const CHIEF_GUEST = {
  greeting: "We are honored to have our esteemed Chief Guest",
  name: "Dr. Jayesh Ranjan",
  title:
    "Special Chief Secretary, Information Technology, Electronics & Communications, Government of Telangana",
  highlights: [
    {
      id: "admin",
      icon: "document" as const,
      text: "Renowned administrator and policy maker",
    },
    {
      id: "it",
      icon: "chart" as const,
      text: "Key architect of Telangana's IT & Innovation growth",
    },
    {
      id: "tsiic",
      icon: "building" as const,
      text: "Former CEO, Telangana State Industrial Infrastructure Corporation (TSIIC)",
    },
  ],
  closing:
    "Passionate about technology, entrepreneurship and youth empowerment",
  photo: jayeshPhoto,
  photoAlt: "Dr. Jayesh Ranjan, Chief Guest",
} as const;

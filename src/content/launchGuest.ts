/** Soft-launch modal — chief guest intro + access code.
 *  Placeholder until the official chief guest is confirmed.
 */

export const CHIEF_GUEST = {
  greeting: "We are honored to have our esteemed Chief Guest",
  name: "XXXX XXXX",
  title:
    "Designation to be announced · Department of XXXX, Government of XXXX",
  highlights: [
    {
      id: "admin",
      icon: "document" as const,
      text: "Distinguished leader and public figure — details coming soon",
    },
    {
      id: "it",
      icon: "chart" as const,
      text: "Recognized for excellence in innovation and community impact",
    },
    {
      id: "tsiic",
      icon: "building" as const,
      text: "Esteemed guest for Ekatva’s sacred launch ceremony",
    },
  ],
  closing: "Official chief guest details will be announced shortly",
  /** No final guest photo yet — modal shows initials placeholder. */
  photo: null,
  photoAlt: "Chief Guest placeholder",
  initials: "XX",
} as const;

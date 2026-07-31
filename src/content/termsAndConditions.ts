import type { LegalDocument } from "./legalTypes";

export const termsAndConditions: LegalDocument = {
  title: "Terms & Conditions",
  shortTitle: "Terms & Conditions",
  path: "/terms-and-conditions",
  effectiveDate: "29.05.2026",
  intro: [
    "These Terms & Conditions govern your use of the Ekatva mobile application and services.",
    "By accessing or using Ekatva, you agree to be bound by these Terms.",
  ],
  sections: [
    {
      number: 1,
      title: "Eligibility",
      blocks: [
        { type: "paragraph", text: "You must be at least eighteen (18) years old to:" },
        {
          type: "list",
          items: [
            "Create an account",
            "Purchase subscriptions",
            "Book Pandits",
            "Use paid services",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "User Responsibility",
      blocks: [
        {
          type: "paragraph",
          text: "Users are solely responsible for providing accurate information, including birth details used for astrology services.",
        },
        {
          type: "paragraph",
          text: "Ekatva shall not be responsible for inaccurate astrology results, horoscope outputs, or recommendations arising from incorrect, incomplete, or mistyped information supplied by the user.",
        },
      ],
    },
    {
      number: 3,
      title: "Astrology Bot & Spiritual Services Disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: "All astrology predictions, AI-generated content, E-Poojas, E-Disti services, spiritual consultations, rituals, and recommendations provided through Ekatva are offered solely for:",
        },
        {
          type: "list",
          items: [
            "Spiritual purposes",
            "Cultural purposes",
            "Educational purposes",
            "Personal entertainment",
          ],
        },
        { type: "paragraph", text: "Ekatva does not guarantee:" },
        {
          type: "list",
          items: [
            "Financial outcomes",
            "Health outcomes",
            "Relationship outcomes",
            "Career outcomes",
            "Spiritual outcomes",
            "Supernatural outcomes",
          ],
        },
        {
          type: "paragraph",
          text: "Users acknowledge that astrology and spiritual interpretations are subjective and should not replace professional medical, legal, financial, or psychological advice.",
        },
      ],
    },
    {
      number: 4,
      title: "Subscriptions",
      blocks: [
        { type: "paragraph", text: "Premium subscriptions are billed through:" },
        {
          type: "list",
          items: ["Apple App Store", "Google Play Billing"],
        },
        {
          type: "paragraph",
          text: "Subscriptions automatically renew unless cancelled before renewal.",
        },
        {
          type: "subsection",
          title: "Cancellation Policy",
          blocks: [
            { type: "paragraph", text: "Users must cancel subscriptions through:" },
            {
              type: "list",
              items: [
                "Apple ID Subscription Settings",
                "Google Play Subscription Settings",
              ],
            },
            {
              type: "paragraph",
              text: "Cancellation must occur at least 24 hours before the next billing cycle.",
            },
            {
              type: "paragraph",
              text: "No refunds or partial refunds shall be issued for:",
            },
            {
              type: "list",
              items: [
                "Mid-cycle cancellations",
                "Partially used subscription periods",
                "Failure to use subscription features",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Pandit Bookings",
      blocks: [
        {
          type: "subsection",
          title: "Scheduled Bookings",
          blocks: [
            {
              type: "paragraph",
              text: "Cancellation by User More Than 24 Hours Before Service — Eligible for:",
            },
            {
              type: "list",
              items: [
                "100% refund",
                "Less: Payment gateway processing charges",
                "Less: Applicable taxes",
              ],
            },
            {
              type: "paragraph",
              text: "Cancellation by User Within 24 Hours Before Service — A cancellation charge of up to 50% of the booking amount may apply to compensate the Pandit's reserved time.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Instant Bookings",
          blocks: [
            {
              type: "paragraph",
              text: "Once a Pandit accepts the booking and begins transit toward the user's location, the booking becomes non-cancellable after a two (2) minute grace period.",
            },
            {
              type: "paragraph",
              text: "A flat cancellation fee may apply after the grace period.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Provider No-Show",
          blocks: [
            {
              type: "paragraph",
              text: "If a Pandit fails to arrive for the booking, complete the booked ritual, or conduct a scheduled E-Pooja, the user shall be entitled to either:",
            },
            {
              type: "list",
              items: [
                "A 100% refund, or",
                "One complimentary rescheduling option",
              ],
            },
            {
              type: "paragraph",
              text: "Subject to verification by Ekatva.",
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Platform Status",
      blocks: [
        {
          type: "paragraph",
          text: "Ekatva acts solely as a technology platform connecting users with independent spiritual service providers.",
        },
        {
          type: "paragraph",
          text: "Pandits are independent contractors and are not employees of Ekatva.",
        },
      ],
    },
    {
      number: 7,
      title: "Prohibited Activities",
      blocks: [
        { type: "paragraph", text: "Users shall not:" },
        {
          type: "list",
          items: [
            "Provide false information",
            "Engage in fraud",
            "Harass service providers",
            "Violate applicable laws",
            "Misuse platform services",
          ],
        },
      ],
    },
    {
      number: 8,
      title: "Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "To the fullest extent permitted by law, Ekatva shall not be liable for:",
        },
        {
          type: "list",
          items: [
            "Indirect damages",
            "Consequential damages",
            "Emotional distress",
            "Spiritual dissatisfaction",
            "User reliance on astrology outputs",
            "Service interruptions beyond reasonable control",
          ],
        },
        {
          type: "paragraph",
          text: "Ekatva's total liability shall not exceed the amount paid by the user for the relevant service.",
        },
      ],
    },
    {
      number: 9,
      title: "Termination",
      blocks: [
        { type: "paragraph", text: "Ekatva may suspend or terminate accounts for:" },
        {
          type: "list",
          items: [
            "Fraud",
            "Policy violations",
            "Abuse of services",
            "Security concerns",
          ],
        },
      ],
    },
    {
      number: 10,
      title: "Governing Law",
      blocks: [
        {
          type: "subsection",
          title: "India",
          blocks: [
            { type: "paragraph", text: "These Terms shall be governed by:" },
            {
              type: "list",
              items: [
                "Information Technology Act, 2000",
                "Consumer Protection Act, 2019",
                "Consumer Protection (E-Commerce) Rules, 2020",
              ],
            },
            {
              type: "paragraph",
              text: "Jurisdiction shall lie with courts located in Hyderabad, Telangana.",
            },
          ],
        },
        {
          type: "subsection",
          title: "United States Arbitration Agreement",
          blocks: [
            {
              type: "paragraph",
              text: "Any dispute arising from use of Ekatva shall be resolved through binding individual arbitration.",
            },
            { type: "paragraph", text: "Users waive:" },
            {
              type: "list",
              items: [
                "Jury trial rights",
                "Participation in class actions",
                "Class-wide arbitration",
              ],
            },
            {
              type: "paragraph",
              text: "This arbitration provision shall survive termination of these Terms.",
            },
          ],
        },
      ],
    },
    {
      number: 11,
      title: "Grievance Redressal",
      blocks: [
        {
          type: "list",
          items: [
            "Grievance Officer: Kiran Kumar Degapogu",
            "Email: kiran@metaglobetechnologies.org",
            "Address: Plot No. 1-284-87, OU Colony, Shaikpet, Rangareddy, Telangana, 500104",
          ],
        },
      ],
    },
    {
      number: 12,
      title: "Contact Information",
      blocks: [
        {
          type: "list",
          items: [
            "Metaglobe Technologies Private Limited",
            "Email: info@metaglobetechnologies.org",
            "Website: https://metaglobetechnologies.org/",
          ],
        },
      ],
    },
    {
      number: 13,
      title: "Modifications",
      blocks: [
        {
          type: "paragraph",
          text: "Ekatva may update these Terms periodically. Continued use of the platform after updates constitutes acceptance of the revised Terms.",
        },
      ],
    },
  ],
  closing:
    "By using Ekatva, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
};

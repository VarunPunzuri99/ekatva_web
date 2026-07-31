import type { LegalDocument } from "./legalTypes";

export const refundPolicy: LegalDocument = {
  title: "Cancellation & Refund Policy",
  shortTitle: "Refund Policy",
  path: "/cancellation-refund-policy",
  effectiveDate: "29.05.2026",
  intro: [
    "At Ekatva, we strive to provide a seamless spiritual experience through our Astrology Services (E-Astroguru), E-Pooja, E-Disti, and Pandit Booking platform. This Refund & Cancellation Policy explains how cancellations, refunds, and service-related disputes are handled.",
    "By using Ekatva, you agree to this Refund & Cancellation Policy.",
  ],
  sections: [
    {
      number: 1,
      title: "General Policy",
      blocks: [
        { type: "paragraph", text: "Refund eligibility depends on:" },
        {
          type: "list",
          items: [
            "Type of service booked",
            "Timing of cancellation",
            "Service completion status",
            "Verification of service-related issues",
            "Applicable payment gateway and platform policies",
          ],
        },
        {
          type: "paragraph",
          text: "All approved refunds will be processed to the original payment method used during the transaction.",
        },
      ],
    },
    {
      number: 2,
      title: "Astrology Bot Subscriptions",
      blocks: [
        { type: "paragraph", text: "Premium subscriptions are purchased through:" },
        {
          type: "list",
          items: ["Apple App Store", "Google Play Store"],
        },
        {
          type: "paragraph",
          text: "Subscriptions automatically renew unless cancelled by the user.",
        },
        {
          type: "subsection",
          title: "Subscription Cancellation",
          blocks: [
            {
              type: "paragraph",
              text: "Users may cancel subscriptions at any time through:",
            },
            {
              type: "list",
              items: [
                "Apple ID Subscription Settings",
                "Google Play Subscription Settings",
              ],
            },
            {
              type: "paragraph",
              text: "Cancellation must be completed at least 24 hours before the next renewal date to avoid automatic renewal.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Subscription Refunds",
          blocks: [
            {
              type: "paragraph",
              text: "Refunds for subscriptions are governed by Apple App Store and Google Play Store billing policies.",
            },
            {
              type: "paragraph",
              text: "Ekatva does not provide refunds for:",
            },
            {
              type: "list",
              items: [
                "Partially used subscription periods",
                "Mid-cycle cancellations",
                "Unused premium features",
                "Failure to cancel before renewal",
              ],
            },
            {
              type: "paragraph",
              text: "For subscription-related refund requests, users should contact Apple or Google directly through their respective support channels.",
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Scheduled Pandit Bookings",
      blocks: [
        {
          type: "subsection",
          title: "Cancellation More Than 24 Hours Before Service",
          blocks: [
            {
              type: "paragraph",
              text: "If a user cancels a scheduled Pandit booking more than 24 hours before the scheduled service time:",
            },
            { type: "paragraph", text: "Eligible Refund:" },
            {
              type: "list",
              items: [
                "100% of the booking amount",
                "Less: Payment gateway processing fees",
                "Less: Applicable taxes and third-party charges",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Cancellation Within 24 Hours Before Service",
          blocks: [
            {
              type: "paragraph",
              text: "If a user cancels within 24 hours of the scheduled service:",
            },
            { type: "paragraph", text: "Refund Eligibility:" },
            {
              type: "list",
              items: [
                "Up to 50% refund",
                "A cancellation charge of up to 50% may be retained to compensate the Pandit's reserved time and scheduling commitment",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Instant Pandit Bookings",
      blocks: [
        {
          type: "paragraph",
          text: "Instant Bookings are designed for immediate service delivery using real-time location matching.",
        },
        {
          type: "subsection",
          title: "Grace Period",
          blocks: [
            {
              type: "paragraph",
              text: "Users may cancel an Instant Booking within 2 minutes of a Pandit accepting the booking request.",
            },
            {
              type: "paragraph",
              text: "No cancellation fee applies during the grace period.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Cancellation After Grace Period",
          blocks: [
            {
              type: "paragraph",
              text: "Once a Pandit accepts the booking and begins traveling to the user's location, the booking becomes non-cancellable.",
            },
            {
              type: "paragraph",
              text: "If cancellation is permitted under exceptional circumstances, a flat cancellation fee may apply.",
            },
            {
              type: "paragraph",
              text: "The applicable fee will be displayed before booking confirmation.",
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "E-Pooja & E-Disti Services",
      blocks: [
        {
          type: "subsection",
          title: "Cancellation Before Ritual Commencement",
          blocks: [
            {
              type: "paragraph",
              text: "Users may request cancellation before the scheduled ritual begins.",
            },
            { type: "paragraph", text: "Refund eligibility depends on:" },
            {
              type: "list",
              items: [
                "Preparation already completed",
                "Ritual materials procured",
                "Service provider allocation",
              ],
            },
            {
              type: "paragraph",
              text: "Approved cancellations may receive a refund after applicable deductions.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Cancellation After Ritual Commencement",
          blocks: [
            {
              type: "paragraph",
              text: "Once an E-Pooja or E-Disti service has started, the service is considered delivered and is generally non-refundable.",
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Provider No-Show or Service Failure",
      blocks: [
        { type: "paragraph", text: "If a Pandit:" },
        {
          type: "list",
          items: [
            "Fails to attend a scheduled booking",
            "Does not perform the booked service",
            "Misses a virtual E-Pooja session",
            "Abandons the service without valid reason",
          ],
        },
        { type: "paragraph", text: "The user may choose:" },
        {
          type: "list",
          items: [
            "100% refund, or",
            "Complimentary rescheduling of the service",
          ],
        },
        {
          type: "paragraph",
          text: "Subject to verification by Ekatva.",
        },
      ],
    },
    {
      number: 7,
      title: "Duplicate Payments",
      blocks: [
        {
          type: "paragraph",
          text: "If a user is charged more than once for the same booking or service due to a technical issue:",
        },
        {
          type: "paragraph",
          text: "Ekatva will verify the transaction and process a full refund of the duplicate payment.",
        },
      ],
    },
    {
      number: 8,
      title: "Failed Transactions",
      blocks: [
        { type: "paragraph", text: "In cases where:" },
        {
          type: "list",
          items: ["Payment is debited", "Booking is not confirmed"],
        },
        {
          type: "paragraph",
          text: "The transaction will be automatically reviewed.",
        },
        {
          type: "paragraph",
          text: "Eligible refunds are typically processed within 5–15 business days depending on the payment provider.",
        },
      ],
    },
    {
      number: 9,
      title: "Non-Refundable Items",
      blocks: [
        {
          type: "paragraph",
          text: "The following are generally non-refundable:",
        },
        {
          type: "list",
          items: [
            "Completed astrology consultations",
            "Successfully delivered AI-generated astrology reports",
            "Completed E-Poojas",
            "Completed E-Disti services",
            "Digital reports and downloadable content",
            "Promotional offers and discounted services",
            "Convenience fees and platform service charges",
          ],
        },
      ],
    },
    {
      number: 10,
      title: "Fraud Prevention",
      blocks: [
        { type: "paragraph", text: "Ekatva reserves the right to:" },
        {
          type: "list",
          items: [
            "Reject fraudulent refund requests",
            "Suspend accounts involved in abuse",
            "Recover losses caused by chargeback fraud",
            "Restrict future bookings where misuse is detected",
          ],
        },
      ],
    },
    {
      number: 11,
      title: "Refund Processing Timeline",
      blocks: [
        {
          type: "paragraph",
          text: "Approved refunds are generally processed within:",
        },
        {
          type: "list",
          items: [
            "UPI Payments: 3–7 business days",
            "Credit/Debit Cards: 5–15 business days",
            "Net Banking: 5–10 business days",
            "Wallets and Other Methods: Subject to provider timelines",
          ],
        },
        {
          type: "paragraph",
          text: "Actual credit timelines may vary depending on the user's bank or payment provider.",
        },
      ],
    },
    {
      number: 12,
      title: "Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: "For refund, cancellation, or payment-related inquiries:",
        },
        {
          type: "list",
          items: [
            "Ekatva Support Team",
            "Metaglobe Technologies Private Limited",
            "Email: connect@ekatva.online",
            "Website: www.ekatva.online",
          ],
        },
      ],
    },
  ],
  closing:
    "By using Ekatva, you acknowledge that you have read, understood, and agreed to this Refund & Cancellation Policy.",
};

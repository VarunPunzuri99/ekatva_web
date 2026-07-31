import type { LegalDocument } from "./legalTypes";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  shortTitle: "Privacy Policy",
  path: "/privacy-policy",
  effectiveDate: "29.05.2026",
  intro: [
    'Metaglobe Technologies Private Limited ("Ekatva", "we", "our", or "us") operates the Ekatva mobile application and related services. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you use our services globally, including in India and the United States.',
    "By accessing or using Ekatva, you consent to the collection and processing of your information as described in this Privacy Policy.",
  ],
  sections: [
    {
      number: 1,
      title: "Information We Collect",
      blocks: [
        {
          type: "subsection",
          title: "Account Information",
          blocks: [
            { type: "paragraph", text: "We may collect:" },
            {
              type: "list",
              items: [
                "Full Name",
                "Mobile Number",
                "Email Address",
                "Profile Information",
                "Login Credentials",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Spiritual & Astrology Information",
          blocks: [
            {
              type: "paragraph",
              text: "To provide astrology and spiritual services, users may voluntarily provide:",
            },
            {
              type: "list",
              items: [
                "Date of Birth",
                "Time of Birth",
                "Place of Birth",
                "Astrology Preferences",
                "Ritual Preferences",
              ],
            },
            {
              type: "paragraph",
              text: "This information is used exclusively for astrology calculations, horoscope generation, spiritual recommendations, and related services.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Subscription & Advertising Data",
          blocks: [
            {
              type: "paragraph",
              text: "To manage subscriptions, analytics, and advertising-supported services, we may collect:",
            },
            {
              type: "list",
              items: [
                "Billing Tokens",
                "Subscription Status",
                "Device Identifiers",
                "Advertising Identifiers (IDFA for iOS and AAID for Android)",
                "App Usage Data",
                "Ad Interaction Data",
              ],
            },
            {
              type: "paragraph",
              text: "These data elements may be processed through:",
            },
            {
              type: "list",
              items: [
                "Apple App Store",
                "Google Play Billing",
                "Google AdMob",
                "Google Analytics for Firebase",
              ],
            },
            {
              type: "paragraph",
              text: "Advertising identifiers are used solely to deliver advertisements to free-tier users, measure ad performance, manage premium subscription benefits, and prevent fraud.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Location Information",
          blocks: [
            {
              type: "paragraph",
              text: "For Pandit Booking and Instant Booking services, Ekatva may collect:",
            },
            {
              type: "list",
              items: [
                "Foreground GPS Location",
                "Background GPS Location (where permitted by device settings and user consent)",
                "Real-Time Location Data",
              ],
            },
            {
              type: "paragraph",
              text: "Location information is used strictly to:",
            },
            {
              type: "list",
              items: [
                "Identify nearby Pandits",
                "Enable instant booking services",
                "Calculate arrival estimates",
                "Improve service fulfillment",
              ],
            },
            {
              type: "paragraph",
              text: "Location tracking data associated with Instant Bookings is retained only as long as necessary to complete the booking and resolve disputes, after which it is deleted or anonymized in accordance with our retention policies.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Device & Technical Information",
          blocks: [
            { type: "paragraph", text: "We may automatically collect:" },
            {
              type: "list",
              items: [
                "Device Type",
                "Operating System",
                "IP Address",
                "Mobile Network Information",
                "App Crash Reports",
                "Usage Logs",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "How We Use Your Information",
      blocks: [
        { type: "paragraph", text: "We use information to:" },
        {
          type: "list",
          items: [
            "Provide astrology and AI-powered spiritual guidance",
            "Process subscriptions and payments",
            "Facilitate E-Pooja and E-Disti services",
            "Match users with Pandits",
            "Improve platform performance",
            "Detect fraud and abuse",
            "Comply with legal obligations",
            "Provide customer support",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Spiritual Data Protection",
      blocks: [
        {
          type: "paragraph",
          text: "Birth chart information, including date, time, and place of birth, is processed securely on Amazon Web Services (AWS) infrastructure exclusively for algorithmic astrology calculations and spiritual service delivery.",
        },
        {
          type: "paragraph",
          text: "Ekatva does not sell, rent, disclose, or share birth chart information with advertisers, marketing partners, or unrelated third parties.",
        },
      ],
    },
    {
      number: 4,
      title: "Sharing of Information",
      blocks: [
        { type: "paragraph", text: "We may share information with:" },
        {
          type: "list",
          items: [
            "Payment processors",
            "Cloud hosting providers",
            "Analytics service providers",
            "Verified Pandits for booking fulfillment",
            "Regulatory authorities where legally required",
          ],
        },
        {
          type: "paragraph",
          text: "We do not sell personal information to third parties.",
        },
      ],
    },
    {
      number: 5,
      title: "Data Security",
      blocks: [
        {
          type: "paragraph",
          text: "Ekatva employs industry-standard security measures including:",
        },
        {
          type: "list",
          items: [
            "Encryption in transit and at rest",
            "Access controls",
            "Role-based permissions",
            "Continuous monitoring",
            "Secure AWS infrastructure",
          ],
        },
        {
          type: "paragraph",
          text: "No electronic storage system can guarantee absolute security.",
        },
      ],
    },
    {
      number: 6,
      title: "User Rights",
      blocks: [
        {
          type: "subsection",
          title: "Indian Users (DPDP Act)",
          blocks: [
            { type: "paragraph", text: "Users may:" },
            {
              type: "list",
              items: [
                "Access personal data",
                "Correct inaccurate information",
                "Withdraw consent",
                "Request deletion of their account",
              ],
            },
            {
              type: "paragraph",
              text: "Consent withdrawal and account deletion may be initiated through: Profile → Settings → Privacy → Delete Account",
            },
          ],
        },
        {
          type: "subsection",
          title: "United States Users (CCPA and Applicable State Laws)",
          blocks: [
            { type: "paragraph", text: "Eligible users may:" },
            {
              type: "list",
              items: [
                "Request access to personal information",
                "Request deletion of personal information",
                "Request correction of inaccurate information",
              ],
            },
            {
              type: "paragraph",
              text: "Requests may be submitted through in-app account settings or customer support.",
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: "Children's Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Ekatva services are intended only for individuals aged 18 years and above. We do not knowingly collect personal information from children.",
        },
      ],
    },
    {
      number: 8,
      title: "Data Retention",
      blocks: [
        { type: "paragraph", text: "We retain information only for:" },
        {
          type: "list",
          items: [
            "Service delivery",
            "Legal compliance",
            "Fraud prevention",
            "Dispute resolution",
            "Accounting and tax obligations",
          ],
        },
      ],
    },
    {
      number: 9,
      title: "International Data Transfers",
      blocks: [
        {
          type: "paragraph",
          text: "Your information may be processed and stored in countries other than your country of residence, including India and the United States.",
        },
      ],
    },
    {
      number: 10,
      title: "Account Deletion",
      blocks: [
        {
          type: "paragraph",
          text: "Users may permanently delete their accounts through: Profile → Settings → Privacy → Delete Account",
        },
        {
          type: "paragraph",
          text: "Certain records may be retained where required by law.",
        },
      ],
    },
    {
      number: 11,
      title: "Grievance Officer (India)",
      blocks: [
        {
          type: "paragraph",
          text: "In accordance with the Information Technology Act, 2000 and Consumer Protection (E-Commerce) Rules, 2020:",
        },
        {
          type: "list",
          items: [
            "Grievance Officer: Kiran Kumar Degapogu",
            "Email: kirand@metaglobetechnologies.org",
            "Address: Plot No. 1-284-87, OU Colony, Shaikpet, Rangareddy, Telangana, 500104",
          ],
        },
      ],
    },
    {
      number: 12,
      title: "Contact Us",
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
      title: "Changes to This Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy periodically. Continued use of Ekatva constitutes acceptance of the updated policy.",
        },
      ],
    },
  ],
};

import { Logo } from "@/components/common/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/common/SocialIcons";
import { SOCIAL_LINKS } from "@/lib/constants";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "FAQ", href: "#faq" },
  { label: "Subscribe", href: "#subscribe" },
];

const socialIcons = [
  { icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: TwitterIcon, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { icon: YoutubeIcon, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark px-4 py-12 text-text-light md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-body-small text-text-light/70">
            Ancient wisdom meets modern technology. Your sacred journey begins
            here.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-caption mb-4 text-primary">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-ui text-sm text-text-light/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-caption mb-4 text-primary">Follow Us</h2>
          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-text-light/80 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border-light pt-6 text-center">
        <p className="font-ui text-xs text-text-light/50">
          &copy; 2026 Ekatva. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import {
  HOME_FOOTER_ABOUT,
  HOME_FOOTER_COMPANY,
  HOME_FOOTER_FEATURES,
} from "@/content/home";

export function HomeFooter() {
  return (
    <footer id="contact" className="bg-home-beige">
      <div id="about" className="sr-only" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-14 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="max-w-xs">
          <Logo className="justify-start" imgClassName="!h-10 sm:!h-11" />
          <p className="mt-4 font-home text-xs leading-relaxed text-home-text/80 sm:text-[13px]">
            Ekatva connects devotees to divine through technology, tradition and
            trust.
          </p>
        </div>

        <div>
          <h3 className="font-home text-sm font-bold text-[#1A1A1A]">Features</h3>
          <ul className="mt-3 space-y-2">
            {HOME_FOOTER_FEATURES.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className="font-home text-[13px] text-[#6B7280] transition-colors hover:text-home-orange"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="font-home text-[13px] text-[#6B7280] transition-colors hover:text-home-orange"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-home text-sm font-bold text-[#1A1A1A]">About us</h3>
          <ul className="mt-3 space-y-2">
            {HOME_FOOTER_ABOUT.map((item) => (
              <li key={item}>
                <a
                  href="#about"
                  className="font-home text-[13px] text-[#6B7280] transition-colors hover:text-home-orange"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-home text-sm font-bold text-[#1A1A1A]">Company</h3>
          <ul className="mt-3 space-y-2">
            {HOME_FOOTER_COMPANY.map((item) => (
              <li key={item.label}>
                {item.path.startsWith("/") ? (
                  <Link
                    to={item.path}
                    className="font-home text-[13px] text-[#6B7280] transition-colors hover:text-home-orange"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    className="font-home text-[13px] text-[#6B7280] transition-colors hover:text-home-orange"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-home-footer-bar py-3 text-center">
        <p className="font-home text-[12px] text-home-text/80">
          Copyrights @ Ekatva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

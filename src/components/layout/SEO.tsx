import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/constants";
import { colors } from "@/theme/colors";

const META = {
  title: "Ekatva | Launching July 5, 2026",
  description:
    "Experience ancient wisdom through modern spiritual guidance. Ekatva launches on July 5, 2026.",
  image: `${SITE_URL}/assets/hero-bg.png`,
};

export function SEO() {
  return (
    <Helmet>
      <html lang="en" />
      <title>{META.title}</title>
      <meta name="description" content={META.description} />
      <meta name="theme-color" content={colors.primary} />
      <link rel="canonical" href={SITE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={META.title} />
      <meta property="og:description" content={META.description} />
      <meta property="og:image" content={META.image} />
      <meta property="og:site_name" content="Ekatva" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={META.title} />
      <meta name="twitter:description" content={META.description} />
      <meta name="twitter:image" content={META.image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ekatva",
          url: SITE_URL,
          description: META.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ekatva",
          url: SITE_URL,
          logo: `${SITE_URL}/assets/logo.svg`,
          description: META.description,
          foundingDate: "2026",
        })}
      </script>
    </Helmet>
  );
}

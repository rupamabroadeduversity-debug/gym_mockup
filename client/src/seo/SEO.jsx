import { Helmet } from "react-helmet-async";

const baseUrl = "https://apexfit.example";

export default function SEO({ title, description, path = "/", image = "/og-image.jpg", type = "website" }) {
  const url = `${baseUrl}${path}`;
  const fullTitle = title ? `${title} | ApexFit Performance Club` : "ApexFit Performance Club";

  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "ApexFit Performance Club",
    url: baseUrl,
    image: `${baseUrl}${image}`,
    telephone: "+1-555-0174",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "88 Velocity Avenue",
      addressLocality: "Downtown",
      addressRegion: "CA",
      postalCode: "94016",
      addressCountry: "US"
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "05:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "07:00", closes: "20:00" }
    ],
    sameAs: ["https://www.instagram.com/", "https://www.facebook.com/"]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

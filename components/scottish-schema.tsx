export function ScottishBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Easy-Sprayaway",
    url: "https://www.easy-sprayaway.co.uk",
    telephone: "+441234567890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 High Street",
      addressLocality: "Glasgow",
      postalCode: "G1 1AA",
      addressRegion: "Glasgow",
      addressCountry: "UK",
    },
    description:
      "Easy-Sprayaway is a Scottish family-run business providing SuperQuilt loft insulation, roof cleaning and coatings, wall and driveway cleaning, and spray foam insulation services across Scotland.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

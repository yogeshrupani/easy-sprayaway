"use client"

import Script from "next/script"

export function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Easy-Sprayaway",
    image: "https://www.easy-sprayaway.co.uk/logo.png",
    url: "https://www.easy-sprayaway.co.uk",
    telephone: "+448004332068",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Clyde offices, 48 West George Street",
      addressLocality: "Glasgow",
      postalCode: "G2 1BP",
      addressCountry: "UK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.8642,
      longitude: 4.2518,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [
      "https://www.facebook.com/people/Easy-Sprayaway/61560317707196/",
      "https://www.instagram.com/easy_sprayaway/",
    ],
    priceRange: "££",
    servesCuisine: "Home Insulation and Property Maintenance",
  }

  return (
    <Script id="local-business-schema" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  )
}

import GalleryClientPage from "./GalleryClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | Easy-Sprayaway Scotland - Before & After Photos",
  description:
    "Browse our comprehensive gallery of completed projects across Scotland. View before & after photos of SuperQuilt insulation, roof cleaning, and exterior cleaning services. Filter by location, service type, and project features.",
  keywords:
    "project gallery Scotland, before after photos, loft insulation gallery, roof cleaning photos, exterior cleaning results, SuperQuilt installation photos, Scottish home improvement",
  openGraph: {
    title: "Project Gallery | Easy-Sprayaway Scotland",
    description:
      "Browse our comprehensive gallery of completed projects across Scotland. View before & after photos of our professional services.",
    images: [
      {
        url: "/images/services/superquilt-installation.jpeg",
        width: 1200,
        height: 630,
        alt: "Easy-Sprayaway Project Gallery Scotland",
      },
    ],
  },
}

export default function GalleryPage() {
  return <GalleryClientPage />
}

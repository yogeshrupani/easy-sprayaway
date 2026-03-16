import ServicesPageClient from "./ServicesPageClient"

export const metadata = {
  title: "Professional Home Services Scotland | SuperQuilt Insulation & Cleaning",
  description:
    "Premium SuperQuilt loft insulation, sheep wool insulation, roof cleaning, and exterior maintenance services across Scotland. Expert installation, 10-year warranties, free surveys. Serving Glasgow, Edinburgh, Aberdeen, Perth, Inverness, Dundee.",
  keywords:
    "SuperQuilt insulation Scotland, loft insulation Glasgow, roof cleaning Edinburgh, sheep wool insulation, hemp insulation, fibreglass insulation, glass mineral wool, exterior cleaning Scotland, driveway cleaning, wall cleaning, property maintenance Scotland",
  openGraph: {
    title: "Professional Home Services Scotland | Easy-Sprayaway",
    description:
      "Premium SuperQuilt loft insulation, roof cleaning, and property maintenance services across Scotland.",
    images: ["/images/services/superquilt-installation.jpeg"],
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

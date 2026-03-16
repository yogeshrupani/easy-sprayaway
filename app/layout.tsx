import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./animations.css"
import "./scottish-animations.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LocalBusinessSchema } from "@/components/schema"
import CookieConsentPopup from "@/components/cookie-consent"
import ScrollToTop from "@/components/scroll-to-top"
import { FloatingContactForm } from "@/components/floating-contact-form"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Easy-Sprayaway | SuperQuilt Loft Insulation & Home Services Scotland",
    template: "%s | Easy-Sprayaway Scotland",
  },
  description:
    "Professional SuperQuilt loft insulation, roof cleaning, and property maintenance services across Scotland. Family-run business since 2016. Free surveys, 10-year warranties. Serving Glasgow, Edinburgh, Aberdeen, Perth, Inverness, Dundee.",
  keywords: [
    "SuperQuilt insulation Scotland",
    "loft insulation Glasgow",
    "roof cleaning Edinburgh",
    "driveway cleaning Aberdeen",
    "wall cleaning Scotland",
    "spray foam insulation Perth",
    "home insulation Inverness",
    "property maintenance Dundee",
    "energy efficiency Scotland",
    "EPC rating improvement",
    "Scottish home services",
    "insulation contractors Scotland",
  ].join(", "),
  authors: [{ name: "Easy-Sprayaway" }],
  creator: "Easy-Sprayaway",
  publisher: "Easy-Sprayaway",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.easy-sprayaway.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Easy-Sprayaway | SuperQuilt Loft Insulation & Home Services Scotland",
    description:
      "Professional SuperQuilt loft insulation, roof cleaning, and property maintenance services across Scotland. Family-run business since 2016.",
    url: "https://www.easy-sprayaway.co.uk",
    siteName: "Easy-Sprayaway",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/services/superquilt-installation.jpeg",
        width: 1200,
        height: 630,
        alt: "SuperQuilt loft insulation installation by Easy-Sprayaway professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy-Sprayaway | SuperQuilt Loft Insulation Scotland",
    description:
      "Professional home services across Scotland. SuperQuilt insulation, roof cleaning, property maintenance.",
    images: ["/images/services/superquilt-installation.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#0ea5e9",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme colors for mobile browsers */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main>{children}</main>
        </Suspense>
        <Footer />
        <CookieConsentPopup />
        <ScrollToTop />
        <FloatingContactForm />
      </body>
    </html>
  )
}

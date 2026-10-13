import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Building,
  Check,
  ClipboardCheck,
  Home,
  Info,
  MapPin,
  Phone,
  ShieldCheck,
  Thermometer,
  Wind,
} from "lucide-react"

const PAGE_URL = "https://www.easy-sprayaway.co.uk/loft-insulation-glasgow"
const PHONE_DISPLAY = "0800 433 2068"
const PHONE_LINK = "tel:+448004332068"
const QUOTE_LINK = "/contact?service=loft-insulation"

export const metadata: Metadata = {
  title: { absolute: "Loft Insulation Glasgow | Free Survey | Easy-Sprayaway" },
  description:
    "Loft insulation in Glasgow from a local, family-run team since 2016. Top-ups, full installs and old insulation removal. Free survey and a fixed written quote.",
  alternates: {
    canonical: "/loft-insulation-glasgow",
  },
  openGraph: {
    title: "Loft Insulation Glasgow | Easy-Sprayaway",
    description:
      "Local loft insulation installers based in Glasgow. Free survey, fixed written quote and a tidy, one-day installation for most homes.",
    url: PAGE_URL,
    siteName: "Easy-Sprayaway",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/services/loft-insulation-main.jpeg",
        width: 1200,
        height: 630,
        alt: "Loft insulation being installed between ceiling joists in a Glasgow home",
      },
    ],
  },
}

const propertyTypes = [
  {
    icon: Building,
    title: "Tenement top-floor flats",
    text: "Sandstone tenements in the West End, Southside and Dennistoun often have a shared roof void above the top flat. We check access, ventilation and any shared areas before we quote, so the work suits the whole close.",
  },
  {
    icon: Home,
    title: "1930s semis and bungalows",
    text: "Many interwar homes in areas like Knightswood, Mosspark and Bishopbriggs still have a thin layer of old insulation laid decades ago. A top-up to the recommended depth is usually the quickest win for these properties.",
  },
  {
    icon: Building,
    title: "Four-in-a-block and terraced homes",
    text: "Ex-council four-in-a-block cottages and terraces can have low, awkward lofts with water tanks and pipework in the way. We insulate around them properly and keep pipes and tanks protected from frost.",
  },
  {
    icon: Home,
    title: "Victorian and Edwardian villas",
    text: "Older properties with steep roofs, timber sarking and decorative ceilings need a careful approach. We choose breathable materials where they suit the building and keep the roof space ventilated.",
  },
]

const materials = [
  {
    name: "Glass mineral wool",
    text: "The most common choice for an open loft space. Rolls are laid between and then across the ceiling joists to build up the depth and cut out thermal bridging through the timbers.",
  },
  {
    name: "Fibreglass",
    text: "A cost-effective option with good thermal performance, well suited to straightforward top-up jobs.",
  },
  {
    name: "Sheep wool",
    text: "A natural fibre that handles moisture well, which makes it a good match for older Glasgow sandstone properties.",
  },
  {
    name: "Hemp",
    text: "A plant-based, breathable insulation material for homeowners who want a lower carbon option.",
  },
  {
    name: "Multifoil",
    text: "A thin, layered insulation used where headroom matters, such as rooms in the roof.",
  },
]

const steps = [
  {
    title: "Free insulation survey",
    text: "We visit your home, check the loft space, measure any existing insulation and look at ventilation, wiring and pipework.",
  },
  {
    title: "Fixed written quote",
    text: "You get a clear quote with the material, the depth we will install and the price. There is no pressure to go ahead.",
  },
  {
    title: "Insulation installation day",
    text: "Most lofts are done in a single day. We protect your floors and landing with dust sheets and work around any stored items you cannot move.",
  },
  {
    title: "Tidy finish",
    text: "We clear away all waste, including any old insulation we remove, and talk you through what has been done before we leave.",
  },
]

const areas = [
  "Glasgow city centre",
  "West End",
  "Southside",
  "East End",
  "Bearsden and Milngavie",
  "Bishopbriggs",
  "Kirkintilloch",
  "Clydebank",
  "Paisley",
  "Rutherglen and Cambuslang",
  "Newton Mearns",
  "East Kilbride",
]

const faqs = [
  {
    question: "How much does it cost to insulate a loft in Glasgow?",
    answer:
      "The price depends on the size of your loft, how much insulation is already there, the material you choose and whether old insulation needs to be removed first. We give every customer a free survey and a fixed written quote, so you know the full cost before any work starts.",
  },
  {
    question: "Should I remove old loft insulation before laying new?",
    answer:
      "Not always. If your existing insulation is dry, clean and evenly laid, we can usually top it up. If it is damp, compressed, contaminated or has been disturbed by pests, we recommend removing it first so the new insulation can perform properly.",
  },
  {
    question: "How thick should loft insulation be?",
    answer:
      "For mineral wool, 270mm is the depth generally recommended for an existing home. It is not a legal requirement, but it gives a good balance between cost and heat saved. Other materials reach a similar performance at different thicknesses.",
  },
  {
    question: "Who is eligible for free loft insulation in Scotland?",
    answer:
      "Eligibility for funded insulation depends on your circumstances and the schemes running at the time. Home Energy Scotland offers free, impartial advice on what you may qualify for. Please note that Easy-Sprayaway does not carry out grant-funded installations, so we recommend checking your eligibility with Home Energy Scotland before booking a survey with us.",
  },
  {
    question: "How long does loft insulation take to install?",
    answer:
      "Most homes are finished in one day. Larger lofts, homes that need old insulation removed or properties with raised boarding to fit may take a little longer, and we will tell you this at the survey.",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.easy-sprayaway.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.easy-sprayaway.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Loft Insulation Glasgow", item: PAGE_URL },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Loft Insulation in Glasgow",
  serviceType: "Loft insulation installation",
  url: PAGE_URL,
  description:
    "Loft insulation installation, top-ups and old insulation removal for homes in Glasgow and the surrounding areas, with a free survey and fixed written quote.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Easy-Sprayaway",
    legalName: "Something Easy Ltd",
    url: "https://www.easy-sprayaway.co.uk",
    telephone: "+448004332068",
    address: {
      "@type": "PostalAddress",
      streetAddress: "48 West George Street",
      addressLocality: "Glasgow",
      postalCode: "G2 1BP",
      addressCountry: "GB",
    },
  },
  areaServed: [
    { "@type": "City", name: "Glasgow" },
    ...areas.slice(4).map((name) => ({ "@type": "Place", name })),
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function LoftInsulationGlasgowPage() {
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber-700 hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-amber-700 hover:underline">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Loft Insulation Glasgow
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-medium text-sm mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Based in Glasgow since 2016
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Loft Insulation in <span className="text-amber-600">Glasgow</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                A cold, draughty home and high heating bills often start in the loft. Easy-Sprayaway is a family-run, fully
                insured team of insulation installers based in Glasgow, fitting new insulation, topping up existing layers and
                removing old insulation in homes across the city.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 h-auto shadow-lg"
                >
                  <Link href={QUOTE_LINK} className="flex items-center">
                    Book a free survey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-100 hover:text-amber-800 text-lg px-8 py-4 h-auto"
                >
                  <Link href={PHONE_LINK} className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    {PHONE_DISPLAY}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-amber-100">
              <Image
                src="/images/services/loft-insulation-main.jpeg"
                alt="Loft insulation being installed between ceiling joists in a Glasgow home"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The benefits of loft insulation for Glasgow homes
            </h2>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                In a home without effective insulation, around a quarter of the heat you pay for escapes through the
                roof. Glasgow winters are long, damp and windy, so that heat loss adds up quickly on your energy bills.
              </p>
              <p>
                Insulating the loft is one of the simplest ways to insulate your home and improve its energy efficiency. A
                properly insulated loft keeps warmth in the living space below, helps rooms feel less draughty and can improve your EPC rating, which matters if you
                plan to sell or let the property.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {[
                { icon: Thermometer, label: "Warmer rooms below the loft" },
                { icon: Wind, label: "Fewer draughts and cold spots" },
                { icon: ShieldCheck, label: "Lower heating bills" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50/60 p-4"
                >
                  <item.icon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/60">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insulation for every type of Glasgow home
            </h2>
            <p className="text-lg text-gray-700">
              Glasgow has a wide mix of housing, and each type of roof space needs a slightly different approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {propertyTypes.map((type) => (
              <div key={type.title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                    <type.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{type.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Insulation materials we install</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We recommend a material after we have seen your loft, not before. The right choice depends on the age
                of the property, how you use the space and your budget.
              </p>
              <ul className="space-y-5">
                {materials.map((material) => (
                  <li key={material.name} className="flex gap-3">
                    <div className="rounded-full p-1 bg-green-100 h-fit mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{material.name}</h3>
                      <p className="text-gray-700">
                        {material.text}
                        {material.name === "Multifoil" && (
                          <>
                            {" "}
                            <Link href="/services#superquilt" className="text-amber-700 underline hover:text-amber-800">
                              Read about our EasyQuilt service
                            </Link>
                            .
                          </>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-700">
                Please note that we do not install spray foam insulation.
              </p>
            </div>
            <div className="relative h-80 lg:h-[32rem] rounded-3xl overflow-hidden shadow-xl border border-amber-100">
              <Image
                src="/images/services/glass-mineral-wool.jpeg"
                alt="Rolls of glass mineral wool loft insulation ready to install"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depth and top-ups */}
      <section className="py-16 md:py-20 bg-amber-50/50">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              How deep should your insulation be?
            </h2>
            <p>
              For mineral wool, 270mm is the depth generally recommended for an existing home. Many Glasgow lofts we
              survey have 100mm or less, laid when the house was built or decades ago. Over time old insulation can
              become compressed, damp or patchy, and it no longer does its job.
            </p>
            <p>
              If your existing insulation is in good condition, a top-up is usually all that is needed. We lay new
              rolls across the ceiling joists to reach the full depth. If the old layer is damp or damaged, we remove
              it first so the new insulation can perform as it should.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How our service works</h2>
            <p className="text-lg text-gray-700">From your first call to a warmer home, usually within a few weeks.</p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ventilation and condensation */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/60">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ventilation, condensation and loft boarding
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Good insulation work is about more than depth. A loft that is sealed up badly can trap moisture and lead
              to condensation on the roof timbers. On every job we:
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              {[
                "Keep the eaves clear so air can move through the roof space",
                "Insulate around the cold water tank and pipes, but not underneath the tank, so warmth from below stops them freezing",
                "Leave safe clearance around downlights and electrical fittings",
                "Fit raised boarding on loft legs if you need storage, so the insulation is never squashed under floorboards",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <div className="rounded-full p-1 bg-green-100 h-fit mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost and grants */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-amber-100 bg-amber-50/50 p-8">
              <ClipboardCheck className="h-8 w-8 text-amber-600 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Loft insulation cost in Glasgow</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every loft is different, so we do not quote a price over the phone. The cost depends on:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "The size of the loft and how easy it is to reach",
                  "How much existing insulation is already there",
                  "Whether old insulation needs to be removed",
                  "The material you choose and any boarding you want",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Book a free survey and we will give you a fixed written quote with no hidden extras.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8">
              <Info className="h-8 w-8 text-blue-600 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Grants and Home Energy Scotland</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some households in Scotland may qualify for funded or discounted insulation, depending on their
                circumstances and the schemes available at the time. Home Energy Scotland provides free, impartial
                advice on what support you may be eligible for.
              </p>
              <p className="text-gray-900 font-semibold leading-relaxed">
                Please note: Easy-Sprayaway does not carry out grant-funded installations. All of our work is privately
                funded, so please check your eligibility with Home Energy Scotland before booking a survey with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas we cover</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our office is on West George Street in the city centre, and we install insulation across Glasgow and
              surrounding areas, including:
            </p>
            <ul className="flex flex-wrap justify-center gap-3 mb-8">
              {areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-gray-800"
                >
                  <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              We also work throughout Scotland, including Edinburgh, and have a dedicated page for{" "}
              <Link href="/loft-insulation-paisley" className="text-amber-700 underline hover:text-amber-800">
                loft insulation in Paisley
              </Link>
              . Not sure if we cover your street?{" "}
              <Link href="/contact" className="text-amber-700 underline hover:text-amber-800">
                Get in touch
              </Link>{" "}
              and we will let you know.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-amber-100 bg-white p-5 shadow-sm open:bg-amber-50/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg">{faq.question}</h3>
                    <span className="text-amber-600 text-2xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-amber-50 border-t border-amber-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get a loft insulation quote in Glasgow</h2>
            <p className="text-lg text-gray-700 mb-8">
              Book your free, no-obligation survey and find out what your loft needs. You can also read what our
              customers say on our{" "}
              <Link href="/reviews" className="text-amber-700 underline hover:text-amber-800">
                reviews page
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 h-auto shadow-lg"
              >
                <Link href={QUOTE_LINK} className="flex items-center">
                  Book a free survey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-100 hover:text-amber-800 text-lg px-8 py-4 h-auto"
              >
                <Link href={PHONE_LINK} className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  {PHONE_DISPLAY}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

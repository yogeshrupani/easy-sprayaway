import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Check, ClipboardCheck, Home, Info, MapPin, Phone, Search } from "lucide-react"

const PAGE_URL = "https://www.easy-sprayaway.co.uk/loft-insulation-paisley"
const PHONE_DISPLAY = "0800 433 2068"
const PHONE_LINK = "tel:+448004332068"
const QUOTE_LINK = "/contact?service=loft-insulation"

export const metadata: Metadata = {
  title: { absolute: "Loft Insulation Paisley | Local Installers | Easy-Sprayaway" },
  description:
    "Loft insulation in Paisley and across Renfrewshire. Top-ups, new installs and old insulation removal from a family-run team since 2016. Request a free quote.",
  alternates: {
    canonical: "/loft-insulation-paisley",
  },
  openGraph: {
    title: "Loft Insulation Paisley | Easy-Sprayaway",
    description:
      "Loft insulation installers covering Paisley and Renfrewshire. Free survey, fixed written quote and a tidy installation, usually in one day.",
    url: PAGE_URL,
    siteName: "Easy-Sprayaway",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/services/sheep-wool-insulation.jpeg",
        width: 1200,
        height: 630,
        alt: "Deep loft insulation laid across the floor of a Paisley loft",
      },
    ],
  },
}

const homes = [
  {
    icon: Home,
    title: "Victorian and Edwardian villas",
    text: "Large stone houses in areas such as Castlehead, Oakshaw and Thornly Park often have high, draughty roof spaces. We use breathable insulation materials that suit older construction and keep the roof void ventilated.",
  },
  {
    icon: Building,
    title: "Tenements and cottage flats",
    text: "Top-floor flats in the town centre and four-in-a-block cottage flats can lose a lot of heat through the roof. We check access and any shared loft areas before we quote.",
  },
  {
    icon: Home,
    title: "Post-war semis and terraces",
    text: "Homes in Foxbar, Glenburn, Gallowhill and similar estates often have a thin original layer that has flattened over the years. A top-up is usually all that is needed to bring them up to the recommended depth.",
  },
  {
    icon: Building,
    title: "Newer homes and extensions",
    text: "Even newer houses in Ralston, Linwood and Erskine can benefit from extra depth, and extensions sometimes leave gaps where the old and new roofs meet. We find and fill them.",
  },
]

const checks = [
  "Look for roof leaks, damp patches or damaged felt, as any roof repair needs to be done before new insulation goes in",
  "Check the eaves are clear so the loft can still breathe once it is insulated",
  "Note wiring, downlights and the chimney breast so we leave safe clearance around them",
  "Measure the depth and condition of any existing insulation",
]

const areas = [
  "Paisley town centre",
  "Ralston",
  "Foxbar",
  "Glenburn",
  "Gallowhill",
  "Renfrew",
  "Johnstone",
  "Linwood",
  "Elderslie",
  "Erskine",
  "Barrhead",
]

const faqs = [
  {
    question: "How much does loft insulation cost in Paisley?",
    answer:
      "It depends on the size of the loft, how easy it is to reach, the depth of any existing insulation and the material you choose. We do not guess over the phone. After a free survey you get a fixed written quote, so you know the full price before you decide.",
  },
  {
    question: "Is there a government grant for free loft insulation in Scotland?",
    answer:
      "Some households may qualify for funded insulation through government and energy company schemes, depending on their circumstances. Home Energy Scotland gives free, impartial advice on what is available. Easy-Sprayaway does not carry out grant-funded installations, so please check your eligibility with Home Energy Scotland before you book a survey with us.",
  },
  {
    question: "Should I remove old loft insulation before laying new?",
    answer:
      "Only if it is damp, mouldy, badly compressed or contaminated. Old insulation that is dry and evenly spread can stay in place, and we lay the new rolls over the top. If removal is needed, we include it in your quote and take the old material away.",
  },
  {
    question: "Is 400mm of loft insulation too much?",
    answer:
      "It will not cause harm as long as the loft stays properly ventilated, but the extra saving beyond around 270mm of mineral wool is small. Deeper insulation also makes it harder to use the loft for storage, so we will recommend a sensible depth for your home and how you use the space.",
  },
  {
    question: "Do you insulate rented properties for landlords?",
    answer:
      "Yes. We work with landlords across Paisley and Renfrewshire who want warmer homes for their tenants and a better EPC rating. We can arrange access with your tenants and keep disruption to a minimum.",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.easy-sprayaway.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.easy-sprayaway.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Loft Insulation Paisley", item: PAGE_URL },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Loft Insulation in Paisley",
  serviceType: "Loft insulation installation",
  url: PAGE_URL,
  description:
    "Loft insulation installation, top-ups and old insulation removal for homes in Paisley and across Renfrewshire, with a free survey and fixed written quote.",
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
    { "@type": "City", name: "Paisley" },
    { "@type": "AdministrativeArea", name: "Renfrewshire" },
    ...areas.slice(5).map((name) => ({ "@type": "Place", name })),
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

export default function LoftInsulationPaisleyPage() {
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
                Loft Insulation Paisley
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-medium text-sm mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Covering Paisley and Renfrewshire
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Loft Insulation in <span className="text-amber-600">Paisley</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                If your heating is working hard but the house still feels cold, the loft is the first place to look.
                We install new insulation, upgrade thin or tired layers and clear out old material for homeowners and
                landlords across Paisley, from a family-run team that has been insulating homes since 2016.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 h-auto shadow-lg"
                >
                  <Link href={QUOTE_LINK} className="flex items-center">
                    Request a quote
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
                src="/images/services/sheep-wool-insulation.jpeg"
                alt="Deep loft insulation laid across the floor of a Paisley loft"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why upgrade */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Why Paisley homeowners upgrade their insulation
            </h2>
            <p>
              Warm air rises, and in a poorly insulated house much of it ends up heating the roof instead of your
              rooms. With the damp, windy weather we get in the west of Scotland, that shows up quickly in your
              heating bills.
            </p>
            <p>
              Proper insulation helps maintain a comfortable temperature all year, takes pressure off your heating
              system and can improve your home&apos;s energy efficiency rating. For landlords, it is one of the most
              cost-effective ways to lift an EPC score.
            </p>
          </div>
        </div>
      </section>

      {/* Home types */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/60">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Paisley homes we insulate</h2>
            <p className="text-lg text-gray-700">
              From Victorian villas to modern estates, every attic is different. Here is what we typically find.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {homes.map((home) => (
              <div key={home.title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                    <home.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{home.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{home.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before we start */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-700 font-semibold mb-3">
                <Search className="h-5 w-5" />
                Free survey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What we check before we install</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our specialist surveyor looks at the whole roof space, not just the insulation. On every visit we:
              </p>
              <ul className="space-y-4 text-gray-700">
                {checks.map((item) => (
                  <li key={item} className="flex gap-3">
                    <div className="rounded-full p-1 bg-green-100 h-fit mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[28rem] rounded-3xl overflow-hidden shadow-xl border border-amber-100">
              <Image
                src="/images/hero-insulation.png"
                alt="Insulation installer working in a loft space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials and depth */}
      <section className="py-16 md:py-20 bg-amber-50/50">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Materials and depth</h2>
            <p>
              Most lofts suit mineral wool or fibreglass rolls, laid between the joists and then across them. For
              older stone properties we may suggest sheep wool or hemp, which handle moisture well. Where headroom is
              tight, such as room in roof insulation, a thin multifoil like{" "}
              <Link href="/services#superquilt" className="text-amber-700 underline hover:text-amber-800">
                our EasyQuilt system
              </Link>{" "}
              can be the better fit. We do not install spray foam.
            </p>
            <p>
              For mineral wool, around 270mm is the depth generally recommended. Going deeper is possible, but the
              extra saving is small and it reduces storage space. If you want to keep using the loft, we can fit
              raised boarding so the insulation underneath is never squashed.
            </p>
            <p>
              Planning a full loft conversion? That work is normally carried out by a builder to meet building
              regulations, and the insulation is part of their design. Our focus is insulating loft spaces to cut
              heat loss and energy bills.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From survey to a warmer home</h2>
          </div>
          <ol className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Survey and quote",
                text: "We visit at a time that suits you and give you a fixed written quote at a fair price, with no pressure to go ahead.",
              },
              {
                title: "Installation",
                text: "Most lofts are finished in a single day. We cover floors and landings with dust sheets and work around anything you cannot move.",
              },
              {
                title: "Clean up and handover",
                text: "We take away all waste, including any old insulation, and show you what has been done before we leave.",
              },
            ].map((step, index) => (
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

      {/* Cost and funding */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/60">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-amber-100 bg-white p-8">
              <ClipboardCheck className="h-8 w-8 text-amber-600 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What affects the price?</h2>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  "The size and shape of the loft",
                  "Access through the hatch and around the roof timbers",
                  "How much insulation is already there and its condition",
                  "The material you choose and whether you want boarding",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Request a quote and we will arrange a free survey, then confirm the full price in writing.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8">
              <Info className="h-8 w-8 text-blue-600 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">A note on grants and funding</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some households in Scotland may qualify for funded insulation, depending on their circumstances and
                the schemes running at the time. Home Energy Scotland can advise on what you may be eligible for,
                including support with wall insulation and heating.
              </p>
              <p className="text-gray-900 font-semibold leading-relaxed">
                Please note: Easy-Sprayaway does not carry out grant-funded installations. All of our work is privately
                funded, so please check your eligibility with Home Energy Scotland first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paisley and surrounding areas</h2>
            <p className="text-lg text-gray-700 mb-8">
              We install loft insulation across Renfrewshire and the west of Glasgow, including:
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
              Live in the city? See our page on{" "}
              <Link href="/loft-insulation-glasgow" className="text-amber-700 underline hover:text-amber-800">
                loft insulation in Glasgow
              </Link>
              , or{" "}
              <Link href="/contact" className="text-amber-700 underline hover:text-amber-800">
                get in touch
              </Link>{" "}
              to check we cover your street.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Your questions answered</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book your free loft survey in Paisley</h2>
            <p className="text-lg text-gray-700 mb-8">
              Tell us a little about your home and we will be in touch to arrange a visit. You can also read our{" "}
              <Link href="/reviews" className="text-amber-700 underline hover:text-amber-800">
                customer reviews
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
                  Request a quote
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

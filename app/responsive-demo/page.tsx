import { ResponsiveButton } from "@/components/layout/responsive-button"
import { ResponsiveCard } from "@/components/layout/responsive-card"
import { ResponsiveFlex } from "@/components/layout/responsive-flex"
import { ResponsiveFooter } from "@/components/layout/responsive-footer"
import { ResponsiveGrid } from "@/components/layout/responsive-grid"
import { ResponsiveHeading, ResponsiveText } from "@/components/layout/responsive-typography"
import { ResponsiveImage } from "@/components/layout/responsive-image"
import { ResponsiveNavigation } from "@/components/layout/responsive-navigation"
import { ResponsivePage } from "@/components/layout/responsive-page"
import { ResponsiveSection } from "@/components/layout/responsive-section"

export const metadata = {
  title: "Responsive Layout Demo | Easy-Sprayaway",
  description: "Demonstration of the responsive layout system for Easy-Sprayaway website",
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
]

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "SuperQuilt Insulation", href: "/services#superquilt" },
      { label: "Roof Cleaning", href: "/services#roof-cleaning" },
      { label: "Wall Cleaning", href: "/services#wall-cleaning" },
      { label: "Driveway Cleaning", href: "/services#driveway-cleaning" },
      { label: "Spray Foam Insulation", href: "/services#spray-foam" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/gallery" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Energy Savings", href: "/energy-savings" },
      { label: "Refer a Friend", href: "/refer-a-friend" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

export default function ResponsiveDemoPage() {
  return (
    <>
      <ResponsiveNavigation
        logo={{
          src: "/logo-new.png",
          alt: "Easy-Sprayaway",
          width: 180,
          height: 40,
        }}
        items={navItems}
        ctaButton={{
          label: "Get Free Survey",
          href: "/contact",
        }}
      />

      <ResponsivePage fullWidth>
        {/* Hero Section */}
        <ResponsiveSection bgColor="bg-gradient-to-r from-blue-600 to-blue-800" spacing="xl">
          <ResponsiveFlex direction={{ default: "col", lg: "row" }} align="center" justify="between" gap="lg">
            <div className="w-full lg:w-1/2 text-white">
              <ResponsiveHeading size="2xl" color="text-white" className="mb-6">
                Professional Home Services in the UK
              </ResponsiveHeading>
              <ResponsiveText size="lg" color="text-blue-100" className="mb-8">
                Specializing in SuperQuilt loft insulation, roof cleaning, and exterior maintenance for UK homeowners.
              </ResponsiveText>
              <ResponsiveFlex gap="md">
                <ResponsiveButton as="link" href="/contact" variant="secondary" size="lg">
                  Get Your Free Survey
                </ResponsiveButton>
                <ResponsiveButton
                  as="link"
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  Our Services
                </ResponsiveButton>
              </ResponsiveFlex>
            </div>
            <div className="w-full lg:w-1/2">
              <ResponsiveImage
                src="/images/superquilt-installation.png"
                alt="SuperQuilt Installation"
                aspectRatio="video"
                rounded
                shadow
                priority
              />
            </div>
          </ResponsiveFlex>
        </ResponsiveSection>

        {/* Services Section */}
        <ResponsiveSection spacing="xl">
          <ResponsiveHeading align="center" className="mb-4">
            Our Services
          </ResponsiveHeading>
          <ResponsiveText align="center" size="lg" className="mb-12 max-w-3xl mx-auto text-gray-600">
            We provide a range of professional home improvement and maintenance services to keep your property in top
            condition.
          </ResponsiveText>

          <ResponsiveGrid columns={{ default: 1, sm: 2, lg: 4 }} gap="lg">
            {[
              {
                title: "SuperQuilt Insulation",
                description: "Energy-efficient loft insulation to reduce heat loss and lower energy bills.",
                image: "/images/superquilt-insulation.png",
              },
              {
                title: "Roof Cleaning",
                description: "Professional roof cleaning and protective coatings to extend roof lifespan.",
                image: "/images/roof-cleaning.png",
              },
              {
                title: "Wall & Driveway Cleaning",
                description: "Soft wash and pressure wash services for walls, patios, and driveways.",
                image: "/images/driveway-cleaning.png",
              },
              {
                title: "Spray Foam Insulation",
                description: "High-performance spray foam insulation for superior thermal efficiency.",
                image: "/images/spray-foam.png",
              },
            ].map((service, index) => (
              <ResponsiveCard key={index} hover className="h-full flex flex-col">
                <ResponsiveImage src={service.image} alt={service.title} aspectRatio="video" className="mb-4" rounded />
                <ResponsiveHeading as="h3" size="sm" className="mb-2">
                  {service.title}
                </ResponsiveHeading>
                <ResponsiveText className="mb-4 flex-grow">{service.description}</ResponsiveText>
                <ResponsiveButton as="link" href="/services" variant="outline" size="sm">
                  Learn More
                </ResponsiveButton>
              </ResponsiveCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveSection>

        {/* Before/After Section */}
        <ResponsiveSection bgColor="bg-gray-50" spacing="xl">
          <ResponsiveHeading align="center" className="mb-4">
            Our Results
          </ResponsiveHeading>
          <ResponsiveText align="center" size="lg" className="mb-12 max-w-3xl mx-auto text-gray-600">
            See the difference our professional services can make to your home.
          </ResponsiveText>

          <ResponsiveGrid columns={{ default: 1, md: 2 }} gap="lg">
            <ResponsiveCard hover>
              <ResponsiveFlex direction={{ default: "col", sm: "row" }} gap="md">
                <div className="w-full sm:w-1/2">
                  <ResponsiveImage
                    src="/images/roof-before.png"
                    alt="Roof Before Cleaning"
                    aspectRatio="square"
                    rounded
                  />
                  <ResponsiveText align="center" weight="medium" className="mt-2">
                    Before
                  </ResponsiveText>
                </div>
                <div className="w-full sm:w-1/2">
                  <ResponsiveImage
                    src="/images/roof-after.png"
                    alt="Roof After Cleaning"
                    aspectRatio="square"
                    rounded
                  />
                  <ResponsiveText align="center" weight="medium" className="mt-2">
                    After
                  </ResponsiveText>
                </div>
              </ResponsiveFlex>
              <ResponsiveHeading as="h3" size="sm" align="center" className="mt-4">
                Roof Cleaning
              </ResponsiveHeading>
            </ResponsiveCard>

            <ResponsiveCard hover>
              <ResponsiveFlex direction={{ default: "col", sm: "row" }} gap="md">
                <div className="w-full sm:w-1/2">
                  <ResponsiveImage
                    src="/images/loft-before.png"
                    alt="Loft Before Insulation"
                    aspectRatio="square"
                    rounded
                  />
                  <ResponsiveText align="center" weight="medium" className="mt-2">
                    Before
                  </ResponsiveText>
                </div>
                <div className="w-full sm:w-1/2">
                  <ResponsiveImage
                    src="/images/loft-after.png"
                    alt="Loft After Insulation"
                    aspectRatio="square"
                    rounded
                  />
                  <ResponsiveText align="center" weight="medium" className="mt-2">
                    After
                  </ResponsiveText>
                </div>
              </ResponsiveFlex>
              <ResponsiveHeading as="h3" size="sm" align="center" className="mt-4">
                SuperQuilt Insulation
              </ResponsiveHeading>
            </ResponsiveCard>
          </ResponsiveGrid>
        </ResponsiveSection>

        {/* Testimonials Section */}
        <ResponsiveSection spacing="xl">
          <ResponsiveHeading align="center" className="mb-4">
            What Our Customers Say
          </ResponsiveHeading>
          <ResponsiveText align="center" size="lg" className="mb-12 max-w-3xl mx-auto text-gray-600">
            Don't just take our word for it - hear from our satisfied customers across the UK.
          </ResponsiveText>

          <ResponsiveGrid columns={{ default: 1, md: 3 }} gap="lg">
            {[
              {
                name: "James Wilson",
                location: "Glasgow",
                image: "/scottish-man-avatar.png",
                text: "The SuperQuilt insulation has made a huge difference to our home. It's much warmer and our energy bills have gone down significantly.",
                rating: 5,
              },
              {
                name: "Sarah Thompson",
                location: "Edinburgh",
                image: "/smiling-scottish-woman-avatar.png",
                text: "Professional, efficient service from start to finish. The team was knowledgeable and left everything clean and tidy. Highly recommend!",
                rating: 5,
              },
              {
                name: "Robert Campbell",
                location: "Aberdeen",
                image: "/older-scottish-homeowner.png",
                text: "Excellent job cleaning our roof and driveway. Looks like new again! The team was punctual and very thorough with their work.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <ResponsiveCard key={index} variant="outline" hover className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <ResponsiveImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    roundedFull
                    className="mr-4"
                  />
                  <div>
                    <ResponsiveText weight="semibold">{testimonial.name}</ResponsiveText>
                    <ResponsiveText size="sm" color="text-gray-500">
                      {testimonial.location}
                    </ResponsiveText>
                  </div>
                </div>
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <ResponsiveText className="flex-grow">"{testimonial.text}"</ResponsiveText>
              </ResponsiveCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveSection>

        {/* CTA Section */}
        <ResponsiveSection bgColor="bg-blue-600" spacing="lg">
          <ResponsiveFlex
            direction={{ default: "col", md: "row" }}
            align="center"
            justify="between"
            gap="lg"
            className="text-white"
          >
            <div>
              <ResponsiveHeading color="text-white" className="mb-2">
                Ready to improve your home?
              </ResponsiveHeading>
              <ResponsiveText color="text-blue-100" size="lg">
                Contact us today for a free, no-obligation survey.
              </ResponsiveText>
            </div>
            <ResponsiveButton as="link" href="/contact" variant="secondary" size="lg">
              Get Your Free Survey
            </ResponsiveButton>
          </ResponsiveFlex>
        </ResponsiveSection>

        {/* Footer */}
        <ResponsiveFooter
          logo={{
            src: "/logo-new-white.png",
            alt: "Easy-Sprayaway",
            width: 180,
            height: 40,
          }}
          columns={footerColumns}
          social={[
            { platform: "facebook", href: "https://facebook.com" },
            { platform: "twitter", href: "https://twitter.com" },
            { platform: "instagram", href: "https://instagram.com" },
            { platform: "email", href: "mailto:info@easy-sprayaway.co.uk" },
          ]}
          contact={{
            address: "123 Main Street, Glasgow, Scotland, UK",
            phone: "0800 123 4567",
            email: "info@easy-sprayaway.co.uk",
          }}
          copyright="© 2023 Easy-Sprayaway. All rights reserved."
        />
      </ResponsivePage>
    </>
  )
}

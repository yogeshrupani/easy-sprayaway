import FAQSection from "@/components/faq-section"
import FAQSchema from "@/components/faq-schema"
import { faqs } from "@/data/faqs"
import EnhancedErrorBoundary from "@/components/enhanced-error-boundary"
import { SectionErrorFallback } from "@/components/error-fallbacks/section-error-fallback"

export const metadata = {
  title: "Frequently Asked Questions | Easy-Sprayaway",
  description:
    "Find answers to common questions about our insulation, roof cleaning, and property maintenance services.",
}

export default function FAQsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Schema Markup for SEO */}
      <FAQSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about our services. Can't find what you're looking for? Contact us directly
            and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <EnhancedErrorBoundary
        componentName="FAQ Section"
        fallback={
          <SectionErrorFallback
            title="FAQs Unavailable"
            message="We're having trouble loading our frequently asked questions. Please try again later."
            imageType="maintenance"
          />
        }
      >
        <FAQSection faqs={faqs} />
      </EnhancedErrorBoundary>
    </main>
  )
}

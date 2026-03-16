import Link from "next/link"
import { Button } from "@/components/ui/button"
import EnergySavingsDashboard from "@/components/energy-savings-dashboard"
import { ArrowLeft, Calculator, PiggyBank, LineChart, Lightbulb, Home, Zap } from "lucide-react"
import "./energy-charts.css"

export const metadata = {
  title: "Energy Savings Calculator | Easy-Sprayaway",
  description:
    "Calculate how much you could save on energy bills with SuperQuilt insulation. Interactive charts and personalized savings estimates for UK homeowners.",
}

export default function EnergySavingsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Energy Savings Calculator
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              See how much you could save with SuperQuilt insulation through our interactive charts and visualizations.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="shine">
                <a href="#calculator">View Calculator</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="calculator" className="py-16 md:py-24 scroll-mt-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <EnergySavingsDashboard />
          </div>
        </div>
      </section>

      {/* How We Calculate Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
              <Calculator className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Calculate Your Savings</h2>
            <p className="text-lg text-gray-600">
              Our energy savings estimates are based on real-world data and thermal performance testing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Property Assessment</h3>
              <p className="text-gray-600">
                We analyze your property type, size, and current insulation to establish your baseline energy usage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Thermal Modeling</h3>
              <p className="text-gray-600">
                We use advanced thermal modeling software to calculate heat loss reduction with SuperQuilt insulation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <PiggyBank className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cost Projection</h3>
              <p className="text-gray-600">
                We convert energy savings into financial projections based on current and forecasted energy prices.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-xl border shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative h-48 w-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-slow"></div>
                  <Zap className="h-24 w-24 text-primary" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Real-World Validation</h3>
                <p className="text-gray-600 mb-4">
                  Our calculations are validated against real-world performance data from thousands of UK homes that
                  have installed SuperQuilt insulation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Thermal imaging before and after installation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Energy bill comparisons from customer data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Independent laboratory testing of materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-blue-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Saving?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a personalized energy savings assessment and free quote for SuperQuilt installation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="shine">
                <Link href="/contact">Get Your Free Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Users, Award, Heart, Home, Shield, Zap } from "lucide-react"

export const metadata = {
  title: "About Easy-Sprayaway | Family-Run Home Services Since 2016",
  description:
    "Learn about Easy-Sprayaway, a trusted family-run business providing professional insulation and property cleaning services across the UK since 2016.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Warm Family Focus */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f59e0b' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-medium text-sm mb-8">
                <Heart className="h-4 w-4 mr-2" />
                Family-Run Business Since 2016
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Your Home is Our <span className="text-amber-600">Family's Priority</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                At Easy-Sprayaway, we understand that your home is where your family creates memories. That's why we
                treat every project with the same care and attention we'd give our own family home.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 h-auto"
                >
                  <Link href="/contact">Meet Our Family Team</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-100 hover:text-amber-800 text-lg px-8 py-4 h-auto"
                >
                  <Link href="tel:+448004332068" className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    0800 433 2068
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Family Image with Warm Styling */}
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-orange-100 border-4 border-white">
                <Image
                  src="/images/happy-family-about.png"
                  alt="Happy family of three - mother, father and child - smiling and laughing together in their warm, comfortable home"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Warm Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Values Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Family Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Family First",
                description:
                  "We understand the importance of family and home. Every project is approached with the care and attention your family deserves.",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Home className="h-8 w-8" />,
                title: "Home Comfort",
                description:
                  "Your comfort is our priority. We ensure every installation improves your family's daily life and home environment.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Trust & Reliability",
                description:
                  "Built on family values of honesty and reliability, we've earned the trust of families across the UK.",
                color: "from-blue-500 to-indigo-500",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-200"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Family Story</h2>
              <p className="text-xl text-gray-600">From humble beginnings to serving families across the UK</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Founded on Family Values</h3>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      Easy-Sprayaway began in 2016 as a family dream to help other families create more comfortable,
                      energy-efficient homes. What started as a small family operation has grown into a trusted name
                      across the UK.
                    </p>
                    <p>
                      Our commitment to treating every customer like family has been the cornerstone of our success.
                    </p>
                    <p>
                      With over 30 years of experience in the industry, we believe that your home should be a sanctuary
                      where your family feels safe, comfortable, and happy.
                    </p>
                    <p>
                      Today, we're proud to have helped over 1000 families reduce their energy bills, improve their home
                      comfort, and create better living environments for their loved ones.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-200">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Family-Owned & Operated</h4>
                      <p className="text-gray-700 mb-6">
                        Every project is personally overseen by our family team, ensuring the highest standards of
                        quality and care.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-amber-600">2016</div>
                          <div className="text-sm text-gray-600">Founded</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-amber-600">100%</div>
                          <div className="text-sm text-gray-600">Satisfaction Guaranteed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Supporting Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a family business, we believe in giving back to the community that has supported us throughout our
              journey.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Glasgow Elim Church FC Partnership</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We're proud supporters of Glasgow Elim Church FC, demonstrating our commitment to local community
                  sports and youth development. This partnership reflects our family values of teamwork, dedication, and
                  community spirit.
                </p>

                <div className="space-y-4">
                  {[
                    "Supporting local youth football development",
                    "Promoting community health and fitness",
                    "Building stronger community connections",
                    "Encouraging teamwork and sportsmanship",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Community Champions</h4>
                    <p className="text-gray-700 mb-6">
                      Supporting local initiatives and community development through our business success.
                    </p>
                    <Image
                      src="/images/glasgow-elim-church-fc-team.jpg"
                      alt="Glasgow Elim Church FC team photo"
                      width={300}
                      height={200}
                      className="rounded-xl mx-auto shadow-lg w-full max-w-sm object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Family Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Families Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our family approach to business means you get personal service, honest advice, and lasting relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Personal Care",
                description: "Every family receives our full attention and personalised service",
                stat: "100%",
                statLabel: "Personal Service",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Trusted Expertise",
                description: "9+ years of family-run experience you can rely on",
                stat: "9+",
                statLabel: "Years Experience",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Quality Results",
                description: "Proven results that improve your family's comfort and savings",
                stat: "£400+",
                statLabel: "Average Savings",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Family Network",
                description: "Join our growing family of satisfied customers across the UK",
                stat: "500+",
                statLabel: "Satisfied Customers",
              },
            ].map((reason, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-2 border-amber-100 hover:border-amber-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{reason.description}</p>
                <div className="border-t border-amber-100 pt-4">
                  <div className="text-2xl font-bold text-amber-600">{reason.stat}</div>
                  <div className="text-xs text-gray-500">{reason.statLabel}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight, ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      {/* Top section with CTA */}
      <div className="container py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 md:p-12 shadow-premium">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Home?</h2>
              <p className="text-lg mb-6 text-white/90">
                Contact us today for a free, no-obligation survey and quote. Our experts will help you choose the
                perfect solution for your home.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact" className="flex items-center">
                  Get Your Free Survey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs">
                <div className="flex items-center mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => {
                        const rating = 4.5
                        const isFilled = i < Math.floor(rating)
                        const isPartial = i === Math.floor(rating) && rating % 1 !== 0

                        return (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              isFilled
                                ? "text-green-400 fill-green-400"
                                : isPartial
                                  ? "text-green-400 fill-green-400/60"
                                  : "text-green-400/30"
                            }`}
                          />
                        )
                      })}
                      <span className="ml-2 text-white font-bold text-xl">4.5</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/90 font-medium mb-2">Excellent Service</p>
                <p className="text-white/80 text-sm mb-3">Based on 23 verified customer reviews</p>
                <div className="space-y-2">
                  <div className="text-xs text-white/70 italic">"Excellent service and professional team"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="border-t border-white/10">
        <div className="container py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            <div className="flex flex-col space-y-6">
              <Link href="/" className="inline-block">
                <img
                  src="/images/something-easy-logo.png"
                  alt="Something Easy - Easy Sprayaway"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-white/80 max-w-xs">
                UK's premium home insulation and property maintenance <b>specialists</b>. Family-run business providing
                quality services since 2016.
              </p>

              <div className="flex items-center space-x-3 my-4">
                <Link
                  href="https://www.facebook.com/people/Easy-Sprayaway/61560317707196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-3 text-white/70 hover:text-white hover:bg-primary-light transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/easy_sprayaway/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-3 text-white/70 hover:text-white hover:bg-primary-light transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <Link
                    href="https://goo.gl/maps/WJrKMCRCMmQKXgPD6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-accent transition-colors group"
                  >
                    <span className="group-hover:underline">48 West George Street, Glasgow, G2 1BP</span>
                    <ExternalLink className="h-3 w-3 inline-block ml-1 mb-0.5 opacity-70" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <a
                    href="tel:+448004332068"
                    className="text-sm text-white/80 hover:text-accent transition-colors hover:underline"
                  >
                    0800 433 2068
                  </a>
                  <p className="text-xs text-white/50 ml-2">9 AM - 7 PM, 7 days a week</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <a
                    href="mailto:info@something-easy.co.uk"
                    className="text-sm text-white/80 hover:text-accent transition-colors hover:underline"
                  >
                    info@something-easy.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>

              <div className="grid grid-cols-1 gap-2">
                <Link
                  href="/services#superquilt"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">SuperQuilt Insulation</span>
                </Link>
                <Link
                  href="/services#roof-cleaning"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Roof Cleaning & Coatings</span>
                </Link>
                <Link
                  href="/services#wall-driveway"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Wall & Driveway Cleaning</span>
                </Link>
              </div>

              <h3 className="text-lg font-semibold text-white mt-6">Service Areas</h3>
              <p className="text-sm text-white/80">
                Serving Scotland including Glasgow, Edinburgh, Aberdeen, Perth, Inverness, Dundee, Ayrshire, and
                surrounding areas.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>

              <div className="grid grid-cols-1 gap-2">
                <Link
                  href="/about"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
                <Link
                  href="/gallery"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Project Gallery</span>
                </Link>
                <Link
                  href="/reviews"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Customer Reviews</span>
                </Link>
                <Link
                  href="/refer-a-friend"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Refer a Friend (£250)</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-accent transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Contact Us</span>
                </Link>
              </div>

              <h3 className="text-lg font-semibold text-white mt-6">Certified & Trusted</h3>
              <div className="flex flex-wrap gap-3 mt-1">
                <div className="bg-white/10 text-white rounded px-2 py-1 text-xs font-semibold">TrustPilot 4.5★</div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-white">Free Home Survey</h3>
              <p className="text-white/80 text-sm">
                Ready to transform your home? Request a free, no-obligation survey and quote. Our experts will help you
                choose the perfect solution.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-light text-white shadow-gold hover:shadow-gold-hover"
              >
                <Link href="/contact">Get Your Free Survey</Link>
              </Button>

              <div className="bg-white/10 rounded-lg p-4 mt-4 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Opening Hours</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">7 Days a Week</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <p className="text-xs text-white/60">Emergency callouts available by arrangement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/10 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-white/50 mb-4 md:mb-0">
              &copy; {currentYear} Something Easy trading as Easy-Sprayaway. <br className="md:hidden" />
              Registration Number: SC533644. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-white/50 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-white/50 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-sm text-white/50 hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

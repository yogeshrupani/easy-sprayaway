import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Users, Gift, Banknote, ArrowRight } from "lucide-react"
import ReferralFormWrapper from "./referral-form-wrapper"

export const metadata = {
  title: "Refer a Friend | £250 Reward | Easy-Sprayaway",
  description:
    "Refer a friend to Easy-Sprayaway and earn a £250 reward when they complete a project with us. No limit on referrals - earn rewards for each successful referral!",
}

export default function ReferAFriendPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Refer a Friend, <span className="text-primary">Earn £250</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Know someone who could benefit from our services? Refer them to us and receive £250 when they complete a
                project. It's our way of saying thank you for spreading the word.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                  <a href="#refer-now">Refer a Friend Now</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
              <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="absolute -top-5 -right-5 bg-primary text-white text-lg font-bold rounded-full h-16 w-16 flex items-center justify-center shadow-md transform rotate-12">
                  £250
                </div>
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Refer a friend using our simple form</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>We'll contact them to arrange a free survey</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>When they complete a project (min. £1,000), you get £250</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>No limit on referrals - refer as many friends as you like!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Refer Your Friends?</h2>
            <p className="text-lg text-gray-600">
              Sharing is caring - help your friends improve their homes while earning rewards for yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Help Your Friends</h3>
              <p className="text-gray-600">
                Introduce your friends to quality home improvement services they can trust. They'll thank you for the
                recommendation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Gift className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Rewards</h3>
              <p className="text-gray-600">
                Receive £250 for each successful referral. There's no limit to how many friends you can refer or how
                much you can earn.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Banknote className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Simple Process</h3>
              <p className="text-gray-600">
                Our referral process is quick and easy. Just fill out the form, and we'll handle the rest. You'll be
                notified when your reward is ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Successful Referrals</h2>
            <p className="text-lg text-gray-600">Here's what some of our customers say about our referral program.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white text-xs font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-sm">
                £250
              </div>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <Image
                    src="/images/happy-customer.png"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Glasgow</p>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                "I referred my sister after they did an amazing job with my loft insulation. The process was so simple,
                and I received my £250 reward promptly after her project was completed. We're both thrilled with the
                service!"
              </p>
              <p className="text-sm text-gray-500">Referred for: SuperQuilt Insulation</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white text-xs font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-sm">
                £250
              </div>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <Image
                    src="/images/happy-customer.png"
                    alt="David Thompson"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">David Thompson</h3>
                  <p className="text-sm text-gray-500">Edinburgh</p>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                "I've referred three friends so far and earned £750! Easy-Sprayaway made the whole process seamless, and
                my friends are all happy with their home improvements. It's a win-win for everyone involved."
              </p>
              <p className="text-sm text-gray-500">Referred for: Roof Cleaning & Wall Cleaning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section id="refer-now" className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Refer a Friend Today</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form with your details and your friend's information. We'll contact them to arrange a free
                survey and keep you updated on the progress.
              </p>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Gift className="h-5 w-5 text-primary mr-2" />
                  Referral Reward Terms
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-primary/10 mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>Your friend must complete a project with a minimum value of £1,000</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-primary/10 mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>Reward is paid after project completion and final payment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-primary/10 mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>No limit to the number of friends you can refer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-primary/10 mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>Payment made via bank transfer or check within 30 days of project completion</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <h4 className="font-bold">Need Help?</h4>
                    <p className="text-sm">Contact our referral team</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-primary to-primary-dark text-white">
                <h3 className="text-xl font-bold text-white">Refer a Friend</h3>
                <p className="text-white/80 mt-1">Fill in the form below to refer your friend</p>
              </div>
              <div className="p-6">
                <ReferralFormWrapper />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our referral program</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">How soon will I receive my reward?</h3>
              <p className="text-gray-600">
                You'll receive your £250 reward within 30 days of your friend's project completion and final payment.
                We'll notify you when the payment is processed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">Is there a limit to how many friends I can refer?</h3>
              <p className="text-gray-600">
                No, there's no limit! You can refer as many friends as you like and earn £250 for each successful
                referral.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">What counts as a qualifying project?</h3>
              <p className="text-gray-600">
                Any project with a minimum value of £1,000 qualifies for the referral reward. This includes insulation,
                roof cleaning, wall cleaning, and driveway cleaning services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">How will I receive my reward?</h3>
              <p className="text-gray-600">
                We'll contact you to arrange payment via bank transfer or check, whichever is most convenient for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Referring Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Help your friends improve their homes and earn rewards for yourself. It's a win-win!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <a href="#refer-now">Refer a Friend Now</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

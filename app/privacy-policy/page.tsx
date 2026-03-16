import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Easy-Sprayaway",
  description: "Privacy Policy for Easy-Sprayaway - Learn how we protect and handle your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Privacy Policy</h1>

          <p className="text-lg text-slate-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString("en-GB")}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                Easy-Sprayaway ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">Personal Information</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Property details and service requirements</li>
                    <li>Communication preferences</li>
                    <li>Survey and feedback responses</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">Automatically Collected Information</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>To provide and improve our SuperQuilt insulation, roof cleaning, and exterior cleaning services</li>
                <li>To respond to your inquiries and schedule appointments</li>
                <li>To send you service updates and important notifications</li>
                <li>To process payments and manage your account</li>
                <li>To comply with legal obligations</li>
                <li>To improve our website and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Under UK data protection law, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate data</li>
                <li>Right to erase your data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through
                your browser preferences. For more information, please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-slate-700 font-semibold mb-2">Easy-Sprayaway</p>
                <p className="text-slate-600">48 West George Street</p>
                <p className="text-slate-600">Glasgow, G2 1BP</p>
                <p className="text-slate-600 mt-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+448004332068" className="text-primary hover:underline">
                    0800 433 2068
                  </a>
                </p>
                <p className="text-slate-600">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@something-easy.co.uk" className="text-primary hover:underline">
                    info@something-easy.co.uk
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

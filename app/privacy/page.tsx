import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { TexturedBackground } from '@/components/ui/textured-background'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <TexturedBackground />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="space-x-8">
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
              Back to Home
            </Link>
            <Button 
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              At eBots (accessible at https://ebots.whyfaithe.com/), your privacy is one of our primary concerns. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-300">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Name: For user identification and personalization purposes.</li>
              <li>Email Address: To communicate with you, send updates, and provide support.</li>
              <li>Phone Number: For communication and customer service.</li>
              <li>Payment Details: To process transactions securely.</li>
              <li>Cookies and Tracking Data: To enhance user experience and analyze website traffic.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide and maintain our services.</li>
              <li>Process and manage your orders and payments.</li>
              <li>Communicate with you regarding updates, offers, and customer service.</li>
              <li>Improve and personalize the functionality of our website.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Understand user behavior on our website.</li>
              <li>Save your preferences for future visits.</li>
              <li>Measure and analyze site performance.</li>
            </ul>
            <p className="text-gray-300 mt-4">You can manage your cookie preferences through your browser settings. Disabling cookies may affect certain features of our site.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-300">We do not sell, rent, or trade your personal information. We may share your information with third parties only in the following cases:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Service Providers: To process payments, host our site, or analyze website traffic.</li>
              <li>Legal Compliance: When required to comply with laws, regulations, or legal requests.</li>
              <li>Protection: To enforce our terms of service or protect against fraud or security threats.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-300">We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-300">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Access and Correction: Request access to your data and correct inaccuracies.</li>
              <li>Deletion: Request deletion of your personal information.</li>
              <li>Data Portability: Request a copy of your data in a commonly used format.</li>
              <li>Opt-Out: Opt-out of marketing communications or certain data uses.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-300">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="text-gray-300 mt-4">
              Email: support@whyfaithe.com<br />
              Phone: 631-450-2007
            </p>

            <p className="text-gray-400 mt-8 text-sm">Last Updated: 01/12/2025</p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Use</Link>
            <Link href="/#contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </div>
          <div className="mt-8">
            <p>&copy; 2024 E-Bots by WhyFaithe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


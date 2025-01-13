import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { TexturedBackground } from '@/components/ui/textured-background'
import Link from 'next/link'
import { MobileMenu } from '@/components/mobile-menu'

export default function TermsOfUse() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <TexturedBackground />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
              Back to Home
            </Link>
            <Button 
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20 lightbox-250055040868959"
            >
              Contact Us
            </Button>
          </div>
          <MobileMenu />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Welcome to eBots (accessible at https://ebots.whyfaithe.com/). By using our website and services, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, along with our Privacy Policy. These terms apply to all visitors, users, and others who access or use our site.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Our Services</h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Eligibility</h3>
            <p className="text-gray-300">
              You must be at least 18 years old to use our services. By using eBots, you confirm that you meet this age requirement.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Prohibited Activities</h3>
            <p className="text-gray-300">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Use the site for any unlawful purpose.</li>
              <li>Interfere with or disrupt the site's operations.</li>
              <li>Reverse-engineer or attempt to extract the source code of our website.</li>
              <li>Use automated means to access or scrape the website without our permission.</li>
              <li>Post or transmit malicious code, viruses, or harmful software.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Personalized Services</h2>
            <p className="text-gray-300">
              All services offered by eBots are personalized and conducted on the backend. No transactions or account creations are facilitated directly through the website.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300">
              All content on eBots, including text, graphics, logos, and software, is the property of eBots or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use our content without prior written permission.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of third-party websites. You access these links at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>eBots and its affiliates are not liable for any indirect, incidental, or consequential damages arising from your use of the site.</li>
              <li>Our total liability for any claims relating to the use of our services will not exceed the amount you paid for the service.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-300">If you have any questions about these Terms of Use, please contact us at:</p>
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


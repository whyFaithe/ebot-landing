"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { TexturedBackground } from "@/components/ui/textured-background"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactModal } from "@/components/contact-modal"

export default function FullDisclosure() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <TexturedBackground />

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/squeeze" className="text-gray-300 hover:text-green-400 transition-colors">
              Back to Offer
            </Link>
            <Button
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Us
            </Button>
          </div>
          <MobileMenu onContactClick={() => setIsContactModalOpen(true)} />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Full Disclosure</h1>

          <div className="prose prose-invert max-w-none">
            <p>Last updated: [Current Date]</p>

            <h2>1. Introduction</h2>
            <p>
              E-Bots by WhyFaithe ("we," "our," or "us") is committed to transparency in all our business practices.
              This Full Disclosure statement is designed to provide you with clear and comprehensive information about
              our services, business model, and potential risks associated with using our AI chatbot solutions.
            </p>

            <h2>2. Nature of Our Business</h2>
            <p>
              E-Bots by WhyFaithe is a sales and marketing automation company. We provide AI-powered chatbot solutions
              designed to help businesses capture and convert leads. Our services are intended to enhance and streamline
              customer interactions but are not a substitute for human judgment or expertise.
            </p>

            <h2>3. No Guarantee of Success</h2>
            <p>
              While we believe our AI tools can significantly improve a business's ability to capture and convert leads,
              we do not guarantee success. The effectiveness of our tools can vary based on numerous factors, including
              but not limited to your specific business model, market conditions, and how you implement and use our
              services.
            </p>

            <h2>4. Not a "Get Rich Quick" Scheme</h2>
            <p>
              We do not sell a business opportunity, "get rich quick" program, or money-making system. Our services are
              tools designed to enhance your existing business operations, not to create a new business or generate
              income on their own.
            </p>

            <h2>5. No Earnings Claims</h2>
            <p>
              We do not make any earnings claims or guarantee that our AI chatbots will generate any specific amount of
              money for your business. Any financial outcomes resulting from the use of our services can vary widely and
              depend on numerous factors beyond our control.
            </p>

            <h2>6. Results May Vary</h2>
            <p>
              The testimonials and case studies on our website represent individual experiences. These results are not
              typical and should not be expected. Your results may differ significantly based on your individual
              circumstances, effort, and market conditions.
            </p>

            <h2>7. Continuous Learning and Adaptation</h2>
            <p>
              Our AI chatbots are designed to learn and improve over time. However, they require ongoing monitoring,
              adjustment, and human oversight to perform optimally. We strongly recommend that you regularly review and
              refine your chatbot's responses and performance.
            </p>

            <h2>8. Data Privacy and Security</h2>
            <p>
              While we take extensive measures to protect your data and that of your customers, no system is entirely
              secure. By using our services, you acknowledge and accept the inherent risks associated with storing and
              processing data online.
            </p>

            <h2>9. Third-Party Integrations</h2>
            <p>
              Our services may integrate with third-party tools and platforms. We are not responsible for the
              performance, policies, or practices of these third-party services.
            </p>

            <h2>10. Intellectual Property</h2>
            <p>
              All material provided by E-Bots by WhyFaithe, including our AI models, software, and content, is protected
              by copyright and other intellectual property laws. Any unauthorized use, duplication, or distribution is
              strictly prohibited.
            </p>

            <h2>11. Changes to Services</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior
              notice.
            </p>

            <h2>12. Contact Information</h2>
            <p>If you have any questions about this Full Disclosure statement, please contact us at:</p>
            <p>
              E-Bots by WhyFaithe
              <br />
              447 Broadway 2nd Floor, #531
              <br />
              New York, NY 10013
              <br />
              United States
              <br />
              Email: [contact@ebots.com]
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8">
            <Link href="/squeeze/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/squeeze/terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/squeeze/dmca" className="hover:text-green-400 transition-colors">
              DMCA
            </Link>
            <Link href="/squeeze/disclosure" className="hover:text-green-400 transition-colors">
              Full Disclosure
            </Link>
            <Link href="/squeeze/refund" className="hover:text-green-400 transition-colors">
              *Refund Guarantee
            </Link>
          </div>
          <div className="mt-8">
            <p>&copy; 2024 E-Bots by WhyFaithe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}


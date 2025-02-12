"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { TexturedBackground } from "@/components/ui/textured-background"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactModal } from "@/components/contact-modal"

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p>Last updated: [Current Date]</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to E-Bots by WhyFaithe ("we," "our," or "us"). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our AI chatbot services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in
              obtaining information about us or our products and services, when you participate in activities on the
              Website, or otherwise when you contact us. The personal information that we collect depends on the context
              of your interactions with us and the Website, the choices you make, and the products and features you use.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below.
              We process your personal information for these purposes in reliance on our legitimate business interests,
              in order to enter into or perform a contract with you, with your consent, and/or for compliance with our
              legal obligations.
            </p>

            <h2>4. Will Your Information Be Shared With Anyone?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect
              your rights, or to fulfill business obligations.
            </p>

            <h2>5. Do We Use Cookies And Other Tracking Technologies?</h2>
            <p>We may use cookies and similar tracking technologies to access or store information.</p>

            <h2>6. How Long Do We Keep Your Information?</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in
              this privacy policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2>7. How Do We Keep Your Information Safe?</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, please also remember that we cannot guarantee
              that the internet itself is 100% secure.
            </p>

            <h2>8. Do We Collect Information From Minors?</h2>
            <p>We do not knowingly collect data from or market to children under 18 years of age.</p>

            <h2>9. Your Privacy Rights</h2>
            <p>
              In some regions, such as the European Economic Area, you have rights that allow you greater access to and
              control over your personal information.
            </p>

            <h2>10. Controls for Do-Not-Track Features</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT")
              feature or setting you can activate to signal your privacy preference not to have data about your online
              browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing
              and implementing DNT signals has been finalized.
            </p>

            <h2>11. Do We Make Updates To This Policy?</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated
              "Revised" date and the updated version will be effective as soon as it is accessible.
            </p>

            <h2>12. How Can You Contact Us About This Policy?</h2>
            <p>
              If you have questions or comments about this policy, you may email us at [contact@ebots.com] or by post
              to:
            </p>
            <p>
              E-Bots by WhyFaithe
              <br />
              447 Broadway 2nd Floor, #531
              <br />
              New York, NY 10013
              <br />
              United States
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


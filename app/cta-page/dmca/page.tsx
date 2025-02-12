"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { TexturedBackground } from "@/components/ui/textured-background"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactModal } from "@/components/contact-modal"

export default function DMCAPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-8">DMCA Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p>Last updated: [Current Date]</p>

            <h2>1. Introduction</h2>
            <p>
              E-Bots by WhyFaithe respects the intellectual property rights of others and expects its users to do the
              same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on
              the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf, E-Bots by WhyFaithe
              will respond expeditiously to claims of copyright infringement committed using the E-Bots by WhyFaithe
              service and/or the E-Bots by WhyFaithe website (the "Site") if such claims are reported to E-Bots by
              WhyFaithe's Designated Copyright Agent identified in the sample notice below.
            </p>

            <h2>2. DMCA Notice of Alleged Infringement ("Notice")</h2>
            <p>
              If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive
              right under copyright, please report alleged copyright infringements taking place on or through the Site
              by completing the following DMCA Notice of Alleged Infringement and delivering it to E-Bots by WhyFaithe's
              Designated Copyright Agent.
            </p>

            <h2>3. Designated Copyright Agent</h2>
            <p>E-Bots by WhyFaithe's Designated Copyright Agent to receive DMCA Notices is:</p>
            <p>
              [Full Name]
              <br />
              E-Bots by WhyFaithe
              <br />
              447 Broadway 2nd Floor, #531
              <br />
              New York, NY 10013
              <br />
              Email: [dmca@ebots.com]
            </p>

            <h2>4. Upon Receipt of a Compliant DMCA Notice</h2>
            <p>Upon receipt of a compliant DMCA Notice, E-Bots by WhyFaithe will take the following actions:</p>
            <ul>
              <li>Remove or disable access to the content identified in the Notice;</li>
              <li>
                Notify the content provider, member or user that it has removed or disabled access to the content;
              </li>
              <li>Terminate repeat infringers.</li>
            </ul>

            <h2>5. Filing a DMCA Counter-Claim</h2>
            <p>
              If you believe that your content that was removed (or to which access was disabled) is not infringing, or
              that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the
              law, to post and use the material in your content, you may send a counter-notice containing the following
              information to the Designated Copyright Agent:
            </p>
            <ul>
              <li>Your physical or electronic signature;</li>
              <li>
                Identification of the content that has been removed or to which access has been disabled and the
                location at which the content appeared before it was removed or disabled;
              </li>
              <li>
                A statement that you have a good faith belief that the content was removed or disabled as a result of
                mistake or a misidentification of the content; and
              </li>
              <li>
                Your name, address, telephone number, and e-mail address, a statement that you consent to the
                jurisdiction of the federal court in [Your State/Country], and a statement that you will accept service
                of process from the person who provided notification of the alleged infringement.
              </li>
            </ul>

            <h2>6. Repeat Infringer Policy</h2>
            <p>
              In accordance with the DMCA and other applicable law, E-Bots by WhyFaithe has adopted a policy of
              terminating, in appropriate circumstances and at E-Bots by WhyFaithe's sole discretion, users who are
              deemed to be repeat infringers. E-Bots by WhyFaithe may also at its sole discretion limit access to the
              Site and/or terminate the memberships of any users who infringe any intellectual property rights of
              others, whether or not there is any repeat infringement.
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


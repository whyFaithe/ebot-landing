"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { TexturedBackground } from "@/components/ui/textured-background"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactModal } from "@/components/contact-modal"

export default function TermsOfService() {

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <TexturedBackground />

     

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p>Last updated: [Current Date]</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from
              using or accessing this site or services.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or software) on E-Bots by
              WhyFaithe's website for personal, non-commercial transitory viewing only.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on E-Bots by WhyFaithe's website are provided on an 'as is' basis. E-Bots by WhyFaithe makes
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall E-Bots by WhyFaithe or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on E-Bots by WhyFaithe's website, even if E-Bots by WhyFaithe or a E-Bots
              by WhyFaithe authorized representative has been notified orally or in writing of the possibility of such
              damage.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on E-Bots by WhyFaithe's website could include technical, typographical, or
              photographic errors. E-Bots by WhyFaithe does not warrant that any of the materials on its website are
              accurate, complete or current. E-Bots by WhyFaithe may make changes to the materials contained on its
              website at any time without notice.
            </p>

            <h2>6. Links</h2>
            <p>
              E-Bots by WhyFaithe has not reviewed all of the sites linked to its website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by E-Bots by
              WhyFaithe of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              E-Bots by WhyFaithe may revise these terms of service for its website at any time without notice. By using
              this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of [Your
              State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or
              location.
            </p>

            <h2>9. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              E-Bots by WhyFaithe
              <br />
              447 Broadway 2nd Floor, #531
              <br />
              New York, NY 10013
              <br />
              United States
              <br />
              Email: [contact@whyfaithe.com]
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

    </div>
  )
}


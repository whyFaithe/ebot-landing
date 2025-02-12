"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { TexturedBackground } from "@/components/ui/textured-background"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function RefundGuarantee() {

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <TexturedBackground />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Refund Guarantee</h1>

          <div className="prose prose-invert max-w-none">
            <p>Last updated: [Current Date]</p>

            <h2>1. Our Commitment</h2>
            <p>
              At E-Bots by WhyFaithe, we stand behind the quality and effectiveness of our AI chatbot solutions. We are
              committed to your satisfaction and success. As part of this commitment, we offer a performance-based
              refund guarantee.
            </p>

            <h2>2. Performance Guarantee</h2>
            <p>
              We guarantee that our AI chatbot will book at least 40 sales calls within the first 30 days of
              implementation. If this performance benchmark is not met, you may be eligible for a refund.
            </p>

            <h2>3. Eligibility Criteria</h2>
            <p>To be eligible for our refund guarantee, you must meet the following criteria:</p>
            <ul>
              <li>You have fully implemented our AI chatbot solution as per our guidelines.</li>
              <li>You have not made any unauthorized modifications to the chatbot's core functionality.</li>
              <li>You have maintained consistent business operations during the 30-day period.</li>
              <li>You have provided accurate and timely information for the chatbot's configuration.</li>
              <li>You have not violated any terms of our service agreement.</li>
            </ul>

            <h2>4. Refund Process</h2>
            <p>If you believe you are eligible for a refund under our guarantee:</p>
            <ol>
              <li>Contact our customer support team within 5 business days after the 30-day period ends.</li>
              <li>Provide documentation showing that the performance benchmark was not met.</li>
              <li>Our team will review your claim within 10 business days.</li>
              <li>If approved, we will process your refund within 14 business days.</li>
            </ol>

            <h2>5. Limitations</h2>
            <p>Please note the following limitations to our refund guarantee:</p>
            <ul>
              <li>The refund is limited to the amount paid for our AI chatbot service during the 30-day period.</li>
              <li>The guarantee does not cover any indirect or consequential losses.</li>
              <li>We reserve the right to deny refunds in cases of suspected fraud or abuse of the guarantee.</li>
              <li>
                The guarantee is only applicable to the initial 30-day period and does not extend to subsequent renewals
                or service periods.
              </li>
            </ul>

            <h2>6. Continuous Improvement</h2>
            <p>
              If our AI chatbot does not meet the performance benchmark, we are committed to working with you to improve
              its performance. This may include additional training, configuration adjustments, or other optimizations
              at no extra cost to you.
            </p>

            <h2>7. Changes to This Guarantee</h2>
            <p>
              We reserve the right to modify or terminate this refund guarantee at any time. Any changes will be
              communicated through our website and will not affect guarantees already in effect for existing customers.
            </p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about our refund guarantee, please contact our customer support team at:</p>
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


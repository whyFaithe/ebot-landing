"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { TexturedBackground } from "@/components/ui/textured-background"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { Card } from "@/components/ui/card"
import { Clock, Calendar, BarChart3, Rocket } from "lucide-react"

export default function SqueezePage() {

  return (
    <div className="relative min-h-screen bg-gray-900">
      <TexturedBackground />

    
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-red-500 bg-red-500/10 px-4 py-2 mb-6">
              <span className="text-red-500 text-lg font-semibold">🛑 Stop Losing Leads – Let AI Sell for You</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Turn Missed Opportunities Into Paying Customers—On Autopilot
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tired of missing leads because you can't answer the phone? Losing sales while you sleep? Our AI chatbots
              handle it all—trained specifically for your business.
            </p>
          </div>

          {/* Jotform Embed */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe
              id="JotFormIFrame"
              title="Survey Form"
              src="https://whyfaithe.jotform.com/250055040868959"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "400px",
                border: "none",
              }}
              scrolling="no"
            />
          </div>

          <div className="my-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-900 px-4 text-sm text-gray-400">Why Choose E-Bots?</span>
              </div>
            </div>
          </div>


          

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gray-800/50 border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Rocket className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Capture & Qualify Leads</h3>
                  <p className="text-gray-300">
                    Never lose another lead to competitors. Our AI engages instantly and qualifies prospects.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-gray-800/50 border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Instant Response</h3>
                  <p className="text-gray-300">
                    No more missed calls or slow replies. Your AI assistant is always ready to engage.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-gray-800/50 border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Calendar className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automated Booking</h3>
                  <p className="text-gray-300">
                    Book appointments and process sales automatically while you focus on closing deals.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-gray-800/50 border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Seamless Integration</h3>
                  <p className="text-gray-300">
                    Send leads directly to Salesforce, HubSpot, email, or your preferred CRM.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Perfect For Your Business</h2>
              <p className="text-gray-300">
                Whether you're in real estate, run a car dealership, manage an e-commerce store, or provide local
                services—our AI chatbots are built to convert visitors into customers.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
              <div className="flex-1">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Lead Capture Rate</div>
              </div>
              <div className="flex-1">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
              <div className="flex-1">
                <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-300">Missed Opportunities</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>
              * Performance guarantee subject to terms and conditions. Results may vary based on industry and
              implementation.
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
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
          <p className="mb-4">&copy; 2024 E-Bots by WhyFaithe. All rights reserved.</p>
          <p className="text-sm mb-4">
            This website is operated and maintained by WhyFaithe. Use of the website is governed by its Terms Of Service
            and Privacy Policy.
          </p>
          <p className="text-xs mb-4">
            WhyFaithe is a sales and marketing automation company. We do not sell a business opportunity, "get rich
            quick" program or money-making system. We believe, with our AI-powered tools, businesses can be better
            prepared to capture and convert leads, but we do not guarantee success. We do not make earnings claims,
            efforts claims, or claims that our AI chatbots will make you any money. All material is intellectual
            property and protected by copyright. Any duplication, reproduction, or distribution is strictly prohibited.
            Please see our Full Disclosure for important details.
          </p>
          <p className="text-xs mb-4">
            Statements and depictions are the opinions, findings, or experiences of individuals who generally have
            purchased our services. Results vary, are not typical, and rely on individual effort, time, and skill, as
            well as unknown conditions and other factors. We do not measure earnings or financial performance. Instead,
            we track completed transactions and satisfaction of services by voluntary surveys. You should not equate
            completed sales transactions with financially successful transactions. Many customers do not continue with
            the program, do not apply what they learn, or do attempt to apply what they learn but nonetheless have
            difficulty in making sales successful for them.
          </p>
          <p className="text-xs mb-4">
            The Company may link to content or refer to content and/or services created by or provided by third parties
            that are not affiliated with the Company. The Company is not responsible for such content and does not
            endorse or approve it. The Company may provide services by or refer you to third-party businesses. Some of
            these businesses have common interest and ownership with the Company.
          </p>
          <p className="text-xs mb-4">447 Broadway 2nd Floor, #531 New York, NY 10013</p>
          <p className="text-xs mb-4">
            We use cookies to help improve, promote and protect our services. By continuing to use this site, you agree
            to our privacy policy and terms of use.
          </p>
          <p className="text-xs mb-4">
            This site is not a part of Facebook website or Facebook, Inc. This site is NOT endorsed by Facebook in any
            way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}


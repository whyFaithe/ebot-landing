
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from '@/components/logo'
import { TexturedBackground } from '@/components/ui/textured-background'

import Link from 'next/link'
import Image from 'next/image'
import { MobileMenu } from '@/components/mobile-menu'


export default function DemosPage() {

  return (
    <div className="relative min-h-screen bg-gray-900">
      <TexturedBackground />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
              Back to Home
            </Link>
            
          </div>
          <MobileMenu />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Try Our Demo Bots</h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Experience how E-bots can transform different types of businesses. Click on any demo to try both embedded and floating chat interfaces.
          </p>
      
        </div>
      </main>

      {/*{selectedDemo && (
        <DemoModal
          demo={selectedDemo}
          isOpen={true}
          onClose={() => setSelectedDemo(null)}
        />
      )}*/}

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
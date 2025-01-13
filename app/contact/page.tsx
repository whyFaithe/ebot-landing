import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { TexturedBackground } from '@/components/ui/textured-background';
import { ContactUsBtn } from '@/components/contact-us-btn'
import { JotFormEmbed } from '@/components/jotform-embed'
import Link from 'next/link';
import Script from 'next/script';

export default function ContactUs() {

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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">

        {/* JotForm Embed Handler Script */}
        <JotFormEmbed/>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Contact</Link>
          </div>
          <div className="mt-8">
            <p>&copy; 2024 E-Bots by WhyFaithe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { HeroSection } from '@/components/hero-section';
import JotFormEmbed from '@/components/JotFormEmbed'; // Import the new component

export default function Home() {
  const [isScriptLoaded, setScriptLoaded] = useState(false);

  const handleContactClick = () => {
    // Dynamically load the JotForm script when the button is clicked
    if (!isScriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://whyfaithe.jotform.com/static/feedback2.js';
      script.type = 'text/javascript';
      script.onload = () => {
        setScriptLoaded(true);
        initJotForm();
      };
      document.body.appendChild(script);
    } else {
      initJotForm();
    }
  };

  const initJotForm = () => {
    if (typeof window !== 'undefined' && window.JotformFeedback) {
      new window.JotformFeedback({
        formId: '250055040868959',
        base: 'https://whyfaithe.jotform.com/',
        windowTitle: 'Contact Us',
        backgroundColor: '#FFA500',
        fontColor: '#FFFFFF',
        type: 'false',
        height: 500,
        width: 700,
        openOnLoad: false,
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <TexturedBackground />

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="space-x-8">
            <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-green-400 transition-colors">
              Use Cases
            </a>
            <Button
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative">
        <HeroSection />

        {/* Embed the JotForm */}
        <JotFormEmbed />
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8">
            <a href="/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-green-400 transition-colors">
              Terms of Use
            </a>
            <a href="/contact" className="hover:text-green-400 transition-colors">
              Contact Us
            </a>
          </div>
          <div className="mt-8">
            <p>&copy; 2024 E-Bots by WhyFaithe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




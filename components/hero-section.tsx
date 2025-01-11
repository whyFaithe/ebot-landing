'use client'

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById('hero-container')
      if (!container) return

      const rect = container.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    const container = document.getElementById('hero-container')
    container?.addEventListener('mousemove', handleMouseMove)

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const profileArray = [
    '/profile_pic1.png',
    '/profile_pic2.png',
    '/profile_pic3.png',
    '/profile_pic4.png'
  ]

  return (
    <section
      className="relative overflow-hidden"
      id="hero-container"
    >
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101827b] to-[#101827]" />
      {/* Mouse Reveal Effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(67, 23, 97, 0.02) 0%, 
            rgba(67, 23, 97, 0.08) 15%,      
            rgba(16, 24, 39, 0.9) 65%, 
            rgba(16, 24, 39, 1) 100%), 
            url('/background_lines2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.3s ease-out',
        }}
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-[rgba (30, 197, 92, .7)]  pointer-events-none" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-xl p-1 pr-4 mb-8">
              <span className="inline-flex items-center justify-center rounded-full bg-green-500/10 p-1 text-green-400 text-xs font-medium leading-5 mr-2">
                New
              </span>
              <span className="text-gray-300 text-sm">Fully Managed AI Bots</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Fully Managed AI-Powered Bots for{' '}
              <span className="text-green-400">Small Businesses</span>
            </h1>
            <p className="text-xl text-gray-300/90 mb-8 leading-relaxed">
              E-Bots provides fully managed, AI-powered bots tailored to your business needs. Our team designs, implements, and monitors your bots, ensuring seamless integration with your existing platforms and continuous optimization for maximum efficiency.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-800 text-gray-600 hover:bg-gray-500 hover:text-gray-100 "
              >
                View Use Cases
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {profileArray.map((pic,i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 "
                    src={pic}
                    alt=""
                  />
                ))}
              </div>
              <div className="text-sm text-gray-400">
                Trusted by industry leaders
              </div>
            </div>
          </div>
          <div className="relative hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-8">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e-bot_head%202.PNG-L0fuDlm3JtQHS08e0hRUgtz0rLpMGu.png"
                alt="Ebot Illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



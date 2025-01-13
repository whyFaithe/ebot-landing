'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Logo } from './logo'
import { JotformModal } from '@/components/jotform-modal'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon"
        className="lg:hidden text-gray-300 hover:text-green-400"
        onClick={toggleMenu}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 lg:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <Logo />
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-green-400"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                href="#features" 
                className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              <Link 
                href="#use-cases" 
                className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                onClick={toggleMenu}
              >
                Use Cases
              </Link>
              <JotformModal/>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}


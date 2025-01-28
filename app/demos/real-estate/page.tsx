"use client"

import { useEffect } from "react"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { TexturedBackground } from "@/components/ui/textured-background"

export default function ShowcasePage() {
  useEffect(() => {
  try {
    // Remove existing elements
    const existingWidget = document.querySelector(".chat-widget-container")
    if (existingWidget) existingWidget.remove()

    const existingScripts = document.querySelectorAll("script[data-bot-id]")
    existingScripts.forEach((script) => script.remove())

    // Create and load new script
    const script = document.createElement("script")
    script.src = "https://app.aminos.ai/js/chat_plugin.js"
    script.setAttribute("data-bot-id", "41324")
    script.onerror = (error) => console.error('Script loading failed:', error)
    script.onload = () => console.log('Script loaded successfully')
    document.body.appendChild(script)

    return () => {
      script.remove()
      const widget = document.querySelector(".chat-widget-container")
      if (widget) widget.remove()
    }
  } catch (error) {
    console.error('Error in useEffect:', error)
  }
}, [])

  return (
    <div className="relative min-h-screen bg-gray-900">
      <TexturedBackground />

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Chatbot</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Add an interactive chatbot popover anchored to one side of your website.
          </p>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 absolute bottom-0 left-0 right-0">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2024 E-Bots by WhyFaithe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
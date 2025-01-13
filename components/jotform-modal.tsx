'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import JotformEmbed from 'react-jotform-embed'

export function JotformModal() {
  const [isOpen, setIsOpen] = useState(false)
  const jotformRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Initialize Jotform when modal is opened
      const iframe = document.querySelector('iframe[id="JotFormIFrame-250055040868959"]')
      if (iframe) {
        iframe.style.height = '100%'
        iframe.style.width = '100%'
      }
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
        >
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] h-[80vh] p-0">
        <div ref={jotformRef} className="w-full h-full">
          <JotformEmbed src="https://whyfaithe.jotform.com/250055040868959" />
        </div>
      </DialogContent>
    </Dialog>
  )
}


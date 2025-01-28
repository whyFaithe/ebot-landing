'use client'
import { useEffect, useRef, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { DemoType } from '@/lib/demo-types'

interface DemoModalProps {
  demo: DemoType
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ demo, isOpen, onClose }: DemoModalProps) {
  const [mode, setMode] = useState<'embed' | 'floating'>('embed')
  const modalRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const loadScript = () => {
    // Remove any existing chat elements
    const existingChat = document.getElementById('chat_form')
    if (existingChat) existingChat.remove()

    const existingWidget = document.querySelector('.chat-widget-container')
    if (existingWidget) existingWidget.remove()

    // Remove any existing scripts
    const existingScripts = document.querySelectorAll('script[data-bot-id]')
    existingScripts.forEach(script => script.remove())

    // Create new script
    const script = document.createElement('script')
    script.setAttribute('data-bot-id', demo.chatId)
    
    if (mode === 'embed') {
      script.src = "https://app.aminos.ai/js/chat_form_plugin.js"
      // Create chat container for embed mode
      if (chatContainerRef.current) {
        const chatDiv = document.createElement('div')
        chatDiv.id = 'chat_form'
        chatContainerRef.current.innerHTML = ''
        chatContainerRef.current.appendChild(chatDiv)
      }
    } else {
      script.src = "https://app.aminos.ai/js/chat_plugin.js"
      if (chatContainerRef.current) {
        chatContainerRef.current.innerHTML = ''
      }
    }

    // Add script to document head
    document.head.appendChild(script)

    return () => {
      script.remove()
      if (chatContainerRef.current) {
        chatContainerRef.current.innerHTML = ''
      }
      const widget = document.querySelector('.chat-widget-container')
      if (widget) widget.remove()
    }
  }

  useEffect(() => {
    if (!isOpen) return
    
    // Small delay to ensure modal is rendered
    const timer = setTimeout(() => {
      const cleanup = loadScript()
      return () => {
        cleanup()
        clearTimeout(timer)
      }
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [isOpen, mode, demo.chatId])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{demo.title}</DialogTitle>
          <DialogDescription className="text-gray-400 mt-2">
            Choose between embedded or floating chat interface to experience the demo.
          </DialogDescription>
          <div className="flex gap-4 mt-4">
            <Button
              variant={mode === 'embed' ? 'default' : 'outline'}
              onClick={() => setMode('embed')}
              className="flex-1"
            >
              Embedded Chat
            </Button>
            <Button
              variant={mode === 'floating' ? 'default' : 'outline'}
              onClick={() => setMode('floating')}
              className="flex-1"
            >
              Floating Chat
            </Button>
          </div>
        </DialogHeader>
        <div 
          ref={chatContainerRef}
          className="flex-1 mt-4 overflow-y-auto min-h-[400px]"
        />
      </DialogContent>
    </Dialog>
  )
}


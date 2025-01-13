import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ContactModal } from '@/components/contact-modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-bots by WhyFaithe',
  description: 'Smart Bots Built for Your Business',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebot_favicon-Xl2id1stzpfQj2KZLscxbN6TeKWq9x.png',
        href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebot_favicon-Xl2id1stzpfQj2KZLscxbN6TeKWq9x.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ContactModal />
      </body>
    </html>
  )
}

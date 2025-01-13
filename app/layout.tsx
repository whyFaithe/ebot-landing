import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Import Next.js Script component
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ebots by WhyFaithe',
  description: 'Smart Bots Built for Your Business',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebot_favicon-Xl2id1stzpfQj2KZLscxbN6TeKWq9x.png',
        href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebot_favicon-Xl2id1stzpfQj2KZLscxbN6TeKWq9x.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


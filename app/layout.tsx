import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ContactModal } from '@/components/contact-modal';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://whyfaithe.jotform.com/static/feedback2.js"
          type="text/javascript"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var JFL_250055040868959 = new JotformFeedback({
                formId: '250055040868959',
                base: 'https://whyfaithe.jotform.com/',
                windowTitle: 'Contact Us',
                backgroundColor: '#1fc55c',
                fontColor: '#FFFFFF',
                type: 'false',
                height: 500,
                width: 700,
                openOnLoad: false,
              });
            `,
          }}
        ></script>
        <script
          src="https://whyfaithe.jotform.com/s/umd/latest/for-form-embed-handler.js"
        ></script>
      </Head>
      <body className={inter.className}>
        {children}

        {/* Add the ContactModal at the end of the body */}
      </body>
    </html>
  );
}

'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function ContactModal() {
  useEffect(() => {
    // @ts-ignore
    const JFL_250055040868959 = new JotformFeedback({
      formId: '250055040868959',
      base: 'https://whyfaithe.jotform.com/',
      windowTitle: 'Contact Us',
      backgroundColor: '#1fc55c',
      fontColor: '#FFFFFF',
      type: 'false',
      height: 500,
      width: 700,
      openOnLoad: false
    });

    return () => {
      // Clean up if necessary
    }
  }, [])

  return (
    <>
      <Script src="https://whyfaithe.jotform.com/static/feedback2.js" strategy="beforeInteractive" />
      <Script src="https://whyfaithe.jotform.com/s/umd/latest/for-form-embed-handler.js" strategy="beforeInteractive" />
      <Script id="jotform-embed-handler">
        {`window.jotformEmbedHandler("iframe[id='250055040868959']", "https://whyfaithe.jotform.com/")`}
      </Script>
    </>
  )
}


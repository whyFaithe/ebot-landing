'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function ContactModal() {
  useEffect(() => {
    // Check if the JotformFeedback script has been loaded
    if (typeof window !== 'undefined' && window.JotformFeedback) {
      window.jotformFeedbackInstance = new window.JotformFeedback({
        formId: '250055040868959',
        base: 'https://whyfaithe.jotform.com/',
        windowTitle: 'Contact Us',
        backgroundColor: '#1fc55c',
        fontColor: '#FFFFFF',
        type: 'false',
        height: 500,
        width: 700,
        openOnLoad: false, // Ensure it does not open automatically
      });
    } else {
      console.error('JotformFeedback is not available');
    }

    return () => {
      // Cleanup the global instance if necessary
      delete window.jotformFeedbackInstance;
    };
  }, []);

  return (
    <>
      <Script src="https://whyfaithe.jotform.com/static/feedback2.js" strategy="beforeInteractive" />
      <Script src="https://whyfaithe.jotform.com/s/umd/latest/for-form-embed-handler.js" strategy="beforeInteractive" />
    </>
  );
}

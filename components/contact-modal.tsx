'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function ContactModal() {
  useEffect(() => {
    // Initialize the JotformFeedback instance globally
    window.jotformFeedbackInstance = new window.JotformFeedback({
      formId: '250055040868959',
      base: 'https://whyfaithe.jotform.com/',
      windowTitle: 'Contact Us',
      backgroundColor: '#1fc55c',
      fontColor: '#FFFFFF',
      type: 'false',
      height: 500,
      width: 700,
      openOnLoad: false, // Ensure it doesn't open on load
    });

    return () => {
      // Cleanup if necessary
      delete window.jotformFeedbackInstance;
    };
  }, []);

  return (
    <>
      {/* Load JotForm Scripts */}
      <Script src="https://whyfaithe.jotform.com/static/feedback2.js" strategy="beforeInteractive" />
      <Script src="https://whyfaithe.jotform.com/s/umd/latest/for-form-embed-handler.js" strategy="beforeInteractive" />
    </>
  );
}

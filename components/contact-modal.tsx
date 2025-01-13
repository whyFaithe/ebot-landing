'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function ContactModal() {
  useEffect(() => {
    const initializeJotformFeedback = () => {
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
        console.log('JotformFeedback instance initialized');
      } else {
        console.error('JotformFeedback is not available');
      }
    };

    // Check if the Jotform script is already loaded
    if (window.JotformFeedback) {
      initializeJotformFeedback();
    } else {
      // Attach initialization to script load event
      const feedbackScript = document.querySelector('[src="https://whyfaithe.jotform.com/static/feedback2.js"]');
      if (feedbackScript) {
        feedbackScript.addEventListener('load', initializeJotformFeedback);
      }
    }
  }, []);

  return (
    <>
      {/* Load JotForm Scripts */}
      <Script src="https://whyfaithe.jotform.com/static/feedback2.js" strategy="beforeInteractive" />
      <Script src="https://whyfaithe.jotform.com/s/umd/latest/for-form-embed-handler.js" strategy="beforeInteractive" />
    </>
  );
}

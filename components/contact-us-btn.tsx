'use client';

import { useRef } from 'react';
import Script from 'next/script';

export function ContactUsBtn() {
  const feedbackInstance = useRef<any>(null);

  const handleOpenModal = () => {
    if (feedbackInstance.current) {
      feedbackInstance.current.open();
    }
  };

  const initializeJotform = () => {
    // Initialize JotformFeedback and store the instance in a ref
    feedbackInstance.current = new window.JotformFeedback({
      formId: '250055040868959',
      base: 'https://whyfaithe.jotform.com/',
      windowTitle: 'Contact Us',
      backgroundColor: '#1fc55c',
      fontColor: '#FFFFFF',
      type: 'false',
      height: 500,
      width: 700,
      openOnLoad: false, // Ensure it does not open on load
    });
  };

  return (
    <>

      {/* Button to Trigger Modal */}
      <button
        className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20 px-4 py-2 rounded"
        onClick={handleOpenModal}
      >
        Contact Us
      </button>
    </>
  );
}
'use client';

import { useRef, useEffect } from 'react';
import Script from 'next/script';

export function ContactUsBtn() {
  const feedbackInstance = useRef<any>(null);

  const handleOpenModal = () => {
    if (feedbackInstance.current) {
      feedbackInstance.current.open();
    }
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
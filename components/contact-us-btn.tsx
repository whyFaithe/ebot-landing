'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

function loadJotFormFeedback() {
  // Check if the feedback script is already loaded

}

export default function ContactUs() {
  const handleClick = () => {
    loadJotFormFeedback(); // Dynamically load and initialize the JotForm feedback
  };

  return (
    <Button
      className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
      onClick={handleClick}
    >
      Contact Us
    </Button>
  );
}

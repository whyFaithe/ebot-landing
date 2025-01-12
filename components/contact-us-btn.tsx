'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

function loadJotFormFeedback() {
  // Check if the feedback script is already loaded
  if (!document.getElementById('jotform-feedback-script')) {
    // Load the feedback2.js script
    const feedbackScript = document.createElement('script');
    feedbackScript.id = 'jotform-feedback-script';
    feedbackScript.src = 'https://whyfaithe.jotform.com/static/feedback2.js';
    feedbackScript.type = 'text/javascript';
    feedbackScript.onload = () => {
      // Initialize the JotForm feedback once the script is loaded
      new window.JotformFeedback({
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
    };
    document.body.appendChild(feedbackScript);
  }

  // Load the embed handler script
  if (!document.getElementById('jotform-embed-handler')) {
    const embedHandlerScript = document.createElement('script');
    embedHandlerScript.id = 'jotform-embed-handler';
    embedHandlerScript.src = 'https://whyfaithe.jotform.com/s/umd/latest/for-form-embed-handler.js';
    embedHandlerScript.onload = () => {
      // Initialize the embed handler for the iframe
      window.jotformEmbedHandler?.("iframe[id='250055040868959']", 'https://whyfaithe.jotform.com/');
    };
    document.body.appendChild(embedHandlerScript);
  }
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

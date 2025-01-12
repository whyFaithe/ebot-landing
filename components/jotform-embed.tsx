'use client';

import { useEffect, useRef } from 'react';

export default function JotFormEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      const handleLoad = () => {
        window.scrollTo(0, 0); // Scroll to top after iframe loads
      };

      iframe.addEventListener('load', handleLoad);

      return () => {
        iframe.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-250055040868959"
        title="Contact Us"
        allowTransparency
        allow="geolocation; microphone; camera; fullscreen"
        src="https://whyfaithe.jotform.com/250055040868959"
        frameBorder="0"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
        scrolling="no"
      ></iframe>
    </div>
  );
}

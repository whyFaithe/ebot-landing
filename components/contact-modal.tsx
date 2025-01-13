import Script from 'next/script';

export function ContactModal() {
  return (
    <>
      {/* Load Feedback and Embed Scripts */}
      <Script src="https://whyfaithe.jotform.com/static/feedback2.js" strategy="lazyOnload" />
      <Script src="https://whyfaithe.jotform.com/s/umd/latest/for-form-embed-handler.js" strategy="lazyOnload" />
      <Script id="jotform-feedback-init" strategy="lazyOnload">
        {`
          var JFL_250055040868959 = new JotformFeedback({
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
        `}
      </Script>
    </>
  );
}


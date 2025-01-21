import { useEffect } from 'react';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config',  'G-8GQXVRVYQS'); // Replace with your Measurement ID
  }, []);

  return (
    <>
      {/* Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-8GQXVRVYQS`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8GQXVRVYQS');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

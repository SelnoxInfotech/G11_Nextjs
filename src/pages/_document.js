import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'; // Import next/script

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* GTM script using next/script */}
          <Script id="gtm-script" strategy="lazyOnload">
            {`
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M3S7Z46');
            `}
          </Script>
          {/* Google AdSense script */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9898508472606807" crossOrigin="anonymous"></script>
          <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

          {/* Schema.org markup */}
          <Script id="schema-org" type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "g11 prediction",
              "image": "https://www.g11fantasy.com/image/images/download/media/Static/G11.png?w=256&q=75",
              "@id": "",
              "url": "https://g11prediction.com/",
              "telephone": "6262003399",
              "priceRange": "1000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "179, 2nd Floor, Happy Chambers",
                "addressLocality": "bhopal",
                "postalCode": "462011",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.232926,
                "longitude": 77.4321616
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/g11sport/",
                "https://twitter.com/G11sport123230",
                "https://www.instagram.com/g11sport/",
                "https://www.youtube.com/@g11-sportfantasyprediction66",
                "https://www.linkedin.com/company/g11-sport-fantasy-prediction/"
              ] 
            }
            `}
          </Script>
          <Script id="organization-schema" type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
            "@type": "Organization",
            "name": "G11 Fantasy Cricket Prediction",
            "alternateName": "G11 Prediction",
            "url": "https://g11prediction.com/",
            "logo": "https://www.g11fantasy.com/image/images/download/media/Static/G11.png?w=256&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
            "telephone": "6262003399",
            "contactType": "customer service",
            "contactOption": "HearingImpairedSupported",
            "areaServed": "IN",
            "availableLanguage": ["en","Hindi"]
  },
            "sameAs": [
            "https://www.facebook.com/g11sport/",
            "https://twitter.com/G11sport123230",
            "https://www.instagram.com/g11sport/",
            "https://www.youtube.com/@g11-sportfantasyprediction66",
            "https://www.linkedin.com/company/g11-sport-fantasy-prediction/",
            "http://g11prediction.com/"
            ]
}
`}
          </Script>

          <Script  id="LocalBusiness"  type="application/ld+json">
            {
              `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "g11 prediction",
              "image": "https://www.g11fantasy.com/image/images/download/media/Static/G11.png?w=256&q=75",
              "@id": "",
              "url": "https://g11prediction.com/",
              "telephone": "6262003399",
              "priceRange": "1000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "179, 2nd Floor, Happy Chambers",
                "addressLocality": "bhopal",
                "postalCode": "462011",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.232926,
                "longitude": 77.4321616
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/g11sport/",
                "https://twitter.com/G11sport123230",
                "https://www.instagram.com/g11sport/",
                "https://www.youtube.com/@g11-sportfantasyprediction66",
                "https://www.linkedin.com/company/g11-sport-fantasy-prediction/"
              ] 
            }
            `
            }
          </Script>
        </Head>

        <body>
          {/* GTM noscript */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3S7Z46" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

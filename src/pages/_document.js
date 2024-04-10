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

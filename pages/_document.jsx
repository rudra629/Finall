import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Typekit */}
        <style>{`@import url("https://use.typekit.net/gec3ufs.css");`}</style>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.bazana.in/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32"  href="https://www.bazana.in/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://www.bazana.in/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16"  href="https://www.bazana.in/favicon/favicon-16x16.png" />
        <link rel="manifest" href="https://www.bazana.in/favicon/site.webmanifest" />
        <link rel="mask-icon" href="https://www.bazana.in/favicon/safari-pinned-tab.svg" color="#f36d24" />
        <meta name="msapplication-TileColor" content="#f36d24" />
        <meta name="msapplication-TileImage" content="https://www.bazana.in/favicon/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Bazana! one of the leading roasted snacks brands in India. We are the best Not fried! No Oil Snacks! brand." />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92518346-5" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-92518346-5');
          `
        }} />

        {/* ShareThis */}
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=5c866ae5d11c6a0011c48845&product=inline-share-buttons"
        />

        {/* Facebook Pixel */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2344163862574539');
            fbq('track', 'PageView');
          `
        }} />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1" width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2344163862574539&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-773081128" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-773081128');
          `
        }} />

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NZSMHNV');
          `
        }} />
      </Head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZSMHNV"
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="GTM"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

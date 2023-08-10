import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html lang="en" dir="ltr" className="scroll-smooth">
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D9ZJE2XHB8" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D9ZJE2XHB8');
        `}
        </Script>
        <link rel="manifest" href="/static/head/manifest.json" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta charSet="UTF-8" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/head/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/head/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/head/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/head/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/head/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/head/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/head/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/head/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/head/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/static/head/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/head/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/head/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/head/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/static/head/favicon.ico" />
        <link rel="icon" type="image/png" href="/static/head/favicon.png" />
        <meta name="msapplication-TileImage" content="/static/head/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Wordigo is a useful add-on that offers the ability to translate text and add it to the dictionary in your browser."
        />
        <meta name="google" content="notranslate"></meta>
        <meta name="keywords" content="Wordigo, translation, text translation, dictionary, browser plug-in, language learning" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

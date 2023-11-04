import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" dir="ltr" className="scroll-smooth">
      <Head>
        <link rel="manifest" href="/static/head/manifest.json" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/head/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/head/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/head/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/head/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/head/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/head/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/head/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/head/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/head/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/head/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/head/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/head/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/head/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/static/head/favicon.ico" />
        <link rel="icon" type="image/png" href="/static/head/favicon.png" />
        <meta
          name="msapplication-TileImage"
          content="/static/head/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Wordigo, an invaluable browser extension, empowers you to effortlessly translate text and seamlessly add it to your personalized dictionary while browsing."
        />
        <meta name="google" content="notranslate"></meta>
        <meta name="referrer" content="no-referrer" />
        <meta
          name="keywords"
          content="Wordigo, browser extension, language dictionary, instant translation, save words, language learning, personalized dictionary, language barriers, Wordigo app, translate while browsing, Wordigo browser extension, Wordigo dictionary, online dictionary, vocabulary building, educational tool, language skills, multilingual, language tool, learning resource, Wordigo translation"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

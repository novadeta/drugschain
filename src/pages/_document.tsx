import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/assets/icons/ic-drugschain.svg" />
        <meta name="title" content="Drugschain | Layanan Keseshatan berbasis Blockchain" key="title" />
        <meta name="description" content="Menciptakan transparansi yang sangat penting dalam rantai pasokan obat-obatan, sekaligus memastikan keamanan data" key="description" />
        <meta property="og:title" content="Drugschain | Layanan Keseshatan berbasis Blockchain"/>
        <meta property="og:description" content="Menciptakan transparansi yang sangat penting dalam rantai pasokan obat-obatan, sekaligus memastikan keamanan data" />
        <meta property="og:image" content="/assets/images/og-image.png" />
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

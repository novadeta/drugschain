import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/assets/icons/ic-drugschain.svg" />
        <meta name="title" content="Drugschain | Layanan Keseshatan berbasis Blockchain" key="description" />
        <meta name="description" content="Menciptakan transparansi yang sangat penting dalam rantai pasokan obat-obatan, sekaligus memastikan keamanan data" key="description" />
      </Head>
      <body className="font-sans relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

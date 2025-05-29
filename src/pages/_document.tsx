// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Fallback Title & Description */}
        <title>Randy Sampson JP — Justice of the Peace Guyana</title>
        <meta
          name="description"
          content="Randy Sampson offers Justice of the Peace and Commissioner of Oaths services across Guyana: witnessing signatures, administering oaths, certifying documents."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.jpsampsongy.com/" />

        {/* Open Graph Defaults */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GY" />
        <meta property="og:site_name" content="Randy Sampson JP" />
        <meta property="og:url" content="https://www.jpsampsongy.com/" />
        <meta
          property="og:description"
          content="Professional JP & Commissioner of Oaths services in Guyana."
        />
        {/* Optional OG image */}
        {/* <meta property="og:image" content="https://www.jpsampsongy.com/og-image.png" /> */}
      </Head>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

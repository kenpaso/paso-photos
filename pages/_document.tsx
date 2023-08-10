import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/pasoicon.ico" />
          <meta
            name="description"
            content="Built by Kenneth Galang"
          />
          <meta property="og:site_name" content="www.kenpaso.com" />
          <meta
            property="og:description"
            content="Built by Kenneth Galang"
          />
          <meta property="og:title" content="kenpaso.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="kenpaso.com" />
          <meta
            name="twitter:description"
            content="Built by Kenneth Galang"
          />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
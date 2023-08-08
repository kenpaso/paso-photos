import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Built by Kenneth Galang"
          />
          <meta property="og:site_name" content="kenpaso.com" />
          <meta
            property="og:description"
            content="Built by Kenneth Galang"
          />
          <meta property="og:title" content="kenpaso.com" />
          
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

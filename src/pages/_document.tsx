import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap"
          rel="stylesheet"
        />
        {
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src={'https://telegram.org/js/telegram-web-app.js'}></script>
        }
        {
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        }
        <script>eruda.init();</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

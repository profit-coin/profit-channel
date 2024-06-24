import { Head, Html, Main, NextScript } from 'next/document'
import { serverConfig } from '@/config/appConfig'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap"
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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.appConfig = ${JSON.stringify(serverConfig, null, 2)}`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

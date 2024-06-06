import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src={'https://telegram.org/js/telegram-web-app.js'}></script>
        }
        {
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        }
        <script>
          eruda.init();
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import type { AppProps } from 'next/app'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />;
    </DefaultLayout>
  )
}

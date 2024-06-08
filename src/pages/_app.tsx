import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />;
    </DefaultLayout>
  );
}

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import { AuthProvider } from '@/auth/authContext'
import '@/styles/globals.scss'
import App from 'next/app'
import {appWithTranslation} from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config.js';

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 1, // 1 minute
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  )
}

CustomApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
  return await App.getInitialProps(context);
};

export default appWithTranslation(CustomApp, nextI18NextConfig);


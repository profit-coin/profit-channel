import isClient from '@/utils/isClient'

export const serverConfig = {
  environment: process.env.NODE_ENV ?? 'Production',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
}

export type AppConfig = typeof serverConfig

const appConfig: AppConfig = isClient ? window.appConfig : serverConfig

export default appConfig

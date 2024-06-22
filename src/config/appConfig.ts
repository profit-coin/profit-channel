import isClient from '@/utils/isClient'

export const serverConfig = {
  environment: process.env.NODE_ENV ?? 'Production',
  apiBaseUrl: process.env.API_HOST ?? '',
}

export type AppConfig = typeof serverConfig

const appConfig: AppConfig = isClient ? window.appConfig : serverConfig

export default appConfig

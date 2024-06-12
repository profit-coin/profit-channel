// eslint-disable-next-line @typescript-eslint/no-var-requires
const HttpBackend = require('i18next-http-backend').default;

const isBrowser = typeof window !== 'undefined';
const isDev = process.env.NODE_ENV === 'development';

/** @type import("next").I18NConfig */
const i18n = {
  defaultLocale: 'en',
  locales: ['en']
};

/** @type import("next-i18next").UserConfig */
const next18nextConfig = {
  i18n,
  load: 'languageOnly',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  saveMissing: process.env.NODE_ENV === 'development',
  saveMissingTo: 'all',
  ns: ['common'],
  // eslint-disable-next-line sonarjs/no-redundant-boolean
  partialBundledLanguages: isBrowser && true,

  debug: isDev,
  backend: {
    backends: isBrowser ? HttpBackend : [],
  },
  serializeConfig: false,
  use: isBrowser ? [HttpBackend] : [],
};

module.exports = next18nextConfig;

import Backend from 'i18next-fs-backend';
import { RemixI18Next } from 'remix-i18next/server';
import { resolve } from 'node:path';
import i18nConfig from '~/lib/i18n-config';

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18nConfig.supportedLngs,
    fallbackLanguage: i18nConfig.fallbackLng,
  },
  // This is the configuration for i18next used when translating messages server-side only
  i18next: {
    ...i18nConfig,
    backend: {
      loadPath: resolve('./var/task/public/locales/{{lng}}/{{ns}}.json'),
    },
  },
  plugins: [Backend],
});

export default i18next;

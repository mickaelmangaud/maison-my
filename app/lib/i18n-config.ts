export default {
  supportedLngs: ['fr', 'en'],
  fallbackLng: 'fr',
  defaultNS: 'common',
  react: {
    bindI18n: 'languageChanged',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['p'],
    useSupens: false,
  },
  debug: true,
};

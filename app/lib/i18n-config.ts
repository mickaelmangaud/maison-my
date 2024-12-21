export default {
  supportedLngs: ['fr', 'en', 'vi', 'de', 'es', 'it'],
  fallbackLng: 'fr',
  defaultNS: 'common',
  ns: ['common'],
  react: {
    bindI18n: 'languageChanged',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['p'],
    useSupens: false,
  },
  debug: true,
};

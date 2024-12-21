// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import common from '../../public/locales/fr/common.json';
import account from '../../public/locales/fr/account.json';
import admin from '../../public/locales/fr/admin.json';
import conditions from '../../public/locales/fr/conditions.json';
import contact from '../../public/locales/fr/contact.json';
import home from '../../public/locales/fr/home.json';
import menu from '../../public/locales/fr/menu.json';
import privacy from '../../public/locales/fr/privacy.json';
import signin from '../../public/locales/fr/signin.json';
import story from '../../public/locales/fr/story.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'common';
    // custom resources type
    resources: {
      common: typeof common;
      account: typeof account;
      admin: typeof admin;
      conditions: typeof conditions;
      contact: typeof contact;
      home: typeof home;
      menu: typeof menu;
      privacy: typeof privacy;
      signin: typeof signin;
      story: typeof story;
    };
    // other
  }
}

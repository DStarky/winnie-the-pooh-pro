import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import ruTranslationJson from '../../../../public/locales/ru/translation.json';
// import enTranslationJson from '../../../../public/locales/en/translation.json';

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,
  react: { useSuspense: false },

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { ru: { translations: {} }, en: { translations: {} } },
});

export default i18n;

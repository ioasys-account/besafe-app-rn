import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { core, screens } from 'config/i18n';

const resources = {
  en: {
    translation: {
      ...core.enUS,
      ...screens.enUS
    }
  },
  pt: {
    translation: {
      ...core.ptBR,
      ...screens.enUS
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

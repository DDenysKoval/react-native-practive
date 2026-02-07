import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {getLocales} from 'react-native-localize';

const {mainEN, mainUKR, mainPL} = require('./src/localization');

const resources = {
  en: {main: mainEN},
  ukr: {main: mainUKR},
  pl: {main: mainPL},
};
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources,
  ns: ['main', 'sub'],
  defaultNS: ['main'],
});
export default i18n;

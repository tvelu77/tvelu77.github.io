import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import French from "./Translations/French.json";
import English from "./Translations/English.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
	en: {
	  translation: English,
	},
	fr: {
	  translation: French,
	}
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
});

export default i18next;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./en";
import { id } from "./id";

const STORAGE_KEY = "portfolio-lang";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        id: { translation: id },
      },
      fallbackLng: "en",
      supportedLngs: ["en", "id"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        lookupLocalStorage: STORAGE_KEY,
        caches: ["localStorage"],
      },
    });
}

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en.json"

const resources = {
  en: {
    translation: en,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export const t = (key: string, options?: any) => i18n.t(key, options)

export default i18n

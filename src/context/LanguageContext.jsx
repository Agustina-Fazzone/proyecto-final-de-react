import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = (lang) => {
    if (lang === "es" || lang === "en") setLanguage(lang);
  };


  const translations = {
    es: {
      settings: "Configuración",
      changeTheme: "Cambiar a",
      light: "claro",
      dark: "oscuro",
      close: "Cerrar",
      language: "Idioma",
    },
    en: {
      settings: "Settings",
      changeTheme: "Switch to",
      light: "light",
      dark: "dark",
      close: "Close",
      language: "Language",
    },
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

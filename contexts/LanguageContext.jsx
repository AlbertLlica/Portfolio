"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

const translations = { en, es };

const LanguageContext = createContext({
  lang: "en",
  t: (key) => key,
  changeLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // read stored preference
    try {
      const stored = localStorage.getItem("lang");
      if (stored && translations[stored]) {
        setLang(stored);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
      try {
        localStorage.setItem("lang", newLang);
      } catch (e) {
        // ignore
      }
      // update document lang attribute
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLang;
      }
    }
  };

  const t = (key) => {
    const parts = key.split(".");
    let val = translations[lang];
    for (const p of parts) {
      if (val == null) return key;
      val = val[p];
    }
    return val != null ? val : key;
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

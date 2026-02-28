"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = ({ className = "" }) => {
  const { lang, changeLanguage } = useLanguage();

  const toggle = () => {
    changeLanguage(lang === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggle}
      className={
        "uppercase text-sm font-medium px-3 py-1 border rounded " +
        (lang === "en"
          ? "border-white text-white"
          : "border-accent text-accent") +
        " " +
        className
      }
      aria-label={lang === "en" ? "Switch language to Spanish" : "Cambiar idioma a Inglés"}
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;

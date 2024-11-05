// src/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <div className={`toggle-slider ${currentLanguage === 'en' ? 'english' : 'ukrainian'}`}>
        {currentLanguage === 'en' ? 'Укр' : 'Eng'}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

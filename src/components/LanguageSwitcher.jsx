import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    i18n.changeLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage); // Call the prop function to close the menu
    }
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <div className={`toggle-slider ${currentLanguage === 'en' ? 'english' : 'ukrainian'}`}>
        {currentLanguage === 'en' ? 'Eng' : 'Укр'}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAsia } from "react-icons/fa";

const LanguageSelector = () => {
  const { i18n } = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className="language-selector">
      <a className="dropdown-toggle" onClick={toggleDropdown}>
        <FaGlobeAsia />{" "}{i18n.language.toUpperCase()}
      </a>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => changeLanguage('ru')}>RU</li>
          <li onClick={() => changeLanguage('en')}>EN</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;

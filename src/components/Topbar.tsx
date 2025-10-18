import React from 'react';
import { useTranslation } from "react-i18next";
import ukIcon from '../assets/uk_icon.png';
import polandIcon from '../assets/poland_icon.png';

const linkClasses = "relative hover:text-white h-10 before:rounded-xl flex items-center px-4 before:absolute before:inset-0 before:border-2 before:border-transparent before:hover:border-slate-400";

const Topbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="sticky top-[4.5vh] h-[5.5rem] px-4 bg-black z-40 rounded-xl bg-opacity-50 w-[100%] sm:w-full md:w-[90%] lg:w-full xl:w-[90%] flex justify-start items-center text-lg mb-4">
      <nav className="flex font-mono text-slate-400 gap-6 items-center w-full justify-between">
        <div className='flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap'>
          <a href="#home" className={linkClasses}>{t("home")}</a>
          <a href="#portfolio" className={linkClasses}>{t("portfolio")}</a>
          <a href="#about" className={linkClasses}>{t("about")}</a>
          <a href="#skills" className={linkClasses}>{t("skills")}</a>
          <a href="#contact" className={linkClasses}>{t("contact")}</a>
        </div>
        <div className='flex items-center gap-6'>
        <img
            src={i18n.language === "en" ? ukIcon : polandIcon}
            alt="Language Icon"
            className="h-8 w-8 cursor-pointer hover:scale-105 duration-300 flex-shrink-0"
            onClick={toggleLanguage}
          />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;

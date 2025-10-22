import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import ukIcon from '../assets/uk_icon.png';
import polandIcon from '../assets/poland_icon.png';
import { motion } from "framer-motion";

const linkClasses = "relative hover:text-white h-10 before:rounded-xl flex items-center px-4 before:absolute before:inset-0 before:border-2 before:border-transparent before:hover:border-slate-200 before:transition-all before:duration-200 before:delay-100";

const Topbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const topbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.querySelector(".app-container") as HTMLElement | null;
    if (!container) return;

    if (isMenuOpen) {
      container.style.overflow = "hidden";
    } else {
      container.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const updateTopbarHeight = () => {
      if (topbarRef.current) {
        setTopbarHeight(topbarRef.current.offsetHeight);
      }
    };

    updateTopbarHeight();
    window.addEventListener('resize', updateTopbarHeight);

    return () => {
      window.removeEventListener('resize', updateTopbarHeight);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <div className="sticky top-[4.5vh] h-[5.5rem] px-4 bg-black z-40 rounded-xl bg-opacity-50 w-[100%] sm:w-full md:w-[100%] lg:w-[100%] xl:w-[92%] flex justify-start items-center text-lg mb-4">
        <nav className="flex font-mono text-slate-400 gap-6 items-center w-full justify-between">
          {/* Desktop Menu */}
          <div className='hidden md:flex text-lg xl:text-xl whitespace-nowrap'>
            <button onClick={() => scrollToSection("home")} className={linkClasses}>
              {t("home")}
            </button>
            <button onClick={() => scrollToSection("portfolio")} className={linkClasses}>
              {t("portfolio")}
            </button>
            <button onClick={() => scrollToSection("about")} className={linkClasses}>
              {t("about")}
            </button>
            <button onClick={() => scrollToSection("skills")} className={linkClasses}>
              {t("skills")}
            </button>
            <button onClick={() => scrollToSection("contact")} className={linkClasses}>
              {t("contact")}
            </button>
          </div>

          {/* Mobile: Logo or Title */}
          <div className='md:hidden text-white font-bold text-xl'></div>

          {/* Right side - Language & Hamburger */}
          <div className='flex items-center gap-4'>
            <motion.img
              src={i18n.language === "en" ? ukIcon : polandIcon}
              alt="Language Icon"
              className="h-8 w-8 cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              onClick={toggleLanguage}
            />
            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-slate-800 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-slate-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-slate-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-slate-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed top-[calc(4.5vh+6rem)] left-0 right-0 z-30 mx-auto w-[100%] sm:w-full md:w-[92%] bg-black bg-opacity-95 rounded-xl backdrop-blur-lg border border-slate-700 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          top: `calc(9rem + ${topbarHeight}px)`,
          width: 'calc(100% - 2rem)',
          margin: '0 1rem'
        }}
      >
        <div className='flex flex-col p-4 gap-2 font-mono text-slate-400'>
          <button 
              onClick={() => {
                scrollToSection("home");
                setIsMenuOpen(false);
              }} 
            className="text-left px-4 py-3 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-slate-400"
          >
            {t("home")}
          </button>
          <button 
            onClick={() => {
              scrollToSection("portfolio");
              setIsMenuOpen(false);
            }}
            className="text-left px-4 py-3 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-slate-400"
          >
            {t("portfolio")}
          </button>
          <button 
            onClick={() => {
              scrollToSection("about");
              setIsMenuOpen(false);
            }}
            className="text-left px-4 py-3 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-slate-400"
          >
            {t("about")}
          </button>
          <button 
            onClick={() => {
              scrollToSection("skills");
              setIsMenuOpen(false);
            }} 
            className="text-left px-4 py-3 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-slate-400"
          >
            {t("skills")}
          </button>
          <button 
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false);
            }} 
            className="text-left px-4 py-3 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-slate-400"
          >
            {t("contact")}
          </button>
        </div>
      </div>

      {/* Overlay - zamyka menu po kliknięciu poza nim */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
  
};

export default Topbar;

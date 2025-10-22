import React from 'react';
import { useTranslation } from "react-i18next";
import downloadIcon from '../assets/download_icon.png';
import worksIcon from '../assets/works_icon.png';
import cvFile from '../assets/CV.pdf';
import DecryptedText from "./DecryptedText";
import profilePhoto from '../assets/kamil_przybyla.jpg';

const ContentHome = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (


    <div id="home" className="min-h-[83vh] scroll-mt-[83vh] grid items-end w-[100%] md:w-[100%] lg:w-[100%] xl:w-[92%]">
      <div className="hidden sm:flex lg:hidden items-center text-white p-6 bg-[#0a1628] justify-around from-slate-800/50 to-slate-900/50 border-2 border-slate-700/50 rounded-xl p-6 hover:border-[#074D96] transition-all duration-300 backdrop-blur-sm">
        <img 
          src={profilePhoto} 
          alt="Profile" 
          className="w-[auto] h-[400px] object-cover rounded-xl shadow-lg mb-4"
        />
        <div className="text-center font-mono bg-[#1a2332] p-6 rounded-xl">
          <p className="text-sm text-[#d3d3d3]">{t("specialization")}</p>
          <p className="text-lg font-semibold">Frontend Developer/Tester</p>
          <p className="text-sm text-[#d3d3d3] mt-3">{t("location")}</p>
          <p className="text-lg font-semibold">Żory, Śląskie</p>
        </div>
      </div>
      <div className='flex-1 p-6 bg-[#0a1628] rounded-xl'>
        <div className='xl:text-7xl lg:text-6xl text-5xl leading-none font-mono bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
          <p>
            <DecryptedText text={t("hello")} speed={60} className="block" />
          </p>
          <p>
            <DecryptedText text={t("name")} speed={60} className="block" />
          </p>
          <p>
            <DecryptedText text="Mid Frontend Developer" speed={80} className="block" />
          </p>
        </div>
        <div className='block sm:flex font-mono gap-6'>
          <button
            onClick={() => scrollToSection("portfolio")}
            className='mt-[34px] flex w-[200px] md:w-[200px] lg:w-[180px] xl:w-[200px] 
                      text-white bg-opacity-50 border border-white bg-gray-800 
                      h-[50px] rounded-full flex cursor-pointer items-center justify-center 
                      transition-all duration-300 hover:bg-gray-600'
          >
            <span className='font-semibold text-lg animate-shake'>{t("my_works")}</span>
            <img src={worksIcon} alt='work icon' className='filter invert h-[30px] ps-6' />
          </button>
          <a href={cvFile} download="CV_Kamil_Przybyla.pdf" className='mt-[12px] sm:mt-[34px] flex w-[200px] md:w-[250px] lg:w-[200px] xl:w-[250px] text-white bg-opacity-50 bg-gray-800 border border-white h-[50px] rounded-full flex cursor-pointer items-center justify-center transition-all duration-300 hover:bg-gray-600'>
            <button className='font-semibold text-lg animate-shake'>{t("download")}</button>
            <img src={downloadIcon} alt='download icon' className='filter invert h-[30px] ps-6'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;

import React from 'react';
import { useTranslation } from "react-i18next";
import downloadIcon from '../assets/download_icon.png';
import worksIcon from '../assets/works_icon.png';
import cvFile from '../assets/CV.pdf';

const ContentHome: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="min-h-[90vh] flex items-end w-[100%] md:w-[90%]">
      <div className='flex-1 pb-0 p-4 pb-[3rem] bg-[#0a1628] rounded-xl'>
        <div className='xl:text-7xl lg:text-5xl text-5xl font-mono bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
          <p>{t("hello")}</p>
          <p>{t("name")}</p>
          <p>Mid Frontend Developer</p>
        </div>
        <div className='flex font-mono gap-6 md:gap-12'>
          <a href='#portfolio' className='mt-[34px] flex w-[170px] md:w-[200px] lg:w-[180px] xl:w-[200px] text-white bg-opacity-50 border border-white bg-gray-800 h-[50px] rounded-full flex cursor-pointer items-center justify-center transition-all duration-300 hover:bg-gray-600'>
            <button className='font-semibold text-lg animate-shake'>{t("my_works")}</button>
            <img src={worksIcon} alt='work icon' className='filter invert h-[30px] ps-6'></img>
          </a>
          <a href={cvFile} download className='mt-[34px] flex w-[200px] md:w-[250px] lg:w-[200px] xl:w-[250px] text-white bg-opacity-50 bg-gray-800 border border-white h-[50px] rounded-full flex cursor-pointer items-center justify-center transition-all duration-300 hover:bg-gray-600'>
            <button className='font-semibold text-lg animate-shake'>{t("download")}</button>
            <img src={downloadIcon} alt='download icon' className='filter invert h-[30px] ps-6'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;

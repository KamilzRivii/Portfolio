import React from 'react';
import { useTranslation } from "react-i18next";

const ContentAbout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="about">
      <div className='flex-1 pb-0 p-4 pb-[4rem] mt-[12rem] bg-[#0a1628] w-[100%] md:w-[90%] rounded-xl'>
        <div className='w-full flex flex-col items-center'>
          <div className='text-6xl md:text-7xl pb-12 font-mono bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
            <p>{t("aboutme")}</p>
          </div>
          <div className="bg-[#1a2332] w-[90%] font-mono from-slate-800/50 text-slate-400 to-slate-900/50 border-2 border-slate-700/50 rounded-xl p-[3rem] hover:border-[#074D96] transition-all duration-300 backdrop-blur-sm">
            <span>
              <p>{t("about1")}</p>
              <br></br>
              <p>{t("about2")}</p>
              <br></br>
              <p>{t("about3")}</p>
              <br></br>
              <p>{t("about4")}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAbout;
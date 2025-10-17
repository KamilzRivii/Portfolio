import React from 'react';
import { useTranslation } from "react-i18next";
import faceIcon from '../assets/face_icon.svg';
import profilePhoto from '../assets/kamil_przybyla.jpg';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import gmailIcon from '../assets/gmail_icon.png';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const iconLinks = [
    { src: githubIcon, href: 'https://github.com/KamilzRivii', text:'Github Icon' },
    { src: linkedinIcon, href: 'https://www.linkedin.com/in/kamil-przyby%C5%82a-72053a1b7/', text:'Linkedin Icon' },
    { src: gmailIcon, href: 'mailto:kamilprzybyla2@gmail.com', text:'Gmail Icon' },
  ];

  return (
    <div className="sidebar bg-[#0a1628] hidden lg:block font-mono rounded-xl px-12 sticky top-[3rem] py-[3rem] left-[3rem] w-[385px] h-fit text-white justify-items-start items-start border-2 border-slate-700/50 hover:border-[#074D96] transition-all duration-300 backdrop-blur-sm text-[1.5rem]">
      <div className='flex items-end gap-3'>
        <img src={faceIcon} alt="Icon" className="w-[60px] h-[60px]"/>
        <div>
          <p>Kamil</p>
          <p>Przybyła</p>
        </div>
      </div>
      <img src={profilePhoto} alt="Icon" className="w-auto h-auto rounded-xl mt-[1rem]"/>
      <div className='font-semibold'>
        <p className='pt-16 text-sm text-[#d3d3d3]'>{t("specialization")}</p>
        <p className='text-lg pt-1'>Frontend Developer/Tester</p>
      </div>
      <div className='font-semibold'>
        <p className='pt-10 text-sm text-[#d3d3d3]'>{t("location")}</p>
        <p className='text-lg pt-1'>Żory, Śląskie</p>
      </div>
      <div className='pt-10 flex flex-row gap-3'>
        {iconLinks.map((icon, index) => (
          <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer" className="w-[35px] h-[35px] border border-gray-600 rounded-md flex items-center justify-center 
             hover:scale-110 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/30 
             transition-all duration-300 ease-in-out">
            <img src={icon.src} alt={icon.text} className="w-[25px] h-[25px]  hover:invert-0"/>
          </a>
        ))}
      </div>
      <a href="#contact" className='mt-8 w-full h-[60px] rounded-full flex cursor-pointer justify-center bg-gradient-to-r from-[#074D96] to-[#0E2A47] group'>
        <button className='font-semibold text-lg animate-shake'>{t("work_together")}</button>
      </a>
    </div>
  );
};

export default Sidebar;

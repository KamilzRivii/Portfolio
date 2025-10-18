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
    <div className="sidebar bg-[#0a1628] hidden lg:block font-mono rounded-xl px-[4vh] sticky top-[4.5vh] py-[4vh] left-[4.5vh] w-auto h-fit text-white justify-items-start items-start border-2 border-slate-700/50 hover:border-[#074D96] transition-all duration-300 backdrop-blur-sm text-[2vh]">
      <div className='flex items-end gap-3'>
        <img src={faceIcon} alt="Icon" className="w-[5vh] h-[6vh]"/>
        <div>
          <p>Kamil</p>
          <p>Przybyła</p>
        </div>
      </div>
      <img src={profilePhoto} alt="Icon" className="w-[26vh] rounded-xl mt-[1vh]"/>
      <div className='font-semibold'>
        <p className='pt-[5vh] text-sm text-[#d3d3d3]'>{t("specialization")}</p>
        <p className='text-[1.8vh] pt-1'>Frontend Developer/Tester</p>
      </div>
      <div className='font-semibold'>
        <p className='pt-[4vh] text-sm text-[#d3d3d3]'>{t("location")}</p>
        <p className='text-[1.8vh] pt-1'>Żory, Śląskie</p>
      </div>
      <div className='pt-[3vh] flex flex-row gap-3'>
        {iconLinks.map((icon, index) => (
          <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer" className="w-[35px] h-[35px] border border-gray-600 rounded-md flex items-center justify-center 
             hover:scale-110 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/30 
             transition-all duration-300 ease-in-out">
            <img src={icon.src} alt={icon.text} className="w-[25px] h-[25px]  hover:invert-0"/>
          </a>
        ))}
      </div>
      <a href="#contact" className='mt-[3vh] w-full h-[60px] rounded-full flex cursor-pointer justify-center bg-gradient-to-r from-[#074D96] to-[#0E2A47] group'>
        <button className='font-semibold text-[1.8vh] animate-shake'>{t("work_together")}</button>
      </a>
    </div>
  );
};

export default Sidebar;

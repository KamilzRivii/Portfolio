import React from 'react';
import { useTranslation } from "react-i18next";

const ContentContact: React.FC = () => {
  const { t } = useTranslation();
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/kamil-przyby%C5%82a-72053a1b7/',
      color: 'cyan',
      descriptionKey: 'contactlinks.linkedindesc'
    },
    {
      name: 'Gmail',
      icon: '📧',
      url: 'mailto:kamilprzybyla2@gmail.com',
      color: 'purple',
      descriptionKey: 'contactlinks.gmaildesc'
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500/20 hover:border-cyan-400',
        text: 'text-cyan-400',
        bg: 'hover:bg-cyan-500/5',
        shadow: 'hover:shadow-cyan-500/20'
      },
      purple: {
        border: 'border-purple-500/20 hover:border-purple-400',
        text: 'text-purple-400',
        bg: 'hover:bg-purple-500/5',
        shadow: 'hover:shadow-purple-500/20'
      },
      blue: {
        border: 'border-blue-500/20 hover:border-blue-400',
        text: 'text-blue-400',
        bg: 'hover:bg-blue-500/5',
        shadow: 'hover:shadow-blue-500/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div id="contact">
      <div className='flex-1 pb-0 p-4 pb-[4rem] mt-[12rem] mb-[6rem] bg-[#0a1628] w-[100%] md:w-[90%] rounded-xl'>
        <div className='text-6xl md:text-7xl pb-12 font-mono justify-items-center bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
          <p>{t("contact")}</p>
        </div>

        <div className='max-w-6xl mx-auto'>
          {/* Main Contact Section */}
          <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-8 mb-8'>
            <div className='flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50'>
              <h2 className='text-4xl font-bold text-slate-200 font-mono'>
                {t("intouch")}
              </h2>
            </div>
            
            <p className='text-slate-400 font-mono text-base leading-relaxed mb-8'>
              {t("contactinfo")}
            </p>

            {/* Contact Links */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {contactLinks.map((link, index) => {
                const colors = getColorClasses(link.color);
                
                return (
                  <a
                    key={index}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`group bg-slate-800/30 border ${colors.border} ${colors.bg} rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${colors.shadow} flex flex-col items-center text-center`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className='text-4xl'>{link.icon}</span>
                    </div>
                    
                    <h3 className={`text-lg font-bold ${colors.text} font-mono mb-2`}>
                      {link.name}
                    </h3>
                    
                    <p className='text-slate-500 text-sm font-mono'>
                      {t(link.descriptionKey)}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <h3 className='text-lg font-bold text-slate-200 font-mono'>
                  {t("AVAILABILITY")}
                </h3>
              </div>
              <p className='text-slate-400 font-mono text-sm'>
                {t("freelance")}
              </p>
            </div>

            <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                <h3 className='text-lg font-bold text-slate-200 font-mono'>
                  {t("responsetime")}
                </h3>
              </div>
              <p className='text-slate-400 font-mono text-sm'>
                {t("hours")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContact;
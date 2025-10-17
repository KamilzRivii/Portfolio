import React from 'react';
import { useTranslation } from "react-i18next";

const ContentResume: React.FC = () => {
  const { t } = useTranslation();
  const skillsData = {
    intermediate: [
      'JavaScript', 'HTML5', 'Figma', 'GIT/Github', 'API REST', 'Tailwind',
      'jQuery', 'CSS3', 'Media Queries', 'Postman', 'AI Tools', 'Bootstrap'
    ],
    junior: [
      'React Native', 'ReactJS', 'SQL', 'SASS', 'PHP', 'Lighthouse',
      'Typescript', 'Node JS', 'Redux', 'npm', 'Firebase', 'Expo'
    ],
  };

  return (
    <div id="skills">
      <div className='flex-1 pb-0 p-4 pb-[4rem] mt-[12rem] bg-[#0a1628] w-[100%] md:w-[90%] rounded-xl'>
        <div className='text-6xl md:text-7xl pb-12 font-mono justify-items-center bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
          <p>{t("skills")}</p>
        </div>

        <div className='max-w-6xl mx-auto'>
          {/* Skills Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            
            {/* Intermediate Level */}
            <div className='bg-[#1a2332] border border-cyan-500/20 rounded-lg p-8'>
              <div className='flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/20'>
                <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                <h2 className='text-xl lg:text-lg xl:text-xl font-bold text-cyan-400 font-mono'>
                  {t("INTERMEDIATE")}
                </h2>
              </div>
              
              <div className='flex flex-wrap gap-3'>
                {skillsData.intermediate.map((skill, index) => (
                  <div
                    key={index}
                    className='px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-md text-slate-200 font-mono text-sm hover:bg-slate-800 hover:border-cyan-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Junior Level */}
            <div className='bg-[#1a2332] border border-purple-500/20 rounded-lg p-8'>
              <div className='flex items-center gap-3 mb-6 pb-4 border-b border-purple-500/20'>
                <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                <h2 className='text-xl lg:text-lg xl:text-xl font-bold text-purple-400 font-mono'>
                  {t("JUNIOR")}
                </h2>
              </div>
              
              <div className='flex flex-wrap gap-3'>
                {skillsData.junior.map((skill, index) => (
                  <div
                    key={index}
                    className='px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-md text-slate-200 font-mono text-sm hover:bg-slate-800 hover:border-purple-400 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
              <div className='text-4xl font-bold text-cyan-400 font-mono mb-2'>
                {skillsData.intermediate.length}
              </div>
              <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
                {t("intermediate")}
              </div>
            </div>
            
            <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
              <div className='text-4xl font-bold text-purple-400 font-mono mb-2'>
                {skillsData.junior.length}
              </div>
              <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
                {t("junior")}
              </div>
            </div>
            
            <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
              <div className='text-4xl font-bold text-blue-400 font-mono mb-2'>
                {skillsData.intermediate.length + skillsData.junior.length}
              </div>
              <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
                {t("total")}
              </div>
            </div>
            
            <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
              <div className='text-4xl font-bold text-green-400 font-mono mb-2'>
                2
              </div>
              <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
                {t("levels")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentResume;
import React from 'react';
import { useTranslation } from "react-i18next";

const ContentResume = () => {
  const { t } = useTranslation();
  const skillsData = {
    frontend: {
      intermediate: ['JavaScript', 'HTML5', 'React', 'CSS3', 'jQuery', 'Media Queries', 'Bootstrap', 'Tailwind'],
      junior: ['Typescript', 'Next', 'Material UI']
    },
    tools: {
      intermediate: ['Figma', 'GIT/Github', 'API REST', 'AI Tools'],
      junior: ['npm/Vite', 'Firebase', 'Redux']
    },
    testing: {
      intermediate: ['Postman', 'Manual QA Testing', 'Lighthouse'],
      junior: ['Jest', 'React Testing Library']
    },
    mobile: {
      intermediate: [],
      junior: ['React Native', 'React Native Web', 'Expo']
    }
  };

return (
  <div id="skills" className="pb-[5rem]">
    <div className='flex-1 p-6 mt-[12rem] bg-[#0a1628] w-[100%] md:w-[100%] lg:w-[100%] xl:w-[92%] rounded-xl'>
      <div className='text-4xl sm:text-6xl md:text-7xl w-full pb-6 font-mono bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
        <p>{t("skills")}</p>
      </div>

      <div className='max-w-6xl mx-auto'>
        {/* Skills Grid by Category */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          {Object.entries(skillsData).map(([category, levels], idx) => (
            <div key={idx} className='bg-[#1a2332] border-2 border-slate-700/50 rounded-lg p-8 hover:border-[#074D96] transition-all duration-300'>
              <h2 className='text-xl font-bold text-slate-200 font-mono mb-4 capitalize'>
                {t(category)}
              </h2>

              {/* Intermediate */}
              {levels.intermediate.length > 0 && (
                <div className='mb-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                    <h3 className='text-lg font-bold text-cyan-400 font-mono'>
                      {t("INTERMEDIATE")}
                    </h3>
                  </div>
                  <div className='flex flex-wrap gap-3'>
                    {levels.intermediate.map((skill, index) => (
                      <div key={index} className='px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-md text-slate-200 font-mono text-sm hover:bg-slate-800 hover:border-cyan-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20'>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Junior */}
              {levels.junior.length > 0 && (
                <div>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                    <h3 className='text-lg font-bold text-purple-400 font-mono'>
                      {t("JUNIOR")}
                    </h3>
                  </div>
                  <div className='flex flex-wrap gap-3'>
                    {levels.junior.map((skill, index) => (
                      <div key={index} className='px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-md text-slate-200 font-mono text-sm hover:bg-slate-800 hover:border-purple-400 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20'>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
            <div className='text-4xl font-bold text-cyan-400 font-mono mb-2'>
              {Object.values(skillsData).reduce((acc, curr) => acc + curr.intermediate.length, 0)}
            </div>
            <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
              {t("intermediate")}
            </div>
          </div>

          <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
            <div className='text-4xl font-bold text-purple-400 font-mono mb-2'>
              {Object.values(skillsData).reduce((acc, curr) => acc + curr.junior.length, 0)}
            </div>
            <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
              {t("junior")}
            </div>
          </div>

          <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
            <div className='text-4xl font-bold text-blue-400 font-mono mb-2'>
              {Object.values(skillsData).reduce((acc, curr) => acc + curr.intermediate.length + curr.junior.length, 0)}
            </div>
            <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
              {t("total")}
            </div>
          </div>

          <div className='bg-[#1a2332] border border-slate-700/50 rounded-lg p-6 text-center'>
            <div className='text-4xl font-bold text-green-400 font-mono mb-2'>
              {Object.keys(skillsData).length}
            </div>
            <div className='text-slate-400 text-xs font-mono uppercase tracking-wider'>
              {t("categories")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default ContentResume;
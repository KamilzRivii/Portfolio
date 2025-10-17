import React from 'react';
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  tags: {
    frontend?: string[];
    ux?: string[];
    features?: string[];
  };
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ContentHome: React.FC = () => {
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      id: 1,
      titleKey: "titles.breathe",
      descriptionKey: "projects.breathe",
      tags: {
        frontend: ["React Native", "TypeScript", "Tailwind CSS", "Redux", "Expo"],
        ux: ["Expo Haptics", "Safe Area Context", "React Navigation", "i18next"],
        features: ["Breathing exercises", "Progress tracking", "Custom timers", "User statistics", "Multi-language support"]
      },
      githubUrl: "https://github.com/username/tide-tunes-studio",
      liveUrl: "https://tidetunes.com",
      featured: false
    },
    {
      id: 2,
      titleKey: "titles.lofi",
      descriptionKey: "projects.lofi",
      tags: {
        frontend: ["React Native", "Tailwind CSS", "Expo"],
        ux: ["Toast Message", "Safe Area Context", "React Navigation", "i18next", "Gesture Handler"],
        features: ["Spotify API integration", "Audio playback", "Custom playlists", "Modern UI with animations"]
      },
      githubUrl: "https://github.com/username/ecommerce-platform",
      featured: false
    },
    {
      id: 3,
      titleKey: "titles.b2b",
      descriptionKey: "projects.b2b",
      tags: {
        frontend: ["JavaScript", "Bootstrap", "jQuery", "CSS", "Handlebars", "API REST"],
        ux: ["Figma", "Google Analytics", "Hotjar", "SEO Optimization"],
        features: ["Testing", "Postman", "Responsive UI with Bootstrap", "UI Components", "Form/Data validation"]
      },
      liveUrl: "https://web.keno-energy.com/",
      featured: false
    },
    {
      id: 4,
      titleKey: "titles.dart",
      descriptionKey: "projects.dart",
      tags: {
        frontend: ["React Native", "Expo", "Redux Toolkit", "React Native Paper"],
        ux: ["Google Sign-In", "Safe Area Context", "Gesture Handler", "i18next", "Collapsible UI", "Linear Gradient", "Blur Effects"],
        features: ["Score tracking for multiple players", "Game progress history", "Firebase integration", "Authentication (Google Sign-In)", "Audio playback", "Multi-language support"]
      },
      featured: true
    },
  ];

  return (
    <div id="portfolio">
      <div className='flex-1 pb-0 p-4 pb-[4rem] mt-[12rem] bg-[#0a1628] w-[100%] md:w-[90%] rounded-xl'>
        <div className='w-full flex flex-col items-center'>
          <div className='text-6xl md:text-7xl font-mono pb-12 bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
            <p>{t("check_projects")}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 font-mono justify-items-center">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#1a2332] w-[91%] from-slate-800/50 to-slate-900/50 border-2 border-slate-700/50 rounded-xl p-6 hover:border-[#074D96] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {t(project.titleKey)}
                    </h3>
                    {project.featured && (
                      <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-md border border-purple-600/40">
                        {t("in_progress")}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg transition-colors group"
                        title={t("viewgithub")}
                      >
                        <svg className="w-5 h-5 text-slate-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-600/50 hover:bg-purple-500 rounded-lg transition-colors group"
                        title={t("viewlive")}
                      >
                        <svg className="w-5 h-5 text-purple-200 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  {t(project.descriptionKey)}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-5">
                  {project.tags.frontend && (
                    <div className="border-l-2 border-purple-500 pl-3">
                      <div className="text-purple-400 font-semibold text-xs mb-2 uppercase tracking-wide">
                        {t("frontend")}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.frontend.map((tech, i) => (
                          <span key={i} className="bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.tags.ux && (
                    <div className="border-l-2 border-green-500 pl-3">
                      <div className="text-green-400 font-semibold text-xs mb-2 uppercase tracking-wide">
                        {t("ux")}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.ux.map((tech, i) => (
                          <span key={i} className="bg-green-500/10 text-green-300 px-2 py-0.5 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.tags.features && (
                    <div className="border-l-2 border-orange-500 pl-3">
                      <div className="text-orange-400 font-semibold text-xs mb-2 uppercase tracking-wide">
                        {t("features")}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.features.map((feature, i) => (
                          <span key={i} className="bg-orange-500/10 text-orange-300 px-2 py-0.5 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
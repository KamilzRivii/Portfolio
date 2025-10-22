import React from 'react';
import { useTranslation } from "react-i18next";
import { UserIcon, BriefcaseIcon, DocumentIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";


const ContentAbout = () => {
    const [flippedCards, setFlippedCards] = React.useState<Record<number, boolean>>({});
  const { t } = useTranslation();

  const toggleCard = (id: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const cards = [
    {
      id: 1,
      icon: <UserIcon className="w-20 h-20 text-gray-400 bg-gradient-to-r from-[#074D96] to-[#0E2A47] rounded-xl" />,
      number: "01",
      title: t("whoami"),
      backContent: t("about1")
    },
    {
      id: 2,
      icon: <BriefcaseIcon className="w-20 h-20 text-gray-400 bg-gradient-to-r from-[#074D96] to-[#0E2A47] rounded-xl" />,
      number: "02",
      title: t("experience"),
      backContent: t("about2")
    },
    {
      id: 3,
      icon: <DocumentIcon className="w-20 h-20 text-gray-400 bg-gradient-to-r from-[#074D96] to-[#0E2A47] rounded-xl" />,
      number: "03",
      title: t("nowadays"),
      backContent: t("about3")
    },
    {
      id: 4,
      icon: <RocketLaunchIcon className="w-20 h-20 text-gray-400 bg-gradient-to-r from-[#074D96] to-[#0E2A47] rounded-xl" />,
      number: "04",
      title: t("future"),
      backContent: t("about4")
    }
  ];

  return (
    <div id="about" className="pb-[5rem]">
      <div className='flex-1 p-6 pb-6 mt-[12rem] bg-[#0a1628] w-[100%] md:w-[100%] lg:w-[100%] xl:w-[92%] rounded-xl'>
        <div className='w-full flex flex-col items-center'>
          <div className='text-4xl sm:text-6xl md:text-7xl pb-6 w-full font-mono bg-gradient-to-r from-[#A1C4D7] to-[#E2E8F0] text-transparent bg-clip-text leading-[105px]'>
            <p>{t("aboutme")}</p>
          </div>
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
            <div className="card-construction gap-6 justify-center">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`perspective-1000 ${
                    index % 2 === 1 ? "sm:mt-12 mt-0" : "mt-0"
                  }`}
                  style={{
                    animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className={`relative w-full h-full flip-card-inner group ${flippedCards[card.id] ? 'flipped' : ''}`} onClick={() => toggleCard(card.id)}>
                    <div className="absolute inset-0 flip-card-front">
                      <div className="h-full bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border-2 border-slate-700/50 hover:border-[#074D96] transition-all duration-300 rounded-lg p-6 flex flex-col justify-between">
                        {card.icon}
                        <div>
                          <h3 className="text-gray-400 text-6xl font-mono opacity-20 mb-2">{card.number}</h3>
                          <p className="text-gray-300 text-lg font-bold font-mono">{card.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flip-card-back">
                      <div className="h-full bg-gradient-to-br from-[#1a2332] to-[#074D96] backdrop-blur-sm border-2 border-slate-700/50 hover:border-[#074D96] rounded-lg p-5 flex flex-col justify-center">
                        <p className="text-white/90 text-xs font-mono leading-relaxed">{card.backContent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAbout;
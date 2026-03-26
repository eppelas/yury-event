import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const ECOSYSTEM_CONTENT = [
  {
    id: 'space',
    label: 'COMMUNITY',
    title: '{space}',
    desc: 'Практический клуб AI-практиков -- live demos, кейсы, нетворк. Вход по заявке.',
    link: 'aimindset.org',
    status: 'CURRENT'
  },
  {
    id: 'for-teams',
    label: 'SPRINT',
    title: '{for-teams}',
    desc: 'AI-трансформация команд -- от первых экспериментов к системным AI-процессам.',
    link: 'aimindset.org',
    status: 'CURRENT'
  },
  {
    id: 'ai-native',
    label: 'SPRINT',
    title: '{ai-native orgs}',
    desc: 'Агентная инфраструктура организаций -- от процессов к AI-native командам.',
    link: 'ai-native.org',
    status: 'CURRENT'
  },
  {
    id: 'learn',
    label: 'LMS',
    title: '{learn}',
    desc: 'Платформа обучения -- записи, материалы, задания, прогресс участников.',
    link: 'learn.aimindset.org',
    status: 'ACTIVE'
  }
];

const TABS = [
  { id: 0, num: '01', label: 'CURRENT LABS' },
  { id: 1, num: '02', label: 'FUTURE LABS' },
  { id: 2, num: '03', label: 'LAB ARCHIVE' }
];

export const DesktopMiniLabsNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-[#f3f3f5] py-12 px-4 md:px-8 font-sans border-y border-black overflow-hidden relative">
      
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8 relative z-10">
        
        {/* Separator Header Row */}
        <div className="flex items-center gap-4 w-full mb-2">
          <div className="font-mono text-[9px] text-black/40 font-bold tracking-widest uppercase shrink-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#8DC63F] inline-block animate-pulse"></span>
            [09] ECOSYSTEM_LOG // 2026
          </div>
          <div className="flex-1 h-px bg-black/10"></div>
          <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black shrink-0">
            LABS NAVIGATOR
          </div>
        </div>

        {/* Tabs Row */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2 font-mono text-xs overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 border transition-colors uppercase font-bold tracking-widest text-[9px] whitespace-nowrap shrink-0",
                  activeTab === tab.id 
                    ? "bg-black text-[#8DC63F] border-black" 
                    : "bg-transparent text-black/60 border-black/20 hover:border-black hover:text-black"
                )}
              >
                [{tab.num}] {tab.label}
              </button>
            ))}
          </div>
          <div className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-black/30 hidden md:flex items-center gap-3">
             <span>SCROLL TO VIEW</span>
             <span>→</span>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="w-full overflow-x-auto pb-6 scrollbar-hide snap-x outline-none">
          <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex gap-px bg-black border border-black w-max"
            >
                {activeTab === 0 ? (
                    ECOSYSTEM_CONTENT.map((card) => (
                        <a 
                          key={card.id} 
                          href={`https://${card.link}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[240px] h-[200px] shrink-0 snap-start bg-[#f3f3f5] p-5 flex flex-col group hover:bg-black transition-colors duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="font-mono text-[8px] uppercase tracking-widest text-black/40 group-hover:text-[#8DC63F] font-bold transition-colors">
                                    {card.label}
                                </span>
                                <span className={cn(
                                    "font-mono text-[7px] uppercase tracking-widest px-1.5 py-0.5 border transition-colors", 
                                    card.status === 'CURRENT' 
                                      ? "border-[#8DC63F] text-[#8DC63F] bg-[#8DC63F]/10 group-hover:bg-transparent" 
                                      : "border-black/20 text-black/40 group-hover:border-white/20 group-hover:text-white/40"
                                )}>
                                    {card.status}
                                </span>
                            </div>
                            
                            <h3 className="text-[17px] leading-tight font-black uppercase tracking-tighter text-black group-hover:text-white mb-2 transition-colors">
                                {card.title}
                            </h3>
                            
                            <p className="text-[10px] leading-[1.6] text-black/60 group-hover:text-white/60 mb-6 font-mono font-medium line-clamp-3 transition-colors">
                                {card.desc}
                            </p>

                            <div className="mt-auto font-mono text-[8px] text-black/30 group-hover:text-[#8DC63F] uppercase tracking-widest transition-colors flex items-center justify-between border-t border-black/10 group-hover:border-white/10 pt-3">
                                <span>{card.link}</span>
                                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="w-[800px] h-[200px] bg-[#f3f3f5] p-16 flex flex-col items-center justify-center text-center">
                        <div className="text-[#8DC63F] font-mono text-xl mb-3 animate-pulse">*</div>
                        <div className="text-xs font-black uppercase tracking-widest text-black/40 font-mono">
                            DIRECTORY LOCKED // NO ACTIVE DATA
                        </div>
                    </div>
                )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

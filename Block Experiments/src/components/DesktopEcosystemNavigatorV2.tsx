import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const ECOSYSTEM_CONTENT = [
  {
    id: 'space',
    title: '{space}',
    desc: 'Практический клуб AI-практиков',
    status: 'CURRENT',
    icon: (
      <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center relative">
        <div className="w-full h-px bg-black/20 absolute top-1/2 -translate-y-1/2" />
        <div className="w-px h-full bg-black/20 absolute left-1/2 -translate-x-1/2" />
        <div className="w-3 h-3 border border-black/40 absolute top-1/2 left-1/2 -translate-x-full -translate-y-full" />
        <div className="w-3 h-3 border border-[#8DC63F] absolute top-1/2 left-1/2" />
      </div>
    )
  },
  {
    id: 'for-teams',
    title: '{for-teams}',
    desc: 'AI-трансформация команд',
    status: 'CURRENT',
    icon: (
      <div className="w-16 h-16 rounded-full border border-[#8DC63F]/50 flex items-center justify-center relative">
        <div className="w-full h-px bg-black/20 absolute top-1/2 -translate-y-1/2" />
        <div className="w-px h-full bg-black/20 absolute left-1/2 -translate-x-1/2" />
        <div className="w-3 h-3 border border-black/40 absolute top-[40%] left-[60%]" />
      </div>
    )
  },
  {
    id: 'ai-native',
    title: '{ai-native orgs}',
    desc: 'Агентная инфраструктура',
    status: 'CURRENT',
    icon: (
      <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center relative">
        <div className="w-full h-px bg-black/20 absolute top-1/2 -translate-y-1/2" />
        <div className="w-px h-full bg-black/20 absolute left-1/2 -translate-x-1/2" />
        <div className="w-4 h-4 border border-[#8DC63F] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    )
  },
  {
    id: 'learn',
    title: '{learn}',
    desc: 'Платформа обучения',
    status: 'CURRENT',
    icon: (
      <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center relative">
        <div className="w-full h-px bg-black/20 absolute top-1/2 -translate-y-1/2" />
        <div className="w-px h-full bg-black/20 absolute left-1/2 -translate-x-1/2" />
        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#8DC63F] border-b-[4px] border-b-transparent absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ml-0.5" />
      </div>
    )
  }
];

const TABS = [
  { id: 0, label: 'CURRENT LABS', key: 'CURRENT' },
  { id: 1, label: 'FUTURE LABS', key: 'FUTURE' },
  { id: 2, label: 'LAB ARCHIVE', key: 'ARCHIVE' }
];

export const DesktopEcosystemNavigatorV2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-[1240px] mx-auto py-12 px-8 font-sans flex justify-center">
      <div className="flex border border-black/10 flex-col w-full max-w-[940px] bg-white shadow-xl shadow-black/[0.02]">
        
        {/* Main upper container */}
        <div className="flex flex-1 flex-col md:flex-row overflow-hidden min-h-[480px]">
          {/* Sidebar */}
          <div className="w-full md:w-[220px] shrink-0 bg-[#EEEEEE] p-8 flex flex-col gap-5 border-b md:border-b-0 md:border-r border-black/10">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative group w-[140px] text-left shrink-0"
                >
                  <div className={cn(
                    "absolute top-1 left-1.5 w-full h-[62px] transition-colors",
                    isActive ? "bg-[#8DC63F]" : "bg-transparent group-hover:bg-black/5"
                  )} />
                  <div className={cn(
                    "relative w-full p-4 h-[62px] flex flex-col justify-center transition-colors font-mono text-[11px] leading-[1.4] font-bold tracking-[0.1em]",
                    isActive ? "bg-black text-white" : "bg-white text-black border border-black/10 group-hover:border-black/20"
                  )}>
                    {tab.label.split(' ').map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white p-8 relative flex items-center justify-center">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative z-10 flex items-center justify-center p-4"
              >
                {activeTab === 0 ? (
                  // Compact 2x2 grid of smaller square cards 
                  <div className="grid grid-cols-2 grid-rows-2 w-fit gap-0 border-l border-t border-black/10 bg-white shadow-sm">
                    {ECOSYSTEM_CONTENT.map((card) => (
                      <div key={card.id} className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] border-r border-b border-black/10 p-6 flex flex-col relative group transition-colors hover:bg-black/[0.02] cursor-pointer">
                        <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-black/30 mb-6 flex justify-end w-full">
                          <span>{card.status}</span>
                        </div>
                        {card.icon}
                        
                        <div className="mt-auto pt-4">
                          <h2 className="text-[22px] font-black tracking-tighter text-black mb-1.5 leading-none group-hover:text-[#8DC63F] transition-colors">
                            {card.title}
                          </h2>
                          <div className="text-[11px] text-black/50 leading-relaxed max-w-[160px]">
                            {card.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Archive / Placeholder state
                  <div className="w-full max-w-[480px] h-full min-h-[480px] border border-black/10 p-10 flex flex-col relative bg-white shadow-sm">
                     <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-black/30 absolute top-6 right-6">
                        LAB ARCHIVE
                     </div>
                     <div className="w-24 h-24 rounded-full border border-black/20 flex items-center justify-center relative mb-auto">
                        <div className="w-full h-px bg-black/20 absolute top-1/2 -translate-y-1/2" />
                        <div className="w-px h-full bg-black/20 absolute left-1/2 -translate-x-1/2" />
                        <div className="w-4 h-4 border border-black/60 absolute top-1/2 left-1/2 -translate-x-full -translate-y-full" />
                        <div className="w-4 h-4 border border-[#8DC63F] absolute top-1/2 left-1/2" />
                     </div>
                     <div className="mt-auto">
                        <h2 className="text-3xl font-black tracking-tighter text-black mb-2">Winter Main Lab</h2>
                        <div className="text-[13px] text-black/50 font-medium">Архив потока W26</div>
                     </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer/Divider bar */}
        <div className="h-10 md:h-12 border-t border-black/10 bg-[#EEEEEE] w-full flex items-center px-8 relative shrink-0">
          <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-black/40 uppercase">
            NAVIGATOR · ACTIVE: <span className="text-black/80">{TABS[activeTab].key}</span> · LAB CATEGORY SYSTEMS
          </div>
        </div>
      </div>
    </div>
  );
};

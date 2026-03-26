import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const ECOSYSTEM_CONTENT = [
  {
    id: 'space',
    label: 'COMMUNITY',
    title: '{space}',
    desc: 'Практический клуб AI-практиков -- live demos, кейсы, нетворк. Вход по заявке.',
    link: 'aimindset.org',
    status: 'CURRENT',
    icon: (
      <div className="w-12 h-12 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse" />
      </div>
    )
  },
  {
    id: 'for-teams',
    label: 'SPRINT',
    title: '{for-teams}',
    desc: 'AI-трансформация команд -- от первых экспериментов к системным AI-процессам.',
    link: 'aimindset.org',
    status: 'CURRENT',
    icon: (
      <div className="w-12 h-12 rotate-45 border border-[#8DC63F] bg-[#8DC63F]/10 flex items-center justify-center">
        <div className="w-4 h-4 border-t border-l border-[#8DC63F]" />
      </div>
    )
  },
  {
    id: 'ai-native',
    label: 'SPRINT',
    title: '{ai-native orgs}',
    desc: 'Агентная инфраструктура организаций -- от процессов к AI-native командам.',
    link: 'ai-native.org',
    status: 'CURRENT',
    icon: (
      <div className="w-12 h-12 border border-[#8DC63F] bg-[#8DC63F]/10 flex items-center justify-center overflow-hidden">
        <div className="w-full h-[1px] bg-[#8DC63F] rotate-45 absolute" />
        <div className="w-full h-[1px] bg-[#8DC63F] -rotate-45 absolute" />
      </div>
    )
  },
  {
    id: 'learn',
    label: 'LMS',
    title: '{learn}',
    desc: 'Платформа обучения -- записи, материалы, задания, прогресс участников.',
    link: 'learn.aimindset.org',
    status: 'ACTIVE',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-[#8DC63F]/10 border border-[#8DC63F] flex items-center justify-center">
         <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#8DC63F] border-b-[8px] border-b-transparent translate-x-0.5" />
      </div>
    )
  }
];

const TABS = [
  { id: 0, num: '01', label: 'CURRENT LABS' },
  { id: 1, num: '02', label: 'FUTURE LABS' },
  { id: 2, num: '03', label: 'LAB ARCHIVE' }
];

export const DesktopEcosystemNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-[1240px] mx-auto py-16 px-4 md:px-8 font-sans">
      <div className="flex flex-col gap-8 mb-16">
        <div className="flex flex-col gap-2">
            <span className="text-[#8DC63F] font-black tracking-[0.3em] uppercase text-xs font-mono">
                ARCHITECTURE // ECOSYSTEM
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none">
                NEXT LABS NAVIGATOR
            </h1>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-black/5 shadow-[0_32px_80px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col min-h-[740px]">
        {/* Black Header */}
        <div className="bg-black py-5 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">LABS NAVIGATOR</h3>
            <div className="hidden md:flex gap-3 text-white/20 font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                <span>АРХИВ</span>
                <span>•</span>
                <span className="text-white/60">ТЕКУЩИЕ</span>
                <span>•</span>
                <span>БУДУЩИЕ ЛАБОРАТОРИИ</span>
            </div>
          </div>
          <button className="text-[10px] font-bold text-white uppercase tracking-widest border border-white/20 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors">
            СВЕРНУТЬ
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 relative flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-[280px] bg-[#F8F9F8] border-r border-black/5 p-8 flex flex-col gap-4">
                <div className="text-black/30 font-bold uppercase tracking-[0.2em] text-[9px] mb-4">DIRECTORY</div>
                
                {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "group w-full p-5 rounded-2xl flex flex-col gap-1 text-left transition-all duration-300",
                                isActive ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : "hover:bg-black/[0.02]"
                            )}
                        >
                            <span className={cn(
                                "text-2xl font-black transition-colors shrink-0",
                                isActive ? "text-[#8DC63F]" : "text-[#D0D0D0] group-hover:text-black/20"
                            )}>
                                {tab.num}
                            </span>
                            <span className={cn(
                                "text-[10px] font-black tracking-widest uppercase transition-colors",
                                isActive ? "text-[#8DC63F]" : "text-[#D0D0D0] group-hover:text-black/30"
                            )}>
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Grid Area */}
            <div className="flex-1 bg-white p-6 md:p-12 relative overflow-hidden flex flex-col gap-12">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 flex items-center justify-between">
                    <div className="text-black/30 font-bold uppercase tracking-[0.2em] text-[10px] items-center flex gap-3">
                        <span>ACTIVE LABS // WINTER 26 BATCH</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#8DC63F] text-white px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-[9px] font-black tracking-widest uppercase">ONLINE</span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        {activeTab === 0 ? (
                            ECOSYSTEM_CONTENT.map((card) => (
                                <motion.div
                                    key={card.id}
                                    whileHover={{ y: -4, shadow: '0 20px 40px rgba(0,0,0,0.04)' }}
                                    className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col gap-6 group hover:border-[#8DC63F]/20 transition-all duration-500"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="relative">
                                            {card.icon}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#8DC63F] font-black uppercase text-[10px] tracking-widest">
                                                {card.label}
                                            </span>
                                            <span className="text-black/20 font-bold uppercase text-[9px] tracking-widest">
                                                {card.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-4xl font-black uppercase tracking-tighter text-black/90 leading-tight">
                                            {card.title}
                                        </h2>
                                        <p className="text-sm font-medium leading-relaxed text-black/40 line-clamp-2">
                                            {card.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 flex items-center justify-between">
                                        <span className="text-[11px] font-black text-[#8DC63F] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                            {card.link} <span>→</span>
                                        </span>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-32 flex flex-col items-center justify-center text-center opacity-20 italic">
                                <div className="text-4xl font-black mb-2 tracking-widest uppercase">COMING SOON</div>
                                <div className="font-mono text-[10px] uppercase font-bold tracking-[0.3em]">Directory sequence locked</div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </div>
  );
};

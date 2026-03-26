import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const ECOSYSTEM_CONTENT = [
  {
    id: 'spring',
    label: 'CURRENT',
    title: 'Spring Main Lab',
    desc: 'Набор открыт'
  },
  {
    id: 'personal-os',
    label: 'CURRENT',
    title: '{personal OS}',
    desc: 'Операционная система внимания'
  },
  {
    id: 'ai-orgs',
    label: 'CURRENT',
    title: '{ai-native orgs}',
    desc: 'AI-практики для команд'
  }
];

const TABS = [
  { id: 0, num: '01', label: 'CURRENT LABS' },
  { id: 1, num: '02', label: 'FUTURE LABS' },
  { id: 2, num: '03', label: 'LAB ARCHIVE' }
];

export const DesktopWidgetLabsNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-[#EAEAEA] py-20 flex justify-center font-sans">
      
      {/* 
        The "iframe-like" discrete wrapper box.
        Max-width is much smaller than the 1240px original, making it feel like a widget. 
      */}
      <div className="w-full max-w-[800px] bg-white border border-black/10 shadow-2xl flex flex-col">
        
        {/* Black Header (like original) */}
        <div className="bg-black py-3 px-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <h3 className="text-white font-black uppercase tracking-widest text-[11px]">LABS NAVIGATOR</h3>
            <div className="hidden md:flex gap-2 text-white/30 font-mono text-[8px] font-bold uppercase tracking-[0.2em]">
                <span>АРХИВ</span>
                <span>•</span>
                <span className="text-[#8DC63F]">ТЕКУЩИЕ</span>
                <span>•</span>
                <span>БУДУЩИЕ</span>
            </div>
          </div>
          <button className="text-[8px] font-bold text-white/50 uppercase tracking-widest border border-white/20 rounded-md px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors">
            СВЕРНУТЬ
          </button>
        </div>

        {/* Main Body */}
        <div className="flex flex-col md:flex-row h-[320px]">
            
            {/* Sidebar Tabs */}
            <div className="w-full md:w-[200px] bg-[#fdfdfd] border-r border-black/5 p-4 flex flex-col gap-2 shrink-0">
                <div className="text-black/30 font-bold uppercase tracking-[0.2em] text-[8px] mb-2 px-2">DIRECTORY</div>
                
                {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "group w-full p-3 rounded-xl flex flex-col gap-1 text-left transition-all duration-300 border border-transparent",
                                isActive ? "bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] border-black/5" : "hover:bg-black/[0.02]"
                            )}
                        >
                            <span className={cn(
                                "text-sm font-black transition-colors shrink-0",
                                isActive ? "text-[#8DC63F]" : "text-[#D0D0D0] group-hover:text-black/20"
                            )}>
                                {tab.num}
                            </span>
                            <span className={cn(
                                "text-[9px] font-bold tracking-widest uppercase transition-colors",
                                isActive ? "text-black" : "text-black/40 group-hover:text-black/60"
                            )}>
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Grid Area */}
            <div className="flex-1 bg-white p-6 relative overflow-hidden flex flex-col gap-4">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="relative z-10 flex items-center justify-between shrink-0">
                    <div className="text-black/30 font-bold uppercase tracking-[0.2em] text-[8px] flex items-center gap-2">
                        <span>ACTIVE LABS // BATCH 26</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#8DC63F]/10 border border-[#8DC63F]/20 text-[#8DC63F] px-2 py-1 rounded-sm">
                        <span className="w-1 h-1 rounded-full bg-[#8DC63F] animate-pulse" />
                        <span className="text-[7px] font-black tracking-widest uppercase">ONLINE</span>
                    </div>
                </div>

                <div className="relative z-10 flex-1 overflow-x-auto scrollbar-hide flex gap-3 pb-2 pt-2 items-start h-full">
                  <AnimatePresence mode="wait">
                      {activeTab === 0 ? (
                          ECOSYSTEM_CONTENT.map((card) => (
                              <motion.a
                                  key={card.id}
                                  href="#"
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className="w-[140px] h-[160px] shrink-0 bg-white border border-black/10 hover:border-[#8DC63F] hover:shadow-[0_8px_24px_rgba(141,198,63,0.15)] flex flex-col p-4 group transition-all duration-300"
                              >
                                  <div className="font-mono text-[7px] font-bold tracking-widest uppercase text-[#8DC63F] mb-4">
                                      {card.label}
                                  </div>
                                  
                                  {/* Minimal vector icon representation */}
                                  <div className="w-5 h-5 mb-auto text-black/20 group-hover:text-[#8DC63F] transition-colors">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                      {card.id === 'spring' && <path d="M4 20h16M4 12l8-8 8 8" />}
                                      {card.id === 'personal-os' && <path d="M4 6h16M4 12h16M4 18h16" />}
                                      {card.id === 'ai-orgs' && <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />}
                                    </svg>
                                  </div>
                                  
                                  <h3 className="text-[12px] font-black uppercase tracking-tight text-black mb-1 group-hover:text-[#8DC63F] transition-colors leading-tight">
                                      {card.title}
                                  </h3>
                                  <p className="text-[9px] text-black/50 leading-snug line-clamp-2">
                                      {card.desc}
                                  </p>
                              </motion.a>
                          ))
                      ) : (
                          <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full h-full flex flex-col items-center justify-center text-center opacity-30 italic"
                          >
                              <div className="text-xl font-black mb-1 tracking-widest uppercase">*</div>
                              <div className="font-mono text-[8px] uppercase font-bold tracking-[0.3em]">Directory sequence locked</div>
                          </motion.div>
                      )}
                  </AnimatePresence>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

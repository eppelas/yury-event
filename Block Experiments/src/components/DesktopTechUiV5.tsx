import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV5 = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Sync Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let newWeek = Math.floor(latest * PROGRAM_TRACKS.length);
    if (newWeek >= PROGRAM_TRACKS.length) newWeek = PROGRAM_TRACKS.length - 1;
    if (newWeek < 0) newWeek = 0;
    
    if (newWeek !== activeWeek) {
      setActiveWeek(newWeek);
    }
  });

  const handleWeekClick = (idx: number) => {
    setActiveWeek(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalHeight = rect.height;
    const targetY = window.scrollY + rect.top + (totalHeight / PROGRAM_TRACKS.length) * idx + (totalHeight / PROGRAM_TRACKS.length / 2) - window.innerHeight / 2;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];

  const weeklyRhythm = [
    { day: 'ПН', time: '18:00 CET', task: 'ВОРКШОП', type: 'workshop' },
    { day: 'ВТ', time: '', task: 'КОВОРКИНГ', type: 'normal' },
    { day: 'СР', time: '18:00 CET', task: 'ADVANCED TRACK', type: 'core', advanced: true },
    { day: 'ЧТ', time: '', task: '', type: 'empty' },
    { day: 'ПТ', time: '', task: 'ЛЕКЦИЯ', type: 'normal' },
    { day: 'СБ', time: '', task: 'Q&A СЕССИЯ', type: 'normal' },
    { day: 'ВС', time: '', task: '', type: 'empty' },
  ];

  return (
    // Outer scrollable container that is 300vh tall to allow rich scrolling
    <div ref={containerRef} className="w-full max-w-[1340px] mx-auto font-sans h-[300vh] relative">
      
      {/* Sticky container that stays fixed on screen while scrolling */}
      <div className="sticky top-[10vh] flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch justify-center h-[580px] pt-12">
        
        {/* LEFT: STEPPER NAVIGATION */}
        <div className="w-[120px] shrink-0 flex flex-col relative h-[500px] mt-6">
          {/* Main vertical line, positioned exactly behind the circles, from first dot to DEMO DAY block center */}
          <div className="absolute left-[11.5px] top-[40px] bottom-[40px] w-[1px] bg-black/15 z-0 pointer-events-none" />

          {/* Wrapper for the 4 weeks to share remaining height evenly */}
          <div className="flex-1 flex flex-col w-[120px] gap-2">
            {PROGRAM_TRACKS.map((t, idx) => {
              const isActive = activeWeek === idx;
              return (
                <button
                  key={`v5-st-ref-${t.id}`}
                  onClick={() => handleWeekClick(idx)}
                  className="flex-1 w-full flex items-center gap-3.5 group text-left relative z-10 transition-colors hover:bg-black/[0.04] rounded-[10px] -ml-4 pl-4 cursor-pointer"
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center transition-all shrink-0 z-10",
                    isActive ? "bg-black border border-black shadow-[rgba(0,0,0,0.1)_0_4px_12px]" : "bg-white border border-black/20 group-hover:border-black/40"
                  )}>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>

                  <div className="flex flex-col">
                    <div className={cn("text-[9px] font-mono font-bold uppercase transition-colors mb-0.5", isActive ? "text-black" : "text-black/30 group-hover:text-black/50")}>
                      НЕДЕЛЯ
                    </div>
                    <div className={cn("text-[17px] font-black tracking-tighter leading-none transition-colors", isActive ? "text-black" : "text-black/20 group-hover:text-black/40")}>
                      0{idx + 1}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* DEMO DAY - Rectangular Block at bottom */}
          <div className="w-[100px] flex items-center gap-2 p-2 border border-black/10 rounded-[6px] bg-[#f8f8f8] text-left relative z-10 opacity-70 mt-1 mb-8 -ml-1">
            <div className="flex flex-col">
              <div className="text-[8.5px] font-mono font-bold uppercase text-black/50 mb-0.5 tracking-wider">
                FINAL
              </div>
              <div className="text-[11px] font-black tracking-widest leading-none text-black/90">
                DEMO DAY
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: THE MAIN CARD */}
        <div className="flex-1 border border-black/15 shadow-[0_10px_40px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col pt-12 max-w-[940px] bg-white rounded-none">
          
          {/* Background Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10 bg-white" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          {/* BACKGROUND ILLUSTRATION */}
          <motion.div 
            animate={{
              scale: activeWeek === 3 ? 1.05 : 0.82,
              opacity: activeWeek === 3 ? 0.45 : 0.35,
              top: activeWeek === 3 ? "-10%" : "0%",
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[-40px] w-[740px] h-[740px] pointer-events-none mix-blend-multiply z-0 flex justify-center"
          >
             <MorphSvg week={activeWeek} />
          </motion.div>

          <div className="relative z-20 flex flex-col flex-1 pl-12 pr-0 pb-0">
             
             {/* ALIGNED TAGS ROW */}
             <div className="flex items-center justify-between mb-4 h-6 pr-12">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-[1px] bg-black/80 shadow-sm" />
                   <span className="text-black/80 text-[10px] font-mono font-bold uppercase tracking-[0.25em] leading-none">MAIN TRACK</span>
                </div>
                
                {/* Visual alignment empty block matching the 320px sidebar */}
                <div className="w-[320px] h-full" />
             </div>

             <div className="flex-1 flex flex-col lg:flex-row relative">
                
                {/* Content Area */}
                <div className="flex-1 min-w-0 relative pr-10 pb-12 flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`v5-blur-crossfade-${activeWeek}`}
                      initial={{ opacity: 0, filter: "blur(8px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(8px)" }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col pt-0 h-full w-full"
                    >
                      <h2 className="text-[48px] md:text-[56px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-4 max-w-[540px]">
                        {track.title}
                      </h2>

                      <div className="text-[#8DC63F] font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        {weekCopy.framedDescription}
                      </div>

                      <p className="text-[15px] leading-[1.6] text-black/80 font-medium max-w-[440px] mb-8">
                        {weekCopy.bodyDescription}
                      </p>

                      <div className="mt-auto">
                        <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-black/80 mb-3 ml-1">
                          НЕДЕЛЬНЫЙ РИТМ <span className="text-black/30 font-normal tracking-widest lowercase ml-2">11—17 ноября 2024</span>
                        </div>
                        
                        <div className="flex border border-black/10 w-full max-w-[720px] bg-black/10 gap-px rounded-[1px] overflow-hidden shadow-none">
                          {weeklyRhythm.map((item, idx) => {
                            const isWorkshop = item.type === 'workshop';
                            const isCore = item.type === 'core';
                            const isEmpty = item.type === 'empty';
                            const displayTask = isWorkshop ? "MAIN ВОРКШОП" : item.task;
                            
                            return (
                            <div key={`cal-redesign-${idx}`} 
                              className={cn(
                                "flex-1 flex flex-col px-2 pt-2 pb-[3px] relative transition-colors h-[68px]",
                                isWorkshop ? "bg-[#8DC63F]" : isCore ? "bg-black" : isEmpty ? "bg-white/70 backdrop-blur-sm" : "bg-white"
                              )}
                            >
                               <div className="flex flex-col items-start mb-0">
                                 <span className={cn("text-[8.5px] font-mono font-black tracking-widest leading-none", 
                                   isWorkshop ? "text-white/80" : isCore ? "text-white/50" : "text-black/40"
                                 )}>
                                   {item.day}
                                 </span>
                                 
                                 {item.time && (
                                   <div className={cn("text-[7.5px] font-mono font-bold tracking-widest leading-[1.15] mt-[3px] whitespace-nowrap", 
                                     isWorkshop ? "text-white/80" : "text-[#8DC63F]"
                                   )}>
                                     {item.time}
                                   </div>
                                 )}
                               </div>

                               <div className={cn("font-black uppercase mt-auto leading-[0.95] font-sans text-left flex flex-col tracking-tight", 
                                 isWorkshop || isCore ? "text-white text-[10px] tracking-[0.02em]" : 
                                 isEmpty ? "opacity-0 text-[9px]" : "text-black/70 text-[9px]"
                               )}>
                                 {displayTask.includes(' ') && (isCore || isWorkshop) 
                                   ? displayTask.split(' ').map((w, i) => <span key={i}>{w}</span>) 
                                   : displayTask}
                               </div>
                            </div>
                          )})}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Advanced Info Area - SOLID BLACK BLOCK */}
                <div className="w-full lg:w-[320px] shrink-0 relative bg-black shadow-none h-full border-l border-white/10 z-20 pb-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`v5-restore-adv-crossfade-${activeWeek}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-x-0 inset-y-0 h-full w-full flex flex-col items-start p-10 pt-12 pb-[6.5rem]"
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                           <span className="text-[14px] text-white leading-none">✻</span>
                           <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50">ADVANCED TRACK</span>
                        </div>
                        <h4 className="text-[32px] md:text-[36px] font-black uppercase text-white tracking-tighter leading-[0.85] mb-6 max-w-[280px]">
                          {weekCopy.advancedTopic}
                        </h4>

                        <p className="text-[14px] leading-[1.6] text-white/60 font-medium max-w-[260px] pb-10">
                          {weekCopy.advancedDescription}
                        </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

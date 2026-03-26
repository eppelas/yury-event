import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV4 = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];
  const advanced = ADVANCED_TRACKS[activeWeek];

  const weeklyRhythm = [
    { day: 'ПН', task: 'ВОРКШОП', active: true },
    { day: 'ВТ', task: 'КОВОРКИНГ', active: true },
    { day: 'СР', task: 'ADV_TRACK', active: true, advanced: true },
    { day: 'ЧТ', task: '', active: false },
    { day: 'ПТ', task: 'ЛЕКЦИЯ', active: true },
    { day: 'СБ', task: 'Q&A', active: true },
    { day: 'ВС', task: '', active: false },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto py-12 px-8 font-sans">
      <div className="bg-white border border-black/10 flex flex-col lg:flex-row min-h-[580px] shadow-[0_2px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
        
        {/* Background Grid - Reduced transparency (0.03) and cleaned up */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '32px 32px' 
             }} />

        {/* BACKGROUND ILLUSTRATION (MorphSvg) - BRIGHTER & SMOOTHER MORPHING */}
        <motion.div 
          animate={{
            scale: activeWeek === 3 ? 1.4 : 1.0,
            x: activeWeek === 3 ? 100 : 0,
            opacity: activeWeek === 3 ? 0.35 : 0.25, // Brighter
            right: activeWeek === 3 ? "0%" : "-5%",
            top: activeWeek === 3 ? "0%" : "-5%",
            width: activeWeek === 3 ? "100%" : "600px",
            height: activeWeek === 3 ? "100%" : "600px"
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute pointer-events-none mix-blend-multiply z-0"
        >
           <MorphSvg week={activeWeek} />
        </motion.div>

        {/* LEFT STRIPE: Module Selector */}
        <div className="w-full lg:w-[140px] shrink-0 border-r border-black/10 bg-[#FAFAFA] flex flex-row lg:flex-col relative z-20 overflow-hidden">
          {PROGRAM_TRACKS.map((t, idx) => {
            const isActive = activeWeek === idx;
            return (
              <button
                key={`v4-tab-${t.id}`}
                onClick={() => setActiveWeek(idx)}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center py-6 px-4 transition-all relative border-b border-black/[0.05] last:border-b-0",
                  isActive ? "bg-white" : "bg-transparent hover:bg-black/[0.02]"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="v4ActiveIndicator"
                    className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8DC63F]"
                  />
                )}
                <div className={cn("font-mono text-[9px] font-bold tracking-[0.2em] uppercase transition-colors mb-2", isActive ? "text-[#8DC63F]" : "text-black/40")}>
                   Неделя 
                </div>
                <div className={cn("font-mono text-[24px] font-black tracking-tighter leading-none", isActive ? "text-black" : "text-black/20")}>
                   0{idx + 1}
                </div>
              </button>
            )
          })}
        </div>

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col relative z-10 min-w-0">
          
          {/* Top Bar - Simplified border to avoid parallel lines */}
          <div className="flex items-center justify-between px-12 h-[64px] border-b border-black/5 bg-white/50 backdrop-blur-sm">
             <div className="flex items-center gap-4">
               <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-black">INTERNAL_SYSTEMS_SND.0{activeWeek + 1}</div>
               <div className="h-[1px] w-8 bg-black/20" />
               <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-black/60 uppercase">Syllabus.Module</div>
             </div>
             <div className="text-[10px] font-mono font-bold text-black/50 uppercase tracking-[0.15em]">
               {weekCopy.dateRange}
             </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row p-12 gap-12 min-h-[480px]">
             
             {/* Left Column (Main Content) - Elements closer together */}
             <div className="flex-1 min-w-0 flex flex-col justify-start">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={`v4-data-flush-${activeWeek}`}
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 10 }}
                   transition={{ duration: 0.3 }}
                 >
                    <div className="flex items-center gap-2 mb-4">
                       <div className="w-2 h-2 rounded-full bg-black/80" />
                       <span className="text-black/60 text-[10px] font-mono font-bold uppercase tracking-[0.25em]">MAIN TRACK</span>
                    </div>

                    <div className="text-[#8DC63F] font-mono text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
                       {weekCopy.framedDescription}
                    </div>
                    
                    <h2 className="text-[48px] md:text-[60px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-6 max-w-[540px]">
                       {track.title}
                    </h2>
                    
                    <p className="text-[15px] leading-[1.6] text-black/80 font-medium max-w-[480px] mb-8">
                       {weekCopy.bodyDescription}
                    </p>

                    {/* WEEKLY RHYTHM CALENDAR - HORIZONTAL & SHORTER */}
                    <div className="mt-4">
                       <div className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-black/40 mb-3 ml-1">НЕДЕЛЬНЫЙ РИТМ</div>
                       <div className="grid grid-cols-7 border border-black/10 w-full max-w-[620px] bg-white">
                          {weeklyRhythm.map((item, idx) => (
                            <div 
                              key={`v4-cal-real-${idx}`}
                              className={cn(
                                "flex flex-col h-[60px] border-r border-black/10 p-2 last:border-r-0",
                                item.active ? "bg-white" : "bg-black/[0.02]"
                              )}
                            >
                               <div className="flex justify-between items-start mb-0.5">
                                 <span className={cn("text-[10px] font-bold font-mono", item.active ? "text-black/60" : "text-black/20")}>
                                   {item.day}
                                 </span>
                                 {item.advanced && <div className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />}
                               </div>
                               <div className={cn(
                                 "text-[9px] font-bold uppercase leading-tight mt-auto font-mono tracking-tighter",
                                 item.active ? "text-black/80" : "text-transparent",
                                 item.advanced ? "text-[#8DC63F]" : ""
                               )}>
                                 {item.task}
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
             </div>

             {/* Right Column (Advanced Track - INTEGRATED ENTITY) */}
             <div className="w-full lg:w-[320px] shrink-0 relative flex flex-col">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={`v4-adv-flush-${activeWeek}`}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.4 }}
                   className="flex-1 flex flex-col items-end text-right pt-0"
                 >
                    <div className="bg-[#FAFAFA] border border-black/10 p-8 rounded-[8px] flex-1 flex flex-col items-end justify-start w-full transition-all group-hover:border-black/20">
                      
                      {/* Integrated Advanced Track Tag - Dot at start */}
                      <div className="flex items-center justify-end gap-2 mb-8">
                        <motion.div 
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-2 h-2 rounded-full bg-[#8DC63F]" 
                        />
                        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-black/60">ADVANCED TRACK</span>
                      </div>

                      <h4 className="text-[28px] font-black uppercase text-black/80 tracking-tighter leading-none mb-4">
                         {advanced.title}
                      </h4>

                      <p className="text-[13px] leading-[1.6] text-black/60 font-medium mb-12 max-w-[240px]">
                         {advanced.description}
                      </p>

                      <div className="mt-auto">
                         <div className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-black/40 mb-1">CURATOR_ID</div>
                         <div className="text-[14px] font-black text-black/70 font-mono italic tracking-tighter">
                            {advanced.speaker}
                         </div>
                      </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>

          {/* Footer Bar */}
          <div className="px-12 h-[56px] border-t border-black/5 bg-[#FAFAFA]/80 flex items-center justify-between relative z-10">
             <div className="flex gap-6">
                {["ЛЕКЦИЯ", "ВОРКШОП", "КЕЙС-СТАДИ"].map(tag => (
                  <div key={tag} className="text-[9px] font-mono font-bold tracking-[0.2em] text-black/40 border-b border-black/20 border-dotted">
                    {tag}
                  </div>
                ))}
             </div>
             <div className="text-[10px] font-mono text-black/30 uppercase tracking-[0.25em] font-bold">
               STATUS: SYSTEM_READY_LAB
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

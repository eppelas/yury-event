import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUi = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];
  const advanced = ADVANCED_TRACKS[activeWeek];

  const weeklyRhythm = [
    { day: 'ПН', task: 'ВОРКШОП', active: true },
    { day: 'ВТ', task: 'КОВОРКИНГ', active: true },
    { day: 'СР', task: 'ADVANCED TRACK', active: true, advanced: true },
    { day: 'ЧТ', task: '', active: false },
    { day: 'ПТ', task: 'ЛЕКЦИЯ', active: true },
    { day: 'СБ', task: 'Q&A SESSION', active: true },
    { day: 'ВС', task: '', active: false },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto py-16 px-4 md:px-8 font-sans">
      <div className="bg-white rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-black/10 mx-auto max-w-[1100px] relative">
        
        {/* Background Grid Layer */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* BACKGROUND ILLUSTRATION (Higher/Centered) */}
        <div className={cn(
          "absolute pointer-events-none opacity-[0.14] mix-blend-multiply transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 flex items-center justify-center",
          activeWeek === 3 
            ? "inset-0 w-full h-full scale-[1.1] translate-x-20" 
            : "right-[5%] top-[15%] w-[800px] h-[800px]" // Moved higher and more left
        )}>
           <MorphSvg week={activeWeek} />
        </div>

        <div className="px-10 py-10 relative z-10 min-h-[500px] flex flex-col">
           <AnimatePresence mode="wait">
             <motion.div
               key={`tech-v1-slide-refined-${activeWeek}`}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
               className="flex-1 flex flex-col"
             >
               {/* TOP META BAR */}
               <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-[#8DC63F]" />
                     <div className="text-black font-mono font-bold tracking-[0.3em] uppercase text-[11px]">
                       DATA_MODULE // 0{activeWeek + 1}
                     </div>
                  </div>
                  <div className="bg-black/5 text-[#A0A0A0] px-4 py-1.5 rounded-sm text-[10px] font-mono font-bold tracking-[0.1em] uppercase border border-black/5">
                    {weekCopy.dateRange}
                  </div>
               </div>

               {/* MAIN CONTENT GRID */}
               <div className="grid grid-cols-12 gap-0 relative flex-1">
                  
                  {/* LEFT: MAIN TRACK */}
                  <div className="col-span-12 lg:col-span-8 pr-16 relative">
                     {/* TAG Row Aaligned with Advanced Track tag height */}
                     <div className="flex items-center gap-2 mb-8 h-[20px]">
                        <div className="w-2 h-2 rounded-full bg-[#333]" />
                        <span className="text-black/30 text-[10px] font-mono font-bold uppercase tracking-[0.25em]">MAIN TRACK</span>
                     </div>
                     
                     <h2 className="text-[54px] md:text-[68px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-8">
                        {track.title}
                     </h2>

                     <h3 className="text-[#8DC63F] text-[20px] md:text-[24px] font-black uppercase tracking-tight mb-8">
                        {weekCopy.framedDescription}
                     </h3>

                     <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#555] font-medium max-w-xl mb-12">
                        {weekCopy.bodyDescription}
                     </p>

                     {/* WEEKLY RHYTHM */}
                     <div className="mt-12">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-black/20 mb-6 font-mono">НЕДЕЛЬНЫЙ РИТМ</div>
                        <div className="grid grid-cols-7 border-t border-l border-black/[0.1] w-full max-w-[640px] bg-white">
                           {weeklyRhythm.map((item, idx) => (
                             <div 
                               key={`v1-cal-res-${idx}`}
                               className={cn(
                                 "flex flex-col h-[100px] border-r border-b border-black/[0.1] p-3 relative",
                                 item.active ? "bg-white" : "bg-black/[0.01]",
                                 item.advanced ? "bg-white" : ""
                               )}
                             >
                                <div className="flex justify-between items-start mb-2">
                                  <span className={cn("text-[9px] font-mono font-bold tracking-tighter", item.active ? "text-black/60" : "text-black/10")}>
                                    {item.day}
                                  </span>
                                  {item.advanced && <div className="text-[14px] font-black text-[#8DC63F] leading-none mt-[-2px]">*</div>}
                                </div>
                                <div className={cn(
                                  "text-[8px] font-mono font-bold uppercase leading-[1.2] mt-auto tracking-tighter",
                                  item.active ? "text-black/60" : "text-transparent",
                                  item.advanced ? "text-[#8DC63F]" : ""
                                )}>
                                  {item.task}
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* RIGHT: ADVANCED TRACK with Gradient Box */}
                  <div className="col-span-12 lg:col-span-4 pt-12 lg:pt-0 text-right flex flex-col items-end">
                     <div className="bg-gradient-to-b from-white/80 via-white/50 to-white/10 border border-black/10 p-6 lg:p-10 rounded-[16px] backdrop-blur-[2px] flex flex-col items-end w-full flex-1 justify-center relative">
                        {/* TAG MOVED INSIDE */}
                        <div className="flex items-center gap-2 mb-8 justify-end">
                           <span className="text-black/30 text-[10px] font-mono font-bold uppercase tracking-[0.25em]">ADVANCED TRACK</span>
                           <div className="text-[16px] font-black text-[#8DC63F] leading-none mb-1">*</div>
                        </div>
                        
                        <h4 className="text-[32px] md:text-[36px] font-black uppercase text-black/40 tracking-tighter leading-[0.95] mb-6">
                           {advanced.title}
                        </h4>

                        <p className="text-[13px] leading-[1.6] text-black/40 font-medium max-w-[240px]">
                           {advanced.description}
                        </p>
                     </div>
                  </div>
               </div>
             </motion.div>
           </AnimatePresence>
        </div>

        {/* BOTTOM SWITCHER - Labels fixed to НЕДЕЛя + 01 */}
        <div className="grid w-full h-[120px] border-t border-black/10 bg-[#FAFAFA] z-20" 
             style={{ gridTemplateColumns: `repeat(${PROGRAM_TRACKS.length}, 1fr)` }}>
           {PROGRAM_TRACKS.map((t, idx) => {
             const isActive = activeWeek === idx;
             return (
               <button
                 key={`v1-tab-side-final-${t.id}`}
                 onClick={() => setActiveWeek(idx)}
                 className={cn(
                   "relative flex flex-col items-center justify-center transition-all duration-300 border-r border-black/[0.05] last:border-r-0",
                   isActive ? "bg-white" : "bg-transparent hover:bg-black/[0.01]"
                 )}
               >
                 {isActive && (
                   <motion.div 
                     layoutId="v1ActiveIndicatorRefined"
                     className="absolute top-0 left-0 right-0 h-[6px] bg-[#8DC63F]"
                   />
                 )}
                 <div className={cn(
                   "font-mono text-[9px] tracking-[0.2em] font-bold uppercase mb-2 transition-all",
                   isActive ? "text-[#8DC63F]" : "text-[#D0D0D0]"
                 )}>
                   НЕДЕЛя
                 </div>
                 <div className={cn(
                   "text-[32px] md:text-[36px] tracking-tighter leading-none font-black transition-all duration-300 font-mono", 
                   isActive ? "text-black" : "text-[#E8E8E8]"
                 )}>
                   0{idx + 1}
                 </div>
               </button>
             );
           })}
        </div>
      </div>
    </div>
  );
};

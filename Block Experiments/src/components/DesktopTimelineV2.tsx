import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS, PROGRAM_WEEKLY_RHYTHM } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTimelineV2 = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];
  const advanced = ADVANCED_TRACKS[activeWeek];

  return (
    <div className="w-full max-w-[1340px] mx-auto py-16 px-4 md:px-8 font-sans">
      <div className="flex items-start gap-12 lg:gap-20">
        
        {/* Left Side: Master Timeline Navigation (UNCHANGED) */}
        <div className="w-[300px] shrink-0 sticky top-12 pt-4 h-[600px]">
           <div className="absolute left-[19px] top-[40px] bottom-[40px] w-[2px] bg-black/5 z-0" />

           <div className="space-y-4">
             {PROGRAM_TRACKS.map((t, idx) => {
               const isActive = activeWeek === idx;
               const weekData = PROGRAM_WEEK_COPY[t.id];

               return (
                 <button
                   key={`timeline-nav-v2-${t.id}`}
                   onClick={() => setActiveWeek(idx)}
                   className="relative w-full text-left group flex items-center gap-6 p-2 z-10"
                 >
                   <div className="relative flex items-center justify-center shrink-0">
                     <div className={cn(
                       "w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 z-10",
                       isActive ? "bg-white border-2 border-[#8DC63F]" : "bg-[#F4F4F4] border-2 border-transparent group-hover:bg-[#EAEAEA]"
                     )}>
                       {isActive && <div className="w-2.5 h-2.5 bg-[#8DC63F] rounded-full" />}
                     </div>
                     {isActive && (
                       <motion.div 
                         layoutId="active-halo-v2"
                         className="absolute inset-0 rounded-full border border-[#8DC63F]/20 scale-[2.5]"
                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
                       />
                     )}
                   </div>

                   <div>
                     <div className={cn(
                       "font-mono text-[10px] uppercase font-bold tracking-[0.2em] transition-colors mb-1",
                       isActive ? "text-[#8DC63F]" : "text-black/30 group-hover:text-black/50"
                     )}>
                       Неделя 0{idx + 1}
                     </div>
                     <div className={cn(
                       "text-[15px] md:text-[18px] font-black uppercase tracking-tight transition-colors leading-[1.1]",
                       isActive ? "text-black" : "text-black/50 group-hover:text-black/80"
                     )}>
                       {t.title}
                     </div>
                     <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-black/30 mt-1 font-bold">
                       {weekData.dateRange}
                     </div>
                   </div>
                 </button>
               )
             })}
           </div>
        </div>

        {/* Right Side: Detail Content Area (SQUARE STYLE) */}
        <div className="flex-1 bg-white border border-black/10 shadow-none p-12 lg:p-16 relative overflow-hidden min-h-[720px] rounded-none">
           
           {/* SUBTLE GRID from V1 (0.015 opacity) */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-10" 
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

           <div className="absolute right-[-10%] top-[-5%] w-[800px] h-[800px] opacity-60 mix-blend-multiply pointer-events-none z-0">
             <MorphSvg week={activeWeek} />
           </div>

           <AnimatePresence mode="wait">
             <motion.div
               key={`timeline-v2-detail-${activeWeek}`}
               initial={{ opacity: 0, filter: "blur(10px)" }}
               animate={{ opacity: 1, filter: "blur(0px)" }}
               exit={{ opacity: 0, filter: "blur(10px)" }}
               transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative z-20 h-full flex flex-col"
             >
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 px-0 py-2 text-[#A0A0A0] text-[10px] font-bold tracking-[0.25em] uppercase mb-10 border-b border-black/10">
                    {weekCopy.dateRange}
                  </div>

                  <h2 className="text-[52px] md:text-[68px] font-black uppercase tracking-tighter leading-[0.82] text-black mb-6 max-w-[700px]">
                    {track.title}
                  </h2>

                  <h3 className="text-[10px] font-mono uppercase font-black tracking-[0.3em] text-[#8DC63F] mb-6">
                    {weekCopy.framedDescription}
                  </h3>

                  <p className="text-[17px] leading-[1.6] text-black/80 font-medium max-w-xl mb-12">
                    {weekCopy.bodyDescription}
                  </p>
                </div>

                <div className="mt-auto grid grid-cols-1 xl:grid-cols-2 gap-16 border-t border-black/5 pt-12">
                  
                  {/* Calendar Rhythm: SQUARE, COMPACT, NO GAPS */}
                  <div>
                    <div className="text-[10px] uppercase font-black font-mono tracking-[0.4em] text-black/30 mb-6">WEEKLY_RHYTHM</div>
                    <div className="grid grid-cols-3 gap-px bg-black/10 border border-black/10 overflow-hidden rounded-none">
                      {PROGRAM_WEEKLY_RHYTHM.map((evt) => {
                        const isAdv = evt.type === 'advanced';
                        const isOff = evt.type === 'off';
                        return (
                          <div
                            key={`dt-v2-cal-${evt.day}`}
                            className={cn(
                              "p-3 flex flex-col justify-between min-h-[52px] relative rounded-none",
                              isOff ? "bg-[#F9F9F9]" : "bg-white"
                            )}
                          >
                            <div className={cn("text-[9px] font-black uppercase mb-2", isOff ? "text-black/10" : "text-black/30")}>
                              {evt.day}
                            </div>
                            <div className={cn("text-[10px] font-black uppercase leading-[1.1] tracking-tight", 
                                isOff ? "text-transparent" : "text-black/80",
                                isAdv ? "text-[#8DC63F]" : ""
                            )}>
                              {evt.label || " "}
                            </div>
                            {/* Wednesday star matching side-track star style */}
                            {isAdv && <div className="absolute top-2 right-2 text-[14px] font-black text-[#8DC63F] font-sans leading-none select-none">*</div>}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Advanced Track: RIGHT ALIGNED, TRANSPARENT */}
                  <div className="bg-white/5 backdrop-blur-[6px] rounded-none p-10 border border-black/5 text-right flex flex-col items-end">
                     <div className="flex items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#A0A0A0] relative">
                        <span className="text-[20px] font-black text-[#8DC63F] leading-none absolute left-[-16px] top-[64%] -translate-y-1/2 select-none font-sans font-black">*</span>
                        <span className="pl-1 uppercase">ADVANCED TRACK</span>
                     </div>
                     
                     <h5 className="font-black text-[24px] md:text-[28px] uppercase mb-4 text-black tracking-tighter leading-none">
                       {advanced.title}
                     </h5>
                     
                     <p className="text-[14px] leading-[1.5] text-black/60 font-medium mb-10 max-w-[260px]">
                       {advanced.description}
                     </p>
                     
                     <div className="mt-auto">
                       <span className="block text-[8px] tracking-[0.3em] font-mono uppercase text-black/30 font-bold mb-1">CURATOR_ID</span>
                       <span className="text-black/80 font-black text-[16px] font-mono uppercase tracking-tighter">{advanced.speaker}</span>
                     </div>
                  </div>

                </div>
                
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

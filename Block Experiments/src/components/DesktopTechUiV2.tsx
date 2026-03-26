import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV2 = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];
  const advanced = ADVANCED_TRACKS[activeWeek];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-16 px-4 md:px-8 font-sans">
      <div className="bg-white rounded-[40px] flex flex-col overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-black/5 mx-auto max-w-[1000px] relative">
        
        <div className={cn(
          "absolute pointer-events-none opacity-20 mix-blend-normal z-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          activeWeek === 3 
            ? "right-[-15%] top-[-25%] w-[900px] h-[900px]" 
            : "right-[-5%] top-[-5%] w-[600px] h-[600px]"
        )}>
           <MorphSvg week={activeWeek} />
        </div>

        <div className="px-12 pt-12 pb-16 relative z-10 flex-1">
           <AnimatePresence mode="wait">
             <motion.div
               key={`tech-ui-v2-blur-${activeWeek}`}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
             >
               <div className="flex items-center justify-between mb-16">
                 <div className="text-[#8DC63F] font-bold tracking-[0.2em] uppercase text-[12px] md:text-[14px]">
                   НЕДЕЛЯ 0 0 {activeWeek + 1}
                 </div>
                 <div className="bg-[#F4F4F4] text-[#A0A0A0] px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase">
                   {weekCopy.dateRange.replace('-', '—')}
                 </div>
               </div>

               <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
                 
                 <div className="flex-1 max-w-[480px]">
                   {/* ANIMATION V2: Staggered Blur Reveal */}
                   <motion.div 
                     initial={{ opacity: 0, filter: "blur(10px)" }}
                     animate={{ opacity: 1, filter: "blur(0px)" }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                   >
                     <div className="flex items-center gap-2 mb-4">
                       <span className="w-[5px] h-[5px] rounded-full bg-[#555] shrink-0" />
                       <span className="text-[#A0A0A0] text-[9px] font-bold uppercase tracking-[0.2em]">MAIN TRACK</span>
                     </div>
                     
                     <h2 className="text-[56px] md:text-[64px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-6" style={{ textWrap: 'balance' }}>
                       {track.title}
                     </h2>
                   </motion.div>

                   <motion.h3 
                     initial={{ opacity: 0, filter: "blur(8px)", y: 5 }}
                     animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                     transition={{ duration: 0.6, delay: 0.25 }}
                     className="text-[#8DC63F] text-[20px] md:text-[24px] font-black uppercase tracking-tight mb-6" style={{ textWrap: 'balance' }}
                   >
                     {weekCopy.framedDescription}
                   </motion.h3>

                   <motion.p 
                     initial={{ opacity: 0, filter: "blur(5px)", y: 5 }}
                     animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     className="text-[14px] md:text-[15px] leading-[1.6] text-[#444] font-medium max-w-md"
                   >
                     {weekCopy.bodyDescription}
                   </motion.p>
                 </div>

                 <motion.div 
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="relative mt-8 lg:mt-0 w-[400px] shrink-0 lg:ml-auto p-8 rounded-[24px]"
                 >
                    <div className="flex items-center gap-1.5 mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">
                       <span className="text-[12px] text-[#A0A0A0]">✻</span>
                       <span>ADVANCED TRACK</span>
                    </div>
                    
                    <h4 className="text-[28px] md:text-[32px] font-black uppercase text-black/80 tracking-tighter leading-[1.0] mb-4">
                      {advanced.title}
                    </h4>
                    
                    <p className="text-[13px] leading-[1.6] text-black/50 font-medium mb-8 max-w-[280px]">
                      {advanced.description}
                    </p>
                    
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B0B0B0] mb-1">
                        СПИКЕР
                      </div>
                      <div className="text-[14px] font-bold text-[#666]">
                        {advanced.speaker}
                      </div>
                    </div>
                 </motion.div>

               </div>
             </motion.div>
           </AnimatePresence>
        </div>

        <div className="grid grid-cols-4 w-full h-[100px] border-t border-black/5 bg-[#FAFAFA] z-20 relative">
          {PROGRAM_TRACKS.map((t, i) => {
            const isActive = activeWeek === i;
            return (
              <button
                key={`tab-${t.id}`}
                onClick={() => setActiveWeek(i)}
                className={cn(
                  "relative flex flex-col justify-center items-center text-center transition-colors border-r border-black/5 last:border-r-0",
                  isActive ? "bg-white" : "bg-transparent hover:bg-black/[0.01]"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTabBorderTop"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#8DC63F]"
                  />
                )}
                <div className="font-mono text-[9px] tracking-[0.2em] font-bold uppercase text-[#A0A0A0] mb-1">
                  MODULE //
                </div>
                <div className="flex items-baseline gap-1.5 font-mono">
                  <span className={cn("text-[20px] md:text-[24px] tracking-tight transition-colors", isActive ? "font-black text-black" : "font-semibold text-black/30")}>
                    0{i + 1}
                  </span>
                  <span className={cn("text-[9px] md:text-[10px] tracking-[0.15em] transition-colors uppercase", isActive ? "font-bold text-[#8DC63F]" : "font-bold text-black/30")}>
                    WEEK
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV3 = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];
  const advanced = ADVANCED_TRACKS[activeWeek];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-16 px-4 md:px-8 font-sans">
      <div className="bg-[#F8F9F8] rounded-[40px] flex flex-col overflow-hidden relative shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-black/5 mx-auto max-w-[1020px] p-2">
        
        <div className="flex w-full h-[100px] mb-2 rounded-[32px] overflow-hidden bg-[#FAFAFA]/50 gap-0.5">
           {PROGRAM_TRACKS.map((t, i) => {
             const isActive = activeWeek === i;
             return (
               <button
                 key={`v3-tab-${t.id}`}
                 onClick={() => setActiveWeek(i)}
                 className={cn(
                   "flex-1 flex flex-col justify-center items-center text-center transition-all",
                   isActive ? "bg-white shadow-sm" : "bg-transparent hover:bg-black/[0.01]"
                 )}
               >
                 <div className={cn(
                   "font-mono text-[14px] md:text-[18px] tracking-tight transition-colors mb-1",
                   isActive ? "text-[#8DC63F] font-black" : "text-[#D0D0D0] font-bold"
                 )}>
                   0{i + 1}
                 </div>
                 <div className={cn(
                   "font-mono text-[9px] md:text-[10px] tracking-[0.2em] transition-colors uppercase",
                   isActive ? "text-[#8DC63F] font-bold" : "text-[#D0D0D0] font-bold"
                 )}>
                   неделя
                 </div>
               </button>
             )
           })}
        </div>

        <div className="bg-white rounded-[32px] p-12 relative overflow-hidden flex flex-col min-h-[640px]">
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

           <AnimatePresence mode="wait">
             <motion.div
               key={`tech-v3-lift-${activeWeek}`}
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -15 }}
               transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
               className="relative z-10 flex flex-col flex-1"
             >
               <div className="flex items-center justify-between mb-12">
                 <div className="text-[#8DC63F] font-black tracking-widest uppercase text-[16px] font-mono">
                   НЕДЕЛЯ 0{activeWeek + 1}
                 </div>
                 <div className="text-black/30 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                   {weekCopy.dateRange}
                 </div>
               </div>

               <div className="max-w-[700px] mb-8">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#333]" />
                    <span className="text-black/30 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">MAIN TRACK</span>
                  </div>
                  
                  <div className="text-black/40 font-mono text-[14px] font-bold uppercase tracking-[0.25em] mb-4">
                     {weekCopy.framedDescription}
                  </div>

                  <h2 className="text-[52px] md:text-[72px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-8 font-mono">
                     {track.title}
                  </h2>

                  <p className="text-[14px] md:text-[16px] leading-[1.6] text-black/50 font-medium font-mono max-w-[500px]">
                     {weekCopy.bodyDescription}
                  </p>
               </div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-auto ml-auto w-full max-w-[500px] bg-[#F4F5F4] rounded-[24px] p-8 border border-black/5 relative overflow-hidden"
               >
                  <div className="absolute right-0 top-0 w-[300px] h-[300px] opacity-[0.4] pointer-events-none mix-blend-multiply">
                     <MorphSvg week={activeWeek} />
                  </div>

                  <div className="relative z-10 text-right">
                    <div className="flex items-center justify-end gap-1.5 mb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-black/20 font-mono">
                       <span className="text-[12px] text-[#8DC63F]">✻</span>
                       <span>ADVANCED TRACK</span>
                    </div>
                    
                    <h4 className="text-[32px] md:text-[40px] font-black uppercase text-black/80 tracking-tighter leading-[1.0] mb-4 font-mono">
                      {advanced.title}
                    </h4>
                    
                    <p className="text-[13px] leading-[1.6] text-black/40 font-bold mb-10 max-w-[340px] ml-auto">
                      {advanced.description}
                    </p>
                    
                    <div className="flex flex-col items-end">
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/20 mb-1 font-mono">
                        СПИКЕР
                      </div>
                      <div className="text-[14px] font-bold text-black/50 font-mono">
                        {advanced.speaker}
                      </div>
                    </div>
                  </div>
               </motion.div>

             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

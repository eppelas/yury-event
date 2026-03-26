import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS, PROGRAM_WEEKLY_RHYTHM } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTimeline = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];
  const advanced = ADVANCED_TRACKS[activeWeek];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-16 px-4 md:px-8 font-sans">
      <div className="flex items-start gap-12 lg:gap-20">
        
        {/* Left Side: Master Timeline Navigation */}
        <div className="w-[300px] shrink-0 sticky top-12 pt-4">
           {/* Vertical Line */}
           <div className="absolute left-[19px] top-[40px] bottom-[40px] w-[2px] bg-black/5 z-0" />

           <div className="space-y-4">
             {PROGRAM_TRACKS.map((t, idx) => {
               const isActive = activeWeek === idx;
               const weekData = PROGRAM_WEEK_COPY[t.id];

               return (
                 <button
                   key={`timeline-nav-${t.id}`}
                   onClick={() => setActiveWeek(idx)}
                   className="relative w-full text-left group flex items-center gap-6 p-2 z-10"
                 >
                   {/* Timeline Node */}
                   <div className="relative flex items-center justify-center shrink-0">
                     <div className={cn(
                       "w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 z-10",
                       isActive ? "bg-white border-2 border-[#8DC63F]" : "bg-[#F4F4F4] border-2 border-transparent group-hover:bg-[#EAEAEA]"
                     )}>
                       {isActive && <div className="w-2.5 h-2.5 bg-[#8DC63F] rounded-full" />}
                     </div>
                     {isActive && (
                       <motion.div 
                         layoutId="active-halo"
                         className="absolute inset-0 rounded-full border border-[#8DC63F]/20 scale-[2.5]"
                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
                       />
                     )}
                   </div>

                   {/* Label */}
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

        {/* Right Side: Detail Content Area */}
        <div className="flex-1 bg-white rounded-[32px] border border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-10 lg:p-12 relative overflow-hidden min-h-[500px]">
           {/* Very subtle morph SVG strictly as an ambient background element */}
           <div className="absolute right-[-20%] bottom-[-20%] w-[800px] h-[800px] opacity-10 mix-blend-multiply pointer-events-none z-0">
             <MorphSvg week={activeWeek} />
           </div>

           <AnimatePresence mode="wait">
             <motion.div
               key={`timeline-detail-${activeWeek}`}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
               className="relative z-10 h-full flex flex-col justify-between"
             >
               <div>
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAFAFA] rounded-full text-[#A0A0A0] text-[10px] font-bold tracking-[0.1em] uppercase mb-10">
                   {weekCopy.dateRange}
                 </div>

                 <h2 className="text-[48px] md:text-[56px] font-black uppercase tracking-tighter leading-[0.9] text-black mb-6 max-w-[600px]">
                   {track.title}
                 </h2>

                 <h3 className="text-[20px] md:text-[24px] uppercase font-bold tracking-tight text-[#8DC63F] mb-6 max-w-lg">
                   {weekCopy.framedDescription}
                 </h3>

                 <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#555] font-medium max-w-xl mb-12">
                   {weekCopy.bodyDescription}
                 </p>
               </div>

               <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 border-t border-black/5 pt-10">
                 
                 {/* Calendar Rhythm block */}
                 <div className="relative z-10">
                   <div className="text-[10px] uppercase font-bold tracking-[0.16em] text-black/30 mb-6">Недельный ритм</div>
                   <div className="grid grid-cols-3 gap-2 relative">
                     {PROGRAM_WEEKLY_RHYTHM.map((evt) => {
                       const isAdv = evt.type === 'advanced';
                       const isOff = evt.type === 'off';
                       return (
                         <div
                           key={`dt-cal-${evt.day}`}
                           className={cn(
                             "rounded-[12px] border p-3 flex flex-col justify-between min-h-[70px] relative",
                             isAdv ? "bg-black/[0.02] border-black/5" : isOff ? "bg-transparent border-black/[0.02]" : "bg-white border-black/10 shadow-sm"
                           )}
                         >
                           <div className={cn("text-[9px] font-black uppercase mb-2", isOff ? "text-black/30" : "text-black/40")}>
                             {evt.day}
                           </div>
                           <div className="text-[10px] font-bold uppercase leading-[1.2] text-black/80">
                             {evt.label || " "}
                           </div>
                           {isAdv && (
                             <>
                               <div className="absolute top-2 right-2 text-[10px] font-bold text-[#8DC63F]">*</div>
                               {/* DASHED LINE TO ADVANCED TRACK */}
                               <div className="hidden xl:block absolute top-[50%] right-[-48px] w-[48px] border-b-2 border-dashed border-[#8DC63F]/50 pointer-events-none z-0" />
                             </>
                           )}
                         </div>
                       );
                     })}
                   </div>
                 </div>

                 {/* Advanced Track block */}
                 <div className="bg-[#F8F9F8] rounded-[24px] p-8 border border-black/5 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-1.5 mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">
                       <span className="text-[14px] leading-none text-[#8DC63F]">✻</span>
                       <span>ADVANCED TRACK</span>
                    </div>
                    
                    <h5 className="font-black text-[20px] md:text-[22px] uppercase mb-3 text-[#444] leading-[1.1] tracking-tight">
                      {advanced.title}
                    </h5>
                    
                    <p className="text-[13px] leading-[1.6] text-black/50 font-medium">
                      {advanced.description}
                    </p>
                 </div>

               </div>
               
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

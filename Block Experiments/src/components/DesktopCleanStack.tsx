import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS, PROGRAM_WEEKLY_RHYTHM } from '../data';
import { cn } from '../lib/utils';

import { MorphSvg } from './MorphSvg';

export const DesktopCleanStack = () => {
  const [activeWeek, setActiveWeek] = useState<number | null>(0);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 py-8">
      {PROGRAM_TRACKS.map((track, idx) => {
        const isActive = activeWeek === idx;
        const weekCopy = PROGRAM_WEEK_COPY[track.id];
        const advanced = ADVANCED_TRACKS[idx];
        
        return (
          <div
            key={`clean-stack-${track.id}`}
            className={cn(
              "relative rounded-[32px] md:rounded-[40px] px-8 py-8 md:px-10 md:py-10 transition-all duration-400 overflow-hidden cursor-pointer",
              isActive
                ? "bg-white shadow-[0_8px_32px_rgba(0,0,0,0.03)]"
                : "bg-white/40 md:bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setActiveWeek((prev) => (prev === idx ? null : idx))}
          >
            {/* Morphing Background for Active State */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-[-150px] top-[-150px] w-[500px] h-[500px] pointer-events-none opacity-[0.15] mix-blend-multiply transition-opacity duration-1000"
                >
                  <MorphSvg week={idx} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative z-10 flex items-center gap-6 md:gap-8">
              {/* Box Indicator */}
              <div
                className={cn(
                  "w-[80px] h-[80px] md:w-[88px] md:h-[88px] rounded-[24px] flex flex-col items-center justify-center shrink-0 font-sans transition-colors duration-400",
                  isActive ? "bg-black text-white" : "bg-[#F0F0F0] text-[#B0B0B0]"
                )}
              >
                <span className="text-[8px] uppercase tracking-[0.25em] leading-none mb-1 font-extrabold">неделя</span>
                <span className="text-[36px] md:text-[44px] leading-none font-black tracking-tighter">{idx + 1}</span>
              </div>
              
              {/* Header Title */}
              <div className="min-w-0">
                <h3 className={cn(
                  "text-[32px] md:text-[44px] lg:text-[48px] uppercase tracking-tighter font-black leading-[1] transition-colors duration-400",
                  isActive ? "text-[#111]" : "text-[#A0A0A0]"
                )} style={{ textWrap: 'balance' }}>
                  {track.title}
                </h3>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="relative z-10"
                >
                  <div className="pt-10 md:pt-12">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                      {/* Main Track Left */}
                      <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#A0A0A0] mb-5 bg-[#F4F4F4] px-3 py-1.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
                          <span>Main Track</span>
                        </div>
                        <h4 className="text-[18px] md:text-[20px] uppercase font-black tracking-tight text-[#8DC63F] mb-4" style={{ textWrap: 'balance' }}>
                          {weekCopy.framedDescription}
                        </h4>
                        <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#444] font-medium max-w-xl">
                          {weekCopy.bodyDescription}
                        </p>
                        
                        {/* Weekly Rhythm Compact Calendar Grid */}
                        <div className="mt-8 max-w-xl">
                          <div className="text-[10px] uppercase font-bold font-sans tracking-[0.16em] text-black/30 mb-3">Недельный ритм</div>
                          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 md:gap-2">
                            {PROGRAM_WEEKLY_RHYTHM.map((day) => {
                              const isAdvanced = day.type === 'advanced';
                              const isOff = day.type === 'off';
                              return (
                                <div
                                  key={`rhythm-${day.day}`}
                                  className={cn(
                                    "relative rounded-[10px] border px-2 py-2 text-[9px] uppercase tracking-[0.05em] min-h-[50px] font-sans flex flex-col",
                                    isAdvanced
                                      ? "bg-[#F3F3F3] border-black/10 text-black/60"
                                      : isOff
                                        ? "bg-transparent border-black/5 text-black/30"
                                        : "bg-white border-black/10 text-black/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]"
                                  )}
                                >
                                  {isAdvanced && (
                                    <span className="absolute right-1.5 top-1.5 text-[10px] leading-none font-bold text-[#8DC63F]">*</span>
                                  )}
                                  <div className={cn("font-black mb-1", isOff ? "opacity-50" : "opacity-40")}>{day.day}</div>
                                  <div className="font-semibold leading-[1.15]">{day.label || ' '}</div>
                                  
                                  {/* Minimal connecting line for advanced track (optional visual flair) */}
                                  {isAdvanced && (
                                    <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-[20px] h-px bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Advanced Track Right */}
                      <div className="w-full lg:w-[300px] shrink-0 lg:mt-0">
                        <div className="pl-6 border-l-[1.5px] border-[#F2F2F2] py-0.5">
                           <div className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-[#C0C0C0] mb-3">
                             <span className="leading-none text-[12px]">✻</span>
                             <span>Advanced Track</span>
                           </div>
                           <h5 className="text-[15px] md:text-[16px] leading-[1.2] font-black uppercase text-[#A0A0A0] mb-3">
                             {weekCopy.advancedTopic}
                           </h5>
                           <p className="text-[13px] leading-[1.6] text-[#B0B0B0] font-medium mb-6">
                             {weekCopy.advancedDescription}
                           </p>
                           <div className="uppercase tracking-[0.2em] font-sans text-[9px] font-bold text-[#C0C0C0] mb-1">
                             Спикер
                           </div>
                           <div className="text-[13px] font-bold text-[#A0A0A0]">{advanced.speaker}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

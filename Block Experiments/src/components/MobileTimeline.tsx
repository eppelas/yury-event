import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, PROGRAM_WEEKLY_RHYTHM, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const MobileTimeline = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([0]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const toggleCard = (idx: number) => {
    setExpandedIndexes((prev) => {
      const alreadyOpen = prev.includes(idx);
      const next = alreadyOpen ? [] : [idx];
      if (next.includes(idx) && !alreadyOpen) {
        window.setTimeout(() => {
          cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 120);
      }
      return next;
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto py-8 pr-2 font-sans text-[#181616] overflow-hidden">
      {/* Precision vertical line */}
      <div className="absolute left-[8px] md:left-[16px] top-[30px] bottom-[54px] w-[1.5px] bg-black/10 z-0" />
      
      {PROGRAM_TRACKS.map((track, idx) => {
        const weekCopy = PROGRAM_WEEK_COPY[track.id];
        const advanced = ADVANCED_TRACKS[idx];
        const isExpanded = expandedIndexes.includes(idx);
        const weekLabel = `НЕДЕЛЯ ${idx + 1}`;

        return (
          <article
            key={track.id}
            ref={(el) => { cardRefs.current[idx] = el; }}
            className="relative mb-6 z-10 flex gap-2 md:gap-5 items-stretch group"
          >
            {/* Timeline Dot container */}
            <div className="w-[16px] md:w-[32px] shrink-0 pt-0 flex justify-center z-20 relative">
              <div
                className={cn(
                  "mt-[28px] w-[14px] h-[14px] md:w-[16px] md:h-[16px] rounded-full flex items-center justify-center relative z-20 transition-all duration-300 shadow-[0_4px_12px_rgba(141,198,63,0.3)]",
                  isExpanded ? "border-[2px] border-[#8DC63F] bg-white ring-4 ring-[#8DC63F]/20" : "border-2 border-black/10 bg-white group-hover:border-[#8DC63F]/50"
                )}
              >
                <div className={cn("w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full transition-colors", isExpanded ? "bg-[#8DC63F]" : "bg-transparent group-hover:bg-[#8DC63F]/30")} />
              </div>
            </div>

            {/* Main Card Container */}
            <div
              className={cn(
                "relative flex-1 rounded-[32px] overflow-hidden transition-all duration-400 bg-white border border-black/[0.04]",
                isExpanded
                  ? "shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)]"
                  : "shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]"
              )}
            >
              <button
                type="button"
                onClick={() => toggleCard(idx)}
                className="relative z-30 w-full px-5 py-5 md:px-8 md:py-8 text-left cursor-pointer select-none group/btn"
              >
                <div className="mb-4 flex items-center justify-between gap-4 border-b border-black/[0.04] pb-4">
                  <div className="font-mono text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-black text-white bg-[#8DC63F] px-4 py-1.5 rounded-[12px] inline-flex items-center shadow-[0_4px_16px_rgba(141,198,63,0.25)] ring-1 ring-[#8DC63F]/20">
                    {weekLabel}
                  </div>
                  <div className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.16em] font-bold text-black/40">
                    {weekCopy.dateRange}
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* Clean, high-contrast header */}
                  <h3
                    className="text-[22px] md:text-[28px] font-black uppercase tracking-tight leading-[1.05] text-black mb-1 group-hover/btn:text-[#8DC63F] transition-colors duration-300"
                    style={{ textWrap: 'balance' }}
                  >
                    {weekCopy.headerTopic}
                  </h3>
                  
                  {/* Expansion indicator */}
                  <div className="mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-black/50 group-hover:text-black transition-colors bg-black/5 px-4 py-2 rounded-full w-max">
                    <span>{isExpanded ? 'Скрыть детали' : 'Смотреть детали'}</span>
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isExpanded && "rotate-180")} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: 'easeOut' }}
                  >
                    <div className="relative z-30 px-6 md:px-8 pb-8 pt-0 overflow-hidden">
                      {/* Morphing SVG Background */}
                      <div className="absolute top-[-50px] right-[-100px] w-[350px] h-[350px] pointer-events-none opacity-[0.2] mix-blend-multiply z-0">
                         <MorphSvg week={idx} />
                      </div>
                      <div className="min-w-0 relative z-10">
                        {/* Secondary topic */}
                        <div className="mb-3 font-mono uppercase tracking-[0.1em] text-[12px] font-bold text-[#8DC63F]">
                          {weekCopy.framedDescription}
                        </div>
                        {/* Body description */}
                        <p className="leading-[1.6] font-medium text-[15px] text-black/75">
                          {weekCopy.bodyDescription}
                        </p>

                        {/* Minimalist Weekly rhythm section */}
                        <div className="mt-8 relative">
                          <div className="text-[10px] uppercase font-mono font-bold tracking-[0.16em] text-black/30 mb-4 border-b border-black/[0.04] pb-2">
                            Недельный ритм
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {PROGRAM_WEEKLY_RHYTHM.map((day) => (
                              <div
                                key={`${track.id}-${day.day}`}
                                className={cn(
                                  "relative rounded-[16px] px-3 py-3 text-[10px] uppercase tracking-[0.05em] flex flex-col justify-center",
                                  day.type === 'advanced'
                                    ? "bg-transparent border border-black/[0.04] text-black/40"
                                    : day.type === 'off'
                                      ? "bg-transparent text-black/20"
                                      : "bg-black/[0.03] text-black/80"
                                )}
                              >
                                {day.type === 'advanced' && (
                                  <span className="absolute right-2 top-1.5 text-[12px] leading-none font-bold opacity-40">*</span>
                                )}
                                <div className="font-extrabold opacity-40 mb-1">{day.day}</div>
                                <div className="font-bold min-h-[1.5rem] leading-[1.2] text-[11px]">{day.label || ' '}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Demoted Advanced Track block - extremely subtle */}
                        <div className="mt-8 pt-6 border-t border-dashed border-black/[0.08]">
                           <div className="relative p-0">
                             <div className="flex justify-between items-start mb-2">
                               <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] font-bold text-black/30">
                                 <span className="text-[12px] leading-none">*</span>
                                 <span>Advanced Track</span>
                               </div>
                               <div className="font-mono text-[9px] uppercase tracking-[0.16em] font-bold text-black/30">
                                 Спикер: {advanced.speaker}
                               </div>
                             </div>
                             
                             <div className="font-bold text-[18px] leading-[1.15] text-black/60 mb-2">
                               {weekCopy.advancedTopic}
                             </div>
                             <p className="leading-[1.5] text-[13px] font-medium text-black/40">
                               {weekCopy.advancedDescription}
                             </p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </article>
        );
      })}
    </div>
  );
};

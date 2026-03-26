import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

const V6_PROGRAM_DATA = [
  {
    weekId: 0,
    title: "ПРОМПТ ИНЖИНИРИНГ",
    dates: "25—31 марта 2024",
    rhythm: [
      { day: 'ПН', task: 'ВОРКШОП', active: true },
      { day: 'ВТ', task: 'КОВОРКИНГ', active: true },
      { day: 'СР', task: 'ADVANCED TRACK', active: true, advanced: true },
      { day: 'ЧТ', task: '', active: false },
      { day: 'ПТ', task: 'ЛЕКЦИЯ', active: true },
      { day: 'СБ', task: 'Q&A СЕССИЯ', active: true },
      { day: 'ВС', task: '', active: false },
    ],
    events: [
      {
        type: 'MAIN TRACK',
        date: 'ПН, 25 МАРТА',
        time: '18:00 CET',
        title: 'Context Engineering: Основы работы с LLM',
        description: 'генерация изображений: Midjourney, DALL-E. SVG-метафоры, визуальный сторителлинг. personal branding: headshots, аватары, обложки.',
        color: 'green'
      },
      {
        type: 'ADVANCED TRACK',
        date: 'СР, 27 МАРТА',
        time: '18:00 CET',
        title: 'Image + Visual: Продвинутые техники генерации',
        description: 'промпт-практики для визуальных систем, брендинга и контент-производства. Сложные пайплайны и consistent characters.',
        color: 'black'
      },
      {
        type: 'GUEST LECTURE',
        date: 'ПТ, 29 МАРТА',
        time: '19:00 CET',
        title: 'СЕКРЕТНАЯ ЛЕКЦИЯ',
        description: 'Специальная сессия с приглашенным экспертом из индустрии. Подробности будут анонсированы на воркшопе.',
        color: 'gray'
      }
    ]
  },
  {
    weekId: 1,
    title: "АВТОНОМНЫЕ АГЕНТЫ",
    dates: "1—7 апреля 2024",
    rhythm: [
      { day: 'ПН', task: 'ВОРКШОП', active: true },
      { day: 'ВТ', task: 'КОВОРКИНГ', active: true },
      { day: 'СР', task: 'ADVANCED TRACK', active: true, advanced: true },
      { day: 'ЧТ', task: '', active: false },
      { day: 'ПТ', task: 'ЛЕКЦИЯ', active: true },
      { day: 'СБ', task: 'Q&A СЕССИЯ', active: true },
      { day: 'ВС', task: '', active: false },
    ],
    events: [
      {
        type: 'MAIN TRACK',
        date: 'ПН, 1 АПРЕЛЯ',
        time: '18:00 CET',
        title: 'Многоагентные системы: AutoGen & CrewAI',
        description: 'автоматизация видео: Runway Gen-2, Pika, Sora. анимация UI, генеративные спикеры, персонализированные видео-аватары.',
        color: 'green'
      },
      {
        type: 'ADVANCED TRACK',
        date: 'СР, 3 АПРЕЛЯ',
        time: '18:00 CET',
        title: 'Audio + Voice: Клонирование голоса и саунд-дизайн',
        description: 'ElevenLabs, Suno, MusicGen. Синтез речи, музыкальное оформление интерфейсов и интерактивный саунд-дизайн.',
        color: 'black'
      }
    ]
  },
  {
    weekId: 2,
    title: "DATA & ANALYTICS",
    dates: "8—14 апреля 2024",
    rhythm: [
      { day: 'ПН', task: 'ВОРКШОП', active: true },
      { day: 'ВТ', task: 'КОВОРКИНГ', active: true },
      { day: 'СР', task: 'ADVANCED TRACK', active: true, advanced: true },
      { day: 'ЧТ', task: '', active: false },
      { day: 'ПТ', task: 'ЛЕКЦИЯ', active: true },
      { day: 'СБ', task: 'Q&A СЕССИЯ', active: true },
      { day: 'ВС', task: '', active: false },
    ],
    events: [
      {
        type: 'MAIN TRACK',
        date: 'ПН, 8 АПРЕЛЯ',
        time: '18:00 CET',
        title: 'Предиктивная аналитика для бизнеса',
        description: 'генерация 3D: Luma, Spline AI. Интеграция AI в WebGL, создание пространственных интерфейсов и AR-опыта.',
        color: 'green'
      },
      {
        type: 'ADVANCED TRACK',
        date: 'СР, 10 АПРЕЛЯ',
        time: '18:00 CET',
        title: '3D + Spatial: Пространственные интерфейсы',
        description: 'Техники захвата движений, NeRF, Gaussian Splatting и перенос генеративных ассетов в пространственные среды.',
        color: 'black'
      }
    ]
  },
  {
    weekId: 3,
    title: "AI STRATEGY",
    dates: "15—21 апреля 2024",
    rhythm: [
      { day: 'ПН', task: 'ВОРКШОП', active: true },
      { day: 'ВТ', task: 'КОВОРКИНГ', active: true },
      { day: 'СР', task: 'ADVANCED TRACK', active: true, advanced: true },
      { day: 'ЧТ', task: '', active: false },
      { day: 'ПТ', task: 'ЛЕКЦИЯ', active: true },
      { day: 'СБ', task: 'Q&A СЕССИЯ', active: true },
      { day: 'ВС', task: '', active: false },
    ],
    events: [
      {
        type: 'MAIN TRACK',
        date: 'ПН, 15 АПРЕЛЯ',
        time: '18:00 CET',
        title: 'Внедрение AI и оценка ROI',
        description: 'интеграция AI в цифровые продукты: API OpenAI, Anthropic, локальные LLM. Проектирование AI-first интерфейсов.',
        color: 'green'
      },
      {
        type: 'ADVANCED TRACK',
        date: 'СР, 17 АПРЕЛЯ',
        time: '18:00 CET',
        title: 'Product + Code: Архитектура AI-приложений',
        description: 'RAG (Retrieval-Augmented Generation), векторные базы данных, orchestration frameworks (LangChain, LlamaIndex).',
        color: 'black'
      }
    ]
  }
];

export const DesktopTechUiV6 = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const demoDayRef = useRef<HTMLDivElement | null>(null);

  // Implement Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      let currentActiveIndex = 0;
      let minDistance = Infinity;

      // Check all weeks
      containerRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const distanceToTop = Math.abs(rect.top - 150); // 150px offset from top of viewport is the "focus" zone
          if (distanceToTop < minDistance) {
             minDistance = distanceToTop;
             currentActiveIndex = index;
          }
        }
      });
      
      // Edge case for demo day specifically, if we want to spy it
      if (demoDayRef.current) {
        const rect = demoDayRef.current.getBoundingClientRect();
        if (Math.abs(rect.top - 150) < minDistance) {
           currentActiveIndex = 4; // 4 = Demo Day visually active, though it has no real card
        }
      }

      if (currentActiveIndex !== activeWeek) {
         setActiveWeek(currentActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeWeek]);

  const handleWeekClick = (idx: number) => {
    setActiveWeek(idx);
    const target = containerRefs.current[idx];
    if (target) {
      const yOffset = -100; 
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto font-sans relative flex gap-2 md:gap-6 items-start pt-12">
        {/* LEFT: FIXED STEPPER NAVIGATION */}
        {/* Added wrapper width so right content doesn't jump, and sticky positioning */}
        <div className="w-[120px] shrink-0 sticky top-[10vh] flex flex-col relative h-[500px] mt-6 ml-4 lg:ml-8">
          {/* Main vertical line */}
          <div className="absolute left-[11.5px] top-[40px] bottom-[40px] w-[1px] bg-black/15 z-0 pointer-events-none" />

          {/* Wrapper for the weeks */}
          <div className="flex-1 flex flex-col w-[120px]">
            {V6_PROGRAM_DATA.map((t, idx) => {
              const isActive = activeWeek === idx;
              return (
                <button
                  key={`v6-st-ref-${t.weekId}`}
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
          <button 
             onClick={() => {
                setActiveWeek(4);
                if (demoDayRef.current) {
                  const y = demoDayRef.current.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
             }}
             className="w-[100px] flex items-center gap-2 p-2 border border-black/10 rounded-[6px] bg-[#f8f8f8] text-left relative z-10 opacity-70 mt-1 mb-8 -ml-1 cursor-pointer transition-colors hover:bg-black/5"
          >
            <div className="flex flex-col">
              <div className="text-[8.5px] font-mono font-bold uppercase text-black/50 mb-0.5 tracking-wider">
                FINAL
              </div>
              <div className="text-[11px] font-black tracking-widest leading-none text-black/90">
                DEMO DAY
              </div>
            </div>
          </button>
        </div>

        {/* RIGHT: THE SCROLLING TIMELINE OF WEEKS */}
        <div className="flex-1 flex flex-col gap-6 relative pr-4 lg:pr-12 max-w-[800px]">
           {V6_PROGRAM_DATA.map((weekData, idx) => (
              <div 
                 key={`v6-week-card-${idx}`} 
                 ref={(el) => { containerRefs.current[idx] = el; }}
                 className="w-full border border-black/15 shadow-sm bg-white relative overflow-hidden flex flex-col p-5 lg:p-6 scroll-mt-[100px]"
              >
                  {/* Background Grid */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10 bg-white" 
                       style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                  {/* BACKGROUND ILLUSTRATION */}
                  <div className="absolute right-[-70px] top-[-20px] w-[600px] h-[600px] pointer-events-none mix-blend-multiply z-0 flex justify-center opacity-10">
                    <MorphSvg week={idx} />
                  </div>

                  <div className="relative z-20 flex flex-col w-full h-full">
                     <h2 className="text-[22px] md:text-[24px] font-black uppercase tracking-tighter leading-[0.9] text-black mb-6 max-w-[600px]">
                       {weekData.title}
                     </h2>

                     {/* V1 STYLE: WEEKLY RHYTHM */}
                     <div className="mb-8">
                        <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-black/80 mb-3 ml-1">
                           НЕДЕЛЬНЫЙ РИТМ <span className="text-black/30 font-normal tracking-widest lowercase ml-2">{weekData.dates}</span>
                        </div>
                        <div className="flex border border-black/10 w-full max-w-[500px] bg-black/10 gap-px rounded-[1px] overflow-hidden shadow-none">
                           {weekData.rhythm.map((item, idxx) => {
                             const isWorkshop = item.task === 'ВОРКШОП';
                             const isCore = item.advanced;
                             const isEmpty = !item.active;
                             const displayTask = isWorkshop ? "MAIN ВОРКШОП" : item.task;
                             
                             return (
                             <div 
                               key={`v6-cal-${idx}-${idxx}`}
                               className={cn(
                                 "flex-1 flex flex-col px-2 pt-2 pb-[3px] relative transition-colors h-[40px] lg:h-[44px]",
                                 isWorkshop ? "bg-[#8DC63F]" : isCore ? "bg-black" : isEmpty ? "bg-white/70 backdrop-blur-sm" : "bg-white"
                               )}
                             >
                                <div className="flex flex-col items-start mb-0">
                                  <span className={cn("text-[8.5px] font-mono font-black tracking-widest leading-none", 
                                    isWorkshop ? "text-white/80" : isCore ? "text-white/90" : "text-black/40"
                                  )}>
                                    {item.day}
                                  </span>
                                  
                                  {(idxx === 0 || idxx === 2) && (
                                    <div className={cn("text-[7.5px] font-mono font-bold tracking-widest leading-[1.15] mt-[3px] whitespace-nowrap", 
                                      isWorkshop ? "text-white/80" : "text-[#8DC63F]"
                                    )}>
                                      18:00 CET
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

                     {/* EVENTS LIST */}
                     <div className="flex flex-col gap-4 w-full">
                        {weekData.events.map((ev, evIdx) => {
                           const isAdvanced = ev.type === 'ADVANCED TRACK';
                           const isGuest = ev.type === 'GUEST LECTURE';
                           
                           return (
                             <div key={`v6-ev-${idx}-${evIdx}`} className={cn(
                               "w-full border border-black/10 p-4 lg:p-5 flex flex-col md:flex-row gap-4 lg:gap-5 relative",
                               isAdvanced ? "bg-black text-white" : "bg-white text-black",
                               isGuest ? "bg-black/5 border-transparent" : ""
                             )}>
                                
                                {/* LEFT DATA COLUMN */}
                                <div className="w-[120px] shrink-0 flex flex-col gap-4 border-r border-black/10 pr-5" style={{ borderColor: isAdvanced ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                                   <div className={cn("text-[10px] font-mono font-bold uppercase tracking-widest", isAdvanced ? "text-white/80" : "text-black/40")}>
                                     {ev.type}
                                     {isAdvanced && <span className="text-[#8DC63F] ml-1">*</span>}
                                   </div>

                                   <div className="flex flex-col gap-1 mt-auto">
                                      <div className={cn("text-[11px] font-black tracking-tight", isAdvanced ? "text-white" : "text-black/80")}>
                                         {ev.date}
                                      </div>
                                      <div className={cn("text-[10px] font-mono tracking-widest uppercase", isAdvanced ? "text-[#8DC63F]" : "text-black/50")}>
                                         {ev.time}
                                      </div>
                                   </div>
                                </div>

                                {/* RIGHT CONTENT COLUMN */}
                                <div className="flex-1 flex flex-col">
                                   <h3 className={cn(
                                     "text-[20px] lg:text-[22px] font-black uppercase tracking-tighter leading-[1.05] mb-3 max-w-[480px]",
                                     isAdvanced ? "text-white" : "text-black"
                                   )}>
                                     {ev.title}
                                   </h3>
                                   <p className={cn(
                                     "text-[13px] leading-[1.6] max-w-[440px] mb-4 font-medium",
                                     isAdvanced ? "text-white/80" : "text-black/60"
                                   )}>
                                     {ev.description}
                                   </p>

                                   {/* EXTRA META OR SPEAKER */}
                                   <div className="flex items-center gap-2 mt-auto">
                                      {isGuest ? (
                                        <div className="bg-black text-white text-[9px] font-mono font-bold uppercase px-2 py-1 tracking-widest inline-block">
                                          SECRET LECTURE
                                        </div>
                                      ) : null}
                                   </div>
                                </div>
                             </div>
                           );
                        })}
                     </div>
                  </div>
              </div>
           ))}

           {/* FINAL DEMO DAY BLOCK AT THE END OF THE SCROLL */}
           <div 
              ref={demoDayRef}
              className="w-full border border-black/10 bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center py-12 mb-32 mt-4 scroll-mt-[100px]"
           >
              <div className="flex flex-col items-center justify-center text-center">
                 <div className="text-[12px] font-mono font-bold tracking-[0.4em] uppercase text-black/30 mb-4">FINAL</div>
                 <h2 className="text-[32px] font-black uppercase tracking-tighter leading-none text-black mb-4">DEMO DAY</h2>
                 <p className="text-[14px] text-black/50 max-w-[400px] font-medium leading-[1.6]">
                    Защита финальных проектов, нетворкинг и закрытая вечеринка для выпускников курса.
                 </p>
              </div>
           </div>
        </div>
    </div>
  );
};

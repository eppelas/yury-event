import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

const V7_PROGRAM_DATA = [
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

export const DesktopTechUiV7 = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const demoDayRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll spy is no longer needed - Tab based rendering
  // containerRefs, demoDayRef, scrollContainerRef are no longer needed for scroll, but we can keep refs if we need, but we don't.
  
  const handleWeekClick = (idx: number) => {
    setActiveWeek(idx);
  };

  const currentWeek = activeWeek < 4 ? V7_PROGRAM_DATA[activeWeek] : null;

  return (
    <div className="w-full font-sans py-12 px-2 md:px-8">
      {/* OUTER CARD */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row border border-black/15 shadow-xl bg-white min-h-[500px] overflow-hidden">
        
        {/* LEFT: FIXED STATIC SIDEBAR */}
        <div className="w-full md:w-[160px] shrink-0 bg-[#FAFAFA] border-r border-black/10 flex flex-col relative py-8 px-4 z-20">
          {/* Main vertical line */}
          <div className="absolute left-[35px] top-[48px] bottom-[48px] w-[1px] bg-black/10 z-0 pointer-events-none" />

          {/* Wrapper for the weeks */}
          <div className="flex-1 flex flex-col gap-2 relative z-10 w-full mb-8">
            {V7_PROGRAM_DATA.map((t, idx) => {
              const isActive = activeWeek === idx;
              return (
                <button
                  key={`v7-st-ref-${t.weekId}`}
                  onClick={() => handleWeekClick(idx)}
                  className="w-full flex items-center gap-4 group text-left relative transition-colors hover:bg-black/[0.05] rounded-[8px] p-2 cursor-pointer h-[72px]"
                >
                  <div className={cn(
                    "w-[22px] h-[22px] rounded-full flex items-center justify-center transition-all shrink-0 z-10",
                    isActive ? "bg-black border border-black shadow-[rgba(0,0,0,0.1)_0_4px_12px]" : "bg-white border border-black/20 group-hover:border-black/40"
                  )}>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>

                  <div className="flex flex-col">
                    <div className={cn("text-[8px] font-mono font-bold uppercase transition-colors mb-0.5 tracking-wider", isActive ? "text-black" : "text-black/30 group-hover:text-black/50")}>
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
          <div className={cn(
               "mt-auto relative z-10 w-full border p-3 flex flex-col cursor-pointer transition-colors",
               activeWeek === 4 ? "bg-black text-white border-black" : "bg-white border-black/10 shadow-sm text-black hover:bg-black/5"
             )}
             onClick={() => setActiveWeek(4)}>
              <div className={cn("text-[8.5px] font-mono font-bold uppercase mb-0.5 tracking-wider", activeWeek === 4 ? "text-white/50" : "text-black/50")}>
                FINAL
              </div>
              <div className={cn("text-[12px] font-black tracking-widest leading-none", activeWeek === 4 ? "text-white" : "text-black/90")}>
                DEMO DAY
              </div>
          </div>
        </div>

        {/* RIGHT: TAB CONTENT REPLACED INSTEAD OF SCROLL */}
        <div className="flex-1 relative bg-[#F9F9F9] flex flex-col">
           {/* Background Grid (static) */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" 
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

           {/* BACKGROUND ILLUSTRATION */}
           <div className="absolute right-[-20px] top-[-20px] w-[500px] h-[500px] pointer-events-none mix-blend-multiply z-0 flex justify-center opacity-10">
              <MorphSvg week={activeWeek === 4 ? 3 : activeWeek} />
           </div>

           <AnimatePresence mode="wait">
             <motion.div
               key={`v7-week-${activeWeek}`}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
               className="w-full relative z-20 flex flex-col flex-1 p-8 lg:p-14"
             >
                {activeWeek < 4 && currentWeek ? (
                  <div className="w-full max-w-[800px] mx-auto flex flex-col">
                     <h2 className="text-[28px] md:text-[36px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-8 max-w-[600px]">
                       {currentWeek.title}
                     </h2>

                     {/* WEEKLY RHYTHM COMPACT */}
                     <div className="mb-10">
                        <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-black/80 mb-3 ml-1">
                           НЕДЕЛЬНЫЙ РИТМ <span className="text-black/30 font-normal tracking-widest lowercase ml-2">{currentWeek.dates}</span>
                        </div>
                        <div className="flex border border-black/10 w-full max-w-[500px] bg-black/10 gap-px rounded-[1px] overflow-hidden shadow-none">
                           {currentWeek.rhythm.map((item, idxx) => {
                             const isWorkshop = item.task === 'ВОРКШОП';
                             const isCore = item.advanced;
                             const isEmpty = !item.active;
                             const displayTask = isWorkshop ? "MAIN ВОРКШОП" : item.task;
                             
                             return (
                             <div 
                               key={`v7-cal-${activeWeek}-${idxx}`}
                               className={cn(
                                 "flex-1 flex flex-col px-2 pt-2 pb-[3px] relative transition-colors h-[48px] lg:h-[52px]",
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

                     {/* EVENTS LIST COMPACT */}
                     <div className="flex flex-col gap-4 w-full">
                        {currentWeek.events.map((ev, evIdx) => {
                           const isAdvanced = ev.type === 'ADVANCED TRACK';
                           const isGuest = ev.type === 'GUEST LECTURE';
                           
                           return (
                             <div key={`v7-ev-${activeWeek}-${evIdx}`} className={cn(
                               "w-full border border-black/10 p-5 lg:p-6 flex flex-col sm:flex-row gap-5 lg:gap-6 relative",
                               isAdvanced ? "bg-black text-white" : "bg-white text-black",
                               isGuest ? "bg-black/5 border-transparent" : ""
                             )}>
                                
                                {/* LEFT DATA COLUMN */}
                                <div className="w-[120px] shrink-0 flex flex-col gap-4 sm:border-r sm:border-black/10 sm:pr-5" style={{ borderColor: isAdvanced ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
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
                                     "text-[13px] leading-[1.6] max-w-[440px] font-medium",
                                     isAdvanced ? "text-white/80" : "text-black/60",
                                     isGuest ? "mb-4" : ""
                                   )}>
                                     {ev.description}
                                   </p>

                                   {/* EXTRA META OR SPEAKER */}
                                   {isGuest && (
                                     <div className="flex items-center gap-2 mt-auto">
                                       <div className="bg-black text-white text-[9px] font-mono font-bold uppercase px-2 py-1 tracking-widest inline-block">
                                         SECRET LECTURE
                                       </div>
                                     </div>
                                   )}
                                </div>
                             </div>
                           );
                        })}
                     </div>
                  </div>
                ) : null}

                {/* DEMO DAY */}
                {activeWeek === 4 && (
                  <div className="flex flex-col items-start justify-center text-left py-20 px-4 h-full my-auto max-w-[600px] mx-auto">
                     <div className="text-[12px] font-mono font-bold tracking-[0.4em] uppercase text-black/30 mb-6 w-full text-center">FINAL</div>
                     <h2 className="text-[48px] md:text-[64px] font-black uppercase tracking-tighter leading-none text-black mb-6 w-full text-center">DEMO DAY</h2>
                     <p className="text-[15px] text-black/60 font-medium leading-[1.6] w-full text-center">
                        Защита финальных проектов, нетворкинг и закрытая вечеринка для выпускников курса.
                     </p>
                  </div>
                )}
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

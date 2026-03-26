

const PROGRAM_TRACKS = [
  {
    id: '01',
    week: 'НЕДЕЛЯ 1',
    title: 'Prompt Engineering',
    shortDescription: 'ИИ как интерфейс мышления',
    longDescription: 'Освоение техник промптов: Chain-of-Thought, Few-Shot Learning, Custom GPTs. Создание первых персональных ассистентов.',
    events: ['Лекция', 'Воркшоп', 'Q&A', 'Коворкинг'],
    speaker: 'Виола',
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop',
  },
  {
    id: '02',
    week: 'НЕДЕЛЯ 2',
    title: 'Context Engineering',
    shortDescription: 'Автоматизация и агенты',
    longDescription: 'Управление контекстом: Obsidian + MCP + Claude. Автоматизация через n8n, Make. AI-агенты и workflows.',
    events: ['Лекция', 'Воркшоп', 'Q&A'],
    speaker: 'Виола',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: '03',
    week: 'НЕДЕЛЯ 3',
    title: 'Mind Engineering',
    shortDescription: 'Продуктивность и ритуалы',
    longDescription: 'AI для коучинга, рефлексии, персональных ритуалов. Трекинг привычек и целей с поддержкой AI.',
    events: ['Лекция', 'Разбор кейсов', 'Q&A'],
    speaker: 'Иван',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  },
  {
    id: '04',
    week: 'НЕДЕЛЯ 4',
    title: 'Life Engineering',
    shortDescription: 'Творчество и реализация',
    longDescription: 'От идеи до прототипа. Vibe-coding с Cursor, Windsurf, Claude Projects. Создание без технического бэкграунда.',
    events: ['Лекция', 'Воркшоп', 'Демо-день'],
    speaker: 'Виола',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop',
  },
];

const ADVANCED_TRACKS = [
  { id: 'T1', week: 'НЕДЕЛЯ 1', title: 'AI Coaching', description: 'Для тех, кто выгорел и ищет баланс. AI для коучинга, рефлексии.', speaker: 'Александр Поваляев' },
  { id: 'T2', week: 'НЕДЕЛЯ 2', title: 'AI Agents', description: 'Автономные AI-системы. Проектирование и запуск AI-агентов.', speaker: 'Сергей Хабаров' },
  { id: 'T3', week: 'НЕДЕЛЯ 3', title: 'Vibe-Coding', description: 'Творческое программирование. От идеи до прототипа за часы.', speaker: 'Анна Лозицкая' },
  { id: 'T4', week: 'НЕДЕЛЯ 4', title: 'AI Creative', description: 'Для музыкантов, художников и креативщиков. Генерация визуального контента.', speaker: 'Анка Ставенски' },
];

export const DesktopTechUiV12 = () => {
  return (
    <div className="mb-32">
      <div className="relative border border-black/10 bg-white text-black p-4 md:p-12 overflow-hidden shadow-2xl rounded-3xl w-full max-w-5xl mx-auto">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative flex flex-col gap-16 md:gap-24 pl-8 md:pl-24">
          {/* Main timeline line */}
          <div className="absolute left-[15px] md:left-[47px] top-4 bottom-12 w-[1px] bg-black/10" />

          {PROGRAM_TRACKS.map((track, idx) => {
            const currentWeek = 1; 
            const isPast = idx + 1 < currentWeek;
            const isCurrent = idx + 1 === currentWeek;
            const advanced = ADVANCED_TRACKS[idx];

            return (
              <div key={track.id} className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 w-full pt-4">
                
                {/* Node indicator */}
                <div className="absolute -left-[30.5px] md:-left-[71.5px] top-6 z-10">
                  {isCurrent ? (
                    <div className="relative w-4 h-4 rounded-full bg-[#8DC63F]">
                      <div className="absolute inset-0 rounded-full bg-[#8DC63F] animate-ping opacity-50" />
                    </div>
                  ) : (
                    <div className={`w-3 h-3 rounded-full border-2 ${isPast ? 'bg-black/10 border-black/10' : 'bg-[#f4f4f4] border-black/20'}`} />
                  )}
                </div>

                {/* Left side: Core Info & Art */}
                <div className="flex-1 text-left flex flex-col">
                  <div className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${isPast ? 'opacity-40' : isCurrent ? 'text-black/40 font-bold' : 'opacity-40'}`}>
                    week {idx + 1} — {track.shortDescription}
                  </div>
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4 leading-tight text-black/80`}>
                    {track.title}
                  </h3>
                  <p className={`text-sm md:text-base opacity-90 leading-relaxed mb-6 max-w-lg text-black/80`}>
                    {track.longDescription}
                  </p>

                  <div className="mb-8 font-mono text-xs font-bold text-black/60 uppercase tracking-widest bg-black/5 self-start px-3 py-1.5 rounded-md">
                     Спикер: <span className="text-black">{track.speaker}</span>
                  </div>

                  {/* Core Visual Art Block */}
                  <div className={`relative w-full h-40 md:h-56 border rounded-2xl overflow-hidden flex items-center justify-center font-mono text-[10px] bg-[#f8f9fa] border-black/5`}>
                    <img src={track.image} alt={track.title} className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.65] z-0 transition-transform duration-1000 grayscale`} />
                    <div className="opacity-60 z-10 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-black/10 font-bold tracking-widest">[ STATIC_DATA ]</div>
                  </div>
                </div>

                {/* Right side: Advanced Integration & Tags */}
                <div className="flex-[0.8] lg:max-w-md xl:max-w-sm flex flex-col relative mt-4 lg:mt-0 lg:pl-8 text-left border-l border-transparent lg:border-black/5">
                  {/* Calendar/Event Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 items-center pt-1 lg:pt-0">
                     <div className="text-[10px] uppercase font-bold tracking-widest opacity-40 mr-2">EVENTS /</div>
                    <span className="text-[9px] font-mono tracking-widest px-2 py-1 rounded uppercase font-bold text-black/80">Lecture</span>
                    <span className="text-[9px] font-mono tracking-widest px-2 py-1 bg-[#8DC63F]/20 text-[#8DC63F] rounded uppercase font-bold">Workshop</span>
                    <span className="text-[9px] font-mono tracking-widest px-2 py-1 rounded uppercase font-bold text-black/80">Q&A</span>
                  </div>

                  {/* Advanced Track Highlight Block */}
                  <div className={`mt-0 lg:mt-auto relative p-6 pb-8 rounded-[1.25rem] border border-black/5 transition-colors bg-[#fbfbfb] shadow-sm flex flex-col`}>
                    
                    <div className="flex gap-2 items-center mb-4">
                      <div className={`w-1.5 h-1.5 rounded-full bg-black/40`} />
                      <div className="font-mono text-[9px] uppercase tracking-widest opacity-50 font-bold">Advanced Track</div>
                    </div>
                    
                    <h4 className="font-bold text-lg md:text-xl mb-3 text-black">{advanced.title}</h4>
                    <p className="text-sm opacity-80 leading-relaxed text-black/80 mb-6">{advanced.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-black/5">
                       <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">Спикер: </span>
                       <span className="font-bold text-xs">{advanced.speaker}</span>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

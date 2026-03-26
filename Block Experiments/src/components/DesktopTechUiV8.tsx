

const PROGRAM_TRACKS = [
  {
    id: '01',
    week: 'НЕДЕЛЯ 1',
    title: 'Prompt Engineering',
    shortDescription: 'ИИ как интерфейс мышления',
    longDescription: 'Освоение техник промптов: Chain-of-Thought, Few-Shot Learning, Custom GPTs. Создание первых персональных ассистентов.',
    events: ['Лекция', 'Воркшоп', 'Q&A', 'Коворкинг'],
  },
  {
    id: '02',
    week: 'НЕДЕЛЯ 2',
    title: 'Context Engineering',
    shortDescription: 'Автоматизация и агенты',
    longDescription: 'Управление контекстом: Obsidian + MCP + Claude. Автоматизация через n8n, Make. AI-агенты и workflows.',
    events: ['Лекция', 'Воркшоп', 'Q&A'],
  },
  {
    id: '03',
    week: 'НЕДЕЛЯ 3',
    title: 'Mind Engineering',
    shortDescription: 'Продуктивность и ритуалы',
    longDescription: 'AI для коучинга, рефлексии, персональных ритуалов. Трекинг привычек и целей с поддержкой AI.',
    events: ['Лекция', 'Разбор кейсов', 'Q&A'],
  },
  {
    id: '04',
    week: 'НЕДЕЛЯ 4',
    title: 'Life Engineering',
    shortDescription: 'Творчество и реализация',
    longDescription: 'От идеи до прототипа. Vibe-coding с Cursor, Windsurf, Claude Projects. Создание без технического бэкграунда.',
    events: ['Лекция', 'Воркшоп', 'Демо-день'],
  },
];

const ADVANCED_TRACKS = [
  { id: 'T1', week: 'НЕДЕЛЯ 1', title: 'AI Coaching', description: 'Для тех, кто выгорел и ищет баланс. AI для коучинга, рефлексии.', speaker: 'Александр Поваляев' },
  { id: 'T2', week: 'НЕДЕЛЯ 2', title: 'AI Agents', description: 'Автономные AI-системы. Проектирование и запуск AI-агентов.', speaker: 'Сергей Хабаров' },
  { id: 'T3', week: 'НЕДЕЛЯ 3', title: 'Vibe-Coding', description: 'Творческое программирование. От идеи до прототипа за часы.', speaker: 'Анна Лозицкая' },
  { id: 'T4', week: 'НЕДЕЛЯ 4', title: 'AI Creative', description: 'Для музыкантов, художников и креативщиков. Генерация визуального контента.', speaker: 'Анка Ставенски' },
];

export const DesktopTechUiV8 = () => {
  return (
    <div className="mb-32 text-black">
      <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory mx-[-1rem] md:mx-[-3rem] px-[1rem] md:px-[3rem] hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {PROGRAM_TRACKS.map((track, idx) => {
          const advanced = ADVANCED_TRACKS[idx];
          
          return (
            <div key={track.id} className="shrink-0 w-[85vw] md:w-[450px] snap-center flex flex-col border border-black/10 shadow-sm rounded-[2rem] overflow-hidden bg-white relative">
              
              {/* Top Banner Image (ASCII style) */}
              <div className="w-full h-48 relative bg-dot-pattern bg-[length:20px_20px] bg-black/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-80 mix-blend-multiply">
                   {idx === 0 && (
                     <div className="font-mono text-[10px] text-[#8DC63F] whitespace-pre text-center">
                        {`      10%\n PROMPT RAIL `}<br/>
                        <span className="text-4xl">    [ EXE ]  </span><br/>
                        {`AI MINDSET SIGNAL`}
                     </div>
                   )}
                   {idx === 1 && (
                     <div className="font-mono text-[10px] text-[#C084FC] whitespace-pre text-center">
                        {`     STACK\nCONTEXT FIELD`}<br/>
                        <span className="text-4xl">  [ BASE ]   </span><br/>
                        {`AI MINDSET SIGNAL`}
                     </div>
                   )}
                   {idx >= 2 && (
                     <div className="font-mono text-[10px] text-black/40 whitespace-pre text-center">
                        {`     SYSTEM\n      CORE   `}<br/>
                        <span className="text-4xl"> [ TARGET ]   </span><br/>
                        {`AI MINDSET SIGNAL`}
                     </div>
                   )}
                </div>
                
                {/* Overlay Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-black px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest font-bold shadow-sm">
                    {track.week}
                  </span>
                </div>
              </div>

              {/* Core Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-[0.9] mb-4">{track.title}</h3>
                <p className="opacity-80 leading-relaxed text-sm md:text-base font-light mb-6">
                  {track.longDescription}
                </p>

                {/* Events list inline */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {track.events.map((evt, eIdx) => (
                    <span key={eIdx} className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 bg-[#f4f4f4] text-black/60 rounded">
                      {evt}
                    </span>
                  ))}
                </div>
                
                {/* ONE Separator for Advanced Track (STRICTLY RIGHT ALIGNED) */}
                <div className="mt-auto border-t border-black/10 pt-6 relative bg-gradient-to-b from-transparent to-[#fafafa] -mx-8 -mb-8 px-8 pb-8 flex flex-col items-end text-right">
                  <div className="flex items-center justify-end gap-2 mb-3">
                     <div className="font-mono text-[10px] uppercase font-bold tracking-widest opacity-40">Advanced Track</div>
                     <span className="bg-[#8DC63F] text-black text-[9px] px-2 py-0.5 rounded tracking-widest uppercase font-bold">PRO</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1 leading-tight">{advanced.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed max-w-[90%] mb-4">{advanced.description}</p>
                  
                  <div className="flex justify-between items-end w-full mt-2 pt-4 border-t border-black/5">
                    <div className="text-left w-1/2">
                      <div className="text-[9px] uppercase tracking-widest font-mono opacity-40 mb-1">Куратор основной программы</div>
                      <div className="text-xs font-bold">Команда AI Mindset</div>
                    </div>
                    
                    <div className="text-right w-1/2">
                      <div className="text-[9px] uppercase tracking-widest font-mono opacity-40 mb-1">Куратор PRO-трека</div>
                      <div className="text-xs font-bold">{advanced.speaker}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

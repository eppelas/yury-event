import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MorphSvg } from './MorphSvg';

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

export const DesktopTechUiV10 = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const track = PROGRAM_TRACKS[activeWeek];
  const advanced = ADVANCED_TRACKS[activeWeek];

  return (
    <div className="mb-32 text-black">
      <div className="w-full max-w-sm mx-auto md:max-w-4xl">
         
         <AnimatePresence mode="wait">
           <motion.div 
             key={activeWeek}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
             transition={{ duration: 0.4 }}
             className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 flex flex-col md:flex-row min-h-[400px]"
           >
              
              {/* Massive Image / Animation Zone */}
              <div className="w-full md:w-[45%] lg:w-[48%] h-80 md:h-auto relative bg-[#0a0a0a] shrink-0 overflow-hidden">
                 
                 {/* Morphing Background */}
                 <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen overflow-hidden">
                    <div className="scale-[1.5] translate-x-12 opacity-80 filter blur-[0.5px]">
                       <MorphSvg week={activeWeek} />
                    </div>
                 </div>
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
                 
                 {/* Top text */}
                 <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20 text-white/50 font-mono text-[9px] uppercase font-bold tracking-widest">
                    <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{track.week}</span>
                    <div className="text-right">
                       <div>[ LOOP ]</div>
                       <div className="opacity-50 mt-1">NODE 0{activeWeek + 1}</div>
                    </div>
                 </div>

                 {/* Middle Signal Text */}
                 <div className="absolute top-1/3 right-8 flex flex-col items-end z-20 text-[#D2B666] font-mono text-[8px] uppercase tracking-[0.2em] font-bold">
                    <span className="opacity-40 mb-1">SIGNAL</span>
                    <span className="bg-[#D2B666]/10 px-2 py-1 rounded border border-[#D2B666]/20 shadow-sm backdrop-blur-sm">{track.shortDescription}</span>
                 </div>

                 {/* Bottom core Text */}
                 <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                   <div className="text-[9px] font-mono tracking-widest uppercase mb-3 opacity-60 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-[#D2B666] rounded-full shadow-[0_0_8px_#D2B666]"></div>
                     {track.week}
                   </div>
                   <h3 className="text-3xl md:text-[40px] font-black uppercase tracking-tighter leading-[0.9] drop-shadow-md">
                     {track.title.split(' ').map((word, i) => (
                       <div key={i}>{word}</div>
                     ))}
                   </h3>
                   <div className="text-right mt-6 font-mono text-[8.5px] uppercase tracking-[0.4em] opacity-30 border-t border-white/10 pt-3">
                     LIVE FIELD
                   </div>
                 </div>

              </div>

              {/* Content Zone */}
              <div className="flex-1 p-8 md:p-12 flex flex-col pt-10">
                 <div className="flex flex-wrap gap-2 mb-8">
                    {track.events.map((evt, eIdx) => (
                       <span key={eIdx} className="text-[9px] font-bold uppercase tracking-widest text-[#6c9c27] bg-[#f4faeb] px-2.5 py-1.5 rounded-md">
                         {evt}
                       </span>
                    ))}
                 </div>

                 <p className="opacity-80 text-sm md:text-base leading-relaxed mb-10 text-black/90 font-medium">
                   {track.longDescription}
                 </p>

                 {/* Right Aligned PRO Block */}
                 <div className="mt-auto border-t border-black/5 pt-8">
                    <div className="flex flex-col items-end text-right w-full relative">
                       <div className="flex items-center gap-4 mb-2 justify-end w-full">
                         <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Advanced Track</span>
                         <span className="bg-[#8DC63F] text-black px-2 py-0.5 rounded text-[10px] font-black uppercase shadow-[0_2px_8px_#8DC63F40]">PRO</span>
                       </div>
                       <h4 className="font-bold text-xl mb-3 text-black/90">{advanced.title}</h4>
                       <p className="text-xs opacity-60 leading-relaxed mb-6">{advanced.description}</p>
                       <div className="flex flex-col border-t border-black/5 pt-3 w-full items-end">
                         <div className="text-[9px] font-mono tracking-widest uppercase opacity-40 mb-1">Куратор PRO-трека</div>
                         <div className="text-black font-bold text-xs">{advanced.speaker}</div>
                       </div>
                    </div>
                 </div>
              </div>

           </motion.div>
         </AnimatePresence>

         {/* Detached Bottom Tabs */}
         <div className="flex justify-center mt-8 gap-3 md:gap-4 flex-wrap pb-4">
            {PROGRAM_TRACKS.map((t, i) => {
              const isActive = activeWeek === i;
              return (
                <button 
                  key={t.id}
                  onClick={() => setActiveWeek(i)}
                  className={`px-5 md:px-7 py-3 md:py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${isActive ? 'bg-black text-white shadow-xl scale-105' : 'bg-white text-black/60 border border-black/10 hover:bg-black/5 hover:text-black shadow-sm'}`}
                >
                  {t.week}
                </button>
              )
            })}
         </div>

      </div>
    </div>
  )
};

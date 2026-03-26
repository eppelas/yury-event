import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export const DesktopTechUiV9 = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const track = PROGRAM_TRACKS[activeWeek];
  const advanced = ADVANCED_TRACKS[activeWeek];

  return (
    <div className="mb-32">
      <div className="w-full max-w-sm mx-auto md:max-w-3xl">
         <div className="bg-[#fcfcfc] border border-black/10 rounded-2xl flex flex-col overflow-hidden shadow-sm text-black relative">
            
            <div className={`absolute top-0 right-0 w-64 h-64 bg-[#8DC63F]/20 rounded-full blur-[80px] transition-transform duration-1000 ${activeWeek % 2 === 0 ? 'translate-x-12 translate-y-12' : '-translate-x-12 -translate-y-12'}`} />

            <div className="p-8 pb-12 relative z-10 flex flex-col min-h-[460px]">
               
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeWeek}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                   className="flex col flex-col h-full"
                 >
                   <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-3">
                       <span className="text-[#8DC63F] font-mono text-xl md:text-2xl font-black">{track.id}</span>
                       <span className="text-[10px] font-bold tracking-widest uppercase opacity-50 px-2 py-1 border border-black/10 rounded-full">Module</span>
                     </div>
                     <span className="text-[10px] uppercase font-mono tracking-widest opacity-30">Status: Active</span>
                   </div>

                   <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                     {track.title}
                   </h3>
                   <p className="text-sm opacity-70 leading-relaxed max-w-sm mb-12">
                     {track.longDescription}
                   </p>

                   {/* Right Aligned Adv Block in Light Mode */}
                   <div className="mt-auto self-end w-full md:w-3/4 bg-gradient-to-l from-[#8DC63F]/5 to-transparent border-r-2 border-[#8DC63F] p-5 rounded-l-xl text-right">
                      <div className="flex items-center justify-end gap-2 mb-2">
                         <span className="text-[9px] uppercase tracking-widest font-mono opacity-60">Advanced Track</span>
                         <span className="bg-[#8DC63F] text-black font-black px-2 py-0.5 rounded text-[8px] tracking-widest">PRO</span>
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-black/90">{advanced.title}</h4>
                      <div className="text-[10px] tracking-widest font-mono uppercase opacity-40">
                         Куратор PRO-трека: <span className="text-black font-bold">{advanced.speaker}</span>
                      </div>
                   </div>
                 </motion.div>
               </AnimatePresence>

            </div>

            {/* Light Bottom Tabs */}
            <div className="flex bg-black/5 border-t border-black/10 relative z-10">
               {PROGRAM_TRACKS.map((t, i) => {
                 const isActive = activeWeek === i;
                 return (
                   <button 
                     key={t.id}
                     onClick={() => setActiveWeek(i)}
                     className="flex-1 py-4 flex items-center justify-center relative overflow-hidden group"
                   >
                     {/* Active Indicator Line */}
                     {isActive && <motion.div layoutId="lightTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8DC63F]" />}
                     
                     <span className={`text-xs font-mono font-bold tracking-widest transition-colors ${isActive ? 'text-[#8DC63F]' : 'text-black/30 group-hover:text-black/60'}`}>
                       WK{i+1}
                     </span>
                   </button>
                 )
               })}
            </div>

         </div>
      </div>
    </div>
  )
};

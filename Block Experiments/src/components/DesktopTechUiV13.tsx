import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Star, User } from 'lucide-react';

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

export const DesktopTechUiV13 = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="mb-32">
       <div className="w-full max-w-3xl mx-auto relative pl-4 md:pl-10 text-black">
          
          {/* Continuous vertical line connecting all dots */}
          <div className="absolute left-[34px] md:left-[58px] top-10 bottom-10 w-[2px] bg-black/[0.04] z-0" />

          {PROGRAM_TRACKS.map((track, idx) => {
             const advanced = ADVANCED_TRACKS[idx];
             const isExpanded = expandedIndex === idx;

             return (
               <div key={track.id} className="relative mb-6 z-10 flex gap-4 md:gap-8 group">
                  
                  {/* Timeline Node Dot Column */}
                  <div className="w-10 pt-8 shrink-0 flex justify-center relative z-20">
                    <div 
                      className={`w-3.5 h-3.5 rounded-full border-[3px] transition-colors duration-500 bg-white ${isExpanded ? 'border-black' : 'border-black/20 group-hover:border-black/40'}`}
                    />
                  </div>

                  {/* Card Column */}
                  <div 
                    className={`flex-1 bg-white border border-black/5 rounded-[24px] overflow-hidden transition-all duration-500 ease-out will-change-transform ${isExpanded ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] scale-[1.01]' : 'shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/10'}`}
                  >
                     {/* Header Area (Clickable) */}
                     <div 
                       className="p-6 md:p-8 cursor-pointer select-none relative"
                       onClick={() => toggleExpand(idx)}
                     >
                        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end w-full">
                           <div className="flex-1">
                             {/* Small Week Label */}
                             <div className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-30 mb-3 flex items-center gap-2">
                               {track.week}
                               {isExpanded && <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full bg-black" />}
                             </div>
                             
                             {/* Main Title */}
                             <h3 className="text-2xl md:text-[28px] font-bold tracking-tight mb-2 text-black/90 leading-none">
                               {track.title}
                             </h3>
                             
                             {/* Subtitle / Short Description */}
                             <p className="text-xs font-bold uppercase tracking-widest opacity-40">
                               {track.shortDescription}
                             </p>
                           </div>

                           {/* The "Pill" Interaction Button */}
                           <div className={`mt-4 md:mt-0 inline-flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 md:self-end ${isExpanded ? 'bg-[#f4faeb] text-[#6c9c27] border-[#8DC63F]/30' : 'bg-transparent text-black/60 border-black/10 group-hover:bg-black/[0.02]'}`}>
                              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                                {isExpanded ? 'Close Details' : 'View Track & PRO'}
                              </span>
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#8DC63F]/20' : 'bg-black/5'}`}>
                                <ChevronDown className="w-3 h-3" />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Expandable Content Area */}
                     <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {/* Inner Padding container to prevent margin collapsing issues during animation */}
                            <div className="px-6 md:px-8 pb-8 pt-2">
                               <div className="h-px w-full bg-black/5 mb-6" />
                               
                               <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                                  {/* Left: Main Track Info */}
                                  <div className="flex-1">
                                     <p className="text-sm md:text-base opacity-70 leading-relaxed font-medium mb-6">
                                       {track.longDescription}
                                     </p>
                                     <div className="flex flex-wrap gap-2">
                                        {track.events.map((evt, eIdx) => (
                                          <div key={eIdx} className="flex items-center gap-1.5 bg-[#f5f5f7] px-2.5 py-1.5 rounded-md">
                                            <div className="w-1 h-1 rounded-full bg-black/30" />
                                            <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
                                              {evt}
                                            </span>
                                          </div>
                                        ))}
                                     </div>
                                  </div>

                                  {/* Right: Beautifully Packed PRO Box */}
                                  <div className="w-full md:w-64 shrink-0 bg-[#fbfbfb] border border-black/5 rounded-2xl overflow-hidden relative group/pro flex flex-col text-right">
                                     {/* Subtle styling flourish */}
                                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8DC63F]/20 to-transparent opacity-0 group-hover/pro:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                     
                                     <div className="p-5 flex flex-col items-end">
                                        <div className="flex justify-between items-center mb-4 w-full">
                                           <div className="text-[9px] font-mono tracking-widest uppercase opacity-40">Advanced Track</div>
                                           <span className="bg-white text-black font-black px-2 py-0.5 rounded text-[9px] tracking-widest uppercase shadow-[0_2px_10px_rgba(141,198,63,0.3)]">PRO</span>
                                        </div>
                                        
                                        <h4 className="font-bold text-lg mb-2 text-black/90 leading-tight">
                                           {advanced.title}
                                        </h4>
                                        <p className="text-xs opacity-60 leading-relaxed mb-6">
                                           {advanced.description}
                                        </p>
                                        
                                        <div className="pt-4 border-t border-black/5 flex items-center justify-between w-full flex-row-reverse">
                                          <div className="flex flex-col text-right">
                                            <span className="text-[8px] font-bold uppercase tracking-widest opacity-30 mb-0.5">Куратор PRO-трека</span>
                                            <span className="text-xs font-bold opacity-80">{advanced.speaker}</span>
                                          </div>
                                          <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-black/40">
                                            <User className="w-3 h-3" />
                                          </div>
                                        </div>
                                     </div>
                                  </div>
                               </div>

                            </div>
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
             )
          })}

          {/* Demo Day Node */}
          <div className="relative mt-8 flex gap-4 md:gap-8 z-10 w-full">
              <div className="w-10 pt-6 shrink-0 flex justify-center relative z-20">
                <div className="w-5 h-5 rounded-full bg-black shadow-[0_0_0_4px_white] flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              <div className="flex-1 bg-white border border-black/10 text-black p-6 md:p-8 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-4 md:items-center">
                 <div className="flex-1">
                   <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#8DC63F] mb-2 leading-none">Demo Day</h3>
                   <p className="text-sm opacity-80 font-medium text-black/80 max-w-sm">
                     Вечерняя сессия. День, когда мы собираемся вместе и показываем друг другу всё, что у нас получилось за время программы.
                   </p>
                 </div>
                 <div className="shrink-0 pt-2 md:pt-0">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 border border-black/10 rounded-full inline-flex items-center gap-2 hover:bg-black/5 transition-colors cursor-default text-black/70">
                      Final presentation <CheckCircle className="w-3 h-3 text-[#8DC63F]" />
                    </span>
                 </div>
              </div>
          </div>

       </div>
    </div>
  )
};

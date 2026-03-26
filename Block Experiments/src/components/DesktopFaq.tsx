import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_DATA = [
  {
    category: 'ОРГАНИЗАЦИЯ И ПРОЦЕССЫ',
    items: [
      { q: 'наш подход к обучению', a: '80% практики и 20% теории. Мы фокусируемся на реальных кейсах и практических заданиях.' },
      { q: 'будет ли возможность пообщаться с авторами курса лично?', a: 'Да, в рамках живых воркшопов и сессий Q&A.' },
      { q: 'как будет организовано общение и взаимодействие участников?', a: 'Мы используем закрытый Telegram-чат для оперативного общения и нетворкинга.' },
    ]
  },
  {
    category: 'ОЖИДАНИЯ И РЕЗУЛЬТАТ',
    items: [
      { q: 'кому лаборатория подходит, а кому нет?', a: 'Подходит тем, кто готов много практиковаться. Не подходит тем, кто ищет только теорию.' },
      { q: 'инструменты, которые мы освоим', a: 'LLM (GPT, Claude), инструменты автоматизации (n8n, Make), медиа-генерация.' },
      { q: 'нужен ли технический бэкграунд для участия в лаборатории?', a: 'Нет, мы обучаем с нуля. Главное — ваше желание разбираться.' },
    ]
  },
  {
    category: 'ОПЛАТА И УСЛОВИЯ',
    items: [
      { q: 'какие варианты оплаты?', a: 'Мы принимаем карты всех банков и безналичные платежи от юрлиц.' },
      { q: 'можете ли выставить счёт?', a: 'Да, мы работаем с юридическими лицами.' },
      { q: 'возможен ли возврат, если мне не подойдет формат лаборатории?', a: 'Да, возврат возможен в течение первой недели обучения.' },
    ]
  }
];

export const DesktopFaq = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f3f3f5] py-20 px-8 font-sans overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Header & Info */}
        <div className="lg:w-1/3 shrink-0 flex flex-col border-l-2 border-black pl-8">
          <div className="text-[#8dc63f] font-mono font-bold text-xs tracking-[0.4em] mb-6 uppercase flex items-center gap-4">
            <span className="w-4 h-[1px] bg-[#8dc63f]"></span> INFO_CENTER
          </div>
          <h2 className="text-7xl font-black uppercase tracking-tighter leading-none mb-10">
            F.A.Q. <br />
            <span className="text-black/30">QUESTIONS</span>
          </h2>
          <div className="mt-auto hidden lg:block">
            <div className="font-mono text-[10px] text-black/40 uppercase mb-4 leading-relaxed">
              * SYSTEM STATUS: OPERATIONAL<br />
              * DATA SOURCE: LAB_X26_HANDBOOK<br />
              * LAST UPDATE: 2024.MAR.20
            </div>
            <div className="w-full h-px bg-black opacity-10 mb-4"></div>
            <div className="flex justify-between items-center text-[10px] font-mono font-black text-black/50">
              <span>0% THEORETICAL</span>
              <span>100% PRACTICAL</span>
            </div>
          </div>
        </div>

        {/* Right Side: Accordions */}
        <div className="flex-1 flex flex-col gap-12">
          {FAQ_DATA.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="text-[11px] font-mono font-black tracking-[0.2em] text-[#8dc63f] mb-6 uppercase border-b border-black/10 pb-2">
                [{catIdx + 1}] // {cat.category}
              </div>
              <div className="flex flex-col border-t border-black">
                {cat.items.map((item, itemIdx) => {
                    const id = `${catIdx}-${itemIdx}`;
                    const isOpen = openIndex === id;
                    return (
                        <div key={itemIdx} className="border-b border-black overflow-hidden bg-white/40 hover:bg-white/80 transition-colors">
                            <button 
                                onClick={() => toggle(id)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={`text-lg font-bold tracking-tight uppercase transition-colors ${isOpen ? 'text-black' : 'text-black/60 group-hover:text-black'}`}>
                                    {item.q}
                                </span>
                                <div className={`w-8 h-8 rounded-none border border-black flex items-center justify-center font-mono text-sm transition-all ${isOpen ? 'bg-black text-white' : 'bg-transparent text-black group-hover:bg-[#8dc63f] group-hover:border-[#8dc63f]'}`}>
                                    {isOpen ? '-' : '+'}
                                </div>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-white/60"
                                    >
                                        <div className="px-6 pb-8 pt-0 text-base leading-relaxed text-black/70 max-w-3xl">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
              </div>
            </div>
          ))}

          {/* Non-Profit Banner */}
          <div className="mt-8 bg-black/5 border border-dashed border-black/20 p-8 relative overflow-hidden">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#8dc63f]"></div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8dc63f]">FREE SPOTS PROGRAM</span>
                </div>
                <h4 className="text-xl font-black uppercase mb-4 leading-tight">
                    ТЫ ПРЕДСТАВИТЕЛЬ NON-PROFIT / ART СФЕРЫ?<br />
                    ХОЧЕШЬ НА ЛАБУ?
                </h4>
                <p className="text-sm text-black/60 leading-relaxed mb-6 max-w-2xl">
                    Мы предлагаем <strong className="text-black">3 бесплатных места</strong> для представителей некоммерческих и творческих организаций за мотивационное письмо.
                </p>
                <button className="bg-black text-white px-8 py-3 font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#8dc63f] transition-colors">
                    ПОДАТЬ ЗАЯВКУ // APPLY
                </button>
             </div>
             {/* Decorative ASCII in background */}
             <div className="absolute -right-8 -bottom-8 font-mono text-[80px] font-black text-black/[0.03] leading-none pointer-events-none select-none">
                LAB_X26
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

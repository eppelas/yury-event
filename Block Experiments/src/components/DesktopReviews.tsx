import { motion } from 'framer-motion';

const REVIEWS_DATA = [
  {
    name: 'Дмитрий Твердохлебов',
    title: 'ex-директор ИИ МТС, ex-CPO AI VK',
    text: 'снова иду учиться к упоротым на практике чувакам из AI Mindset. Все, как мы любим: 20% теории, 80% практики. Дипломы не дают, выпускников на работу не устраивают, рост зарплаты на 146% не обещают, за что им отдельное спасибо.',
  },
  {
    name: 'Дмитрий Лаухин',
    title: 'евангелист Obsidian, Second Brain',
    text: 'Редко что-то советую от себя, но здесь тот самый случай. AI вплетается в жизнь не как магический инструмент, а как часть системы мышления. Это не про хайп и не про энциклопедию инструментов.',
  },
  {
    name: 'Оля Еремина',
    title: 'Предприниматель',
    text: 'использовать ИИ — это не писать промпт. Использовать ИИ — это самому создавать контекст. Спасибо ребятам AI Mindset за проект. За то, что они говорят на понятном языке.',
  },
  {
    name: 'Олег Цербаев',
    title: 'историк, Apple / Avito / Deutsche Bank',
    text: 'Был удивлен. Сильно. Ребята нашли уникальную нишу, стиль и интонацию, которые предельно точно попадают в нерв сегодняшнего и завтрашнего дня. AI Mindset показывает реальный путь.',
  },
  {
    name: 'Вероника Долгих',
    title: 'COO, SETTERS Agency',
    text: 'я офигела, как клод четко прописал мне схему планирования, чтобы не выпадать из режима, избегать выгораний. оооочень круто вытащил поведенческие паттерны года.',
  },
  {
    name: 'Александра Гусева',
    title: 'L&D, Avito',
    text: 'Произошел shift. Я на 30% начала думать AI-first: где я могу ускориться за счет того, что AI начнет помогать.',
  },
];

export const DesktopReviews = () => {
  return (
    <div className="w-full bg-[#f3f3f5] py-20 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Ticker Section */}
        <div className="w-full border-y border-black uppercase py-2 mb-12 flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            className="flex whitespace-nowrap min-w-full text-xs font-mono tracking-[0.3em] font-bold"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mr-8">AI MINDSET // REVIEWS // LAB X26 // TESTIMONIALS ///</span>
            ))}
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-[#8dc63f] font-mono font-bold text-xs tracking-[0.3em] mb-4 uppercase">
              What they say
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              ОТЗЫВЫ <br /> 
              <span className="text-black/20">УЧАСТНИКОВ</span>
            </h2>
          </div>
          <div className="max-w-xs text-sm font-medium text-black/60 font-mono text-right pb-4">
            [REVIEWS_DATABASE_V1.0.1]<br />
            STATUS: REAL_PEOPLE_ONLY<br />
            TOTAL: {REVIEWS_DATA.length} UNITS
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-black p-8 relative flex flex-col justify-between"
            >
              {/* Card Corner Tag */}
              <div className="absolute top-0 right-0 border-l border-b border-black p-2 font-mono text-[10px] font-bold uppercase text-black/30">
                REF-{idx + 1}
              </div>

              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#8dc63f] text-sm">✦</span>
                  ))}
                </div>
                
                <p className="text-xl font-bold leading-tight mb-8 tracking-tight">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10">
                <div className="text-sm font-black uppercase tracking-tight text-black flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8dc63f]"></div>
                  {review.name}
                </div>
                <div className="text-[10px] uppercase font-mono font-bold text-black/50 mt-1 pl-4">
                  {review.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom ASCII Info */}
        <div className="mt-20 flex justify-center">
            <div className="font-mono text-[11px] text-black/30 leading-relaxed text-center py-4 px-10 border border-black/10 uppercase">
                * * * * * * * * * * * * * * * * * * * * * * *<br />
                all reviews verified by ai mindset lab system<br />
                origin: ai mindset lab x26 alumni network<br />
                * * * * * * * * * * * * * * * * * * * * * * *
            </div>
        </div>

      </div>
    </div>
  );
};

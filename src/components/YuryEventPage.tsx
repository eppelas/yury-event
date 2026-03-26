import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, ArrowRight, ChevronDown, X } from 'lucide-react';

const ChronakisStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
    
    html {
      scroll-behavior: smooth;
    }

    .font-serif-chronakis { font-family: 'Playfair Display', serif; }
    .font-sans-chronakis { font-family: 'Inter', sans-serif; }
    
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .dotted-pattern {
      background-image: radial-gradient(#000 1px, transparent 1px);
      background-size: 4px 4px;
    }
  `}</style>
);

const Header = ({ setIsMenuOpen }: { setIsMenuOpen: (v: boolean) => void }) => (
  <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-8 py-6 bg-[#F3DACE] border-b border-black/10">
    <div className="font-sans-chronakis text-xs tracking-[0.2em] font-bold uppercase">
      STRATEGY & TEAM RETREATS
    </div>
    
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
      <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center font-serif-chronakis italic text-lg shadow-sm">
        SteamX
      </div>
    </div>

    <div className="flex items-center gap-8">
      <div className="hidden md:flex gap-8 font-sans-chronakis text-xs tracking-widest font-medium uppercase">
        <a href="https://t.me/chikhalov" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Связаться с нами</a>
        <a href="https://t.me/chikhalov" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Забронировать</a>
      </div>
      <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
    </div>
  </header>
);

const MenuOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#E83626] text-[#F3DACE] flex flex-col justify-center items-center"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-[#F3DACE] hover:opacity-60 transition-opacity">
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col gap-8 text-center font-serif-chronakis text-4xl md:text-6xl">
          <a href="#why" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">Зачем это нужно?</a>
          <a href="#process" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">Дизайн Процесса</a>
          <a href="#details" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">Программа & Стоимость</a>
          <a href="#clients" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">Клиенты & Отзывы</a>
          <a href="#team" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">Наша Команда</a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MapIllustration = ({ crazyMode }: { crazyMode: boolean }) => (
  <svg viewBox="0 0 400 400" className="w-full h-full opacity-80">
    {/* Business Path */}
    <motion.path
      d="M50,80 C150,80 150,200 200,200 C250,200 250,320 350,320"
      fill="none"
      stroke="black"
      strokeWidth="2"
      animate={crazyMode ? { d: "M50,80 C100,20 200,100 200,200 C200,300 300,380 350,320" } : {}}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
    />
    
    {/* Human/Team Path */}
    <motion.path
      d="M50,320 C150,320 100,150 200,200 C300,250 250,80 350,80"
      fill="none"
      stroke="black"
      strokeWidth="2"
      animate={crazyMode ? { d: "M50,320 C180,380 50,150 200,200 C350,250 220,20 350,80" } : {}}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
    />
    
    {/* Nodes */}
    {[
      { cx: 50, cy: 80, label: "CHALLENGES" },
      { cx: 144, cy: 140, label: "COMMUNICATION" },
      { cx: 350, cy: 320, label: "STRATEGY" },
      
      { cx: 50, cy: 320, label: "ROUTINE" },
      { cx: 125, cy: 241, label: "TRUST" },
      
      { cx: 200, cy: 200, label: "RETREAT" },
      
      { cx: 275, cy: 159, label: "INSPIRATION" },
      { cx: 350, cy: 80, label: "VISION" },
      
      { cx: 256, cy: 260, label: "ENERGY" },
    ].map((node, i) => (
      <g key={i}>
        <circle cx={node.cx} cy={node.cy} r="4" fill="black" />
        <circle cx={node.cx} cy={node.cy} r="20" fill="none" stroke="black" strokeWidth="1" strokeDasharray="2 2" />
        <text x={node.cx} y={node.cy - 25} textAnchor="middle" stroke="#F3DACE" strokeWidth="4" strokeLinejoin="round" className="font-sans-chronakis text-[8px] tracking-widest uppercase font-bold">{node.label}</text>
        <text x={node.cx} y={node.cy - 25} textAnchor="middle" className="font-sans-chronakis text-[8px] tracking-widest uppercase font-bold">{node.label}</text>
      </g>
    ))}
    
    {/* Compass */}
    <g transform="translate(50, 200)">
      <circle cx="0" cy="0" r="25" fill="none" stroke="black" strokeWidth="1" />
      <path d="M0,-20 L5,0 L0,20 L-5,0 Z" fill="black" />
      <path d="M-20,0 L0,-5 L20,0 L0,5 Z" fill="none" stroke="black" />
      <text y="-30" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">N</text>
      <text y="35" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">S</text>
      <text x="-35" y="3" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">W</text>
      <text x="35" y="3" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">E</text>
    </g>
  </svg>
);

const ListItem = ({ number, title, description }: { number: number, title: string, description?: string }) => (
  <div className="flex gap-6 group cursor-pointer w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-black text-[#F3DACE] rounded-full flex items-center justify-center font-sans-chronakis font-bold text-sm group-hover:bg-[#E83626] transition-colors">
      {number}
    </div>
    <div className="space-y-2">
      <h3 className="font-sans-chronakis font-bold text-sm tracking-widest uppercase pt-1.5">{title}</h3>
      {description && <p className="font-serif-chronakis text-lg leading-relaxed opacity-80 max-w-md">{description}</p>}
    </div>
  </div>
);

const ToggleSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/10 py-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center group">
        <h3 className="font-serif-chronakis text-2xl group-hover:text-[#E83626] transition-colors">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-6 font-sans-chronakis text-base leading-relaxed opacity-80 max-w-2xl">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function YuryEventPage() {
  const [crazyMode, setCrazyMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll bg-[#F3DACE] text-black selection:bg-black selection:text-[#F3DACE] hide-scrollbar relative">
      <ChronakisStyles />
      <Header setIsMenuOpen={setIsMenuOpen} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Sidebar Pattern */}
      <div className="fixed left-0 top-0 bottom-0 w-8 md:w-12 border-r border-black/10 dotted-pattern z-30 hidden md:block pointer-events-none" />

      {/* Floating Action Button */}
      <motion.button 
        className="fixed bottom-8 right-8 z-50 w-24 h-24 md:w-32 md:h-32 bg-[#E83626] rounded-full flex flex-col items-center justify-center text-white font-sans-chronakis font-bold text-xs md:text-sm tracking-widest shadow-lg hover:scale-105 transition-transform"
        animate={{ rotate: [-45, 45, -45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setCrazyMode(!crazyMode)}
      >
        <span className="block mb-1">BOOK</span>
        <span className="block">RETREAT</span>
      </motion.button>

      <main className="pl-0 md:pl-12 pt-24">
        
        {/* Hero Title */}
        <section className="py-24 px-8 md:px-16 text-center border-b border-black/10 relative">
          <motion.h1 
            className="font-serif-chronakis text-4xl md:text-6xl lg:text-7xl mb-6 mx-auto max-w-5xl leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Создаём аутентичное<br className="hidden md:block"/>мероприятие
          </motion.h1>
          <p className="font-serif-chronakis text-xl max-w-3xl mx-auto mb-12 opacity-80 leading-relaxed">
            Позволяющее одновременно получить незабываемый опыт, отдохнуть, восстановиться и наиболее эффективно решить бизнес-задачи.
          </p>
          <p className="font-sans-chronakis text-xs tracking-[0.3em] uppercase opacity-60">
            CORPORATE RETREATS — 2026/27
          </p>
        </section>

        {/* Split Section 1: Map & Why */}
        <section id="why" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-b border-black/10 pt-24">
          {/* Left: Map */}
          <div className="relative border-r border-black/10 p-8 md:p-16 flex items-center justify-center overflow-hidden bg-[#F3DACE]">
            <div className="absolute inset-0 opacity-5 dotted-pattern" />
            <div className="w-full max-w-lg aspect-square relative mix-blend-multiply">
               <MapIllustration crazyMode={crazyMode} />
            </div>
          </div>

          {/* Right: List */}
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-[#F3DACE]">
            <h2 className="font-sans-chronakis text-xl font-bold uppercase tracking-widest mb-12">Зачем нужны корпоративные заезды?</h2>
            <div className="space-y-12">
              <ListItem 
                number={1} 
                title="Vision (Видение)" 
                description="Создать новое вдохновляющее видение будущего и превратить его в четкую стратегию."
              />
              <ListItem 
                number={2} 
                title="Trust (Доверие)" 
                description="Повысить доверие внутри команды, улучшить качество рабочих коммуникаций. Сплотить ключевых игроков команды."
              />
              <ListItem 
                number={3} 
                title="Inspiration (Вдохновение)" 
                description="Вернуть сотрудникам вдохновение создавать вместе новое, увидеть ответы на вопросы, которые не решаются в стенах офиса."
              />
              <ListItem 
                number={4} 
                title="Energy (Энергия)" 
                description="Восстановить силы и энергию для новых свершений."
              />
            </div>
          </div>
        </section>

        {/* Full Width Image Section - How it works / Design */}
        <section id="process" className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 bg-[#EFE5DE] pt-24">
           <div className="h-[50vh] lg:h-auto overflow-hidden relative border-r border-black/10">
              <motion.img 
                src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1200&auto=format&fit=crop" 
                alt="Retreat Campfire" 
                className="w-full h-full object-cover sepia-[.3] grayscale-[.2]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-[#F3DACE] mix-blend-multiply opacity-20 pointer-events-none" />
           </div>
           <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-8 bg-black text-[#F3DACE] rounded-full flex items-center justify-center font-sans-chronakis font-bold text-sm">✓</div>
                 <h2 className="font-sans-chronakis font-bold text-sm tracking-widest uppercase">Пример Дизайна Процесса</h2>
              </div>
              <p className="font-serif-chronakis text-xl md:text-2xl leading-relaxed mb-6 font-bold">
                 Запрос: "Сформулировать новое видение развития компании на 2026-2030 годы"
              </p>
              <ul className="font-sans-chronakis text-sm mt-4 opacity-80 leading-relaxed max-w-md space-y-4">
                 <li><strong>1. Погружение в момент.</strong> Трансфер, чекины. Результат: Переход в настоящий момент.</li>
                 <li><strong>2. Глубинное исследование.</strong> Фасилитация. Результат: Список ключевых вызовов.</li>
                 <li><strong>3. Прорыв в будущее.</strong> Форсайт-сессии. Результат: Драфт долгосрочного видения.</li>
                 <li><strong>4. Новое видение.</strong> Стратегические сессии (U-theory). Результат: Конкретные шаги.</li>
                 <li><strong>5. Празднование.</strong> Ужины, вечеринки. Результат: Радость и сплочение.</li>
                 <li><strong>6. Завершение.</strong> Рефлексия, мерч. Результат: Вдохновение.</li>
              </ul>
           </div>
        </section>

        {/* Toggles Section: How it works & Cost */}
        <section id="details" className="py-24 px-8 md:px-16 bg-[#F3DACE] border-b border-black/10 pt-24">
           <div className="max-w-4xl mx-auto space-y-2">
              <div className="text-center mb-16">
                 <h2 className="font-serif-chronakis text-4xl md:text-5xl mb-4">Программа со смыслом</h2>
                 <div className="w-24 h-[1px] bg-black mx-auto" />
              </div>
              <ToggleSection title="Как это работает?">
                <ul className="list-disc pl-5 space-y-3">
                  <li>Проводим глубинное интервью, выясняем запрос на мероприятие с командой заказчика, учитываем цели компании и индивидуальные запросы всех участников.</li>
                  <li>Предлагаем программу под ваш бюджет.</li>
                  <li>Готовим сценарий мероприятия: обращаем внимание на работу с состоянием и групповой динамикой.</li>
                  <li>Организуем выезд под ключ.</li>
                  <li>Решаем все возникающие вопросы на месте.</li>
                  <li>Подводим итоги и помогаем интегрировать полученный опыт.</li>
                </ul>
              </ToggleSection>
              
              <ToggleSection title="Проблема / Решение">
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Проблема:</strong> Выезды часто бывают скучными или утомительными.<br/><strong>Решение:</strong> Предлагаем глубокие, вовлекающие программы.</li>
                  <li><strong>Проблема:</strong> Участники сидят в телефонах.<br/><strong>Решение:</strong> Создаем безопасное пространство для присутствия и реального общения.</li>
                  <li><strong>Проблема:</strong> Сложно согласовать детали поездки.<br/><strong>Решение:</strong> Предоставляем детальные, продуманные программы и забираем всю организацию.</li>
                </ul>
              </ToggleSection>

              <ToggleSection title="Из чего состоит выезд? & Стоимость">
                <p className="mb-4"><strong>Базовый пакет:</strong> Концепция, подбор площадки, забота о комфорте. Включает трансфер, консьерж-сервис и премиум-проживание (Грузия, Алматы, Сочи и др.).</p>
                <p className="mb-4"><strong>Регионы:</strong> Сербия, Россия, Грузия, Армения, Казахстан, Турция, ОАЭ, Португалия.</p>
                <p><strong>Стоимость:</strong> Зависит от количества участников, программы и локации. В среднем — от $900 за участника (2 дня, отель 5*, программа, без перелета).</p>
              </ToggleSection>
              
              <ToggleSection title="Дополнительные активности">
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Заряжающий хайкинг:</strong> Маршрут по красивым тропам поможет отвлечься от рутины и насладиться природой.</li>
                  <li><strong>Банная церемония:</strong> Культура пара с фестивальным опытом (Burning Man vibe), расслабление и перезагрузка.</li>
                  <li><strong>Гала-ужин:</strong> Праздничный ужин для подведения итогов и неформального общения.</li>
                </ul>
              </ToggleSection>
           </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-24 px-8 md:px-16 bg-[#EFE5DE] border-b border-black/10 pt-24">
           <div className="text-center mb-16">
              <h2 className="font-serif-chronakis text-4xl md:text-5xl mb-4">Нам Доверяют</h2>
              <div className="w-24 h-[1px] bg-black mx-auto" />
           </div>
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 max-w-5xl mx-auto opacity-70 font-sans-chronakis text-xl md:text-3xl font-bold uppercase tracking-widest text-center leading-loose">
             <span>Raiffeisen BANK</span>
             <span className="opacity-30">•</span>
             <span>Yandex</span>
             <span className="opacity-30">•</span>
             <span>Aviasales</span>
             <span className="opacity-30">•</span>
             <span>Miro</span>
             <span className="opacity-30">•</span>
             <span>Profi.ru</span>
             <span className="opacity-30">•</span>
             <span>Subsquid</span>
             <span className="opacity-30">•</span>
             <span>RichAds</span>
             <span className="opacity-30">•</span>
             <span>Zerocoder</span>
           </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 px-8 md:px-16 bg-[#F3DACE] border-b border-black/10 pt-24">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { text: "«Для нашей команды этот опыт стал настоящим празднованием и наградой! После выезда команда была вдохновлена выходить на следующий уровень развития бизнеса»", author: "Влад Михалёв", role: "Основатель Zerocoder" },
               { text: "«Ребята сделали для нас просто невозможное и организовали один из лучших опытов, которые мы могли получить в Грузии»", author: "Ведущий дизайнер", role: "Profi.ru" },
               { text: "«Я восхищаюсь тем, насколько ребята влюбленны в свое дело и насколько глубоко они продумывают все детали»", author: "Руководитель", role: "Тинькофф" },
             ].map((review, i) => (
                <div key={i} className="flex flex-col h-full border border-black/10 p-8 bg-[#EFE5DE] hover:-translate-y-2 transition-transform duration-500">
                  <p className="font-serif-chronakis text-xl md:text-2xl leading-relaxed flex-grow mb-8">
                    {review.text}
                  </p>
                  <div className="pt-6 border-t border-black/10">
                    <p className="font-sans-chronakis font-bold text-[10px] tracking-widest uppercase mb-1">{review.author}</p>
                    <p className="font-serif-chronakis italic opacity-70 mb-0">{review.role}</p>
                  </div>
                </div>
             ))}
           </div>
        </section>

        {/* Guides Section */}
        <section id="team" className="py-24 px-8 md:px-16 bg-[#EFE5DE] pt-24">
           <div className="text-center mb-16">
              <h2 className="font-serif-chronakis text-4xl md:text-5xl mb-4">Наша Команда</h2>
              <div className="w-24 h-[1px] bg-black mx-auto" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-2xl mx-auto">
              {[
                 { 
                   name: "Yury Chikhalov", 
                   role: "Camp Creator globally", 
                   image: "/yury.jpg",
                   desc: "Camp creator globally, founder of fitonfit.ru, ex-PM at profi.ru. Expert in Embodiment and bath experiences."
                 },
                 { 
                   name: "Dmitry Riman", 
                   role: "Serial Entrepreneur", 
                   image: "/dmitry.jpg",
                   desc: "Founder of Business Community (Bali), over 200 retreats conducted for clients like Leroy Merlin and Yandex."
                 }
              ].map((guide, i) => (
                 <div key={i} className="group cursor-pointer flex flex-col items-center text-center">
                    <div className="aspect-[3/4] w-48 overflow-hidden mb-6 border border-black/10 relative rounded-t-full">
                       <img src={guide.image} alt={guide.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                       <div className="absolute inset-0 bg-[#F3DACE] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity pointer-events-none" />
                    </div>
                    <h3 className="font-sans-chronakis font-bold text-lg tracking-widest uppercase mb-2">{guide.name}</h3>
                    <p className="font-serif-chronakis italic opacity-70 mb-4 text-[16px]">{guide.role}</p>
                    <p className="font-sans-chronakis text-sm opacity-60 leading-relaxed max-w-xs">{guide.desc}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 md:px-16 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="font-sans-chronakis text-xs tracking-[0.2em] font-bold uppercase">
              Strategy & Team Retreats © 2026
           </div>
           <div className="flex flex-wrap justify-center gap-8 font-sans-chronakis text-xs tracking-widest uppercase opacity-80 items-center">
              <span>chikhalov@gmail.com</span>
              <a href="https://t.me/chikhalov" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Telegram</a>
              <span>+7(915)212-05-73</span>
           </div>
        </footer>

      </main>
    </div>
  );
}

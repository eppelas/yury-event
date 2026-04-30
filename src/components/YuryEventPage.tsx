import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X, Compass, Layers3, Sparkles, ShieldCheck, Target, Users, MessageSquare, Route, Handshake, CalendarCheck } from 'lucide-react';

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

    @keyframes logo-marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    .logo-marquee-track {
      animation: logo-marquee 30s linear infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .logo-marquee-track {
        animation: none;
        transform: none;
      }
    }
  `}</style>
);

const T = {
  header_title: { ru: 'СТРАТЕГИЧЕСКИЕ И КОМАНДНЫЕ ВЫЕЗДЫ', en: 'STRATEGY & TEAM RETREATS' },
  contact: { ru: 'Связаться с нами', en: 'Contact Us' },
  book: { ru: 'Узнать детали', en: 'Get details' },
  menu_why: { ru: 'Зачем это нужно?', en: 'Why do you need it?' },
  menu_formats: { ru: 'Форматы', en: 'Formats' },
  menu_process: { ru: 'Дизайн Процесса', en: 'Process Design' },
  menu_details: { ru: 'Подход & Стоимость', en: 'Approach & Pricing' },
  menu_team: { ru: 'Наша Команда', en: 'Our Team' },
  menu_clients: { ru: 'Отзывы', en: 'Reviews' },
  hero_title_1: { ru: 'Создаём аутентичное мероприятие', en: 'Creating an authentic event' },
  hero_title_2: { ru: 'для вашей компании', en: 'for your company' },
  hero_bullets: {
    ru: [
      { title: 'Незабываемый отдых', target: 'для сотрудников' },
      { title: 'Душевный формат', target: 'для развития корпоративной культуры' },
      { title: 'Эффективное решение задач', target: 'для бизнеса' },
    ],
    en: [
      { title: 'A memorable retreat', target: 'for employees' },
      { title: 'A warm human format', target: 'for corporate culture' },
      { title: 'Effective problem-solving', target: 'for business' },
    ],
  },
  hero_caption: { ru: 'КОРПОРАТИВНЫЕ ВЫЕЗДЫ — 2026/27', en: 'CORPORATE RETREATS — 2026/27' },
  fab_book: { ru: 'ОБСУДИТЬ', en: 'DISCUSS' },
  fab_retreat: { ru: 'ВЫЕЗД', en: 'RETREAT' },
  hero_trust: {
    ru: ['2000+ человек приняли участие', 'Команды Profi.ru, Yandex, Raiffeisen', 'Стратегия + восстановление + организация'],
    en: ['2000+ people participated', 'Teams from Profi.ru, Yandex, Raiffeisen', 'Strategy + recovery + execution'],
  },
  why_title: { ru: 'Зачем нужны корпоративные выезды?', en: 'Why host a corporate retreat?' },
  why_items: {
    ru: [
      { title: 'Vision (Видение)', desc: 'Создать новое вдохновляющее видение будущего и превратить его в четкую стратегию.' },
      { title: 'Trust (Доверие)', desc: 'Повысить доверие внутри команды, улучшить качество рабочих коммуникаций. Сплотить ключевых игроков.' },
      { title: 'Inspiration (Вдохновение)', desc: 'Вернуть сотрудникам вдохновение создавать вместе новое, увидеть ответы на вопросы вне офиса.' },
      { title: 'Energy (Энергия)', desc: 'Восстановить силы и энергию для новых свершений.' }
    ],
    en: [
      { title: 'Vision', desc: 'Create a new inspiring vision of the future and turn it into a clear strategy.' },
      { title: 'Trust', desc: 'Increase trust within the team, improve the quality of work communications. Unite key players.' },
      { title: 'Inspiration', desc: 'Return inspiration to create together, find answers to questions that cannot be solved in the office.' },
      { title: 'Energy', desc: 'Restore strength and energy for new achievements.' }
    ]
  },
  outcomes_title: { ru: 'Под какие бизнес-задачи мы собираем выезд', en: 'Business outcomes we design for' },
  outcomes_intro: {
    ru: 'Перед программой мы уточняем, какой сдвиг нужен компании. От этого зависит формат, площадка, ритм, фасилитация и состав активностей.',
    en: 'Before designing the program, we define the shift the company needs. The format, venue, rhythm, facilitation, and activities follow that question.',
  },
  outcomes: {
    ru: [
      { title: 'Стратегическая ясность', text: 'Собрать видение, приоритеты и решения, которые сложно принять в офисной операционке.' },
      { title: 'Синхронизация leadership-команды', text: 'Выравнять ожидания, роли, ответственность и договорённости между ключевыми людьми.' },
      { title: 'Доверие и коммуникация', text: 'Снизить напряжение, вернуть живой контакт и создать пространство для честных разговоров.' },
      { title: 'Восстановление ресурса', text: 'Дать команде сильный опыт, смену контекста и энергию для нового цикла работы.' },
    ],
    en: [
      { title: 'Strategic clarity', text: 'Shape vision, priorities, and decisions that are hard to reach inside daily operations.' },
      { title: 'Leadership alignment', text: 'Align expectations, roles, ownership, and agreements between key people.' },
      { title: 'Trust and communication', text: 'Reduce tension, restore real contact, and create space for honest conversations.' },
      { title: 'Energy recovery', text: 'Give the team a powerful experience, a change of context, and energy for the next cycle.' },
    ],
  },
  process_title: { ru: 'Пример Дизайна Процесса', en: 'Process Design Example' },
  process_req: { ru: 'Запрос: "Сформулировать новое видение развития компании на 2026-2030 годы"', en: 'Request: "Formulate a new development vision for 2026-2030"' },
  process_items: {
    ru: [
      '1. Погружение в момент. Трансфер, чекины. Результат: Переход в настоящий момент.',
      '2. Глубинное исследование. Фасилитация. Результат: Список ключевых вызовов.',
      '3. Прорыв в будущее. Форсайт-сессии. Результат: Драфт долгосрочного видения.',
      '4. Новое видение. Стратегические сессии (U-theory). Результат: Конкретные шаги.',
      '5. Празднование. Ужины, вечеринки. Результат: Радость и сплочение.',
      '6. Завершение. Рефлексия, мерч. Результат: Вдохновение.'
    ],
    en: [
      '1. Immersion. Transfer, check-ins. Result: Transition to the present moment.',
      '2. Deep exploration. Facilitation. Result: List of key challenges.',
      '3. Breakthrough to the future. Foresight sessions. Result: Draft of long-term vision.',
      '4. New vision. Strategic sessions (U-theory). Result: Concrete steps.',
      '5. Celebration. Dinners, parties. Result: Joy and unity.',
      '6. Completion. Reflection, merch. Result: Inspiration.'
    ]
  },
  formats_title: { ru: 'Форматы, которые можно собрать под задачу', en: 'Formats tailored to your goal' },
  formats_intro: {
    ru: 'Мы не продаём один шаблонный выезд. Под задачу команды собирается формат, ритм и глубина: от стратегической перезагрузки до деликатного выезда для ключевых людей.',
    en: 'We do not sell one fixed retreat. We shape the format, rhythm, and depth around your team: from strategic reset to intimate offsites for key people.',
  },
  formats: {
    ru: [
      {
        title: 'Strategy Retreat',
        eyebrow: 'Для собственников и leadership-команды',
        text: 'Когда нужно выйти из операционки, собрать видение, принять сложные решения и договориться о следующем цикле движения.',
        points: ['Видение и стратегия', 'Приоритеты на 6–12 месяцев', 'Ключевые развилки и решения'],
      },
      {
        title: 'Team Retreat',
        eyebrow: 'Для команды, которой нужен общий ритм',
        text: 'Когда важно восстановить доверие, вернуть живую коммуникацию и заново почувствовать себя одной командой, а не набором функций.',
        points: ['Коммуникация и доверие', 'Сцепка между людьми', 'Энергия и вовлечённость'],
      },
      {
        title: 'Leadership Offsite',
        eyebrow: 'Для ключевых людей и непростых разговоров',
        text: 'Когда нужен камерный формат для важных обсуждений, выравнивания ролей, прояснения напряжений и сборки зрелой управленческой опоры.',
        points: ['Роли и ожидания', 'Сложные разговоры', 'Управленческая ясность'],
      },
    ],
    en: [
      {
        title: 'Strategy Retreat',
        eyebrow: 'For founders and leadership',
        text: 'Designed for teams that need to step out of operations, shape vision, make hard decisions, and align on the next cycle of growth.',
        points: ['Vision and strategy', '6–12 month priorities', 'Key decisions and trade-offs'],
      },
      {
        title: 'Team Retreat',
        eyebrow: 'For teams that need shared rhythm',
        text: 'Built to restore trust, bring back real communication, and help people feel like one team again instead of a set of functions.',
        points: ['Communication and trust', 'Human cohesion', 'Energy and engagement'],
      },
      {
        title: 'Leadership Offsite',
        eyebrow: 'For key people and important conversations',
        text: 'A more intimate format for role alignment, high-stakes conversations, clearing tension, and strengthening the core leadership group.',
        points: ['Roles and expectations', 'Difficult conversations', 'Leadership clarity'],
      },
    ],
  },
  effectiveness_title: { ru: 'Почему наш подход работает эффективно', en: 'Why our approach works' },
  effectiveness_intro: {
    ru: 'Эффективность рождается не из количества активностей, а из точной сборки: правильного запроса, сильного ритма и пространства, где команда может и думать, и восстанавливаться.',
    en: 'What makes it effective is not the number of activities, but the design itself: the right question, the right rhythm, and a space where the team can both think and recover.',
  },
  effectiveness: {
    ru: [
      {
        title: 'Начинаем с бизнес-запроса',
        text: 'Сначала уточняем, что именно должно измениться после выезда: решения, коммуникация, доверие, стратегия или состояние команды.',
      },
      {
        title: 'Собираем ритм, а не набор активностей',
        text: 'Чередуем глубокую работу, восстановление и неформальные моменты так, чтобы каждый блок усиливал следующий, а не утомлял участников.',
      },
      {
        title: 'Работаем с динамикой группы',
        text: 'Учитываем состав команды, напряжения, роли и темпераменты, чтобы люди не просто присутствовали, а реально включались в процесс.',
      },
      {
        title: 'Берём организацию на себя',
        text: 'Логистика, площадка, проживание, переходы и on-site сопровождение собраны под ключ, поэтому лидеры могут быть внутри процесса, а не в администрировании.',
      },
    ],
    en: [
      {
        title: 'We start with the business question',
        text: 'First we define what should change after the retreat: decisions, communication, trust, strategy, or the state of the team.',
      },
      {
        title: 'We design rhythm, not activity overload',
        text: 'Deep work, recovery, and informal moments are sequenced so each block amplifies the next one instead of draining people.',
      },
      {
        title: 'We work with group dynamics',
        text: 'We consider tensions, roles, personalities, and team composition so people truly engage rather than just show up.',
      },
      {
        title: 'We take care of execution',
        text: 'Logistics, venue, transitions, accommodation, and on-site coordination are handled for you so leaders can stay inside the process.',
      },
    ],
  },
  details_title: { ru: 'Программа со смыслом', en: 'Meaningful Program' },
  toggles: {
    ru: [
      { title: 'Как мы собираем выезд', content: ['Проводим интервью и формулируем запрос.', 'Проектируем ритм выезда под команду и бюджет.', 'Готовим сценарий, площадку и логистику.', 'Сопровождаем процесс на месте и помогаем интегрировать результат.'] },
      { title: 'Что входит в базовый пакет', content: ['Концепция и сценарий.', 'Подбор площадки и премиум-проживание.', 'Трансфер, питание и организация под ключ.', 'Работа с групповой динамикой и сопровождение команды.'] },
      { title: 'Стоимость и география', content: ['Стоимость: от $900 за участника (2 дня, отель 5*).', 'Регионы: Сербия, Россия, Грузия, Армения, Казахстан, Турция, ОАЭ, Португалия.', 'Финальная смета зависит от формата, состава группы и уровня сервиса.'] },
      { title: 'Дополнительные активности', content: ['Заряжающий хайкинг для смены контекста.', 'Банная церемония как формат восстановления и сближения.', 'Гала-ужин или вечерний перформанс для интеграции и празднования.'] }
    ],
    en: [
      { title: 'How we build the retreat', content: ['We start with an interview and define the real request.', 'We design the rhythm around team dynamics and budget.', 'We prepare the program flow, venue, and logistics.', 'We guide the process on-site and help integrate outcomes.'] },
      { title: 'What the base package includes', content: ['Concept and process design.', 'Venue selection and premium accommodation.', 'Transfer, food, and turn-key organization.', 'Group dynamics work and full support on-site.'] },
      { title: 'Pricing and geography', content: ['Pricing starts from $900 per person (2 days, 5* hotel).', 'Regions: Serbia, Russia, Georgia, Armenia, Kazakhstan, Turkey, UAE, Portugal.', 'The final estimate depends on format, group size, and service level.'] },
      { title: 'Extra experiences', content: ['Hiking to change state and context.', 'Banya ceremony for recovery and real human closeness.', 'Gala dinner or evening performance for integration and celebration.'] }
    ]
  },
  trusted_title: { ru: 'Нам Доверяют', en: 'Trusted By' },
  team_title: { ru: 'Наша Команда', en: 'Our Team' },
  team: {
    ru: [
      { name: "Юрий Чихалов", role: "Создатель кэмпов / Camp Creator", image: "./yury-original.png", desc: "Основатель fitonfit.ru, ex-PM в profi.ru. Эксперт по телесным (embodiment) практикам и банным церемониям." },
      { name: "Дмитрий Риман", role: "Серийный предприниматель", image: "./dmitry.jpg", desc: "Основатель Business Community (Бали), провел более 200 выездов для таких клиентов, как Leroy Merlin и Yandex." }
    ],
    en: [
      { name: "Yury Chikhalov", role: "Camp Creator globally", image: "./yury-original.png", desc: "Founder of fitonfit.ru, ex-PM at profi.ru. Expert in Embodiment and bath experiences." },
      { name: "Dmitry Riman", role: "Serial Entrepreneur", image: "./dmitry.jpg", desc: "Founder of Business Community (Bali), over 200 retreats conducted for clients like Leroy Merlin and Yandex." }
    ]
  },
  reviews_video_title: { ru: 'Видео-отзывы о выездах', en: 'Video Reviews from Retreats' },
  reviews: {
    ru: [
      { text: "«Для нашей команды этот опыт стал настоящим празднованием и наградой! После выезда команда была вдохновлена выходить на следующий уровень развития бизнеса»", author: "Влад Михалёв", role: "Основатель Zerocoder" },
      { text: "«Ребята сделали для нас просто невозможное и организовали один из лучших опытов, которые мы могли получить в Грузии»", author: "Ведущий дизайнер", role: "Profi.ru" },
      { text: "«Я восхищаюсь тем, насколько ребята влюбленны в свое дело и насколько глубоко они продумывают все детали»", author: "Руководитель", role: "Тинькофф" },
    ],
    en: [
      { text: "«This experience became a true celebration and reward for our team! After the retreat, the team was inspired to reach the next business level»", author: "Vlad Mikhalev", role: "Founder of Zerocoder" },
      { text: "«The team did the impossible and organized one of the best experiences we could get in Georgia»", author: "Lead Designer", role: "Profi.ru" },
      { text: "«I admire how much these guys love what they do and how deeply they think through all the details»", author: "Head of Unit", role: "Tinkoff" },
    ]
  },
  footer_text: { ru: 'Стратегические и Командные Выезды © 2026', en: 'Strategy & Team Retreats © 2026' },
  final_cta_title: { ru: 'Соберём выезд под вашу задачу', en: 'Let’s shape a retreat around your business question' },
  final_cta_text: {
    ru: 'Напишите, сколько человек в команде, где вы хотите провести выезд и какой результат нужен после него. Мы предложим формат, ритм и ориентир по бюджету.',
    en: 'Tell us your team size, preferred geography, and the result you need after the retreat. We will propose the format, rhythm, and budget range.',
  },
  final_cta_button: { ru: 'Обсудить выезд', en: 'Discuss retreat' },
  map: {
    ru: ["ВЫЗОВЫ", "КОММУНИКАЦИЯ", "СТРАТЕГИЯ", "РУТИНА", "ДОВЕРИЕ", "ВЫЕЗД", "ВДОХНОВЕНИЕ", "ВИДЕНИЕ", "ЭНЕРГИЯ"],
    en: ["CHALLENGES", "COMMUNICATION", "STRATEGY", "ROUTINE", "TRUST", "RETREAT", "INSPIRATION", "VISION", "ENERGY"]
  },
  compass: { ru: ["С", "Ю", "З", "В"], en: ["N", "S", "W", "E"] }
}

type Lang = 'ru' | 'en';

const trustedLogos = [
  { name: 'Raiffeisen Bank', src: './company-logos/raiffeisen.svg' },
  { name: 'Yandex', src: './company-logos/yandex.svg' },
  { name: 'Aviasales', src: './company-logos/aviasales.png' },
  { name: 'Miro', src: './company-logos/miro.svg' },
  { name: 'Profi.ru', src: './company-logos/profi.svg' },
  { name: 'Subsquid', src: './company-logos/subsquid.svg' },
  { name: 'RichAds', src: './company-logos/richads.svg' },
  { name: 'Zerocoder', src: './company-logos/zerocoder.svg' },
];

const Header = ({ lang, setLang, setIsMenuOpen }: { lang: Lang, setLang: (v: Lang) => void, setIsMenuOpen: (v: boolean) => void }) => (
  <header className="fixed top-0 left-0 right-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center px-4 py-4 md:px-8 md:py-6 bg-[#F3DACE] border-b border-black/10 gap-3 md:gap-4">
    <div className="min-w-0 font-sans-chronakis text-[10px] md:text-xs tracking-[0.14em] md:tracking-[0.2em] font-bold uppercase leading-tight max-w-[10.5rem] md:max-w-none">
      {T.header_title[lang]}
    </div>
    <div className="flex items-center gap-3 md:gap-8 shrink-0">
      <div className="hidden md:flex gap-8 font-sans-chronakis text-xs tracking-widest font-medium uppercase items-center">
        <a href="https://t.me/chikhalov2" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">{T.contact[lang]}</a>
      </div>
      <button
        type="button"
        onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} 
        aria-label={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
        className="font-sans-chronakis text-xs tracking-widest font-bold uppercase hover:opacity-60 transition-opacity border-b border-black pb-0.5 w-6 text-center"
      >
        {lang === 'ru' ? 'EN' : 'RU'}
      </button>
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        aria-label={lang === 'ru' ? 'Открыть меню' : 'Open menu'}
        className="hover:opacity-60 transition-opacity"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </header>
);

const MenuOverlay = ({ lang, isOpen, onClose }: { lang: Lang, isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#E83626] text-[#F3DACE] flex flex-col justify-center items-center"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={lang === 'ru' ? 'Закрыть меню' : 'Close menu'}
          className="absolute top-8 right-8 text-[#F3DACE] hover:opacity-60 transition-opacity"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col gap-8 text-center font-serif-chronakis text-4xl md:text-6xl">
          <a href="#why" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">{T.menu_why[lang]}</a>
          <a href="#formats" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">{T.menu_formats[lang]}</a>
          <a href="#process" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">{T.menu_process[lang]}</a>
          <a href="#details" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">{T.menu_details[lang]}</a>
          <a href="#team" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">{T.menu_team[lang]}</a>
          <a href="#clients" onClick={onClose} className="hover:opacity-60 transition-transform hover:scale-105">{T.menu_clients[lang]}</a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MapIllustration = ({ lang, crazyMode }: { lang: Lang, crazyMode: boolean }) => (
  <svg viewBox="0 0 400 400" className="w-full h-full opacity-80">
    <motion.path
      d="M50,80 C150,80 150,200 200,200 C250,200 250,320 350,320"
      fill="none" stroke="black" strokeWidth="2"
      animate={crazyMode ? { d: "M50,80 C100,20 200,100 200,200 C200,300 300,380 350,320" } : {}}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
    />
    <motion.path
      d="M50,320 C150,320 100,150 200,200 C300,250 250,80 350,80"
      fill="none" stroke="black" strokeWidth="2"
      animate={crazyMode ? { d: "M50,320 C180,380 50,150 200,200 C350,250 220,20 350,80" } : {}}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
    />
    
    {[
      { cx: 50, cy: 80, label: T.map[lang][0] },
      { cx: 144, cy: 140, label: T.map[lang][1] },
      { cx: 350, cy: 320, label: T.map[lang][2] },
      { cx: 50, cy: 320, label: T.map[lang][3] },
      { cx: 125, cy: 241, label: T.map[lang][4] },
      { cx: 200, cy: 200, label: T.map[lang][5] },
      { cx: 275, cy: 159, label: T.map[lang][6] },
      { cx: 350, cy: 80, label: T.map[lang][7] },
      { cx: 256, cy: 260, label: T.map[lang][8] },
    ].map((node, i) => (
      <g key={i}>
        <circle cx={node.cx} cy={node.cy} r="4" fill="black" />
        <circle cx={node.cx} cy={node.cy} r="20" fill="none" stroke="black" strokeWidth="1" strokeDasharray="2 2" />
        <text x={node.cx} y={node.cy - 25} textAnchor="middle" stroke="#F3DACE" strokeWidth="4" strokeLinejoin="round" className="font-sans-chronakis text-[8px] tracking-widest uppercase font-bold">{node.label}</text>
        <text x={node.cx} y={node.cy - 25} textAnchor="middle" className="font-sans-chronakis text-[8px] tracking-widest uppercase font-bold">{node.label}</text>
      </g>
    ))}
    
    <g transform="translate(50, 200)">
      <circle cx="0" cy="0" r="25" fill="none" stroke="black" strokeWidth="1" />
      <path d="M0,-20 L5,0 L0,20 L-5,0 Z" fill="black" />
      <path d="M-20,0 L0,-5 L20,0 L0,5 Z" fill="none" stroke="black" />
      <text y="-30" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">{T.compass[lang][0]}</text>
      <text y="35" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">{T.compass[lang][1]}</text>
      <text x="-35" y="3" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">{T.compass[lang][2]}</text>
      <text x="35" y="3" textAnchor="middle" className="font-sans-chronakis text-[8px] font-bold">{T.compass[lang][3]}</text>
    </g>
  </svg>
);

const ListItem = ({ number, title, description }: { key?: number | string, number: number, title: string, description?: string }) => (
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

const ToggleSection = ({ title, content }: { key?: number | string, title: string, content: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/10 py-6">
      <button
        type="button"
        className="flex w-full justify-between items-center group text-left"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-serif-chronakis text-2xl group-hover:text-[#E83626] transition-colors">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <ul className="pt-6 font-sans-chronakis text-base leading-relaxed opacity-80 max-w-2xl list-disc pl-5 space-y-3">
          {content.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </motion.div>
    </div>
  );
};

const FormatCard = ({ icon: Icon, eyebrow, title, text, points }: { key?: React.Key; icon: React.ComponentType<{ className?: string }>; eyebrow: string; title: string; text: string; points: string[] }) => (
  <div className="relative border border-black/10 bg-[#EFE5DE] p-6 md:p-10 min-h-[22rem] md:min-h-[24rem] flex flex-col">
    <div className="absolute top-0 left-8 right-8 h-px border-t border-dashed border-black/20 hidden md:block" />
    <div className="w-12 h-12 rounded-full bg-[#E83626] text-[#F3DACE] flex items-center justify-center mb-8 shadow-sm">
      <Icon className="w-5 h-5" />
    </div>
    <p className="font-sans-chronakis text-[10px] tracking-[0.25em] uppercase opacity-60 mb-3">{eyebrow}</p>
    <h3 className="font-serif-chronakis text-2xl md:text-4xl mb-4 md:mb-5 leading-tight">{title}</h3>
    <p className="font-serif-chronakis text-base md:text-lg leading-relaxed opacity-80 mb-6 md:mb-8">{text}</p>
    <div className="mt-auto space-y-3 pt-6 border-t border-black/10">
      {points.map((point) => (
        <div key={point} className="flex items-center gap-3 font-sans-chronakis text-xs tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#E83626]" />
          <span>{point}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProofCard = ({ icon: Icon, index, title, text }: { key?: React.Key; icon: React.ComponentType<{ className?: string }>; index: string; title: string; text: string }) => (
  <div className="border-t border-black/15 pt-6 pb-2">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-[#E83626] shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="space-y-3">
        <div className="font-sans-chronakis text-[10px] tracking-[0.28em] uppercase opacity-50">{index}</div>
        <h3 className="font-serif-chronakis text-2xl md:text-3xl leading-tight">{title}</h3>
        <p className="font-serif-chronakis text-lg leading-relaxed opacity-80 max-w-2xl">{text}</p>
      </div>
    </div>
  </div>
);

const OutcomeCard = ({ icon: Icon, title, text }: { key?: React.Key; icon: React.ComponentType<{ className?: string }>; title: string; text: string }) => (
  <div className="border-t border-black/15 py-6 md:py-8">
    <div className="flex gap-5 items-start">
      <div className="w-11 h-11 rounded-full bg-black text-[#F3DACE] flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-sans-chronakis text-sm tracking-widest uppercase font-bold mb-3">{title}</h3>
        <p className="font-serif-chronakis text-lg md:text-xl leading-relaxed opacity-80">{text}</p>
      </div>
    </div>
  </div>
);

const TrustedLogosSection = ({ lang }: { lang: Lang }) => (
  <section id="clients" className="py-10 md:py-12 bg-[#F3DACE] border-b border-black/10 overflow-hidden">
    <div className="flex items-center gap-5 md:gap-10 mb-7 md:mb-9 px-5 md:px-16">
      <h2 className="font-sans-chronakis text-xs md:text-sm font-bold uppercase tracking-[0.28em] md:tracking-[0.34em] whitespace-nowrap">{T.trusted_title[lang]}</h2>
      <div className="h-[1px] bg-black/15 flex-1" />
    </div>
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F3DACE] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F3DACE] to-transparent z-10" />
      <div className="logo-marquee-track flex w-max gap-8 md:gap-12 px-5 md:px-16">
        {[...trustedLogos, ...trustedLogos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="h-16 md:h-20 min-w-36 md:min-w-48 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-9 md:max-h-12 max-w-32 md:max-w-44 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function YuryEventPage() {
  const [crazyMode, setCrazyMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>('ru');
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll overflow-x-hidden bg-[#F3DACE] text-black selection:bg-black selection:text-[#F3DACE] hide-scrollbar relative">
      <ChronakisStyles />
      <Header lang={lang} setLang={setLang} setIsMenuOpen={setIsMenuOpen} />
      <MenuOverlay lang={lang} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Sidebar Pattern */}
      <div className="fixed left-0 top-0 bottom-0 w-8 md:w-12 border-r border-black/10 dotted-pattern z-30 hidden md:block pointer-events-none" />

      {/* Floating Action Button */}
      <motion.a
        href="https://t.me/chikhalov2"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-24 h-24 md:w-36 md:h-36 bg-[#E83626] rounded-full hidden md:flex flex-col items-center justify-center text-white font-sans-chronakis font-bold text-[9px] md:text-[11px] tracking-widest shadow-lg hover:scale-105 transition-transform"
        animate={{ rotate: [-18, 18, -18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="block mb-1">{T.fab_book[lang]}</span>
        <span className="block">{T.fab_retreat[lang]}</span>
      </motion.a>

      <main className="pl-0 md:pl-12 pt-20 md:pt-24">
        
        {/* Hero Title */}
        <section className="min-h-[82svh] px-4 md:px-16 py-16 md:py-20 border-b border-black/10 relative overflow-hidden flex items-end">
          <img
            src="./process-original.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F3DACE] to-transparent opacity-35" />

          <div className="relative z-10 w-full max-w-6xl mx-auto text-[#FFF6E7]">
            <h1 className="font-serif-chronakis !text-[#FFF6E7] text-[1.85rem] sm:text-5xl md:text-7xl lg:text-8xl mb-5 md:mb-6 max-w-[20.5rem] sm:max-w-5xl leading-[1.02] md:leading-[0.98]">
              {T.hero_title_1[lang]}<br />
              {T.hero_title_2[lang]}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mb-8 md:mb-10">
              {T.hero_bullets[lang].map((item) => (
                <div key={item.title} className="border-l border-white/35 bg-black/20 backdrop-blur-sm px-4 py-2.5 md:px-5 md:py-4">
                  <div className="font-serif-chronakis text-lg md:text-2xl leading-tight mb-1">{item.title}</div>
                  <div className="font-sans-chronakis text-[10px] md:text-[11px] tracking-[0.18em] uppercase opacity-80">{item.target}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <a
                href="https://t.me/chikhalov2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-3 bg-[#F3DACE] text-black px-6 py-4 font-sans-chronakis text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                {T.book[lang]}
              </a>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-5 font-sans-chronakis text-[10px] tracking-[0.16em] uppercase opacity-85">
                {T.hero_trust[lang].map((item) => (
                  <span key={item} className="border-l border-white/30 pl-3">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TrustedLogosSection lang={lang} />

        {/* Split Section 1: Map & Why */}
        <section id="why" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-b border-black/10 pt-16 md:pt-24">
          <div className="relative border-r border-black/10 p-5 md:p-16 flex items-center justify-center overflow-hidden bg-[#F3DACE] min-h-[18rem] md:min-h-0">
            <div className="absolute inset-0 opacity-5 dotted-pattern" />
            <div className="w-full max-w-lg aspect-square relative mix-blend-multiply">
               <MapIllustration lang={lang} crazyMode={crazyMode} />
            </div>
          </div>

          <div className="p-5 md:p-8 lg:p-16 flex flex-col justify-center bg-[#F3DACE]">
            <h2 className="font-sans-chronakis text-lg md:text-xl font-bold uppercase tracking-widest mb-8 md:mb-12">{T.why_title[lang]}</h2>
            <div className="space-y-8 md:space-y-12">
              {T.why_items[lang].map((item, i) => (
                <ListItem key={i} number={i+1} title={item.title} description={item.desc} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-5 md:px-16 bg-[#EFE5DE] border-b border-black/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="font-sans-chronakis text-[10px] tracking-[0.35em] uppercase opacity-55 mb-4">
                {lang === 'ru' ? 'B2B-задачи' : 'B2B outcomes'}
              </p>
              <h2 className="font-serif-chronakis text-4xl md:text-5xl leading-tight mb-6">{T.outcomes_title[lang]}</h2>
              <p className="font-serif-chronakis text-xl leading-relaxed opacity-80">{T.outcomes_intro[lang]}</p>
            </div>
            <div>
              {[
                { icon: Target, ...T.outcomes[lang][0] },
                { icon: Route, ...T.outcomes[lang][1] },
                { icon: MessageSquare, ...T.outcomes[lang][2] },
                { icon: Handshake, ...T.outcomes[lang][3] },
              ].map((outcome) => (
                <OutcomeCard key={outcome.title} icon={outcome.icon} title={outcome.title} text={outcome.text} />
              ))}
            </div>
          </div>
        </section>

        {/* Full Width Image Section - Process */}
        <section id="process" className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 bg-[#EFE5DE] pt-16 md:pt-24">
           <div className="h-[42vh] min-h-[18rem] lg:h-auto overflow-hidden relative border-r border-black/10">
              <motion.img 
                src="./process-original.jpg"
                alt={lang === 'ru' ? 'Пространство для стратегического командного выезда' : 'Space for a strategic team retreat'} className="w-full h-full object-cover sepia-[.3] grayscale-[.2]" whileHover={{ scale: 1.05 }} transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-[#F3DACE] mix-blend-multiply opacity-20 pointer-events-none" />
           </div>
           <div className="p-5 md:p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-8 bg-black text-[#F3DACE] rounded-full flex items-center justify-center font-sans-chronakis font-bold text-sm">✓</div>
                 <h2 className="font-sans-chronakis font-bold text-sm tracking-widest uppercase">{T.process_title[lang]}</h2>
              </div>
              <p className="font-serif-chronakis text-xl md:text-2xl leading-relaxed mb-6 font-bold">
                 {T.process_req[lang]}
              </p>
              <ul className="font-sans-chronakis text-sm mt-4 opacity-80 leading-relaxed max-w-md space-y-4">
                 {T.process_items[lang].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
           </div>
        </section>

        <section id="formats" className="py-20 md:py-24 px-5 md:px-16 bg-[#F3DACE] border-b border-black/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 mb-14 items-end">
              <div>
                <p className="font-sans-chronakis text-[10px] tracking-[0.35em] uppercase opacity-55 mb-4">{T.menu_formats[lang]}</p>
                <h2 className="font-serif-chronakis text-4xl md:text-5xl leading-tight">{T.formats_title[lang]}</h2>
              </div>
              <p className="font-serif-chronakis text-xl leading-relaxed opacity-80 max-w-2xl">{T.formats_intro[lang]}</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative">
              <div className="hidden xl:block absolute left-[16.66%] right-[16.66%] top-10 border-t border-dashed border-black/15" />
              {[
                { icon: Target, ...T.formats[lang][0] },
                { icon: Users, ...T.formats[lang][1] },
                { icon: Layers3, ...T.formats[lang][2] },
              ].map((format) => (
                <FormatCard
                  key={format.title}
                  icon={format.icon}
                  eyebrow={format.eyebrow}
                  title={format.title}
                  text={format.text}
                  points={format.points}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="py-20 md:py-24 px-5 md:px-16 bg-[#EFE5DE] border-b border-black/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14">
            <div className="space-y-6">
              <p className="font-sans-chronakis text-[10px] tracking-[0.35em] uppercase opacity-55">{T.effectiveness_title[lang]}</p>
              <h2 className="font-serif-chronakis text-4xl md:text-5xl leading-tight">
                {lang === 'ru' ? 'Точная сборка даёт сильный результат' : 'The design itself creates the result'}
              </h2>
              <p className="font-serif-chronakis text-xl leading-relaxed opacity-80 max-w-xl">{T.effectiveness_intro[lang]}</p>
              <div className="pt-4 border-t border-black/10">
                <div className="font-sans-chronakis text-xs tracking-[0.22em] uppercase opacity-55 mb-2">
                  {lang === 'ru' ? 'Не “активности ради активностей”' : 'Not activity overload'}
                </div>
                <div className="font-serif-chronakis text-2xl leading-snug">
                  {lang === 'ru'
                    ? 'Запрос, ритм, пространство и сопровождение работают как единая система.'
                    : 'Question, rhythm, environment, and execution work as one system.'}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { icon: Target, index: '01', ...T.effectiveness[lang][0] },
                { icon: Compass, index: '02', ...T.effectiveness[lang][1] },
                { icon: Sparkles, index: '03', ...T.effectiveness[lang][2] },
                { icon: ShieldCheck, index: '04', ...T.effectiveness[lang][3] },
              ].map((item) => (
                <ProofCard
                  key={item.index}
                  icon={item.icon}
                  index={item.index}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Toggles */}
        <section className="py-20 md:py-24 px-5 md:px-16 bg-[#F3DACE] border-b border-black/10">
           <div className="max-w-4xl mx-auto space-y-2">
              <div className="text-center mb-16">
                 <h2 className="font-serif-chronakis text-4xl md:text-5xl mb-4">{T.details_title[lang]}</h2>
                 <div className="w-24 h-[1px] bg-black mx-auto" />
              </div>
              {T.toggles[lang].map((t, i) => (
                <ToggleSection key={i} title={t.title} content={t.content} />
              ))}
           </div>
        </section>

        {/* Guides Section (Now BEFORE Clients) */}
        <section id="team" className="py-20 md:py-24 px-5 md:px-16 bg-[#EFE5DE] border-b border-black/10">
           <div className="text-center mb-16">
              <h2 className="font-serif-chronakis text-4xl md:text-5xl mb-4">{T.team_title[lang]}</h2>
              <div className="w-24 h-[1px] bg-black mx-auto" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-2xl mx-auto">
              {T.team[lang].map((guide, i) => (
                 <div key={i} className="group cursor-pointer flex flex-col items-center text-center">
                    <div className="aspect-[3/4] w-44 md:w-48 overflow-hidden mb-5 md:mb-6 border border-black/10 relative rounded-t-full">
                       <img src={guide.image} alt={guide.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="font-sans-chronakis font-bold text-lg tracking-widest uppercase mb-2">{guide.name}</h3>
                    <p className="font-serif-chronakis italic opacity-70 mb-4 text-[16px]">{guide.role}</p>
                    <p className="font-sans-chronakis text-sm opacity-60 leading-relaxed max-w-xs">{guide.desc}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* Reviews Section (Now AFTER Team) */}
        <section id="reviews" className="py-20 md:py-24 px-5 md:px-16 bg-[#F3DACE] border-b border-black/10">
           <div className="max-w-6xl mx-auto mb-24">
             <h3 className="font-sans-chronakis font-bold text-lg md:text-2xl uppercase tracking-widest mb-8 md:mb-12 border-l-4 border-[#E83626] pl-4 md:pl-6">{T.reviews_video_title[lang]}</h3>
             <div className="flex flex-wrap gap-5 md:gap-8">
                <div 
                  className="w-full md:w-80 aspect-video bg-black rounded-lg overflow-hidden shadow-md relative group cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setActiveVideo("STTUYBhyOsM")}
                >
                  <img src={`https://img.youtube.com/vi/STTUYBhyOsM/hqdefault.jpg`} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Видео-отзыв Profi Camp 2023" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#E83626] rounded-full flex items-center justify-center text-white pl-1 shadow-lg group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm" />
                    <div className="text-white drop-shadow-md">
                      <div className="font-bold text-sm tracking-wide">Profi Camp 2023</div>
                      <div className="text-[10px] opacity-90">Chimmynator</div>
                    </div>
                  </div>
                </div>

                <div 
                  className="w-full md:w-80 aspect-video bg-black rounded-lg overflow-hidden shadow-md relative group cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setActiveVideo("tJ0IKAsBeQA")}
                >
                  <img src={`https://img.youtube.com/vi/tJ0IKAsBeQA/hqdefault.jpg`} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Видео-отзыв о тимбилдинге Profi.ru RC4" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#E83626] rounded-full flex items-center justify-center text-white pl-1 shadow-lg group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm" />
                    <div className="text-white drop-shadow-md">
                      <div className="font-bold text-sm tracking-wide">тимбилдинг Profi ru RC4</div>
                      <div className="text-[10px] opacity-90">Chimmynator</div>
                    </div>
                  </div>
                </div>
             </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
             {T.reviews[lang].map((review, i) => (
                <div key={i} className="flex flex-col h-full border border-black/10 p-5 md:p-8 bg-[#EFE5DE] hover:-translate-y-2 transition-transform duration-500">
                  <p className="font-serif-chronakis text-lg md:text-2xl leading-relaxed flex-grow mb-6 md:mb-8">{review.text}</p>
                  <div className="pt-6 border-t border-black/10">
                    <p className="font-sans-chronakis font-bold text-[10px] tracking-widest uppercase mb-1">{review.author}</p>
                    <p className="font-serif-chronakis italic opacity-70 mb-0">{review.role}</p>
                  </div>
                </div>
             ))}
           </div>
        </section>

        <section className="py-20 md:py-24 px-5 md:px-16 bg-[#E83626] text-[#F3DACE] border-b border-black/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif-chronakis text-4xl md:text-6xl leading-tight mb-6 text-[#F3DACE]">
              {T.final_cta_title[lang]}
            </h2>
            <p className="font-serif-chronakis text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto mb-10">
              {T.final_cta_text[lang]}
            </p>
            <a
              href="https://t.me/chikhalov2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#F3DACE] text-black px-7 py-4 font-sans-chronakis text-xs tracking-widest uppercase font-bold hover:bg-black hover:text-[#F3DACE] transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              {T.final_cta_button[lang]}
            </a>
          </div>
        </section>

        <footer className="py-10 md:py-12 px-5 md:px-16 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
           <div className="font-sans-chronakis text-xs tracking-[0.2em] font-bold uppercase text-center">
              {T.footer_text[lang]}
           </div>
           <div className="flex flex-wrap justify-center gap-8 font-sans-chronakis text-xs tracking-widest uppercase opacity-80 items-center">
              <span>chikhalov@gmail.com</span>
              <a href="https://t.me/chikhalov2" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Telegram</a>
              <span>+7(915)212-05-73</span>
           </div>
        </footer>

      </main>

      {/* Video Lightbox Player Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 md:p-12 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-[#E83626] transition-colors" onClick={() => setActiveVideo(null)}>
              <X className="w-10 h-10" />
            </button>
            <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative cursor-default" onClick={e => e.stopPropagation()}>
               <iframe 
                 width="100%" height="100%" 
                 src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                 title="Video Playback" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen
                 className="absolute inset-0 w-full h-full"
               ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import fs from 'fs';

const source = '/Users/viola/All/Yandex.Disk.localized/3 Process/8 Vibe Coding/AI Mindset/src/components/LabW26PageV3.tsx';
const target = '/Users/viola/All/Yandex.Disk.localized/3 Process/8 Vibe Coding/AI Mindset/src/components/ConsultingPage.tsx';

const content = fs.readFileSync(source, 'utf8');
const lines = content.split('\n');

// Find the export default function line
const funcStartIdx = lines.findIndex(l => l.includes('export default function LabW26PageV3'));
lines[funcStartIdx] = 'export default function ConsultingPage() {';

// Find the REAL return statement by matching exactly
const returnIdx = lines.findIndex((l, i) => i > funcStartIdx && l.match(/^\s*return \($/));

// Keep everything until the return
const headerLines = lines.slice(0, returnIdx);

const newJSX = `  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#181616] font-mono selection:bg-black selection:text-white overflow-x-hidden relative">
      
      {/* Sidebar (Desktop) */}
      <aside className={\`fixed top-0 left-0 w-full md:w-[18%] h-screen border-r border-black/10 p-10 z-[300] hidden md:flex flex-col bg-[#f9f9f7] transition-all duration-700 ease-in-out \${scrolled ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'}\`}>
        <div className="flex items-center gap-4 mb-20 cursor-pointer" onClick={() => scrollTo('#hero')}>
          <div className="relative w-8 h-8">
             <img src={LOGO_SRC} className="absolute inset-0 w-full h-full object-contain" alt="LOGO" />
          </div>
          <div className="font-black text-xs tracking-tighter uppercase">AI MINDSET</div>
        </div>
        <nav className="flex flex-col gap-6 text-[11px] font-bold uppercase tracking-widest">
          <div className="relative flex items-center gap-2 w-fit" onMouseEnter={openLabsDropdown} onMouseLeave={closeLabsDropdown}>
            <div className="group flex items-center gap-2 opacity-60 hover:text-black hover:opacity-100 transition-opacity cursor-pointer">
              <MenuStrikeText>{'{labs}'}</MenuStrikeText> <span className="opacity-30">|</span>
            </div>
            <AnimatePresence>
              {labsDropdownOpen && <LabsHoverMenu />}
            </AnimatePresence>
          </div>
          {PRIMARY_MENU_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="group flex items-center gap-2 opacity-60 hover:text-black hover:opacity-100 transition-opacity w-fit">
              <MenuStrikeText>{link.label}</MenuStrikeText> <span className="opacity-30">|</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full md:w-[82%] md:ml-[18%] relative h-[100dvh] overflow-y-auto overflow-x-hidden scroll-smooth flex flex-col" ref={scrollContainerRef}>
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-6 border-b border-black/10">
          <div className="font-black text-xs tracking-tighter uppercase">AI MINDSET</div>
        </div>

        {/* HERO SECTION */}
        <section id="hero" className="w-full min-h-[50vh] flex flex-col items-center justify-center p-6 md:p-20 relative border-b border-black/10">
          <EditorialSectionHeader eyebrow="CONSULTING" title="{FOR TEAMS}" />
          <div className="mt-10 max-w-2xl text-center flex flex-col gap-6">
            <h3 className="font-bold text-lg md:text-xl">обучение на реальных задачах компании</h3>
            <p className="opacity-80 text-sm leading-relaxed">
              · персонализированная поддержка · экспертиза с рынка
            </p>
          </div>
          <a href="https://t.me/A_I_Mindset_Support" className="mt-12 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#8DC63F] transition-colors">
            &gt;&gt; оставить заявку
          </a>
        </section>

        {/* SECTION: КАК ЭТО РАБОТАЕТ */}
        <section className="w-full p-6 md:p-20 border-b border-black/10 bg-[#e8e8e5]">
          <EditorialSectionHeader eyebrow="PROCESS" title="КАК ЭТО РАБОТАЕТ" />
          <div className="mt-16 max-w-2xl mx-auto flex flex-col gap-6">
            <p className="text-lg opacity-80 mb-6">
              3+ человек из компании проходят любой продукт AI Mindset. Работают над реальными задачами бизнеса и получают:
            </p>
            <ul className="space-y-4 font-mono text-sm opacity-70">
              <li className="flex gap-4">
                <span className="text-[#8DC63F] font-bold">&gt;</span> 
                <span>единое понимание возможностей и ограничений AI внутри команды</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#8DC63F] font-bold">&gt;</span> 
                <span>рабочие сценарии, автоматизации и агентов под реальные процессы компании</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#8DC63F] font-bold">&gt;</span> 
                <span>экономию до 20% времени и ресурсов</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION: ЧТО ПОЛУЧАЕТ КОМАНДА СВЕРХ БАЗОВОЙ ПРОГРАММЫ */}
        <section className="w-full p-6 md:p-20 border-b border-black/10">
          <EditorialSectionHeader eyebrow="BENEFITS" title="СВЕРХ ПРОГРАММЫ" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <AsciiCardBorder>
              <h4 className="font-bold text-lg mb-2">2+ стратсессии</h4>
              <p className="font-bold text-xs uppercase opacity-50 mb-4">В НАЧАЛЕ И КОНЦЕ ЛАБОРАТОРИИ</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ аудит текущих AI-практик в компании</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ определение командных целей на 4 недели</p>
              <p className="opacity-70 text-sm leading-relaxed">▪︎ выбор приоритетных проектов</p>
            </AsciiCardBorder>
            
            <AsciiCardBorder>
              <h4 className="font-bold text-lg mb-2">tech set-up</h4>
              <p className="font-bold text-xs uppercase opacity-50 mb-4">СЕССИЯ НА 2 ЧАСА (ПЕРВАЯ НЕДЕЛЯ)</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ настройка tech-инфраструктуры</p>
              <p className="opacity-70 text-sm leading-relaxed">▪︎ интеграция с существующими инструментами</p>
            </AsciiCardBorder>

            <AsciiCardBorder>
              <h4 className="font-bold text-lg mb-2">командный чат</h4>
              <p className="font-bold text-xs uppercase opacity-50 mb-4">НА ВЕСЬ ПЕРИОД ЛАБОРАТОРИИ</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ приоритетная поддержка</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ ответы на вопросы команды</p>
              <p className="opacity-70 text-sm leading-relaxed">▪︎ помощь в troubleshooting</p>
            </AsciiCardBorder>

            <AsciiCardBorder>
              <h4 className="font-bold text-lg mb-2">прогресс-отчёты</h4>
              <p className="font-bold text-xs uppercase opacity-50 mb-4">КАЖДУЮ НЕДЕЛЮ (ПИСЬМЕННО)</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ review прогресса команды</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ решение блокеров</p>
              <p className="opacity-70 text-sm leading-relaxed">▪︎ подготовка к следующей неделе</p>
            </AsciiCardBorder>
            
            <AsciiCardBorder className="md:col-span-2">
              <h4 className="font-bold text-lg mb-2">+ наша поддержка после</h4>
              <p className="font-bold text-xs uppercase opacity-50 mb-4">ОТ 2 ДО 12 НЕДЕЛЬ ПОСЛЕ ЗАВЕРШЕНИЯ</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ командная ретро-сессия на 1.5 часа</p>
              <p className="opacity-70 text-sm leading-relaxed mb-2">▪︎ roadmap внедрения в компании</p>
              <p className="opacity-70 text-sm leading-relaxed">▪︎ рекомендации по масштабированию решений</p>
            </AsciiCardBorder>
          </div>
        </section>

        {/* SECTION: ПОЧЕМУ ЭТО РАБОТАЕТ */}
        <section className="w-full p-6 md:p-20 border-b border-black/10 bg-[#e8e8e5]">
          <EditorialSectionHeader eyebrow="ENGAGEMENT" title="ПОЧЕМУ ЭТО РАБОТАЕТ" />
          <div className="mt-16 flex flex-col gap-16">
            <div>
              <h4 className="font-bold text-2xl mb-8">1. real context, real results</h4>
              <p className="opacity-80 mb-8 max-w-2xl">
                не абстрактное обучение. команда работает над реальными задачами компании.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-black/10 bg-white p-6">
                  <div className="font-bold text-xs uppercase tracking-widest mb-4 opacity-50">PROD TEAMS</div>
                  <ul className="text-sm opacity-70 space-y-2">
                    <li>▪︎ AI-помощник для customer support</li>
                    <li>▪︎ автоматизация техподдержки</li>
                    <li>▪︎ система для анализа user-feedback</li>
                  </ul>
                </div>
                <div className="border border-black/10 bg-white p-6">
                  <div className="font-bold text-xs uppercase tracking-widest mb-4 opacity-50">MARKETING/CONTENT</div>
                  <ul className="text-sm opacity-70 space-y-2">
                    <li>▪︎ контент-завод</li>
                    <li>▪︎ персонализированные email-рассылки</li>
                    <li>▪︎ AI для A/B тестирования</li>
                  </ul>
                </div>
                <div className="border border-black/10 bg-white p-6">
                  <div className="font-bold text-xs uppercase tracking-widest mb-4 opacity-50">OPERATIONS/HR</div>
                  <ul className="text-sm opacity-70 space-y-2">
                    <li>▪︎ AI-onboarding assistant</li>
                    <li>▪︎ персонализированные ИПР</li>
                    <li>▪︎ автоматизация документооборота</li>
                    <li>▪︎ суммаризатор встреч</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-xl mb-4">2. учеба в комьюнити</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  не изолированный корпоративный тренинг. команда учится в окружении сильных практиков из разных индустрий и получает дополнительную экспертизу с рынка.
                </p>
                <div className="text-sm font-bold opacity-50 uppercase tracking-widest">
                   кросс-индустриальные инсайты, нетворкинг
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">3. персонализация + стандарт</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  базовая программа – выверенная и проверенная (мы проводим 5+ лабораторий в год). командные опции – адаптированы под ваши задачи.
                </p>
                <div className="text-sm font-bold opacity-50 uppercase tracking-widest">
                   качество + relevance
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">4. синергия через команду</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  когда учится команда – результаты внедряются быстрее. есть с кем обсудить, кто поддержит и продолжит трансформацию после обучения.
                </p>
                <div className="text-sm font-bold opacity-50 uppercase tracking-widest">
                   устойчивые изменения
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">5. ROI начинается сразу</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  не ждём конца обучения, чтобы начать применять. в процессе лаборатории вы получаете ▪︎ базу для командной AI-инфраструктуры ▪︎ промпты и workflows для текущих задач.
                </p>
                <div className="text-sm font-bold opacity-50 uppercase tracking-widest">
                   ROI ДО завершения обучения
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: СПЕЦУСЛОВИЯ */}
        <section className="w-full p-6 md:p-20 border-b border-black/10">
          <EditorialSectionHeader eyebrow="CONDITIONS" title="СПЕЦУСЛОВИЯ" />
          <div className="mt-16 max-w-2xl">
            <p className="opacity-80 text-lg mb-8 leading-relaxed">
              Уже 700+ человек прошли лаборатории и превратили AI из вкладки в мышечную память процессов. Оставьте заявку, чтобы получить коммерческое предложение:
            </p>
            <div className="flex flex-col gap-4">
              <AsciiCardBorder className="bg-[#e8e8e5] text-xl font-bold uppercase tracking-widest">
                3-5 человек
              </AsciiCardBorder>
              <AsciiCardBorder className="bg-[#e8e8e5] text-xl font-bold uppercase tracking-widest">
                6-9 человек
              </AsciiCardBorder>
              <AsciiCardBorder className="bg-black text-[#8DC63F] text-xl font-bold uppercase tracking-widest">
                10+ человек
              </AsciiCardBorder>
            </div>
          </div>
          <a href="https://t.me/A_I_Mindset_Support" className="mt-12 inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#8DC63F] transition-colors">
            &gt;&gt; оставить заявку
          </a>
        </section>

        {/* FOOTER */}
        <footer className="w-full bg-[#181616] text-[#f9f9f7] p-6 md:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="flex flex-col gap-4">
              <div className="font-black text-xs tracking-tighter uppercase mb-4 opacity-50">Контакты</div>
              <a href="https://www.youtube.com/@A-I-Mindset" className="hover:text-[#8DC63F] transition-colors">YouTube подкаст</a>
              <a href="https://t.me/ai_mind_set" className="hover:text-[#8DC63F] transition-colors">Медиа в Телеграм</a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-black text-xs tracking-tighter uppercase mb-4 opacity-50">Документы</div>
              <a href="https://docs.google.com/document/d/e/2PACX-1vRfnWZMiHbq8fvnnI0gACZuHtvJkZHJM0_kRWPZBwzBuzVQRLz2aqrwOO4qZfJUW2EkYc8rGt0f5QrJ/pub" className="hover:text-[#8DC63F] transition-colors text-sm opacity-70">Оферта</a>
              <a href="https://aimindset.org/confpolicy" className="hover:text-[#8DC63F] transition-colors text-sm opacity-70">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/20 text-center opacity-30 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2">
            AI MINDSET {new Date().getFullYear()} <span className="mx-2">||</span> RESEARCH LAB
          </div>
        </footer>
      </main>
    </div>
  );
}
`;

fs.writeFileSync(target, headerLines.join('\\n') + '\\n' + newJSX, 'utf8');
console.log('Consulting Page generated.');

const asset = (name: string) => `${import.meta.env.BASE_URL}retreat-assets/${name}`;

export type SlideItem =
  | { kind: 'cover'; kicker: string; title: string; subtitle: string; stats: { value: string; label: string }[] }
  | { kind: 'outcomes'; title: string; intro: string; items: { title: string; text: string }[] }
  | { kind: 'process'; title: string; request: string; steps: { step: string; need: string; method: string; result: string }[] }
  | { kind: 'package'; title: string; base: string[]; geo: string[]; note: string }
  | { kind: 'experiences'; title: string; items: { name: string; duration: string; text: string }[] }
  | { kind: 'problems'; title: string; problems: { problem: string; solution: string }[] }
  | { kind: 'pricing'; title: string; price: string; bullets: string[]; note: string }
  | { kind: 'team'; title: string; people: { name: string; role: string; bio: string[]; image: string }[] }
  | { kind: 'clients'; title: string; logos: string[]; names: string[]; quote: string }
  | { kind: 'reviews'; title: string; reviews: { author: string; role: string; text: string; image: string }[] }
  | { kind: 'cta'; title: string; body: string; contacts: string[]; videos: string[] };

export const retreatSlides: SlideItem[] = [
  {
    kind: 'cover',
    kicker: 'Strategy & Team Retreats',
    title: 'Аутентичные выезды\nдля стратегии, доверия и энергии команды',
    subtitle:
      'Выезд, который собирает стратегию, сближает команду и возвращает ресурс.',
    stats: [
      { value: 'от $900', label: 'за участника\n2 дня / 5*' },
      { value: '200+', label: 'выездов\nи конференций' },
      { value: '8', label: 'географий\nпод задачи команды' },
    ],
  },
  {
    kind: 'outcomes',
    title: 'Зачем команде такой выезд',
    intro:
      'Не тимбилдинг ради галочки. Это рабочий инструмент для перезагрузки и общего курса.',
    items: [
      {
        title: 'Vision',
        text: 'Собрать новое видение и превратить его в курс.',
      },
      {
        title: 'Trust',
        text: 'Повысить доверие между ключевыми людьми.',
      },
      {
        title: 'Inspiration',
        text: 'Вернуть команде драйв и ощущение смысла.',
      },
      {
        title: 'Energy',
        text: 'Снять перегруз и вернуть энергию на рост.',
      },
    ],
  },
  {
    kind: 'process',
    title: 'Как устроен процесс',
    request: 'Пример запроса: сформировать новое видение развития компании на 2026–2030 годы.',
    steps: [
      {
        step: '1. Погружение в момент',
        need: 'Вытащить людей из операционки.',
        method: 'Комфортный вход, трансфер, мягкий старт.',
        result: 'Фокус на процессе.',
      },
      {
        step: '2. Осознание текущей ситуации',
        need: 'Увидеть реальную картину.',
        method: 'Фасилитация, медиация, открытый диалог.',
        result: 'Общие вводные без тумана.',
      },
      {
        step: '3. Прощание со старыми паттернами',
        need: 'Сбросить напряжение.',
        method: 'SPA, хайкинг, телесные форматы.',
        result: 'Ресурсное состояние.',
      },
      {
        step: '4. Новое видение',
        need: 'Собрать будущее в одну рамку.',
        method: 'Стратсессия, U-theory, embodiment.',
        result: 'Цели и ключевые шаги.',
      },
      {
        step: '5. Празднование и интеграция',
        need: 'Закрепить результат через опыт.',
        method: 'Гастроужин, перформанс, природа, вечеринка.',
        result: 'Сильное общее воспоминание.',
      },
      {
        step: '6. Завершение',
        need: 'Собрать финал без смаза.',
        method: 'Рефлексия, благодарность, мерч, комфортный трансфер.',
        result: 'Ясность, завершённость, движение.',
      },
    ],
  },
  {
    kind: 'package',
    title: 'Базовый пакет и география',
    base: [
      'Глубинное интервью и рамка запроса.',
      'Сценарий выезда и дизайн динамики.',
      'Трансфер, проживание, питание.',
      'Подбор площадки и форматов.',
      'Организация под ключ на месте.',
    ],
    geo: ['Сербия', 'Сочи / Подмосковье', 'Грузия', 'Армения', 'Казахстан', 'Турция', 'ОАЭ', 'Португалия'],
    note: 'Программа собирается под задачу команды. После согласования бюджет фиксируется.',
  },
  {
    kind: 'experiences',
    title: 'Фирменные экспириенсы',
    items: [
      {
        name: 'Заряжающий хайкинг',
        duration: 'от 3 часов до нескольких дней',
        text: 'Маршруты по сильным ландшафтам, смысловые остановки, ужин на природе.',
      },
      {
        name: 'Банная церемония',
        duration: '2–4 часа',
        text: 'Сближающий формат на стыке паровой культуры и глубокого восстановления.',
      },
      {
        name: 'Гала-ужин',
        duration: '2–4 часа',
        text: 'Кульминация выезда: красиво завершить процесс и отпраздновать результат.',
      },
    ],
  },
  {
    kind: 'problems',
    title: 'Какие проблемы решаем',
    problems: [
      {
        problem: '“Корпоративный выезд утомляет и не вовлекает”.',
        solution: 'Собираем сценарий с ритмом, смыслом и вовлечением.',
      },
      {
        problem: '“Каждый сам по себе, все сидят в телефонах”.',
        solution: 'Создаём пространство для реального разговора.',
      },
      {
        problem: '“Сложно договориться и всё организовать”.',
        solution: 'Берём на себя дизайн, логистику и детали.',
      },
    ],
  },
  {
    kind: 'pricing',
    title: 'Экономика предложения',
    price: 'Двухдневный выезд с проживанием 5* и программой начинается от $900 за участника без авиабилетов.',
    bullets: [
      'Бюджет фиксируется после согласования.',
      'Есть форматы под разный масштаб.',
      'Нет шаблонов: программа под задачу.',
    ],
    note: 'Ценность не в логистике, а в правильной сборке стратегии, отдыха и командного сцепления.',
  },
  {
    kind: 'team',
    title: 'Кто ведёт процесс',
    people: [
      {
        name: 'Юра Чихалов',
        role: 'Camp creator, embodiment-эксперт',
        bio: [
          'Основатель fitonfit.ru, ex-product manager в profi.ru и hands.ru.',
          'Создаёт кемпы и событийные форматы на международных площадках.',
          'Сильная зона: embodied-подходы и атмосфера опыта.',
        ],
        image: asset('yury.png'),
      },
      {
        name: 'Дмитрий Риман',
        role: 'Предприниматель, фасилитатор, организатор',
        bio: [
          'Основатель DreamTeam и The Wave Business Community (Бали).',
          'Провёл более 200 стратегических выездов и конференций.',
          'Работал с крупными компаниями и госструктурами.',
        ],
        image: asset('dmitry.jpg'),
      },
    ],
  },
  {
    kind: 'clients',
    title: 'Клиенты и партнёры',
    logos: [asset('logo-raiffeisen.png'), asset('logo-richards.png')],
    names: ['Zerocoder', 'Profi.ru', 'Тинькофф', 'Raiffeisen Bank', 'Richards', 'и другие команды'],
    quote:
      'Сильная сторона SteamX: соединить стратегическую работу, отдых и впечатление в один цельный опыт.',
  },
  {
    kind: 'reviews',
    title: 'Что говорят клиенты',
    reviews: [
      {
        author: 'Влад Михалёв',
        role: 'Основатель Zerocoder',
        text: 'Опыт стал для команды наградой. После выезда мы были готовы идти на следующий уровень.',
        image: asset('review-zerocoder.jpg'),
      },
      {
        author: 'Ведущий дизайнер',
        role: 'Profi.ru',
        text: 'Один из лучших командных опытов, которые мы могли получить в Грузии.',
        image: asset('review-profi.jpg'),
      },
      {
        author: 'Руководитель',
        role: 'Тинькофф',
        text: 'Команда очень глубоко продумывает детали и действительно любит своё дело.',
        image: asset('review-tinkoff.jpg'),
      },
    ],
  },
  {
    kind: 'cta',
    title: 'Следующий шаг',
    body:
      'После короткой беседы вы получаете рамку выезда, рекомендованные форматы и прозрачный расчёт.',
    contacts: ['Юра Чихалов', '+7 (915) 212-05-73', '+995 (555) 006-052', 't.me/chikhalov', 'chikhalov@gmail.com'],
    videos: ['youtu.be/STTUYBhyOsM', 'youtu.be/tJ0IKAsBeQA', 'youtube.com/watch?v=UQnCY0vA6B4', 'youtube.com/watch?v=Y9ctS5K4Y24'],
  },
];

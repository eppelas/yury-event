export interface NavItem {
  label: string;
  href: string;
}

export const PROGRAM_TRACKS = [
  {
    id: '01',
    week: 'WEEK 1',
    title: 'Prompt Engineering',
    shortDescription: 'AI КАК ИНТЕРФЕЙС МЫШЛЕНИЯ',
    longDescription: 'Освоение техник промптов: Chain-of-Thought, Few-Shot Learning, Custom GPTs. Создание первых персональных ассистентов.',
    art: 'prompt' as const,
  },
  {
    id: '02',
    week: 'WEEK 2',
    title: 'Context Engineering',
    shortDescription: 'АВТОМАТИЗАЦИЯ И АГЕНТЫ',
    longDescription: 'Управление контекстом: Obsidian + MCP + Claude. Автоматизация через n8n, Make. AI-агенты и workflows.',
    art: 'context' as const,
  },
  {
    id: '03',
    week: 'WEEK 3',
    title: 'Mind Engineering',
    shortDescription: 'ПРОДУКТИВНОСТЬ И РИТУАЛЫ',
    longDescription: 'AI для коучинга, рефлексии, персональных ритуалов. Трекинг привычек и целей с поддержкой AI.',
    art: 'mind' as const,
  },
  {
    id: '04',
    week: 'WEEK 4',
    title: 'Life Engineering',
    shortDescription: 'ТВОРЧЕСТВО И РЕАЛИЗАЦИЯ',
    longDescription: 'От идеи до прототипа. Vibe-coding с Cursor, Windsurf, Claude Projects. Создание без технического бэкграунда.',
    art: 'life' as const,
  },
];

export const ADVANCED_TRACKS = [
  {
    id: 'T1',
    week: 'WEEK 1',
    title: 'AI Coaching',
    description: 'Для тех, кто выгорел и ищет баланс. AI для коучинга, рефлексии, персональных ритуалов.',
    speaker: 'Александр Поваляев',
  },
  {
    id: 'T2',
    week: 'WEEK 2',
    title: 'AI Agents',
    description: 'Автономные AI-системы. Проектирование и запуск AI-агентов, которые работают автономно.',
    speaker: 'Сергей Хабаров',
  },
  {
    id: 'T3',
    week: 'WEEK 3',
    title: 'Vibe-Coding',
    description: 'Творческое программирование. От идеи до прототипа за часы без технического бэкграунда.',
    speaker: 'Анна Лозицкая',
  },
  {
    id: 'T4',
    week: 'WEEK 4',
    title: 'AI Creative',
    description: 'Для музыкантов, художников и креативщиков. Генерация музыки, визуального контента.',
    speaker: 'Анка Ставенски',
  },
];

export const PROGRAM_WEEKLY_RHYTHM = [
  { day: 'ПН', label: 'Воркшоп', type: 'workshop' as const },
  { day: 'ВТ', label: 'Коворкинг', type: 'coworking' as const },
  { day: 'СР', label: 'Advanced Track', type: 'advanced' as const },
  { day: 'ЧТ', label: '', type: 'off' as const },
  { day: 'ПТ', label: 'Лекция', type: 'lecture' as const },
  { day: 'СБ', label: 'Q&A session', type: 'qna' as const },
];

export const PROGRAM_WEEK_COPY: Record<
  string,
  {
    dateRange: string;
    headerTopic: string;
    framedDescription: string;
    bodyDescription: string;
    advancedTopic: string;
    advancedDescription: string;
  }
> = {
  '01': {
    dateRange: '27 апр — 3 мая',
    headerTopic: 'AI-FIRST THINKING + IMAGE',
    framedDescription: 'от промпта до визуального брендинга',
    bodyDescription:
      'генерация изображений: Midjourney, DALL-E, Nano Banana. SVG-метафоры, визуальный сторителлинг. personal branding: headshots, аватары, обложки.',
    advancedTopic: 'IMAGE + VISUAL',
    advancedDescription: 'промпт-практики для визуальных систем, брендинга и контент-производства.',
  },
  '02': {
    dateRange: '4 — 10 мая',
    headerTopic: 'CONTEXT ENGINEERING + AUDIO',
    framedDescription: 'архитектура знаний и аудиогенерация',
    bodyDescription:
      'управление знаниями: Obsidian, Notion, MCP-агенты. генерация аудио: ElevenLabs, Suno, Udio. озвучка, подкасты, музыка для видео, саунд-дизайн.',
    advancedTopic: 'AUDIO + VOICE',
    advancedDescription: 'аудио-модели, синтез естественной речи и проектирование голосовых пространств.',
  },
  '03': {
    dateRange: '11 — 17 мая',
    headerTopic: 'AGENTS + AGENTIC WORKFLOWS',
    framedDescription: 'автономные агенты и видеогенерация',
    bodyDescription:
      'автоматизация: n8n, Make. генерация видео: Runway, Pika, Sora. анимация, монтаж, генерация b-roll, аватары-спикеры, motion design.',
    advancedTopic: 'VIDEO + MOTION',
    advancedDescription: 'генеративное видео, AI-режиссура и создание стабильного визуального нарратива.',
  },
  '04': {
    dateRange: '18 — 22 мая',
    headerTopic: 'SHIP + CREATIVE PIPELINES',
    framedDescription: 'сборка мультимедиа и 3d',
    bodyDescription:
      'vibe-coding: Cursor, Lovable. генерация 3D: Luma, CSM, Spline. сборка: WebGL, интерактивные сцены, AR-маски, пространственные интерфейсы.',
    advancedTopic: '3D + SPATIAL',
    advancedDescription: 'генерация 3D-ассетов, spatial-дизайн и интеграция в web-интерфейсы.',
  },
};

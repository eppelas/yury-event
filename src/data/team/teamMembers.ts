export type TeamMember = {
  photo: string;
  name: string;
  role: string;
  description: string;
};

export const teamMembers: Record<'ru' | 'en', TeamMember[]> = {
  ru: [
    {
      photo: './team/yury-chikhalov.jpg',
      name: 'Чихалов Юрий',
      role: 'Основатель / CEO',
      description: 'Предприниматель (ex-founder wowfit.ru, ex-BP profi.ru), проводник в духовные и телесные опыты.',
    },
    {
      photo: './team/varvara.jpg',
      name: 'Варвара',
      role: 'Руководитель проектов',
      description: 'Фестивали для Yandex.ru, Архстояние, Co-living Shmit16 и многие другие мероприятия.',
    },
  ],
  en: [
    {
      photo: './team/yury-chikhalov.jpg',
      name: 'Yury Chikhalov',
      role: 'Founder / CEO',
      description: 'Entrepreneur (ex-founder of wowfit.ru, ex-BP at profi.ru), guide into spiritual and embodied experiences.',
    },
    {
      photo: './team/varvara.jpg',
      name: 'Varvara',
      role: 'Project Lead',
      description: 'Festivals for Yandex.ru, Archstoyanie, Co-living Shmit16, and many other events.',
    },
  ],
};

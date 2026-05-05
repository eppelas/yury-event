export type ClientReview = {
  photo: string;
  author?: string;
  company: string;
  role: string;
  text: string;
};

export const clientReviews: Record<'ru' | 'en', ClientReview[]> = {
  ru: [
    {
      photo: './reviews/vlad-mikhalev.jpg',
      author: 'Влад Михалёв',
      company: 'Zerocoder',
      role: 'Основатель',
      text: 'Для нашей команды этот опыт стал настоящим празднованием и наградой! После выезда команда была вдохновлена выходить на следующий уровень развития бизнеса',
    },
    {
      photo: './reviews/profi.jpg',
      company: 'Profi.ru',
      role: 'Ведущий дизайнер',
      text: 'Ребята сделали для нас просто невозможное и организовали один из лучших опытов, которые мы могли получить в Грузии',
    },
    {
      photo: './reviews/tinkoff.jpg',
      company: 'Тинькофф',
      role: 'Руководитель',
      text: 'Я восхищаюсь тем, насколько ребята влюблены в свое дело и насколько глубоко они продумывают все детали',
    },
  ],
  en: [
    {
      photo: './reviews/vlad-mikhalev.jpg',
      author: 'Vlad Mikhalev',
      company: 'Zerocoder',
      role: 'Founder',
      text: 'For our team, this experience became a true celebration and reward. After the retreat, the team felt inspired to reach the next level of business growth',
    },
    {
      photo: './reviews/profi.jpg',
      company: 'Profi.ru',
      role: 'Lead Designer',
      text: 'The team did the impossible for us and organized one of the best experiences we could have had in Georgia',
    },
    {
      photo: './reviews/tinkoff.jpg',
      company: 'Tinkoff',
      role: 'Team Lead',
      text: 'I admire how much the team loves what they do and how deeply they think through every detail',
    },
  ],
};

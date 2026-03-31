# Yury Event Site

Сайт опубликован на GitHub Pages:
`https://eppelas.github.io/yury-event/`

## Что здесь важно

- Сайт собирается через `Vite + React`.
- Публикация настроена через GitHub Actions.
- При пуше в ветку `main` GitHub автоматически пересобирает и выкладывает сайт.
- Текущая главная версия сайта собрана как презентационный deck.
- Основной контент сайта сейчас находится в `src/RetreatDeck.tsx` и `src/retreatContent.ts`.

## Первый запуск на компьютере

Требуется `Node.js 20+`.

1. Установить зависимости:
   `npm ci`
2. Запустить сайт локально:
   `npm run dev`
3. Открыть в браузере:
   `http://localhost:3000`

## Проверка перед публикацией

- Проверка TypeScript:
  `npm run lint`
- Прод-сборка:
  `npm run build`
- Полная проверка:
  `npm run check`

## Как обновлять сайт

1. Открыть файл `src/retreatContent.ts` или `src/RetreatDeck.tsx`
2. Внести правки в тексты, слайды, контакты или структуру deck
3. Проверить локально:
   `npm run dev`
4. Выполнить финальную проверку:
   `npm run check`
5. Отправить изменения в GitHub:
   `git add .`
   `git commit -m "Обновил сайт"`
   `git push origin main`
6. Подождать 1-3 минуты, пока GitHub Actions заново выложит сайт

## Где менять контент

- Заголовки, тексты, отзывы, контакты:
  `src/retreatContent.ts`
- Разметка и логика показа слайдов:
  `src/RetreatDeck.tsx`
- Фото из проекта:
  папка `public/retreat-assets/`
- Общие стили:
  `src/index.css`
- Настройки сборки и GitHub Pages:
  `vite.config.ts`
  `.github/workflows/deploy-pages.yml`

## Важно

- В репозитории есть старые архивные и экспериментальные папки. Они не участвуют в текущем сайте.
- Для публикации вам нужны права на push в репозиторий `eppelas/yury-event`.
- Если GitHub Pages не обновился после `git push`, проверьте вкладку `Actions` в репозитории GitHub.

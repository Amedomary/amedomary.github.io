# The Four Principles in Detail

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

LLMs often pick an interpretation silently and run with it. This principle forces explicit reasoning:

- **State assumptions explicitly** — If uncertain, ask rather than guess
- **Present multiple interpretations** — Don't pick silently when ambiguity exists
- **Push back when warranted** — If a simpler approach exists, say so
- **Stop when confused** — Name what's unclear and ask for clarification

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

Combat the tendency toward overengineering:

- No features beyond what was asked
- No abstractions for single-use code
- No "flexibility" or "configurability" that wasn't requested
- No error handling for impossible scenarios
- If 200 lines could be 50, rewrite it

**The test:** Would a senior engineer say this is overcomplicated? If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting
- Don't refactor things that aren't broken
- Match existing style, even if you'd do it differently
- If you notice unrelated dead code, mention it — don't delete it

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused
- Don't remove pre-existing dead code unless asked

**The test:** Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform imperative tasks into verifiable goals:

| Instead of...    | Transform to...                                       |
| ---------------- | ----------------------------------------------------- |
| "Add validation" | "Write tests for invalid inputs, then make them pass" |
| "Fix the bug"    | "Write a test that reproduces it, then make it pass"  |
| "Refactor X"     | "Ensure tests pass before and after"                  |

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let the LLM loop independently. Weak criteria ("make it work") require constant clarification.

## О проекте

Личный сайт Amedomary: портфолио, ссылки на проекты и набор самостоятельных демонстраций HTML, CSS и JavaScript. Репозиторий содержит статические файлы для GitHub Pages; в `CNAME` указан домен `amedomary.ru`.

## Стек и запуск

- HTML, CSS, JavaScript без серверной части.
- RequireJS загружает AMD-модули через `require(...)` и `define(...)`.
- Локальные библиотеки в `js/external/`: jQuery 3.4.1, Modernizr, object-fit-images, Lodash, Anime.js и Stats.js. Наличие библиотеки в каталоге не означает, что она используется на каждой странице.
- В репозитории нет `package.json`, конфигурации сборки, автоматических тестов и линтера. Файлы HTML/CSS/JS редактируются непосредственно; установка npm-зависимостей и сборка не требуются.
- Для локального просмотра запусти из корня `python3 -m http.server 8000` и открой `http://localhost:8000/`. Команда требует установленного Python 3.

## Структура

| Путь                                                   | Назначение                                                              |
| ------------------------------------------------------ | ----------------------------------------------------------------------- |
| `index.html`                                           | Главная страница с интерактивным фоном, навигацией и переключением темы |
| `portfolio.html`                                       | Список проектов и ссылки на демонстрации                                |
| `calculator.html`                                      | Калькулятор                                                             |
| `chart.html`                                           | Построение графика на Canvas 2D                                         |
| `animation.html`                                       | Демонстрации анимаций                                                   |
| `3d.html`                                              | Демонстрация CSS 3D                                                     |
| `css_var.html`                                         | Демонстрация CSS-переменных и цветовых тем                              |
| `form.html`                                            | Примеры оформления элементов форм                                       |
| `every-things-on-rem.html`                             | Демонстрация размеров в `rem`                                           |
| `css/main.css`                                         | Общие стили страниц, компонентов, адаптивности и тем                    |
| `css/index-style.css`                                  | Дополнительный файл стилей; текущие HTML-страницы его не подключают     |
| `js/require.js`                                        | Загрузчик RequireJS                                                     |
| `js/config.js`                                         | Настройки путей библиотек и загрузка общих модулей                      |
| `js/main.js`, `js/portfolio.js` и другие файлы в `js/` | Точки входа страниц, указанные в атрибуте `data-main`                   |
| `js/partials/`                                         | Модули меню, калькулятора, графика, анимаций, фона и тем                |
| `js/external/`                                         | Сторонние библиотеки, сохранённые в репозитории                         |
| `images/`                                              | Изображения контента, Open Graph и favicon                              |
| `fonts/`                                               | Иконочный шрифт в нескольких форматах                                   |
| `README.md`                                            | Исторический журнал изменений; не инструкция по актуальной сборке       |

## Особенности кода

- Страницы подключают `js/require.js` с `data-main`; точка входа загружает `js/config.js`, затем модули своей страницы.
- `js/config.js` также запускает `modernizr`, `ofi`, `partials/menu`, `partials/main_menu` и `partials/calculator`. Изменение этого файла влияет на все страницы, которые его загружают.
- Главная страница подключает `partials/background`, `partials/bg-canvas`, `partials/mouse` и `partials/switch-theme`. Глобальный объект `properties` в `js/main.js` задаёт параметры частиц Canvas-фона.
- Переключатель темы использует `data-theme` на элементе `html`, cookie `theme` и настройки темы ОС. Отдельная демонстрация CSS-переменных использует `partials/css_theme`.
- Вёрстка преимущественно использует классы в стиле БЭМ (`b-*`, `__`, `--`), а классы `js-*` служат селекторами обработчиков. При переименовании проверяй HTML, CSS и JavaScript вместе.
- Общие элементы разметки, включая меню, повторяются в HTML-файлах: шаблонизатор и исходники шаблонов в репозитории отсутствуют.
- В HTML встроена Яндекс.Метрика; часть ссылок портфолио ведёт на внешние сайты, код которых не находится в этом репозитории.
- `js/every-things-on-rem.js` загружает общую конфигурацию для страницы демонстрации `rem`.

## Как вносить и проверять изменения

- Сохраняй существующую схему RequireJS/AMD и относительные пути ресурсов. Не вводи сборщик или новый фреймворк без необходимости в рамках задачи.
- При изменении поведения страницы начинай с её `data-main` и подключённых модулей в `js/partials/`. Не редактируй сторонние библиотеки для исправления логики сайта.
- Учитывай, что `css/main.css` общий: изменение селектора может затронуть несколько демонстраций.
- Проверяй изменённые страницы через локальный HTTP-сервер: загрузку ресурсов и ошибки в консоли, взаимодействия и отображение на узком и широком экране.
- Для общих изменений дополнительно проверь главную страницу и портфолио, открытие и закрытие меню; при изменении темы — светлый и тёмный режимы и сохранение выбора после перезагрузки.
- Автоматической команды тестирования нет. В отчёте указывай выполненные проверки и явно отмечай, если браузерная проверка не проводилась.

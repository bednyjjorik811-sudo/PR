# Sequelize: связи таблиц

Консольное приложение на Node.js: связь «один-ко-многим» между таблицами `authors` и `books` в Sequelize + SQLite.

## Запуск

```bash
npm install
npm start
```

База данных создаётся в файле `database.sqlite` (он исключён через `.gitignore`). При каждом запуске таблицы пересоздаются (`sync({ force: true })`).

## Предметная область

Авторы и их книги. Тип связи: **1:N** — у одного автора много книг, каждая книга принадлежит одному автору.

| Модель | Таблица | Поля |
|---|---|---|
| `Author` | `authors` | `name` (STRING, обязательное), `country` (STRING) |
| `Book` | `books` | `title` (STRING, обязательное), `year` (INTEGER), `genre` (STRING), `authorId` (внешний ключ) |

Ассоциация (`models/index.js`):

```js
Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });
Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });
```

## Структура

- `database.js` — подключение к SQLite.
- `models/Author.js`, `models/Book.js` — модели.
- `models/index.js` — определение ассоциации.
- `index.js` — синхронизация, создание записей (`createBook`, `countBooks`), запрос с `include` и вывод в консоль.

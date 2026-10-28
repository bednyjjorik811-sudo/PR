# Sequelize: фильтрация и сортировка связанных данных

Пять запросов с вложенным `where`, `required` и многоуровневым `order` на Sequelize + SQLite.

## Запуск

```bash
npm install
npm start
```

База данных создаётся в файле `database.sqlite` (он исключён через `.gitignore`). При каждом запуске таблицы пересоздаются и заполняются тестовыми данными (`seed.js`).

## Структура

- `database.js` — подключение к SQLite.
- `models/` — модели `User`, `Post`, `Author`, `Book`, `Student`, `Course`, `Enrollment`, `Order`, `Item` и ассоциации (`models/index.js`).
- `queries.js` — пять функций заданий 1–5 с комментариями о роли `where`, `required` и `order`.
- `seed.js` — тестовые данные.
- `index.js` — создание таблиц, заполнение, вызов функций и вывод результатов.

## Задания

| № | Функция | Связь | Что делает |
|---|---|---|---|
| 1 | `getUsersWithRecentPosts` | User — Post (1:N) | Пользователи с постом после 2023-01-01 |
| 2 | `getAllAuthorsIncludingEmpty` | Author — Book (1:N) | Все авторы, включая без книг (`required: false`) |
| 3 | `getStudentsInAdvancedCourses` | Student — Course (N:M через Enrollment) | Студенты с курсом больше 3 кредитов |
| 4 | `getOrdersWithBulkItems` | Order — Item (1:N) | Заказы с товаром количеством больше 2 |
| 5 | `getActiveUsersWithPublishedPosts` | User — Post (1:N) | Активные пользователи с опубликованным постом |

## Тестовые данные

- Пользователи: Анна, Борис, Виктор (без постов), Галина (неактивна).
- Авторы: Толстой, Достоевский, Новиков (без книг).
- Студенты: Иван (курсы 4, 5 и 2 кредита), Мария (курсы 2 и 3 кредита).
- Заказы: `A-001` и `A-002`, у обоих есть товары с количеством больше 2.

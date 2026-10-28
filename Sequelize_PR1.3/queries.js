const { Op } = require('sequelize');
const { User, Post, Author, Book, Student, Course, Order, Item } = require('./models');

// Задание 1. Пользователи с постами после 2023-01-01.
// where внутри include — фильтр по полям Post (попадает в ON части JOIN).
// required: true — INNER JOIN: пользователи без подходящих постов отсеиваются.
// order: пользователи по имени, а посты внутри пользователя — по дате убывания.
async function getUsersWithRecentPosts() {
  return User.findAll({
    include: [
      {
        model: Post,
        as: 'posts',
        where: { publishedAt: { [Op.gt]: '2023-01-01' } },
        required: true,
      },
    ],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'publishedAt', 'DESC'],
    ],
  });
}

// Задание 2. Все авторы, включая тех, у кого нет книг.
// where нет, required: false — LEFT OUTER JOIN: авторы без книг остаются в выборке
// с пустым массивом books.
// order: только по полю родительской модели (фамилия).
async function getAllAuthorsIncludingEmpty() {
  return Author.findAll({
    include: [
      {
        model: Book,
        as: 'books',
        required: false,
      },
    ],
    order: [['lastName', 'ASC']],
  });
}

// Задание 3. Студенты, записанные хотя бы на один курс с credits > 3 (N:M).
// where внутри include фильтрует курсы, required: true отсеивает студентов
// без подходящих курсов.
// through: { attributes: [] } скрывает поля соединительной таблицы Enrollment.
// order: студенты по имени, их курсы — по названию.
async function getStudentsInAdvancedCourses() {
  return Student.findAll({
    include: [
      {
        model: Course,
        as: 'courses',
        where: { credits: { [Op.gt]: 3 } },
        required: true,
        through: { attributes: [] },
      },
    ],
    order: [
      ['name', 'ASC'],
      [{ model: Course, as: 'courses' }, 'title', 'ASC'],
    ],
  });
}

// Задание 4. Заказы, содержащие хотя бы один товар с quantity > 2.
// where внутри include оставляет в заказе только такие товары,
// required: true отсеивает заказы без них.
// order: заказы по дате создания (убывание), товары внутри заказа — по цене (убывание).
async function getOrdersWithBulkItems() {
  return Order.findAll({
    include: [
      {
        model: Item,
        as: 'items',
        where: { quantity: { [Op.gt]: 2 } },
        required: true,
      },
    ],
    order: [
      ['createdAt', 'DESC'],
      [{ model: Item, as: 'items' }, 'price', 'DESC'],
    ],
  });
}

// Задание 5. Активные пользователи с хотя бы одним опубликованным постом.
// Верхнеуровневый where фильтрует родителя (isActive),
// where внутри include — связанные посты (status), required: true отсеивает
// пользователей без опубликованных постов.
// order: пользователи по имени, посты — по дате создания (убывание).
async function getActiveUsersWithPublishedPosts() {
  return User.findAll({
    where: { isActive: true },
    include: [
      {
        model: Post,
        as: 'posts',
        where: { status: 'published' },
        required: true,
      },
    ],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'createdAt', 'DESC'],
    ],
  });
}

module.exports = {
  getUsersWithRecentPosts,
  getAllAuthorsIncludingEmpty,
  getStudentsInAdvancedCourses,
  getOrdersWithBulkItems,
  getActiveUsersWithPublishedPosts,
};

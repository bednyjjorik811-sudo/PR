const sequelize = require('./database');
const seed = require('./seed');
const {
  getUsersWithRecentPosts,
  getAllAuthorsIncludingEmpty,
  getStudentsInAdvancedCourses,
  getOrdersWithBulkItems,
  getActiveUsersWithPublishedPosts,
} = require('./queries');

const date = (value) => value.toISOString().slice(0, 10);

function print(title, rows, format) {
  console.log(`\n=== ${title} ===`);
  for (const row of rows) {
    console.log(format(row));
  }
}

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    await seed();

    const recentPosts = await getUsersWithRecentPosts();
    print('Задание 1. Пользователи с постами после 2023-01-01', recentPosts, (user) =>
      [
        user.name,
        ...user.posts.map((p) => `  - ${p.title} (${date(p.publishedAt)})`),
      ].join('\n'),
    );

    const authors = await getAllAuthorsIncludingEmpty();
    print('Задание 2. Все авторы, включая без книг', authors, (author) =>
      [
        `${author.lastName} ${author.firstName} — книг: ${author.books.length}`,
        ...author.books.map((b) => `  - ${b.title} (${b.year})`),
      ].join('\n'),
    );

    const students = await getStudentsInAdvancedCourses();
    print('Задание 3. Студенты с курсами больше 3 кредитов', students, (student) =>
      [
        `${student.name} (${student.group})`,
        ...student.courses.map((c) => `  - ${c.title}, кредитов: ${c.credits}`),
      ].join('\n'),
    );

    const orders = await getOrdersWithBulkItems();
    print('Задание 4. Заказы с товарами количеством больше 2', orders, (order) =>
      [
        `${order.number} (${order.status}), создан ${date(order.createdAt)}`,
        ...order.items.map((i) => `  - ${i.productName} x${i.quantity}, ${i.price}`),
      ].join('\n'),
    );

    const activeUsers = await getActiveUsersWithPublishedPosts();
    print('Задание 5. Активные пользователи с опубликованными постами', activeUsers, (user) =>
      [
        user.name,
        ...user.posts.map((p) => `  - ${p.title} (${date(p.createdAt)}, ${p.status})`),
      ].join('\n'),
    );
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    await sequelize.close();
  }
}

main();

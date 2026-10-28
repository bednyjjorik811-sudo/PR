const { User, Author, Student, Course, Order } = require('./models');

// publishedAt и createdAt задаём явно, чтобы сортировка была наглядной
const post = (title, date, status) => ({
  title,
  status,
  publishedAt: new Date(date),
  createdAt: new Date(date),
});

async function seed() {
  // Пользователи и посты (задания 1 и 5); у Виктора постов нет
  const anna = await User.create({ name: 'Анна', email: 'anna@example.com', isActive: true });
  await anna.createPost(post('Итоги 2022', '2022-06-10', 'published'));
  await anna.createPost(post('Весенние новости', '2023-03-15', 'published'));
  await anna.createPost(post('Черновик про 2024', '2024-02-01', 'draft'));

  const boris = await User.create({ name: 'Борис', email: 'boris@example.com', isActive: true });
  await boris.createPost(post('Старый пост', '2021-11-20', 'published'));
  await boris.createPost(post('Архивный пост', '2022-12-31', 'archived'));

  await User.create({ name: 'Виктор', email: 'victor@example.com', isActive: true });

  const galina = await User.create({ name: 'Галина', email: 'galina@example.com', isActive: false });
  await galina.createPost(post('Летний пост', '2024-05-05', 'published'));

  // Авторы и книги (задание 2); у Новикова книг нет
  const tolstoy = await Author.create({ firstName: 'Лев', lastName: 'Толстой', country: 'Россия' });
  await tolstoy.createBook({ title: 'Война и мир', year: 1869, genre: 'роман' });
  await tolstoy.createBook({ title: 'Анна Каренина', year: 1877, genre: 'роман' });

  const dostoevsky = await Author.create({ firstName: 'Фёдор', lastName: 'Достоевский', country: 'Россия' });
  await dostoevsky.createBook({ title: 'Преступление и наказание', year: 1866, genre: 'роман' });

  await Author.create({ firstName: 'Иван', lastName: 'Новиков', country: 'Россия' });

  // Студенты и курсы (задание 3)
  const algorithms = await Course.create({ title: 'Алгоритмы', credits: 4 });
  const math = await Course.create({ title: 'Математика', credits: 5 });
  const sport = await Course.create({ title: 'Физкультура', credits: 2 });
  const english = await Course.create({ title: 'Английский', credits: 3 });

  const ivan = await Student.create({ name: 'Иван', group: 'ИС-21' });
  await ivan.addCourses([algorithms, math, sport]);

  const maria = await Student.create({ name: 'Мария', group: 'ИС-22' });
  await maria.addCourses([sport, english]);

  // Заказы и товары (задание 4)
  const first = await Order.create({
    number: 'A-001',
    status: 'paid',
    createdAt: new Date('2024-01-10'),
  });
  await first.createItem({ productName: 'Клавиатура', quantity: 3, price: 2500 });
  await first.createItem({ productName: 'Мышь', quantity: 1, price: 1200 });
  await first.createItem({ productName: 'Коврик', quantity: 5, price: 300 });

  const second = await Order.create({
    number: 'A-002',
    status: 'shipped',
    createdAt: new Date('2024-02-20'),
  });
  await second.createItem({ productName: 'Монитор', quantity: 1, price: 15000 });
  await second.createItem({ productName: 'Кабель HDMI', quantity: 4, price: 450 });
}

module.exports = seed;

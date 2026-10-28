const sequelize = require('./database');
const { Author, Book } = require('./models');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Подключение к базе данных установлено.');

    await sequelize.sync({ force: true });
    console.log('Таблицы authors и books созданы.');

    // «Родитель» и «дети»: книги создаются через специальный метод createBook
    const tolstoy = await Author.create({ name: 'Лев Толстой', country: 'Россия' });
    await tolstoy.createBook({ title: 'Война и мир', year: 1869, genre: 'роман' });
    await tolstoy.createBook({ title: 'Анна Каренина', year: 1877, genre: 'роман' });

    const christie = await Author.create({ name: 'Агата Кристи', country: 'Великобритания' });
    await christie.createBook({ title: 'Убийство в «Восточном экспрессе»', year: 1934, genre: 'детектив' });

    console.log(`Книг у автора «${tolstoy.name}»: ${await tolstoy.countBooks()}`);

    // Жадная загрузка: авторы вместе с книгами
    const authors = await Author.findAll({
      include: { model: Book, as: 'books' },
    });

    for (const author of authors) {
      console.log(`\n${author.name} (${author.country})`);
      for (const book of author.books) {
        console.log(`  - ${book.title}, ${book.year}, ${book.genre}`);
      }
    }
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    await sequelize.close();
  }
}

main();

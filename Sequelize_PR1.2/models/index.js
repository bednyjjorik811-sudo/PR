const Author = require('./Author');
const Book = require('./Book');

// Связь 1:N: у автора много книг, внешний ключ authorId создаётся в таблице books
Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });
Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });

module.exports = { Author, Book };

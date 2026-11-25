const { Sequelize } = require('sequelize');
const defineCategory = require('./Category');
const defineRecipe = require('./Recipe');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
});

const Category = defineCategory(sequelize);
const Recipe = defineRecipe(sequelize);

Category.hasMany(Recipe, { as: 'recipes', foreignKey: 'categoryId' });
Recipe.belongsTo(Category, { as: 'category', foreignKey: 'categoryId' });

module.exports = { sequelize, Category, Recipe };

const { Op } = require('sequelize');
const { Category, Recipe } = require('./models');

function getRecipesWithCategories() {
  return Recipe.findAll({ include: 'category' });
}

function getQuickRecipes() {
  return Recipe.findAll({ where: { cookTime: { [Op.lt]: 30 } } });
}

function getRecipeById(id) {
  return Recipe.findByPk(id);
}

function createRecipe(recipe) {
  return Recipe.create(recipe);
}

function getCategories() {
  return Category.findAll();
}

module.exports = {
  getRecipesWithCategories,
  getQuickRecipes,
  getRecipeById,
  createRecipe,
  getCategories,
};

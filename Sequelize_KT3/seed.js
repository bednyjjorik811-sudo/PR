const { Category, Recipe } = require('./models');

async function seed() {
  const [breakfast, soup, dessert] = await Category.bulkCreate([
    { name: 'Завтраки' },
    { name: 'Супы' },
    { name: 'Десерты' },
  ]);

  const [omelet] = await Recipe.bulkCreate([
    { title: 'Омлет с зеленью', cookTime: 15, categoryId: breakfast.id },
    { title: 'Овсяная каша', cookTime: 20, categoryId: breakfast.id },
    { title: 'Тыквенный суп', cookTime: 30, categoryId: soup.id },
    { title: 'Яблочный пирог', cookTime: 60, categoryId: dessert.id },
  ]);

  return { recipeId: omelet.id, dessertId: dessert.id };
}

module.exports = seed;

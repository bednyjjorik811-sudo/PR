const { sequelize } = require('./models');
const seed = require('./seed');
const {
  getRecipesWithCategories,
  getQuickRecipes,
  getRecipeById,
  createRecipe,
  getCategories,
} = require('./queries');

function print(title, result) {
  console.log(`\n${title}`);
  console.log(JSON.stringify(result, null, 2));
}

async function main() {
  try {
    await sequelize.sync();
    const { recipeId, dessertId } = await seed();

    print('1. Все рецепты с категориями', await getRecipesWithCategories());
    print('2. Рецепты быстрее 30 минут', await getQuickRecipes());
    print('3. Рецепт по ID', await getRecipeById(recipeId));
    print('4. Новый рецепт', await createRecipe({
      title: 'Йогурт с ягодами',
      cookTime: 10,
      categoryId: dessertId,
    }));
    print('5. Все категории', await getCategories());
  } finally {
    await sequelize.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

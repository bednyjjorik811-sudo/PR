const sequelize = require('./database');
const Car = require('./models/Car');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Подключение к базе данных установлено.');

    // force: true пересоздаёт таблицу, чтобы при каждом запуске данные не дублировались
    await sequelize.sync({ force: true });
    console.log('Таблица cars создана.');

    await Car.create({
      brand: 'Toyota',
      model: 'Camry',
      year: 2021,
      price: 2450000,
      isAvailable: true,
    });
    await Car.create({
      brand: 'Lada',
      model: 'Vesta',
      year: 2019,
      price: 980000.5,
      isAvailable: false,
    });

    const cars = await Car.findAll();
    console.log('Автомобили в базе данных:');
    console.table(cars.map((car) => car.toJSON()));
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    await sequelize.close();
  }
}

main();

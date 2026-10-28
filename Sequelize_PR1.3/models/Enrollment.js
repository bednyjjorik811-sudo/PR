const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Соединительная таблица с дополнительными полями
const Enrollment = sequelize.define('Enrollment', {
  enrolledAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  grade: { type: DataTypes.INTEGER },
});

module.exports = Enrollment;

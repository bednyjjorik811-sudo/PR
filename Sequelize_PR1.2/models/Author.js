const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Author = sequelize.define(
  'Author',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'authors',
  },
);

module.exports = Author;

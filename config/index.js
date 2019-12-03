const sequelize = require('./connection');
const { PORT, DATABASE_HOST } = require('./environment.js');

module.exports = {
  sequelize,
  PORT,
  DATABASE_HOST
};

// CREATE CONNECTION TO DATABASE

const { DATABASE_HOST } = require('./environment.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_HOST, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;

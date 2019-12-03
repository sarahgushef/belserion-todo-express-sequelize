// CREATE CONNECTION TO DATABASE
require('dotenv').config();

const Sequelize = require('sequelize');
const DATABASE_HOST = process.env.DATABASE_HOST;

const sequelize = new Sequelize(DATABASE_HOST, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;

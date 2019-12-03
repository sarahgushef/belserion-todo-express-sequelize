require('dotenv').config();

const PORT = process.env.PORT;
const DATABASE_HOST = process.env.DATABASE_HOST;

module.exports = {
  PORT,
  DATABASE_HOST
};

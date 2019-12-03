const Sequelize = require('sequelize');
const { sequelize } = require('../config');

const User = sequelize.define(
  'user',
  {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
      autoIncrement: true,
      primaryKey: true
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'user_name'
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'user_email'
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'user_password'
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'user_createdAt'
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'user_updatedAt'
    }
  },
  {
    tableName: 'users'
    // timestamp: false --> You don't need this if you've already state createdAt & updatedAT in models
  }
);

module.exports = User;

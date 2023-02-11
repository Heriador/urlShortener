const Sequelize = require('sequelize');
const {
  dbHost,
  dbName,
  dbPassword,
  dbUser,
  dbPort,
  dbUri,
} = require('../config');

// const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
//   host: dbHost,
//   dialect: 'mysql',
// });

const sequelize = new Sequelize(dbUri);

module.exports = sequelize;

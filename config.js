require('dotenv').config();

module.exports = {
  appHost: process.env.APP_HOST,
  appPort: process.env.PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUri: process.env.DB_URI,
};

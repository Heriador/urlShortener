const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const UrlEncrypt = sequelize.define('urlencrypt', {
  url_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  original_url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = UrlEncrypt;

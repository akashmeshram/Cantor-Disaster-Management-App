const { Sequelize } = require('sequelize');

module.exports = new Sequelize('disaster', 'postgres', 'qwe', {
  host: 'localhost',
  dialect: 'postgres' 
});

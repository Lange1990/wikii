var S = require('sequelize');
var sequelize = new S('postgres://localhost:5432/wiki',{
  logging: false,
  dialect: "postgres"
});

module.exports = sequelize
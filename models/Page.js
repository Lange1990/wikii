var S = require('sequelize');
var db = require("../db");

class Page extends S.Model {}

Page.init({
  title: {
    type: S.STRING
  },
  urlTitle: {
    type: S.STRING
  },
  content: {
    type: S.TEXT
  },
  status: {
    type: S.ENUM('open', 'closed')
  },
}, { sequelize: db, modelName: 'page' });
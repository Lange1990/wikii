var S = require('sequelize');
var db = require("../db");

//-- User Model
class User extends S.Model {}
User.init({
  name: {
        type: S.STRING
    },
    email: {
        type: S.STRING
    }
}, { sequelize: db, modelName: 'user' });
//--
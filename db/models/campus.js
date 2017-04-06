const db = require('./database');
const Sequelize = require('sequelize');

const Campus = db.define('Campus', {
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.URL
  }
}, {
  //options can go here
})

module.exports = Campus

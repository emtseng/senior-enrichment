const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('Campus', {
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
}, {
  //options can go here
})

module.exports = Campus

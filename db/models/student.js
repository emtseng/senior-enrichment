const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('Student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
}, {
  //options can go here
})

module.exports = Student


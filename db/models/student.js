const db = require('./database');
const Sequelize = require('sequelize');

const Student = db.define('Student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.EMAIL
  }
}, {
  //options can go here
})

module.exports = Student

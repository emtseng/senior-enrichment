const studentRouter = require('express').Router()
const db = require('../../db')

const Student = db.models.Student

module.exports = studentRouter

/* -------- HELPER FUNCTIONS ------- */

/* --- For '/api/students/' --- */

const returnAllStudents = (req, res, next) => {
  Student.findAll({
    where: req.query //just in case there is a query string
  })
  .then(dbResponse => dbResponse.data)
  .then(students => res.json(students))
  .catch(next)
}

const addNewStudent = (req, res, next) => {
  Student.create(req.body)
  .then(dbResponse => dbResponse.data)
  .then(createdStudent => res.json(createdStudent))
  .catch(next)
}

/* --- For '/api/students/:studentId' --- */

const returnSingleStudent = (req, res, next) => {
  res.json(req.foundStudent)
}

const updateSingleStudent = (req, res, next) => {
  req.foundStudent.update(req.body)
  .then(updatedStudent => res.json(updatedStudent))
  .catch(next)
}

const destroySingleStudent = (req, res, next) => {
  req.foundStudent.destroy()
  .catch(next)
}


/* -------- ROUTE DEFINITIONS ------- */

studentRouter.route('/')
.get(returnAllStudents)
.post(addNewStudent)

studentRouter.param('studentId', (req, res, next, studentId) => {
  Student.findById(studentId)
  .then(dbResponse => dbResponse.data)
  .then(foundStudent => {
    req.foundStudent = foundStudent
    next()
  })
  .catch(next)
})

studentRouter.route('/:studentId')
.get(returnSingleStudent)
.put(updateSingleStudent)
.delete(destroySingleStudent)

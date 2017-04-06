const campusRouter = require('express').Router()
const db = require('../db')

const Campus = db.models.Campus

module.exports = campusRouter

/* -------- HELPER FUNCTIONS ------- */

/* --- For '/api/campus/' --- */

const returnAllCampuses = (req, res, next) => {
  Campus.findAll({
    where: req.query //just in case there is a query string
  })
  .then(dbResponse => dbResponse.data)
  .then(campuses => res.json(campuses))
  .catch(next)
}

const addNewCampus = (req, res, next) => {
  Campus.create(req.body)
  .then(dbResponse => dbResponse.data)
  .then(createdCampus => res.json(createdCampus))
  .catch(next)
}

/* --- For '/api/campus/:campusId' --- */

const returnSingleCampus = (req, res, next) => {
  res.json(req.foundCampus)
}

const updateSingleCampus = (req, res, next) => {
  req.foundCampus.update(req.body)
  .then(updatedCampus => res.json(updatedCampus))
  .catch(next)
}

const destroySingleCampus = (req, res, next) => {
  req.foundCampus.destroy()
  .catch(next)
}


/* -------- ROUTE DEFINITIONS ------- */

campusRouter.route('/')
.get(returnAllCampuses)
.post(addNewCampus)

campusRouter.param('campusId', (req, res, next, campusId) => {
  Campus.findById(campusId)
  .then(dbResponse => dbResponse.data)
  .then(foundCampus => {
    req.foundCampus = foundCampus
    next()
  })
  .catch(next)
})

campusRouter.route('/:campusId')
.get(returnSingleCampus)
.put(updateSingleCampus)
.delete(destroySingleCampus)

import axios from 'axios'

/* ------- ACTIONS ------ */

const RECEIVE_ALL_CAMPUSES = 'RECEIVE_ALL_CAMPUSES'
const RECEIVE_SINGLE_CAMPUS = 'RECEIVE_SINGLE_CAMPUS'

/* ------- ACTION CREATORS ------ */

const receiveAllCampuses = (receivedCampuses) => ({
  type: 'RECEIVE_ALL_CAMPUSES',
  receivedCampuses
})

const receiveSingleCampus = (receivedSingleCampus) => ({
  type: 'RECEIVE_SINGLE_CAMPUS',
  receivedSingleCampus
})

/* ------- REDUCER ------ */

export const campusReducer = (state = {
  allCampuses: [],
  singleCampus: {}
}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_CAMPUSES:
      newState.allCampuses = action.receivedCampuses
      break;
    case RECEIVE_SINGLE_CAMPUS:
      newState.singleCampus = action.receivedSingleCampus
      break
    default:
      return state
  }
  return newState
};

/* ------- THUNK DISPATCHERS ------ */

export const getAllCampuses = () => (dispatch, getState) => {
  return axios.get('/api/campus')
    .then(serverResponse => serverResponse.data)
    .then(allCampuses => dispatch(receiveAllCampuses(allCampuses)))
    .catch(console.error)
}

export const getSingleCampus = (id) => (dispatch, getState) => {
  return axios.get(`/api/campus/${id}`)
    .then(serverResponse => serverResponse.data)
    .then(foundCampus => dispatch(receiveSingleCampus(foundCampus)))
    .catch(console.error)
}

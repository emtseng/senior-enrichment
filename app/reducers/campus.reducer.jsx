import axios from 'axios'

/* ------- ACTIONS ------ */

const RECEIVE_ALL_CAMPUSES = 'RECEIVE_ALL_CAMPUSES'

/* ------- ACTION CREATORS ------ */

const receiveAllCampuses = (receivedCampuses) => ({
  type: 'RECEIVE_ALL_CAMPUSES',
  receivedCampuses
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
      break
    default:
      return state
  }
  return newState
};

/* ------- THUNK DISPATCHERS ------ */

export const getAllCampuses = () => (dispatch) => {
  return axios.get('/api/campus')
  .then(serverResponse => serverResponse.data)
  .then(allCampuses => dispatch(receiveAllCampuses(allCampuses)))
  .catch(console.error)
}

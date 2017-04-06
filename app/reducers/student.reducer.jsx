import axios from 'axios'

/* ------- ACTIONS ------ */

const RECEIVE_ALL_STUDENTS = 'RECEIVE_ALL_STUDENTS'

/* ------- ACTION CREATORS ------ */

const receiveAllStudents = (receivedAllStudents) => ({
  type: 'RECEIVE_ALL_STUDENTS',
  receivedAllStudents
})

/* ------- REDUCER ------ */

export const studentReducer = (state = {
  allStudents: [],
  campusStudents: [],
  singleStudent: {}
}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      newState.allStudents = action.receivedAllStudents
      break
    default:
      return state
  }
  return newState
};

/* ------- THUNK DISPATCHERS ------ */

export const getAllStudents = () => (dispatch) => {
  return axios.get('/api/students')
  .then(serverResponse => serverResponse.data)
  .then(allStudents => dispatch(receiveAllStudents(allStudents)))
  .catch(console.error)
}

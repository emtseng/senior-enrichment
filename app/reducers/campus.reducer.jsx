/* ------- ACTIONS ------ */


/* ------- ACTION CREATORS ------ */


/* ------- REDUCER ------ */

export const campusReducer = function(state = {
  allCampuses: [],
  singleCampus: {}
}, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_CAMPUSES:
      newState.allCampuses: action.receivedCampuses
      break
    default:
      return state
  }

  return newState

};

/* ------- DISPATCHERS ------ */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import CampusForm from './campusform'

/* ------ COMPONENT ----- */

class App extends Component {
  render() {
    return (
      <div>
        <h3>Testing form capabilities and backend routing:</h3>
        <CampusForm />
      </div>
    )
  }
}

/* ------ CONTAINER ----- */

const mapPropsToState = (store) => {
  return {
    allCampuses: store.campus.allCampuses
  }
}

const mapDispatchToState = (dispatch) => {
  return {}
}

export default connect(mapPropsToState, mapDispatchToState)(App)

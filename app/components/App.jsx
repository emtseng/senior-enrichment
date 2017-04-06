import React, { Component } from 'react';
import { connect } from 'react-redux';


/* ------ COMPONENT ----- */

class App extends Component {
  render() {
    return (
      <div>
        <h3>Did this work???</h3>
        <h4>Did I pass my props down???</h4>
        <ul>
          {this.props.allCampuses && this.props.allCampuses.map(campus =>
            (<li>{campus.name}</li>)
          )}
        </ul>
      </div>
    )
  }
}

/* ------ CONTAINER ----- */

const mapPropsToState = (store) => {
  return {
    allCampuses: store.allCampuses
  }
}

const mapDispatchToState = (dispatch) => {
  return {

  }
}

export default connect(mapPropsToState, mapDispatchToState)(App)

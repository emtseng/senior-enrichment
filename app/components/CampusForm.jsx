import React, { Component } from 'react'
import { connect } from 'react-redux'

class CampusForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCampus: '', //start off as empty strings
      campusQuery: ''
    }
    this.selectCampus = this.selectCampus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  selectCampus(campus) {
    this.setState({
      selectedCampus: campus
    })
  }
  handleChange(e) {
    this.setState({
      campusQuery: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault() //remember to use this to prevent it from auto-refreshing
    e.persist()
    this.setState({
      selectedCampus: e.target.campus.value
    })
  }
  render() {
    return (
      <div>
        <h3>
          {this.state.selectedCampus}
        </h3>

        <div>
          <form>
            <label>Select a campus: </label>
            <select onChange={(e) => this.selectCampus(e.target.value)}>
              {this.props.allCampuses.map(campus =>
                <option value={campus.name} key={campus.id}>{campus.name}</option>
              )}
            </select>
          </form>
        </div>

        <div>
          <p>Do it with a more annoying form type:</p>
          <form onSubmit={this.handleSubmit} >
            <label>Campus: </label>
            <input
              className="form-control"
              type="text"
              value={this.state.campusQuery}
              placeholder="Enter a campus name"
              onChange={this.handleChange}
              name="campus"
            />
            <button type='submit' className='btn btn-success' disabled={this.props.buttonDisabled}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

/* ----- CONTAINER ----- */

const mapPropsToState = (store) => {
  return {
    allCampuses: store.campus.allCampuses
  }
}

const mapDispatchToState = (dispatch) => {
  return {

  }
}

export default connect(mapPropsToState, mapDispatchToState)(CampusForm)

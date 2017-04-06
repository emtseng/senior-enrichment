'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, onEnter, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/App'
import { getAllCampuses } from './reducers/campus.reducer'

const onAppEnter = () => {
  store.dispatch(getAllCampuses())
}

render(
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/" component={App} onEnter={onAppEnter} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

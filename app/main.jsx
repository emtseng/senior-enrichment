'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, onEnter } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/App'

const onAppEnter = () => {
  store.dispatch(/* ADD LOADER */)
}

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} onEnter={onAppEnter} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

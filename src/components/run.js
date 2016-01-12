import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

const configureStore = require('../stores');

import App from '../containers/App';
import Overview from '../containers/Overview';

const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Overview} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

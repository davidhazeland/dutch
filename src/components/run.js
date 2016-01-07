import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../stores';
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import App from '../containers/App';
import PageReporter from '../containers/PageReporter';

const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PageReporter} />
        <Route path="page" component={PageReporter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

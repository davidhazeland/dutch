import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';

const reducers = require('../reducers');
const sagas = require('../sagas');

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware, // neat middleware that logs actions
  sagaMiddleware(...sagas)
)(createStore);

module.exports = function(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store
};

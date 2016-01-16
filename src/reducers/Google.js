/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import Immutable from 'immutable';
import config from 'config';

const initialState = Immutable.fromJS({
  authorized: false,
  isAuthorizing: false,
  isLogining: false,
  analyticsAccounts: config.GOOGLE_ANALYTICS_ACCOUNTS
});

function makeAuthorizing(state) {
  return state.set('isAuthorizing', true);
}

function setAuthorized(state, authorized) {
  return state
    .set('isAuthorizing', false)
    .set('isLogining', false)
    .set('authorized', authorized);
}

function makeLogining(state) {
  return state.set('isLogining', true);
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {

    case 'GOOGLE_AUTHORIZE_REQUEST': {
      return makeAuthorizing(state);
    } break;

    case 'GOOGLE_AUTHORIZE_SUCCESS': {
      return setAuthorized(state, true);
    } break;

    case 'GOOGLE_AUTHORIZE_FAILURE': {
      return setAuthorized(state, false);
    } break;

    case 'GOOGLE_LOGIN_REQUEST': {
      return makeLogining(state);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};

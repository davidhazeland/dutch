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
  isSigningIn: false,
  analyticsAccounts: config.GOOGLE_ANALYTICS_ACCOUNTS
});

function authorize(state) {
  return state.set('isAuthorizing', true);
}

function authorized(state, authorized) {
  return state
    .set('isAuthorizing', false)
    .set('isSigningIn', false)
    .set('authorized', authorized);
}

function signIn(state) {
  return state.set('isSigningIn', true);
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'GOOGLE_AUTHORIZE': {
      // Modify next state depending on the action and return it
      return authorize(state);
    } break;

    case 'GOOGLE_AUTHORIZE_SUCCESS': {
      // Modify next state depending on the action and return it
      return authorized(state, true);
    } break;

    case 'GOOGLE_AUTHORIZE_FAILURE': {
      // Modify next state depending on the action and return it
      return authorized(state, false);
    } break;

    case 'GOOGLE_SIGN_IN': {
      // Modify next state depending on the action and return it
      return signIn(state);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'immutable';
import config from 'config';

const initialState = Immutable.fromJS({
  authorized: true,
  isAuthorizing: false,
  isLoggingIn: false,
  adAccounts: config.FACEBOOK_AD_ACCOUNTS
});

function setAuthorizing(state) {
  return state.set('isAuthorizing', true);
}

function setAuthorized(state, authorized) {
  return state
    .set('isAuthorizing', false)
    .set('isLogining', false)
    .set('authorized', authorized);
}

function setLogining(state) {
  return state.set('isLogining', true);
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'FACEBOOK_AUTHORIZE': {
      // Modify next state depending on the action and return it
      return setAuthorizing(state);
    } break;

    case 'FACEBOOK_AUTHORIZE_SUCCESS': {
      // Modify next state depending on the action and return it
      return setAuthorized(state, true);
    } break;

    case 'FACEBOOK_AUTHORIZE_FAILURE': {
      // Modify next state depending on the action and return it
      return setAuthorized(state, false);
    } break;

    case 'FACEBOOK_LOGIN': {
      // Modify next state depending on the action and return it
      return setLogining(state);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

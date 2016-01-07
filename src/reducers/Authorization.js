/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'immutable';

const initialState = Immutable.Map();

function setAuthorization(state, authorized) {
  return state.set('authorized', authorized);
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'AUTHORIZATION_SET_STATE': {
      // Modify next state depending on the action and return it
      return setAuthorization(state, action.parameter);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'immutable';

const initialState = Immutable.Map();

function requestActiveUsers(state) {
  return state.setIn(['activeUser', 'isRequesting'], true);
}

function receiveActiveUsers(state, data) {
  return state
    .setIn(['activeUser', 'isRequesting'], false)
    .setIn(['activeUser', 'data'], Immutable.fromJS(data));
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'OVERVIEW_REQUEST_ACTIVE_USERS': {
      // Modify next state depending on the action and return it
      return requestActiveUsers(state);
    } break;

    case 'OVERVIEW_RECEIVE_ACTIVE_USERS': {
      // Modify next state depending on the action and return it
      return receiveActiveUsers(state, action.parameter);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

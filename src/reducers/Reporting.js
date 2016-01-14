/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

function selectProperty(state, property) {
  return state.set('selectedProperty', property);
}

function setAdAnalyticsData(state, data) {
  return state.setIn(['adAnalytics', 'data'], Immutable.fromJS(data));
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'REPORTING_SELECT_PROPERTY': {
      // Modify next state depending on the action and return it
      return selectProperty(state, action.parameter);
    } break;

    case 'REPORTING_RECEIVE_AD_ANALYTICS': {
      // Modify next state depending on the action and return it
      return setAdAnalyticsData(state, action.parameter);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

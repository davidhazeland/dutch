/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'immutable';

const initialState = Immutable.Map();

function setActiveUserData(state, data) {
  return state
    .setIn(['activeUser', 'data'], Immutable.fromJS(data))
    .setIn(['activeUser', 'isFetching'], false);
}


function setAdSenseReportData(state, data) {
  return state
    .setIn(['adSenseReport', 'data'], Immutable.fromJS(data))
    .setIn(['adSenseReport', 'isFetching'], false);
}


module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {

    case 'OVERVIEW_FETCH_ACTIVE_USERS_REQUEST': {
      return state.setIn(['activeUser', 'isFetching'], true);
    } break;

    case 'OVERVIEW_FETCH_ACTIVE_USERS_SUCCESS': {
      return setActiveUserData(state, action.parameter);
    } break;

    case 'OVERVIEW_FETCH_ACTIVE_USERS_FAILURE': {
      return state.setIn(['activeUser', 'isFetching'], false);
    } break;

    case 'OVERVIEW_FETCH_ADSENSE_REPORTS_REQUEST': {
      return state.setIn(['adSenseReport', 'isFetching'], true);
    } break;

    case 'OVERVIEW_FETCH_ADSENSE_REPORTS_SUCCESS': {
      return setAdSenseReportData(state, action.parameter);
    } break;

    case 'OVERVIEW_FETCH_ADSENSE_REPORTS_FAILURE': {
      return state.setIn(['adSenseReport', 'isFetching'], false);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};

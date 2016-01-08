/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'immutable';

const initialState = Immutable.Map();

function setResult(state, result) {
  return state.set('result', result);
}

function setKeyword(state, keyword) {
  return state.set('query', {
    keyword: keyword
  });
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'PAGE_REPORTER_SET_RESULT': {
      // Modify next state depending on the action and return it
        return setResult(state, action.parameter);
    } break;

    case 'PAGE_REPORTER_SEARCH': {
      // Modify next state depending on the action and return it
      return setKeyword(state, action.parameter);
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};

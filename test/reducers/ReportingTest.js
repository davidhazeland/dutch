import Immutable from 'immutable';

var reducer = require('../../src/reducers/Reporting');

describe('Reporting', () => {

  it('should not change the passed state', (done) => {

    const state = Immutable.Map();
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('handle SELECT_PROPERTY action', () => {
    const state = Immutable.Map();
    const action = {
      type: 'REPORTING_SELECT_PROPERTY',
      parameter: 'UA-ID'
    };
    const nextState = reducer(state, action);

    const actual = nextState.get('selectedProperty');
    const expected = 'UA-ID';

    expect(actual).to.equal(expected);
  });

  it('handle RECEIVE_AD_ANALYTICS action', () => {
    const state = Immutable.Map();
    const action = {
      type: 'REPORTING_RECEIVE_AD_ANALYTICS',
      parameter: []
    };
    const nextState = reducer(state, action);

    const actual = nextState.getIn(['adAnalytics', 'data']).toJS();
    const expected = [];

    expect(actual).to.deep.equal(expected);
  });
});

import Immutable from 'immutable';

var reducer = require('../../src/reducers/Reporting');

describe('Reporting', () => {

  it('should not change the passed state', (done) => {

    const state = Immutable.Map();
    reducer(state, {type: 'INVALID'});

    done();
  });
});

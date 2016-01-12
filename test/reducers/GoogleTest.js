/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';

var reducer = require('../../src/reducers/Google');

describe('[Reducer] Google', () => {

  it('should not change the passed state', (done) => {

    const state = Immutable.Map();
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('should change to authorizing state when call GOOGLE_AUTHORIZE action', () => {
    const state = Immutable.Map();
    const nextState = reducer(state, {type: 'GOOGLE_AUTHORIZE'});

    const actual = nextState.get('isAuthorizing');
    const expected = true;

    expect(actual).to.equal(expected);
  });
});

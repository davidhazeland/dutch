/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';

var reducer = require('../../src/reducers/Google');

describe('Google', () => {

  it('should not change the passed state', (done) => {

    const state = Immutable.Map();
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('should change state to authorizing when authorize', (done) => {
    const state = Immutable.Map();

    const nextState = reducer(state, {type: 'GOOGLE_AUTHORIZE'});

    expect(nextState.get('isAuthorizing')).to.equal(true);

    done();
  });
});

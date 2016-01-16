/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import test from 'tape';
import Immutable from 'immutable';

var reducer = require('../../src/reducers/Google');


test('Google reducer handle ')

//describe('[Reducer] Google', () => {
//
//  it('should not change the passed state', (done) => {
//    const state = Immutable.Map();
//    reducer(state, {type: 'INVALID'});
//
//    done();
//  });
//
//  it('handle GOOGLE_AUTHORIZE action', () => {
//    const state = Immutable.Map();
//    const nextState = reducer(state, {type: 'GOOGLE_AUTHORIZE'});
//
//    const actual = nextState.get('isAuthorizing');
//    const expected = true;
//
//    expect(actual).to.equal(expected);
//  });
//
//  it('handle GOOGLE_SIGN_IN action', () => {
//    const state = Immutable.Map();
//    const nextState = reducer(state, {type: 'GOOGLE_SIGN_IN'});
//
//    const actual = nextState.get('isSigningIn');
//    const expected = true;
//
//    expect(actual).to.equal(expected);
//  });
//});

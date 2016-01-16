/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import test from 'tape';
import Immutable from 'immutable';

var reducer = require('../../src/reducers/Google');
import GoogleAuthorizeRequest from 'actions/GoogleAuthorizeRequest';
import GoogleAuthorizeSuccess from 'actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from 'actions/GoogleAuthorizeFailure';
import GoogleLoginRequest from 'actions/GoogleLoginRequest';


test('Google reducer handles GOOGLE_AUTHORIZE_REQUEST action', assert => {
  const state = Immutable.Map();
  const nextState = reducer(state, GoogleAuthorizeRequest());

  const actual = nextState.get('isAuthorizing');
  const expected = true;

  assert.equal(actual, expected,
    'Should return state with authorizing');

  assert.end();
});


test('Google reducer handles GOOGLE_AUTHORIZE_SUCCESS action', assert => {
  const state = Immutable.fromJS({
    authorized: false,
    isAuthorizing: true,
    isLogining: true
  });
  const nextState = reducer(state, GoogleAuthorizeSuccess());

  const actual = [
    nextState.get('authorized'),
    nextState.get('isAuthorizing'),
    nextState.get('isLogining')
  ];

  const expected = [
    true,
    false,
    false
  ];

  assert.deepEqual(actual, expected,
    'Should return state with authorize and without authorizing, logining');

  assert.end();
});


test('Google reducer handles GOOGLE_AUTHORIZE_FAILURE action', assert => {
  const state = Immutable.fromJS({
    isAuthorizing: true,
    isLogining: true
  });
  const nextState = reducer(state, GoogleAuthorizeFailure());

  const actual = [
    nextState.get('isAuthorizing'),
    nextState.get('isLogining')
  ];
  const expected = [
    false,
    false
  ];

  assert.deepEqual(actual, expected,
    'Should return state without authorizing');

  assert.end();
});


test('Google reducer handles GOOGLE_LOGIN_REQUEST action', assert => {
  const state = Immutable.Map();
  const nextState = reducer(state, GoogleLoginRequest());

  const actual = nextState.get('isLogining');
  const expected = true;

  assert.equal(actual, expected,
    'Should return state with logining');

  assert.end();
});


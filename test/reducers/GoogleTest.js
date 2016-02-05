'use strict';

import test from 'tape';
import Immutable from 'immutable';

var reducer = require('../../src/reducers/Google');
import GoogleAuthorizeRequest from 'actions/GoogleAuthorizeRequest';
import GoogleAuthorizeSuccess from 'actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from 'actions/GoogleAuthorizeFailure';
import GoogleLoginRequest from 'actions/GoogleLoginRequest';


test('Google reducer', nest => {
  nest.test('...handle GOOGLE_AUTHORIZE_REQUEST action', assert => {
    assert.plan(1);

    const state = Immutable.Map();
    const nextState = reducer(state, GoogleAuthorizeRequest());

    const actual = nextState.get('isAuthorizing');
    const expected = true;

    assert.equal(actual, expected,
      'should return a state be authorizing');

    assert.end();
  });


  nest.test('...handle GOOGLE_AUTHORIZE_SUCCESS action', assert => {
    assert.plan(1);

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
      'should return a state be authorized');

    assert.end();
  });


  nest.test('...handle GOOGLE_AUTHORIZE_FAILURE action', assert => {
    assert.plan(1);

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
      'should return a state be not authorizing and logining');

    assert.end();
  });


  nest.test('...handle GOOGLE_LOGIN_REQUEST action', assert => {
    assert.plan(1);

    const state = Immutable.Map();
    const nextState = reducer(state, GoogleLoginRequest());

    const actual = nextState.get('isLogining');
    const expected = true;

    assert.equal(actual, expected,
      'should return a state be logining');

    assert.end();
  });
});

'use strict';

import test from 'tape';
import Immutable from 'immutable';
import {put, call, fork, take} from 'redux-saga';
import saga, {request} from 'sagas/GoogleLoginRequest';
import {login} from 'gapi/OAuth';
import GoogleAuthorizeSuccess from 'actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from 'actions/GoogleAuthorizeFailure';


test('Google Login Request saga', assert => {
  assert.plan(1);

  const sagaIterator = saga();

  const actual = [];
  const expected = [];

  actual[0] = sagaIterator.next().value;
  expected[0] = take('GOOGLE_LOGIN_REQUEST');

  actual[1] = sagaIterator.next(true).value;
  expected[1] = fork(request);

  actual[2] = sagaIterator.next().value;
  expected[2] = take('GOOGLE_LOGIN_REQUEST');

  assert.deepEqual(actual, expected,
    'should wait request action and then request authorization');

  assert.end();
});


test('Google Login Request saga: request() generator', nest => {
  nest.test('...login without error', assert => {
    assert.plan(1);

    const requestIterator = request();

    const actual = [];
    const expected = [];

    actual[0] = requestIterator.next().value;
    expected[0] = call(login);

    const authorizeResponse = {};

    actual[1] = requestIterator.next(authorizeResponse).value;
    expected[1] = put(GoogleAuthorizeSuccess(authorizeResponse));

    assert.deepEqual(actual, expected,
      'should dispatch success action');

    assert.end();
  });

  nest.test('...login with error', assert => {
    assert.plan(1);

    const requestIterator = request();

    const actual = [];
    const expected = [];

    actual[0] = requestIterator.next().value;
    expected[0] = call(login);

    const authorizeError = new Error();

    actual[1] = requestIterator.throw(authorizeError).value;
    expected[1] = put(GoogleAuthorizeFailure(authorizeError));

    assert.deepEqual(actual, expected,
      'should dispatch failure action');

    assert.end();
  });
});

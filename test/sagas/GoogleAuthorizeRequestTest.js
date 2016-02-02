'use strict';

import test from 'tape';
import Immutable from 'immutable';
import {put, call, fork, take} from 'redux-saga';
import saga, {request} from 'sagas/GoogleAuthorizeRequest';
import {authorize} from 'gapi/OAuth';
import GoogleAuthorizeSuccess from 'actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from 'actions/GoogleAuthorizeFailure';


test('Google Authorize Request saga', assert => {
  const sagaIterator = saga();

  const actual = [];
  const expected = [];

  actual[0] = sagaIterator.next().value;
  expected[0] = take('GOOGLE_AUTHORIZE_REQUEST');

  actual[1] = sagaIterator.next(true).value;
  expected[1] = fork(request);

  actual[2] = sagaIterator.next().value;
  expected[2] = take('GOOGLE_AUTHORIZE_REQUEST');

  assert.deepEqual(actual, expected,
    'should wait request action and then request authorization');

  assert.end();
});


test('Google Authorize Request saga: request() generator', nest => {

  nest.test('...authorize without error', assert => {
    const requestIterator = request();

    const actual = [];
    const expected = [];

    actual[0] = requestIterator.next().value;
    expected[0] = call(authorize);

    const authorizeResponse = {};

    actual[1] = requestIterator.next(authorizeResponse).value;
    expected[1] = put(GoogleAuthorizeSuccess(authorizeResponse));

    assert.deepEqual(actual, expected,
      'should dispatch success action');

    assert.end();
  });

  nest.test('...authorize with error', assert => {
    const requestIterator = request();

    const actual = [];
    const expected = [];

    actual[0] = requestIterator.next().value;
    expected[0] = call(authorize);

    const authorizeError = new Error();

    actual[1] = requestIterator.throw(authorizeError).value;
    expected[1] = put(GoogleAuthorizeFailure(authorizeError));

    assert.deepEqual(actual[1], expected[1],
      'should dispatch failure action');

    assert.end();
  });

});

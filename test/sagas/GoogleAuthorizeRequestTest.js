/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import test from 'tape';
import Immutable from 'immutable';
import {put, call, fork, take} from 'redux-saga';
import saga, {request} from 'sagas/GoogleAuthorizeRequest';
import {authorize} from 'gapi/OAuth';
import GoogleAuthorizeSuccess from 'actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from 'actions/GoogleAuthorizeFailure';


const setup = () => {
  const fixtures = {};

  fixtures.sagaIterator = saga();
  fixtures.requestIterator = request();

  return fixtures;
};


test('Google Authorize Request saga', assert => {
  const fixtures = setup();

  const actual = [];
  const expected = [];

  actual[0] = fixtures.sagaIterator.next().value;
  expected[0] = take('GOOGLE_AUTHORIZE_REQUEST');

  assert.deepEqual(actual[0], expected[0],
    'should wait for GOOGLE_AUTHORIZE_REQUEST action');

  actual[1] = fixtures.sagaIterator.next(true).value;
  expected[1] = fork(request);

  assert.deepEqual(actual[1], expected[1],
    'then fork request generator function');

  actual[2] = fixtures.sagaIterator.next().value;
  expected[2] = take('GOOGLE_AUTHORIZE_REQUEST');

  assert.deepEqual(actual[2], expected[2],
    'and keep waiting GOOGLE_AUTHORIZE_REQUEST action');

  assert.end();
});


test('Google Authorize Request saga: request generator', nest => {

  nest.test('...without error', assert => {
    const fixtures = setup();

    const actual = [];
    const expected = [];

    actual[0] = fixtures.requestIterator.next().value;
    expected[0] = call(authorize);

    assert.deepEqual(actual[0], expected[0],
      'should call authorize service');

    const authorizeResponse = {};

    actual[1] = fixtures.requestIterator.next(authorizeResponse).value;
    expected[1] = put(GoogleAuthorizeSuccess(authorizeResponse));

    assert.deepEqual(actual[1], expected[1],
      'then dispatch GOOGLE_AUTHORIZE_SUCCESS action');

    assert.end();
  });

  nest.test('...with error', assert => {
    const fixtures = setup();

    const actual = [];
    const expected = [];

    actual[0] = fixtures.requestIterator.next().value;
    expected[0] = call(authorize);

    assert.deepEqual(actual[0], expected[0],
      'should call authorize service');

    const authorizeError = new Error();

    actual[1] = fixtures.requestIterator.throw(authorizeError).value;
    expected[1] = put(GoogleAuthorizeFailure(authorizeError));

    assert.deepEqual(actual[1], expected[1],
      'then dispatch GOOGLE_AUTHORIZE_FAILURE action');

    assert.end();
  });

});

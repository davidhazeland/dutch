/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import test from 'tape';
import Immutable from 'immutable';
import {put, call, fork, take} from 'redux-saga';
import saga, {request} from 'sagas/GoogleAuthorizeRequest';
import {authorize} from 'gapi/OAuth';
import GoogleAuthorizeRequest from 'actions/GoogleAuthorizeRequest';
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
  expected[0] = take(GoogleAuthorizeRequest().type);

  assert.deepEqual(actual[0], expected[0],
    'should wait for Google Authorize Request action');

  actual[1] = fixtures.sagaIterator.next(true).value;
  expected[1] = fork(request);

  assert.deepEqual(actual[1], expected[1],
    'then fork request generator function');

  actual[2] = fixtures.sagaIterator.next().value;
  expected[2] = take(GoogleAuthorizeRequest().type);

  assert.deepEqual(actual[2], expected[2],
    'and keep waiting Google Authorize Request action');

  assert.end();
});


test('Google Authorize Request saga: request generator success', assert => {
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
    'then dispatch GoogleAuthorizeSuccess action');

  assert.end();
});


test('Google Authorize Request saga: request generator failure', assert => {
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
    'then dispatch GoogleAuthorizeFailure action');

  assert.end();
});


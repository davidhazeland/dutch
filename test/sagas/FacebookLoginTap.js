import test from 'tape';

import {call, put} from 'redux-saga';
import {login} from 'fb/OAuth';
import {login as loginSaga} from 'sagas/FacebookLogin';
import FacebookAuthorizeSuccess from 'actions/FacebookAuthorizeSuccess';
import FacebookAuthorizeFailure from 'actions/FacebookAuthorizeFailure';

const setup = () => {
  const fixtures = {};

  fixtures.saga = loginSaga();

  return fixtures;
};

const teardown = (fixtures) => {

  // Dispose of your fixtures here.
};

test('[Saga] Login facebook success', assert => {
  const fixtures = setup();

  const actual = [];

  const loginResponse = {};

  actual[0] = fixtures.saga.next().value;
  actual[1] = fixtures.saga.next(loginResponse).value;

  const expected = [
    call(login),
    put(FacebookAuthorizeSuccess(loginResponse))
  ];

  assert.deepEqual(actual[0], expected[0],
    'should call login service');

  assert.deepEqual(actual[1], expected[1],
    'should dispatch success action');

  assert.end();
});


test('[Saga] Login facebook failure', assert => {
  const fixtures = setup();

  const actual = [];

  const loginError = new Error('Login error!');

  actual[0] = fixtures.saga.next().value;
  actual[1] = fixtures.saga.throw(loginError).value;

  const expected = [
    call(login),
    put(FacebookAuthorizeFailure(loginError))
  ];

  assert.deepEqual(actual[0], expected[0],
    'should call login service');

  assert.deepEqual(actual[1], expected[1],
    'should dispatch failure action');

  assert.end();
});

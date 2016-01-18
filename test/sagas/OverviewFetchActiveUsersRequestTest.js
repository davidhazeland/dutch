/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import test from 'tape';
import delay from 'delay';
import config from 'config';
import Immutable from 'immutable';
import {put, call, take, fork, race} from 'redux-saga';
import saga, {request, autoUpdate} from 'sagas/OverviewFetchActiveUsersRequest';
import {fetch} from 'gapi/ActiveUsers';
import OverviewFetchActiveUsersSuccess from 'actions/OverviewFetchActiveUsersSuccess';
import OverviewFetchActiveUsersFailure from 'actions/OverviewFetchActiveUsersFailure';


const setup = () => {
  const fixtures = {};

  fixtures.state = {
    Google: Immutable.fromJS({
      analyticsAccounts: [
        {
          properties: []
        }
      ]
    })
  };

  fixtures.getState = () => fixtures.state;

  fixtures.sagaIterator = saga(fixtures.getState);
  fixtures.requestIterator = request(fixtures.getState);
  fixtures.autoUpdateIterator = autoUpdate(fixtures.getState);

  return fixtures;
};


test('Overview Fetch Active Users Request saga', assert => {
  const fixtures = setup();

  const actual = [];
  const expected = [];

  actual[0] = fixtures.sagaIterator.next().value;
  expected[0] = take('OVERVIEW_FETCH_ACTIVE_USERS_REQUEST');

  assert.deepEqual(actual[0], expected[0],
    'should wait for OVERVIEW_FETCH_ACTIVE_USERS_REQUEST action');

  actual[1] = fixtures.sagaIterator.next(true).value;
  expected[1] = fork(request, fixtures.getState);

  assert.deepEqual(actual[1], expected[1],
    'should fork request when catch OVERVIEW_FETCH_ACTIVE_USERS_REQUEST action');

  actual[2] = fixtures.sagaIterator.next().value;
  expected[2] = fork(autoUpdate, fixtures.getState);

  assert.deepEqual(actual[2], expected[2],
    'then fork auto update');

  actual[3] = fixtures.sagaIterator.next().value;
  expected[3] = take('OVERVIEW_FETCH_ACTIVE_USERS_REQUEST');

  assert.deepEqual(actual[3], expected[3],
    'then continue waiting for OVERVIEW_FETCH_ACTIVE_USERS_REQUEST action');

  assert.end();
});


test('Overview Fetch Active Users Request saga: request generator', nest => {

  nest.test('...without error', assert => {
    const fixtures = setup();

    const actual = [];
    const expected = [];

    actual[0] = fixtures.requestIterator.next().value;

    const account = fixtures.state.Google.get('analyticsAccounts').get(0).toJS();
    expected[0] = call(fetch, account);

    assert.deepEqual(actual[0], expected[0],
      'should call fetch service');

    const result = {};

    actual[1] = fixtures.requestIterator.next(result).value;
    expected[1] = put(OverviewFetchActiveUsersSuccess(result));

    assert.deepEqual(actual[1], expected[1],
      'then dispatch OVERVIEW_FETCH_ACTIVE_USERS_SUCCESS action');

    assert.end();
  });

  nest.test('...with error', assert => {
    const fixtures = setup();

    const actual = [];
    const expected = [];

    actual[0] = fixtures.requestIterator.next().value;

    const account = fixtures.state.Google.get('analyticsAccounts').get(0).toJS();
    expected[0] = call(fetch, account);

    assert.deepEqual(actual[0], expected[0],
      'should call fetch service');

    const error = new Error();

    actual[1] = fixtures.requestIterator.throw(error).value;
    expected[1] = put(OverviewFetchActiveUsersFailure(error));

    assert.deepEqual(actual[1], expected[1],
      'then dispatch OVERVIEW_FETCH_ACTIVE_USERS_FAILURE action');

    assert.end();
  });

});


test('Overview Fetch Active Users Request saga: autoUpdate generator', nest => {

  nest.test('...request interval', assert => {
    const fixtures = setup();

    const actual = [];
    const expected = [];

    actual[0] = fixtures.autoUpdateIterator.next().value;
    expected[0] = race({
      tick: call(delay, config.OVERVIEW_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ACTIVE_USERS')
    });

    assert.deepEqual(actual[0], expected[0],
      'should wait for OVERVIEW_STOP_FETCH_ACTIVE_USERS action or timeout');

    actual[1] = fixtures.autoUpdateIterator.next({stop: false}).value;
    expected[1] = fork(request, fixtures.getState);

    assert.deepEqual(actual[1], expected[1],
      'should fork request generator when timeout');

    actual[2] = fixtures.autoUpdateIterator.next().value;
    expected[2] = race({
      tick: call(delay, config.OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ACTIVE_USERS')
    });

    assert.deepEqual(actual[2], expected[2],
      'then continue waiting for OVERVIEW_STOP_FETCH_ACTIVE_USERS action or timeout');

    assert.end();
  });

  nest.test('..with stop action', assert => {
    const fixtures = setup();

    const actual = [];
    const expected = [];

    actual[0] = fixtures.autoUpdateIterator.next().value;
    expected[0] = race({
      tick: call(delay, config.OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ACTIVE_USERS')
    });

    assert.deepEqual(actual[0], expected[0],
      'should wait for OVERVIEW_STOP_FETCH_ACTIVE_USERS action or timeout');

    actual[1] = fixtures.autoUpdateIterator.next({stop: true}).value;
    expected[1] = undefined;

    assert.deepEqual(actual[1], expected[1],
      'should exit when catch OVERVIEW_STOP_FETCH_ACTIVE_USERS action');

    assert.end();
  });

});

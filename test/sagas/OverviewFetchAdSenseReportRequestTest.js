'use strict';

import test from 'tape';
import delay from 'delay';
import config from 'config';
import Immutable from 'immutable';
import {put, call, take, fork, race} from 'redux-saga';
import saga, {request, autoUpdate} from 'sagas/OverviewFetchAdSenseReportRequest';
import {fetch} from 'gapi/EarningReport.js';
import OverviewFetchAdSenseReportsSuccess from 'actions/OverviewFetchAdSenseReportsSuccess';
import OverviewFetchAdSenseReportsFailure from 'actions/OverviewFetchAdSenseReportsFailure';

const setup = () => {
  const fixtures = {};

  const state = {
    Google: Immutable.fromJS({
      analyticsAccounts: [
        {
          properties: []
        }
      ]
    })
  };
  fixtures.getState = () => state;

  return fixtures;
};


test('Overview Fetch AdSense Report Request saga', assert => {
  assert.plan(1);

  const fixtures = setup();

  const sagaIterator = saga(fixtures.getState);

  const actual = [];
  const expected = [];

  actual[0] = sagaIterator.next().value;
  expected[0] = take('OVERVIEW_FETCH_ADSENSE_REPORTS_REQUEST');

  actual[1] = sagaIterator.next(true).value;
  expected[1] = fork(request, fixtures.getState);

  actual[2] = sagaIterator.next().value;
  expected[2] = fork(autoUpdate, fixtures.getState);

  actual[3] = sagaIterator.next().value;
  expected[3] = take('OVERVIEW_FETCH_ADSENSE_REPORTS_REQUEST');

  assert.deepEqual(actual, expected,
    'should wait request action and then request, auto update data');

  assert.end();
});


test('Overview Fetch AdSense Report Request saga: request() generator', nest => {
  nest.test('...fetch without error', assert => {
    assert.plan(1);

    const fixtures = setup();
    const requestIterator = request(fixtures.getState);

    const actual = [];
    const expected = [];

    actual[0] = requestIterator.next().value;

    const account = fixtures.getState().Google.getIn(['analyticsAccounts', 0]).toJS();
    expected[0] = call(fetch, account);

    const result = {};

    actual[1] = requestIterator.next(result).value;
    expected[1] = put(OverviewFetchAdSenseReportsSuccess(result));

    assert.deepEqual(actual, expected,
      'should dispatch success action');

    assert.end();
  });

  nest.test('...fetch with error', assert => {
    assert.plan(1);

    const fixtures = setup();
    const requestIterator = request(fixtures.getState);

    const actual = [];
    const expected = [];

    actual[0] = requestIterator.next().value;

    const account = fixtures.getState().Google.getIn(['analyticsAccounts', 0]).toJS();
    expected[0] = call(fetch, account);

    const error = new Error();

    actual[1] = requestIterator.throw(error).value;
    expected[1] = put(OverviewFetchAdSenseReportsFailure(error));

    assert.deepEqual(actual, expected,
      'should request data and continue tick');

    assert.end();
  });
});


test('Overview Fetch AdSense Report Request saga: autoUpdate() generator', nest => {
  nest.test('...timeout without catching stop action', assert => {
    assert.plan(1);

    const fixtures = setup();
    const autoUpdateIterator = autoUpdate(fixtures.getState);

    const actual = [];
    const expected = [];

    actual[0] = autoUpdateIterator.next().value;
    expected[0] = race({
      tick: call(delay, config.OVERVIEW_ADSENSE_REPORTS_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ADSENSE_REPORTS')
    });

    actual[1] = autoUpdateIterator.next({stop: false}).value;
    expected[1] = fork(request, fixtures.getState);

    actual[2] = autoUpdateIterator.next().value;
    expected[2] = race({
      tick: call(delay, config.OVERVIEW_ADSENSE_REPORTS_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ADSENSE_REPORTS')
    });

    assert.deepEqual(actual, expected,
      'should request when timeout');

    assert.end();
  });

  nest.test('..catch stop action', assert => {
    assert.plan(1);

    const fixtures = setup();
    const autoUpdateIterator = autoUpdate(fixtures.getState);

    const actual = [];
    const expected = [];

    actual[0] = autoUpdateIterator.next().value;
    expected[0] = race({
      tick: call(delay, config.OVERVIEW_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ADSENSE_REPORTS')
    });

    actual[1] = autoUpdateIterator.next({stop: true}).value;
    expected[1] = undefined;

    assert.deepEqual(actual, expected,
      'should stop auto update');

    assert.end();
  });
});

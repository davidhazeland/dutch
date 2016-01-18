'use strict';

import test from 'tape';
import Immutable from 'immutable';

var reducer = require('../../src/reducers/Overview');
import OverviewFetchActiveUsersRequest from 'actions/OverviewFetchActiveUsersRequest';
import OverviewFetchActiveUsersSuccess from 'actions/OverviewFetchActiveUsersSuccess';
import OverviewFetchActiveUsersFailure from 'actions/OverviewFetchActiveUsersFailure';
import OverviewFetchAdSenseReportsRequest from 'actions/OverviewFetchAdSenseReportsRequest';
import OverviewFetchAdSenseReportsSuccess from 'actions/OverviewFetchAdSenseReportsSuccess';
import OverviewFetchAdSenseReportsFailure from 'actions/OverviewFetchAdSenseReportsFailure';


test('Overview reducer handle OVERVIEW_FETCH_ACTIVE_USERS_REQUEST action', assert => {
  const state = Immutable.Map();
  const nextState = reducer(state, OverviewFetchActiveUsersRequest());

  const actual = nextState.getIn(['activeUser', 'isFetching']);
  const expected = true;

  assert.equal(actual, expected,
    'should return a state be fetching');

  assert.end();
});


test('Overview reducer handle OVERVIEW_FETCH_ACTIVE_USERS_SUCCESS action', assert => {
  const state = Immutable.Map();
  const data = [];

  const nextState = reducer(state, OverviewFetchActiveUsersSuccess(data));

  const actual = [];
  const expected = [];

  actual[0] = nextState.getIn(['activeUser', 'data']).toJS();
  expected[0] = [];

  assert.deepEqual(actual[0], expected[0],
    'should return a state with data stored');

  actual[1] = nextState.getIn(['activeUser', 'isFetching']);
  expected[1] = false;

  assert.deepEqual(actual[1], expected[1],
    'should return a state be fetching');

  assert.end();
});


test('Overview reducer handle OVERVIEW_FETCH_ACTIVE_USERS_FAILURE action', assert => {
  const state = Immutable.Map();

  const nextState = reducer(state, OverviewFetchActiveUsersFailure());

  const actual = nextState.getIn(['activeUser', 'isFetching']);
  const expected = false;

  assert.deepEqual(actual, expected,
    'should return a state be fetching');

  assert.end();
});


test('Overview reducer handle OVERVIEW_FETCH_ADSENSE_REPORTS_REQUEST action', assert => {
  const state = Immutable.Map();
  const nextState = reducer(state, OverviewFetchAdSenseReportsRequest());

  const actual = nextState.getIn(['adSenseReport', 'isFetching']);
  const expected = true;

  assert.equal(actual, expected,
    'should return a state be fetching');

  assert.end();
});


test('Overview reducer handle OVERVIEW_FETCH_ADSENSE_REPORTS_SUCCESS action', assert => {
  const state = Immutable.Map();
  const data = [];

  const nextState = reducer(state, OverviewFetchAdSenseReportsSuccess(data));

  const actual = [];
  const expected = [];

  actual[0] = nextState.getIn(['adSenseReport', 'data']).toJS();
  expected[0] = [];

  assert.deepEqual(actual[0], expected[0],
    'should return a state with data stored');

  actual[1] = nextState.getIn(['adSenseReport', 'isFetching']);
  expected[1] = false;

  assert.deepEqual(actual[1], expected[1],
    'should return a state be fetching');

  assert.end();
});


test('Overview reducer handle OVERVIEW_FETCH_ADSENSE_REPORTS_FAILURE action', assert => {
  const state = Immutable.Map();

  const nextState = reducer(state, OverviewFetchAdSenseReportsFailure());

  const actual = nextState.getIn(['adSenseReport', 'isFetching']);
  const expected = false;

  assert.deepEqual(actual, expected,
    'should return a state be fetching');

  assert.end();
});

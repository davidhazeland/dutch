'use strict';

import test from 'tape';
import Immutable from 'immutable';

var reducer = require('../../src/reducers/Overview');
import OverviewFetchActiveUsersRequest from 'actions/OverviewFetchActiveUsersRequest';
import OverviewFetchActiveUsersSuccess from 'actions/OverviewFetchActiveUsersSuccess';
import OverviewFetchActiveUsersFailure from 'actions/OverviewFetchActiveUsersFailure';


test('Overview reducer handle OVERVIEW_FETCH_ACTIVE_USERS_REQUEST action', assert => {
  const state = Immutable.Map();
  const nextState = reducer(state, OverviewFetchActiveUsersRequest());

  const actual = nextState.getIn(['activeUser', 'isFetching']);
  const expected = true;

  assert.equal(actual, expected,
    'should return a state with fetching');

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
    'should return a state without fetching');

  assert.end();
});


test('Overview reducer handle OVERVIEW_FETCH_ACTIVE_USERS_FAILURE action', assert => {
  const state = Immutable.Map();

  const nextState = reducer(state, OverviewFetchActiveUsersFailure());

  const actual = nextState.getIn(['activeUser', 'isFetching']);
  const expected = false;

  assert.deepEqual(actual, expected,
    'should return a state without fetching');

  assert.end();
});

//describe('Overview', () => {
//
//  it('should not change the passed state', (done) => {
//
//    const state = Immutable.Map();
//    reducer(state, {type: 'INVALID'});
//
//    done();
//  });
//
//  it('handle REQUEST_ACTIVE_USERS', function(){
//    const state = Immutable.Map();
//    const nextState = reducer(state, {type: 'OVERVIEW_REQUEST_ACTIVE_USERS'});
//
//    const actual = nextState.getIn(['activeUser', 'isRequesting']);
//    const expected = true;
//
//    expect(actual).to.equal(expected);
//  });
//
//  it('handle RECEIVE_ACTIVE_USERS', function(){
//    const state = Immutable.Map();
//    const data = [
//      {
//        name: 'Con là tất cả',
//        users: 130
//      }
//    ];
//    const nextState = reducer(state, {type: 'OVERVIEW_RECEIVE_ACTIVE_USERS', parameter: data});
//
//    const actual = nextState.getIn(['activeUser', 'data']).toJS();
//    const expected = data;
//
//    expect(actual).to.deep.equal(expected);
//  });
//});

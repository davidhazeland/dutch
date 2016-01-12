import Immutable from 'immutable';
var reducer = require('../../src/reducers/Overview');

describe('Overview', () => {

  it('should not change the passed state', (done) => {

    const state = Immutable.Map();
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('handle REQUEST_ACTIVE_USERS', function(){
    const state = Immutable.Map();
    const nextState = reducer(state, {type: 'OVERVIEW_REQUEST_ACTIVE_USERS'});

    const actual = nextState.getIn(['activeUser', 'isRequesting']);
    const expected = true;

    expect(actual).to.equal(expected);
  });

  it('handle RECEIVE_ACTIVE_USERS', function(){
    const state = Immutable.Map();
    const data = [
      {
        name: 'Con là tất cả',
        users: 130
      }
    ];
    const nextState = reducer(state, {type: 'OVERVIEW_RECEIVE_ACTIVE_USERS', parameter: data});

    const actual = nextState.getIn(['activeUser', 'data']).toJS();
    const expected = data;

    expect(actual).to.deep.equal(expected);
  });
});

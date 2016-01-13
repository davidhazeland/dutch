import Immutable from 'immutable';

var reducer = require('../../src/reducers/Facebook');

describe('Facebook', () => {

  it('should not change the passed state', (done) => {

    const state = Immutable.Map();
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('handle FACEBOOK_AUTHORIZE action', () => {
    const state = Immutable.Map();
    const nextState = reducer(state, {type: 'FACEBOOK_AUTHORIZE'});

    const actual = nextState.get('isAuthorizing');
    const expected = true;

    expect(actual).to.equal(expected);
  });

  //it('handle FACEBOOK_SIGN_IN action', () => {
  //  const state = Immutable.Map();
  //  const nextState = reducer(state, {type: 'FACEBOOK_SIGN_IN'});
  //
  //  const actual = nextState.get('isSigningIn');
  //  const expected = true;
  //
  //  expect(actual).to.equal(expected);
  //});
});

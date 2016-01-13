/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import {put, call} from 'redux-saga';
import {authorize} from 'sagas/FacebookAuthorize';
import {authorize as facebookAuthorize} from 'fb/OAuth';
import FacebookAuthorizeSuccess from 'actions/FacebookAuthorizeSuccess';
import FacebookAuthorizeFailure from 'actions/FacebookAuthorizeFailure';

describe('[Saga] Facebook Authorize', () => {
  beforeEach(function() {
    this.saga = authorize();
  });

  it('should call Facebook Auth service', function() {
    const actual = this.saga.next().value;
    const expected = call(facebookAuthorize);

    expect(actual).to.deep.equal(expected);
  });


  it('then dispatch Authorize Success action when service return result', function() {
    const result = {};

    this.saga.next();
    const actual = this.saga.next(result).value;
    const expected = put(FacebookAuthorizeSuccess(result));

    expect(actual).to.deep.equal(expected);
  });
});

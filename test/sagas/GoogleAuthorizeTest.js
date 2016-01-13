/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import {put, call} from 'redux-saga';
import {authorize} from 'sagas/GoogleAuthorize';
import {authorize as googleAuthorize} from 'gapi/OAuth';
import GoogleAuthorizeSuccess from 'actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from 'actions/GoogleAuthorizeFailure';

describe('[Saga] Google Authorize', () => {
  beforeEach(function() {
    this.saga = authorize();
  });

  it('should call Google Auth service', function() {
    const actual = this.saga.next().value;
    const expected = call(googleAuthorize);
    expect(actual).to.deep.equal(expected);
  });


  it('then dispatch Authorize Success action when service return result', function() {
    const result = {};

    this.saga.next();
    const actual = this.saga.next(result).value;
    const expected = put(GoogleAuthorizeSuccess(result));

    expect(actual).to.deep.equal(expected);
  });
});
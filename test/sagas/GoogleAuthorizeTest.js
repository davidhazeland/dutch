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

  it('authorize() should call Google Auth service', function() {
    const actual = this.saga.next().value;
    const expected = call(googleAuthorize);
    expect(actual).to.deep.equal(expected);
  });


  it('authorize() dispatch authorize success action when success', function() {
    const response = {
      result: true,
      error: false
    };

    this.saga.next();
    const actual = this.saga.next(response).value;
    const expected = put(GoogleAuthorizeSuccess(response.result));

    expect(actual).to.deep.equal(expected);
  });

  it('authorize() dispatch authorize failure action when failure', function() {
    const response = {
      result: false,
      error: true
    };

    this.saga.next();
    const actual = this.saga.next(response).value;
    const expected = put(GoogleAuthorizeFailure(response.error));

    expect(actual).to.deep.equal(expected);
  });
});

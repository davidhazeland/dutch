/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import {put, call} from 'redux-saga';
import {requestActiveUsers} from 'sagas/OverviewRequestActiveUsers';
import {fetch} from 'gapi/ActiveUsers';
import OverviewFetchActiveUsersRequest from 'actions/OverviewFetchActiveUsersRequest';

//describe('[Saga] Overview Request Active Users', () => {
//  beforeEach(function() {
//    const state = {
//      Google: Immutable.fromJS({
//        analyticsAccounts: [{
//          properties: []
//        }]
//      })
//    };
//    this.saga = requestActiveUsers(() => state);
//  });
//
//  it('should call Batch Active Users service', function(){
//    const actual = this.saga.next().value;
//    const expected = call(batch, {
//      properties: []
//    });
//
//    expect(actual).to.deep.equal(expected);
//  });
//
//  it('should dispatch Receive Active Users action when service return result', function(){
//    const result = [];
//
//    this.saga.next();
//    const actual = this.saga.next(result).value;
//    const expected = put(OverviewReceiveActiveUsers(result));
//
//    expect(actual).to.deep.equal(expected);
//  });
//});

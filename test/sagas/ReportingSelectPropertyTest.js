/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import {put, call} from 'redux-saga';
import {query} from 'services/AdAnalytics';
import {requestAdAnalytics} from 'sagas/ReportingSelectProperty';
import ReportingReceiveAdAnalytics from 'actions/ReportingReceiveAdAnalytics';

describe('[Saga] Reporting Select Property', ()=> {
  beforeEach(function () {
    const state = {
      Google: Immutable.fromJS({
        analyticsAccounts: [
          {
            properties: [
              {
                id: 'UA-55012181-3',
                name: 'Con là tất cả',
                websiteUrl: "http://conlatatca.vn",
                defaultProfileId: '100697044'
              }
            ]
          }
        ]
      }),
      Facebook: Immutable.fromJS({
        adAccounts: [{
          id: '111'
        }]
      }),
      Reporting: Immutable.fromJS({
        selectedProperty: 'UA-55012181-3'
      })
    };
    this.saga = requestAdAnalytics(() => state);
  });

  it('should call Ad Analytics service', function () {
    const actual = this.saga.next().value;
    const expected = call(query, {id: '111'}, {
      id: 'UA-55012181-3',
      name: 'Con là tất cả',
      websiteUrl: "http://conlatatca.vn",
      defaultProfileId: '100697044'
    }, {});


    expect(actual).to.deep.equal(expected);
  });

  it('should dispatch Receive Ad Analytics action when service return result', function () {
    const result = [];

    this.saga.next();
    const actual = this.saga.next(result).value;
    const expected = put(ReportingReceiveAdAnalytics(result));

    expect(actual).to.deep.equal(expected);
  });
});

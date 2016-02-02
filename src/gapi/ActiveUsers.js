/* global gapi */

import Promise from 'bluebird';
import {forOwn} from 'lodash/object';
import {query} from './RealTimeReporting';
import {cache} from '../services/ActiveUsersCaching';

const METRICS = {
  ACTIVE_USERS: 'rt:activeUsers'
};

const DIMENSIONS = {
  DEVICE_CATEGORY: 'rt:deviceCategory'
};


function resolveResponse(id, response) {
  return {
    id: id,
    devices: response.result.rows,
    totalDevices: response.result.totalsForAllResults[METRICS.ACTIVE_USERS]
  }
}


export function handle(responses) {
  const result = [];

  forOwn(responses.result, (response, id) => {
    if (response.result.error) {
      return;
    }
    result.push(resolveResponse(id, response));
  });

  return result;
}


function request(account) {
  return new Promise((resolve, reject) => {
    const batch = gapi.client.newBatch();

    const params = {
      metrics: [METRICS.ACTIVE_USERS],
      dimensions: [DIMENSIONS.DEVICE_CATEGORY]
    };

    account.properties.forEach(property => {
      batch.add(query(property.defaultProfileId, params), {
        id: property.id
      });
    });

    batch.then(responses => {
      resolve(handle(responses));
    }, error => {
      reject(new Error(error));
    });
  });
}


export function fetch(account) {
  return cache(request)(account);
}

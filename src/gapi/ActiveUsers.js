/* global gapi */

import Promise from 'bluebird';
import fromPairs from 'lodash.frompairs';
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
  const defaultDeviceValues = {
    'DESKTOP': 0,
    'MOBILE': 0,
    'TABLET': 0
  };

  const devices = response.result.rows;
  const totalDevices = response.result.totalsForAllResults[METRICS.ACTIVE_USERS];

  return {
    id: id,
    devices: Object.assign(defaultDeviceValues, fromPairs(devices)),
    totalDevices: totalDevices
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

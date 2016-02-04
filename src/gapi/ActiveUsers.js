/* global gapi */

import Promise from 'bluebird';
import fromPairs from 'lodash.frompairs';
import toPairs from 'lodash.topairs';
import {forOwn} from 'lodash/object';
import {query} from './RealTimeReporting';
import {cache} from '../services/ActiveUsersCaching';

const METRICS = {
  ACTIVE_USERS: 'rt:activeUsers'
};

const DIMENSIONS = {
  DEVICE_CATEGORY: 'rt:deviceCategory'
};


function setDefaultDeviceValues(devices) {
  const defaultDeviceValues = {
    'DESKTOP': 0,
    'MOBILE': 0,
    'TABLET': 0
  };

  return toPairs(Object.assign(defaultDeviceValues, fromPairs(devices)));
}


function resolveResponse(id, response) {

  const devices = response.result.rows;
  const totalDevices = response.result.totalsForAllResults[METRICS.ACTIVE_USERS];

  return {
    id: id,
    devices: setDefaultDeviceValues(devices),
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

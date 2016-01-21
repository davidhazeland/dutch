/* global gapi, location */

import Promise from 'bluebird';
import {query} from './RealTimeReporting';


export function fetch(account) {
  return new Promise((resolve, reject) => {
    const batch = gapi.client.newBatch();

    const queryParams = {
      metrics: ['rt:activeUsers'],
      dimensions: ['rt:deviceCategory']
    };

    account.properties.forEach(property => {
      batch.add(query(property.defaultProfileId, queryParams), {
        id: property.id
      });
    });

    batch.then(response => {
      resolve(handle(response));
    }, error => {
      reject(new Error(error));
    });
  });
}


function handle(response) {
  const result = [];

  for (const id in response.result) {
    const res = response.result[id];
    if (res.error) {
      continue;
    }
    result.push({
      id: id,
      devices: res.result.rows,
      totalDevices: res.result.totalsForAllResults['rt:activeUsers']
    });
  }

  return result;
}


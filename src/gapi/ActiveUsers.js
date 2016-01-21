/* global gapi, location */

import Promise from 'bluebird';
import {query} from './RealTimeReporting';


function handle(response) {
  const data = [];

  for (const id in response.result) {
    const res = response.result[id];
    if (res.result.error) {
      continue;
    }
    data.push({
      id: id,
      devices: res.result.rows,
      totalDevices: res.result.totalsForAllResults['rt:activeUsers']
    });
  }

  return data;
}


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

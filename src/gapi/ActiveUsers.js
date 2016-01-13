/* global gapi */

import _ from 'lodash';
import Promise from 'bluebird';
import {query} from './RealTimeReporting';


function mapViewId(properties) {
  return properties.map(property => {
    return property.views[0].id;
  });
}

function mapResult(response) {
  const result = [];

  for (const id in response.result) {
    const data = response.result[id].result;
    result.push({
      id: id,
      rows: data.rows,
      total: data.totalsForAllResults['rt:activeUsers']
    });
  }

  return result;
}


export function batch(account) {
  return new Promise((resolve, reject) => {
    const batch = gapi.client.newBatch();

    const viewIds = mapViewId(account.properties);
    const queryParams = {
      metrics: ['rt:activeUsers'],
      dimensions: ['rt:deviceCategory']
    };

    _.forEach(viewIds, (viewId) => {
      batch.add(query(viewId, queryParams), {
        id: viewId
      });
    });

    batch.then(response => {
      resolve(mapResult(response));
    }, err => {
      reject(new Error(err));
    });
  });
}

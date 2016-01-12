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
  return response;
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
      batch.add(query(viewId, queryParams));
    });

    batch.then(response => {
      resolve(mapResult(response));
    }, err => {
      reject(err);
    });
  });
}

/* global gapi */

import config from 'config';

export function get() {
  const batch = gapi.client.newBatch();
  const id = `ga:${config.GOOGLE_ANALYTICS_VIEW_ID}`;
  const secondId = 'ga:111940504';

  const cltc = request(id);
  const tt = request(secondId);

  batch.add(cltc);
  batch.add(tt);

  batch.then(result => {
    console.log(result);
  }, err => {
    console.log(err);
  });
}

function request(viewId) {
  return gapi.client.analytics.data.realtime.get({
    ids: viewId,
    metrics: 'rt:activeUsers',
    dimensions: 'rt:deviceCategory'
  });
}

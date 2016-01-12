/* global gapi */

export function query(viewId, queryParams) {
  const metrics = queryParams.metrics.join(',');
  const dimensions = queryParams.dimensions.join(',');

  return gapi.client.analytics.data.realtime.get({
    ids: `ga:${viewId}`,
    metrics: metrics,
    dimensions: dimensions
  });
}

/* global gapi */

export function resolveId(id) {
  return `ga:${id}`;
}

export function query(viewId, {metrics, dimensions}) {
  const params = {
    ids: resolveId(viewId),
    metrics: metrics,
    dimensions: dimensions
  };

  return gapi.client.analytics.data.realtime.get(params);
}

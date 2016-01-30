/* global gapi */

export function resolveId(id) {
  return `ga:${id}`;
}

export function resolveMetric(metrics) {
  return metrics.join(',');
}

export function resolveDimension(dimensions) {
  return dimensions.join(',');
}

export function query(viewId, {metrics, dimensions}) {
  const params = {
    ids: resolveId(viewId),
    metrics: resolveMetric(metrics),
    dimensions: resolveDimension(dimensions)
  };

  return gapi.client.analytics.data.realtime.get(params);
}

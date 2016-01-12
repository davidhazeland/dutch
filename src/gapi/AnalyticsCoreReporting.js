/* global gapi */

/**
 * Query Google Analytics API
 * @param viewId
 * @param queryParams
 * {
 *  startDate,
 *  endDate,
 *  metrics: [
 *
 *  ],
 *  dimensions: [
 *
 *  ],
 *  sort: {
 *    name,
 *    direction
 *  },
 *  filter: [
 *    {
 *      name,
 *      expression
 *    }
 *  ]
 * }
 * @returns Promise
 */
export function query(viewId, queryParams) {
  const id = `ga:${viewId}`;
  const startDate = queryParams.startDate;
  const endDate = queryParams.endDate;
  const metrics = queryParams.metrics.join(',');
  const dimensions = queryParams.dimensions.join(',');
  const sort = `${queryParams.sort.direction}${queryParams.sort.name}`;
  const filters = queryParams.filters.map(filter => {
    const operator = '=~'; // Regular Expression
    return `${filter.name}${operator}${filter.expression}`
  }).join(',');

  return gapi.client.analytics.data.ga.get({
    'ids': id,
    'start-date': startDate,
    'end-date': endDate,
    'metrics': metrics,
    'dimensions': dimensions,
    'sort': sort,
    'filters': filters,
    'max-results': 10
  });
}



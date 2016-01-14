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
  const params = {
    'ids': `ga:${viewId}`,
    'start-date': queryParams.startDate || '30daysAgo',
    'end-date': queryParams.endDate || 'today',
    'metrics': queryParams.metrics.join(','),
    'max-results': queryParams.maxResults || 10000
  };

  if (queryParams.dimensions) {
    params.dimensions = queryParams.dimensions.join(',');
  }

  if (queryParams.sort) {
    params.sort = `${queryParams.sort.direction}${queryParams.sort.name}`;
  }

  if (queryParams.filters) {
    params.filters = queryParams.filters.map(filter => {
      const operator = '=~'; // Regular Expression
      return `${filter.name}${operator}${filter.expression}`
    }).join(',');
  }

  return gapi.client.analytics.data.ga.get(params);
}

//import Promise from 'bluebird';

import {query as queryAnalyticsReporting} from './AnalyticsCoreReporting';


export function query(viewId, queryParams) {
  const params = {
    startDate: queryParams.startDate,
    endDate: queryParams.endDate,
    metrics: ['ga:pageViews'],
    dimensions: ['ga:pagePath'],
    sort: {
      name: 'ga:pageViews',
      direction: '-'
    }
  };

  return queryAnalyticsReporting(viewId, params);
}



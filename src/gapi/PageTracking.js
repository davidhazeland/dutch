import Promise from 'bluebird';
import config from 'config';

import {query as queryAnalyticsReporting} from './AnalyticsCoreReporting';

function mapParams(params) {
  const sort = {
    name: 'ga:adsenseRevenue',
    direction: params.desc ? '-' : ''
  };
  const filters = [
    {
      name: 'ga:pagePath',
      expression: params.keyword
    }
  ];

  return {
    startDate: params.startDate,
    endDate: params.endDate,
    sort: sort,
    filters: filters
  }
}


export function query(params) {
  const pageMetrics = ['ga:adsenseRevenue'];
  const pageDimensions = ['ga:pagePath'];

  const paramsMapped = mapParams(params);

  const analyticsReporting = queryAnalyticsReporting(config.GOOGLE_ANALYTICS_VIEW_ID, {
    metrics: pageMetrics,
    dimensions: pageDimensions,
    startDate: paramsMapped.startDate,
    endDate: paramsMapped.endDate,
    sort: paramsMapped.sort,
    filters: paramsMapped.filters
  });

  return new Promise((resolve, reject) => {
    analyticsReporting.then(response => {
        resolve(response.result);
      })
      .then(null, (err) => {
        reject(err);
      });
  });
}

import Promise from 'bluebird';

import {query as queryAnalyticsReporting} from './AnalyticsCoreReporting';

function mapParams(params) {
  const sort = {
    name: 'ga:pageViews',
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


export function query(viewId, params) {
  const pageMetrics = ['ga:pageViews'];
  const pageDimensions = ['ga:pagePath'];

  const paramsMapped = mapParams(params);

  return queryAnalyticsReporting(viewId, {
    metrics: pageMetrics,
    dimensions: pageDimensions,
    startDate: paramsMapped.startDate,
    endDate: paramsMapped.endDate,
    sort: paramsMapped.sort,
    filters: paramsMapped.filters
  });

  //return new Promise((resolve, reject) => {
  //  analyticsReporting.then(response => {
  //      resolve(response);
  //    })
  //    .then(null, (err) => {
  //      reject(err);
  //    });
  //});
}



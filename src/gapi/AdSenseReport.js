/* global gapi, location */

import Promise from 'bluebird';

function query() {
  return gapi.client.adsense.reports.generate({
    'startDate': 'today',
    'endDate': 'today',
    'metric': ['EARNINGS'],
    'dimension': ['DOMAIN_NAME'],
    'useTimezoneReporting': true
  });
}


export function fetch(account) {
  return new Promise((resolve, reject) => {
    query().then(response => {
      resolve(handle(response, account));
    }, error => {
      reject(error);
    });
  });
}


function handle(response, account) {
  const result = [];

  const reports = response.result.rows;
  const properties = account.properties;

  properties.forEach((property) => {
    const report = reports.find(r => isMatchDomain(property.websiteUrl, r[0]));
    result.push({
      id: property.id,
      revenue: report[1]
    });
  });

  return result;
}


function isMatchDomain(url, domain) {
  const d = url.split('/')[2].split(':')[0];
  return d === domain;
}

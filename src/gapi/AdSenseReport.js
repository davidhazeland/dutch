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


function isMatchDomain(url, domain) {
  const urlDomain = url.split('/')[2].split(':')[0];
  return urlDomain === domain;
}


function handle(response, account) {
  const data = [];

  const reports = response.result.rows;
  const properties = account.properties;

  properties.forEach((property) => {
    const report = reports.find(r => {
      const domain = r[0];
      return isMatchDomain(property.websiteUrl, domain);
    });

    const revenue = report[1];
    data.push({
      id: property.id,
      revenue: revenue
    });
  });

  return data;
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

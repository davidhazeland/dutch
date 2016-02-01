import Promise from 'bluebird';
import {generateReports} from './AdSenseManagement';

function isMatchDomain(url, domain) {
  const urlDomain = url.split('/')[2].split(':')[0];
  return urlDomain === domain;
}


export function handle(response, account) {
  const result = [];

  const reports = response.result.rows;

  account.properties.forEach(property => {
    const domainIndex = 0;
    const earningIndex = 1;

    const report = reports.find(r => {
      const domain = r[domainIndex];
      return isMatchDomain(property.websiteUrl, domain);
    });

    result.push({
      id: property.id,
      earning: report[earningIndex]
    });
  });

  return result;
}


export function fetch(account) {
  return new Promise((resolve, reject) => {
    const params = {
      metrics: ['EARNINGS'],
      dimensions: ['DOMAIN_NAME']
    };

    generateReports(params).then(response => {
      resolve(handle(response, account));
    }, error => {
      reject(error);
    });
  });
}

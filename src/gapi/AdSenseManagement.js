/* global gapi */

function generateReport() {
  return gapi.client.adsense.reports.generate({
    'startDate': '2016-01-13',
    'endDate': '2016-01-13',
    'metric': ['EARNINGS'],
    'dimension': ['DOMAIN_NAME']
  });
}


export function generateReportToday() {
  generateReport();
}

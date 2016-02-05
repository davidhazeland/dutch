/* global gapi */

export function generateReports({
  startDate = 'today',
  endDate = 'today',
  metrics,
  dimensions}) {

  const params = {
    'startDate': startDate,
    'endDate': endDate,
    'metric': metrics,
    'dimension': dimensions,
    'useTimezoneReporting': true
  };

  return gapi.client.adsense.reports.generate(params);
}

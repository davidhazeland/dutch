const sagas = [
  require('./ReportingSelectProperty'),
  require('./OverviewFetchAdSenseReportRequest'),
  require('./OverviewFetchActiveUsersRequest'),
  require('./FacebookAuthorize'),
  require('./FacebookLogin'),
  require('./GoogleAuthorizeRequest'),
  require('./GoogleLoginRequest')
];

module.exports = sagas.map(saga => {
  return saga.default;
});

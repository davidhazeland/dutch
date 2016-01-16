const sagas = [
  require('./ReportingSelectProperty'),
  require('./OverviewRequestActiveUsers'),
  require('./FacebookAuthorize'),
  require('./FacebookLogin'),
  require('./GoogleAuthorizeRequest'),
  require('./GoogleSignIn')
];

module.exports = sagas.map(saga => {
  return saga.default;
});

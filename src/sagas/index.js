const sagas = [
  require('./ReportingSelectProperty'),
  require('./OverviewRequestActiveUsers'),
  require('./FacebookAuthorize'),
  require('./FacebookLogin'),
  require('./GoogleAuthorize'),
  require('./GoogleSignIn')
];

module.exports = sagas.map(saga => {
  return saga.default;
});
